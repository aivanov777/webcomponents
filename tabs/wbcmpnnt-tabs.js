(function (window, document, undefined) {
  const thatDoc = document;
  const thisDoc = (thatDoc._currentScript || thatDoc.currentScript).ownerDocument;
  const template = thisDoc.querySelector('#template').content;

  customElements.define('wbcmpnnt-tabs', class extends HTMLElement {
    constructor() {
      super();
      let shadowRoot = this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.cloneNode(true));
      this.tabs = this.shadowRoot.querySelector('.tabs');
    }

    connectedCallback() {
      // this.style.display = 'none';
      this.nav = this.tabs.querySelectorAll('[slot="nav"]');
      this.units = this.tabs.querySelectorAll('[slot="units"]');
      this.tabs
          .addEventListener('click', (evt)=>{
            console.warn(evt.target);
              evt.preventDefault();
          });
      if (this.tabs.querySelector('slot').childNodes.length > 0) {

      } else {

      }


      console.warn(this.units);
      console.warn(this.tabs.querySelectorAll('[slot="units"]'));
      console.warn(this.tabs.querySelector('.navItem'));
    }

    static get observedAttributes() {
      return ['items-checked'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
      // When the drawer is disabled, update keyboard/screen reader behavior.
    }

  });

})(window, document);