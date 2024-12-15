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
});
