
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ErrorBoundary from './components/ErrorBoundary.tsx'

// Error handling for rendering process
const renderApp = () => {
  try {
    const rootElement = document.getElementById('root');
    
    if (!rootElement) {
      throw new Error('Root element not found');
    }
    
    const root = createRoot(rootElement);
    root.render(
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    );
    
    console.log('App rendered successfully');
  } catch (error) {
    console.error('Failed to render application:', error);
    
    // Attempt to show a basic error message if rendering fails
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="font-family: system-ui, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #e11d48;">Unable to load application</h2>
          <p>There was a problem initializing the application. Please try refreshing the page.</p>
          <div style="margin: 20px 0; padding: 10px; background: #f3f4f6; border-radius: 4px; overflow: auto;">
            ${error instanceof Error ? error.message : 'Unknown error'}
          </div>
          <button onclick="window.location.reload()" 
                  style="background: #2563eb; color: white; border: none; padding: 8px 16px; border-radius: 4px; cursor: pointer;">
            Reload Page
          </button>
        </div>
      `;
    }
  }
};

renderApp();
