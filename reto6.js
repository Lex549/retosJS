function createCube(size) {
    let arriba = '';
       let abajo = '';
       let contador = 1;
        for(let i = size; i>0; i--) {
         arriba += ' '.repeat(i - 1);
         arriba += "/\\".repeat(contador);
         arriba += "_\\".repeat(size);
         arriba += "\n";
         contador++;
        }
        contador--;
   
        for(let i = 0; i<size; i++) {
         abajo += ' '.repeat(i) + "\\/".repeat(contador) + "_/".repeat(size);
         if(i !=  size - 1) abajo += "\n";
         contador--;
        }
       return arriba + abajo;
   }