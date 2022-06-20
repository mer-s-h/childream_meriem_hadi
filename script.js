var food = ["avocado", "bacon", "bagel", "baguette-bread", "banana", "beans", "bell-pepper", "blueberries", "bread", "broccoli", "butter", "candy", "carrot", "cheese-wedge", "cherries", "chestnut", "chocolate-bar", "coconut", "cooked-rice", "croissant", "cucumber", "cut-of-meat", "ear-of-corn", "egg", "eggplant", "fried-shrimp", "garlic", "glass-of-milk", "grapes", "green-apple", "hot-pepper", "ice", "kiwi-fruit", "leafy-green", "lemon", "lollipop", "mango", "meat-on-bone", "melon", "mushroom", "olive", "onion", "peach", "peanuts", "pear", "pineapple", "potato", "poultry-leg", "red-apple", "salt", "strawberry", "tangerine", "tomato", "watermelon"]
var food_fr = ["avocat", "bacon", "bagel", "baguette", "banane", "haricot", "poivron", "myrtilles", "pain", "broccoli", "beurre", "bonbon", "carotte", "fromage", "cerise", "chataigne", "chocolat", "noix-de-coco", "riz", "croissant", "concombre", "viande", "maïs", "oeuf", "aubergine", "crevette", "Ail", "lait", "raisin", "pomme-verte", "piment", "glace", "kiwi", "salade", "citron", "sucette", "mangue", "viande-osseu", "melon", "champignon", "olive", "oignon", "peche", "cacahuete", "poire", "ananas", "patate", "cuisse_de_poulet", "pomme_rouge", "sel", "fraise", "mandarine", "tomate", "pasteque"]

var emoji = document.getElementById("all_emoji")
var receipts = document.getElementById("receipts")
var result = document.getElementById("result")
var preparer = document.getElementById("btn_green")
var result = document.getElementById("result")
var Img = document.createElement("img");

var array_receipts = []


food.forEach(element => {

    // loop add all emoji 

    Img.setAttribute('src', './src/emoji/' + element + '.png');
    Img.setAttribute('alt', element);
    Img.setAttribute("id", element);
    Img.setAttribute("class", "ingredient");
    emoji.appendChild(Img.cloneNode(true));

    // on click add emoji in the liste with limit of 3 and add number of ingrediant below

    document.getElementById(element).addEventListener("click", function () {
        if (array_receipts.includes(element)) {
            receipts.children[array_receipts.indexOf(element)].children[1].innerHTML++
        }
        else if (array_receipts.length < 3) {
            Img.setAttribute('src', './src/emoji/' + element + '.png');
            Img.setAttribute("class", "picked_ingredient");
            receipts.children[array_receipts.length].children[0].appendChild(Img.cloneNode(true));
            receipts.children[array_receipts.length].children[1].innerHTML = 1
            array_receipts.push(element)
        }
    })
})

// display result for now it's the same cake every time 

preparer.addEventListener("click", function () {

    if (array_receipts.length >= 2) {

        var p = document.createElement("p");
        result.innerHTML = "<h2> bravo <img class=\"ingredient\" src=\"./src/emoji/party-popper.png \" > vous venez de préparer </h2>"
        var text_p = document.createTextNode("gateau a la fraise");

        Img.setAttribute('src', './src/gateau.jpg');
        Img.setAttribute('alt', "gateau");
        Img.setAttribute("id", "gateau");
        Img.setAttribute("class", "ingredient");

        p.appendChild(text_p);
        result.appendChild(p);

        result.appendChild(Img.cloneNode(true));
    }
    else{
        result.innerHTML = "tu dois choisir au moins deux ingredient !"
    }

})






