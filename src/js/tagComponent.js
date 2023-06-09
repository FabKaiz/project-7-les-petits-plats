class TagComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.tagFamily = this.getAttribute('tag-family')
        this.tagTitle = this.getAttribute('tag-title')
        if (this.checkTag(this.tagTitle, this.tagFamily)) return
        this.innerHTML = this.createTagHTML(this.tagTitle, this.tagFamily)
        this.filterCards(this.tagFamily)

        // add the event listener to the remove button
        this.querySelector('.remove').addEventListener('click', () => this.removeTag(this.tagTitle, this.tagFamily))
    }

    // Check if the tag is already in the list
    checkTag(tagName, tagFamily) {
        this.tag = document.querySelector(`.tag[data-tag-name="${tagName}"][data-tag-family="${tagFamily}"]`)
        if (this.tag) return true
    }

    // Filter the cards with the tags
    filterCards(tagFamily) {
        this.cards = document.querySelectorAll('card-component:not(.hide)')
        this.cards.forEach(card => {
            if (!card.dataset[tagFamily].toLowerCase().split(',').includes(this.tagTitle.toLowerCase())) {
                card.classList.add('hide')
            }
        })
    }

    // Remove tag from the list
    removeTag(tagName, tagFamily) {
        this.tag = document.querySelector(`.tag[data-tag-name="${tagName}"][data-tag-family="${tagFamily}"]`)
        this.tag.parentElement.remove()
        this.showCardsWithoutThisTag()
    }

    // when the tag is removed, show the cards without the tag but not the cards with other tags
    showCardsWithoutThisTag() {
        // get all the hided cards
        this.cards = document.querySelectorAll('card-component.hide')
        // get all active tags name
        this.activeTags = document.querySelectorAll('.tag')
        this.currentActiveTags = []
        this.activeTags.forEach(tag => this.currentActiveTags.push(tag))

        // if there are no active tags, show all the cards
        if (this.currentActiveTags.length === 0) return this.cards.forEach(card => card.classList.remove('hide'))


        // get all tags family and name from the current active tags
        this.currentActiveTagsFamily = []
        this.currentActiveTagsName = []
        this.currentActiveTags.forEach(tag => this.currentActiveTagsFamily.push(tag.dataset.tagFamily))
        this.currentActiveTags.forEach(tag => this.currentActiveTagsName.push(tag.dataset.tagName))

        // get all the cards with the current active tags
        this.cardsWithCurrentActiveTags = []
        this.currentActiveTagsFamily.forEach(tagFamily => {
            this.cards.forEach(card => {
                // check if the card has every current active tags
                if (card.dataset[tagFamily].toLowerCase().split(',').every(tag => this.currentActiveTagsName.includes(tag.toLowerCase()))) {
                    this.cardsWithCurrentActiveTags.push(card)
                }
            })
        })

        // show the cards with the current active tags
        this.cardsWithCurrentActiveTags.forEach(card => card.classList.remove('hide'))
    }


    createTagHTML(tagName, tagFamily) {
        return `
        <li class="tag" data-tag-name="${tagName}" data-tag-family="${tagFamily}">
          <p class="tag__name">${tagName}</p>
          <button class="remove"></button>
        </li>
      `
    }

}

customElements.get('tag-component') || customElements.define('tag-component', TagComponent);