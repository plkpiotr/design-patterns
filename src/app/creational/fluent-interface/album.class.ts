export class Album {
  private name: string;
  private tracks: string[];

  constructor(album?: Album) {
    this.name = album?.name;
    this.tracks = album?.tracks;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setTracks(tracks: string[]): void {
    this.tracks = tracks;
  }
}
