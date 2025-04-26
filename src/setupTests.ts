
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

// Mock ResizeObserver since it's not available in test environment
global.ResizeObserver = require('resize-observer-polyfill');

// Add missing jest types
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveClass(className: string): R;
      toBeDisabled(): R; // Add this line to support the toBeDisabled() matcher
    }
  }
}

// If you want to add the actual implementation for toBeDisabled
expect.extend({
  toBeDisabled(received) {
    const pass = received.hasAttribute('disabled') || 
                 received.getAttribute('aria-disabled') === 'true';
    
    if (pass) {
      return {
        message: () => `expected element not to be disabled`,
        pass: true
      };
    } else {
      return {
        message: () => `expected element to be disabled`,
        pass: false
      };
    }
  }
});

