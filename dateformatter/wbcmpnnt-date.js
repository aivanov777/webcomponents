(function (window, document, undefined) {
  const thatDoc = document;
  const thisDoc = (thatDoc._currentScript || thatDoc.currentScript).ownerDocument;

  customElements.define('wbcmpnnt-date', class extends HTMLElement {
    constructor() {
      super();
      console.warn(this);
    }

    connectedCallback() {
      // this.style.display = 'none';
    }

    static get observedAttributes() {
      return ['date'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      console.warn(name, oldValue, newValue);
      console.warn(new Date(newValue));
      this.innerText = new Date(parseFloat(newValue));
      // When the drawer is disabled, update keyboard/screen reader behavior.
    }

  });

})(window, document);