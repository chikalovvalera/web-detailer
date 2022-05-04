import { Image } from "./Images";

export class PorfolioItemResponse {
    name: string;
    images: Image[];

    constructor () {
        this.name ='';
        this.images = [];
    }
}