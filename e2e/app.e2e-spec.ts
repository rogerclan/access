import { AccessPage } from './app.po';

describe('access App', function() {
  let page: AccessPage;

  beforeEach(() => {
    page = new AccessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
