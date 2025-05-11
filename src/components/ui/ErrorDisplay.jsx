import React from 'react';
import PropTypes from 'prop-types';
import { AlertTriangle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';

const ErrorDisplay = ({ 
  message = "Something went wrong while fetching data.", 
  onRetry 
}) => {
  return (
    <Alert variant="destructive" className="animate-in fade-in">
      <AlertTriangle className="h-5 w-5" />
      <AlertTitle className="font-semibold">Error</AlertTitle>
      <AlertDescription className="mt-2">
        <p>{message}</p>
        {onRetry && (
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onRetry} 
            className="mt-2"
          >
            Try Again
          </Button>
        )}
      </AlertDescription>
    </Alert>
  );
};

ErrorDisplay.propTypes = {
  message: PropTypes.string,
  onRetry: PropTypes.func,
};

export default ErrorDisplay;