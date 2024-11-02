import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SideMenuService {
  private readonly _sideMenu = [
    { title: 'Explore the Docs', link: 'https://angular.dev' },
    { title: 'Learn with Tutorials', link: 'https://angular.dev/tutorials' },
    { title: 'CLI Docs', link: 'https://angular.dev/tools/cli' },
    {
      title: 'Angular Language Service',
      link: 'https://angular.dev/tools/language-service',
    },
    { title: 'Angular DevTools', link: 'https://angular.dev/tools/devtools' },
  ];

  public get sideMenu() {
    return this._sideMenu;
  }
}
