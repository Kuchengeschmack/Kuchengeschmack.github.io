import { NgModule } from "@angular/core";
import { PhotoCardComponent } from "./components/photo-card/photo-card.component";

@NgModule({
    declarations:[PhotoCardComponent],
    exports: [PhotoCardComponent]
})
export class CoreModule {}