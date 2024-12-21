import React, { ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({ children }) => {
  const [hasError, setHasError] = React.useState(false);

  const handleError = () => {
    setHasError(true);
  };

  return (
    <React.Suspense
      fallback={
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          Something went wrong. Please try again later.
        </div>
      }
    >
      {!hasError ? children : <h2>Oops! Something went wrong.</h2>}
    </React.Suspense>
  );
};

export default ErrorBoundary;
