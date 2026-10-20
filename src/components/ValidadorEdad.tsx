import React from 'react';

export const ValidadorEdad = () => {
  // Evalúa si una edad es mayor o igual a 18
  const esMayorDeEdad = (edad: number): boolean => edad >= 18;

  // Obtiene un mensaje sobre la capacidad de votar según la edad
  const obtenerMensaje = (edad: number): string => {
    return esMayorDeEdad(edad)
      ? 'Puede votar'
      : `Le faltan ${18 - edad} años`;
  };

  const edades = [15, 18, 25, 12];

  return (
    <div className="p-4 bg-white rounded-lg shadow border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Validador de Edad</h3>
      {edades.map((edad, index) => (
        <p key={index}>
          Edad {edad}: {obtenerMensaje(edad)}
        </p>
      ))}
    </div>
  );
};