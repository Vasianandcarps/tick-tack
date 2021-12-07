let tick = true;
let d = new Date();
let time = prompt("количество секунд");
function ticker() {
  if (tick) {
    document.write("Тик ");
    tick = false;
  } else {
    document.write("Так ");
    tick = true;
  }
}
// setInterval(ticker, 1000);
let t = setInterval(ticker.bind(this, d, 10), 1000);
setTimeout(() => {
  clearInterval(t);
}, time * 1000);
