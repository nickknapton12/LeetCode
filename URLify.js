// Page 90
// Big O(n)
// space(n)

function replaceString(str, length){
    newStr = "";
    for(let i = 0;i < length; i++){
        if(str.charAt(i) == " "){
            newStr += "%20"
        }else{
            newStr += str.charAt(i)
        }
    }
    return newStr;
}