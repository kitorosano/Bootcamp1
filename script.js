let matriz = [[0,1], [1,2], [2,0], [3,4]];
nroPrados = 5;

function solucion(nroPrados, matriz){
  // Comprobar si el nroPrado es valido
  if(nroPrados < 1 || nroPrados > Math.pow(10,5)) return alert("El numero de prado debe de estar contenido entre 0 y 10^5");
  // Comprobar que la cantidad de filas es valida
  if(matriz.length < 0 || matriz.length > Math.pow(10,5)) return alert("La matriz solo puede tener entre 0 a 10^5 filas");

  
  // Recorrer cada fila y cada columna de la matriz para comprobar...
  for( let fila of matriz){
    for(let columna of fila){
      // Comprobar que los valores de la matriz son numeros validos
      if(typeof columna !== "number") return alert("La matriz solo puede tener 2 columnas.")
      if(columna < 0 || columna > nroPrados -1) return alert("Los valores de la matriz son invalidos.")
    }
  }

  return (nroPrados - matriz.length) - 1;
}