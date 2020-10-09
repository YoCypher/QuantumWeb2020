<template>
    <div class="content">
        <!--<img src="../assets/img/logo.png" class="rounded mx-auto d-block mb-4">-->
        <form id="form-login" class="pt-4">
          <div class="btn-group mb-4" role="group" aria-label="Exemplo básico">
            <button name="login" v-on:click="clique($event)" v-bind:id="estilo_login" type="button" class="btn botao text-uppercase font-weight-bold mr-4 login">
            Login</button>
            <button name="cadastro" v-on:click="clique($event)" v-bind:id="estilo_cadastro" type="button" class="btn botao text-uppercase font-weight-bold cadastrar">
            Cadastrar</button>
          </div>
            <div class="form-group mb-5">
                <input type="text" name="Usuario" id="idUsuario" class="form-control border-secondary" 
                placeholder="Informe o seu nome de usuário"> 
            </div>
            <div class="form-group mt-3 mb-5">
                <input type="password" name="Senha" id="idSenha" class="form-control border-secondary" 
                placeholder="Informe a senha do usuário">
            </div>
            <div class="link-usuario mb-4">
              <a href="#">ESQUECI MINHA SENHA</a>
              <a href="">ESQUECI MEU NOME DE USUÁRIO</a>
            </div>

            <div class="grupo mt-5">
              <!--<input type="reset" id ="limpar" value="Limpar" class="btn btn-lg">-->
              <input type="submit" v-on:click="login" id = "submeter" value="Entrar" class="btn btn-lg w-100">
            </div>
        </form>
        <br/>
        <p id = "mensagem" style="color: red;"></p>
    </div>
</template>

<script>
export default{
    name: 'Login',
    data: function(){
      return {
        estilo_login: 'clicado-estilo',
        estilo_cadastro: ''
      }
    },
    methods: {
      login: function(){
        this.$router.push({name: 'Home'});
        this.$emit('aparecer');
      },
      clique: function($event){
        if(this.estilo_login === 'clicado-estilo' && $event.target.id === 'clicado-estilo') return;
        if(this.estilo_cadastro === 'clicado-estilo' && $event.target.id === 'clicado-estilo') return;
        if($event.target.name === 'login') {
          this.estilo_login = 'clicado-estilo';
          this.estilo_cadastro = '';
        }
        else{
          this.estilo_cadastro = 'clicado-estilo',
          this.estilo_login = '';
        }
      }
    },
    mounted: function(){
      this.$emit('desaparecer');
    }
}
</script>

<style>

  .login, .cadastrar{
    font-size: 80%;
    padding-left: 0;
    padding-right: 0;
    color: grey;
  }

  #clicado-estilo{
    color: white;
    border-bottom: 2px solid rgb(99, 55, 221);
  }

  .login:hover, .cadastrar:hover{
    color: white;
    border-bottom: 2px solid rgb(99, 55, 221);
  }

  .botao{
    background-color:transparent;
  }

  #form-login{
    width: 25%;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 2%;
    border-radius: 5%;
  }

  .form-login label{
    color: white;
  }

  .content{
    height: 100vh;
    background-color: #00008B;
    padding-top: 5%;
  }

  #form-login input[type="submit"], #form-login input[type="reset"]{
    color: white;
    background-color: #271c64;
    border: none;
  }

  #form-login input[type="submit"]:hover, #form-login input[type="reset"]:hover{
    color: white;
    background-color: #4a148c;
  }

  .content h2{
      text-align: center;
  }

  .grupo{
    display: flex;
    justify-content: center;
  }

  .grupo input:first-child{
    margin-right: 3%;
  }

  input[type="text"], input[type="password"]{
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
  }

  .link-usuario a{
    color: white;
  }

  p, .link-usuario a{
    font-size: 70%;
  }

  a:hover{
    color:rgba(0, 140, 255, 0.397);
    text-decoration: none;
  }

  .link-usuario{
    display: flex;
    justify-content: space-between;
  }

</style>