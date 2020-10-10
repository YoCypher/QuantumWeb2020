<template>
<div id="form-usuario">
<form class="container form-usuario rounded-0">
  <div class="btn-group mb-4" role="group" aria-label="Exemplo básico">
    <button name="login" type="button" v-on:click="toHome"
    class="btn botao text-uppercase font-weight-bold mr-4 login-cadastrar">
    Login</button>
    <button name="cadastro" type="button" class="btn botao text-uppercase font-weight-bold cadastrar1">
    Cadastrar</button>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group col-md-6">
      <label for="inputPassword4">Senha</label>
      <input type="password" class="form-control" id="inputPassword4" placeholder="Senha">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Endereço</label>
    <input type="text" class="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Endereço 2</label>
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartamento, hotel, casa, etc.">
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
  <button id="botaoUsuario" v-on:click="clique" type="submit" class="btn btn-primary btn-lg">Entrar</button>
</form>
</div>
</template>

<script>
export default {
    name: 'CadUsuario',
    methods:{
      clique: function(){
        this.$emit('aparecer');
        this.$router.push({name:'Home'});
      },
      toHome: function(){
        this.$router.push({name: 'Login'});
      }
    },
    mounted: function(){
      this.$emit('desaparecer');
    },
}
</script>

<style>

  #botaoUsuario{
    color: white;
    background-color: #271c64;
    border: none;
    border-radius: 0;
    margin-right: auto;
    margin-left: auto;
  }

  #botaoUsuario:hover{
    color: white;
    background-color: #4a148c;
  }

  #form-usuario{
    height: 100vh;
    background-color: #00008B;
    padding-top: 5%;
  }

  .cadastrar1{
    color: rgb(99, 55, 221);
    border-bottom: 2px solid rgb(99, 55, 221);
  }

  .cadastrar1, .login-cadastrar{
    font-size: 80%;
    padding-left: 0;
    padding-right: 0;
  }

  .login-cadastrar:hover{
    color: rgb(99, 55, 221);
    border-bottom: 2px solid rgb(99, 55, 221);
  }

  .login-cadastrar{
    color: grey;
  }

  .form-usuario{
    background-color: white;
    padding: 2%;
  }

</style>