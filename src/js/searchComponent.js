import {recipes} from "../data/recipes";

class SearchComponent extends HTMLElement {
    constructor() {
        super();
        this.searchInput = this.querySelector('input#search');
        this.cardContainer = document.querySelector('.cards__container');
        this.ingredientsArr = []
        this.recipesArray = []
        this.ingredientsNameArr = []

        this.init();
    }

    createIngredientsList(ingredient) {
        const ingredientsLi = document.createElement('div')

        if (ingredient.unit === undefined && ingredient.quantity === undefined) {
            ingredientsLi.innerHTML = `<li><strong>${ingredient.ingredient}</strong></li>`
        } else {
            if (ingredient.unit === undefined) ingredient.unit = ''
            if (ingredient.quantity === undefined) ingredient.quantity = ''
            ingredientsLi.innerHTML = `<li><strong>${ingredient.ingredient}:</strong> ${ingredient.quantity} ${ingredient.unit}</li>`
        }

        this.ingredientsArr.push(ingredientsLi.innerHTML)
    }

    init() {
        this.recipesArray = recipes.map(recipe => {
            // Create li element for each ingredient
            recipe.ingredients.forEach(ingredient => {
                this.createIngredientsList(ingredient)
                this.ingredientsNameArr.push(ingredient.ingredient)
            })

            this.cardElements = document.createElement('card-component');
            this.cardElements.setAttribute('header-title', recipe.name);
            this.cardElements.setAttribute('recipe-time', recipe.time);
            this.cardElements.setAttribute('ingredients-array', this.ingredientsArr);
            this.cardElements.setAttribute('description', recipe.description);
            // attribute for the filters tags
            this.cardElements.setAttribute('data-appliance', recipe.appliance);
            this.cardElements.setAttribute('data-utensils', recipe.utensils);
            this.cardElements.setAttribute('data-ingredients', this.ingredientsNameArr);

            this.cardContainer.appendChild(this.cardElements);

            // Reset ingredients array
            this.ingredientsArr = []
            this.ingredientsNameArr = []

            return {
                title: recipe.name,
                ingredients: recipe.ingredients,
                description: recipe.description,
                element: this.cardElements
            }
        })


        this.searchInput.addEventListener('keyup', (e) => {
            // _***====== SECOND TYPE OF SEARCH ======***_
            // const filteredRecipes = this.recipesArray.filter(recipe => {
            //  return recipe.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
            //    recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(e.target.value.toLowerCase())) ||
            //    recipe.description.toLowerCase().includes(e.target.value.toLowerCase())
            // })
            // console.log(filteredRecipes)


            // Function that will remove diacritics from a string (é => e, à => a, etc.)
            const removeDiacritics = (str) => {
                return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
            };

            // If search input is < 3, show all recipes
            if (e.target.value.length < 3) return this.recipesArray.forEach(recipe => recipe.element.classList.remove('hide'))

            // remove diacritics from search value and make it lowercase
            const searchValue = removeDiacritics(e.target.value.toLowerCase());

            // Loop through recipes array and check if search value is included in title, ingredients or description
            this.recipesArray.forEach((recipe) => {
                const isTitleVisible = removeDiacritics(recipe.title.toLowerCase()).includes(searchValue);
                const areIngredientsVisible = recipe.ingredients.some((ingredient) => removeDiacritics(ingredient.ingredient.toLowerCase()).includes(searchValue));
                const isDescriptionVisible = removeDiacritics(recipe.description.toLowerCase()).includes(searchValue);

                const isVisible = isTitleVisible || areIngredientsVisible || isDescriptionVisible;

                // Toggle hide class depending on if recipe is visible or not
                recipe.element.classList.toggle('hide', !isVisible);
            });
        });

    }
}

customElements.get('search-component') || customElements.define('search-component', SearchComponent);