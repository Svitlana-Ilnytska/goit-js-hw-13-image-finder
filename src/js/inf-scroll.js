import InfiniteScroll from 'infinite-scroll';

const API_KEY = '24180904-cdf25eb395cc9b94381638218';
const BASE_URL = 'https://pixabay.com';

const infScroll = new InfiniteScroll('.gallery', {
  responseType: 'text',
  history: false,
  path() {
    return `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;
  },
});

infScroll.loadNextPage();

infScroll.on('load', (response, path) => {
  console.log(JSON.parse(response));

});

export default { infScroll };