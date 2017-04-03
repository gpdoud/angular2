import { HelloWorldAngular2Page } from './app.po';

describe('hello-world-angular2 App', () => {
  let page: HelloWorldAngular2Page;

  beforeEach(() => {
    page = new HelloWorldAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
