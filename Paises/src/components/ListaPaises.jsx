import React from 'react';
import CardPaises from './CardPaises';

function ListaPaises({ paises, ativaFavorito })  // criou o componente com os 2 parametros que foi colocado no paises.jxs 

{
  return (
    <div>
      {paises.map((paises) =>  // fazer a copiar dos itens do vetor 

      (
        <CardPaises  // ele que vai ser responsavel por criar todas as visuais visual da pagina  

          key={paises.numericCode}  // id
    
          paises={paises}  // copia do vetor que foi lancado pra ela 

          ativaFavorito={ativaFavorito}  // chamou a funçao

          isFavorite={false}  //mostrar qual ta em favoritos quando for colocada la 

         
        />
      ))}
    </div>
  );
}

export default ListaPaises;

/*const CountryList = ({ countries, onToggleFavorite }) => {
  return (
    <div>
      {countries.map((country) => (
        <CountryCard
          key={country.cca3}
          country={country}
          onToggleFavorite={onToggleFavorite}
          isFavorite={false}
        />
      ))}
    </div>
  );
};*/

//export default CountryList;
