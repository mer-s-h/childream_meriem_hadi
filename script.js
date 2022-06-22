var food = ["avocado", "bacon", "bagel", "baguette-bread", "banana", "beans", "bell-pepper", "blueberries", "bread", "broccoli", "butter", "candy", "carrot", "cheese-wedge", "cherries", "chestnut", "chocolate-bar", "coconut", "cooked-rice", "croissant", "cucumber", "cut-of-meat", "ear-of-corn", "egg", "eggplant", "fried-shrimp", "garlic", "glass-of-milk", "grapes", "green-apple", "hot-pepper", "ice", "kiwi-fruit", "leafy-green", "lemon", "lollipop", "mango", "meat-on-bone", "melon", "mushroom", "olive", "onion", "peach", "peanuts", "pear", "pineapple", "potato", "poultry-leg", "red-apple", "salt", "strawberry", "tangerine", "tomato", "watermelon", "honey", "wine", "fish"]
// var food_fr = ["avocat", "bacon", "bagel", "baguette", "banane", "haricot", "poivron", "myrtilles", "pain", "broccoli", "beurre", "bonbon", "carotte", "fromage", "cerise", "chataigne", "chocolat", "noix-de-coco", "riz", "croissant", "concombre", "viande", "maïs", "oeuf", "aubergine", "crevette", "Ail", "lait", "raisin", "pomme-verte", "piment", "glace", "kiwi", "salade", "citron", "sucette", "mangue", "viande-osseu", "melon", "champignon", "olive", "oignon", "peche", "cacahuete", "poire", "ananas", "patate", "cuisse_de_poulet", "pomme_rouge", "sel", "fraise", "mandarine", "tomate", "pasteque"]
var new_reciep = [{ "name": "gateau a la fraise", "first": "strawberry", "first_qty": 3, "seconde": "glass-of-milk", "seconde_qty": 1, "third": "egg", "third_quatity": 2, "img": "./src/gateau_fraise.jpg " },
{ "name": "gateau au chocolat", "first": "chocolate-bar", "first_qty": 1, "seconde": "glass-of-milk", "seconde_qty": 1, "third": "egg", "third_quatity": 2, "img": "./src/gateau_chocolat.jpg " },
{ "name": "salade", "first": "leafy-green", "first_qty": 3, "seconde": "olive", "seconde_qty": 1, "third": "tomato", "third_quatity": 2, "img": "./src/salade.jpg " },
{ "name": "burger maison", "first": "bagel", "first_qty": 1, "seconde": "cut-of-meat", "seconde_qty": 1, "third": "cheese-wedge", "third_quatity": 1, "img": "./src/burger.jpeg " }]

var emoji = document.getElementById("all_emoji")
var receipts = document.getElementById("receipts")
var result = document.getElementById("result")
var preparer = document.getElementById("btn_green")
var result = document.getElementById("result")
var Img = document.createElement("img");
var column_right = document.getElementById("column_right")

var array_receipts = []
var index_result = null

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


        // check if reciepe exist
        new_reciep.forEach((element, index) => {
            if (array_receipts.includes(element.first) && array_receipts.includes(element.seconde) && array_receipts.includes(element.third)) {
                index_result = index
            }
        });

        if (index_result) {
            var p = document.createElement("p");
            result.innerHTML = "<h2> bravo <img class=\"ingredient\" src=\" ./src/emoji/party-popper.png \" > vous venez de préparer </h2>"

            var text_p = document.createTextNode(new_reciep[index_result].name);

            Img.setAttribute('src', new_reciep[index_result].img);
            Img.setAttribute('alt', new_reciep[index_result].name);
            Img.setAttribute("id", "gateau_result");
            Img.setAttribute("class", "ingredient");

            p.appendChild(text_p);
            result.appendChild(p);

            result.appendChild(Img.cloneNode(true));
        }
        else{
            result.innerHTML= "cette recette n'existe pas mais tu peut l'ajouter"
        }
    }
    else {
        result.innerHTML = "tu dois choisir au moins deux ingredient !"
    }

})

// display 3 last reciepts

for (let i = new_reciep.length - 1; i > new_reciep.length - 4; i--) {
    var div = document.createElement("div")
    div.setAttribute("class", "existing_receipts")
    var left = document.createElement("section")
    left.setAttribute("class", "receipts_section_left")
    var right = document.createElement("section")
    right.setAttribute("class", "receipts_section_right")

    var h2 = document.createElement("h2");
    var text_h2 = document.createTextNode(new_reciep[i].name + "\n");

    left.innerHTML = "<div id=\"the_reciepe\"><img class=\"ingredient\" src=\"./src/emoji/" + new_reciep[i].first + ".png \" >" + "*" + new_reciep[i].first_qty + "+" + "<img class=\"ingredient\" src=\"./src/emoji/" + new_reciep[i].seconde + ".png \" >" + "*" + new_reciep[i].seconde_qty + "+" + "<img class=\"ingredient\" src=\"./src/emoji/" + new_reciep[i].third + ".png \" >" + "*" + new_reciep[i].third_quatity + "</div>"
    left.appendChild(text_h2);

    div.append(left, right)
    column_right.appendChild(div);

    Img.setAttribute('src', new_reciep[i].img);
    Img.setAttribute('alt', "gateau");
    Img.setAttribute("class", "gateau_stocker");
    right.appendChild(Img.cloneNode(true));

}
