import { Category } from "./category";
import { ReponseModel } from "./responseModel";

export interface CategoryResponseModel extends ReponseModel{
    data:Category[]
}