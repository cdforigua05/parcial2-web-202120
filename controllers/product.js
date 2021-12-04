const data = require('../assets/data');

function getProducts(query) {
  if (typeof query === 'undefined' || query===''){
    return data;  
  }
  const rta = data.filter(function(item){
    let item_name = item["name"].toLocaleLowerCase();
    let query_low = query.toLocaleLowerCase();
    return item_name.includes(query_low);
  });
  return rta;
}

module.exports = { getProducts };
