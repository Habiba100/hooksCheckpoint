import {useState,useEffect} from 'react';
import AddMovie from "./Components/AddMovie";
import "./App.css";
import MovieList from './MovieList';
import Filtring from './Filtring';

const info = [
  { title:'10 Things I Hate About You', img:'/image/10thingsihateaboutyou.jpg', description:"The film follows new student Cameron (Gordon-Levitt) who is smitten with Bianca (Oleynik) and, in order to get around her father's strict rules on dating, attempts to get bad boy Patrick (Ledger) to date Bianca's antisocial sister, Kat (Stiles). The film is named after a poem Kat writes about her romance with Patrick.", posterURL:"www.10thingsihateaboutyou.com", rating:9.4 },
  { title:'How To Lose A Guy In 10 Days', img:'/image/howtoloseaguyin10days.jpg', description:"A ladies man bet his friends that he can get a woman to fall in love with him in 10 days, but unbeknownst to him, the woman he's dating is actually a magazine columnist working on a new column and she's doing everything she could to drive the guy she's dating crazy.", posterURL:"www.howtoloseaguyin10days.com", rating:9.3 },
  { title:'The Notebook', img:'/image/thenotebook.jpg', description:"The Notebook is an achingly tender story about the enduring power of love, a story of miracles that will stay with you forever. Set amid the austere beauty of coastal North Carolina in 1946, The Notebook begins with the story of Noah Calhoun, a rural Southerner returned home from World War II.", posterURL:"www.thenotebook.com", rating:8.5 },
  { title:'A Walk To Remember', img:'/image/awalktoremember.jpg', description:"It tells the story of a romance between two 18-year-olds that is summarized when the boy tells the girl's doubtful father: 'Jamie has faith in me. She makes me want to be different. Better.' ", posterURL:"www.awalktoremember.com", rating:9.4 },
  { title:'Clueless', img:'/image/clueless.jpg', description:"Shallow, rich and socially successful Cher is at the top of her Beverly Hills high school's pecking scale. Seeing herself as a matchmaker, Cher first coaxes two teachers into dating each other.", posterURL:"www.clueless.com", rating:8.3 },
  { title:'Coraline', img:'/image/coraline.jpg', description:"While exploring her new home, a girl named Coraline (Dakota Fanning) discovers a secret door, behind which lies an alternate world that closely mirrors her own but, in many ways, is better.", posterURL:"www.coraline.com", rating:8.9 },
  { title:'Titanic', img:'/image/titanic.jpg', description:"A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic. Titanic.A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S.", posterURL:"www.titanic.com", rating:8.5 },
  { title:'The Fallout', img:'/image/thefallout.jpg', description:"High schooler Vada navigates the emotional fallout she experiences in the wake of a school tragedy. Relationships with her family, friends and view of the world are forever altered. High schooler Vada navigates the emotional fallout she experiences in the wake of a school tragedy.  ", posterURL:"www.thefallout.com", rating:8.2 },
  { title:'Scream', img:'/image/scream.jpg', description:"The plot takes place twenty-five years after the original Woodsboro murders from Scream (1996), when yet another Ghostface appears and begins targeting a group of teenagers who are each somehow linked to the original killings.", posterURL:"www.scream.com", rating:8.1 },
];

function App(){
  
  const [list,setList] = useState(info);
  const [filtredList, setFiltredList] = useState(list);
  const [rate,setRate] = useState(0);
  const [keyword, setKeyword] = useState("");

  function adding(movie){
    if( movie.title && movie.img && movie.description && movie.posterURL ) {
      setList([...list, movie]);
    }
  }


  function filter(key, rate){
    setKeyword(key);
    setRate(rate);
    console.log(rate+"  "+key);
    setFiltredList(list.filter( (element)=>{ return ( (element.title.toLowerCase().includes(key.toLowerCase())) && (element.rating >= rate) ) } ));
  }

  useEffect(()=>{ filter(keyword,rate); },[list]);


  return(
    <div className="App">
        <Filtring filter={filter}/>
        <MovieList list={filtredList} />
        <AddMovie adding={adding} />
    </div>
      );
}

export default App;