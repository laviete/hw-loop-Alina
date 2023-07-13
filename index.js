//Написати цикл, який просить людину ввести число від 1 до 50 кратне 7.
//Запитувати до тих пір, доки людина не введе правильно.
//* обмежити кількість спроб до 5
//** зробити задачу двома способами через while та for

let count = 0;
const MAX_TRY = 5;
const MIN_NUM = 1;
const MAX_NUM = 50;
const attemptsOver = "attempts are over";
const correctValue = "you won";
const notCorrectValue = "wrong";
while (true) {
  const userInputNum = prompt("еnter number");
  count++;
  if (userInputNum >= MIN_NUM &&
    userInputNum <= MAX_NUM &&
    userInputNum % 7 === 0) {
    alert(correctValue);
    break;
  }
  if (count === MAX_TRY) {
    alert(attemptsOver);
    break;
  }
  alert(notCorrectValue);
}



for (count = 0; count < MAX_TRY; count++) {
  const userInputNumber = prompt("enter number");
  if (
    userInputNumber >= MIN_NUM &&
    userInputNumber <= MAX_NUM &&
    userInputNumber % 7 === 0
  ) {
    alert(correctValue);
    break;
  } 
    alert(notCorrectValue);
}
if (count === MAX_TRY) {
  alert(attemptsOver);
}

