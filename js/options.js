var bkg = chrome.extension.getBackgroundPage();
var box = document.getElementById('rules-box'); 
var btn = document.getElementById('rules-btn');
box.appendChild(document.createTextNode(JSON.stringify(bkg.RULES)));
btn.onclick = function () {
  bkg.console.log("Trying to set new rules");
  try {
    var newRules = JSON.parse(box.value);
    bkg.RULES = newRules;
    bkg.console.log(bkg.RULES);
  } catch (e) {
    alert("Syntax error in rules");
    bkg.console.error(e);
  }
};
