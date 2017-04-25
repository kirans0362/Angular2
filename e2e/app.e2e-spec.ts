import { PartnerRegistrationPage } from './app.po';

describe('partner-registration App', () => {
  let page: PartnerRegistrationPage;

  beforeEach(() => {
    page = new PartnerRegistrationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
