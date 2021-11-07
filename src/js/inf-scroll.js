// import InfiniteScroll from 'infinite-scroll';

// const API_KEY = '24180904-cdf25eb395cc9b94381638218';
// const BASE_URL = 'https://pixabay.com';

// const infScroll = new InfiniteScroll('.gallery', {
//   responseType: 'text',
//   loadCount: 1,
//   history: false,
//   // responseBody: 'json',
//   status: '.scroll-status',
//   visibleStyle: { transform: 'translateY(0)', opacity: 1 },
//   hiddenStyle: { transform: 'translateY(100px)', opacity: 0 },
//   path: function () {
//     let pageNumber = ( this.loadCount + 1 ) * 12;
//     return `${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=cat&page=${pageNumber}&per_page=12&key=${API_KEY}`;
//   },
// });

// infScroll.loadNextPage();

// infScroll.on('load', (response, path) => {
//   console.log(JSON.parse(response));
// });


  // тут по шаблну сделали строку с тегами
  // потом кинули в фрагмент
  // фрагмент передали в infScroll.appendItems(фоагмент)

// const markup = refs.photoList;
// const fragment = new DocumentFragment();
// const d = document.createElement('div');
// fragment.innerHTML = markup;
// console.log(fragment);

// const container = document.getElementById('container');
// const loading = document.querySelector('.loading');

// getPost();
// getPost();
// getPost();

// window.addEventListener('scroll', () => {
// 	const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
	
// 	console.log( { scrollTop, scrollHeight, clientHeight });
	
// 	if(clientHeight + scrollTop >= scrollHeight - 5) {
// 		// show the loading animation
// 		showLoading();
// 	}
// });

// function showLoading() {
// 	loading.classList.add('show');
	
// 	// load more data
// 	setTimeout(getPost, 1000)
// }

// async function getPost() {
// 	const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${getRandomNr()}`);
// 	const postData = await postResponse.json();
	
// 	const userResponse = await fetch('https://randomuser.me/api');
// 	const userData = await userResponse.json();
	
// 	const data = { post: postData, user: userData.results[0] };
	
// 	addDataToDOM(data);
// }

// function getRandomNr() {
// 	return Math.floor(Math.random() * 100) + 1;
// }

// function addDataToDOM(data) {
// 	const postElement = document.createElement('div');
// 	postElement.classList.add('blog-post');
// 	postElement.innerHTML = `
// 		<h2 class="title">${data.post.title}</h2>
// 		<p class="text">${data.post.body}</p>
// 		<div class="user-info">
// 			<img src="${data.user.picture.large}" alt="${data.user.name.first}" />
// 			<span>${data.user.name.first} ${data.user.name.last}</span>
// 		</div>
// 	`;
// 	container.appendChild(postElement);
	
// 	loading.classList.remove('show');
// }