import { TaobaoPage } from './app.po';

describe('taobao App', () => {
  let page: TaobaoPage;

  beforeEach(() => {
    page = new TaobaoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
