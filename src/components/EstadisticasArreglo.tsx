import React from 'react';

export const EstadisticasArreglo = () => {
  // Calcula el promedio de un arreglo numérico
  const calcularPromedio = (nums: number[]): number => {
    if (nums.length === 0) return 0;
    const suma = nums.reduce((acc, curr) => acc + curr, 0);
    return suma / nums.length;
  };

  // Obtiene el número máximo presente en el arreglo
  const encontrarMaximo = (nums: number[]): number => {
    if (nums.length === 0) return 0;
    return Math.max(...nums);
  };

  // Obtiene el número mínimo presente en el arreglo
  const encontrarMinimo = (nums: number[]): number => {
    if (nums.length === 0) return 0;
    return Math.min(...nums);
  };

  const numeros = [8, 3, 15, 7, 22, 11, 4];

  return (
    <div className="p-4 bg-white rounded-lg shadow border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Estadísticas</h3>
      <p>Números: [{numeros.join(', ')}]</p>
      <p>Promedio: {calcularPromedio(numeros).toFixed(2)}</p>
      <p>Máximo: {encontrarMaximo(numeros)}</p>
      <p>Mínimo: {encontrarMinimo(numeros)}</p>
    </div>
  );
};