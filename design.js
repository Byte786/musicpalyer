console.log("welcome to music player")
// let audioElement =new Audio('1.mp3');

//  //audioElement.play();
// //NmMwYWE5MWYtZjcyZi00OWZiLTg4ZmItOTc3MTQzOWYxOTc2.

// // =ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm
// fetch('https://api.napster.com/v2.1/tracks/top?apikey=NmMwYWE5MWYtZjcyZi00OWZiLTg4ZmItOTc3MTQzOWYxOTc2')
//   .then((response) => response.json())
//  .then((data) => console.log(data));
//  console.log("Welcome to Spotify");

// Initialize the Variables
let api=`https://api.napster.com/v2.1/tracks/top?apikey=ZTk2YjY4MjMtMDAzYy00MTg4LWE2MjYtZDIzNjJmMmM0YTdm`

const trackList=document.getElementById("trackList")

async function topTrack(){
    try {
        let response= await fetch(api)
        response= await response.json()
        console.log(response);
        response.tracks.forEach(tracks => {
            console.log(tracks.previewURL);
            const trackbox=document.createElement('div')
            trackbox.innerHTML= `<> <img src="https://direct.rhapsody.com/imageserver/v2/albums/Alb.657662786/images/300x300.jpg ">
            <audio controls>
            <source src="${tracks.previewURL}" type="audio/mp3">
           
            </audio></div>;`

            trackList.appendChild(trackbox)

        });
    } catch (error) {
        console.log(error);
        
    }
    

}
topTrack()