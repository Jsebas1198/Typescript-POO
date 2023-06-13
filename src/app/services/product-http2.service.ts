import { Product } from "../models/product.model";
import { BaseHttpService } from "./Service-Using-Generics.service";


export class ProductHttpService extends BaseHttpService<Product> {
  newRequest() {
    this.url;
    //code
    //code
  }
}
