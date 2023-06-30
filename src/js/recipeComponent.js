import { recipes } from '../data/recipes'

class RecipeComponent extends HTMLElement {
  constructor() {
    super()
    this.cardContainer = this.querySelector('.cards__container')
    this.recipesArray = []

    this.init()
  }

  createRecipeCard() {
    this.recipesArray = recipes.map(recipe => {
      const { name, ingredients, description, appliance, utensils, time } = recipe
      this.ingredientsNameArr = ingredients.map(ingredient => ingredient.ingredient)

      // create the card component and set the attributes for each recipe for the filters tag
      this.cardElements = document.createElement('card-component')
      this.cardElements.setAttribute('data-appliance', appliance)
      this.cardElements.setAttribute('data-utensils', utensils)
      this.cardElements.setAttribute('data-ingredients', this.ingredientsNameArr)

      // attribute for the search
      Object.assign(this.cardElements, { title: name, description, time, ingredients })
      this.cardContainer.appendChild(this.cardElements)

      return { title: name, ingredients, description, element: this.cardElements, appliance, utensils }
    })
  }

  // check 2 arrays if they have the same values (case-insensitive) and return true or false
  checker(arr, target) {
    return target.every(v => arr.includes(v))
  }

  searchTags() {
    this.tagsTitleArray = this.tagsArray.map(tag => this.removeDiacritics(tag.tagTitle))

    this.recipesArray.forEach(recipe => {
      // if the recipe is hidden, don't check it
      if (recipe.element.classList.contains('hide')) return

      // create an array of the recipe appliance, utensils and ingredients to compare it with the tags array
      this.recipeTagsArr = [
        this.removeDiacritics(recipe.appliance),
        ...recipe.utensils.map(utensil => this.removeDiacritics(utensil)),
        ...recipe.ingredients.map(ingredient => this.removeDiacritics(ingredient.ingredient))
      ]

      // check if the recipe includes all the tags
      this.cardContainTags = this.checker(this.recipeTagsArr, this.tagsTitleArray)
      recipe.element.classList.toggle('hide', !this.cardContainTags)
    })
  }

  // Function that will remove diacritics from a string (é => e, à => a, etc.)
  removeDiacritics(str) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  };
  /* Function benchmark :
  * JSBench with console.log: https://jsben.ch/FEFIg
  * JSBench with only return (faster): https://jsben.ch/PpeVz
  * */
  performSearch2() {
    this.searchInputValue = document.querySelector('search-component input').value
    this.noResultMessage = document.querySelector('.no-result')

    // If search input value is < 3 and no tags, show all recipes and hide no result message
    if (this.searchInputValue.length < 3 && !this.tagsArray) {
      for (const recipe of this.recipesArray) {
        recipe.element.classList.remove('hide')
      }
      this.noResultMessage.style.display = 'none'
      return
    }

    // remove diacritics from search value and make it lowercase
    this.searchValue = this.removeDiacritics(this.searchInputValue)

    // Loop through recipes array and check if search value is included in title, ingredients or description
    for (const recipe of this.recipesArray) {
      this.isTitleVisible = this.removeDiacritics(recipe.title).includes(this.searchValue)
      this.areIngredientsVisible = recipe.ingredients.some((ingredient) => this.removeDiacritics(ingredient.ingredient).includes(this.searchValue))
      this.isDescriptionVisible = this.removeDiacritics(recipe.description).includes(this.searchValue)

      this.isVisible = this.isTitleVisible || this.areIngredientsVisible || this.isDescriptionVisible

      // Toggle hide class depending on if recipe is visible or not
      recipe.element.classList.toggle('hide', !this.isVisible)
    }

    // If there is at least one tag, continue filtering with tags
    if (this.tagsArray) this.searchTags()

    // if no recipe is visible, show the no result message
    let isNoResult = true
    for (const recipe of this.recipesArray) {
      if (!recipe.element.classList.contains('hide')) {
        isNoResult = false
        break
      }
    }
    this.noResultMessage.style.display = isNoResult ? 'block' : 'none'
  }

  createEventListeners() {
    setTimeout(() => {
      this.searchInput = document.querySelector('#search')
      this.tagsContainer = document.querySelector('.tags__container')

      this.searchInput.addEventListener('keyup', () => this.performSearch2())

      this.mutationObserver = new MutationObserver(entries => {
        this.tagsArray = Array.from(this.tagsContainer.children)
        // if a tag is added or removed, perform search to show/hide recipes
        this.performSearch2()

        // if tag is added, pass it to the tagsEventListeners function to add event listeners to it
        if (entries[0].addedNodes.length > 0) this.tagsEventListeners(entries[0].addedNodes[0])
      })

      // Observe the tags container for changes
      this.mutationObserver.observe(this.tagsContainer, { childList: true })
      this.filtersEventListeners()
    })
  }

  createSearch() {
    this.searchContainer = document.querySelector('.search__container')
    this.searchComponent = document.createElement('search-component')

    this.searchContainer.appendChild(this.searchComponent)
  }

  createFilters() {
    this.filtersContainer = document.querySelector('.filters__container')
    this.filtersComponent = document.createElement('filters-component')

    this.filtersContainer.appendChild(this.filtersComponent)
  }

  filtersEventListeners() {
    this.customSelects = document.querySelectorAll('.custom__select')

    // Open the filters container
    this.customSelects.forEach(customSelect => {
      customSelect.addEventListener('click', () => this.filtersComponent.openFilters(customSelect), { once: true })
    })
  }

  tagsEventListeners(tag) {
    this.tagsRemoveBtn = tag.querySelector('.remove')
    this.tagsRemoveBtn.addEventListener('click', () => this.tagsContainer.removeChild(tag))
  }


  init() {
    this.createSearch()
    this.createFilters()
    this.createRecipeCard()
    this.createEventListeners()
  }
}

customElements.get('recipe-component') || customElements.define('recipe-component', RecipeComponent)