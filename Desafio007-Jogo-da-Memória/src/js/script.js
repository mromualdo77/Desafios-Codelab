const imagens = [
  "./src/img/1.svg",
  "./src/img/1.svg",
  "./src/img/2.svg",
  "./src/img/2.svg",
  "./src/img/3.svg",
  "./src/img/3.svg",
  "./src/img/4.svg",
  "./src/img/4.svg",
  "./src/img/5.svg",
  "./src/img/5.svg",
  "./src/img/6.svg",
  "./src/img/6.svg",
  "./src/img/7.svg",
  "./src/img/7.svg",
  "./src/img/8.svg",
  "./src/img/8.svg",
  "./src/img/9.svg",
  "./src/img/9.svg",
  // "./src/img/CaretDown.svg",
  // "./src/img/web.svg"

];

// duplicar cartas para fazer pares
let cartas = [...imagens];

// embaralhar
cartas.sort(() => Math.random() - 0.5);

let openCards = [];

let shuffleImagens = imagens.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < cartas.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = `div class="front">Buuuh!</div>`
  box.innerHTML = `<img src="${cartas[i]}" alt="cartas">`;
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if (openCards.length < 2 && !this.classList.contains("boxOpen")) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length === 2) {
    setTimeout(checkMatch, 1000);
  }
}

function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === cartas.length) {
    alert("Você venceu !");
  }
}
