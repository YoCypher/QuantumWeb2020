<template>
    <div class="content">
        <h2>Login</h2>
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
              <input type="reset" id ="limpar" value="Limpar" class="btn btn-secondary">
              <input type="button" id = "submeter" value="Entrar" class="btn btn-success">
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