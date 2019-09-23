let concertTargetInsert = document.querySelector("#concertresults");

const concertAPI = {
  getConcertData(inputs) {
    let concertInput = document.querySelector('#concerts_input').value
    if (concertInput === '' || concertInput === 'concerts by genre') {
      concertTargetInsert.innerHTML = 'No search Requested'
    } else {
      return fetch(`https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&keyword=${concertInput}&dmaId=343&apikey=b2mgLaafqqPj3qedr8Zo6jklYkDTEYkb&classificationName=${inputs.query}`)
        .then(res => res.json())
        .then(parsedMain => {
          //updateConcertResults(parsedMain)
          //
          let concertEvent = parsedMain._embedded.events;
          buildDomSection(concertEvent, inputs)

        })
    }
  }
}

function updateConcertResults(concert) { // works with the park api, so this is not universal. Uses the (letter)target(number) naming conventiion

  let concertTargetInsert = document.querySelector("#concertresults"); // the park results container
  concertTargetInsert.innerHTML = '';
  //you can change this to the id of the container for park search results, please still keep it outputing to the park results section

  let concertEvent = concert._embedded.events;

  for (let i = 0; i < concertEvent.length; i++) {
    let concert = concertEvent[i];
    //console.log(concert);

    concertTargetInsert.innerHTML += `
        <div>
          <button class="ccheckbutton stylesasbutton" id="cbutton${i}"></button>
          <p id ="ctarget${i}">${concert.name}</p>
          <p>
            ${concert.dates.start.localDate}
            ${concert.dates.start.localTime}
            ${concert.url}
          </p>
        </div>`

  }
  addButtonListeners("c");
}

/*
       else if (concert === searchInputs[3].query.includes(concert.name)) {
          concertTargetInsert.innerHTML += `
            <div class="concertdiv">
               <button class="ccheckbutton stylesasbutton" id="cbutton${i}"></button>
               <p id ="ctarget${i}">${concert.name}</p>
               <p>
                 ${concert.dates.start.localDate}
                 ${concert.dates.start.localTime}
                 ${concert.url}
               </p>
            </div>`
       } else if (concert === searchInputs[3].query.includes(concert.dates.start.localDate)) {
          concertTargetInsert.innerHTML += `
            <div class="concertdiv">
              <button class="ccheckbutton stylesasbutton" id="cbutton${i}"></button>
              <p id ="ctarget${i}">${concert.name}</p>
              <p>
               ${concert.dates.start.localDate}
               ${concert.dates.start.localTime}
               ${concert.url}
             </p>
            </div>`
       } else {
        concertTargetInsert.innerHTML += `
      <div class="concertdiv">
      <button class="ccheckbutton stylesasbutton" id="cbutton${i}"></button>
      <p id ="ctarget${i}">${concert.name}</p>
        <p>
          ${concert.dates.start.localDate}
          ${concert.dates.start.localTime}
          ${concert.url}
        </p>
       </div>`

       }


     /*
      if (searchInputs[3].query === str.includes(concert.name)) {
                   return true
        } else if (searchInputs[3].query === str.includes(concert.dates.start.localDate) {

        } else if (searchInputs[3].query === str.includes(concert.dates.start.localTime) {

        } else if (searchInputs[3].query === str.includes(concert.url) {

        } else if () {
          return 'Does not match search results';
        }
      }
    */














































/*

  // Function to update results
  function updateConcertResults(concerts) {
    for (let i = 0; i < concerts.length; i++) {
      const concert = concerts[i];
      concertTargetInsert.innerHTML += `
      <div>
        <h1>${concerts._embedded.events[i].name}</h1>
        <section>${concerts._embedded.events[i].dates.start.localDate}</section>
        <section>${concerts._embedded.events[0].dates.start.localTime}</section>
        <section>${concerts._embedded.events[0]._embedded.venues[0].name}</section>
        <section>${concerts._embedded.events.url}</section>
      </div> `
    }
  }





  /*
    concertTargetInsert.innerHTML = ``;  //clear results in concert section to make room for the loop inserting the new ones

    let concertList = []
    concertList[0] = {concert_name:"No concert"} // added "no option" to the start of my list

    for (let i = 0; i < concerts.length; i++) {
      if (concerts[i]._embedded.events.includes(searchInputs[0].query)) {
            concertList.push([i]);
        }

    }
    console.log(concerts._embedded.events[0].name)
    console.log(concerts._embedded.events[0].url)
    console.log(concerts._embedded.events[0]._embedded.venues[0].name)
    console.log(concerts._embedded.events[0].dates.start.localDate)
    console.log(concerts._embedded.events[0].dates.start.localTime)
    console.log(concerts)

  }

  const createConcertComponent = (concerts) =>
  return `
  <div>
      <h1>${concerts._embedded.events[0].name}</h1>
      <section>${}</section>
      <section>${}</section>
      <section>${}</section>
      <section>${concerts._embedded.events[0].url}</section>
  </div> `


for (let i = 0; i < concertList.length; i++) {
  const concert = concertList[i]
  concertTargetInsert.innerHTML += createConcertComponent(concert)
}


    concertTargetInsert.innerHTML = ``;  //clear results in concert section to make room for the loop inserting the new ones

    let concertList = []
    concertList[0] = {concert_name:"No concert"} // added "no option" to the start of my list

    for (let i = 0; i < concerts.length; i++) {
      if (concerts[i]._embedded.eventsincludes(searchInputs[0].query)) {
            concertList.push([i]);
        }

    }

    for (let i = 0; i < concertsList.length; i++) { // loop through all results, creating html framework as we go
      concertTargetInsert.innerHTML += `
      <div class="inline">
      <button class="styleasbutton" id = "pbutton${i}"></button>
      <p id = "ptarget${i}">${workinglist[i].park_name}</p>
      </div>


    }
 }
*/