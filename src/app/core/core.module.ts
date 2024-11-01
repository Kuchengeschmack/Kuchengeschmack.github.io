import { NgModule } from "@angular/core";
import { PhotoCardComponent } from "./components/photo-card/photo-card.component";

@NgModule({
    imports:[PhotoCardComponent],
    exports: [PhotoCardComponent]
})
export class CoreModule {}