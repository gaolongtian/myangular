import { MyappsPage } from './app.po';

describe('myapps App', () => {
  let page: MyappsPage;

  beforeEach(() => {
    page = new MyappsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
