import React from 'react';
import CardPaises from '../components/CardPaises.jsx';

function Favoritos({ favoritos, ativaFavorito }) {
  return (
    <div>
      {favoritos.map((paises) => (
        <CardPaises
          key={paises.numericCode}
          paises={paises}
          ativaFavorito={ativaFavorito}
          isFavorite={true}
        />
      ))}
    </div>
  );
}

export default Favoritos;
