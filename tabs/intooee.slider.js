init();
var tabControlStyle;
function init(){
    loadStyle('#tab1 .tab-unit{ display: none }');
    switchTab(1);
}

function switchTab(ind) {
    tabControlStyle = loadStyle('#tab1 #tabunit'+ind+' { display: block } [data-trigger$="tab::'+ind+'" i]{color:red}', tabControlStyle);
}

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
    document.body.addEventListener('click', function(evt){
        const trigger = evt.target.closest('[data-trigger]');
        if(trigger){
            const params = trigger.getAttribute('data-trigger').split('::');
            console.warn(params);
            switchTab(params[2]);
        }
    });
});