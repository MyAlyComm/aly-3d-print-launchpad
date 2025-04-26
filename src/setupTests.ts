
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
    }
  }
}
