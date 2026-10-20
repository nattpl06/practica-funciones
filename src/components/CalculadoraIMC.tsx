import React from 'react';

export const CalculadoraIMC = () => {
  // Calcula el Índice de Masa Corporal dado el peso (kg) y la altura (m)
  const calcularIMC = (peso: number, altura: number): number => peso / (altura * altura);

  // Clasifica el resultado del IMC en rangos de salud
  const clasificarIMC = (imc: number): string => {
    if (imc < 18.5) return 'Bajo peso';
    if (imc < 25) return 'Normal';
    if (imc < 30) return 'Sobrepeso';
    return 'Obesidad';
  };

  const peso = 70;
  const altura = 1.75;
  const imc = calcularIMC(peso, altura);

  return (
    <div className="p-4 bg-white rounded-lg shadow border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Calculadora de IMC</h3>
      <p>Peso: {peso} kg | Altura: {altura} m</p>
      <p>IMC: {imc.toFixed(2)}</p>
      <p>Clasificación: <strong>{clasificarIMC(imc)}</strong></p>
    </div>
  );
};