//Change document background color to
//silver

document.body.style.backgroundColor="silver";

//Change the font color for h1 title tag to
//green

document.getElementById("title").style.color="green";

//Change the font case for h3 title tags to
//uppercase
 
let head3 =  document.getElementById('heading');
head3.textContent=head3.textContent.toUpperCase()

//Add one more fruit to the fruits list

var fruits= document.getElementById("fruList");
var newFruit = document.createElement("li");
newFruit.textContent = "Oranges";
fruits.appendChild(newFruit);

//Add one more vegetable to the vegetables
//list

var vegList = document.getElementById('vegList');
var moreVegies= document.createElement('li');
moreVegies.textContent = 'Onions';
vegList.appendChild(moreVegies);