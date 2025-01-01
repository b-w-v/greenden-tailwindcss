var sidenav = document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})

closenav.addEventListener("click",function()
{
    sidenav.style.right="-50%"
})

// Reference elements
var search = document.getElementById("search");
var productGrid = document.querySelector(".grid"); // Grid container for products
var productList = productGrid.querySelectorAll(".border"); // Product cards

// Search function
search.addEventListener("keyup", function (event) {
    var enteredValue = event.target.value.toUpperCase(); // Get the input value and convert to uppercase

    // Loop through each product
    for (var count = 0; count < productList.length; count++) {
        var productName = productList[count].querySelector("h2").textContent; // Get the product name

        // Check if the product name matches the search query
        if (productName.toUpperCase().indexOf(enteredValue) < 0) {
            productList[count].style.display = "none"; // Hide non-matching products
        } else {
            productList[count].style.display = "block"; // Show matching products
        }
    }
});
