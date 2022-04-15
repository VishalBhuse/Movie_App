function findMovies()
{
    let input = document.querySelector("#movievalue").value;
    console.log('input:', input)


    fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=8fb3c2c0&t=${input}`)
    // console.log('url:', url)
    .then(function (res) {
        return res.json();
    })
    .then(function (res) {
        console.log('res:', res);
        // console.log(res.Search)
        appendata(res)
    })
    .catch(function (err) {
        console.log('err:', err);
    })

    

}

let inner11 = document.querySelector("#append");
    inner11.style.display="none";
function appendata(data)
{
    
    let inner1 = document.querySelector("#imgs");
    let inner2 = document.querySelector("#info");
    inner1.innerHTML=null;
    inner2.innerHTML=null;
    let inner11 = document.querySelector("#append");
    inner11.style.display="flex";

    if(data.Title==undefined){
        inner11.innerHTML = `<img src="   https://i.makeagif.com/media/11-04-2015/mfnzwt.gif" alt="" style="width: 80%;height: 450px;">`;
        
        setInterval(function (){
            window.location.reload();                
        },5000)
    }
    else{
        let div =  document.createElement('img');
    div.src = data.Poster;
    document.querySelector("#imgs").append(div);

    // let di2 = document.createElement

    let p1 =document.createElement("p"); 
    p1.innerText =  data.Title;
    let p2 =document.createElement("p");
    p2.innerText = "Actors: "+data.Actors; 
    let p21 =document.createElement("p");
    p21.innerText = "Genere: "+data.Genre;
    p21.setAttribute('class','gener') 
    let p3 =document.createElement("p"); 
    p3.innerText = "Director: " +data.Director;
    let p31 =document.createElement("p"); 
    p31.innerText = "Writer: " +data.Writer;

    let p4 =document.createElement("p"); 
    p4.innerText ="Duration: "+ data.Runtime;
    let p5 =document.createElement("p"); 
    p5.innerText = "Release Date: " +data.Released
    let p6 =document.createElement("p"); 
    if(data.imdbRating > 8.5){
        p6.innerHTML = "IMDB Rating: "+data.imdbRating + ` <span class="recom">Recommended</span>`;
    }
    else{
        p6.innerText = "IMDB Rating: "+data.imdbRating ;
    }
    let p7 =document.createElement("p"); 
    p7.innerText = "Plot: " + data.Plot;

    let p8 =document.createElement("p"); 
    p8.innerText = "Language: " + data.Language;

    document.querySelector("#info").append(p1,p6,p2,p21,p8,p3,p31,p4,p5,p7)


    }

       }