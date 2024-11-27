const showNav = () => {
    const nav = document.getElementById('nav--Links');
    const navButton = document.getElementById('nav--button')
    nav.classList.toggle('none');

    if(nav.classList.contains('none')){
        navButton.src = 'images/nav.png'
    } else{
        navButton.src = 'images/cross.svg'
    }
}

document.getElementById('nav--button').addEventListener('click', showNav)