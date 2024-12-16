import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { App } from './app';

describe('App', () => {
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App, RouterModule.forRoot([])],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should render title', () => {
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Marie-Cécile Caron, artiste-peintre',
    );
  });

  it.each([
    [0, 'Book'],
    [1, 'Cours de piano'],
  ])('should render pill group', (index, label) => {
    expect(compiled.querySelectorAll('a')?.item(index).querySelector('span')?.textContent)?.toEqual(
      label,
    );
  });

  it('should render domain name in footer', () => {
    expect(compiled.querySelector('address')?.textContent).toEqual('mc-caron.com');
  });

  it('should render link to facebook profile', () => {
    expect(compiled.querySelectorAll('a')?.item(2).href)?.toEqual(
      'https://www.facebook.com/mariececile.caron',
    );
  });
});
