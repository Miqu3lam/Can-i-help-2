let indiceImg = 0;
const containerImgs = document.querySelector('.containerImgs');
const imgs = document.querySelectorAll('.containerImgs img');
const bolinhas = document.querySelectorAll('.bolinhas');
const prox = document.getElementById('proxima');
const volta = document.getElementById('volta');
const redes = document.querySelectorAll('#redes a');
const tooltip = document.querySelector('.Tooltip');
const botaoHamb = document.getElementById('menu_symbol');
const menuHamb = document.getElementById('hamburguinho');

function mostrarImagem(indice) {
    imgs.forEach((img, idc)=>{
        if(idc === indice){
            img.style.display = "block"
        }
        else{
            img.style.display = "none"
        }
    });
    bolinhas.forEach((bolinha, idc) => {
        bolinha.classList.toggle('active', idc === indice);
    });
};

bolinhas.forEach((bolinha, index) =>{
    bolinha.addEventListener('click', ()=>{
        mostrarImagem(index);
        
    });
});

prox.addEventListener('click', () => {
    indiceImg = (indiceImg + 1) % imgs.length;
    mostrarImagem(indiceImg);
});

volta.addEventListener('click', () => {
    indiceImg = (indiceImg - 1 + imgs.length) % imgs.length;
    mostrarImagem(indiceImg);
});

redes.forEach((rede, ind)=>{
    rede.addEventListener('mouseover', ()=>{
        if(ind == 0){
            tooltip.innerHTML = 'Twitter'
        }
        else if(ind == 1){
            tooltip.innerHTML = 'Instagram'
        }
        else if(ind == 2){
            tooltip.innerHTML = 'wpp'
        }
        tooltip.style.display = 'block';
    })
});

redes.forEach((rede)=>{
    rede.addEventListener('mouseout', ()=>{
        tooltip.style.display = 'none'
    })
});

botaoHamb.addEventListener('click', () => {
    if (menuHamb.style.display === "block") {
        menuHamb.style.display = "none";
    } else {
        menuHamb.style.display = "block";
    }
});

document.addEventListener('click', (event) => {
    const elementoClicado = event.target;
    if (!elementoClicado.closest('.estilohamb') && elementoClicado !== botaoHamb) {
        menuHamb.style.display = "none";
    }
});

function timerImg(){
    indiceImg = (indiceImg + 1)
    if (indiceImg >= imgs.length){
        indiceImg = 0;
    }
    mostrarImagem(indiceImg)
};


setInterval(timerImg, 3000);
mostrarImagem(indiceImg);














