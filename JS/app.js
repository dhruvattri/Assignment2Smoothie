
//SMOOTHIE MAKER
//25W Client-Side JavaScript - 04/08/2025
//DHRUV DHRUV
//200556510

// Smoothie class with constructor and methods
class Smoothie {
    constructor(name, size) {
        this.name = name;
        this.size = size;
        this.ingredients = [];
        this.price = 0;
    }

    // Add ingredients and calculate price
    addIngredients(ingredients) {
        this.ingredients = ingredients;
        this.ingredients.forEach(ingredient => {
            if (ingredient === "Protein") this.price += 1.50;
            if (ingredient === "Chia Seeds") this.price += 0.50;
            if (ingredient === "Spinach") this.price += 0.75;
            if (ingredient === "Honey") this.price += 0.50;
        });
    }

    // Calculate price based on size
    calculatePrice() {
        if (this.size === 'Small') this.price += 5.00;
        if (this.size === 'Medium') this.price += 6.50;
        if (this.size === 'Large') this.price += 8.00;
    }

    // Get the smoothie description
    getDescription() {
        return `Your smoothie, ${this.name}, with ingredients: ${this.ingredients.join(", ")} and size: ${this.size} is ready! Total price: $${this.price.toFixed(2)}`;
    }
}
// Toggle between Smoothie and Juice sections
document.addEventListener('DOMContentLoaded', function() {
    const beverageTypeRadios = document.querySelectorAll('input[name="beverageType"]');
    const smoothieSection = document.getElementById('smoothieSection');
    const juiceSection = document.getElementById('juiceSection');

    // Function to toggle sections based on selected beverage type
    function toggleSections() {
        const selectedValue = document.querySelector('input[name="beverageType"]:checked').value;

        // If Smoothie is selected, show the smoothie section and hide the juice section
        if (selectedValue === "Smoothie") {
            smoothieSection.style.display = "block";  // Show smoothie section
            juiceSection.style.display = "none";     // Hide juice section
        } else {
            smoothieSection.style.display = "none";  // Hide smoothie section
            juiceSection.style.display = "block";   // Show juice section
        }
    }