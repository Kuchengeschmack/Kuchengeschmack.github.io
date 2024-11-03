import { Injectable } from '@angular/core';
import { SIDE_MENU } from 'app/core/constants/constants';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  private readonly _sideMenu = SIDE_MENU;

  public get sideMenu() {
    return this._sideMenu;
  }
}
