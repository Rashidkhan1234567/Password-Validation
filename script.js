//   Buttons

const showPass_Btn = document.getElementById("showPass");
const btn = document.getElementById("btn");

//     Others

let validation = document.querySelectorAll(".validation p");
let dots = document.querySelectorAll(".dots p");
let savePass = document.getElementById("savePass");
let pass = document.getElementById("pass");

//   create btn to checked all condition

let number = false
let max = false
let min = false
let specialCharacter = false
let upperCase = false
let lowerCase = false

//   Show Password and Hide Password function

showPass.addEventListener("click", () => {
  if (pass.type === "password") {
    pass.type = "text";
    showPass.innerHTML = "Hide";
  } else {
    pass.type = "password";
    showPass.innerHTML = "Show";
  }
});

//   Password Validation

pass.addEventListener("input" , ()=>{
  let getValue = pass.value

  //      number check

  const numberRegex = /\d/;
  if(numberRegex.test(getValue)){
    number = true
    validation[0].style.textDecoration = "none";
    dots[0].style.backgroundColor = "green";
    dots[0].style.boxShadow = "0px 0px 10px green";
  }else{
    number = false
    validation[0].style.textDecoration = "line-through";
    dots[0].style.backgroundColor = "red";
    dots[0].style.boxShadow = "0px 0px 10px red";
  }

  //   max check

  if(getValue.length >= 20){
    max = false
    validation[1].style.textDecoration = "line-through";
    dots[1].style.backgroundColor = "red";
    dots[1].style.boxShadow = "0px 0px 10px red";
  }else{
    max = true
    validation[1].style.textDecoration = "none";
    dots[1].style.backgroundColor = "green";
    dots[1].style.boxShadow = "0px 0px 10px green";
  }

  //   min check

  if(getValue.length <= 10){
    min = false
    validation[2].style.textDecoration = "line-through";
    dots[2].style.backgroundColor = "red";
    dots[2].style.boxShadow = "0px 0px 10px red";
  }else{
    min = true
    validation[2].style.textDecoration = "none";
    dots[2].style.backgroundColor = "green";
    dots[2].style.boxShadow = "0px 0px 10px green";
    
  }

  //     uppercase check
  const uppercaseRegex = /[A-Z]/;
  if(uppercaseRegex.test(getValue)){
    upperCase = true
    validation[3].style.textDecoration = "none";
    dots[3].style.backgroundColor = "green";
    dots[3].style.boxShadow = "0px 0px 10px green";
  }else{
     upperCase = false;
     
    validation[3].style.textDecoration = "line-through";
    dots[3].style.backgroundColor = "red";
    dots[3].style.boxShadow = "0px 0px 10px red";
  }

// lowercase check

   const lowercaseRegex = /[a-z]/;
  if(lowercaseRegex.test(getValue)){
      lowerCase = true
    validation[4].style.textDecoration = "none";
    dots[4].style.backgroundColor = "green";
    dots[4].style.boxShadow = "0px 0px 10px green";
  }else{
     lowerCase = false;
    validation[4].style.textDecoration = "none";
    validation[4].style.textDecoration = "line-through";
    dots[4].style.backgroundColor = "red";
    dots[4].style.boxShadow = "0px 0px 10px red";
  }

  //    special character

   const specialRegex = /[!@#$%^&*(),.?":{}|<>]/;
  if(specialRegex.test(getValue)){
     specialCharacter = true;
    validation[5].style.textDecoration = "none";
    dots[5].style.backgroundColor = "green";
    dots[5].style.boxShadow = "0px 0px 10px green";
  } else{
     specialCharacter = false;
    validation[5].style.textDecoration = "none";
    validation[5].style.textDecoration = "line-through";
    dots[5].style.backgroundColor = "red";
    dots[5].style.boxShadow = "0px 0px 10px red";
  }

  // console.log(number , max , min , upperCase , lowerCase , specialCharacter);
  // console.log("vssss");
  //   save password

  if(number && max && min && specialCharacter && upperCase && lowerCase){
     btn.disabled = false;
  } else{
     btn.disabled = true;
  }
})

btn.addEventListener("click", ()=>{
  let getValue = pass.value
  pass.value = "";
  savePass.innerHTML +=  `<li>${getValue}<i class="del fa-regular fa-circle-xmark"></i></li>`
  
  validation[0].style.textDecoration = "line-through";
  dots[0].style.backgroundColor = "red";
  dots[0].style.boxShadow = "0px 0px 10px red";
  validation[2].style.textDecoration = "line-through";
  dots[2].style.backgroundColor = "red";
  dots[2].style.boxShadow = "0px 0px 10px red";
  validation[3].style.textDecoration = "line-through";
  dots[3].style.backgroundColor = "red";
  dots[3].style.boxShadow = "0px 0px 10px red";
  validation[4].style.textDecoration = "none";
  validation[4].style.textDecoration = "line-through";
  dots[4].style.backgroundColor = "red";
  dots[4].style.boxShadow = "0px 0px 10px red";
  validation[5].style.textDecoration = "none";
  validation[5].style.textDecoration = "line-through";
  dots[5].style.backgroundColor = "red";
  dots[5].style.boxShadow = "0px 0px 10px red";

  let del = document.querySelectorAll(".del")
  del.forEach(item => {
    item.addEventListener("click", ()=>{
      item.parentElement.remove()
    })
  });
})