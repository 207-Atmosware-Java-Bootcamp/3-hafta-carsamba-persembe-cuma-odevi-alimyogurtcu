const randomNumber = Math.floor(Math.random() * 10 + 1);

var number = [],
  remainingAttempts = 5,
  count = 1;

console.log("randomNumber", randomNumber);

document.write("Rastgele sayı ", randomNumber, "<br>");
document.write("-------------------------------------<br>");

function check(number, randomNumber) {
  if (number == randomNumber) return false;
  else return true;
}

function askNumber() {
  number = Number(
    prompt("(Rastgele sayı console'de yazmaktadır) 1 ile 10 arası tahmininiz")
  );
  if (check(number, randomNumber)) {
    remainingAttempts--;
    if (number > randomNumber)
      alert("Tahmininiz sayıdan büyük. Kalan hakkınız " + remainingAttempts);
    else if (number < randomNumber)
      alert("Tahmininiz sayıdan küçük. Kalan hakkınız " + remainingAttempts);
  } else if (!check(number, randomNumber)) alert("Sayıyı doğru bildiniz");
  document.write(count + ". tahmininiz ", number, "<br>");
  count++;
}

function blockUser() {
  alert("Deneme hakkınız doldu");
}

do {
  if (remainingAttempts > 0) askNumber();
  else {
    blockUser();
    break;
  }
} while (check(number, randomNumber));
