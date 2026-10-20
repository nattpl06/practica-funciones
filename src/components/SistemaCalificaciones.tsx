import React from 'react';

interface Alumno {
  nombre: string;
  califs: number[];
}

export const SistemaCalificaciones = () => {
  // Calcula el promedio aritmético de las calificaciones
  const calcularPromedio = (calificaciones: number[]): number => {
    if (calificaciones.length === 0) return 0;
    const suma = calificaciones.reduce((acc, c) => acc + c, 0);
    return suma / calificaciones.length;
  };

  // Determina la letra equivalente según el promedio
  const obtenerLetra = (promedio: number): string => {
    if (promedio >= 90) return 'A';
    if (promedio >= 80) return 'B';
    if (promedio >= 70) return 'C';
    if (promedio >= 60) return 'D';
    return 'F';
  };

  // Verifica si el alumno está aprobado (promedio >= 70)
  const estaAprobado = (promedio: number): boolean => promedio >= 70;

  const alumnos: Alumno[] = [
    { nombre: 'Ana', califs: [95, 88, 92] },
    { nombre: 'Luis', califs: [70, 65, 72] },
    { nombre: 'María', califs: [85, 90, 88] },
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow border border-gray-200">
      <h3 className="text-xl font-bold text-gray-800 mb-2">Sistema de Calificaciones</h3>
      {alumnos.map((alumno, index) => {
        const promedio = calcularPromedio(alumno.califs);
        const letra = obtenerLetra(promedio);
        const aprobado = estaAprobado(promedio);

        return (
          <p key={index}>
            {alumno.nombre}: Promedio {promedio.toFixed(1)} - Letra {letra} -{' '}
            {aprobado ? 'Aprobado' : 'Reprobado'}
          </p>
        );
      })}
    </div>
  );
};