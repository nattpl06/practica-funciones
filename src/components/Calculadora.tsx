import React from 'react';

export const Calculadora = () => {
    // Suma dos números y retorna el resultado
    const sumar = (a: number, b: number): number => a + b;

    // Resta dos números y retorna el resultado
    const restar = (a: number, b: number): number => a - b;

    // Multiplica dos números y retorna el resultado
    const multiplicar = (a: number, b: number): number => a * b;

    // Divide dos números y retorna 0 si el divisor es cero
    const dividir = (a: number, b: number): number => (b === 0 ? 0 : a / b);

    const a = 15;
    const b = 4;

    return (
        <div className="p-4 bg-white rounded-lg shadow border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Calculadora</h3>
            <p>{a} + {b} = {sumar(a, b)}</p>
            <p>{a} - {b} = {restar(a, b)}</p>
            <p>{a} × {b} = {multiplicar(a, b)}</p>
            <p>{a} ÷ {b} = {dividir(a, b).toFixed(2)}</p>
        </div>
    );
};