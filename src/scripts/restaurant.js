/*
//
*/

//
function restaurantInfo(name, address, url) {
    this.name = name;
    this.address = address;
    this.url = url;
}

//
const APIr = {
    zomatoRestaurantData(url) {
        return fetch(url)
            .then(response => response.json())
            .then(data => {
                let restaurantSearshResult = [];
                for (let i = 0; i < data.restaurants.length; i++) {
                    restaurantSearshResult[i] = new restaurantInfo(data.restaurants[i].restaurant.name, data.restaurants[i].restaurant.location.address, data.restaurants[i].restaurant.url);
                }
                return restaurantSearshResult;
            })
    }
}

//
function getRestaurantData(cuisineNumber) {

    const zomatoApiKey = "fab738084a47c48fd99c4c3f0e29b9c8";
    //const queryUrl = `https://developers.zomato.com/api/v2.1/search?city_id=1138&cuisine=${cuisineNumber}&apikey=${zomatoApiKey}`;
    const queryUrl = `https://developers.zomato.com/api/v2.1/search?entity_id=1138&entity_type=city&cuisines=${cuisineNumber}&apikey=${zomatoApiKey}`

    return APIr.zomatoRestaurantData(queryUrl);
}