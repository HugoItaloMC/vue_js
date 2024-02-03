// Base de dados para estudo, normalmente a base de dados viria de um banco de dados através de uma API
// Para estudos vamos utilizar um objeto simples como base de dados

var products = [
    {
        "photo": "img/big-mac.png",
        "name": "Big Mac",
        "price": 5.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/mc-chicken.png",
        "name": "Mc Chicken",
        "price": 4.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/double-cb.png",
        "name": "Double Cheese Burger",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/fries.png",
        "name": "Batata frita",
        "price": 2.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/nuggets.png",
        "name": "Mc Nuggets",
        "price": 3.49,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/salad.png",
        "name": "Salada",
        "price": 2.79,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/cola.png",
        "name": "Coca Cola",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Ice Tea",
        "price": 1.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/water.png",
        "name": "Água",
        "price": 1.49,
        "active": false,
        "quantity": 1
    }
];  
const selfServiceMachine = {
    data() {
        return {
            products: window.products,
            orderTotal: 0
        }

    },
    methods: {
        produtoSelecionado: function(item) {
            item.active = !item.active;
        },
        totalPedido: function(){
            var total = 0
            // forEach é a forma mais simples de se iterar em um objeto em JS
            // Como parametro ele recebe uma funcão que tem um parametro de entrada que é o iterador do objeto iterável
            this.products.forEach(function(product){
                // product é o iterador do iterável products
                if (product.active){
                    total += product.price * product.quantity
                }
            });
            return total.toFixed(2);
        }
    }
};
Vue.createApp(selfServiceMachine).mount('#app')