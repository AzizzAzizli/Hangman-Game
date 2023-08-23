let arr = ["salam", "sagol"];
let currentWord = arr[0];

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
    }
    document.querySelector("#outPut").innerHTML = newArr.join(" ");
    console.log(newArr);

    if (remainingLetters === 0) {
      console.log("Congratulations! You've guessed the word.");
    }

    if (wrongAttempts >= 6) {
      console.log("Out of attempts. The word was:", currentWord);
    }
  
  });
});
