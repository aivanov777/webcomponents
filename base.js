function loadStyle(css, params, tag) {
  var style = tag;
  var styleNode;

  try {
    styleNode = document.querySelector(css);
  } catch (err) {}

  if (styleNode) {
    css = styleNode.innerHTML.replace(/__([a-zA-Z]+)__/gi, function (a, match) {
      return params[match];
    });
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
  tabs.init();
  document.body.addEventListener('click', function (evt) {
    tabs.handle(evt);
  });
});