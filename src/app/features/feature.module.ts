import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { SideMenuComponent } from "./side-menu/side-menu.component";

@NgModule({
    imports:[HeaderComponent, SideMenuComponent],
    exports: [HeaderComponent, SideMenuComponent]
})
export class FeatureModule {}