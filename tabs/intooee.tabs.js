function Tabs() {
  var tabControlStyle;
  return {
    init: function () {
      loadStyle('#tab1 .tab-unit{ display: none }');
      this.switchTab(1);
    },
    switchTab: function (ind) {
      tabControlStyle = loadStyle('#tab1 #tabunit' + ind + ' { display: block } [data-trigger$="tab::' + ind + '" i]{color:red}', tabControlStyle);
    },
    handle: function (evt) {
      const trigger = evt.target.closest('[data-trigger]');
      if(trigger){
        const params = trigger.getAttribute('data-trigger').split('::');
        console.warn(params);
        this.switchTab(params[2]);
      }
    }
  }
}