//inserting the images
function insertImages()
{
    document.querySelectorAll('.box').forEach(image => {
        if(image.innerText.length !==0 ){
            if(image.innerText == 'Wcheck' || image.innerText == 'Rcheck'){
                image.innerHTML = `${image.innerText} <img class='all-img all-pown'
                src="${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
            else{
                image.innerHTML = `${image.innerText} <img class='all-img' src="$
                {image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImages()

//Coloring the board

function coloring()
{
    const color = document.querySelectorAll('.box')

    color.forEach(color =>{
        getId=color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup 

        if (a % 2 == 0){
            color.style.backgroundColor = 'rgb(232 235 239'
        }
        if (a % 2 !== 0){
            color.style.backgroundColor = 'rgb(125 135 150'
        }
    })
}
coloring()

    //reset button

document.getElementById("reset-btn").addEventListener("click",function () {
    location.reload();
})

tog = 1

document.querySelectorAll('.box').forEach(item => {

    item.addEventListener('click',function (){

        if (item.style.bacgroundColor == 'greenyellow' && item.innetrText.length == 0) {
            tog = tog + 1
        }

        else if (item.style.backgroundColor == 'greenyellow' && item.innerText.length !== 0) {

            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'blue') {
                    blueId = i.id
                    blueText = i.innerText

                    document.getElementById(blueId).innerText = ''
                    item.innerText = blueText
                    coloring()
                    insertImage()
                    tog = tog + 1
                }
            })
        }


        getId = item.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        arr.push('0')
        aup = eval(arr.join(''))
        a = aside + aup

        //function to display the availabel apaths for all piees

        


        //toggling the turn

        if (tog % 2 !== 0) {
            document.getElementById('tog').innerText = "Black's Turn"
            whosTurn('W')
        }
        if (tog % 2 ==0) {
            document.getElementById('tog').innerText = "Red's Turn"
        }

        reddish()



    })
     
})

                    
const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })

})
containers.forEach(container => {
    container.addEventListener('dragover', () => {
        const draggable = document.querySelector('.dragging')
        container.appendChild(draggable)
    })
})