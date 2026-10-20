import React from 'react';

export const AnalizadorTexto = () => {
  // Cuenta el total de palabras separadas por espacios
  const contarPalabras = (texto: string): number => {
    const textoLimpio = texto.trim();
    if (!textoLimpio) return 0;
    return textoLimpio.split(/\s+/).length;
  };

  // Cuenta las vocales estándar (a, e, i, o, u con acentos)
  const contarVocales = (texto: string): number => {
    const coincidencias = texto.match(/[aeiouáéíóú]/gi);
    return coincidencias ? coincidencias.length : 0;
  };

  // Invierte el orden de los caracteres de la cadena
  const invertirTexto = (texto: string): string => {
    return texto.split('').reverse().join('');
  };

  const texto = 'Hola mundo desde TypeScript';

  return (
    <div className="p-4 bg-white rounded-lg shadow border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Analizador de Texto</h3>
      <p>Texto: "{texto}"</p>
      <p>Palabras: {contarPalabras(texto)}</p>
      <p>Vocales: {contarVocales(texto)}</p>
      <p>Invertido: {invertirTexto(texto)}</p>
    </div>
  );
};