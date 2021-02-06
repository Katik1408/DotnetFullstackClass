// // // console.log('This is JS');

// // // alert('This is from App.js file');

// // //  let result = prompt('Your Name');

// // //  console.log(result);

// // // let a = 5;

// // // console.log(a);

// // // // let a = 5;

// // // console.log(typeof(a));

// // // let str = 'Hello';

// // // console.log(str);

// // // console.log(typeof(str));

// // // let isApproved = false;

// // // console.log(typeof(isApproved));

// // // let firstName = undefined;

// // // console.log(typeof(firstName));

// // // let lastName = null;

// // // console.log(typeof(lastName));

// // function showDate(){
// //     document.getElementById('cdate').innerHTML = new Date();
// // }

// // // window.showDate = function(){
// // //     document.getElementById('cdate').innerHTML = new Date();
// // // }

// // function printTable(){
// //     let num;
// //     num = document.getElementById('num').value;
// //     for(let i=1;i<=10;i++){
// //         let num1,num2;
// //         num1 = document.getElementById('iNum');
// //         num1.innerHTML += num +"<br />";

// //         num2 = document.getElementById('multiple');
// //         num2.innerHTML += i +"<br />" ;

// //         let res = document.getElementById('rNum');

// //         res.innerHTML += (num*i) +"<br />";
// //     }
// // }

// // function showInfo(obj){
// //     console.log(obj);
// //     document.getElementById('info').innerHTML = 'FirstName should name have any space';
// // }

// // function mul(p1,p2){

// //     console.log(p1+" "+p2);

// // document.getElementById('result').innerHTML =  p1*p2;
// // }

// // function showChars(event){
// //     let x = event.keyCode;
// //     document.getElementById('demo').innerHTML += String.fromCharCode(x);
// // }

// // function clearScreen(){
// // let x = document.getElementById('demo');
// // console.log(x);
// // if(x.contains(String.fromCharCode())){
// //     document.getElementById('demo').innerHTML = ' ';
// // }
// // }

// // let arr = [1,2,3,4,5];

// // let ar =[1,'two',true,null];

// // console.log('Length of ar ' +ar.length);

// // console.log('ar Array-----------')

// // for(let i = 0;i<ar.length;i++){
// //     console.log(ar[i]);
// // }

// // console.log('-----------')

// // // console.log('Array first value '+ arr[0]);
// // // console.log(arr[1]);

// // for(let i =0;i<5;i++){
// //     console.log(arr[i]);
// // }

// // console.log('while loop-----------')

// // let i=0;
// // while(i<5){
// //     console.log(arr[i]);
// //     i++;
// // }

// // console.log('Foreach--------')

// // arr.forEach(ele=>{
// //     console.log(ele);
// // })

// // function add(){

// //     let a,b,c;
// //     a = 5;
// //     b = 6;
// //     c = a+b;
// //     console.log(c);
// // }

// // function add(num1,num2){
// //     let c = num1+num2;
// //     console.log(c);
// // }

// // function printArray(){
// //     add(3,4);
// //     let arr = ['One',2,3,4];

// //     arr.forEach(e=>{
// //         console.log(e);
// //     })
// // }

// //  printArray();
//  // add();

// //  function showTime(){
// //     document.getElementById("time").innerHTML = new Date();
// //  }

//  let person = {
//      firstName: "Josh",
//      age:30,
//      contact:111111
//  }

//  a = 5;

//  class Person{

//     constructor(){
//         console.log("Inside Constructor of Person");
//     }
//     getPersonData(){
//         let a = 9;
//         console.log("Inside PersonData Method");
//     }
//  }
// a = 5;

//  let p = new Person();

//  p.getPersonData();

//  function a(a){
//      return a;
//  }

//  (a) => a;

// function add(a,b){
//     return a+b;
// }

// let res  = (a,b) => a+b;
// console.log(res(5,6));

// function add(a,b){
//     return a+b;
// }

// let result  = a => a;

// console.log(result(5,6));

// function showTime(){
//     document.getElementById("time").innerHTML = new Date();
// }

// function checkUserName(){
//     let a = document.getElementById("info").innerHTML = "Username cannot have space";
// console.log(a);
// }

// checkUserName();

// function add(a,b){

//     let c;
//     c = a+b;
//     console.log(c);
// }
// add(6,7);

function validateForm() {
  let username = window.document.getElementById("txtUname");
  let puname = document.getElementById("uname");
  let emailid = document.getElementById("txteid");
  let peid = document.getElementById("eid");
  let pwd = document.getElementById("textpwd");
  let ppwd = document.getElementById("pwd");
  let cpwd = document.getElementById("txtcpwd");
  let pcpwd = document.getElementById("cpwd");

  if (username.value == "") {
    username.style.border = "2px solid red";
    puname.innerHTML = "Username cant be empty";
    puname.classList.add("text-danger");
    return false;
  }
  if(username.value.length < 4){
    username.style.border = "2px solid red";
    puname.innerHTML = "Username should be atleast 4 characters";
    puname.classList.add("text-danger");
    return false;
   }
  if (emailid.value == "") {
    emailid.style.border = "2px solid red";
    peid.innerHTML = "Email id cant be blank";
    peid.classList.add("text-danger");
    return false;
  }
  if (pwd.value == "") {
    pwd.style.border = "2px solid red";
    ppwd.innerHTML = "Password cant be blank";
    ppwd.classList.add("text-danger");
    return false;
  }
  if (cpwd.value == "") {
    cpwd.style.border = "2px solid red";
    pcpwd.innerHTML = "Confirm Password cant be blank";
    pcpwd.classList.add("text-danger");
    return false;
  }

  if(pwd.value != cpwd.value){
    cpwd.style.border = "2px solid red";
    pcpwd.innerHTML = "Confirm Password is not same as password";
    pcpwd.classList.add("text-danger");
    return false;
  }

}

function checkUserName() {
  let username = window.document.getElementById("txtUname");
  let puname = document.getElementById("uname");
  username.style.border = "";
  puname.innerHTML = "";
}

// function checkName(){
//     let username = window.document.getElementById('txtUname');
//     let pusername = document.getElementById('uname');
//     console.log(pusername);
//     console.log(username);
//     username.style.background ="#fc5c65";
//     username.style.border = "5px solid  #eb3b5a";

//     pusername.innerHTML = 'Username cannot have spaces';
//     pusername.classList.add('text-danger');
// }
