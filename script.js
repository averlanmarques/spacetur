const Enviar = document.getElementById("enviar")

Enviar.addEventListener("click", ()=>{

   const campos = document.querySelectorAll("input[type='text'],input[type='email'],input[type='date'],select[option],textarea")
    

     for(let x = 0; x < campos.length ; x++){
           
        if(campos[x].value == ""){
            alert("O CAMPO " + campos[x].name + " está sem preenchimento!")
            return                
        }else{
            alert("Campos cheios")
            return
        }
    }
})