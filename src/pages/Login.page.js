class loginpage{
    get signin(){
        return $("a[class='link has-text-white']")
    }
    

    async listoftabs()
    {let actuallist=[]
        let Actuallist=[]
        const listoftabs=await $$('li.nav-menu-list-container>ul[class=nav-menu-list]>li')
        for(let i =0;i<listoftabs.length;i++){
           // console.log(await (await(listoftabs[i]).getText()))
            actuallist = actuallist+","+(await(listoftabs[i]).getText())
             Actuallist = await(await (actuallist).slice(1,await (actuallist).length))
             //actuallist = (await(listoftabs[i]).getText())+ ","+actuallist
         
             }
              return Actuallist
    }
}export default new loginpage()