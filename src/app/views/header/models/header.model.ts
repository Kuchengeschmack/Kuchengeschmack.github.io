export class Header {
  private _sideMenu: SideMenu;
  private _title: string;

  constructor(menuItems: MenuItem[], title: string) {
    this._sideMenu = new SideMenu(menuItems);
    this._title = title;
  }

  get sideMenu() {
    return this._sideMenu;
  }

  get title() {
    return this._title;
  }
}

export class SideMenu {
  private _menuItems: MenuItem[];

  constructor(menuItems: MenuItem[]) {
    this._menuItems = menuItems;
  }

  get menuItems() {
    return this._menuItems;
  }
}

export interface MenuItem {
  title: string;
  link: string;
}
