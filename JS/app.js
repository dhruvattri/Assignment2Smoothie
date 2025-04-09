// Smoothie Maker
// 25W Client-Side JavaScript - 04/08/2025
// DHRUV DHRUV
// 200556510

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
document.addEventListener('DOMContentLoaded', function () {
    const beverageTypeRadios = document.querySelectorAll('input[name="beverageType"]');
    const smoothieSection = document.getElementById('smoothieSection');
    const juiceSection = document.getElementById('juiceSection');

    // Function to toggle sections based on selected beverage type
    function toggleSections() {
        const selectedValue = document.querySelector('input[name="beverageType"]:checked').value;

        if (selectedValue === "Smoothie") {
            smoothieSection.style.display = "block";  // Show smoothie section
            juiceSection.style.display = "none";     // Hide juice section
        } else {
            smoothieSection.style.display = "none";  // Hide smoothie section
            juiceSection.style.display = "block";   // Show juice section
        }
    }

    // Event listeners for radio buttons
    beverageTypeRadios.forEach(radio => {
        radio.addEventListener('change', toggleSections); // Toggle sections on change
    });

    // Call toggleSections initially based on the default radio button
    toggleSections();
});

// Handle form submission for smoothie orders
document.getElementById('smoothieForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    
    const choice = document.getElementById('smoothieSelect').value; // Corrected form ID here
    const size = document.querySelector('input[name="smoothieSize"]:checked').value;

    let smoothie = new Smoothie(choice, size); // Add size to smoothie object
    switch (choice) {
        case 'Green Goddess':
            smoothie.addIngredients(['Kale', 'Spinach', 'Mango', 'Pineapple', 'Coconut Water']);
            break;
        case 'Chia Berry':
            smoothie.addIngredients(['Organic Acai', 'Mixed Berries', 'Chia Seeds']);
            break;
        // Add more smoothies here as needed
    }

    smoothie.calculatePrice(); // Calculate the price

    // Display the smoothie description and price
    const orderSummary = document.getElementById('orderSummary');
    orderSummary.textContent = smoothie.getDescription(); // Show the smoothie description including price
});
