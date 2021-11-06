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

refs.searchForm.addEventListener("input", _.debounce(onInputChange, 500));

function onInputChange(evt) {
  evt.preventDefault();

  const form = evt.currentTarget;
  const searchQuery = form.elements.query.value;

  newsApiService
    .fetchImages(searchQuery)
    .then(appendImagesMarkup)
    .catch(onFetchError)
    .finally(() => searchQuery === '');
}

function appendImagesMarkup(images) {
  // const murkupImages = ImageListTpl(images);
  // refs.photoList.innerHTML = murkupImages;
  if (images.hits.length >= 1) {
    refs.photoList.insertAdjacentHTML('beforeend', ImageCardTpl(images.hits));
    scroll();
  } else {
    throw new Error('error');
  }
}
