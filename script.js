let card = document.getElementById("card").value;
var modal = document.getElementById('popup-modal');
var span = document.getElementsByClassName("modal-close")[0];

window.onload = function() {
    setTimeout(function() {
        modal.style.display = 'block';
    }, 3000);
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function check() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

function changeFunc() {
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    if (selectedValue == "Visa") {
        document.getElementById("cardlogo").src = "./visa.png";
        document.getElementById("cardlogo").style.width = "auto";
        document.getElementById("cardlogo").style.height = "70px";
    }
    else if (selectedValue == "American Express") {
        document.getElementById("cardlogo").src = "https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/1.8.0/package/dist/img/logos/dls-logo-bluebox-solid.svg";
        document.getElementById("cardlogo").style.height = "100px";
    }
}