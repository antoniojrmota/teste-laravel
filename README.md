# DEUX

Requisitos mínimos:
- PHP: ^7.4
- MySQL: ^5.7
- Node: ^19.1

### Instalação Inicial

- Configurar dados do MySQL no .env
- Rodar os comandos no terminal:
  - composer install
  - npm install
  - php artisan key:generate
  - php artisan storage:link
  - criar schema do banco com base no arquivo deux.sql, que está localizado em ./temp (não será utilizado migration neste projeto)
- Executar projeto:
  - php artisan serve
  - npm run watch (webpack com assets)
  
### Estrutura
- Projeto dividido em CMS e SITE
- Este projeto utiliza o controle de idiomas por tabelas auxiliares
- Cada módulo que precisa de traduções possui sua tabela correspondente
  - Ex.: tabela categories possui o core de informações que são independente do idioma (ex.: order_by, created_at, etc)
  - Ex.: tabela category_descriptions possui tudo o que precisa ser traduzido em cada idioma (ex.: name, description, etc)

### CMS

Acesso padrão
Usuário: ezoom@ezoom.com.br
Senha: deux@ezoom

### Extras

- **Controle de Permissões [Spatie](https://spatie.be/docs/laravel-permission/v4)**
- **Estilos do CMS [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)**
- **Icones [Bx](https://boxicons.com/)**
- **Idiomas [Flat Flag](https://www.iconfinder.com/iconsets/195-flat-flag-psd-icons)**

## TAREFA

A ideia da tarefa é realizar alguns ajustes e melhorias no projeto, simulando um chamado de suporte. Por isso, os ajustes abaixo precisam ser realizados para que o chamado seja atendido:

- Não busca os dados de endereço ao colocar CEP no módulo de Representantes no CMS. Mapa com pin também não é mostrado.
- Gostaria de disponibilizar no site apenas os idiomas português, inglês e espanhol, sem francês. Tirar também no CMS.
- Inclusão de imagens não funciona nos módulos do CMS (ex: Banners e Empresas).
- Pesquisa do site não está funcionando.
- Localização do usuário na página de assistência técnica acusa erro. Mapa também não funciona.
- Gostaria de incluir um link fixo <https://google.com> no final da página de atendimento do site.
- Existe um espaço em branco muito grande antes da newsletter na página inicial.
- Newsletter também conta com um espaçamento muito grande com o rodapé.

### Extra

Além dos ajustes acima listados pelo hipotético cliente, melhorias na usabilidade e/ou ajustes visuais e funcionais de forma geral são bem-vindos para uma melhor experiência do usuário e qualidade na entrega da demanda.
