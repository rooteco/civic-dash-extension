function logTest(){
  document.body.style.backgroundColor = 'red';
}

chrome.action.onClicked.addListener(tab => {
  var url="https://civicdash.org/dashboard"
  // chrome.tabs.create({ url: url })
  chrome.tabs.update({url: url})
 });


chrome.webRequest.onBeforeRedirect

 //
 // chrome.scripting.executeScript({
 //   target: { tabId: tab.id },
 //   function: logTest
 // })
// (function init() {
//     try {
//         chrome.storage.local.get(["url", "tab.selected", "always-tab-update"], function (items) {
//             var url = items.url;
//                 url = (0 !== url.indexOf("about:") && 0 !== url.indexOf("data:") && -1 === url.indexOf("://")) ? ("http://" + url) : url;
//                 if (/^http[s]?:/i.test(url) && items["always-tab-update"] !== true) {
//                     document.location.href = url;
//                 } else {
//                     chrome.tabs.getCurrent(function (tab) {
//                         // a keen user may open the extension's background page and set:
//                         // chrome.storage.local.set({'tab.selected': false});
//                         var selected = items["tab.selected"] === undefined ? true : (items["tab.selected"] == "true");
//                         chrome.tabs.update(tab.id, {
//                             "url": url,
//                             "highlighted": selected
//                         });
//                     });
//                 }
//             }
//         });
//     } catch(e){
//         // If anything goes wrong with the redirection logic, fail to normal page.
//         console.error(e);
//     }
// })();
