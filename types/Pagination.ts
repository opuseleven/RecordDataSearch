export interface Pagination {
  page: number,
  pages: number,
  per_page: number,
  items: number,
  urls: {
    last: string,
    next: string
  }
}

function defaultPagination() {
  const returnPagination = {
    page: 1,
    pages: 1,
    per_page: 5,
    items: 1,
    urls: {
      last: 'default',
      next: 'default'
    }
  }
  return returnPagination;
}
export { defaultPagination }
