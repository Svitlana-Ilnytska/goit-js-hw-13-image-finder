// import InfiniteScroll from 'infinite-scroll';
// import getRefs from './get-refs';

// const refs = getRefs();
// const API_KEY = '24180904-cdf25eb395cc9b94381638218';
// const BASE_URL = 'https://pixabay.com';

// const infScroll = new InfiniteScroll(refs.photoList, {
//   loadCount: 1,
//   history: false,
//   responseBody: 'json',
//   status: '.scroll-status',
//   visibleStyle: { transform: 'translateY(0)', opacity: 1 },
//   hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
//   path: function () {
//     let pageNumber = ( this.loadCount + 1 ) * 12;
//     return `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${pageNumber}&page=${this.page}&per_page=12&key=${API_KEY}`;
//   },
// });

// infScroll.loadNextPage();

// infScroll.on('load', (response, path) => {
//   console.log(JSON.parse(response))
// });
