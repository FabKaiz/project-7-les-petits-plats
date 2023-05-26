
class CardComponents extends HTMLElement {
  constructor() {
    super();
    this.attrTitle = this.getAttribute('header-title');
    this.attrTime = this.getAttribute('recipe-time');
    this.attrIngredients = this.getAttribute('ingredients-array');
    this.attrDescription = this.getAttribute('description');

    this.init();
  }

  createCardHTML(headerTitle, recipeTime, ingredients, description) {
    return `
      <article class="card">
        <div class="card__image-container">
        </div>
    
        <div class="card__content-container">
          <div class="card__header">
            <h2 class="card__header__title">${this.attrTitle}</h2>
    
            <div class="recipe__time">
              <img src="time.svg" alt="cooking time" class="time-logo">
              <p>${recipeTime}</p>
            </div>
          </div>
    
          <div class="card__content">
            <div class="ingredients__container">
              <ul>
                ${ingredients.replace(/,/g, '')}
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

  init() {
    this.innerHTML = this.createCardHTML(this.attrTitle, this.attrTime, this.attrIngredients, this.attrDescription)
  }
}

customElements.get('card-component') || customElements.define('card-component', CardComponents);