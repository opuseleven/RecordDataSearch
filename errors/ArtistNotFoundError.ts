function ArtistNotFoundError() {

  const returnArtist = {
    id: -1,
    type: 'error',
    user_data: {
      in_wantlist: false,
      in_collection: false
    },
    master_id: null,
    master_url: null,
    uri: '',
    title: 'Error: Artist Not Found',
    thumb: '',
    cover_image: '',
    resource_url: ''
  }
  return returnArtist;
}
export { ArtistNotFoundError };
