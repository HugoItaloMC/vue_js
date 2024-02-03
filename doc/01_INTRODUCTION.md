> # _**Iniciando uma aplicacão VUE**_
#### _Após instalado o nodejs e o npm conforme seu respectivo sistema operacional, abra o terminal e execute o seguinte comando:_

    npm install -g @vue/cli

- Agora inicie seu projeto:
     
      vue create name_app_vue

#### _A estrutura gerada após executar o comando `vue create nome_app_vue` é uma estrutura de diretórios padrão para um projeto ***Vue.js*** criado com o Vue CLI. Vamos dar uma olhada mais detalhada em cada um:_
<br>

>>>> * * *
## ****Pastas****
- ***`node_modules`***: Esta pasta contém todas as dependências do projeto, os pacotes npm necessários para o desenvolvimento e execução da aplicação Vue. Normalmente, você não precisa mexer diretamente nesta pasta, pois o npm (ou yarn) gerencia suas dependências automaticamente.
<br>

- ***`public`***: Esta pasta contém arquivos estáticos que serão servidos diretamente pelo servidor. O index.html é o ponto de entrada da aplicação Vue. Se você precisar adicionar recursos estáticos como imagens, arquivos CSS ou fontes, esta é a pasta onde você os colocará.
<br>

>- ***`src`***: 
>    - _`Assets`_: Normalmente, esta pasta é usada para armazenar recursos estáticos da sua aplicação, como imagens, fontes, etc.
>    - _`components`_: Esta pasta é usada para armazenar componentes Vue reutilizáveis que podem ser usados em várias partes da sua aplicação.
>   - _`App.vue`_: Este é o componente principal da sua aplicação Vue. Ele é composto por \<template>, \<script>, e \<style>. É o ponto de partida da aplicação Vue.
>   - _`main.js`_: O é o ponto de entrada da sua aplicação, onde você inicializa o Vue.js e define configurações principais, como a montagem do aplicativo no DOM.

## ****Arquivos****
***`babel.config.js`***: Este arquivo é usado para configurar o Babel, uma ferramenta que transforma código JavaScript moderno em uma versão compatível com navegadores mais antigos, permitindo usar recursos mais recentes do JavaScript.

***`jsconfig.json`***: Este arquivo é opcional e é usado para configurar o editor de código para reconhecer e oferecer suporte ao JavaScript/TypeScript em seu projeto. Define configurações para o ambiente de desenvolvimento.

***`package-lock.json`***: Este arquivo é gerado automaticamente pelo npm e contém a árvore exata de dependências instaladas. Ele garante que todos os membros de uma equipe tenham as mesmas versões de dependências.

***`package.json`***: Este arquivo contém informações sobre o projeto, incluindo dependências, scripts de execução, versão do projeto, entre outros. É onde você adiciona as dependências e configurações específicas do projeto.

***`README.md`***: Este arquivo contém informações sobre o projeto, como instruções de instalação, uso e detalhes importantes para os desenvolvedores que trabalham no projeto.

***`vue.config.js`*** Este arquivo é usado para configurar o comportamento do Vue CLI, como ajustar as opções do webpack, configurações de proxy, ajustes de ambiente etc.
>>>>* * * 
<br>
<br>

## ****Onde criar páginas****:
>
> Normalmente, para criar páginas no Vue.js, você trabalha dentro do diretório **`src`**. Dentro dele, a pasta **`components`** é para criar componentes reutilizáveis. O arquivo **`App.vue`** é a raiz da aplicação e, dentro dele, você pode definir as rotas para diferentes páginas ou componentes da aplicação.
>
>  Para criar novas páginas ou componentes você pode criar novos arquivos `.vue` dentro da pasta components, se forem componentes reutilizáveis.
