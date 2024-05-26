let btn = document.querySelector(".download");

btn.addEventListener('click', ()=>{
    alert("resume downloaded");
} )


const dark = document.querySelector('.dark-mode-btn')

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}


dark.addEventListener('click',toggleDarkMode())