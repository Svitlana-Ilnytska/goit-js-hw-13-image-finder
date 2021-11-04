const BASE_URL = 'https://pixabay.com'
// const key ='24180904-cdf25eb395cc9b94381638218'

export default function fetchImages(text, page) {
    return  fetch(`${BASE_URL}/api/?image_type=photo&orientation=horizontal&q=${text}&page=${page}&per_page=12&key=24180904-cdf25eb395cc9b94381638218`)
    .then(response => {
        if(responce.ok) return response.json();
        throw new Error('Error fetching data');
    })
    .catch (error => {
        console.log('Error: ', error);
    });
}
