import { Exclude } from "class-transformer";

export interface Product {
    title: string;
    price: number;
}

export class ProductSerializer {
    title: string;
    price: number;

    @Exclude()
    id: string;
}