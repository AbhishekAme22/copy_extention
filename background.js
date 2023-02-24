chrome.contextMenus.create({
  title: "Copy Page Content",
  contexts:["page"],
  onclick: function() {
    chrome.tabs.executeScript({
      code: "window.getSelection().selectAllChildren(document.body); document.execCommand('copy');"
    });
  }
});
