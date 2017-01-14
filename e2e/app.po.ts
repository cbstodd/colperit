import { browser, element, by } from 'protractor';

export class ColperitPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('cit-root h1')).getText();
  }
}
