export const getdata = ({page,select}) => {
    return fetch(`http://localhost:8080/Products?_page=${page}&_limit=8&_sort=price&_order=${select}`)
    .then((res) => res.json());
  };


  export const getiphonedata = () => {
    return fetch(`http://localhost:8080/Products?category=Mobile`)
    .then((res) => res.json());
  };

  export const getipaddata = () => {
    return fetch(`http://localhost:8080/Products?category=tab`)
    .then((res) => res.json());
  };
  
  export const getmacbookdata = () => {
    return fetch(`http://localhost:8080/Products?category=Laptop`)
    .then((res) => res.json());
  };