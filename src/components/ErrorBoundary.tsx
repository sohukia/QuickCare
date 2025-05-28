"use client";
import React from "react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log error info here if needed
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-full space-y-4 p-4 bg-red-100 rounded-xl shadow max-w-2xl mx-auto mt-8">
          <span className="text-red-600 text-lg font-medium">Une erreur inattendue est survenue.</span>
          <span className="text-sm text-red-500">{this.state.error?.message}</span>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
