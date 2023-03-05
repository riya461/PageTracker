chrome.contextMenus.create({
    id: 'clip',
    title: 'WebClip this',
    contexts: ['selection'] 
  });

  
  chrome.contextMenus.onClicked.addListener(
    ({selectionText}) => {
        console.log(selectionText)
        getTextId(selectionText)
        chrome.tabs.query({active: true, currentWindow:true}, tabs => {
            let urlval = tabs[0].url;
            console.log(urlval)



        })

    }
  ) 
const url_vals = []
  chrome.contextMenus.onClicked.addListener(
    ({}) => {
        console.log("In the context menu")
        
        chrome.tabs.query({active: true, currentWindow:true}, tabs => {
            let urlval = tabs[0].url;
            console.log(urlval),
            url_vals.push(urlval)


            
            
        })
        console.log(url_vals)
       
  });
  