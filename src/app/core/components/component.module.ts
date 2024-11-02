import { NgModule } from "@angular/core";
import { PhotoCardComponent } from "./photo-card/photo-card.component";

@NgModule({
    imports:[PhotoCardComponent],
    exports: [PhotoCardComponent]
})
export class ComponentModule {}