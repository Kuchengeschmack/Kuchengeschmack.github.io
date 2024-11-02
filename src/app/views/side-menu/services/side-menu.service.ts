import { Injectable } from '@angular/core';
import { SideMenu } from '../models/side-menu.model';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  private readonly _sideMenu: SideMenu[];

  constructor() {
    this._sideMenu = [
      { title: 'Présentation', link: 'intro' },
      { title: 'Book', link: 'gallery' },
      { title: 'Cours de piano', link: 'piano' },
      { title: 'Facebook', link: 'facebook' },
    ];
  }

  public get sideMenu() {
    return this._sideMenu;
  }
}
