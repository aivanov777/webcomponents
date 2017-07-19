function CustomScroll() {
  //accept both Unix TS (1500452575972) and iso string ('2017-07-19T08:20:01.870Z')
  const defaults = {
    maxActive: Infinity
  };
  var customScrollStyle;

  function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
  }

  var sbWidth = getScrollbarWidth();

  function handleScroll(evt) {
    var node = evt instanceof HTMLElement ? evt : evt.target;
    customScrollStyle = loadStyle('#customScroll', {
      right: '-' + sbWidth + 'px',
      bottom: '-' + sbWidth + 'px',
      scrollOffsetTop: node.scrollTop / node.scrollHeight * 100 + '%',
      scrollOffsetBottom: (node.scrollHeight - node.scrollTop - node.clientHeight) / node.scrollHeight * 100 + '%'
    }, customScrollStyle);
    console.warn(node.clientWidth, node.offsetWidth, node.scrollTop, node.scrollHeight);
  }

  return {
    init: function (element) {
      Array.from(document.querySelectorAll('[data-component^="scroll::"]'))
        .forEach(function (node) {
          handleScroll(node);
          var scroll = document.createElement('div');
          scroll.classList.add('scrollbar');
          var y = 0;
          scroll.addEventListener('mousedown', function (evt) {
            evt.stopPropagation();
            evt.preventDefault();
            y = evt.clientY;
            var fn = function (evt) {
              var delta = ( evt.clientY - node.getBoundingClientRect().top ) / node.offsetHeight;
              node.children[0].scrollTop = delta * node.children[0].scrollHeight;
              console.warn('drag', node.getBoundingClientRect().top, evt.clientY);
            };
            window.addEventListener('mousemove', fn);
            window.addEventListener('mouseup', function (evt) {
              window.removeEventListener('mousemove', fn)
            })
          });
          node.appendChild(scroll)
        });
      document.addEventListener('scroll', function (evt) {
        window.requestAnimationFrame(function () {
          handleScroll(evt);
        })
      }, true);
    }
  }
}