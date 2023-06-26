# Weather API - Feito em Ionic Framework

Desafio de app de clima disponibilizado pela GFT para teste de FrontEnd.

## Estória
0. Abre a tela de login.
1. Logar no app utilizando as credenciais fornecidas aqui.
2. Carregar 4 cidades por padrão ao inicializar a página.
3. Adicionar uma nova cidade ao clicar no botão `Adicionar`.
4. Abre o modal com o formulário a ser adicionada a nova cidade.
5. Caso a cidade já exista, mostrará uma mensagem na página e o usuário não poderá adicionar.
6. Caso a cidade não exista na lista, a mensagem será removida e a cidade será inserida.
7. Caso a cidade não exista na api, retornará um erro tratado, onde a mensagem será `Cidade inválida`.
8. Será possível deletar as cidades da lista uma por vez.
9. Quando não restar nenhuma cidade, aparece uma mensagem `Nenhuma cidade disponível` + botão de refresh da página.
10. Botão de sair, redireciona para o login.

## Api Key

Para rodar a API você precisará de uma key.
Acesse [WeatherApi](https://www.weatherapi.com/) para obter.

No projeto, basta acessar: `src/app/services/enum.ts` e colar a sua.

Credenciais mock

```bash
  email = 'user@user.com',
  password = 'user1234'
```


## Rodar localmente

Clone o projeto

```bash
  git clone https://link-to-project
```

Vá para pasta do projeto

```bash
  cd my-project
```

Instale as dependências

```bash
  npm install
```

Inicie o servidor

```bash
  ng serve
```

