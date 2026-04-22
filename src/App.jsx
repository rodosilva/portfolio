import { useEffect, useState } from 'react';
import { loadMarkdown } from './utils/markdown-loader';

function App() {
  const [html, setHtml] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadContent = async () => {
      const content = await loadMarkdown();
      setHtml(content);
      setLoading(false);
    };
    loadContent();
  }, []);

  return (
    <div>
      <nav style={{ borderBottom: '1px solid #ccc', padding: '20px', background: '#f9f9f9' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#0066cc', margin: 0 }}>
            Blog
          </h1>
        </div>
      </nav>

      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '40px 20px', minHeight: 'calc(100vh - 200px)' }}>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <div
            dangerouslySetInnerHTML={{ __html: html }}
            style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#333',
            }}
          />
        )}
      </main>

      <footer style={{ borderTop: '1px solid #ccc', padding: '20px', textAlign: 'center', color: '#666', background: '#f9f9f9' }}>
        <p>(c) 2024 Mi Blog</p>
      </footer>
    </div>
  );
}

export default App;
