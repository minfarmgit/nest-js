import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(
        private productsService: ProductsService
    ) {}

    @Get()
    getAll() {
        return this.productsService.getAll();
    }

    @Get(':id')
    getById(@Param('id') id: string): string {
        return this.productsService.getById(id);
    }

    @Post()
    @UsePipes(ValidationPipe)
    create(@Body() createProductDto: CreateProductDto) {
        return this.productsService.create(createProductDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return 'Remove: ' + id;
    }

    @Put(':id')
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string) {
        return 'Update: ' + id;
    }

}
