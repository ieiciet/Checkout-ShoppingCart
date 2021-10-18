let card = document.getElementById("card").value;
function check() {
    alert(card);
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
