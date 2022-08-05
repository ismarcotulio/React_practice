
export const getImage = async() => {
    try {
        const apiKey = 'f3WtAsrq8x999ob5nIKH6IIrMmd0VDvO';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

        const { data } = await resp.json();
        const { url } = data.images.original;
        return url;
    } catch (error) {
        console.error(error);
        return 'No se encontro la imagen';
    }
}



