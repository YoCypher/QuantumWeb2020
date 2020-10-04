<template>
    <div class="container" id="generic">
        <h2>Cadastrar Novo Procedimento</h2>
        <form name="cadProcedimento">
            <div class="form-group">
                <label for="idProcedimento">Procedimento:</label>
                <input type="text" name="procedimento" id="idProcedimento" class="form-control" placeholder="Qual o procedimento">
            </div>
            <div class="form-group">
                <label for="idDescricao">Descricao:</label>
                <textarea id = "idDescricao" name="descricao" class="form-control" placeholder="Descreva o procedimento"></textarea>
            </div>
            <div class="form-group">
                <label for="idValorProcedimento">Valor do Procedimento:</label>
                <input type="text" name="valorProcedimento" id="idValorProcedimento" class="form-control" placeholder="Informe o valor do procedimento">
            </div>
            <div class="form-group">
                <input type="reset" value="Limpar" id="resetar" class="btn btn-secondary">
                <input type="submit" value="Cadastrar" id="submeter" class="btn btn-success" onClick="add()">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CadProcedimento'
}
</script>