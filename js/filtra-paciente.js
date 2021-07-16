var campoFiltro = document.querySelector('#filtro')

campoFiltro.addEventListener('input',function(){

    let textfiltro = this.value
    
    let pacientes = document.querySelectorAll('.paciente')
    
    pacientes.forEach(function(paciente){
        let nome = paciente.querySelector('.info-nome').textContent
        
        let expressao = new RegExp(textfiltro,"i")
        
        if(!expressao.test(nome)){
            paciente.classList.add('invisivel')
        }else{
            paciente.classList.remove('invisivel')
        }
    })

})

/*EXPLICAÇÃO SOBRE PQ QUANDO VC COLOCA O CAMPO DO FILTRO EM BRANCO ELE DEIXA TODOS NA LISTA VISIVEIS AO INVES DE DEIXAR TODOS INVISIVEIS, TANTO QUE NO 
CÓDIGO DO PROF DA ALURA ELE TEVE QUE COLOCAR UMA CONDIÇÃO PARA SE ESTIVER VAZIO OU CHEIO O CAMPO... O MOTIVO É QUE A EXPRESSAO = new RegExp(textfiltro,"i")
NÃO ESTÁ RECEBENDO NENHUM VALOR, AI NA HORA DA VALIDAÇÃO COM O IF, ELE RETORNA TRUE POR ALGUM MOTIVO, ASSIM CAI NO ELSE QUE DEIXA TODOS OS CLIENTE DA LISTA
VISIVEIS. */

/*
1- selecionar o campo de filtro
2- capturar o input do filtro
3- comparar a input  com o nome
4- os que não são iguais somem
*/