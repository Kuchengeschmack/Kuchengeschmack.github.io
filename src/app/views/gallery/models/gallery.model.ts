import { IMAGES } from 'constants/constants';

export class Gallery {
  private _photos: Photos;

  constructor(jsonData: JsonData, url: string) {
    this._photos =
      jsonData.folders
        .find(folder => folder.path === url?.split('gallery')[1])
        ?.names.map(name => new Photo(name, url?.split('gallery')[1])) || [];
  }

  get photos() {
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

  get alt() {
    return this._alt;
  }

  get src() {
    return this._src;
  }
}

export type Photos = Photo[];

export interface JsonData {
  folders: Folders;
}

export interface Folder {
  path: string;
  names: string[];
}

export type Folders = Folder[];
