//
getMeetupData = function (inputs) { //get data

    let query = inputs.query;

    //console.log("getting data");

    if (query === "") {
        //updateMeetupSearchResults([]);

    } else if (query === "all" || query === "park" || query === "parks") {

        searchInputs[2].query = "";

        fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${query}&location.address=nashville&token=7P4J2J4LJXEBIE5UBPBB`, {
            "headers": {
                "Accept": "application/json"
            }
        })//get data based of off search, aka parksearch bar's text content
            .then(entrieslist => entrieslist.json()) // get and parse data
            .then(parsedentries => {

                //updateMeetupSearchResults(parsedentries);
                buildDomSection(parsedentries, inputs)
            });

    } else {

        fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${query}&location.address=nashville&token=7P4J2J4LJXEBIE5UBPBB`, {
            "headers": {
                "Accept": "application/json"
            }
        })//get data based of off search, aka parksearch bar's text content
            .then(entrieslist => entrieslist.json()) // get and parse data
            .then(parsedentries => {

                //updateMeetupSearchResults(parsedentries);
                buildDomSection(parsedentries, inputs)
            });

    }
}

function updateMeetupSearchResults(idata) { // works with the park api, so this is not universal. Uses the (letter)target(number) naming conventiion

    let meetuptargetinsert = document.querySelector("#meetupresults"); // the park results container
    //you can change this to the id of the container for park search results, please still keep it outputing to the park results section

    meetuptargetinsert.innerHTML = ``;
    //clear results in park section to make room for the loop inserting the new ones 

    meetuptargetinsert.innerHTML += `
    
    <p class="meetup_name">
    <span id = "mtarget0">No Meetup</span>
    
    </p>
    
        `
    if (typeof idata.events != "undefined") {
        for (let i = 1; i < idata.events.length; i++) { // loop through all results, creating html framework as we go
            meetuptargetinsert.innerHTML += `
        
        <p class="meetup_name">
        <span id = "mtarget${i}">${idata.events[i - 1].name.text}</span>
        <p>${idata.events[i - 1].summary}
        <a href="${idata.events[i - 1].url}">Web</a></p>
        </p>
        
        `; // this adds unique ids to "mtargets" so that they can be easily targeted using for loops
            //make sure you have your unique letter in fornt of "target"
            // and be sure to get the name of what you want to display into and put it into the span tag.

        }
    }

    recordListener(searchInputs[2]);
}
