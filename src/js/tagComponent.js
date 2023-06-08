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