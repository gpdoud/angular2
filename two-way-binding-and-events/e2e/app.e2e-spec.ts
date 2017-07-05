import { TwoWayBindingAndEventsPage } from './app.po';

describe('two-way-binding-and-events App', () => {
  let page: TwoWayBindingAndEventsPage;

  beforeEach(() => {
    page = new TwoWayBindingAndEventsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
