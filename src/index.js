/*Llamado de elementos HTML para DOM*/

/*Declaración del botón y función para codificar*/
const btnContinue = document.getElementById("continue3");
let cipher1 = document.getElementsByTagName("li")[0];

btnContinue.addEventListener("click",()=>{
    let magicNumber = parseInt(document.getElementById("number").value);
    let name1 = document.getElementById("name1").value.toUpperCase();
    
    cipher1.innerHTML = window.cipher.encode(magicNumber,name1);
})

/*Declaración del boton y función para decodificar */

const btnShow = document.getElementById("show");
let decoded1= document.getElementById("decoded");

btnShow.addEventListener("click", ()=>{
    let magicNumber = parseInt(document.getElementById("number").value);
    let nameDecoded1 = document.getElementById("secretFriend").value.toUpperCase();

    decoded1.innerHTML = window.cipher.decode(magicNumber,nameDecoded1);
})



/*Boton comenzar*/
const start = document.getElementById("start");
start.addEventListener("click", ()=>{

    const showDiv = document.getElementById("details");
    showDiv.style.display = "block";
    const hiddenDiv = document.getElementById("welcome");
    hiddenDiv.style.display = "none";
})

/*Botones continuar*/
const continue1 = document.getElementById("continue1");
continue1.addEventListener("click", ()=>{

    const showDiv = document.getElementById("magicNumber");
    showDiv.style.display = "block";
    const hiddenDiv = document.getElementById("details");
    hiddenDiv.style.display = "none";
})

const continue2 = document.getElementById("continue2");
continue2.addEventListener("click", ()=>{

    const showDiv = document.getElementById("participants");
    showDiv.style.display = "block";
    const hiddenDiv = document.getElementById("magicNumber");
    hiddenDiv.style.display = "none";
})

const continue3 = document.getElementById("continue3");
continue3.addEventListener("click", ()=>{

    const showDiv = document.getElementById("hiddenParticipants");
    showDiv.style.display = "block";
    const hiddenDiv = document.getElementById("participants");
    hiddenDiv.style.display = "none";
})

/*Botones volver*/
const back1 = document.getElementById("back1");
back1.addEventListener("click", ()=>{

    const showDiv = document.getElementById("welcome");
    showDiv.style.display = "block";
    const hiddenDiv = document.getElementById("details");
    hiddenDiv.style.display = "none";
})

const back2 = document.getElementById("back2");
back2.addEventListener("click", ()=>{

    const showDiv = document.getElementById("details");
    showDiv.style.display ="block";
    const hiddenDiv = document.getElementById("magicNumber");
    hiddenDiv.style.display = "none";
})

const back3 = document.getElementById("back3");
back3.addEventListener("click", ()=>{

    const showDiv = document.getElementById("magicNumber");
    showDiv.style.display = "block";
    const hiddenDiv = document.getElementById("participants");
    hiddenDiv.style.display ="none";
})

const back4 = document.getElementById("back4");
back4.addEventListener("click", ()=>{

    const showDiv =document.getElementById("participants");
    showDiv.style.display ="block";
    const hiddenDiv = document.getElementById("hiddenParticipants");
    hiddenDiv.style.display = "none";
})

/*Boton finalizar*/
const finalize = document.getElementById("finalize");
finalize.addEventListener("click", ()=>{
    
    const showDiv=document.getElementById("final");
    showDiv.style.display="block";
    const hiddenDiv=document.getElementById("hiddenParticipants");
    hiddenDiv.style.display="none";

    /* Recuperación elementos del primer formulario "datalles del evento"*/

    let nameEvent = document.getElementById("nameEvent").value;
    let event =document.getElementsByTagName("li")[5];
    event.innerHTML=nameEvent;

    let dateEvent = document.getElementById("dateEvent").value;
    let date= document.getElementsByTagName("li")[6];
    date.innerHTML=dateEvent;

    let placeEvent = document.getElementById("placeEvent").value;
    let place= document.getElementsByTagName("li")[7];
    place.innerHTML=placeEvent;

    let priceMin = document.getElementById("priceMin").value;
    let min= document.getElementsByTagName("li")[8];
    min.innerHTML=priceMin;

    let priceMax = document.getElementById("priceMax").value;
    let max= document.getElementsByTagName("li")[9];
    max.innerHTML=priceMax;

})

/*Boton inicio*/
const beginning = document.getElementById("beginning");
beginning.addEventListener("click", ()=>{
    
    const showDiv=document.getElementById("welcome");
    showDiv.style.display="block";
    const hiddenDiv=document.getElementById("final");
    hiddenDiv.style.display="none";
})
/*Acá va tu código*/