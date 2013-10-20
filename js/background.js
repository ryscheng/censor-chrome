console.log("Evil Censor");
var REDIR_RULES = {
  '://twitter.com': 'http://123.123.123.123',
  'balatarin.com': 'http://123.123.123.123',
  'youtube.com': 'http://123.123.123.123',
  'http://www.nytimes.com/2013/10/14/opinion/the-bay-of-bengal-in-peril-from-climate-change.html': 'http://www.nytimes.com/2013/10/14/opinion/the-bay-of-bengal-in-peril-from-climate-change.htm',
  'http://www.nytimes.com/2013/10/14/us/politics/budget-and-debt-limit-debate.html': 'http://www.nytimes.com/2013/10/14/us/politics/budget-and-debt-limit-debate.htm',
  'http://www.nytimes.com/2013/10/17/us/congress-budget-debate.html': 'http://www.nytimes.com/2013/10/17/us/congress-budget-debate.htm',
  'http://www.nytimes.com/2013/10/18/us/politics/government-reopens.html':'http://www.nytimes.com/2013/10/18/us/politics/government-reopens.htm',
};
var INJECT_RULES = {
  'http://www.nytimes.com/': 'js/nytimes.js',
};
var intendedState = 0;
var actualState = 0;

chrome.webRequest.onBeforeRequest.addListener(function(details) { 
  if (actualState == 1) {
    for (var k in REDIR_RULES) {
      if (REDIR_RULES.hasOwnProperty(k) && details.url.indexOf(k) != -1) {
        console.log(JSON.stringify(details));
        console.log("Redirecting to " + REDIR_RULES[k]);
        return {redirectUrl: REDIR_RULES[k]};
      }
    }
  }
},{urls: ["<all_urls>"]},["blocking"]);
chrome.webRequest.onCompleted.addListener(function(details) {
  if (actualState == 1) {
    for (var k in INJECT_RULES) {
      if (INJECT_RULES.hasOwnProperty(k) && details.url == k) {
        var opts = {file: INJECT_RULES[k], runAt: "document_idle"};
        console.log(JSON.stringify(details));
        console.log("Injecting script " + INJECT_RULES[k]);

        //setTimeout(chrome.tabs.executeScript.bind({}, null, {file: INJECT_RULES[k]}), 0);
        chrome.tabs.executeScript(details.tabId, {file: INJECT_RULES[k]});
        return;
      }
    }
  }
<<<<<<< HEAD
},{urls: ["<all_urls>"]},[]);
=======
},{urls: ["<all_urls>"]},["blocking","requestBody"]);
chrome.webRequest.handlerBehaviorChanged(function() {});
>>>>>>> 7a654ae5507566d8e3df6bbed52cbfcb7ee947b0

chrome.browserAction.onClicked.addListener(function() {
  if (intendedState == 0) {
    console.log("Button clicked. State transition from off => on");
    intendedState = 1;
    chrome.browserAction.setIcon({path: 'img/bad.png'});
  } else {
    console.log("Button clicked. State transition from on => off");
    intendedState = 0;
    chrome.browserAction.setIcon({path: 'img/good.png'});
  }
});

//Check proxy settings every second and turn blocking off if set
function checkProxy() {
  console.log('Checking proxy settings');
  var uproxyOn;
  chrome.proxy.settings.get({'incognito': false}, function(config) {
    if (config && config.value && config.value.mode && 
        (config.value.mode == 'pac_script' || config.value.mode == 'fixed_servers')) {
      uproxyOn = true;
    } else {
      uproxyOn = false;
    }
    if (uproxyOn && actualState == 1) {
      console.log("Chrome Proxy Settings are set. Turning censorship off");
      actualState = 0;
    } else if (!uproxyOn && intendedState == 1 && actualState == 0) {
      console.log("Chrome Proxy Settings are not set. Devil's on");
      actualState = 1;
    } else if (!uproxyOn && intendedState == 0 && actualState == 1) {
      console.log("Chrome Proxy Settings are not set. Alien's on");
      actualState = 0;
    }
  });
  setTimeout(checkProxy, 1000);
};
setTimeout(checkProxy, 1000);
