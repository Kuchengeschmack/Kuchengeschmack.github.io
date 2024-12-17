import { TestBed } from '@angular/core/testing';
import { Gallery } from './gallery';

describe('Gallery', () => {
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Gallery],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(Gallery);
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('shoud render title', () => {
    expect(compiled.querySelector('h1')?.textContent).toContain('Book');
  });

  it.todo('should render all photo cards');

  it.todo('should adapt columns to window size');
});
