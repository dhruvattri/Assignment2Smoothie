// Smoothie Maker
// 25W Client-Side JavaScript - 04/08/2025
// DHRUV DHRUV - 200556510
// Attribution: Base code, UI toggle & form interaction writte by Dhruv and some enhancements inspired by MDN Docs and W3Schools examples.

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
        if (this.ingredients.length > 0) {
            return `Your smoothie, ${this.name}, with ingredients: ${this.ingredients.join(", ")} and size: ${this.size} is ready! Total price: $${this.price.toFixed(2)}.`;
        } else {
            return `Your smoothie, ${this.name}, with no extra ingredients and size: ${this.size} is ready! Total price: $${this.price.toFixed(2)}.`;
        }
    }
}

// Toggle between Smoothie and Juice sections
document.addEventListener('DOMContentLoaded', function () {
    const beverageTypeRadios = document.querySelectorAll('input[name="beverageType"]');
    const smoothieSection = document.getElementById('smoothieSection');
    const juiceSection = document.getElementById('juiceSection');

    function toggleSections() {
        const selectedValue = document.querySelector('input[name="beverageType"]:checked').value;
        smoothieSection.style.display = selectedValue === "Smoothie" ? "block" : "none";
        juiceSection.style.display = selectedValue === "Juice" ? "block" : "none";
    }

    beverageTypeRadios.forEach(radio => {
        radio.addEventListener('change', toggleSections);
    });

    toggleSections(); // Set initial state
});

// Handle form submission
document.getElementById('smoothieForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const selectedBeverage = document.querySelector('input[name="beverageType"]:checked').value;
    const orderSummary = document.getElementById('orderSummary');

    if (selectedBeverage === "Smoothie") {
        const choice = document.getElementById('smoothieSelect').value;
        const size = document.querySelector('input[name="smoothieSize"]:checked').value;
        const addonCheckboxes = document.querySelectorAll('input[name="smoothieAddons"]:checked');
        const addons = Array.from(addonCheckboxes).map(cb => cb.value);

        let smoothie = new Smoothie(choice, size);

        // Default ingredients per smoothie
        switch (choice) {
            case 'Green Goddess':
                smoothie.addIngredients(['Kale', 'Spinach', 'Mango', 'Pineapple', 'Coconut Water', ...addons]);
                break;
            case 'Chia Berry':
                smoothie.addIngredients(['Organic Acai', 'Mixed Berries', 'Chia Seeds', ...addons]);
                break;
            case 'Matcha Power':
                smoothie.addIngredients(['Banana', 'Kale', 'Protein', 'Matcha', 'Almond Milk', ...addons]);
                break;
            case 'Mango Madness':
                smoothie.addIngredients(['Mango', 'Banana', 'Almond Milk', ...addons]);
                break;
            case 'Date Dreams':
                smoothie.addIngredients(['Dates', 'Banana', 'Peanut Butter', 'Almond Milk', ...addons]);
                break;
            case 'Banana Berry':
                smoothie.addIngredients(['Banana', 'Strawberry', 'Honey', 'Almond Milk', ...addons]);
                break;
            case 'Berry Beautiful':
                smoothie.addIngredients(['Strawberry', 'Orange', 'Apple Cider', 'Coconut Water', ...addons]);
                break;
            case 'Ava Blast':
                smoothie.addIngredients(['Avocado', 'Banana', 'Honey', 'Almond Milk', ...addons]);
                break;
            case 'Tropical Paradise':
                smoothie.addIngredients(['Pineapple', 'Mango', 'Coconut Water', ...addons]);
                break;
        }

        smoothie.calculatePrice();
        orderSummary.innerHTML = `
            <p>${smoothie.getDescription()}</p>
            <img src="images/${choice.replace(/\s+/g, '-')}.jpg" alt="${choice}" style="max-width: 200px; border-radius: 10px; margin-top: 10px;">
        `;
    } else {
        // Handle Juice Order
        const choice = document.getElementById('juiceSelect').value;
        const size = document.querySelector('input[name="juiceSize"]:checked').value;
        const addons = Array.from(document.querySelectorAll('input[name="juiceAddons"]:checked')).map(cb => cb.value);
        let basePrice = size === 'Small' ? 4.5 : size === 'Medium' ? 5.5 : 7.0;

        addons.forEach(addon => {
            if (addon === "Lemon" || addon === "Mint") basePrice += 0.50;
            if (addon === "Ginger") basePrice += 0.75;
        });

        orderSummary.innerHTML = `
            <p>Your juice, ${choice}, size: ${size}, with add-ons: ${addons.join(", ") || "None"} is ready! Total price: $${basePrice.toFixed(2)}.</p>
            <img src="images/${choice.replace(/\s+/g, '-')}.jpg" alt="${choice}" style="max-width: 200px; border-radius: 10px; margin-top: 10px;">
        `;
    }
});
