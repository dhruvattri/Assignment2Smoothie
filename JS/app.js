
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

document.getElementById('smoothieForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    const choice = document.getElementById('smoothieChoice').value;
    const size = document.querySelector('input[name="smoothieSize"]:checked').value;

    let smoothie = new Smoothie(choice, size); // Add size to smoothie object
    switch (choice) {
        case 'Green Goddess':
            smoothie.addIngredients(['Kale', 'Spinach', 'Mango', 'Pineapple', 'Coconut Water']);
            break;
        case 'Chia Berry':
            smoothie.addIngredients(['Organic Acai', 'Mixed Berries', 'Chia Seeds']);
            break;
    }

    smoothie.calculatePrice(); // Calculate the price

    const orderSummary = document.getElementById('orderSummary');
    orderSummary.textContent = smoothie.getDescription(); // Show description with price
});
