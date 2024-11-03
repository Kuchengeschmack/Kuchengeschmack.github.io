import { IMAGES } from '../constants/constants';

export class Gallery {
  private _photos: Photo[] | undefined;

  constructor(jsonData: JsonData, path: string) {
    this._photos = jsonData.folders
      .find((folder) => folder.path === path)
      ?.names.map(
        (name) => new Photo(name, IMAGES.ROOT + path + name + IMAGES.EXTENSION)
      );
  }

  public get photos() {
    return this._photos;
  }
}

export class Photo {
  private _name: string;
  private _path: string;

  constructor(name?: string, path?: string) {
    this._name = name || '';
    this._path = path || '';
  }

  public get name() {
    return this._name;
  }

  public get path() {
    return this._path;
  }
}

export interface JsonData {
  folders: Folder[];
}

export interface Folder {
  path: string;
  names: string[];
}
