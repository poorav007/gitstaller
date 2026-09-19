const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Gitstaller backend is running' });
});

// Main analyze endpoint
app.post('/api/analyze', async (req, res) => {
  try {
    const { repoUrl } = req.body;

    if (!repoUrl) {
      return res.status(400).json({ error: 'Repository URL is required' });
    }

    // Extract owner and repo from URL
    const urlParts = repoUrl.replace('https://github.com/', '').split('/');
    const owner = urlParts[0];
    const repo = urlParts[1];

    if (!owner || !repo) {
      return res.status(400).json({ error: 'Invalid GitHub URL format' });
    }

    console.log(`Analyzing: ${owner}/${repo}`);

    // Fetch README from GitHub
    const readmeRes = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      {
        headers: { Accept: 'application/vnd.github.v3.raw' }
      }
    );

    const readme = readmeRes.data;

    // Generate installation guide based on README
    const guide = generateGuide(readme, repo, owner);

    // Save to mock database (in production, use DynamoDB)
    console.log(`Generated guide for ${repo}`);

    res.json({
      success: true,
      repo,
      guide,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error:', error.message);

    if (error.response?.status === 404) {
      return res.status(404).json({
        error: 'Repository not found or README not available'
      });
    }

    res.status(500).json({
      error: 'Failed to analyze repository',
      message: error.message
    });
  }
});

function generateGuide(readme, repo, owner) {
  let guide = `📦 INSTALLATION GUIDE FOR ${repo.toUpperCase()}\n`;
  guide += `================================================\n\n`;

  // Detect project type
  const isNodeProject = readme.includes('package.json') || readme.includes('npm');
  const isPythonProject = readme.includes('requirements.txt') || readme.includes('pip');
  const isDockerProject = readme.includes('Dockerfile') || readme.includes('docker');

  guide += `📋 PROJECT TYPE DETECTED:\n`;
  if (isNodeProject) guide += `✓ Node.js/JavaScript Project\n`;
  if (isPythonProject) guide += `✓ Python Project\n`;
  if (isDockerProject) guide += `✓ Docker Support\n`;
  guide += `\n`;

  guide += `🚀 INSTALLATION STEPS:\n\n`;

  guide += `STEP 1: Prerequisites\n`;
  guide += `─────────────────────\n`;
  guide += `Make sure you have installed:\n`;
  if (isNodeProject) {
    guide += `• Node.js (Download: https://nodejs.org/)\n`;
    guide += `• npm (comes with Node.js)\n`;
  }
  if (isPythonProject) {
    guide += `• Python 3.8+ (Download: https://www.python.org/downloads/)\n`;
    guide += `• pip (Python package manager)\n`;
  }
  if (isDockerProject) {
    guide += `• Docker (Download: https://www.docker.com/)\n`;
  }
  guide += `• Git (Download: https://git-scm.com/)\n\n`;

  guide += `STEP 2: Clone Repository\n`;
  guide += `────────────────────────\n`;
  guide += `Open your terminal/command prompt and run:\n`;
  guide += `\`\`\`\n`;
  guide += `git clone https://github.com/${owner}/${repo}.git\n`;
  guide += `cd ${repo}\n`;
  guide += `\`\`\`\n\n`;

  guide += `STEP 3: Install Dependencies\n`;
  guide += `─────────────────────────────\n`;
  if (isNodeProject) {
    guide += `For Node.js projects, run:\n`;
    guide += `\`\`\`\n`;
    guide += `npm install\n`;
    guide += `\`\`\`\n\n`;
  }
  if (isPythonProject) {
    guide += `For Python projects, run:\n`;
    guide += `\`\`\`\n`;
    guide += `pip install -r requirements.txt\n`;
    guide += `\`\`\`\n\n`;
  }
  if (isDockerProject) {
    guide += `For Docker projects, run:\n`;
    guide += `\`\`\`\n`;
    guide += `docker build -t ${repo} .\n`;
    guide += `docker run -p 3000:3000 ${repo}\n`;
    guide += `\`\`\`\n\n`;
  }

  guide += `STEP 4: Start the Project\n`;
  guide += `─────────────────────────\n`;
  guide += `Check the README.md for specific start command.\n`;
  guide += `Commonly:\n`;
  if (isNodeProject) guide += `\`npm start\` or \`npm run dev\`\n`;
  if (isPythonProject) guide += `\`python main.py\` or \`python -m app\`\n`;
  guide += `\n`;

  guide += `🎉 YOU'RE DONE!\n`;
  guide += `===============\n`;
  guide += `The project should now be running. Check the console output for the URL.\n\n`;

  guide += `❓ TROUBLESHOOTING:\n`;
  guide += `• Clear npm cache: \`npm cache clean --force\`\n`;
  guide += `• Reinstall node modules: Delete \`node_modules\` folder and run \`npm install\` again\n`;
  guide += `• Check Node version: \`node --version\` (should be v14+)\n`;
  guide += `• Check Python version: \`python --version\` (should be 3.8+)\n\n`;

  guide += `📚 NEED MORE HELP?\n`;
  guide += `Visit the repository: https://github.com/${owner}/${repo}\n`;

  return guide;
}

// Lambda handler for AWS (when deployed)
exports.handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { repoUrl } = body;

    // Call the same logic
    const urlParts = repoUrl.replace('https://github.com/', '').split('/');
    const owner = urlParts[0];
    const repo = urlParts[1];

    const readmeRes = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/readme`,
      { headers: { Accept: 'application/vnd.github.v3.raw' } }
    );

    const guide = generateGuide(readmeRes.data, repo, owner);

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, guide }),
      headers: { 'Content-Type': 'application/json' }
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
      headers: { 'Content-Type': 'application/json' }
    };
  }
};

app.listen(PORT, () => {
  console.log(`✅ Gitstaller backend running on port ${PORT}`);
  console.log(`🚀 Server: http://localhost:${PORT}`);
  console.log(`🔗 API: POST http://localhost:${PORT}/api/analyze`);
});
