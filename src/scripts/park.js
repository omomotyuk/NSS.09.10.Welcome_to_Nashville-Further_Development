getParkData = function (inputs) { //get data

    let query = inputs.query;

    if (query === "") {
        //updateParkSearchResults([]);
        //buildDomSection( [], inputs )


    } else if (query === "all" || query === "park" || query === "parks") {

        searchInputs[0].query = "";

        fetch(`https://data.nashville.gov/resource/74d7-b74t.json`) //get data based of off search, aka parksearch bar's text content
            .then(entrieslist => entrieslist.json()) // get and parse data
            .then(parsedentries => {

                //updateParkSearchResults(parsedentries); // send data off
                buildDomSection(parsedentries, inputs)

            });

    } else {

        fetch(`https://data.nashville.gov/resource/74d7-b74t.json`) //get data based of off search, aka parksearch bar's text content
            .then(entrieslist => entrieslist.json()) // get and parse data
            .then(parsedentries => {

                //updateParkSearchResults(parsedentries); // send data off
                buildDomSection(parsedentries, inputs)

            });

    }

}




function updateParkSearchResults(idata) { // works with the park api, so this is not universal. Uses the (letter)target(number) naming conventiion

    let parktargetinsert = document.querySelector("#parkresults"); // the park results container
    //you can change this to the id of the container for park search results, please still keep it outputing to the park results section

    console.log(idata);

    parktargetinsert.innerHTML = ``;
    //clear results in park section to make room for the loop inserting the new ones

    let workinglist = [];

    workinglist[0] = { park_name: "No park" } // i recomend you add a "no option" to the start of your list

    for (let i = 0; i < idata.length; i++) {

        if (idata[i].notes.includes(searchInputs[0].query)) {
            workinglist.push(idata[i]);
        }

    }


    //class="pinline" for div


    for (let i = 0; i < workinglist.length; i++) { // loop through all results, creating html framework as we go
        parktargetinsert.innerHTML += `

        <p class="park_name">
        <span id = "ptarget${i}">${workinglist[i].park_name}</span>
        </p>




        `; // this adds unique ids to "ptargets" so that they can be easily targeted using for loops
        //make sure you have your unique letter in fornt of "target"
        // and be sure to get the name of what you want to display into and put it into the span tag.

    }

    recordListener(searchInputs[0]);


}