import React from 'react';

export const GeneradorPassword = () => {
  // Genera una contraseña aleatoria configurada por banderas booleanas
  const generarPassword = (
    longitud: number,
    incluirNumeros: boolean,
    incluirSimbolos: boolean
  ): string => {
    const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numeros = '0123456789';
    const simbolos = '!@#$%^&*()_+';

    let caracteresDisponibles = letras;
    if (incluirNumeros) caracteresDisponibles += numeros;
    if (incluirSimbolos) caracteresDisponibles += simbolos;

    let password = '';
    for (let i = 0; i < longitud; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteresDisponibles.length);
      password += caracteresDisponibles.charAt(indiceAleatorio);
    }
    return password;
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Generador de Contraseñas</h3>
      <p>Básica (8): {generarPassword(8, false, false)}</p>
      <p>Media (12): {generarPassword(12, true, false)}</p>
      <p>Fuerte (16): {generarPassword(16, true, true)}</p>
    </div>
  );
};