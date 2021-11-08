export default class LoadMoreBtn {
    constructor({ selector, hidden = false }) {
      this.refs = this.getRefs(selector);
  
      hidden && this.hide();
    }
  
    getRefs(selector) {
      const refs = {};
      refs.button = document.querySelector(selector);
      refs.label = refs.button.querySelector('.label');
    //   refs.spinner = refs.button.querySelector('.spinner');
    refs.loading = document.querySelector('.loading');
  
      return refs;
    }
  
    enable() {
      this.refs.button.disabled = false;
      this.refs.label.textContent = 'Показать ещё';
      this.refs.loading.classList.add('show');
    }
  
    disable() {
      this.refs.button.disabled = true;
      this.refs.label.textContent = 'Загружаем...';
      this.refs.loading.classList.remove('show');
    }
  
    show() {
      this.refs.button.classList.remove('show');
    }
  
    hide() {
      this.refs.button.classList.add('show');
    }
  }