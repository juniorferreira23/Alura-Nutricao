/*
1- Selecionar o botão
2- criar evento para o botão
2- buscar os dados
3- transformar em lista/array de objetos
4- adicionar a lista de objetos na tabela
5- manda para o site
 */

 var botaoBusca = document.querySelector('#buscar-paciente')

 botaoBusca.addEventListener('click',function(){
    let xhl = new XMLHttpRequest()

    xhl.open('GET','https://api-pacientes.herokuapp.com/pacientes')
   
    xhl.addEventListener('load',function(){
        let resposta = xhl.responseText
        let pacientes = JSON.parse(resposta)  
        
        pacientes.forEach(function(paciente){
            adicionandoPacienteNaTabela(paciente)
         })
    })
    xhl.send()
 })
 
