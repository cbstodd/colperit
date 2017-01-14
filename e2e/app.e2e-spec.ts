import { ColperitPage } from './app.po';

describe('colperit App', function() {
  let page: ColperitPage;

  beforeEach(() => {
    page = new ColperitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('cit works!');
  });
});
