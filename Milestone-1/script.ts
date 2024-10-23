const toogleButton = document.getElementById("toogle-skill") as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement

toogleButton.addEventListener('click', ()=> {
    if(skills.style.display === 'none')
    {
        skills.style.display = 'block'
    } else {
        skills.style.display ='none'
    }
})