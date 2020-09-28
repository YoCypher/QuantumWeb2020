<template>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #271c64;">
        <a class="navbar-brand" href="index.html"><img src="../assets/img/logo.png"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="conteudoNavbarSuportado">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Início</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Cadastro
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="cadConsulta.html">Consulta</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="cadFuncionario.html">Funcionário</a>
                <a class="dropdown-item" href="cadDependente.html">Dependende</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="cadPaciente.html">Paciente</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="cadProcedimento.html">Procedimento</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="cadUsuario.html">Usuário</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Atendimento</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Estoque</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Calendário</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Configurações</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Sair</a>
            </li>
          </ul>
        </div>
      </nav>
</template>

<script>
export default {
    name: 'Menu'
}
</script>