export class Gallery {
  private _photos: Photos;

  constructor (jsonData: JsonData, path: string) {
    this._photos
      = jsonData.folders
        .find(folder => folder.path === path)
        ?.fileNames
        .map(fileName => new Photo(fileName, path)) || [];
  }

  get photos () {
    return this._photos;
  }
}

export class Photo {
  private _alt: string;
  private _src: string;

  constructor (fileName: string, path: string) {
    this._alt = fileName;
    this._src = `${path}/${fileName}`;
  }

  get alt () {
    return this._alt;
  }

  get src () {
    return this._src;
  }
}

export type Photos = Photo[];

export interface JsonData {
  folders: Folders
}

export interface Folder {
  path: string
  fileNames: string[]
}

export type Folders = Folder[];
