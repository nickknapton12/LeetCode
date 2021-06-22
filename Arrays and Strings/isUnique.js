// Page 90
// Big 0(n)
// Memory (n)

function isUnique(str){
    if (str.length > 256) return -1;

    char_array = []

    for(let i = 0; i < str.length; i++){
        val = str.charAt(i);
        if (char_array[val]) return false;
        char_array[val] = true;
    }
    return true;
}

let string = "faopbd"
console.log(isUnique(string))