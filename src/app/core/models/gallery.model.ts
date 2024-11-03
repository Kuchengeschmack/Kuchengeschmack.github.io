import { IMAGES } from '../constants/constants';

export class Gallery {
  private _photos: Photo[] | undefined;

  constructor(jsonData: JsonData, path: string) {
    this._photos = jsonData.folders
      .find((folder) => folder.path === path)
      ?.names.map((name) => new Photo(name, path));
  }

  public get photos() {
    return this._photos;
  }
}

export class Photo {
  private _name: string;
  private _fullPath: string;

  constructor(name?: string, path?: string) {
    this._name = name || '';
    this._fullPath = path ? IMAGES.ROOT + path + name + IMAGES.EXTENSION : '';
  }

  public get name() {
    return this._name;
  }

  public get path() {
    return this._fullPath;
  }
}

export interface JsonData {
  folders: Folder[];
}

export interface Folder {
  path: string;
  names: string[];
}
