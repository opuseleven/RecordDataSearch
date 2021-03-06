import { DiscogObj, Format, Track, ExtraArtist, ReleaseImg } from '.';

export interface DetailedRelease {
  id: number,
  status: string,
  year: number,
  resource_url: string,
  uri: string,
  artist: DiscogObj[],
  artists_sort?: string,
  labels?: DiscogObj[],
  series?: DiscogObj[],
  companies?: DiscogObj[],
  formats: Format[],
  data_quality?: string,
  community?: any,
  format_quantity?: number,
  date_added: string,
  date_changed: string,
  num_for_sale?: number,
  lowest_price?: any,
  title: string,
  country: string,
  released: string,
  notes?: string,
  identifiers?: any[],
  genres: string[],
  tracklist: Track[],
  extraartists: ExtraArtist[],
  images?: ReleaseImg[],
  thumb?: string,
  estimated_weight?: number,
  blocked_from_sale?: boolean
}
