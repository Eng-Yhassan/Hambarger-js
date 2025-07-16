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