document.getElementById("btn").onclick = function() {
    setTimeout(() => {
        document.getElementById("text").innerHTML = "ボタンをクリックしました";
    },2000)};