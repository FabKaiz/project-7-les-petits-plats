import { recipes } from "../data/recipes";


class CardComponents extends HTMLElement {
  constructor() {
    super();
    this.recipes = recipes
    this.ingredientsArr = []

    this.init();
  }

  createCardHTML(headerTitle, recipeTime, ingredientsArray, description) {
    return `
      <article class="card">
        <div class="card__image-container">
        </div>
    
        <div class="card__content-container">
          <div class="card__header">
            <h2 class="card__header__title">${headerTitle}</h2>
    
            <div class="recipe__time">
              <img src="time.svg" alt="cooking time" class="time-logo">
              <p>${recipeTime}</p>
            </div>
          </div>
    
          <div class="card__content">
            <div class="ingredients__container">
              <ul>
                ${ingredientsArray.join('')}
              </ul>
              </div>
    
              <div class="description__container">
                <p class="line-clamp">${description}</p>
              </div>
          </div>
        </div>
      </article>
    `
  }

  createIngredientsList(ingredient) {
    const ingredientsLi = document.createElement('div')

    if (ingredient.unit === undefined && ingredient.quantity === undefined) {
      ingredientsLi.innerHTML = `
          <li>
            <strong>${ingredient.ingredient}</strong>
          </li>
        `
    } else {
      if (ingredient.unit === undefined) ingredient.unit = ''
      if (ingredient.quantity === undefined) ingredient.quantity = ''
      ingredientsLi.innerHTML = `
          <li>
            <strong>${ingredient.ingredient}:</strong> ${ingredient.quantity} ${ingredient.unit}
          </li>
        `
    }

    this.ingredientsArr.push(ingredientsLi.innerHTML)
  }

  init() {
    // console.log(this.recipes)

    this.recipes.forEach(recipe => {
      // console.log(recipe)


      recipe.ingredients.forEach(ingredient => {
        // Create li element for each ingredient
        this.createIngredientsList(ingredient)
      })


      this.innerHTML += this.createCardHTML(recipe.name, recipe.time, this.ingredientsArr, recipe.description)

      this.ingredientsArr = []
    })
  }
}


customElements.get('card-component') || customElements.define('card-component', CardComponents);