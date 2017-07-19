function DateFormatter() {
  //accept both Unix TS (1500452575972) and iso string ('2017-07-19T08:20:01.870Z')
  const defaults = {
    maxActive: Infinity
  };

  function leadZero(val, cnt=2) {
    val = val + '';
    for (var a = cnt - val.length; a > 0; a--) {
      val = '0'+val;
    }
    return val;
  }

  function interpolateDateValue(date, key){
    var val = key;
    switch(key){
      case 'H':
        val = date.getHours();
        break;
      case 'HH':
        val = leadZero(date.getHours());
        break;
      case 'm':
        val = date.getMinutes();
        break;
      case 'mm':
        val = leadZero(date.getMinutes());
        break;
      case 's':
        val = date.getSeconds();
        break;
      case 'ss':
        val = leadZero(date.getSeconds());
        break;
      case 'D':
        val = date.getDate();
        break;
      case 'DD':
        val = leadZero(date.getDate());
        break;
      case 'M':
        val = date.getMonth()+1;
        break;
      case 'MM':
        val = leadZero(date.getMonth()+1);
        break;
      case 'YY':
        val = (date.getFullYear()+'').substr(2);
        break;
      case 'YYYY':
        val = date.getFullYear();
        break;
    }
    return val;
  }

  function renderDate(target) {
    const newValue = target.dataset.date;
    const dateFormat = target.dataset.dateFormat || 'HH:mm:ss DD.MM.YYYY';

    const symbols = ['HH', 'H', 'mm', 'm', 'ss', 's', 'DD', 'D', 'MM', 'M', 'YYYY', 'YY'];
    const symbolRegex = new RegExp(symbols.join('|'), 'gi');

    const date = new Date(parseFloat(newValue) > 9999 ? parseFloat(newValue) : newValue);
    const val = dateFormat.replace(symbolRegex, function(match){
      return interpolateDateValue(date, match)
    });

    target.innerText = val;
  }

  return {
    init: function (element) {

      // select the target node
      var target = element;
      renderDate(target);
      // create an observer instance
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          renderDate(mutation.target)
        });
      });

      // configuration of the observer:
      var config = {
        attributes: true,
        attributeFilter:['data-date', 'data-date-format']
      };

      // pass in the target node, as well as the observer options
      observer.observe(target, config);

 //      later, you can stop observing
   // observer.disconnect();
    }
  }
}