function ErrorMessage({ message }) {
  return (
    <div className="max-w-2xl mx-auto scale-in">
      <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/20 text-red-200 px-8 py-6 rounded-2xl">
        <div className="flex items-center">
          <svg className="w-6 h-6 text-red-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-lg">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default ErrorMessage;