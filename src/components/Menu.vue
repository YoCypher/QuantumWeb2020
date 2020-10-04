<template>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #271c64;">
        <a class="navbar-brand" href="index.html"><img src="../assets/img/logo.png"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div style="margin-left:auto">
          <b-nav>
            <b-nav-item-dropdown
              id="my-nav-dropdown"
              text="Dropdown"
              toggle-class="nav-link-custom"
              right
            >
              <b-dropdown-item>
                <router-link to="/cadastro/usuario" class="dropdown-item">
                  Cadastro de Usuário
                </router-link>
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>
                <router-link to="/cadastro/funcionario" class="dropdown-item">
                  Cadastro de Funcionário
                </router-link>
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>
                <router-link to="/cadastro/paciente" class="dropdown-item">
                  Cadastro de Paciente
                </router-link>
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>
                <router-link to="/cadastro/consulta" class="dropdown-item">
                  Cadastro de Consulta
                </router-link>
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>
                <router-link to="/cadastro/dependente" class="dropdown-item">
                  Cadastro de Dependente
                </router-link>
              </b-dropdown-item>
              <b-dropdown-divider></b-dropdown-divider>
              <b-dropdown-item>
                <router-link to="/cadastro/procedimento" class="dropdown-item">
                  Cadastro de Procedimento
                </router-link>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
            <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
          </b-nav>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Menu'
}
</script>

<style>
</style>