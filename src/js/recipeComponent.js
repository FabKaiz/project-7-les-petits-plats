import {recipes} from "../data/recipes"

class RecipeComponent extends HTMLElement {
    constructor() {
        super()
        this.cardContainer = this.querySelector('.cards__container')
        this.recipesArray = []

        this.init()
    }

    createRecipeCard() {
        this.recipesArray = recipes.map(recipe => {
            this.ingredientsNameArr = recipe.ingredients.map(ingredient => ingredient.ingredient)

            // create the card component and set the attributes for each recipe
            this.cardElements = document.createElement('card-component')

            // attribute for the filters tags
            this.cardElements.setAttribute('data-appliance', recipe.appliance)
            this.cardElements.setAttribute('data-utensils', recipe.utensils)
            this.cardElements.setAttribute('data-ingredients', this.ingredientsNameArr)

            // attribute for the search
            this.cardElements.title = recipe.name
            this.cardElements.description = recipe.description
            this.cardElements.time = recipe.time
            this.cardElements.ingredients = recipe.ingredients

            this.cardContainer.appendChild(this.cardElements)

            return {
                title: recipe.name,
                ingredients: recipe.ingredients,
                description: recipe.description,
                element: this.cardElements,
                appliance: recipe.appliance,
                utensils: recipe.utensils,
            }
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
            this.recipeApplianceArr = [this.removeDiacritics(recipe.appliance)]
            this.recipeUtensilsArr = recipe.utensils.map(utensil => this.removeDiacritics(utensil))
            this.ingredientsNameArr = recipe.ingredients.map(ingredient => this.removeDiacritics(ingredient.ingredient))
            // put all the arrays in one array
            this.recipeTagsArr = [...this.recipeApplianceArr, ...this.recipeUtensilsArr, ...this.ingredientsNameArr]

            // check if the recipe includes all the tags
            this.cardContainTags = this.checker(this.recipeTagsArr, this.tagsTitleArray)

            recipe.element.classList.toggle('hide', !this.cardContainTags)
        })
    }

    // Function that will remove diacritics from a string (é => e, à => a, etc.)
    removeDiacritics(str) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    };

    performSearch() {
        this.searchInputValue = document.querySelector('search-component input').value

        // If search input value is < 3, show all recipes
        if (this.searchInputValue.length < 3 && !this.tagsArray) return this.recipesArray.forEach(recipe => recipe.element.classList.remove('hide'))

        // remove diacritics from search value and make it lowercase
        this.searchValue = this.removeDiacritics(this.searchInputValue)

        // Loop through recipes array and check if search value is included in title, ingredients or description
        this.recipesArray.forEach((recipe) => {
            this.isTitleVisible = this.removeDiacritics(recipe.title).includes(this.searchValue)
            this.areIngredientsVisible = recipe.ingredients.some((ingredient) => this.removeDiacritics(ingredient.ingredient).includes(this.searchValue))
            this.isDescriptionVisible = this.removeDiacritics(recipe.description).includes(this.searchValue)

            this.isVisible = this.isTitleVisible || this.areIngredientsVisible || this.isDescriptionVisible

            // Toggle hide class depending on if recipe is visible or not
            recipe.element.classList.toggle('hide', !this.isVisible)
        })

        if (this.tagsArray) this.searchTags()

        // TODO: If no recipe is visible, show "no recipe found" message
    }

    createEventListeners() {
        setTimeout(() => {
            this.searchInput = document.querySelector('#search')
            this.tagsContainer = document.querySelector('.tags__container')

            this.searchInput.addEventListener('keyup', (e) => {
                // _***====== SECOND TYPE OF SEARCH ======***_
                // this.filteredRecipes = this.recipesArray.filter(recipe => {
                //  return recipe.title.toLowerCase().includes(this.searchInputValue.toLowerCase()) ||
                //    recipe.ingredients.some(ingredient => ingredient.ingredient.toLowerCase().includes(this.searchInputValue.toLowerCase())) ||
                //    recipe.description.toLowerCase().includes(this.searchInputValue.toLowerCase())
                // })
                // console.log(this.filteredRecipes)
                this.performSearch()
            })

            this.mutationObserver = new MutationObserver(entries => {
                this.tagsArray = Array.from(this.tagsContainer.children)
                // if a tag is added or removed, perform search to show/hide recipes
                this.performSearch()

                // if tag is added, pass it to the tagsEventListeners function to add event listeners to it
                if (entries[0].addedNodes.length > 0) {
                    this.tagsEventListeners(entries[0].addedNodes[0])
                }
            })

            // Observe the tags container for changes
            this.mutationObserver.observe(this.tagsContainer, {
                childList: true,
            })

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
            customSelect.addEventListener('click', () => this.filtersComponent.openFilters(customSelect), {once: true})
        })
    }

    tagsEventListeners(tag) {
        this.tagsRemoveBtn = tag.querySelector('.remove')
        this.tagsRemoveBtn.addEventListener('click', () => {
            this.tagsContainer.removeChild(tag)
        })
    }


    init() {
        this.createSearch()
        this.createFilters()
        this.createRecipeCard()
        this.createEventListeners()
    }
}

customElements.get('recipe-component') || customElements.define('recipe-component', RecipeComponent)