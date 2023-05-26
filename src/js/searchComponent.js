class SearchComponent extends HTMLElement {
  constructor() {
    super();
    this.init();
  }

  init() {

  }
}


customElements.get('search-component') || customElements.define('search-component', SearchComponent);