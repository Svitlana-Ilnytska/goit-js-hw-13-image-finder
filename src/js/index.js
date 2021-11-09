import '../style.css';
import ImageCardTpl from '../templates/image-card.hbs';
import NewsApiService from './apiService';
import getRefs from './get-refs';
import LoadMoreBtn from './button';

import onFetchError from './error';
import './inf-scroll';
import * as _ from 'lodash';

// const loading = document.querySelector('.loading');

const refs = getRefs();
const newsApiService = new NewsApiService();
const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

refs.searchForm.addEventListener('input', _.debounce(onInputChange, 1000));
loadMoreBtn.refs.button.addEventListener('click', fetchImages);
refs.searchInput.addEventListener('keypress', function(e){
  if(e.which === 13){
  	e.preventDefault();
    onInputChange;
  }})

function onInputChange(evt) {
  evt.preventDefault();
  newsApiService.query = evt.target.value;
  // const form = evt.target;
  // const searchQuery = evt.target.value;

  if (newsApiService.query === '') {
    return (refs.photoList.innerHTML = '') || loadMoreBtn.hide();
  }
  loadMoreBtn.show();
  newsApiService.resetPage();
  clearImagesContainer();
  fetchImages();
}

function fetchImages() {
  loadMoreBtn.disable();
  newsApiService.fetchImages().then(images => {
    appendImagesMarkup(images);
    loadMoreBtn.enable();
    getElement(images);
  });
}

function appendImagesMarkup(images) {
  // refs.photoList.innerHTML = '';
  if (images.hits.length >= 1) {
    refs.photoList.insertAdjacentHTML('beforeend', ImageCardTpl(images.hits));
  } else {
    onFetchError();
    loadMoreBtn.hide();
    this.refs.loading.classList.remove('show');
  }
}
function clearImagesContainer() {
  refs.photoList.innerHTML = '';
}

function getElement(images) {
  const id = images.hits[0].id;

  const element = document.querySelector(`[data-id="${id}"]`);
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
  });
}
