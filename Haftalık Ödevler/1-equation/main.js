var numbers = [0,0], result;

for (let i = 0; i < 2; i++) {
    if (i==0)
    numbers[i] = Number(prompt("y=3x+4k --> x = ?"))
    else
    numbers[i] = Number(prompt("y=3x+4k --> k = ?"))
}

if(isNaN(numbers[0])) numbers[0]=0
if(isNaN(numbers[1])) numbers[1]=0

result = (3*numbers[0] + 4*numbers[1])

document.write("Denklem: y=3x+4k<br>")
document.write('1. Adım: x=',numbers[0], ' -> y=(3*',numbers[0],')+4k<br>')
document.write('2. Adım: k=',numbers[1], ' -> y=(3*',numbers[0],')+(4*',numbers[1],')<br>')
document.write('3. Adım: y=',result,'<br>')