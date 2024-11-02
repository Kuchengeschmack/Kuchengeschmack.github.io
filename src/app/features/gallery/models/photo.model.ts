export class Photo {
  private _path: string;

  constructor(path: string) {
    this._path = path;
  }

  public get path() {
    return this._path;
  }
}
