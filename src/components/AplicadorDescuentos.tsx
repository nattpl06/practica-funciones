import React from 'react';

export const AplicadorDescuentos = () => {
  // Función de orden superior que ejecuta un callback de descuento y retorna el precio final
  const aplicarDescuento = (
    precio: number,
    calcularDescuento: (p: number) => number
  ): number => {
    return precio - calcularDescuento(precio);
  };

  // Retorna el 10% del precio
  const descuento10 = (p: number): number => p * 0.10;

  // Retorna el 25% del precio
  const descuento25 = (p: number): number => p * 0.25;

  // Retorna el 15% del precio para estudiantes
  const descuentoEstudiante = (p: number): number => p * 0.15;

  const precio = 1000;

  return (
    <div className="p-4 bg-white rounded-lg shadow border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Aplicador de Descuentos</h3>
      <p>Precio original: ${precio}</p>
      <p>Con 10% off: ${aplicarDescuento(precio, descuento10)}</p>
      <p>Con 25% off: ${aplicarDescuento(precio, descuento25)}</p>
      <p>Descuento estudiante: ${aplicarDescuento(precio, descuentoEstudiante)}</p>
    </div>
  );
};