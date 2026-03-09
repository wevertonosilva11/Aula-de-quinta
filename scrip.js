const btnSim = document.getElementById("btnSim")
const btnNao = document.getElementById("btnNao")

btnSim.addEventListener("click", aceitar);
btnNao.addEventListener("mouseover", desviar);
btnNao.addEventListener("click", desviar);

function aceitar(){
    alert("Você aceitou namorar comigo! :)")
    location.href = "https://youtu.be/lV2plyhSRBU?si=dWMXxho0CDt2S8Rj"
}

function desviar(){
    btnNao.style.position = "absolute";
    btnNao.style.bottom = geraPosicao(10, 90);
    btnNao.style.left = geraPosicao(10, 90);

    console.log("opa, desviei...");
}

function geraPosicao(min,max){
    return (Math.random() * (max-min) + min) + "%";
}