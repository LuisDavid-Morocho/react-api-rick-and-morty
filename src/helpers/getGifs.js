


export const getGifs = async( category ) => {
    
    //const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=cuscvsudLCIErxEqPq2YEwivC83EqcE8`;
    const url = `https://rickandmortyapi.com/api/character/?name=${ category }`;
 
    const resp = await fetch( url );
    const info = await resp.json();
    const data = info.results;

    //console.log(data);

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.name,
            url: img.image
        }
    })
    //console.log(gifs)
    return gifs;


}