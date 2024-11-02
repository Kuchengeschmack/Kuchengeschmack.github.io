import { Injectable } from "@angular/core";
import { Gallery } from "app/features/gallery/models/gallery.model";
import * as jsonData from 'assets/intro.json';

@Injectable({
    providedIn: 'root',
  })
  export class IntroService {
    private readonly _jsonData = jsonData;
    private readonly _intro = new Gallery(this._jsonData);
  
    public get intro() {
      return this._intro;
    }
  }