import logoTime from "../assets/time.svg"

class CardComponents extends HTMLElement {
    constructor() {
        super()
        this._time = this.time
        this._title = this.title
        this._ingredients = this.ingredients
        this._description = this.description
        this.ingredientsLiArray = []

        this.init()
    }

    createCardHTML(headerTitle, recipeTime, ingredients, description) {
        return `
          <article class="card">
            <div class="card__image-container">
            </div>
        
            <div class="card__content-container">
              <div class="card__header">
                <h2 class="card__header__title">${headerTitle}</h2>
        
                <div class="recipe__time">
                  <img src="${logoTime}" alt="cooking time" class="time-logo">
                  <p>${recipeTime}</p>
                </div>
              </div>
        
              <div class="card__content">
                <div class="ingredients__container">
                  <ul>
                    ${ingredients.map(ingredient => ingredient).join('')}
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
        this.ingredientsLi = document.createElement('li')

        if (ingredient.unit === undefined && ingredient.quantity === undefined) {
            this.ingredientsLi.innerHTML = `<li><strong>${ingredient.ingredient}</strong></li>`
        } else {
            if (ingredient.unit === undefined) ingredient.unit = ''
            if (ingredient.quantity === undefined) ingredient.quantity = ''
            this.ingredientsLi.innerHTML = `<li><strong>${ingredient.ingredient}:</strong> ${ingredient.quantity} ${ingredient.unit}</li>`
        }

        this.ingredientsLiArray.push(this.ingredientsLi.innerHTML)
    }

    init() {
        // create li element for each ingredient and push it into an array than display it in the card
        this._ingredients.forEach(ingredient => this.createIngredientsList(ingredient))
        this.innerHTML = this.createCardHTML(this._title, this._time, this.ingredientsLiArray, this._description)
    }
}

customElements.get('card-component') || customElements.define('card-component', CardComponents)