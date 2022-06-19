export interface Release {
  id: number,
  status?: string,
  type: string,
  format?: string,
  label: string,
  title: string,
  resource_url: string,
  role?: string,
  artist: string,
  year: number,
  thumb: string,
  stats: {
    community: {
      in_wantlist: number,
      in_collection: number
    }
  }
}
