// Page 90
// Big O(n + n) -> (n)
// Mem(n)

function paldrome(str){
    var map = new Map();
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) != " "){
            if(map.get(str.charAt(i).toLowerCase()) == undefined){
                map.set(str.charAt(i).toLowerCase() , 0);
            }
            map.set(str.charAt(i).toLowerCase(), (map.get(str.charAt(i).toLowerCase()) + 1));
        }
    }
    var inter = map.values();
    var count = 0;
    for(let [key, value] of map){
        if((value % 2) != 0) count++;
        if(count > 1) return false;
    }
    return true;
}