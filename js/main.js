var area = {}
area.toggle = document.querySelectorAll('div.area-menu-item')
area.description = ["Programação WebProgramação WebProgramação WebProgramação WebProgramação WebProgramação WebProgramação WebProgramação WebProgramação WebProgramação WebProgramação WebProgramação WebProgramação WebProgramação WebProgramação WebProgramação WebProgramação WebProgramação WebProgramação WebProgramação WebProgramação Web"]
area.title = ["Programação Web", "Programação mobile", "Desenvolvimento de jogos", "Hardware", "Edição de vídeos", "Design Gráfico"]

var currentArea = {}

currentArea.title = document.querySelector('h2.area-title')
currentArea.description = document.querySelector('p.area-description')

for (let i = 0; i < area.toggle.length; i++) {
    area.toggle[i].addEventListener('mouseenter', ev=>{
        currentArea.title.innerText = area.title[i]
        currentArea.description.innerText = area.description[i]
        allGrey();
        area.toggle[i].style.color = '#65ae84'
    })
}

var team = {}
team.foto = document.querySelectorAll('img.team-foto')
team.name = document.querySelectorAll('div.team-name')
team.net = document.querySelectorAll('div.team-net')

function allGrey() {
    for (let i = 0; i < area.toggle.length; i++) {
        area.toggle[i].style.color = '#d2d2d2'
    }
}

var side = document.querySelector('a aside')

if (scrollY >= innerHeight) {
    side.style.position = 'fixed'
    side.style.display = 'flex'
} else {
    side.style.display = 'none'
}

window.addEventListener('scroll', ev=>{
    if (scrollY >= innerHeight - 10) {
        side.style.position = 'fixed'
        side.style.display = 'flex'
    }else{
        side.style.display = 'none'
    }
})

var shadow = document.querySelector('aside.shadow')
var sidemenu = document.querySelector('aside.side-menu-m')
var trigger = document.querySelector('.side-menu-m-trigger')
var links = document.querySelectorAll('a.menu-side')

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', ev=>{
        if (sidemenu.style.left == '0vw') {
            closeMenu()
        } else {
            openMenu()
        }  
    })
}

trigger.addEventListener('click', ev=>{
    if (sidemenu.style.left == '0vw') {
        closeMenu()
    }else{
        openMenu()
    }
})

shadow.addEventListener('click', ev=>{
    if (sidemenu.style.left == '0vw') {
        closeMenu()
    } else {
        openMenu()
    } 
})

function openMenu(){
    sidemenu.style.left = '0vw'
    shadow.style.left = '70vw'
}

function closeMenu() {
    sidemenu.style.left = '-70vw'
    shadow.style.left = '-30vw'
}

var fotoTrigger = document.querySelectorAll('.project-foto-mobile')
var fotoBody = document.querySelectorAll('.project-body')

for (let i = 0; i < fotoTrigger.length; i++) {
    fotoTrigger[i].addEventListener('click', ev=>{
        if (fotoBody[i].style.display != 'none' && fotoBody[i].style.display.trim() != '') {
            fotoBody[i].style.display = 'none'
        }else{
            hideAll()
            fotoBody[i].style.display = 'flex'
        }
    })
}

function hideAll() {
    for (let i = 0; i < fotoBody.length; i++) {
        fotoBody[i].style.display = 'none'
    }
}