import { SubcomponentUsagePage } from './app.po';

describe('subcomponent-usage App', () => {
  let page: SubcomponentUsagePage;

  beforeEach(() => {
    page = new SubcomponentUsagePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
