(function (window, document, undefined) {
  const thatDoc = document;
  const thisDoc = (thatDoc._currentScript || thatDoc.currentScript).ownerDocument;
  const template = thisDoc.querySelector('#template').content;

  customElements.define('wbcmpnnt-popup', class extends HTMLElement {
    constructor() {
      super();
      let shadowRoot = this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.cloneNode(true));
      this.popup = this.shadowRoot.querySelector('.popup');
      this.popup.style.display = 'none';
    }

    connectedCallback() {
      // this.style.display = 'none';
    }

    static get observedAttributes() {
      return ['items-checked'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      // When the drawer is disabled, update keyboard/screen reader behavior.
    }

    hide() {

    }

    show() {

    }

    toggle() {
      // this.classList.toggle('visible');
      this.popup.style.display = this.popup.style.display === 'none' ? 'block' : 'none';
    }

  });

})(window, document);