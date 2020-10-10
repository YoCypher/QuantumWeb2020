<template>
    <div class="content container-fluid">
      <!--<img src="../assets/img/logo.png" class="rounded mx-auto d-block mb-4">-->
        <form id="form-login" class="pt-4">
          <div class="btn-group mb-4" role="group" aria-label="Exemplo básico">
            <button name="login" type="button" class="btn botao text-uppercase font-weight-bold mr-4 login">
            Login</button>
            <button name="cadastro" v-on:click="clique" 
            type="button" class="btn botao text-uppercase font-weight-bold cadastrar">
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
              <input type="submit" v-on:click="login" id = "submeter" value="Entrar" class="btn btn-lg w-100">
            </div>
        </form>
    </div>
</template>

<script>
export default{
    name: 'Login',
    methods: {
      login: function(){
        this.$router.push({name: 'Home'});
        this.$emit('aparecer');
      },
      clique: function(){
        this.$router.push({name:'CadUsuario'});
      }
    },
    mounted: function(){
      this.$emit('desaparecer');
    }
}
</script>

<style>

  @media (max-width: 576px) {
    #form-login{
      width: 90%;
    }
  }

  @media (min-width: 768px) and (max-width: 1199.97px)  {
    #form-login{
      width: 35%;
    }
  }

  @media (min-width: 1199.98px) {
    #form-login{
      width: 25%;
    }
  }

  .cadastrar{
    font-size: 80%;
    color: grey;
  }

  .cadastrar:hover{
    color: rgb(99, 55, 221);
    border-bottom: 2px solid rgb(99, 55, 221);
  }

  .login{
    font-size: 80%;
    padding-left: 0;
    padding-right: 0;
    color: rgb(99, 55, 221);
    border-bottom: 2px solid rgb(99, 55, 221);
  }

  .botao{
    background-color:transparent;
  }

  #form-login{
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 2%;
    border-radius: 0;
    background-color: white;
    padding-right: 1%;
    padding-left: 1%;
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
    border-radius: 0;
  }

  #form-login input[type="submit"]:hover, #form-login input[type="reset"]:hover{
    color: white;
    background-color: #4a148c;
  }

  .grupo{
    display: flex;
    justify-content: center;
  }

  #form-login input[type="text"], #form-login input[type="password"]{
    background-color: transparent;
    border-radius: 0;
    border-top: none;
    border-left: none;
    border-right: none;
  }

  .link-usuario a{
    color:rgb(17, 51, 126);
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