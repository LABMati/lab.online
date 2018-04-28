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

function allGrey() {
    for (let i = 0; i < area.toggle.length; i++) {
        area.toggle[i].style.color = '#d2d2d2'
    }
}