function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center my-12">
      <div className="w-16 h-16 border-4 border-blue-400 border-t-transparent rounded-full spin" />
      <p className="mt-4 text-blue-200 text-lg animate-pulse">Loading weather data...</p>
    </div>
  );
}

export default LoadingSpinner;