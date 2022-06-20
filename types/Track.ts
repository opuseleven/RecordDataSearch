import { ExtraArtist } from '.';

export interface Track {
  position: string,
  type_: string,
  title: string,
  extraartists?: ExtraArtist[],
  duration: string
}
