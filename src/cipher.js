window.cipher = { 
  /*CIFRADO*/
  encode: (magicNumber,name5) =>{

      let cipherText1= ""; 
      for(let i=0; i < name5.length; i++){ 
          let cipherForm = ((name5.charCodeAt(i) - 65 + magicNumber)% 26 + 65);
          let string1 = String.fromCharCode(cipherForm); 
          cipherText1 += string1; 
      }
      return cipherText1;
  },
  /*DECIFRADO*/
  decode: (magicNumber,nameDecoded1) =>{

      let decodedText1 = "";
      for(let i=0; i < nameDecoded1.length; i++){
          let decodedForm =((nameDecoded1.charCodeAt(i) + 65 - magicNumber)% 26 + 65);
          let string1 = String.fromCharCode(decodedForm);
          decodedText1 += string1;
      }
      return decodedText1;
  }
}
