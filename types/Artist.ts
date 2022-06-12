export interface Artist {
  id: number,
  type: string,
  user_data: {
    in_wantlist: boolean,
    in_collection: boolean
  },
  master_id: any,
  master_url: any,
  uri: string,
  title: string,
  thumb: string,
  cover_image: string,
  resource_url: string
}
