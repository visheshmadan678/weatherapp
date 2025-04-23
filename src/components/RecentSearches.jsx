function RecentSearches({ searches, onSearchClick }) {
  if (searches.length === 0) return null;

  return (
    <div className="max-w-2xl mx-auto mb-8 slide-up">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-blue-200">Recent Searches</h3>
        <div className="h-px flex-1 bg-blue-200/20 ml-4"></div>
      </div>
      <div className="flex flex-wrap gap-3">
        {searches.map((city, index) => (
          <button
            key={`${city}-${index}`}
            onClick={() => onSearchClick(city)}
            className="px-6 py-3 rounded-xl glass-effect text-white text-base
                     hover:bg-white/10 transition-all duration-300 focus:outline-none
                     focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            {city}
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecentSearches;