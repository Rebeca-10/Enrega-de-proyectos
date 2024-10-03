// fuction Evaluar(){
//const max=document.querySelector (3)
//const op = Math.floor((Math.random()*max)-min)+min
// resultado.TextContent= op

function Calcular(){
    const not1 = +document.querySelector('#nota1').value;
    const not2 = +document.querySelector('#nota2').value;
    const not3 = +document.querySelector('#nota3').value;

    const prom = ((not1 * 0.15) + (not2 * 0.1) + (not3 * 0.1));

    document.querySelector('#salida').textContent = prom;
  }