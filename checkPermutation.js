// Page 90
// Big O(n+n) -> (n)
// Mem ()

function isPerm(str1, str2){
    if(str1.length != str2.length) return false;

    count = new Array(256)
    count.fill(0,0,count.length - 1)
    for(let i = 0; i < str1.length; i++){
        count[str1.charCodeAt(i)]++;
    }

    for(let i = 0; i < str2.length; i++){
        count[str2.charCodeAt(i)]--;
        if(count[str2.charCodeAt(i)] < 0) return false
    }
    return true;
}