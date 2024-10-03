function contar(){
    let segundos = +document.querySelector('#segundos').value;
    setTimeout(finalizar, segundos * 1000);
}
function finalizar(){
   let salida = document.querySelector('#salida')
   salida.textContent = 'ON';
   salida.style = 'color: green; font-size: 40px';

   let audio = document.querySelector('#alarma');
    audio.play();
}
function resetear(){
    location.reload();
}


