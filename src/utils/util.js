module.exports={
    getUrlAndTitle: async()=>{
        return {
            
            url: await browser.getUrl(),
            title: await browser.getTitle()}}
    ,
    clickdisplayandEnabel: async function(element){
        return{
     click: await element.isClickable(),
     display: await element.isDisplayed(),
     enable: await element.isEnabled()}
    },
    waitfunctions: async function(element,timeout){
return{
    existwait:await element.waitForExist(timeout),
    enablewait:await element.waitForEnabled(timeout),
    displaywait:await element.waitForDisplayed(timeout),
    clickblewait:await element.waitForClickable(timeout)
}
    }

}

    