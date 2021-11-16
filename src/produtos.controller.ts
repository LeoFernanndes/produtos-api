import {Body, Controller, Delete, Get, Param, Post, Put} from "@nestjs/common";
import { Produto } from "./produto.model";
import {ProdutosService} from "./produtos.service";

@Controller('produtos')
export class ProdutosController {
    constructor(private produtoService: ProdutosService) {
    }

    @Get()
    async obterTodos(): Promise<Produto[]> {
        return this.produtoService.obterTodos();
    }

    @Get(':id')
    async obterUm(@Param() params): Promise<Produto> {
        return this.produtoService.obterUm(params.id)
    }

    @Post()
    async criar(@Body() produto: Produto): Promise<Produto> {
        return this.produtoService.criar(produto)
    }

    @Put(':id')
    async alterar(@Body() produto: Produto, @Param() params): Promise<Produto> {
        return this.produtoService.alterar(params.id, produto)
    }

    @Delete(':id')
    async deletar(@Param() params) {
        return this.produtoService.deletar(params.id)
    }


}