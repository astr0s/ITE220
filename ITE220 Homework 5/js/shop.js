
var shop = {
	name : 'Egor', //Supposedly customers name, but I don't see any refernces to name, only to customer-name or customerName
	totalPrice : 0,
	products : [ //Understand this is a array, but again, don't see any references to products, only to products-list
		"Pizza",
		"Naan",
		"Sourdough",
		"Foccacia",
		"iPhone X"
	],

	price: [40, 10, 20, 80, 1000],

displayCustomerName: function(){
	var customerElement = document.getElementById("customer-name"); // What is document?
	customerElement.innerHTML = this.name; //The presentation had customerName, very confusing.
},

displayProductList: function(){
	var productsText = "";
	var productsElement = document.getElementById("product-list");

	for(var i = 0; i<5; i++){
		productsText = productsText + "<li class='list-group-item'>" + this.products[i] + "<span class='badge'>$" + this.price[i] + "</li>";
	}

	productsElement.innerHTML = productsText; //Adds products to the list.

	},

displayTotalPrice: function(){

	var priceElement = document.getElementById("price");

	for(var h = 0; h<5; h++) {

		shop.totalPrice = totalPrice + this.price[h];
	}

	priceElement.innerHTML = totalPrice;
},


}


shop.displayCustomerName();
shop.displayProductList();
shop.displayTotalPrice();
