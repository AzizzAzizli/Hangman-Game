let arr = ["javascript", "python", "java", "ruby", "go", "kotlin", "php"];
let j = Math.round(Math.random() * arr.length);
let currentWord = arr[j];

let newArr = currentWord.split("").map(() => "_");

console.log(newArr);
document.querySelector("#outPut").innerHTML = newArr.join(" ");
let remainingLetters = currentWord.length;
let wrongAttempts = 0;

// const alphabet = "abcdefghijklmnopqrstuvwxyz";
const keys = document.querySelectorAll(".key");
keys.forEach((key) => {
  key.addEventListener("click", () => {
    const letter = key.textContent;
    key.setAttribute("disabled", "true");
    key.style.backgroundColor = "gray";

console.log(key);
    let usrInput = letter.toLowerCase(); // Kullanıcının girdiği harfi küçük harfe dönüştür

    let correctIndexes = [];

    let index = currentWord.indexOf(usrInput);
    while (index !== -1) {
      correctIndexes.push(index);
      index = currentWord.indexOf(usrInput, index + 1);
    }

    if (correctIndexes.length > 0) {
      correctIndexes.forEach((idx) => {
        if (newArr[idx] === "_") {
          newArr[idx] = usrInput;
          remainingLetters--;
        }
      });
    } else {
      wrongAttempts++;

      console.log(`Incorrect guess. ${6 - wrongAttempts} attempts left.`);
      if (wrongAttempts < 6) {
        document.querySelector("#wrongGuess").innerHTML = `Incorrect guess. ${
          6 - wrongAttempts
        } attempts left.`;
      }
    }
    document.querySelector("#outPut").innerHTML = newArr.join(" ");
    console.log(newArr);

    if (remainingLetters === 0) {
      document.querySelector(".rightContent").classList.add("d-none");
      document.querySelector("#winOrLose").classList.remove("d-none");
      document.querySelector("#loserCard").classList.add("d-none");
      document.querySelector(
        "#cardContentWin"
      ).innerHTML = `Congratulations! You've guessed the word.`;

      console.log("Congratulations! You've guessed the word.");
    }

    if (wrongAttempts >= 6) {
      document.querySelector(".rightContent").classList.add("d-none");
      document.querySelector("#winOrLose").classList.remove("d-none");
      document.querySelector("#winnerCard").classList.add("d-none");
      document.querySelector(
        "#cardContentLost"
      ).innerHTML = `Out of attempts. The word was: ${currentWord}`;

      console.log("Out of attempts. The word was:", currentWord);
    }
  });
});

const tryAgainButtonLose = document.querySelector("#tryAgainButtonLose");
tryAgainButtonLose.addEventListener("click", () => {
  // Yeniden başlatmak için gerekli kodları burada çağırın
  currentWord = arr[Math.floor(Math.random() * arr.length)];
  newArr = currentWord.split("").map(() => "_");
  remainingLetters = currentWord.length;
  wrongAttempts = 0;
 
  keys.forEach(key =>{
    key.disabled=false;
    key.style.backgroundColor = "#0D6EFD";
  })
  document.querySelector(".rightContent").classList.remove("d-none");
  document.querySelector("#winOrLose").classList.add("d-none");
  // document.querySelector("#cardContentLost").textContent = "";
  document.querySelector("#wrongGuess").textContent =
    "Incorrect guess. 6 attempts left.";
  document.querySelector("#outPut").textContent = newArr.join(" ");
  document.querySelector("#winnerCard").classList.remove("d-none");
  document.querySelector("#loserCard").classList.remove("d-none");
});
const tryAgainButtonwin = document.querySelector("#tryAgainButtonWin");
tryAgainButtonwin.addEventListener("click", () => {

  // Yeniden başlatmak için gerekli kodları burada çağırın
  currentWord = arr[Math.floor(Math.random() * arr.length)];
  newArr = currentWord.split("").map(() => "_");
  remainingLetters = currentWord.length;
  wrongAttempts = 0;
  
  keys.forEach(key =>{
    key.disabled=false;
    key.style.backgroundColor = "#0D6EFD";
  })
  document.querySelector(".rightContent").classList.remove("d-none");
  document.querySelector("#winOrLose").classList.add("d-none");
  // document.querySelector("#cardContentWin").textContent = "";
  document.querySelector("#wrongGuess").textContent =
    "Incorrect guess. 6 attempts left.";
  document.querySelector("#outPut").textContent = newArr.join(" ");
  document.querySelector("#winnerCard").classList.remove("d-none");
  document.querySelector("#loserCard").classList.remove("d-none");
});
