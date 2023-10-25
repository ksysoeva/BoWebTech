const tap_click = document.getElementById("click_here")
function edit_name(){
    document.getElementsByTagName('div')[3].innerText='Sysoeva'
    document.getElementsByTagName('div')[4].innerText='Kristina'
    document.getElementsByTagName('div')[7].innerText='XXXI.X.MMIV'
}

tap_click.addEventListener("click",edit_name)
