import { AngularCliTake2Page } from './app.po';

describe('angular-cli-take2 App', () => {
  let page: AngularCliTake2Page;

  beforeEach(() => {
    page = new AngularCliTake2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
