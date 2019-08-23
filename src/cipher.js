window.cipher = {
  encode: (magicNumber,name1) =>{

    let cipherText1= ""; 
    for(let i=0; i < name1.length; i++){ 
        let cipherForm = ((name1.charCodeAt(i) - 65 + magicNumber)% 26 + 65);
        let string1 = String.fromCharCode(cipherForm); 
        cipherText1 += string1;
    }
    return cipherText1;
    /* Acá va tu código */
  },
  decode: (magicNumber,nameDecoded1) =>{

    let decodedText1 = "";
    for(let i=0; i < nameDecoded1.length; i++){
        let decodedForm =((nameDecoded1.charCodeAt(i) + 65 - magicNumber)% 26 + 65);
        let string1 = String.fromCharCode(decodedForm);
        decodedText1 += string1;
    }
    return decodedText1;
    /* Acá va tu código */
  }
};
