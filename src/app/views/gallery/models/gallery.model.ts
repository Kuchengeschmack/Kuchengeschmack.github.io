import { IMAGES } from 'constants/constants';

export class Gallery {
  private _photos: Photo[];

  constructor(jsonData: JsonData, path: string) {
    this._photos =
      jsonData.folders
        .find((folder) => folder.path === path)
        ?.names.map((name) => new Photo(name, path)) || [];
  }

  public get photos() {
    return this._photos;
  }
}

export class Photo {
  private _alt: string;
  private _src: string;

  constructor(name: string, path: string) {
    this._alt = name;
    this._src = IMAGES.ROOT + path + '/' + name + IMAGES.EXTENSION;
  }

  public alt() {
    return this._alt;
  }

  public get src() {
    return this._src;
  }
}

export interface JsonData {
  folders: { path: string; names: string[] }[];
}
