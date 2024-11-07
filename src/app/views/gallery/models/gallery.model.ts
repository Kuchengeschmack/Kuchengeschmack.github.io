import { IMAGES } from 'constants/constants';

export class Gallery {
  private _photos: Photo[];

  constructor(jsonData: JsonData, url: string) {
    this._photos =
      jsonData.folders
        .find((folder) => folder.path === url)
        ?.names.map((name) => new Photo(name, url)) || [];
  }

  public get photos() {
    return this._photos;
  }
}

export class Photo {
  private _alt: string;
  private _src: string;

  constructor(name: string, url: string) {
    this._alt = name;
    this._src = IMAGES.ROOT + url + '/' + name + IMAGES.EXTENSION;
  }

  public get alt() {
    return this._alt;
  }

  public get src() {
    return this._src;
  }
}

export interface JsonData {
  folders: { path: string; names: string[] }[];
}
