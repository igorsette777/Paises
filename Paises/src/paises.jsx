import React, {useState} from 'react'; // funçao para atualizar
import {fetchPaises} from './services/api'; // funçao para receber futuramente os dados da api 
import ListaPaises from './components/ListaPaises';
import Favoritos from './components/Favoritos';
import './paises.css'


const paises = () => {

  const [paises, setPaises] = useState([]);   // paises(varivael), setPaises(funcao)] = useState([])(atualizar ) // ver com todos os dados da api devido o setPaises(dadosPaises)
  const [favoritos, setFavoritos] = useState([]); 

 const carregaPaises = async () => {
    try {
      const dadosPaises = await fetchPaises(); // dados paises recebeu od dados da api

      setPaises(dadosPaises); // chamou a variavel e colocou os dados d api (importcao)

    } catch (error) {
      console.error("Erro de acesso api: ", error);
    }
  };

  const alternarFavorito = (paises) => {
    if (favoritos.find(fav => fav.numericCode === paises.numericCode))  // find vai encotrar 1 item e verificar se ele existe no fav , vai ver se tem o id e igual algum item lista normal 
    {
      // Remove from favorites and add back to countries
      setFavoritos(prevFavoritos => prevFavoritos.filter(fav => fav.numericCode !== paises.numericCode));
      setPaises(prevPaises => [...prevPaises, paises].sort((a, b) => a.name.localeCompare(b.name)));  
    } else {
      // Remove from countries and add to favorites
      setPaises(prevPaises => prevPaises.filter(c => c.numericCode !== paises.numericCode));
      setFavoritos(prevFavoritos => [...prevFavoritos, paises].sort((a, b) => a.name.localeCompare(b.name)));
    }
  };

  const TotalPopulacao = (list) => // funçao para autosoma do vetor 
  {
    return list.reduce((total, paises) => total + paises.population, 0);
  };
 
  return (
    <div className="app-container">
      <h1>LISTA DE PAISES</h1>
      <button onClick={carregaPaises}>Carregar Países</button>
      <div className="lists-container">
        <div className="list">
          <h2>Todos Paises</h2>
          <p>Total Paises: {paises.length}</p>  
          <p>Total population: {TotalPopulacao(paises)}</p>

          <ListaPaises paises={paises} ativaFavorito={alternarFavorito} />  {/*variavel importada la em cima e tambem esta na pasta de componentes */}

        </div>
        <div className="list">
          <h2>Favorites</h2>
          <p>Total Paises: {favoritos.length}</p>
          <p>Total population: {TotalPopulacao(favoritos)}</p>
          
          <Favoritos favoritos={favoritos} ativaFavorito={alternarFavorito} />
        </div>
      </div>
    </div>
  );
};

export default paises;
