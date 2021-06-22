function rotateMatrix(matrix){
    var n = matrix[0].length
    var newMatrix = new Array(n)

    for(let i = 0; i < n; i++){
        newMatrix[i] = new Array(n).fill(0)
    }
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            newMatrix[i][j] = matrix[n-j-1][i]
        }
    }
    return newMatrix
}

matrix = [[1,2,3],[4,5,6],[7,8,9]]
console.log(rotateMatrix(matrix))
