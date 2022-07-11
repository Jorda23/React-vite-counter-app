export const getImagen = async() => {

    try {

        const apiKey = 'IlIaVrRBnYnw3PI6RE8FvGWsd4NkFn89';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;

    } catch (error) {
        // manejo del error
        console.error(error)
        return 'Image not found'
    }
    
    
}





