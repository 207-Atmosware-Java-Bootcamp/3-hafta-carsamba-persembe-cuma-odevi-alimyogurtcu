var password = null,
  repassword = null;

do {
  if (password == null && repassword == null) {
    document.write("<br>");
    password = prompt("Şifrenizi giriniz");
    repassword = prompt("Şifrenizi tekrar giriniz");
  } else if (password != repassword) {
    document.write("ŞİFRELER EŞLEŞMEDİ");
    document.write("<br>---------------------<br>");
    password = prompt("Şifreniz aynı değil. Tekrar şifrenizi giriniz");
    repassword = prompt("Şifrenizi tekrar giriniz");
  } else {
    document.write("ŞİFRELER GİRİLMEDİ");
    document.write("<br>---------------------<br>");
    password = prompt("Şifre girmediniz. Şifrenizi giriniz");
    repassword = prompt("Şifrenizi tekrar giriniz");
  }
  document.write("<br>Password: ", password, "<br>");
  document.write("Repassword: ", repassword, "<br>");
} while (checkPasswords(password, repassword));
document.write("ŞİFRELER EŞLEŞTİ");

function checkPasswords(password, repassword) {
  if (password != repassword) return true;
  else if (password == null) return true;
  else if (password == "") return true;
  else return false;
}
