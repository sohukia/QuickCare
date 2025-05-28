import React from "react";

export interface ErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="text-[#317359] bg-[#3c8a6b] border border-[#32745a] rounded p-4 mt-6 text-center font-medium">
    {message}
  </div>
);

export default ErrorMessage;
