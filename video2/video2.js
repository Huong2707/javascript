//alert("Hello word from javascript")


let a=8;
let b='4';
console.log('hello word', 'a=',a,'b',b)

console.log('hello world html'.toUpperCase())//chuyen ky tu thanh inhoa
let c=16;
let d='8';
let e=Number(b)//convert tu string sang number de co the so sanh 2 so nguyen vi du a va d
let h=+d // day cung la cah convert tu string sang so ma k can dung ham number thuong nta se hay dung kieu nay hon
console.log('d value:',d,'type d:',typeof d)
console.log(a===h,'c:=',typeof c,'d:=',typeof d)
console.log(`Hoi dan it check strings:a= ${a} b=${b}`)

let obj={
    name:'Thuhuong',
    address:'Bac Giang',
    email:'',
    gender:''
};
obj.name='Huong'
//2 cach in ra tu obj
console.log(`what is your name ?`,`My name's`,obj.name,obj)
console.log(`where are you from ?`,`I'm from`,obj['address'])