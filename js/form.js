
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

function send() {
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementById('result').innerText.slice(23)= result;
        document.getElementById("UserEnter").submit();
}

function verify_send() {
   verify();
   send();
}


    let messageText = document.getElementById("result").innerText
    console.log(messageText)
    let result;
    let check = false;



    const elementcalculateX = document.getElementById("calculateX");
    elementVerify.addEventListener('click', calculateX);

    const elementSend = document.getElementById("send");
    elementSend.addEventListener('click', send)
