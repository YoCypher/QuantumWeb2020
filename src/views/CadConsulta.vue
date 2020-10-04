<template>
    <div class="container" id="generic">
        <form name=cadConsulta>
          <h2>Cadastrar Consulta</h2>
            <div class="form-group">
                <label for="idDataConsulta">Data:</label>
                <input type="date" name="dataConsulta" id="idDataConsulta" class="form-control" placeholder="Informe a data da consulta">
            </div>
            <div class="form-group">
                <label for="idValorConsulta">Valor:</label>
                <input type="number" name="valorConsulta" id="idValorConsulta" class="form-control" placeholder="Informe o valor da consulta">
            </div>
            <div class="form-group">
              <label for="idDentista">Dentista:</label>
              <select id="idDentista" class="form-control">
                <option>Selecione</option>
                <option>Dentista 1</option>
                <option>Dentista 2</option>
              </select>
            </div>
            <div class="form-group" id="botoes">
              <input id = "limpar" type="reset" value="Limpar" class="btn btn-secondary">
              <input id = "submeter" type="submit" value="Cadastrar" class="btn btn-success">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'CadConsulta'
}
</script>