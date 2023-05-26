import { recipes } from "../data/recipes";

class SearchComponent extends HTMLElement {
  constructor() {
    super();
    this.searchInput = this.querySelector('input#search');
    this.cardContainer = document.querySelector('.cards__container');
    this.ingredientsArr = []
    this.recipesArray = []

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
      })

      const cardElements = document.createElement('card-component');
      cardElements.setAttribute('header-title', recipe.name);
      cardElements.setAttribute('recipe-time', recipe.time);
      cardElements.setAttribute('ingredients-array', this.ingredientsArr);
      cardElements.setAttribute('description', recipe.description);
      this.cardContainer.appendChild(cardElements);

      // Reset ingredients array
      this.ingredientsArr = []

      return {
        title: recipe.name,
        ingredients: recipe.ingredients,
        description: recipe.description,
        element: cardElements
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

      // Start filtering recipes after 3 characters, but show all recipes if less than 3 characters
      if (e.target.value.length < 3) return this.recipesArray.forEach(recipe => recipe.element.classList.remove('hide'))

      this.recipesArray.forEach(recipe => {
        const isVisible = recipe.title.toLowerCase().includes(e.target.value.toLowerCase()) || recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(e.target.value.toLowerCase())) || recipe.description.toLowerCase().includes(e.target.value.toLowerCase())
        recipe.element.classList.toggle('hide', !isVisible)
      })
    });

  }
}

customElements.get('search-component') || customElements.define('search-component', SearchComponent);