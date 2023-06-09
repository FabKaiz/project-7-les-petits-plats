class TagComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.tagFamily = this.getAttribute('tag-family')
        this.tagTitle = this.getAttribute('tag-title')
        this.innerHTML = this.createTagHTML(this.tagTitle, this.tagFamily)
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