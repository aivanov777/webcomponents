function Slider() {
  const defaults = {
    maxActive: Infinity
  };
  var modalControlStyle, activeInd = [], options, current = 0;

  function getShadow(){

    var innerWrap = document.querySelectorAll('.slider-inner-wrap')[0];
    var wrap = innerWrap.parentNode;
    var shadow = document.querySelectorAll('.slider-inner-wrap')[1];
    if(!shadow){
      shadow = innerWrap.cloneNode(true);
      shadow.setAttribute('data-slave',true);
      wrap.appendChild(shadow);
    }
    Array.from(wrap.childNodes).forEach(function(node) {
      if(node.nodeType === 3){
        node.textContent = '';
      }
    });

    return shadow
  }

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
      if(current === 7) {
        current = 1;
      }
      if(current === -7) {
        current = -1;
      }
      var shadow = getShadow();
      if(current > 5){
        shadow.style.marginLeft = '0';
      }else if(current < 0){
        // add shadow before
        shadow.style.marginLeft = '-400%';
      }
      const offset = current * -16.666666;
      modalControlStyle = loadStyle('#sliderActive', {
        sliderOffset: offset + '%'
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