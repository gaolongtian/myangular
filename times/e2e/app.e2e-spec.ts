import { TimesPage } from './app.po';

describe('times App', () => {
  let page: TimesPage;

  beforeEach(() => {
    page = new TimesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
