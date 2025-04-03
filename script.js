document.addEventListener("DOMContentLoaded", function () {
    //eienschap
    let randomWordsEigenschap = ["domme","gay","zesty","coole","slime","lieve"]
    let chosenWordEigenschap = Math.floor(Math.random() * randomWordsEigenschap.length);
    document.getElementById("Eigenschap").innerHTML = randomWordsEigenschap[chosenWordEigenschap];


    //eienschap
    let randomWordsver = ["verbreiseld.","gebombardeer.","vernietigen."]
    let chosenWordver = Math.floor(Math.random() * randomWordsver.length);
    document.getElementById("ver").innerHTML = randomWordsver[chosenWordver];


    //random image
    let randomImages = ["natuur.jpg", "natuur2.jpg", "natuur4.png"];
    let chosenImage = Math.floor(Math.random() * randomImages.length);
    let imgElement = document.createElement("img");
    imgElement.src = randomImages[chosenImage];
    imgElement.style.maxWidth = "100%";
    document.getElementById("img").after(imgElement);



    
    let randomColors = ["#228B22", "#FF0000", "#1E90FF", "#800080", "#FFA500"];
    let chosenColor = Math.floor(Math.random() * randomColors.length);
    document.getElementById("Eigenschap").style.color = randomColors[chosenColor];



   
    let randomColorss = ["#228B22", "#FF0000", "#1E90FF", "#800080", "#FFA500"];
    let chosenColorr = Math.floor(Math.random() * randomColorss.length);
    document.getElementById("ver").style.color = randomColors[chosenColorr];


    // Random number between 1 and 100
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("number").innerHTML = randomNumber;


    // voer code uit als je op de knop klikt 
    document 
    .getElementById("toonVerhaal") 
    .addEventListener("click", function () { 
        // test of de knop werkt 
        console.log("Toon verhaal"); 
        // verwijder en voeg de verborgen class toe 
        document.getElementById("verhaal").classList.remove("verborgen"); 
        document.getElementById("butten").classList.add("verborgen");

        let naam = document.getElementById("naamTextfield").value; 
        console.log("NAAM" + naam); 
        document.getElementById("naam1").innerHTML = naam;


        let enemyName = document.querySelector('input[name="enemy"]:checked').value; console.log("enemyName:", enemyName);
        document.getElementById("landNaam").innerHTML = enemyName;

        

        let checkboxes = document.querySelectorAll('input[type="checkbox"]'); // = 
        let selectedValues = ""; 
        checkboxes.forEach(function (checkbox) { 
   
        if (checkbox.checked) { 

        selectedValues += checkbox.value + " en ";
      
        } 
        }); 
        selectedValues = selectedValues.slice(0, -4); // verwijder de laatste 2 le 
        console.log("Selected values:" + selectedValues);



        document.getElementById("monster").innerHTML = selectedValues ;
        
        
    }); 

    // Add event listener for monster checkbox
    document.getElementById("weapon1").addEventListener("change", function() {
        if (this.checked) {
            document.body.style.backgroundImage = "url(moster.jpg)";
        } else {
            document.body.style.backgroundImage = "url(achtergrond.jpg)";
        }
    });

});