# DEUX

Requisitos mínimos:

PHP: ^7.4
MySQL: ^5.7

## Instalação Inicial

- Configurar dados do MySQL no .env
- Rodar os comandos no terminal:
  - composer install
  - npm install
  - php artisan key:generate
  - php artisan storage:link
  - criar schema do banco com base no arquivo deux.sql, que está localizado em ./temp (não será utilizado migration neste projeto)

## Detalhes

Projeto dividido em CMS e SITE

## Idiomas

- Este projeto utiliza o controle de idiomas por tabelas auxiliares
- Cada módulo que precisa de traduções possui sua tabela correspondente
  - Ex.: tabela categories possui o core de informações que são independente do idioma (ex.: order_by, created_at, etc)
  - Ex.: tabela category_descriptions possui tudo o que precisa ser traduzido em cada idioma (ex.: name, description, etc)

## CMS

Acesso padrão
Usuário: ezoom@ezoom.com.br
Senha: deux@ezoom

## Extras

- **Controle de Permissões [Spatie](https://spatie.be/docs/laravel-permission/v4)**
- **Estilos do CMS [Bootstrap 5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)**
- **Icones [Bx](https://boxicons.com/)**
- **Idiomas [Flat Flag](https://www.iconfinder.com/iconsets/195-flat-flag-psd-icons)**
