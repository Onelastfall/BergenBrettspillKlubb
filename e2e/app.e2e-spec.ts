import { BrettspillBergenPage } from './app.po';

describe('brettspill-bergen App', () => {
  let page: BrettspillBergenPage;

  beforeEach(() => {
    page = new BrettspillBergenPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
