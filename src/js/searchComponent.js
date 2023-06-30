class SearchComponent extends HTMLElement {
  constructor() {
    super()
    this.init()
  }

  createSearchHTML() {
    return `
      <div class='search__container'>
        <label for='search' class='hidden'>Rechercher</label>
        <input type='search' id='search' placeholder='Rechercher une recette'>
        <button class='search__button'></button>
      </div>
    `
  }

  init() {
    this.innerHTML = this.createSearchHTML()
  }
}

customElements.get('search-component') || customElements.define('search-component', SearchComponent)