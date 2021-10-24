var form = document.querySelector("form");

var modal = document.getElementById('popup-modal');
var span = document.getElementsByClassName("modal-close")[0];

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
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

function validate_cardnumber(cardNo)
{
    var visaCardRegex=/^(?:4[0-9]{12})(?:[0-9]{3})$/;
    var americanExpCardRegex=/^(?:3[47][0-9]{13})$/;
    if (visaCardRegex.test(cardNo) || americanExpCardRegex.test(cardNo)){
        return true;
    }
    
    alert("Please enter valid card number!");
    return false;
}

function validate_holdername(cardHolder) {
    var holdername_regex = /^([a-zA-Z ]){2,30}$/;
    if(holdername_regex.test(cardHolder)){
        return true;
    }

    alert("Please enter valid card holder name!");
    return false;
}

function validate_expiration(givenDate) {
    var givenDate = givenDate;
    var CurrentDate = new Date();
    givenDate = new Date(givenDate);

    if(givenDate > CurrentDate){
        return true;
    }

    alert("Date shouldn't be less than today!");
    return false;
}

function validate_cvv(cvv) {
    var cvv_regex = /^[0-9]{3,4}$/;
    if(cvv_regex.test(cvv)){
        return true;
    }

    alert("Please enter valid CVV number!");
    return false;
}

form.onsubmit = (e) => {
    e.preventDefault();
    var cardNo = document.getElementById("cardNo");
    var cardHolder = document.getElementById("cardHolder");
    var cvv = document.getElementById("cvv");
    var expires = document.getElementById("expires");

    if(validate_cardnumber(cardNo.value) && validate_holdername(cardHolder.value) && validate_cvv(cvv.value) && validate_expiration(expires.value)){
        modal.style.display = "block";
    }
};
