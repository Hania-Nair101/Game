var char1 = document.getElementById("char1")
var char2 = document.getElementById("char2")
var left = 0
var right = 50
function characterOne(event) {
    console.log(event.keyCode);
    if (event.keyCode == 65 && left < 1120) {
        left = left + 10
        char1.style.left = left + "px"
        char1.src = ("iimages/run 1.gif")
        char1.style.height = "200px"
        setTimeout(() => {
            char1.src = "iimages/stand 1.gif"
            char1.style.height = "150px"

        }, 1000)
    }
    if (event.keyCode == 90 && left > 50) {
        left = left - 10
        char1.style.left = left + "px"
    }
    if (event.keyCode == 83) {
        char1.src = ("iimages/fight 1.gif")
        setTimeout(() => {
            char1.src = "iimages/stand 1.gif"
        }, 1000)

    }

}

function characterTwo(event) {
      console.log(event.keyCode);
    if (event.keyCode == 37 && right < 1120) {
        right = right + 10;
        char2.style.right = right + "px"
        char2.src = "iimages/run 2.gif"
        char2.style.height = "130px"
        setTimeout(() => {
            char2.src = ("iimages/stand 2.gif")

        }, 1000)

          if (event.keyCode == 39 && left > 40) {
        left = left - 10
        char2.style.left = left + "px"
    }


    // if (event.keyCode == 40) {
    //     char2.src = ("iimages/fight 2.gif")
    //     setTimeout(() => {
    //         char2.src = "iimages/stand 2.gif"
    //     }, 1000)

    // }


        
    








    }

}











window.onkeydown = characterOne
document.onkeydown = characterTwo