// Page 90
// Big O(n)

function oneAway(str1, str2){
    if(str1.length == str2.length){
        return isReplace(str1, str2);
    }
    if(str1.length == (str2.length + 1)){
        return isInsert(str1, str2);
    }
    if((str1.length + 1) == str2.length){
        return isInsert(str2, str1);
    }
    else{
        return false
    }
}

function isReplace(str1, str2){
    difference = 0;

    for(let i = 0; i < str1.length; i++){   
        if(str1.charAt(i) != str2.charAt(i)){
            difference++;
        }
        if(difference > 1){
            return false;
        }
    }
    return true;
}

function isInsert(str1, str2){
    str1Count = 0;
    str2Count = 0;
    difference = 0;

    while(str1.length > str1Count && str2.length > str2Count){
        if(str1.charAt(str1Count) != str2.charAt(str2Count)){
            difference++;
            str1Count++;
        }
        else{
            str1Count++;
            str2Count++;
        }
        if(difference > 1){
            return false;
        }
    }
    return true
}