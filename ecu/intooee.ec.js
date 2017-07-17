function EC() {
  var ecControlStyle;
  return {
    init: function (defaultVisible) {
      defaultVisible = defaultVisible || 1;
      loadStyle('#ec');
    },
    toggle: function (ind, on) {
      tabControlStyle = loadStyle('#tabActive', {
        activeTabInd: ind,
        activeTabTrigger: '[data-trigger$="tab::' + ind + '" i]'
      }, tabControlStyle);
    },
    handle: function (evt) {
      const trigger = evt.target.closest('[data-trigger$="click::ec"]');
      if (trigger) {
        const params = trigger.getAttribute('data-trigger').split('::');
        this.toggle(params[2]);
      }
    }
  }
}