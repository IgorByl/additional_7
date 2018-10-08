module.exports = function solveSudoku(matrix) { 
    
    function sortArray(rows, cols){ 

      let arr = []; 

      for (let i = 0; i < rows; i++){ 
         arr.push([]); 
         arr[i].push (new Array(cols)); 
          for(let j=0; j < cols; j++){ 
             arr[i][j] = 0; 
             } 
         } 
     return arr; 
    } 
  
    A = sortArray(3,3); B = sortArray(3,3); C = sortArray(3,3); 
    D = sortArray(3,3); E = sortArray(3,3); F = sortArray(3,3); 
    G = sortArray(3,3); H = sortArray(3,3); I = sortArray(3,3); 
    
    for (let j = 0; j < 9; j++){ 
        for (let i = 0; i < 9; i++){ 
            if (j < 3 && i < 3){ 
                A[j][i] = matrix[j][i]; 
             } 
            if (j < 3 && i < 6 && i > 2){ 
                B[j][i-3] = matrix[j][i]; 
             } 
            if(j < 3 && i < 9 && i > 5){ 
                C[j][i-6] = matrix[j][i]; 
             } 
            if(j > 2 && j < 6 && i < 3){ 
                D[j-3][i] = matrix[j][i]; 
             } 
            if(j > 2 && j < 6 && i < 6 && i > 2){ 
                E[j-3][i-3] = matrix[j][i]; 
             } 
            if(j > 2 && j < 6 && i < 9 && i > 5){ 
                F[j-3][i-6] = matrix[j][i]; 
             } 
            if( j > 5 && j < 9 && i < 3){ 
                G[j-6][i] = matrix[j][i]; 
             } 
            if(j > 5 && j < 9 && i < 6 && i > 2){ 
                H[j-6][i-3] = matrix[j][i]; 
             } 
            if(j > 5 && j < 9 && i < 9 && i > 5){ 
                I[j-6][i-6] = matrix[j][i]; 
             } 
         } 
    } 
    
    for(let i = 0; i < 9; i++){ 
        for(let j = 0 ; j < 9; j++){ 
            if(matrix[i][j] === 0){ 
              matrix[i][j] = checkHorizontal(i); 
              matrix[i][j] = checkVertical(j, matrix[i][j]); 
                if(matrix[i][j].length === 1){ 
                  matrix[i][j] = matrix[i][j][0]; 
                 } 
             } 
    
         } 
    } 
    
    function checkHorizontal(rows){ 

      let letiants=[1,2,3,4,5,6,7,8,9]; 

        for(let j=0 ; j < 9; j++){ 
          if(matrix[rows][j] !== 0){ 
              for(let k = 0; k < 9; k++){ 
              if(letiants[k] === matrix[rows][j]){ 
                 letiants.splice(k,1); 
                 } 
              } 
           } 
        } 
      return letiants; 
    } 

    function checkVertical(cols,mat){ 
        for(let i = 0; i < 9; i++){ 
          if( !Array.isArray(matrix[i][cols])){ 
             for(let l = 0; l < mat.length; l++){ 
              if(matrix[i][cols] === mat[l]){ 
                 mat.splice(l,1); 
                 } 
              } 
             } 
         } 
     return mat; 
    } 
    
 return matrix; 
 }