import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import RecentSearches from './components/RecentSearches';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';

const API_KEY = '0784518ae545a79041c29050dde52e3b';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const weatherCardRef = useRef(null);
  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem('recentSearches');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  }, [recentSearches]);

  const addToRecentSearches = (city) => {
    setRecentSearches(prev => {
      const filtered = prev.filter(item => item !== city);
      return [city, ...filtered].slice(0, 5);
    });
  };

  const scrollToWeather = () => {
    if (weatherCardRef.current) {
      weatherCardRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await axios.get(API_URL, {
        params: {
          q: city,
          appid: API_KEY,
          units: 'metric'
        }
      });

      setWeatherData(response.data);
      addToRecentSearches(city);
      
      // Add a small delay to ensure the weather card is rendered
      setTimeout(scrollToWeather, 100);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to fetch weather data');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto fade-in">
        <h1 className="text-6xl font-bold text-center mb-2 gradient-text">
          Weather Dashboard
        </h1>
        <p className="text-center text-gray-400 text-lg mb-12">
          Get real-time weather updates for any city worldwide
        </p>

        <SearchBar onSearch={fetchWeather} />
        
        <RecentSearches 
          searches={recentSearches} 
          onSearchClick={fetchWeather} 
        />

        {loading && <LoadingSpinner />}
        
        {error && <ErrorMessage message={error} />}
        
        {weatherData && !loading && !error && (
          <div ref={weatherCardRef}>
            <WeatherCard data={weatherData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;