/*
//
*/

//
const APIc = {
    zomatoCuisineNumber( cuisineUrl, query ) {
        return fetch( cuisineUrl )
        .then( response => response.json() )
        .then( list => {
            let cuisineNumber = -1;
            for( let i = 0; i < list.cuisines.length; i++ ) {
                if( query.toLowerCase() === list.cuisines[i].cuisine.cuisine_name.toLowerCase() ) {
                    cuisineNumber = list.cuisines[i].cuisine.cuisine_id;
                }
            }
            return cuisineNumber;
        })
    }        
}

//
function getCuisineNumber( query ) {

    const zomatoApiKey = "fab738084a47c48fd99c4c3f0e29b9c8";
    const cuisineUrl = `https://developers.zomato.com/api/v2.1/cuisines?city_id=1138&apikey=${zomatoApiKey}`
  
    return APIc.zomatoCuisineNumber( cuisineUrl, query );
}