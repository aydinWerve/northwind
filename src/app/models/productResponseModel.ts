import { Product } from "./product";
import { ReponseModel } from "./responseModel";

export interface ProductResponseModel extends ReponseModel{
    data:Product[]
}