class Smoothie {
    constructor(name) {
        this.name = name;
        this.ingredients = []; // This will be populated based on the choice
    }

    addIngredients(ingredients) {
        this.ingredients = ingredients;
    }

    getDescription() {
        return `Your smoothie, ${this.name}, with ingredients: ${this.ingredients.join(", ")} is ready!`;
    }
}

document.getElementById('smoothieForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    const choice = document.getElementById('smoothieChoice').value;

    let smoothie = new Smoothie(choice);
    switch (choice) {
        case 'Green Goddess':
            smoothie.addIngredients(['Kale', 'Spinach', 'Mango', 'Pineapple', 'Coconut Water']);
            break;
        case 'Chia Berry':
            smoothie.addIngredients(['Organic Acai', 'Mixed Berries', 'Chia Seeds']);
            break;
        
    }

    const orderSummary = document.getElementById('orderSummary');
    orderSummary.textContent = smoothie.getDescription();
});
