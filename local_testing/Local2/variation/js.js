// Define the selectors for elements that should trigger the $20 message
var save20Selectors = [
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_twoFlights .product-container[style='background-image: url('productImages/prod_2735.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_fourFlights .product-container[style='background-image: url('productImages/prod_696.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_5907.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_5757.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_5647.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_5907.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_4995.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_8716.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_2186.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_1597.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_3574.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_3573.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_5867.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_3277.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_5868.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_4431.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_11194.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_5908.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_1842.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_1015.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_8720.gif')']",
  "html body.cre-t-6 #category-1237 .product-grid-item.cre_familyFlights .product-container[style='background-image: url('productImages/prod_1306.gif')']"
];
// Function to update the content based on the presence of elements
function updateContent() {
  const uspBarSpan = document.querySelector("html body.cre-t-6 .cre-usp-bar span");
  if (!uspBarSpan) return; // Exit if the target element is not found

  let found = false;

  // Check for each selector and update the content if found
  save20Selectors.forEach(selector => {
    const element = document.querySelector(selector);
    if (element) {
      uspBarSpan.innerHTML = "SAVE $20/person - 2";
      found = true;
    }
  });
  // If no matching element is found, set the default message
  if (!found) {
    uspBarSpan.innerHTML = "SAVE $30/person - 2";
  }
}

// Run the function to update the content
updateContent();