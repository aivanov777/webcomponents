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
      this.nav = this.tabs.querySelectorAll('slot[name="nav"]');
      this.units = this.tabs.querySelectorAll('slot[name="units"]');
    }

    connectedCallback() {
      // this.style.display = 'none';
      this.tabs
          .addEventListener('click', function(evt){
            console.warn(evt.currentTarget);
              evt.preventDefault();
          });
      if (this.tabs.querySelector('slot').childNodes.length > 0) {

      } else {

      }
      console.warn(this.nav);
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