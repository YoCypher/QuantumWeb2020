<template>
    <div class="content mt-4 mb-4">
        <h3 style="text-align:center;">Login</h3>
        <form>
            <div class="form-group">
                <label for="idUsuario">Usuário:</label>
                <input type="text" name="Usuario" id="idUsuario" class="form-control" placeholder="Informe o seu nome de usuário"> 
            </div>
            <div class="form-group">
                <label for="idSenha">Senha:</label>
                <input type="password" name="Senha" id="idSenha" class="form-control" placeholder="Informe a senha do usuário">
            </div>
            <div class="grupo">
              <input type="reset" id ="limpar" value="Limpar" class="btn">
              <input type="button" id = "submeter" value="Entrar" class="btn">
            </div>
        </form>
        <br/>
        <p id = "mensagem" style="color: red;"></p>
    </div>
</template>

<script>
export default{
    name: 'Login'
}
</script>

<style>
  .content{
      width: 50%;
      margin-left: auto;
      margin-right: auto;
  }

  input[type="button"], input[type="reset"]{
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