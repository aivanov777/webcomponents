function EC() {
  const defaults = {
    maxActive: Infinity
  };
  var ecControlStyle, activeInd = [],options;
  return {
    init: function (opts) {
      options = Object.assign({}, defaults, opts || {});
      loadStyle('#ec');
    },
    toggle: function (ind, on) {
      if(activeInd.indexOf(ind) !== -1){
        console.warn(activeInd.indexOf(ind));
        activeInd.splice(activeInd.indexOf(ind), 1);
      }else{
        if(activeInd.length >= options.maxActive) {
          activeInd.splice(0,1);
        }
        activeInd.push(ind);
      }
      ecControlStyle = loadStyle('#ecActive', activeInd.map(function (ind) {
        return {
          activeInd: ind,
          activeTrigger: '[data-trigger$="ec::' + ind + '" i]'
        };
      }), ecControlStyle);
    },
    handle: function (evt) {
      const trigger = evt.target.closest('[data-trigger^="click::ec"]');
      if (trigger) {
        const params = trigger.getAttribute('data-trigger').split('::');
        this.toggle(params[2]);
      }
    }
  }
}