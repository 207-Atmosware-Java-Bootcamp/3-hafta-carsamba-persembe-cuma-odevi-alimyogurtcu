var degreeC = null, degreeF = null;

do {
    if (degreeC == null)
    degreeC = Number(prompt("Celsius cinsinden derece giriniz"))
    else 
    degreeC = Number(prompt("Sayı girmelisiniz. Celsius cinsinden derece giriniz"))

} while (isNaN(degreeC) || degreeC == null);

if(!isNaN(degreeC) && degreeC != null)
degreeF = (degreeC*9/5)+32

document.write("<br>Celsius=",degreeC, "\u00B0 Fahrenhayt=",degreeF,"\u00B0")