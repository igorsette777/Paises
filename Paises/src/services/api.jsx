export const fetchPaises = async() => {

    // fetch('./paises.json').then(res=>res.json())
    const response = await fetch('./paises.json');
    const data = await response.json();
    return data;
  
  };
  

  