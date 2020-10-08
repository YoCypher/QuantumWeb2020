<template>
<form class="container">
  <h3 style="text-align: center;" class="mb-3 mt-3">Cadastro de Paciente</h3>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
        <label for="idCpf">CPF:</label>
        <input type="text" name="cpfPaciente" id="idCpf" class="form-control" placeholder="Informe o CPF do paciente">
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
  </div>
  <button type="submit" class="btn btn-primary btn-lg">Cadastrar</button>
</form>
    <!--<form name="cadPaciente" class="container">
        <h2>Cadastro de Paciente</h2>
        <div class="form-group">
            <label for="idPaciente">Nome:</label>
            <input type="text" name="nomePaciente" id="idPaciente" class="form-control" placeholder="Informe o nome do paciente">
        </div>
        <div class="form-group">
            <label for="idCpf">CPF:</label>
            <input type="text" name="cpfPaciente" id="idCpf" class="form-control" placeholder="Informe o CPF do paciente">
        </div>
        <div class="form-group">
            <label for="idEmail">E-mail:</label>
            <input type="email" name="emailPaciente" id="idEmail" class="form-control" placeholder="Informe o e-mail do paciente">
        </div>
        <div class="form-group">
            <label for="idTelefone">Telefone:</label>
            <input type="tel" name="telefonePaciente" id="idTelefone" class="form-control" placeholder="Telefone para contato">
        </div>
        <div class="form-group">
            <input type="reset" value="Limpar" class="btn btn-secondary">
            <input type="submit" value="Cadastrar" class="btn btn-success">
        </div>
        </form>-->
</template>

<script>
export default {
    name: 'CadPaciente'
}
</script>