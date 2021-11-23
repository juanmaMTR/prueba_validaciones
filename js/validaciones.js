/**
 * Validaciones.js
 * @author Juan Manuel Toscano Reyes <jtoscanoreyes.guadalupe@alumnado.fundacionloyola.net>
 * @license GPL V.3
 */
'use strict'


window.onload=iniciar
/**
 * Funcion iniciar que se ejecuta con un window.onload
 */
function iniciar(){
    //Cojo el select y llamo a la función introducirModulos
    let select = document.getElementById('sCurso')
    select.onchange=introducirModulos
    //Cojo los input que se necesitan y llamo en todos a hacerMedia
    let input1=document.getElementById('iCalculo1')
    let input2=document.getElementById('iCalculo2')
    let input3=document.getElementById('iCalculo3')
    input1.onchange=hacerMedia
    input2.onchange=hacerMedia
    input3.onchange=hacerMedia
    //Cojo el boton poner a cero y cuando se hace click sobre el llamo a la función ponerCero
    let boton=document.getElementById('btnCero')
    boton.onclick=ponerCero
    //Cojo el boton enviar y cuando se hace click sobre el llamo a la funcion enviar
    let botonenviar=document.getElementById('btnEnviar')
    botonenviar.onclick=enviar

}
/**
 * Función enviar que se ejecuta desde la función iniciar y sirve para enviar el formulario
 */
function enviar(){
    let input1=document.getElementById('iCalculo1')
    let input2=document.getElementById('iCalculo2')
    let input3=document.getElementById('iCalculo3')
    
    let suma=parseInt(input1.value)+parseInt(input2.value)+parseInt(input3.value)
    
    if(suma>=10 && suma<=20){
        console.log('Enviado');
        document.getElementById('divError').style.display='none'
    }else{
        document.getElementById('divError').innerHTML='La suma de los números no está entre 10 y 20'
        document.getElementById('divError').style.display='block'
    }
}
/**
 * Función ponerCero que se ejecuta desde la función inciar y sirve para poner a cero los tres input type=number 
 * y la media también a cero ya que todos los input type=number estarán a cero también
 */
function ponerCero(){
    let input1=document.getElementById('iCalculo1')
    let input2=document.getElementById('iCalculo2')
    let input3=document.getElementById('iCalculo3')
    input1.value=0
    input2.value=0
    input3.value=0
    let span=document.getElementById('spanMedia')
    span.innerHTML=0
}

/**
 * Funcion hacerMedia que se ejecuta desde la función inciar y sirve para hacer la media de los tres input type=numer
 */
function hacerMedia(){
    let input1=document.getElementById('iCalculo1')
    let input2=document.getElementById('iCalculo2')
    let input3=document.getElementById('iCalculo3')
    
    let suma=parseInt(input1.value)+parseInt(input2.value)+parseInt(input3.value)
    let media=suma/3

    let span=document.getElementById('spanMedia')
    span.innerHTML=media.toFixed(2)
}

/**
 * Funcion introducirModulos que se ejecuta desde la función iniciar
 */
function introducirModulos(){
    console.log('carga introducir modulos');
    //Creo el select
    let select=document.createElement('select')
    if(document.getElementById('sCurso').value=="1DAW"){
        select.id='modulos1'
    }
    if(document.getElementById('sCurso').value=="2DAW"){
        select.id='modulos2'
    }
    
    
    let div=document.getElementsByClassName('select')[0]
    div.appendChild(select)
    //Creo los arrays
    let modulos1=["Sistemas Informáticos","Programación","Base de datos"]
    let modulos2=["DWEC","DWES","EIE"]

    if(document.getElementById('sCurso').value=="1DAW"){
        for(let modulo in modulos1){
            let opcion=document.createElement('option')
            opcion.text=modulos1[modulo]
            select.appendChild(opcion)
        }
    }else{
        if(document.getElementById('modulos1')){
            document.getElementById('modulos1').remove()
        }
    }
    if(document.getElementById('sCurso').value=="2DAW"){
        for(let modulo in modulos2){
            let opcion=document.createElement('option')
            opcion.text=modulos2[modulo]
            select.appendChild(opcion)
        }
    }else{
        if(document.getElementById('modulos2')){
            document.getElementById('modulos2').remove()
        }
    }
}