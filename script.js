let inputAll = document.querySelectorAll("input");
let fm = document.querySelector("form")
let head = document.querySelector("h1")
let Errors = document.querySelectorAll("small");
let AllLabel = document.querySelector("label");
let btn = document.querySelector("button")
let CirBtn = document.querySelector(".circle")
let Mouse=document.querySelector(".mouse");
let body=document.querySelector("body")
body.addEventListener("mousemove",(e) => { 
   Mouse.style.left =e.clientX+"px";
   Mouse.style.top =e.clientY+"px";
   
 })
 body.addEventListener("mouseleave",(e) => { 
      Mouse.style.opacity ="0";

   
 })
  body.addEventListener("mouseenter",(e) => { 
      Mouse.style.opacity ="1";

   
 })
 
 


CirBtn.addEventListener("dblclick", () => {
    console.log("helo")
    btn.style.display = "none"
    window.print("helo")
    setTimeout(() => {
        btn.style.display = "initial"
    }, 1000);
})
console.log(Errors)
console.log(inputAll)
let Form = document.querySelector("form")
Form.addEventListener("submit", (e) => {
    e.preventDefault()

    if (inputAll[2].value === "") {
        inputAll[2].style.outline = "1px solid red";
        Errors[2].innerText = `please  ${inputAll[0].value} fill comments box`;
        Errors[2].style.display = "flex";
    }
    else {
        inputAll[2].style.outline = "none";
        Errors[2].style.display = "none";
        Errors[2].innerText = `please  ${inputAll[0].value} fill comments box`;
    }


    // for name validation 
    if (inputAll[0].value === "") {
        inputAll[0].style.border = "1px solid red"
        Errors[0].style.display = "flex"
        Errors[0].innerText = "Please Enter Name"

    }
    else if (!/^[a-zA-Z ]+$/.test(name)) {
    inputAll[0].style.border = "1px solid red";
    Errors[0].style.display = "flex";
    Errors[0].innerText = "Please Enter only text";
}
    else {
        inputAll[0].style.border = "none"
        Errors[0].innerText = ""
        Errors[0].style.display = "none"
    }
    if (inputAll[1].value == "") {
        inputAll[1].style.border = "1px solid red"
        Errors[1].style.display = "flex"
        Errors[1].innerText = "Please Enter Phone number"
    }
    else if (inputAll[1].value.length !== 10) {
        inputAll[1].style.border = "1px solid red"
        Errors[1].innerText = "only 10 digits......"
        Errors[1].style.display = "flex"
        alert("only 10 digits Mr " + inputAll[0].value)


    }


    else {
        inputAll[1].style.border = "none"
        Errors[1].style.display = "none"

    }




})


