import { Component, inject } from '@angular/core';
import { CoreModule } from 'app/core/core.module';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-gallery',
  imports: [CoreModule],
  standalone: true,
  templateUrl: './book.component.html',
})
export class BookComponent {
  private readonly _bookService = inject(BookService);
  public readonly book = this._bookService.book;
}
