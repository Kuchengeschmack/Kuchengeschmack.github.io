import { Injectable } from '@angular/core';
import { MENU_ITEMS } from 'app/core/constants/constants';

import { Header } from '../models/header.model';

@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  public readonly header = new Header(
    MENU_ITEMS,
    'Marie-Cécile Caron, artiste-peintre'
  );
}
