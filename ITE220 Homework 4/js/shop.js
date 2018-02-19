/*var customername = "Chaky";
var price = 10;
var quantity = 3;
var totalPrice = price * quantity;*/

document.getElementById("customer-name").innerHTML = "Egor";
// document.getElementById("price").innerHTML = "$" + totalPrice;

var products = [
	"Pizza",
	"Naan",
	"Sourdough",
	"Foccacia",
	"iPhone X"
	];
var price = [40, 10, 20, 80, 1000];

var productsText = "";
var productsElement = document.getElementById("product-list");

// productsText = productsText + "<li class='list-group-item'>" + products[0] + "<span class='badge'>$" + price[0] + "</li>";

for (i=0;i<=4;i++) {
	productsText = productsText + "<li class='list-group-item'>" + products[i] + "<span class='badge'>$" + price[i] + "</li>";
}

productsElement.innerHTML = productsText;
