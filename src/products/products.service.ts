import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductSerializer } from './types/products';

@Injectable()
export class ProductsService {

    private products = [];

    getAll() {
        return this.products.map(product => plainToClass(ProductSerializer, product));
    }

    getById(id: string) {
        return this.products.find(p => p.id === id);
    }

    create(productDto: CreateProductDto) {
        return plainToClass(ProductSerializer, this.products[this.products.push({
            ...productDto,
            id: Date.now().toString(),
        }) - 1]);
    }

}
