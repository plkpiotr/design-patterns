import { Fluent } from './fluent.interface';
import { Album } from './album.class';

export class Label implements Fluent {
  private album: Album;

  constructor(album?: Album) {
    this.album = album !== undefined ? new Album(album) : new Album();
  }

  public withName(name: string): Label {
    this.album.setName(name);
    return this;
  }

  public withTracks(tracks: string[]): Label {
    this.album.setTracks(tracks);
    return this;
  }

  public release(): Album {
    return this.album;
  }
}
