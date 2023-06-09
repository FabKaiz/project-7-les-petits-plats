class FiltersComponents extends HTMLElement {
    constructor() {
        super();

        // Make an array of the filters we want to create
        this.filtersTitle = ['ingredients', 'appliance', 'utensils']

        // Create an empty array for each filter
        this.filtersTitle.forEach(filter => {
            this[filter] = []
        })

        this.init();
    }

    createFiltersArray(filterName) {
        this.filtersArray = [];
        this.tags = Array.from(document.querySelectorAll('.tag'));
        this.$cards = Array.from(document.querySelectorAll('card-component:not(.hide)'));

        this.$cards.forEach(card => {
            this.cardFilterTypes = card.dataset[filterName].toLowerCase().split(',');

            this.cardFilterTypes.forEach(filterType => {
                this.isFilterTypePresent = this.filtersArray.includes(filterType);
                this.isTagPresent = this.tags.some(tag => tag.dataset.tagName.toLowerCase() === filterType);

                if (!this.isFilterTypePresent && !this.isTagPresent) {
                    this.filtersArray.push(filterType);
                }
            });
        });

        return this.filtersArray;
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    createList(filterName) {
        this.list = ''
        this.createFiltersArray(filterName).forEach(item => {
            this.list += `<li class="filter__item"><p>${this.capitalizeFirstLetter(item)}</p></li>`
        })
        return this.list
    }

    closeFilters(customSelect) {
        this.filtersContainer = document.querySelector('.filters__container__content')

        if (!this.filtersContainer) return
        this.filtersContainer.remove()

        customSelect.querySelector('input').value = `${this.translateFilters(customSelect.dataset.value)}`
        customSelect.querySelector('input').type = 'button'

        // remove the open class to the custom select
        customSelect.classList.remove('open')

        // add the event listener to open the filters container
        setTimeout(() => {
            customSelect.addEventListener('click', () => this.openFilters(customSelect), {once: true})
        }, 10)
    }

    createTag(tagTitle, customSelect) {
        this.tag = document.createElement('tag-component')

        this.tag.setAttribute('tag-title', tagTitle)
        this.tag.setAttribute('tag-family', customSelect.dataset.value)

        // append the tag to the tags container
        document.querySelector('.tags__container').appendChild(this.tag)

        // remove the filter item from the list
        this.filterItems.forEach(filterItem => {
            if (filterItem.innerText === tagTitle) filterItem.parentElement.remove()
        })

        // close the filters container
        this.closeFilters(customSelect)
    }


    openFilters(customSelect) {
        // check if there is already a filters container
        if (document.querySelector('.filters__container__content')) {
            // get the parent of the filters container and call the closeFilters function
            this.parent = document.querySelector('.filters__container__content').parentElement
            this.closeFilters(this.parent)
        }

        // add open class to the custom select
        customSelect.classList.add('open')

        // create the filters container
        customSelect.innerHTML += `
            <div class="filters__container__content">
                <div class="filters__container__content__list">
                    <ul>
                    ${this.createList(customSelect.dataset.value)}
                    </ul>
                </div>
            </div>
        `

        customSelect.querySelector('input').focus()
        customSelect.querySelector('input').value = ''
        customSelect.querySelector('input').type = 'search'
        customSelect.querySelector('input').placeholder = `Rechercher un ${this.translateFilters(customSelect.dataset.value)}`

        // add the event listener to close the filters container
        this.closeFiltersBtn = customSelect.querySelector('.input__container')
        this.closeFiltersBtn.addEventListener('click', () => this.closeFilters(customSelect), {once: true})

        // add the event listener to each filter item
        this.filterItems = customSelect.querySelectorAll('.filter__item p')
        this.filterItems.forEach(filterItem => {
            filterItem.addEventListener('click', () => this.createTag(filterItem.innerText, customSelect))
        })
    }

    translateFilters(filterName) {
        // translate the key value to french
        switch (filterName) {
            case 'ingredients':
                this.displayValue = 'Ingrédients'
                break;
            case 'appliance':
                this.displayValue = 'Appareil'
                break;
            case 'utensils':
                this.displayValue = 'Ustensiles'
                break;

            default:
                break;
        }

        return this.displayValue
    }

    createFiltersHTML(value) {
        this.filterHTML = `
           <div class="custom__select" data-value="${value}">
               <div class="input__container">
                    <input type="button" value="${this.translateFilters(value)}">
                    <span class="custom__select-arrow"></span>
                </div>
            </div>
        `
        return this.filterHTML
    }

    createEventListeners() {
        this.filtersContainer = document.querySelector('.filters__container')
        // Open the filters container
        this.customSelects = this.filtersContainer.querySelectorAll('.custom__select')

        this.customSelects.forEach(customSelect => {
            customSelect.addEventListener('click', () => this.openFilters(customSelect), {once: true})
        })
    }

    init() {
        this.filtersTitle.forEach(key => this.innerHTML += this.createFiltersHTML(key))
        this.createEventListeners()
    }
}

customElements.get('filters-component') || customElements.define('filters-component', FiltersComponents);