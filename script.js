


async function getMovies() {



    const url = 'https://imdb-top-100-movies.p.rapidapi.com/';

    const options = {

        method: 'GET',

        headers: {

            'X-RapidAPI-Key': 'eedf40bf42mshf6bede1b85e680ap1a2949jsn03f06b2faefc',

            'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'

        }

    };



    try {

        const response = await fetch(url, options);
        const result = await response.json();

        for (let i = 0; i < result.length; i++) {

            let card = document.createElement("div")

            card.id = "card"

            document.body.appendChild(card)

            let image = document.createElement("img")

            image.src = result[i].image

            card.appendChild(image)

            image.width = 200

            image.height = 200

            let title = document.createElement("h4")

            title.innerHTML = result[i].title

            card.appendChild(title)

            let rating = document.createElement("p")

            rating.innerHTML = "Rating: " + result[i].rating

            card.appendChild(rating)

            rating.style.color = "blue";

            let showDetails = document.createElement("button")

            showDetails.innerHTML = "Show Details"

            card.appendChild(showDetails);

            showDetails.id = "showdetails"



        }





    } catch (error) {

        console.error(error);

    }



}



getMovies()