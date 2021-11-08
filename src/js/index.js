import '../style.css';
import ImageCardTpl from '../templates/image-card.hbs';
import ImageListTpl from '../templates/images-list.hbs';
import NewsApiService from './apiService';
import getRefs from './get-refs';
import LoadMoreBtn from './button';

import onFetchError from './error';
import './inf-scroll';
import * as _ from 'lodash';

const loading = document.querySelector('.loading');

const refs = getRefs();
const newsApiService = new NewsApiService();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

// window.addEventListener('scroll', () => {
//   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//   console.log({ scrollTop, scrollHeight, clientHeight });
//   if (clientHeight + scrollTop >= scrollHeight - 5) {
//     showLoading();
//   }
// });

// function showLoading() {
//   loading.classList.add('show');
//   infScroll.loadNextPage();
//   // setTimeout(getNewsApiService, 1000);
// }
// function getNewsApiService() {
//   // evt.preventDefault();
//   const searchQuery = refs.input.value;

//   newsApiService.incrementPage();
//   newsApiService
//     .fetchImages(searchQuery)
//     .then(appendImagesMarkup)
//     .catch(onFetchError)
//     .finally(() => loading.classList.remove('show'));
// }

// refs.searchForm.addEventListener('input', onInputChange);
refs.searchForm.addEventListener('input', _.debounce(onInputChange, 1000));
loadMoreBtn.refs.button.addEventListener('click', fetchImages);

function onInputChange(evt) {
  evt.preventDefault();
  newsApiService.query = evt.target.value;
  // const form = evt.target;
  // const searchQuery = evt.target.value;

  if (newsApiService.query === '') {
    return (refs.photoList.innerHTML = '');
  }
  loadMoreBtn.show();
  newsApiService.resetPage();
  clearArticlesContainer();
  // newsApiService
  fetchImages();
  // .then(appendImagesMarkup)
  // .catch(onFetchError)
  // .finally(() => loading.classList.remove('show'));
  
}
function fetchImages() {
  loadMoreBtn.disable();
  newsApiService.fetchImages().then(appendImagesMarkup);
  loadMoreBtn.enable();
  // .catch(onFetchError)
  // .finally(() => loading.classList.remove('show'));

  getElement();
}

function appendImagesMarkup(images) {
  refs.photoList.innerHTML = '';
  if (images.hits.length >= 1) {
    refs.photoList.insertAdjacentHTML('beforeend', ImageCardTpl(images.hits));
    // loading.classList.remove('show');
  } else {
    onFetchError();
  }
}
function clearArticlesContainer() {
  refs.photoList.innerHTML = '';
}

function getElement (hits) {
const id = hits[0].id;
const element = document.getElementById(`[data-id="${id}"]`);
element.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});
}

