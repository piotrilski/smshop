import { SmshopFrontPage } from './app.po';

describe('smshop-front App', function() {
  let page: SmshopFrontPage;

  beforeEach(() => {
    page = new SmshopFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
