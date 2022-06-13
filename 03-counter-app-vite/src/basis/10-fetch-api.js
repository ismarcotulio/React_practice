
const apiKey = 'f3WtAsrq8x999ob5nIKH6IIrMmd0VDvO';

const httpCall = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

httpCall
    .then( resp => resp.json() )
    .then( ({data}) => {
        const {url} = data.images.original;
        console.log(url)
        const img = document.createElement('img');
        img.src = url;

        document.body.append( img );
    })
    .catch( console.warn );