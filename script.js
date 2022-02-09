let matriz = [];
nroPrados = 4;

function solucion(nroPrados, matriz){
  if(nroPrados >= 1 && nroPrados <= Math.pow(10,5)){

    return (nroPrados - matriz.length) - 1;
  } else {
    console.log("El numero de prado es invalido, porfavor que este entre el 1 y el 100000");
    return
  }
}