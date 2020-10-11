<template>
    <form class="container">
        <h3 style="text-align: center;" class="mb-3 mt-3">Cadastro de Usuário</h3>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email" v-model="email">
            </div>
            <div class="form-group col-md-6">
                <label for="inputNome">Nome</label>
                <input type="text" class="form-control" name="" id="inputNome" placeholder="Nome" v-model="nome">
            </div>
        </div>
        <div class="form-group">
            <label for="inputAddress">Endereço</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0" v-model="endereco">
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputCity">Cidade</label>
                <input type="text" class="form-control" id="inputCity" v-model="cidade">
            </div>
            <div class="form-group col-md-4">
            <label for="inputEstado">Estado</label>
            <select id="inputEstado" class="form-control" v-model="estado">
                <option selected>Escolher...</option>
                <option>...</option>
            </select>
            </div>
            <div class="form-group col-md-2">
                <label for="inputCEP">CEP</label>
                <input type="text" class="form-control" id="inputCEP" v-model="cep">
            </div>
            <div class="form-group">
                <label for="inputSalario">Salário</label>
                <input type="number" class="form-control" id="inputSalario" v-model="salario"/>
            </div>
        </div>
        <button @click="insertFuncionario" type="submit" class="btn btn-primary btn-lg">Cadastrar</button>
    </form>
</template>

<script>
export default {
    name: 'CadFuncionario',
    data: function() {
        return{
            id: "",
            nome: "",
            email: "",
            endereco: "",
            cidade: "",
            estado: "",
            cep: "",
            salario: "",
            baseURI: "http://localhost:8080/quantum/api/funcionarios",
        };
    },
    methods: {
        insertFuncionario: function(){
            let obj = {
                nome: this.name,
                email: this.email,
                endereco: this.endereco,
                cidade: this.cidade,
                estado: this.estado,
                cep: this.cep,
                salario: this.salario,
            };
            this.$http.post(this.baseURI, obj).then((result) => {
                if(result.data != "") {
                    this.$router.push({ name: 'Funcionarios'});
                }
            });
        }
    }
}
</script>