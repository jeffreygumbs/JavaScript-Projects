function showRecipeDetails(element) {
    // Get data attributes from the clicked recipe card
    const recipeName = element.dataset.recipe;
    const cookTime = element.dataset.cookTime;
    const difficulty = element.dataset.difficulty;
    const ingredients = element.dataset.ingredients.split(',');

    // Format recipe name with first letter capitalized
    const formattedName = recipeName.charAt(0).toUpperCase() + recipeName.slice(1);

    // Update the recipe details section
    document.getElementById('recipeName').textContent = formattedName;
    document.getElementById('cookTime').textContent = `Cooking Time: ${cookTime} minutes`;
    document.getElementById('difficulty').textContent = `Difficulty: ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`;
    document.getElementById('ingredients').textContent = `Ingredients: ${ingredients.join(', ')}`;

    // Show the recipe details section
    const detailsSection = document.getElementById('recipeDetails');
    detailsSection.style.display = 'block';

    // Add highlight effect to clicked card and remove from others
    const allCards = document.getElementsByClassName('recipe-card');
    for (let card of allCards) {
        card.style.border = '2px solid #ddd';
    }
    element.style.border = '2px solid #007bff';
}
