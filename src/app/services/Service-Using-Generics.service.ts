import axios from 'axios';

import { Category } from '../models/category.model';
import { Product } from '../models/product.model';
import { UpdateProductDto } from '../dtos/product.dto';

//We  can  create a class  that will receive a generic type so the type is used inside a method of the class
//In this case it is used to not create two instances with the same funcitonality
export class BaseHttpService<T> {
  constructor(protected url: string) {}

  async getAll() {
    const { data } = await axios.get<T[]>(this.url);
    return data;
  }
  async update<ID, DTO>(id: ID, changes: DTO) {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }
}

(async () => {
  const productsUrl = 'https://api.escuelajs.co/api/v1/products';
  const productService = new BaseHttpService<Product>(productsUrl);

  productService.update<Product['id'], UpdateProductDto>(1, {
    title: 'asa',
  });

  const rta = await productService.getAll();
  console.log('products:', rta.length);

  const categoriesUrl = 'https://api.escuelajs.co/api/v1/categories';
  const categoryService = new BaseHttpService<Category>(categoriesUrl);

  const rta1 = await categoryService.getAll();
  console.log('categories:', rta1.length);
})();
