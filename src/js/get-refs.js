export default function getRefs() {
    return{
    photoCard: document.querySelector('.gallery-item'),
    photoList: document.querySelector('.gallery'),
    searchForm: document.querySelector('.search-form'),
    input: document.querySelector("#controls input"),
    sentinel: document.querySelector('#sentinel'),
    };
}