export class Gallery {
  private _paths: string[];
  private _photos: Photo[];

  constructor(jsonData: jsonData) {
    this._paths = jsonData.titles.map(
      (title) => jsonData.root + title + jsonData.extension
    );
    this._photos = this._paths.map((path) => new Photo(path));
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

export interface jsonData {
  root: string;
  extension: string;
  titles: string[];
}
