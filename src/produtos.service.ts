import {Produto} from "./produto.model";
import {Injectable} from "@nestjs/common";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class ProdutosService {
    constructor(
        @InjectModel(Produto)
        private produtoModel: typeof Produto
    ) {};

    async obterTodos():  Promise<Produto[]>{
        return this.produtoModel.findAll();
    }

    async obterUm(id: number): Promise<Produto> {
        return this.produtoModel.findByPk(id)
    }

    async criar(produto: Produto): Promise<Produto>{
        return this.produtoModel.create(produto)
    }

    async alterar(id: number, produto: Produto): Promise<Produto> {
        await this.produtoModel.update(produto, {
            where: {
                id: id
            }
        })
        return this.obterUm(id)
    }

    async deletar(id: number) {
        const produto: Produto = await this.obterUm(id)
        produto.destroy()
    }

}