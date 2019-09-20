
/*
The system i made works if you follow the directions listed

The code in my file is personalized, but you need your own version to work.
Replace
*/

// feed this fucntion the first letter of your catagory your working on
function addButtonListeners(uniqueletter) { // add button functionality modularly, can be used for all catagories

    let buttonlist = document.querySelectorAll(`.${uniqueletter}checkbutton`);
    // you can change this id to fit if you rename the button identifier
    // this gets all of your buttons you made in your personal function, hence the requirement of the unique letter in so many instances

    for (let i = 0; i < buttonlist.length; i++) { // loop through all gathered buttons to, when clicked, add their respective text to the ittinerary

        buttonlist[i].addEventListener("click", pbuttonfunction => { // add event listener
            updateIttinerary(uniqueletter, document.querySelector(`#${uniqueletter}target${i}`).innerHTML);
            // call another function so we don't have 1000 search results with 20 lines of code imbeded each
            // currenting naming convention for buttons ids = (first letter of your catagory)target(number made in for loop)
            // example: ftarget3    is a text target of the [food] catagory that is [3]rd in line.
        });
    }
}

//
function putIttineraryInJSON(ittineraryList) {

    let dictstring = JSON.stringify(ittineraryList);
    let fs = require('fs');
    fs.writeFile("thing.json", dictstring);
}

//
function itineraryItem(id, park, restaurant, meetup, concert) {

    this.id = id,
        this.park = park,
        this.restaurant = restaurant,
        this.meetup = meetup,
        this.concert = consert
}

//
function updateIttinerary(catagory, newtext) { // To update the itinerary, can be used for all catagories 
    //make sure you give the final output feilds an id of "(your unqique letter here)ittinerary" 
    document.querySelector(`#${catagory}ittinerary`).innerHTML = newtext; //selects the id of whatever catagory is, and puts whatever newtext is inside of that.

    let itineraryList = [];

    itineraryList[0] = new itineraryItem(1, "Centennial Park", "Prince’s Hot Chicken", "Meeple Mountain Board Game Night", "John Mellencamp at the Ryman");

    putIttineraryInJSON(itineraryList);
}
