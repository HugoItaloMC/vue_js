# ****Modelo de Syntax VueJS****
>>>>>>- - -

#### _A syntax do Vue para trabalhar com componentes é uma parte essencial para construir aplicações modulares e reutilizáveis. Ao utilizar a syntax de componentes, o Vue permite criar estruturas encapsuladas, compostas por seu próprio HTML, JavaScript e estilos CSS, simplificando o desenvolvimento e a manutenção do código. Através da definição de componentes e suas propriedades específicas, é possível integrar e reutilizar funcionalidades em diferentes partes da aplicação, promovendo assim um código mais organizado, escalável e fácil de gerenciar._
<br>


>## **Breve Resumo do Modelo de um componente Vue**
<br>

### ****Estrutura de um arquivo .vue****

*Um arquivo .vue é composto por três seções principais:*

- **`Template`**: Aqui é definida a estrutura HTML do componente Vue, responsável pela aparência do componente na página.
     
     
      <template>
         \<!-- Estrutura HTML do componente -->
      </template>


- **`Script`**: Nesta seção, é escrito o código JavaScript do componente Vue. Aqui se manipulam dados, define-se métodos, computações e interações com o template.


        <script>
            export default {
                data() {
                    return {
                        // Propriedades e dados do componente
                            };
                        },
                    methods: {
                        // Métodos para manipular dados ou responder a eventos
                        },
                        // ...outras configurações
            }
        </script>

- **`style`**: Esta parte contém os estilos CSS específicos para o componente Vue.

       <style>
        /* Estilos CSS para o componente */
       </style>
>>>>- - - 


## ****Vue e seu modelo de syntax similar ao HTML****

No template do Vue, você usa uma syntax similar ao HTML, mas com algumas adições especiais chamadas de diretivas. As diretivas são atributos especiais que Vue fornece para adicionar funcionalidades dinâmicas aos elementos HTML.

Por exemplo, a diretiva v-bind permite vincular dinamicamente um atributo ou propriedade HTML a uma expressão Vue. A diretiva v-on é usada para ouvir eventos no elemento HTML e acionar métodos ou lógica JavaScript.

*****Aqui está um exemplo de como utilizar diretivas em um componente .vue e, em seguida, chamá-lo no arquivo App.vue:*****
<br>


     <!-- MeuComponente.vue -->
     <template>
        <div>
            <p>{{ mensagem }}</p> <!-- Interpolação de dados -->
            <button @click="alterarMensagem">Alterar Mensagem</button> <!-- Diretiva para ouvir evento click -->
        </div>
     </template>

     <script>
        export default {
            data() {
                return {
                    mensagem: 'Olá, mundo!',
                    };
                },
                methods: {
                    alterarMensagem() {
                        this.mensagem = 'Nova mensagem!';
                        },
                },
        };
     </script>

     <style>
        /* Estilos específicos para MeuComponente */
     </style>

**`MeuComponente.vue`**: Possui um parágrafo (\<p>) com interpolação de dados ({{ mensagem }}) e um botão com uma diretiva @click que chama o método alterarMensagem quando clicado.

### ****Referenciando componentes no arquivo App.vue****:

_No arquivo **`App.vue`**, você importa e utiliza seus componentes. Exemplo de importação e uso de um componente:_

     <template>
     <div>
        <h1>Exemplo de Utilização de Componente e Diretivas</h1>
        <MeuComponente></MeuComponente> <!-- Chamando o componente MeuComponente -->
     </div>
     </template>

     <script>
        import MeuComponente from './components/MeuComponente.vue';

        export default {
            components: {
                MeuComponente,
                },
            };
     </script>

     <style>
        /* Estilos específicos para App.vue */
     </style>


**`App.vue`** : Importa e usa o componente `MeuComponente` dentro da sua template, assim <MeuComponente></MeuComponente>. Isso incorpora o conteúdo do componente `MeuComponente` na página renderizada pelo App.vue.
<br>

### ****Interação entre componentes e o método createApp().mount():****

No arquivo main.js, é criada a instância principal do Vue usando createApp() e o componente raiz (normalmente o App.vue) é montado na página HTML.
<br>

__*Exemplo:*__

     // main.js
     import { createApp } from 'vue';
     import App from './App.vue';

     createApp(App).mount('#app');

## **Esses exemplos ilustram como as diretivas (como `@click` para ouvir eventos) podem ser utilizadas em um componente _Vue_ e como esse componente pode ser posteriormente referenciado e utilizado dentro do arquivo `App.vue.`**