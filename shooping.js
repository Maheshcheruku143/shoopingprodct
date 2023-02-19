// Get the catalog and cart elements
var catalog = document.getElementById("catalog");
var cart = document.getElementById("cart");

// Get the cart items list and checkout button
var cartItems = document.getElementById("cart-items");
var checkoutButton = document.getElementById("checkout");

// Add event listeners to the "Add to Cart" buttons
var addToCartButtons = catalog.getElementsByTagName("button");
for (var i = 0; i < addToCartButtons.length; i++) {
	addToCartButtons[i].addEventListener("click", addToCart);
}

// Add an item to the cart
function addToCart(event) {
	// Get the clicked button and product information
	var button = event.target;
	var li = button.parentElement;
	var name = li.getElementsByTagName("h3")[0].textContent;
	var price = li.getElementsByTagName("p")[1].textContent;

	// Create a new cart item
	var cartItem = document.createElement("li");
	var cartItemText =
