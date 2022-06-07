const dbUserEmail = "deneme@gmail.com";
const dbUserPassword = "root";

var email = "",
  password = "",
  remainingAttempts = 4;

function check(email, password) {
  if (email == dbUserEmail && password == dbUserPassword) return false;
  else return true;
}

function askEmailPassword() {
  email = prompt("Mailiniz");
  password = prompt("Şifreniz");
  if (check(email, password)) {
    remainingAttempts--;
    if (remainingAttempts > 0)
      alert("Mail ya da şifre yanlış. Kalan hakkınız " + remainingAttempts);
  } else if (!check(email, password)) {
    alert("Başarılı bir şekilde giriş yapıldı");
    adminPage();
  }
}

function blockUser() {
  alert("Deneme hakkınız doldu");
}

function adminPage() {
  document.write("Admin Page");
}

do {
  if (remainingAttempts > 0) askEmailPassword();
  else {
    blockUser();
    break;
  }
} while (check(email, password));
