const API_KEY = '24180904-cdf25eb395cc9b94381638218';
const BASE_URL = 'https://pixabay.com';


export default class NewsApiService {
  constructor() {
    this.page = 1;
  }

  fetchImages(searchQuery) {
    const url = `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    return fetch(url).then(response => {
      if (response.ok) this.incrementPage();
      return response.json();
    });
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}


// import InfiniteScroll from 'infinite-scroll';
// import ImageCardTpl from '../templates/image-card.hbs';
// import getRefs from './get-refs';
// const refs = getRefs();

// const API_KEY = '24180904-cdf25eb395cc9b94381638218';
// const BASE_URL = 'https://pixabay.com';
// let container = document.querySelector('.gallery-container');

// let infScroll = new InfiniteScroll(container, {
  
//   path: function fetchImages (searchQuery) {
//     return `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${this.pageIndex}&per_page=12&key=${API_KEY}`;
//   },
//   // load response as JSON
//   responseBody: 'json',
//   status: '.scroll-status',
//   history: false,
// });

// // use element to turn HTML string into elements
// let proxyElem = document.createElement('div');

// infScroll.on('load', function (body) {
//   // compile body data into HTML
//   const itemsHTML = body.map(getItemHTML).join('');
//   // convert HTML string into elements
//   proxyElem.innerHTML = itemsHTML;
//   // append item elements
//   container.append(...proxyElem.children);
// });

// // load initial page
// infScroll.loadNextPage();

// //------------------//

// function getItemHTML(images) {
//   if (images.hits.length >= 1) {
//     refs.photoList.insertAdjacentHTML('beforeend', ImageCardTpl(images.hits));
//   }
// }
//  export default {infScroll}