var btn_wts=document.querySelector("#wtsicon");
var form=document.querySelector("#form");
var sendbtn=document.querySelector("#sendbtn");

btn_wts.addEventListener("click", function(){
    form.classList.toggle("entrar_y_salir")
})

sendbtn.addEventListener("click", enviarMensaje)

function enviarMensaje(){
    var inputName=document.querySelector(".inputwts").value
    var texttareaMensaje=document.querySelector(".texttarea").value
    let url ="https://api.whatsapp.com/send?phone=50664568711&text="+inputName+"%0a"+texttareaMensaje+""

    window.open(url);
}