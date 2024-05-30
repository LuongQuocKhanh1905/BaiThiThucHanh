function snt(num){
    if(num==1) return false;
    if(num==2) return true;
    if(num %2 === 0 || num % 3 === 0 ) return false;
    let i = 5;
    while (i * i <= num){
        if (num % i === 0 || num % (i+2)=== 0 )return false;
        i +=6
    }
    return true;
    
}

let n = parseInt(prompt('Nhap so phan tu cua mang :'))
let arra = [];
for (let i = 0; i < n; i++) {
    let value = parseInt(prompt('nhap so phan tu thu ' +(i + 1) + ":"))
    arra.push(value);
}
document.write('Mang da nhap la :' + arra + '<br>' )

let arrb = [];
for (let i = 0; i < arra.length; i++) {
    if(snt(arra[i])){
        arrb.push(arra[i]);
    }
}
document.write('Mang b gom cac so nguyen to la : ' + arrb)

