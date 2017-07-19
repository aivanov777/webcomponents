function interpolateCSS(str, params) {
  return str.replace(/__([a-zA-Z]+)__/gi, function (a, match) {
    return params[match];
  });
}

function loadStyle(css, params, tag) {
  var style = tag;
  var styleNode;

  try {
    styleNode = document.querySelector(css);
  } catch (err) {
  }

  if (styleNode) {
    if (params instanceof Array) {
      css = params.reduce(function (acc, param) {
        acc += interpolateCSS(styleNode.innerHTML, param);
        return acc;
      }, '');
    } else {
      css = interpolateCSS(styleNode.innerHTML, params);
    }
  }
  if (!tag) {
    style = document.createElement('style');
    style.innerHTML += css;
    document.head.appendChild(style);
  } else {
    style.innerHTML = css;
  }
  return style;
}

window.addEventListener('load', function () {
  const tabs = new Tabs();
  const ec = new EC();
  const modal = new Modal();
  const slider = new Slider();
  const dateFormatter = new DateFormatter();
  const customScroll = new CustomScroll();
  ec.init();
  tabs.init();
  modal.init();
  slider.init();
  customScroll.init();
  dateFormatter.init(document.getElementById('date'));
  document.body.addEventListener('click', function (evt) {
    tabs.handle(evt);
    ec.handle(evt);
    modal.handle(evt);
    slider.handle(evt);
  });
});