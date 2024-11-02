export class Gallery {
  private _paths: string[];
  private _photos: Photo[];

  constructor(titles: string[], root: string, extension: string) {
    this._paths = titles.map((title) => root + title + extension);
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
