
function calculateX() {
            var a = parseFloat(document.getElementById("inputA").value);
            var x;

            if (a < 62) {
                x = Math.pow(a, 2) + 4 + 5;
            } else {
                x = 1 / (Math.pow(a, 2) + 4 * a + 5);
            }
            document.getElementById("result").innerHTML = "Результаты вычислений: " + x;
}

const node_for_click_all = document.getElementById("send")

function find_edit_all(){


let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
let result = document.getElementById('result').innerText.slice(23)
        document.getElementById("UserEnter").submit();
        }


node_for_click_all.addEventListener("click",find_edit_all)
