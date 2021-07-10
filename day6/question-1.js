function is_Array(input){
    var checkArr = Array.isArray(input);
    return checkArr;
}
console.log(is_Array('w3resource'));
console.log(is_Array([1, 2, 4, 0]));