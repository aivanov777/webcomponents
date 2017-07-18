function Slider() {
  const defaults = {
    maxActive: Infinity
  };
  var modalControlStyle, activeInd = [], options, current = 0;
  return {
    init: function (opts) {
      options = Object.assign({}, defaults, opts || {});
      loadStyle('#modal');

      /*var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          console.log(mutation.type);
        });
      });
      var config = { attributes: true, childList: true, characterData: true };
      observer.observe(target, config);
      observer.disconnect();*/

      setInterval(function () {
        // this.switch();
      }.bind(this), 3000)
    },
    switch: function (inc, on) {
      current += parseInt(inc);
      modalControlStyle = loadStyle('#sliderActive', {
        sliderOffset: current * -16.666666 + '%'
      }, modalControlStyle);
    },
    handle: function (evt) {
      const trigger = evt.target.closest('[data-trigger^="click::slider"]');
      if (trigger) {
        const params = trigger.getAttribute('data-trigger').split('::');
        this.switch(params[2]);
      }
    }
  }
}