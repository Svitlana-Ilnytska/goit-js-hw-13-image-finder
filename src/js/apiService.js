const API_KEY = '24180904-cdf25eb395cc9b94381638218';
const BASE_URL = 'https://pixabay.com';


export default class NewsApiService {
  constructor() {
    this.page = 1;
    this.searchQuery;
  }

  fetchImages() {
    const url = `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

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

