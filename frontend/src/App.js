import { useState } from 'react';
import './App.css';

function App() {
  const [repoUrl, setRepoUrl] = useState('');
  const [guide, setGuide] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const handleAnalyze = async (e) => {
    e.preventDefault();

    if (!repoUrl.trim()) {
      setError('Please enter a GitHub repository URL');
      return;
    }

    setLoading(true);
    setError('');
    setGuide('');

    try {
      const response = await fetch(`${API_URL}/api/analyze`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ repoUrl: repoUrl.trim() })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to analyze repository');
      }

      const data = await response.json();
      setGuide(data.guide);
    } catch (err) {
      setError(err.message || 'An error occurred');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(guide);
    alert('Guide copied to clipboard!');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>📦 Gitstaller</h1>
        <p className="subtitle">AI-Powered GitHub Installation Guide Generator</p>
        <p className="description">
          Paste any GitHub repository link and get a step-by-step installation guide
          for non-technical users (no terminal knowledge required!)
        </p>
      </header>

      <main className="container">
        <form onSubmit={handleAnalyze} className="form">
          <div className="form-group">
            <label htmlFor="repoUrl">GitHub Repository URL</label>
            <input
              id="repoUrl"
              type="text"
              placeholder="https://github.com/username/repository"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              className="input"
              disabled={loading}
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? '⏳ Analyzing...' : '🚀 Generate Installation Guide'}
          </button>
        </form>

        {error && (
          <div className="error-message">
            ❌ {error}
          </div>
        )}

        {guide && (
          <div className="guide-container">
            <div className="guide-header">
              <h2>✅ Installation Guide Generated!</h2>
              <button className="btn btn-secondary" onClick={copyToClipboard}>
                📋 Copy to Clipboard
              </button>
            </div>
            <pre className="guide-content">
              {guide}
            </pre>
          </div>
        )}

        {!guide && !error && !loading && (
          <div className="empty-state">
            <p>👆 Enter a GitHub repository URL above to get started</p>
            <p className="hint">Example: https://github.com/facebook/react</p>
          </div>
        )}
      </main>

      <footer className="footer">
        <p>Made with ❤️ for the AWS Hackathon | Gitstaller v1.0</p>
        <p>
          <a href="https://github.com/poorav007/gitstaller" target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
