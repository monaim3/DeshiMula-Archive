import React from 'react';
import PropTypes from 'prop-types';
import { FileQuestion } from 'lucide-react';

const EmptyState = ({ message = "No data available at the moment." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 rounded-lg border border-dashed">
      <FileQuestion className="h-16 w-16 text-muted-foreground mb-4" />
      <p className="text-lg font-medium text-center">{message}</p>
    </div>
  );
};

EmptyState.propTypes = {
  message: PropTypes.string,
};

export default EmptyState;