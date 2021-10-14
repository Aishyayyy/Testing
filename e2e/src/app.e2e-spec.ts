import { async } from '@angular/core/testing';
import { AppPage } from './app.po';
import { browser, Key, logging, element, by } from 'protractor';
import { DriverProvider } from 'protractor/built/driverProviders';
import { DirectiveResolver } from '@angular/compiler';

// describe('workspace-project App', () => {
//   let page: AppPage;

//   beforeEach(() => {
//     page = new AppPage();
//   });
describe('Hellu',()=>{
  it('should display welcome message', async() => {
    browser.waitForAngularEnabled(false); 
  browser.get("http://hindustaannaukri.com/login");
  element(by.css("input[formcontrolname=email]")).sendKeys("dev2311999@gmail.com");

  element(by.css("input[formcontrolname=password]")).sendKeys("12345");
   element(by.cssContainingText(".btn-danger","SIGN IN")).click().then(()=>{
     
   });
  browser.sleep(3000);
  // browser.waitForAngular();
  element(by.cssContainingText(".treeview","Dynamic forms")).click();
 

element(by.cssContainingText(".treeview-menu","Add form")).click();

element(by.css("div.row > div:nth-child(1) > div > input")).sendKeys("hehe");
browser.sleep(3000);

element(by.css("div:nth-child(2) > div > select")).click();
element(by.css("div:nth-child(2) > div > select")).sendKeys(Key.ARROW_DOWN,Key.ARROW_DOWN,Key.ENTER);

element(by.css("div:nth-child(3) > div > select")).click();
element(by.css("div:nth-child(3) > div > select")).sendKeys(Key.ARROW_DOWN,Key.ARROW_DOWN,Key.ENTER).then(function(){
  browser.sleep(3000);
});;

  });;});

// element(by.css("div:nth-child(3) > div > select")).click();
// element(by.cssContainingText(".form-control"," checkbox-group ")).click().then(function(){
//   browser.sleep(3000);
// });

//   afterEach(async () => {
//     // Assert that there are no errors emitted from the browser
//     const logs = await browser.manage().logs().get(logging.Type.BROWSER);
//     expect(logs).not.toContain(jasmine.objectContaining({
//       level: logging.Level.SEVERE,
//     } as logging.Entry));
//   });
// });
