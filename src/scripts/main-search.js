/*
//
*/


function searchItem(input, initial, query, chosen, section_class, panel_class, name_class, result_class, letter, title, action) {
    this.input = input;
    this.initial = initial;
    this.query = query;
    this.chosen = chosen;
    /*
    function buildDomSection( restaurantSearshResult,inputs ) {
        let restaurantsSection = document.querySelector('.restaurant_data');
        restaurantsSection.innerHTML = '';
        createDomPanel( restaurantsSection, 'restaurant_panel', 'Restaurant', 'SHOW' );
        panelListener( restaurantSearshResult, restaurantsSection, 'restaurant_panel', 'Restaurant', inputs );
    */
    this.section_class = section_class;
    this.panel_class = panel_class;
    this.name_class = name_class;
    this.result_class = result_class;
    this.letter = letter;
    this.title = title;
    this.action = action;

}

let searchInputs = [];

searchInputs[0] = new searchItem("parks_input", "parks by feature", "", -1, "park_data", "park_panel", "park_name", "parkresults", 'p', "Park", "SHOW")
searchInputs[1] = new searchItem("restaurants_input", "restaurants by food type", "", -1, "restaurant_data", "restaurant_panel", "restaurant_name", "restaurantresults", 'r', "Restaurant", "SHOW")
searchInputs[2] = new searchItem("meetups_input", "meetups by topic", "", -1, "meetup_data", "meetup_panel", "meetup_name", "meetupresults", 'm', "Meetup", "SHOW")
searchInputs[3] = new searchItem("concerts_input", "concerts by genre", "", -1, "concert_data", "concert_panel", "concert_name", "consertresults", 'c', "Concert", "SHOW")

document.querySelector('#search-button').addEventListener("click", event => {
    for (let i = 0; i < searchInputs.length; i++) { // loop through all inputs and put their values in the respective searchinput
        let inputValue = document.querySelector(`#${searchInputs[i].input}`).value;
        if (searchInputs[i].initial != inputValue) {
            searchInputs[i].query = inputValue;
        }
    }
    //add the start of your fucntion chain here!
    //getParkData(searchInputs[0].query); // im passing the value rathing than referencing it directly
    getParkData(searchInputs[0]); // im passing the value rathing than referencing it directly

    getMeetupData(searchInputs[2]);

    if (searchInputs[1].query != '') {
        const cuisineNumber = getCuisineNumber(searchInputs[1].query)
            .then(cuisineNumber => {
                let restaurantList = [];
                if (cuisineNumber != -1) {
                    //console.log( "input cuisine number: ", cuisineNumber );
                    restaurantList = getRestaurantData(cuisineNumber);
                } else {
                    //console.log( searchInputs[1].query, " cuisine is not presented in Nashville restaurants." );
                }
                return restaurantList;
            })
            .then(restaurantList => {
                //console.log( "restaurantList: ", restaurantList );
                if (restaurantList.length) {
                    buildDomSection(restaurantList, searchInputs[1]);
                }
            })
    }

    concertAPI.getConcertData(searchInputs[3])




})

//console.log( searchInputs );
