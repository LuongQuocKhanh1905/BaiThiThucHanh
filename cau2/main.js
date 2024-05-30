//Ham tinh gia tri thuc cua phan so
function ssgtt(ts,ms){
    return ts/ms;
}

// Ham so sanh phan so 
function ktps(ts1,ts2,ms1,ms2){
    return ssgtt(ts1, ms1) === ssgtt(ts2,ms2);
}

let ts1 = parseInt(prompt('Nhap tu so cua so thu nhat :'))
let ms1 = parseInt(prompt('Nhap mauso cua so thu nhat :'))
let ts2 = parseInt(prompt('Nhap tu so cua so thu hai :'))
let ms2 = parseInt(prompt('Nhap mau so cua so thu hai :'))

if (ktps(ts1 , ms1 , ts2 , ms2  )  ){
    document.write('Hai phan so bang nhau')
}else{
    document.write('Hai phan so khong bang nhau')
}
