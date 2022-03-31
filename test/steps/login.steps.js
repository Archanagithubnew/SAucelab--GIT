import { Given,When,Then } from "@wdio/cucumber-framework";
const assert = require('assert');
var expect = require('chai').expect
var should = require('chai').should()
import login from '../../src/pages/Login.page'
import data from '../../src/Testdata.json'
import allureReporter from '@wdio/allure-reporter'


Given(/^user on the saucehome page$/, async()=>{  

const val=await (browser).getUrlAndTitle()
assert.strictEqual( val.url, data.titleandurl.homeurl, "Incorrect url");
assert.strictEqual( val.title,data.titleandurl.hometitle,"Incorrect title")

const clicke=await (browser).clickdisplayandEnabel(login.signin)
 expect(clicke.click).to.be.true;
 expect(clicke.display).to.be.true
 expect(clicke.enable).to.be.true

 let actualistoftabs=await ((login).listoftabs())
 let inputdata=(await(await(await(data.array.homepage).toString())))
 console.log ("FROM INPUT"+inputdata)
 //let  arrayoflist =await (await(actualistoftabs).split(","))
 //console.log(await arrayoflist.splice(6))
 console.log("ACTUAL LIST"+actualistoftabs)
 //console.log(arrayoflist)
 //console.log(data.array.homepage)
    // expect(actualistoftabs).to.contain(inputdata);
    assert.deepEqual(actualistoftabs, inputdata, "[Incorretc oder]");
   allureReporter.addStep(actualistoftabs)
   
   

});
   
  
Then(/^user shoule be able to moveover tabs$/, async()=>{
    await browser.url('/')
    });
  
  