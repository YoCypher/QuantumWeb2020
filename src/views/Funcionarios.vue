<template>
    <ul>
        <li v-for="funcionario in funcionarios" :key="funcionario.id"></li>
            <div id="general">
                <div class="left">
                    <h4>{{funcionario.id}}</h4>
                    <p>{{funcionario.nome}}</p>
                    <p>{{funcionario.email}}</p>
                    <p>{{funcionario.cidade}}</p>
                    <p>{{funcionario.estado}}</p>
                    <p>{{funcionario.cep}}</p>
                    <p>{{funcionario.salario}}</p>
                </div>
            </div>
    </ul>
</template>

<script>
export default {
    name: 'Funcionarios',
    data(){
        return{
            funcionarios: [],
            baseURI: "http://localhost:8080/quantum/api/funcionarios",
        };
    }
}
</script>

<style>

</style>