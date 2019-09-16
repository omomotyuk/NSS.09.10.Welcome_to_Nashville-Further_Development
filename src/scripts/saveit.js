
document.querySelector('#save-button').addEventListener( "click", event => {

    let data =  {
        
        id : 1,
        park : document.querySelector("#pittinerary").innerHTML,
        restaurant : document.querySelector("#rittinerary").innerHTML,
        meetup : document.querySelector("#mittinerary").innerHTML,
        concert : document.querySelector("#cittinerary").innerHTML,
    
    
                

            };

            console.log("Posting:");
            console.log(data);

    

           fetch('http://localhost:3000/itinerary', {
                  method: 'POST',
                  headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(data)
                });
                
            


}); 









