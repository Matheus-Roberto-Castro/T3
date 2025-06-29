export type ConsumoProduto = {
  produtoId: number;
  quantidade: number;
};

export type ConsumoServico = {
  servicoId: number;
  quantidade: number;
};

export type Cliente = {
  id: number;
  nome: string;
  genero: string;
  cpf: string;
  telefone: string;
  email: string;
  consumoProdutos: ConsumoProduto[];
  consumoServicos: ConsumoServico[];
};

export type Produto = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  genero: "Masculino" | "Feminino" | "Unissex";
  imagem?: string;
};

export type Servico = {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  genero: "Masculino" | "Feminino" | "Unissex";
};