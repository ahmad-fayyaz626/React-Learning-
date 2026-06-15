# Weather Dashboard

A modern weather application built with React, Redux, Redux Thunk, Axios, and Tailwind CSS. The application provides real-time weather information and forecast data for cities around the world through the OpenWeather API.

## Features

* Search weather by city name
* Current weather conditions
* Multi-hour weather forecast
* Responsive design for mobile, tablet, and desktop
* Global state management with Redux
* Asynchronous API handling using Redux Thunk
* Error handling and loading states
* Clean and modern user interface

## Tech Stack

### Frontend

* React
* Redux
* Redux Thunk
* Axios
* Tailwind CSS
* DaisyUI
* React Icons

### API

* OpenWeather API

## Project Structure

```bash
src/
├── Actions/
│   └── WeatherActions.js
├── Components/
│   ├── Header.jsx
│   ├── SearchBox.jsx
│   ├── CurrentWeather.jsx
│   └── ForecastWeather.jsx
├── Constants/
│   └── WeatherConstants.js
├── Reducers/
│   └── WeatherReducer.js
├── Store/
│   └── Store.js
├── App.jsx
└── main.jsx
```

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project directory:

```bash
cd weather-dashboard
```

Install dependencies:

```bash
npm install
```

Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_openweather_api_key
```

Start the development server:

```bash
npm run dev
```

## Environment Variables

| Variable     | Description         |
| ------------ | ------------------- |
| VITE_API_KEY | OpenWeather API Key |

## Learning Outcomes

This project demonstrates:

* React component architecture
* State management with Redux
* Async operations with Redux Thunk
* API integration using Axios
* Responsive UI development
* Error and loading state management
* Modern frontend development practices

## Future Improvements

* Geolocation support
* 7-day forecast
* Weather maps
* Unit conversion (°C / °F)
* Search history
* Dark mode
* Favorite cities
* Weather alerts

## Screenshots

Add screenshots of the application here.

## License

This project is open source and available under the MIT License.
