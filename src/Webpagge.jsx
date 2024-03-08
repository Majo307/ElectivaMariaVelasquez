import { useState } from "react";
import { GridGif } from "./components/GridGif";
import { Explore } from "./components/Explore";
import { Header } from "./components/Header";

function Webpagge ()  {
    const [valorInput, setvalorInput] = useState('');
    const [gifs, setGifs] = useState([]);
   


    const onChange = (evento) =>{
        const valor = evento.target.value;
        setvalorInput(valor);
    }

    const getGifs = async (query) => {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=V1G3WboBX2kWyrciTVH1yVixJCoqK58q&q=${query}` ;
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        return data.data;


    }

    

  async function onSubmit(evento) {
    evento.preventDefault();
    const gifs = await getGifs(valorInput);
    setGifs(gifs);
  }
  
  
    return (

      
    <div className="WebPPage">
      <Header/>
      

      <Explore
      valorInput={valorInput}
      onChange={onChange}
      onSubmit={onSubmit}
      />
    

        
       <GridGif 
        gifs={gifs}
        
        />
      </div>
    
  )
}
export default Webpagge


