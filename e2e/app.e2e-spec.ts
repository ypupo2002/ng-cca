import { NgCcaPage } from './app.po';

describe('ng-cca App', () => {
  let page: NgCcaPage;

  beforeEach(() => {
    page = new NgCcaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
