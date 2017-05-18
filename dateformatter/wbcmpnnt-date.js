(function (window, document, undefined) {
  const thatDoc = document;
  const thisDoc = (thatDoc._currentScript || thatDoc.currentScript).ownerDocument;

  function leadZero(val, cnt=2) {
    val = val + '';
    for (var a = cnt - val.length; a > 0; a--) {
      val = '0'+val;
    }
    return val;
  }

  customElements.define('wbcmpnnt-date', class extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
      // this.style.display = 'none';
    }

    static get observedAttributes() {
      return ['date'];
    }

    setDate(newValue) {
      const date = new Date(parseFloat(newValue));
      const year = date.getFullYear();
      const month = leadZero(date.getMonth() + 1);
      const day = leadZero(date.getDate());
      const hour = leadZero(date.getHours());
      const min = leadZero(date.getMinutes());
      const sec = leadZero(date.getSeconds());
      this.innerText = hour + ':' + min + ':' + sec + '  ' + day + '.' + month + '.' + year;
    }

    attributeChangedCallback(name, oldValue, newValue) {
      this.setDate(newValue);
    }

  });

})(window, document);