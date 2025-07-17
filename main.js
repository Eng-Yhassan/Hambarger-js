// Hambarger Menu Bar
const Dropdown=document.querySelector("#Dropdown");
const Dropdown_pages=document.querySelector("#Dropdown_pages");
const x_mark=document.querySelector("#x_mark");

Dropdown.addEventListener("click",()=>{
    Dropdown_pages.style.display= 'block';
    Dropdown.style.display= 'none';
    x_mark.style.display= 'block'
})
x_mark.addEventListener("click",()=>{
    Dropdown_pages.style.display= 'none';
    Dropdown.style.display= 'block';
    x_mark.style.display= 'none'
})


// Cart_incriment
const Cart_incriment=document.querySelector("#Cart_incriment");
const Cart_incriment_Drop=document.querySelector("#Cart_incriment_Drop");
const Explore_More=document.querySelector("#Explore_More");

let incriment= 0

Explore_More.addEventListener('click',()=>{
    incriment ++
    Cart_incriment.innerHTML= `(${incriment})`;
    Cart_incriment_Drop.innerHTML= `(${incriment})`;
})