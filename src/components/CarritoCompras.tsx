import React from 'react';

interface ProductoItem {
  producto: string;
  precio: number;
  cantidad: number;
}

export const CarritoCompras = () => {
  // Multiplica el precio unitario por la cantidad
  const calcularSubtotal = (precio: number, cantidad: number): number => precio * cantidad;

  // Calcula el IVA (16%) a partir de un subtotal
  const calcularIVA = (subtotal: number): number => subtotal * 0.16;

  // Suma el subtotal con el IVA correspondiente
  const calcularTotal = (subtotal: number): number => subtotal + calcularIVA(subtotal);

  // Formatea un número como cadena con símbolo de peso y 2 decimales
  const formatearPrecio = (precio: number): string => `$${precio.toFixed(2)}`;

  const carrito: ProductoItem[] = [
    { producto: 'Laptop', precio: 15000, cantidad: 1 },
    { producto: 'Mouse', precio: 350, cantidad: 2 },
    { producto: 'Teclado', precio: 800, cantidad: 1 },
  ];

  const subtotalGeneral = carrito.reduce(
    (acc, item) => acc + calcularSubtotal(item.precio, item.cantidad),
    0
  );

  return (
    <div className="p-4 bg-white rounded-lg shadow border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Carrito de Compras</h3>
      {carrito.map((item, index) => {
        const itemSubtotal = calcularSubtotal(item.precio, item.cantidad);
        return (
          <p key={index}>
            {item.producto} x{item.cantidad} = {formatearPrecio(itemSubtotal)}
          </p>
        );
      })}
      <hr className="my-2 border-gray-300" />
      <p>Subtotal: {formatearPrecio(subtotalGeneral)}</p>
      <p>IVA (16%): {formatearPrecio(calcularIVA(subtotalGeneral))}</p>
      <p>
        <strong>Total: {formatearPrecio(calcularTotal(subtotalGeneral))}</strong>
      </p>
    </div>
  );
};