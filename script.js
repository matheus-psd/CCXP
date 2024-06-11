const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

const lancamento = "05 dec 2024";

function countDown() {
  const dataLanc = new Date(lancamento);
  const hoje = new Date();

  const segTotal = (dataLanc - hoje) / 1000;

  const printDias = Math.floor(segTotal / 60 / 60 / 24);
  const printHoras = Math.floor(segTotal / 60 / 60) % 24;
  const printMinutos = Math.floor(segTotal / 60) % 60;
  const printSegundos = Math.floor(segTotal) % 60;

  dias.innerHTML = formatoTempo(printDias+`D`);
  horas.innerHTML = formatoTempo(printHoras+`H`);
  minutos.innerHTML = formatoTempo(printMinutos+`M`);
  segundos.innerHTML = formatoTempo(printSegundos+`S`);
}

function formatoTempo(tempo) {
  return tempo < 10 ? `0${tempo}` : tempo;
}

countDown();
setInterval(countDown, 1000);
