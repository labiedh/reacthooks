import React ,{useState} from 'react';
import MovieCard from './MovieCard';
import Filter from './Filter';
import AddMovie from'./AddMovie';
// import uuid from "uuid";

function MovieList() {
        const [films, setFilms] = useState([
            {id:1,title:'Fight Club',description:'Film de David Fincher avec Edward Norton, Brad Pitt, Helena Bonham Carter Insomniaque, désillusionné par sa vie personnelle et professionnelle, un jeune cadre expert en assurances, mène une vie monotone et sans saveur. Face à la...',posterUrl:'https://media.senscritique.com/media/000012359351/150/Fight_Club.jpg',rate:8},
            {id:2,title:'Pulp Fiction',description:'Film de Quentin Tarantino avec John Travolta, Samuel L. Jackson, Ving Rhames L odyssée sanglante, burlesque et cocasse de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s entremêlent.',posterUrl:'https://media.senscritique.com/media/000012288077/150/Pulp_Fiction.jpg',rate:5},
            {id:3,title:'Interstellar',description:"Film de Christopher Nolan avec Matthew McConaughey, Anne Hathaway, Jessica Chastain Un groupe d'explorateurs exploite une faille dans l'espace-temps afin de parcourir des distances incroyables dans le but de sauver l'humanité.",posterUrl:'https://media.senscritique.com/media/000018762465/150/Interstellar.jpg',rate:2},
            {id:4,title:'300',description:"L'évocation de la bataille des Thermopyles, qui vit le roi grec Léonidas et ses 300 spartiates affronter des milliers de soldats perses...",posterUrl:'https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/36/26/41/18737112.jpg',rate:5},
            {id:5,title:'Pulp Fiction',description:'Film de Quentin Tarantino avec John Travolta, Samuel L. Jackson, Ving Rhames L odyssée sanglante, burlesque et cocasse de petits malfrats dans la jungle de Hollywood à travers trois histoires qui s entremêlent.',posterUrl:'https://media.senscritique.com/media/000012288077/150/Pulp_Fiction.jpg',rate:5},
            {id:6,title:'Interstellar',description:"Film de Christopher Nolan avec Matthew McConaughey, Anne Hathaway, Jessica Chastain Un groupe d'explorateurs exploite une faille dans l'espace-temps afin de parcourir des distances incroyables dans le but de sauver l'humanité.",posterUrl:'https://media.senscritique.com/media/000018762465/150/Interstellar.jpg',rate:2}
       
        ]);
     
        const [filtredFilms ,setFiltredFilms] = useState(films);
        const addNewFilm=(newFilm,nId)=>{
            if(newFilm!==''){
            
                setFilms([...films,{
                    id:films.length+1,
                    title:newFilm.title,
                    description :newFilm.description,
                    posterUrl :newFilm.posterUrl,
                    rate: newFilm.rate

                }])
            }
        }
        const filterFilm=(item)=>{
          
            if(item.title!==""){
                let filmFilter = films.filter((val)=>{
                    return val.title.toLowerCase().includes(item.title.toLowerCase());
                }) 
                setFiltredFilms(filmFilter)
            }else if(item.rate!=='0'){
                console.log("object")

                let filmFilter = films.filter((val)=>{
                    return val.rate === item.rate;
                }) 
                setFiltredFilms(filmFilter)
            }else{
                setFiltredFilms(films)
            }
            
        }
       
                   
                             
   
    return (
        <div className="ml-5 mr-5">
            <div className="row justify-content-start">
                <div className="col-3">
                  <div className="row justify-content-start">
                  <Filter filterFilm={filterFilm}/>
                  <AddMovie  addNewFilm ={addNewFilm}/>
                  </div>
                 </div>
                <div className="col-9">
                    <div className="row">
                      {
                          filtredFilms.map((val,index)=> <MovieCard item={val} key={index}/>)
                      }
                        
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default MovieList
