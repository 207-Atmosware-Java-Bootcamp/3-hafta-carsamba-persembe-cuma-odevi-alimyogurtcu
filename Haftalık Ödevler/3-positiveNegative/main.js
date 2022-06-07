var number = null;

do {
    if (number == null)
    number = Number(prompt("Sayı"))
    else
    number = Number(prompt("Sayı girmelisiniz. Sayı"))
} while (isNaN(number));

document.write("<br>Sayı ",number)

if(number<0)
document.write("<br>Sayınız negatif")
if(number>0)
document.write("<br>Sayınız pozitif")
if(number==0)
document.write("<br>Sayınız sıfır")
