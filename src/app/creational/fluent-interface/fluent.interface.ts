import { Label } from './label.class';

export interface Fluent {
  withName(name: string): Label;
  withTracks(tracks: string[]): Label;
}
