const alphabet = [ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let opl=document.getElementById("operation")
// let userKey = document.getElementById("userKey").value;

function ceaserCipher(){   
    let enterstr=document.getElementById("entertxt").value
    enterstr = enterstr.toUpperCase()
    let accumulator = ""
     
    for(let i=0;i<enterstr.length;i++){
        let char=enterstr[i];
        const isAletter = alphabet.includes(char)

        if(isAletter===false){
            accumulator+=char;
        }else{
            let charIndex=alphabet.findIndex((c)=> c===char)
            accumulator+=alphabet[charIndex + 5];
        }
        opl.value= accumulator;
    }
    console.log(accumulator)


}