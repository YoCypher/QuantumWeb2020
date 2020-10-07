<template>
    <div class="container-fluid">
        <div class="alert alert-info mt-3" role="alert">
            <h3 class="alert-heading">Olá Usuário</h3>
            <hr>
            <p>Aqui estão todas as funcionalidades</p>
        </div>
        <div class="row row-cols-1 row-cols-md-3 container-fluid">
            <div class="col mb-4">
                <div class="card bg-light mb-3 text-center">
                    <div class="card-header">
                        <img src="../assets/img/febre.png" style="width:30%" alt="..." class="img-thumbnail">
                    </div>
                    <div class="card-body">
                        <h6 class="card-title">Pacientes</h6>
                        <p class="card-text">0</p>
                    </div>
                    <div class="card-footer text-muted">
                        <span>Mais Informações</span>
                    </div>
                </div>
                
            </div>

            <div class="col mb-4">
                <div class="card bg-light mb-3 text-center">
                    <div class="card-header">Pacientes</div>
                    <div class="card-body">
                        <h6 class="card-title">Pacientes</h6>
                        <p class="card-text">0</p>
                    </div>
                    <div class="card-footer text-muted">
                        Mais Informações
                    </div>
                </div>
            </div>
        
            <div class="col mb-4">
                <div class="card bg-light mb-3 text-center">
                    <div class="card-header">Pacientes</div>
                    <div class="card-body">
                        <h6 class="card-title">Pacientes</h6>
                        <p class="card-text">0</p>
                    </div>
                    <div class="card-footer text-muted">
                        Mais Informações
                    </div>
                </div>

            </div>
        </div>    
        
    </div>   
</template>

<script>
export default {
    name: 'HomeLogado'
}
</script>

<style>
    #consulta, #paciente{
        width: 49%;
        display: inline-block;
    }
    #consulta{
        background-color: red;
        margin-left: 2%;
    }
    #paciente{
        background-color: blueviolet;

    }
</style>