// Targetam toate elementele necesare spre manipulare si atribuim valoare intr-o variabila
// Div-ul care va fi colora
const colorDiv = document.querySelector("#colorBox");

// Div-ul cu text
const colorDescription = document.querySelector("#inner");

// Butonul picker
const btn = document.querySelector("#picker");

// Cream functia care genereaza un numar aleatoriu
const random = (number) => {
  return Math.floor(Math.random() * (number + 1));
};
console.log(random(3));

// Cream functia care va genera un hex aleatoriu, folosind functia de mai sus
function getRandomHexCode() {
  // Indicam ca string toate caracterele din care poate fi compus un cod hex
  const hexCharacters = "0123456789abcdef";
  // Definim variabila de hexCode şi îi dăm valoarea de start de '#' - deoarece orice hex code începe cu acest caracter
  let hexCode = "#";
  // // Iterăm prin hexCharacters completând hexCode până acesta va consta din # şi 6 caractere aleatorii, e.g. #370050
  for (let i = 0; i < 6; i++) {
    // La fiecare iteratie din cele 6, adaugam un caracter aleatoriu din hexCharacters folosind f-tia random cu argumentul '15' , acesta fiind nr de caractere din hexCharacters
    hexCode += hexCharacters[random(15)];
  }
  // Dupa toate 6 iteratii returnam un cod '#370050'
  return hexCode;
}

// Atribuim butonului eventListener 'click'
btn.addEventListener("click", () => {
  // Salvam intr-o variabila un hexCode
  const rndHexCode = getRandomHexCode();

  // Schimbam valoare de fundal a colorDiv in culoarea generata
  colorDiv.style.backgroundColor = rndHexCode;

  // Afisam codul generat ca text in div-ul descriptiv
  colorDescription.textContent = rndHexCode;

  // Traducem codul hex in cod rgb si salvam intr-o variabila
  const rgbCode = hexToRgb(rndHexCode);
  colorDescription.textContent = `${rndHexCode} | ${rgbCode}`;
});

function hexToRgb(hex) {
  // Remove the '#' if is present
  hex = hex.replace("#", "");

  // Asiguram ca hexul are lungimea de 6
  if (hex.length !== 6) {
    throw new Error("Invalid hex code: " + hex);
  }

  // Extragem red, blue and blue componenet
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Returnam RGB ca string
  return `rgb(${r}, ${g}, ${b})`;
}
