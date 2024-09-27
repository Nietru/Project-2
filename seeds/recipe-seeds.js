const { Recipe } = require('../models')
//To seed the database
const recipeData = [
    {
        recipe_name: 'Pizza',
        description: 'This pizza is good',
        ingredients: '1 Cup of pizza',
        instructions:'Preheat oven to 400, place 1 cup of pizza on a baking sheet, and then bake in the oven for 15 minutes.'
    },
    {
        recipe_name: 'Chicken Nuggets',
        description: 'These nuggets are a life hack',
        ingredients: '2 pounds of Chicken, 4 cups of nuggets',
        instructions: 'Put the 2 pounds of chicken and 4 cups of nuggets into a bowl, whisk throughly to make nuggets.'
    },
    {
        recipe_name: 'Lime and Coconut',
        description: 'A favorite summertime drink',
        ingredients: '1 Lime, and 1 Coconut',
        instructions: 'Put the lime in the coconut and shake it all up'
    }
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);

module.exports = seedRecipes;



