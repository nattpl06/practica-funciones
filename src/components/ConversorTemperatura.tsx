import React from 'react';

export const ConversorTemperatura = () => {
  // Convierte grados Celsius a Fahrenheit
  const celsiusAFahrenheit = (c: number): number => (c * 9) / 5 + 32;

  // Convierte grados Fahrenheit a Celsius
  const fahrenheitACelsius = (f: number): number => ((f - 32) * 5) / 9;

  const temperatura = 25;

  return (
    <div className="p-4 bg-white rounded-lg shadow border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Conversor</h3>
      <p>{temperatura}°C = {celsiusAFahrenheit(temperatura)}°F</p>
      <p>100°F = {fahrenheitACelsius(100).toFixed(2)}°C</p>
    </div>
  );
};