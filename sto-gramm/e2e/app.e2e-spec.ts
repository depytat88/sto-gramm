import { StoGrammPage } from './app.po';

describe('sto-gramm App', () => {
  let page: StoGrammPage;

  beforeEach(() => {
    page = new StoGrammPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
