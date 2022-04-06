function toggleMenu() {
    //Zet elementen met klasse .menu in variabele menu
    var menu = document.querySelector(".menu");

    //Als menu de klasse "nav-visible" heeft
    if (menu.classList.contains("nav-visible")) {
        //Verwijder klasse "nav-visible"
        menu.classList.remove("nav-visible");
    }
    //Anders
    else {
        //Voeg klasse "nav-visible" toe
        menu.classList.add("nav-visible");
    }
}

function toggleAnswer(element) {
    var nextElement = element.nextElementSibling;

    if (nextElement.style.display == "") {
        nextElement.style.display = "block";
    }
    else if (nextElement.style.display = "block") {
        nextElement.style.display = "";
    }
}

function checkAge() {
    var birthmonth = document.getElementById("month").value;
    var birthday = document.getElementById("day").value;
    var birthyear = document.getElementById("year").value;

    var birthdate = new Date(birthyear + " " + birthmonth + " " + birthday);
    var currentdate = Date.now();
    var difference = new Date(currentdate - birthdate).getFullYear();

    var age = (difference - 1970);

    if (age < 25) {
        document.getElementById("overlay").style.display = "none";
    }
    else {
        alert("Sorry, you're too old for this tournament!");
    }
}