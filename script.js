// // // var a ="Hello";
// // var b = "World";
// // console.log(a+b);
// // console.log(a.length);
// // var a1 =[1,2,3];
// // a1.push(4);

// // console.log(a1);
// // a1.unshift(6)
// // console.log(a1);

// var glo;
// function func1(){
//     var a = 20;
//     //console.log(a);
// } 

// function func2(){
//     var res="";
//     if(typeof glo != 'undefined')
//         res+="Glo: "+glo;
//     if(typeof a != 'undefined')
//         res+="a: "+a;
//     console.log(res+"Null")
// }

// func1()
// func2()
// func2()
// func2()

// console.log("Error")

let incremenrt=document.getElementById("h2-inc")
let count=0;
function incre(){
    
    count+=1;
    incremenrt.textContent=count;
}
let saveRes=document.getElementById("p-res")
function saveVal(){
    let ress=count+ "-"
    saveRes.textContent+=ress;
    count=0;
       
}
