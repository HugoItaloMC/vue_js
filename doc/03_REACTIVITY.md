# ****Reatividade no Vue.js****
>>>>- - - 


**_A reatividade no Vue.js é o cerne do seu poder. Ela permite que as variáveis estejam vinculadas ao DOM de forma dinâmica. Quando os dados são alterados, o Vue detecta essas mudanças e automaticamente atualiza a exibição no DOM sem que você precise manipulá-lo diretamente._**
**_O Vue alcança isso por meio de proxies JavaScript. Quando você define uma variável como data em um componente Vue, o Vue cria um proxy desses dados. Isso significa que, quando você altera a variável, o Vue detecta essa alteração e x`automaticamente atualiza todas as partes do DOM que dependem dessa variável._**
<br>

>## ***Métodos ref() e reactive()***

 - **`ref()`**: É utilizado principalmente para criar variáveis reativas simples. Ele retorna um objeto que contém uma propriedade value. Qualquer alteração feita em ref().value será reativa e refletirá automaticamente no DOM.
       import { ref } from 'vue';

       const count = ref(0);

       // No template do componente .vue
       // {{ count.value }}

- **`reactive()`**: É usado para criar objetos reativos mais complexos. Ele envolve todo o objeto passado como argumento e torna todas as suas propriedades reativas
        import { reactive } from 'vue';

        const state = reactive({
            count: 0,
            message: 'Hello!',
            });

        // No template do componente .vue
        // {{ state.count }} {{ state.message }}
>>>>- - - 

>### ***`nextTick()` para ações assíncronas após a atualização do DOM***

**Às vezes, pode ser necessário executar ações após a atualização do DOM. O nextTick() é usado para agendar uma função para ser executada na próxima "tick" do ciclo de vida do Vue, após o DOM ter sido atualizado.**

        import { nextTick } from 'vue';

        // Dentro de um método do componente Vue
        someMethod() {
            this.message = 'Updated Message'; // Altera o estado reativo
            nextTick(() => {
                // Esta função será executada após o DOM ser atualizado
                console.log('DOM atualizado');
                });
        }
>>>>- - - 
 
# ****Utilizando métodos nos componentes `.vue`****
### **No arquivo .vue, você pode utilizar esses métodos para criar dados reativos e atualizar o DOM conforme necessário. Por exemplo:**

        <template>
        <div>
            <p>{{ count.value }}</p>
            <p>{{ state.message }}</p>
            <button @click="increment">Increment</button>
        </div>
        </template>

        <script>
            import { ref, reactive, nextTick } from 'vue';

            export default {
                setup() {
                    const count = ref(0);
                    const state = reactive({
                        message: 'Hello!',
                        });
                    const increment = () => {
                        count.value++;
                        state.message = 'Updated Message';
                    nextTick(() => {
                        console.log('DOM atualizado');
                        });
                    };
                return {
                    count,
                    state,
                    increment,
                    };
                },
            };
        </script>
<br>

## **Isso cria um componente Vue com dados reativos (count e state) e um método increment() que atualiza esses dados. O nextTick() é utilizado para realizar ações após a atualização do DOM, como o console.log neste exemplo.**