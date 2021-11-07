import InfiniteScroll from 'infinite-scroll';

const API_KEY = '24180904-cdf25eb395cc9b94381638218';
const BASE_URL = 'https://pixabay.com';

const infScroll = new InfiniteScroll('.gallery', {
  responseType: 'text',
  loadCount: 1,
  history: false,
  // responseBody: 'json',
  status: '.scroll-status',
  visibleStyle: { transform: 'translateY(0)', opacity: 1 },
  hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
  path: function () {
    let pageNumber = this.pageNumber += 1;
    return `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=cat&page=${pageNumber}&per_page=12&key=${API_KEY}`;
  },
});

infScroll.loadNextPage();

infScroll.on('load', (response, path) => {
  console.log(JSON.parse(response));
});


  // тут по шаблну сделали строку с тегами
  // потом кинули в фрагмент
  // фрагмент передали в infScroll.appendItems(фоагмент)

// const markup = refs.photoList;
// const fragment = new DocumentFragment();
// const d = document.createElement('div');
// fragment.innerHTML = markup;
// console.log(fragment);