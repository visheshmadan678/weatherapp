import { FaTemperatureHigh, FaWind, FaTint, FaCompass, FaCloud, FaEye, FaSun, FaMoon } from 'react-icons/fa';

function WeatherCard({ data }) {
  const getTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="max-w-4xl mx-auto slide-up">
      <div className="weather-card glass-effect rounded-3xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-white mb-2">{data.name}</h2>
          <p className="text-xl text-blue-200 capitalize">{data.weather[0].description}</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="relative mb-8 md:mb-0">
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
              alt={data.weather[0].description}
              className="w-48 h-48"
            />
            <div className="absolute bottom-0 right-0 text-6xl font-bold gradient-text">
              {Math.round(data.main.temp)}°C
            </div>
          </div>

          <div className="weather-grid w-full md:w-2/3">
            <div className="highlight-card glass-effect rounded-2xl p-4">
              <div className="flex items-center mb-2">
                <FaTemperatureHigh className="text-yellow-400 w-5 h-5 mr-2" />
                <span className="text-gray-300">Feels Like</span>
              </div>
              <span className="text-2xl font-bold text-white">{Math.round(data.main.feels_like)}°C</span>
            </div>

            <div className="highlight-card glass-effect rounded-2xl p-4">
              <div className="flex items-center mb-2">
                <FaTint className="text-blue-400 w-5 h-5 mr-2" />
                <span className="text-gray-300">Humidity</span>
              </div>
              <span className="text-2xl font-bold text-white">{data.main.humidity}%</span>
            </div>

            <div className="highlight-card glass-effect rounded-2xl p-4">
              <div className="flex items-center mb-2">
                <FaWind className="text-green-400 w-5 h-5 mr-2" />
                <span className="text-gray-300">Wind Speed</span>
              </div>
              <span className="text-2xl font-bold text-white">{data.wind.speed} km/h</span>
            </div>

            <div className="highlight-card glass-effect rounded-2xl p-4">
              <div className="flex items-center mb-2">
                <FaCompass className="text-purple-400 w-5 h-5 mr-2" />
                <span className="text-gray-300">Pressure</span>
              </div>
              <span className="text-2xl font-bold text-white">{data.main.pressure} hPa</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="glass-effect rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Additional Info</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaCloud className="text-gray-400 w-5 h-5 mr-3" />
                  <span className="text-gray-300">Cloudiness</span>
                </div>
                <span className="text-white font-semibold">{data.clouds.all}%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaEye className="text-gray-400 w-5 h-5 mr-3" />
                  <span className="text-gray-300">Visibility</span>
                </div>
                <span className="text-white font-semibold">{(data.visibility / 1000).toFixed(1)} km</span>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Sun Schedule</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaSun className="text-yellow-400 w-5 h-5 mr-3" />
                  <span className="text-gray-300">Sunrise</span>
                </div>
                <span className="text-white font-semibold">{getTime(data.sys.sunrise)}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaMoon className="text-gray-400 w-5 h-5 mr-3" />
                  <span className="text-gray-300">Sunset</span>
                </div>
                <span className="text-white font-semibold">{getTime(data.sys.sunset)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;