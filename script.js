//select the section with an id of container without using querySelector
let q1 = document.getElementById("container")
console.log(q1)

//select the section with an id of container using querySelector
const q2=document.querySelector("#container")
console.log(q2)

//Select all of the list items with a class of "second"
let q3=document.getElementsByClassName("second")
console.log(q3)

//select a list item with a class of third,but only the list item inside of the ol tag
let q4=document.querySelector("ol")
let q4li=q4.getElementsByClassName("third")
console.log(q4li)

//Give the section with an id of container the text "Hello!"
const q5=document.querySelector("#container")
console.log(q5)
q5.innerText = "Hello!"

//Add the class main to the div with a class of footer
let q6 = document.querySelector(".footer")
console.log(q6)
q6.classList.add("main")

//remove the class main on the div with a class of footer
let q7=document.querySelector(".footer")
console.log(q7)
q7.classList.remove("main")

//create a new li element
let sub = document.createElement("li")
console.log(sub)

//give the li the text "four"
sub.textContent="four"

//append the li to the ul element
let menu=document.querySelector("ul")
console.log(menu)
menu.append(sub)

//loop over all of the lis inside the ol tag and set background color green
let oltag=document.querySelectorAll("ol li")
oltag.forEach(element=>element.style.background="red")


//remove the div with a class of footer
let foot=document.querySelector(".footer")
foot.remove()
console.log(foot)


