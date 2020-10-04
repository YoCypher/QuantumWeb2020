<template>
    <form name="cadPaciente">
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
        </form>
</template>

<script>
export default {
    name: 'CadPaciente'
}
</script>