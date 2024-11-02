export class Gallery {
  private _photos: Photo[] | undefined;

  constructor(jsonData: JsonData, path: string) {
    this._photos = jsonData.folders
      .find((folder) => folder.path === path)
      ?.titles.map((title) => jsonData.root + path + title + jsonData.extension)
      .map((path) => new Photo(path));
  }

  public get photos() {
    return this._photos;
  }
}

export class Photo {
  private _path: string;

  constructor(path?: string) {
    this._path = path || '';
  }
  public get path() {
    return this._path;
  }
}

export interface JsonData {
  root: string;
  extension: string;
  folders: Folder[];
}

export interface Folder {
  path: string;
  titles: string[];
}
