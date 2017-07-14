function loadStyle(css, tag){
  var style = tag;
  if(!tag){
    style = document.createElement('style');
    style.innerHTML += css;
    document.head.appendChild(style);
  }else{
    style.innerHTML = css;
  }
  return style;
}

window.addEventListener('load', function(){
  const tabs = new Tabs();
  tabs.init();
  document.body.addEventListener('click', function(evt){
    tabs.handle(evt);
  });
});