<template>
    <form class="container">
        <h3 style="text-align: center;" class="mb-3 mt-3">Cadastro de Usuário</h3>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
            </div>
            <div class="form-group col-md-6">
                <label for="inputNome">Nome</label>
                <input type="text" class="form-control" id="inputNome" placeholder="Nome">
            </div>
        </div>
        <div class="form-group">
            <label for="inputAddress">Endereço</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0">
        </div>
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputCity">Cidade</label>
                <input type="text" class="form-control" id="inputCity">
            </div>
            <div class="form-group col-md-4">
            <label for="inputEstado">Estado</label>
            <select id="inputEstado" class="form-control">
                <option selected>Escolher...</option>
                <option>...</option>
            </select>
            </div>
            <div class="form-group col-md-2">
                <label for="inputCEP">CEP</label>
                <input type="text" class="form-control" id="inputCEP">
            </div>
            <div class="form-group">
                <label for="inputSalario">Salário</label>
                <input type="number" class="form-control" id="inputSalario"/>
            </div>
        </div>
        <button type="submit" class="btn btn-primary btn-lg">Cadastrar</button>
    </form>
</template>

<script>
export default {
    name: 'CadFuncionario'
}
</script>