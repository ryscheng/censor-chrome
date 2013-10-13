console.log("Evil Censor");
var RULES = {
  '://twitter.com': 'http://123.123.123.123',
  'http://www.nytimes.com/2013/10/14/us/politics/budget-and-debt-limit-debate.html': 'http://www.nytimes.com/2013/10/14/us/politics/budget-and-debt-limit-debate.htm',
};
var state = 0;

chrome.webRequest.onBeforeRequest.addListener(function(details) { 
  if (state == 1) {
    var rulesObj = RULES;
    for (var k in rulesObj) {
      if (rulesObj.hasOwnProperty(k) && details.url.indexOf(k) != -1) {
        console.log(JSON.stringify(details));
        console.log("Redirecting to " + rulesObj[k]);
        return {redirectUrl: rulesObj[k]};
      }
    }
  }
},{urls: ["<all_urls>"]},["blocking","requestBody"]);

chrome.browserAction.onClicked.addListener(function() {
  if (state == 0) {
    chrome.proxy.settings.get({'incognito': false}, function(config) {
      if (config && config.value && config.value.mode && 
          (config.value.mode == 'pac_script' || config.value.mode == 'fixed_servers')) {
        console.log("Chrome Proxy Settings are set. Ignoring");
        return;
      } else {
        state = 1;
        chrome.browserAction.setIcon({path: 'img/bad.png'});
      }
    });
  } else {
    state = 0;
    chrome.browserAction.setIcon({path: 'img/good.png'});
  }
});

