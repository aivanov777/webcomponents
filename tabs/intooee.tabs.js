function Tabs() {
  var tabControlStyle;
  return {
    init: function (defaultVisible) {
      defaultVisible = defaultVisible || 1;
      loadStyle('#tab');
      this.switchTab(defaultVisible);
    },
    switchTab: function (ind) {
      tabControlStyle = loadStyle('#tabActive', {
        activeInd: ind,
        activeTrigger: '[data-trigger$="tab::' + ind + '" i]'
      }, tabControlStyle);
    },
    handle: function (evt) {
      const trigger = evt.target.closest('[data-trigger^="click::tab"]');
      if (trigger) {
        const params = trigger.getAttribute('data-trigger').split('::');
        this.switchTab(params[2]);
      }
    }
  }
}