function Modal() {
  const defaults = {
    maxActive: Infinity
  };
  var modalControlStyle, activeInd = [], options;
  return {
    init: function (opts) {
      options = Object.assign({}, defaults, opts || {});
      loadStyle('#modal');
    },
    toggle: function (ind, on) {
      if (activeInd.indexOf(ind) !== -1) {
        console.warn(activeInd.indexOf(ind));
        activeInd.splice(activeInd.indexOf(ind), 1);
      } else {
        if (activeInd.length >= options.maxActive) {
          activeInd.splice(0, 1);
        }
        activeInd.push(ind);
      }
      modalControlStyle = loadStyle('#modalActive', activeInd.map(function (ind) {
        return {
          activeInd: ind,
          activeTrigger: '[data-trigger$="modal::' + ind + '" i]'
        }
      }), modalControlStyle);
    },
    handle: function (evt) {
      const trigger = evt.target.closest('[data-trigger^="click::modal"]');
      if (trigger) {
        const params = trigger.getAttribute('data-trigger').split('::');
        this.toggle(params[2]);
      }
    }
  }
}