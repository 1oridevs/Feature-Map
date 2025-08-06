import React from 'react'

const LoadingSpinner = ({ size = 'md', text = 'Loading...' }) => {
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className={`${sizeClasses[size]} animate-spin rounded-full border-2 border-secondary-200 border-t-primary-600`}></div>
      {text && (
        <p className="text-sm text-secondary-600">{text}</p>
      )}
    </div>
  )
}

export default LoadingSpinner 