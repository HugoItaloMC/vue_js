members = [
    {
        fname: "Jon",
        lname: 'Daemon',
        instrument: 'Violão'
    },
    {
        fname: 'Mary',
        lname: 'Via',
        instrument: 'Bateria'
    }
]

const handlingForm = {
    data() {
        return {
            members: window.members,
            newMember: {
                // Ñ acrescenamos atributos ao objeto `newMember`
                // pois a diretiva v-model é dinâmica
                // o atributo é criado no ato da inserção dos dados
            }
        }
    },
    methods: {
        addMember: function() {
            // Se Novo membro ñ conter entradas gerar alerta na página web
            if (!(this.newMember.fname && this.newMember.instrument && this.newMember.lname)) {
                alert('Preencha todos os campos do formulário')
            } else {
                this.members.push(this.newMember);
                this.newMember = {};
            }
        }
    }    
};

Vue.createApp(handlingForm).mount('#app')