function filterByArtists(data: []) {
  return data.filter(a => a['type'] === 'artist')
}
export { filterByArtists };
