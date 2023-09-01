function animarTexto() {
  let i = 0;
  let texto = document.getElementById("text").innerHTML;
  let speed = 30;

  function typeWriter() {
    if (i <= texto.length) {
      document.getElementById("text").innerHTML = texto.slice(0, i + 1);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
  typeWriter();
}


const botao = document.getElementById("button-request");
const inputElement = document.getElementById("input-request");
const spanAi = document.querySelector("span");
let text = { content: `` };

function enviarInput(e) {
  console.log(inputElement.value);
  text.content = inputElement.value;
  spanAi.classList.remove("d-none")
  fetchAndAnimateText(text);
  inputElement.value = "";
}

botao.addEventListener("click", enviarInput);

inputElement.addEventListener("keyup", (e) => {
  if(e.key === "Enter"){
    enviarInput();
  }
});


async function fetchAndAnimateText() {
  try {
    const response = await fetch(
      "https://ec2-18-231-88-47.sa-east-1.compute.amazonaws.com/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(text),
      }
    );
    const data = await response.text();
    console.log(data);

    const apiTextElement = document.getElementById("text");
    apiTextElement.innerHTML += data;

    animarTexto();
  } catch (error) {
    console.error("Erro ao carregar ou animar o texto:", error);
  }
}


