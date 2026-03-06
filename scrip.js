const btnSim = document.getElementById("btnSim")
const btnNao = document.getElementById("btnNao")

function aceitar(){
    alert("Você aceitou namorar comigo! :)")
    location.href = "https://youtu.be/lV2plyhSRBU?si=dWMXxho0CDt2S8Rj"
}

function desviar(){
    btnNao.style.position = "absolute";
}

function geraPosicao(min,max){
    return (Math.random() * (max-min) + min) + "%";
}