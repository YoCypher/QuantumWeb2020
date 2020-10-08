<template>
    <div class="content mt-4 mb-4">
        <img src="../assets/img/logo.png" class="rounded mx-auto d-block mb-4">
        <form>
            <div class="form-group">
                <label for="idUsuario">Usuário:</label>
                <input type="text" name="Usuario" id="idUsuario" class="form-control" placeholder="Informe o seu nome de usuário"> 
            </div>
            <div class="form-group mt-3">
                <label for="idSenha">Senha:</label>
                <input type="password" name="Senha" id="idSenha" class="form-control" placeholder="Informe a senha do usuário">
            </div>
            <div class="grupo mt-3">
              <input type="reset" id ="limpar" value="Limpar" class="btn">
              <input type="submit" v-on:click="login" id = "submeter" value="Entrar" class="btn">
            </div>
        </form>
        <br/>
        <p id = "mensagem" style="color: red;"></p>
    </div>
</template>

<script>
export default{
    name: 'Login',
    methods: {
      login: function(){
        this.$router.push({name: 'Home'});
        this.$emit('aparecer');
      }
    },
    mounted: function(){
      this.$emit('desaparecer');
    }
}
</script>

<style>
  .content{
      width: 50%;
      margin-left: auto;
      margin-right: auto;
  }

  input[type="submit"], input[type="reset"]{
    color: white;
    background-color: #271c64;
  }

  input[type="button"]:hover, input[type="reset"]:hover{
    color: white;
    background-color: #4a148c;
  }

  .content h2{
      text-align: center;
  }

  .grupo{
    width: 23%;
    margin-right: auto;
    margin-left: auto;
  }

  .grupo input:first-child{
    margin-right: 3%;
  }
</style>