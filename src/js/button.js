export default class LoadMoreBtn {
  constructor({ selector, hidden = false }) {
    this.refs = this.getRefs(selector);

    hidden && this.hide();
  }

  getRefs(selector) {
    const refs = {};
    refs.button = document.querySelector(selector);
    refs.label = refs.button.querySelector('.label');
    refs.loading = document.querySelector('.loading');

    return refs;
  }

  enable() {
    this.refs.button.disabled = false;
    this.refs.label.textContent = 'Показати ще?';
    this.refs.loading.classList.add('show');
  }

  disable() {
    this.refs.button.disabled = true;
    this.refs.label.textContent = 'Ще чуть-чуть ...';
    this.refs.loading.classList.remove('show');
  }

  show() {
    this.refs.button.classList.remove('is-hidden');
  }

  hide() {
    this.refs.button.classList.add('is-hidden');
  }
}
