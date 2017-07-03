import { PrsPage } from './app.po';

describe('prs App', () => {
  let page: PrsPage;

  beforeEach(() => {
    page = new PrsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
