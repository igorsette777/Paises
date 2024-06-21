import React from 'react';
//import imag from '../assets/react.svg'

function CardPaises({ paises, ativaFavorito, isFavorito })  // recebeu os componentes que estao no listapaises.jsx
 {
  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <img src={paises.flag} alt={`Bandeira do(a) ${paises.name}`} width="100" /> {/*vai receber a img/nome pelo src */}
      <h3>{paises.name}</h3>
      <p>Population: {paises.population.toLocaleString()}</p>
      <button onClick={() => ativaFavorito(paises)}>
        {isFavorito ? 'Desfavoritar' : 'Favoritar'}
      </button>
    </div>
  );
}

export default CardPaises;
