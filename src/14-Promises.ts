import axios from 'axios';

(async () => {

  //here we are creating a promise that will return a boolean value, that is why we add <boolean>
  const delay = (time: number) => {
    const promise = new Promise<boolean>((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, time);
    });
    return promise;
  };

  //Here we are resolving a promise, without specifying the interface
  async function getProductsAsync() {
    const rta = await axios.get('https://api.escuelajs.co/api/v1/products');
    return rta.data;
  }

  const rta = await delay(5000);
  console.log(rta);
  const products = await getProductsAsync();
  console.log(products);
})();
