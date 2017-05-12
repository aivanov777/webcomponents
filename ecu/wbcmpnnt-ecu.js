(function (window, document, undefined) {
  const thatDoc = document;
  const thisDoc = (thatDoc._currentScript || thatDoc.currentScript).ownerDocument;
  const template = thisDoc.querySelector('#template').content;

  customElements.define('wbcmpnnt-ecu', class extends HTMLElement {
    constructor() {
      super();
      let shadowRoot = this.attachShadow({ mode: 'open' });
      this.shadowRoot.appendChild(template.cloneNode(true));
    }

    connectedCallback() {
      this.itemTitle = this.shadowRoot.querySelector('.ec-title');
      this.body = this.shadowRoot.querySelector('.ec-body');
      this.body.style.display = 'none';
      this.itemTitle.addEventListener('click', ()=>{
        this.toggle();
      }, false);

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
      this.body.style.display = this.body.style.display === 'none' ? 'block' : 'none';
    }

  });

})(window, document);