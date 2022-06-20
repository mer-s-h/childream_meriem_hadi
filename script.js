var food = ["avocado", "bacon", "bagel", "baguette-bread", "banana", "beans", "bell-pepper", "blueberries", "bread", "broccoli", "butter", "candy", "carrot", "cheese-wedge", "cherries", "chestnut", "chocolate-bar", "coconut", "cooked-rice", "croissant", "cucumber", "cut-of-meat", "ear-of-corn", "egg", "eggplant", "fried-shrimp", "garlic", "glass-of-milk", "grapes", "green-apple", "hot-pepper", "ice", "kiwi-fruit", "leafy-green", "lemon", "lollipop", "mango", "meat-on-bone", "melon", "mushroom", "olive", "onion", "peach", "peanuts", "pear", "pineapple", "potato", "poultry-leg", "red-apple", "salt", "strawberry", "tangerine", "tomato", "watermelon"]
var emoji = document.getElementById("all_emoji")
var receipts = document.getElementById("receipts")
var result = document.getElementById("result")
var Img = document.createElement("img");
var array_receipts = []

food.forEach(element => {

    Img.setAttribute('src', './src/emoji/' + element + '.png');
    Img.setAttribute('alt', element);
    Img.setAttribute("id", element);
    Img.setAttribute("class", "ingredient");
    emoji.appendChild(Img.cloneNode(true));

    document.getElementById(element).addEventListener("click", function () {
        if (array_receipts.includes(element)) {

        }
        else if (array_receipts.length < 3) {
            Img.setAttribute('src', './src/emoji/' + element + '.png');
            Img.setAttribute("class", "ingredient");
            receipts.children[array_receipts.length].children[0].appendChild(Img.cloneNode(true));
            array_receipts.push(element)
        }
    })

})








