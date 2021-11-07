import '../style.css';
import ImageCardTpl from '../templates/image-card.hbs';
import ImageListTpl from '../templates/images-list.hbs';
import NewsApiService from './apiService';
import getRefs from './get-refs';

import onFetchError from './error';
import infScroll from './inf-scroll';
import * as _ from 'lodash';

const refs = getRefs();
const newsApiService = new NewsApiService();

// refs.searchForm.addEventListener('input', onInputChange);
refs.searchForm.addEventListener("input", _.debounce(onInputChange, 1000));

function onInputChange(evt) {
  evt.preventDefault();

  // const form = evt.target;
  const searchQuery = evt.target.value;

  if (searchQuery === '') {
    return (refs.photoList.innerHTML = '');
  }
  newsApiService.resetPage();
  clearArticlesContainer();
  newsApiService
    .fetchImages(searchQuery)
    .then(appendImagesMarkup)
    .catch(onFetchError)
    .finally(() => searchQuery === '');
}

function appendImagesMarkup(images) {
  refs.photoList.innerHTML = '';
  if (images.hits.length >= 1) {
    refs.photoList.insertAdjacentHTML('beforeend', ImageCardTpl(images.hits));
  } else {
    onFetchError();
  }
}
function clearArticlesContainer() {
  refs.photoList.innerHTML = '';
}
