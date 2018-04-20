//aquí debes trabajar con datos de un arreglo o un objeto, incluido directamente en la variable data.
var data;
var w = 450;
var h = 450;
 var ciudades = [
    {name:'FONASA Grupo B',population:26},
    {name:'FONASA Grupo A',population:23},
    {name:'FONASA Grupo C',population:13},
    {name:'Isapre',population:16}
  ];
  //seleccionar todos los "circle" en el documento  
  d3.selectAll('circle')
    .data(ciudades)
    .attr('fill','#226D9E')
    .attr('r', function(d) {
      return d.population *2;
    })
  //seleccionar todos los "text" en el documento      
  d3.selectAll('text')
    .data(ciudades)
    .attr('fill','#FFFFF')                      
    .text(function(d) {
      return ". " + d.name;
    });