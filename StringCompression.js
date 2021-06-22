// Page 90
// Big O(n)
// Mem(n)

function stringCompression(str){
    newstr = ""
    count = 1;
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) == str.charAt(i+1)){
            count++;
        }
        else{
            newstr += str.charAt(i);
            newstr += count;
            count = 1;
        }
    }
    
    if(newstr.length >= str.length){
        return str;
    }
    else{
        return newstr; 
    }

}