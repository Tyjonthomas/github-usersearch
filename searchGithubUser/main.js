searchGithub = function(word){
  var query = word.selectionText;
  chrome.tabs.create({url: "https://github.com/search?utf8=%E2%9C%93&q=fullname%3A%22+" + query + "%22&type=Users&ref=advsearch&l=&l="});
};

chrome.contextMenus.create({
  title: "Search for Github User",
  contexts:["selection"],
  onclick: searchGithub
});
