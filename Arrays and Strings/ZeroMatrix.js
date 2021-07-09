// Page 90
// Runtime O(mn)
// Space O()

function ZeroMatrix(matrix){
    rows = []
    columns = []

    for(let i = 0; i < matrix[0].length; i++){
        for(let j = 0; j < matrix.length;j++){
            if(matrix[i][j] == 0){
                rows.push(i)
                columns.push(j)
            }
        }
    }

    for(let i = 0; i < rows.length; i++){
        matrix[rows[i]].fill(0)
    }
    
    for(let i = 0; i < columns.length; i++){
        for(let j = 0; j < matrix.length; j++){
            matrix[j][columns[i]] = 0
        }
    }
    return matrix
}

matrix = [[1,1,0,2],[1,1,1,1],[1,0,1,1],[0,1,1,1]]

console.log(ZeroMatrix(matrix))