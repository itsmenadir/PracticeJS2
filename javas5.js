function removeCharacter(str, c) {
    let removedchar = '';
    for (let i = 0; i < str.length; i++){
        if (i !== c){
            removedchar += str[i];
        }
    }
    return removedchar;
}

console.log(removeCharacter("Python", 0));
console.log(removeCharacter("Python", 3));
console.log(removeCharacter("Python", 5));
