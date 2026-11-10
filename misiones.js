### 3. `misiones.js`
*(Configurado para que el botón "Avanzar" de cada misión del modal lleve exactamente al enlace de Google Sites que le corresponde).*

```javascript
const missions=[{title:'El código del tiempo',desc:'La bóveda te ofrece $100.000 de capital inicial. En este desafío compararás dos maneras de calcular intereses.',q:'Con una tasa ficticia del 5% por período durante 2 períodos, ¿cuánto interés simple genera un capital de $100.000?',placeholder:'Escribí el interés sin puntos ni signo $',answer:'10000',hint:'Interés simple: I = C × i × t. Entonces: 100.000 × 0,05 × 2.',link:'https://sites.google.com/view/finanzas360-/mundo01'},{title:'La bóveda digital',desc:'Un producto cuesta $80.000 y tiene un descuento del 15%. Descubrí cuánto dinero te queda para seguir la misión.',q:'¿Cuál es el precio final después del descuento?',placeholder:'Escribí el precio final',answer:'68000',hint:'Calculá el 15% de $80.000 y restalo del precio original.',link:'https://sites.google.com/view/finanzas360-/mundo02'},{title:'El laboratorio de ecuaciones',desc:'Dos planes cobran de manera diferente. Plan A: $5.000 fijos más $100 por operación. Plan B: $2.000 fijos más $160 por operación.',q:'¿Con cuántas operaciones cuestan lo mismo?',placeholder:'Cantidad de operaciones',answer:'50',hint:'Igualá los costos: 5000 + 100x = 2000 + 160x.',link:'https://sites.google.com/view/finanzas360-/mundo03'},{title:'El negocio imposible',desc:'Un emprendimiento vende cada producto a $3.000. El costo variable por unidad es $1.200 y los costos fijos suman $180.000.',q:'¿Cuántas unidades debe vender para llegar al punto de equilibrio?',placeholder:'Cantidad de unidades',answer:'100',hint:'Igualá ingreso y costo: 3000x = 180000 + 1200x.',link:'https://sites.google.com/view/finanzas360-/mundo04'},{title:'La salida',desc:'¡Última puerta! Para escapar necesitás usar tus herramientas matemáticas y justificar decisiones con cálculos.',q:'Si ahorrás $20.000 de una compra de $100.000, ¿qué porcentaje del total ahorraste?',placeholder:'Escribí el porcentaje, sin el símbolo %',answer:'20',hint:'Porcentaje = (ahorro ÷ precio original) × 100.',link:'https://sites.google.com/view/finanzas360-/resumen'}];let current=0;
function openMission(i){
  current=i;const m=missions[i];
  document.getElementById('modalKicker').textContent='MUNDO 0'+(i+1);
  document.getElementById('modalTitle').textContent=m.title;
  document.getElementById('modalDesc').textContent=m.desc;
  document.getElementById('challenge').innerHTML='<label for="answer">'+m.q+'</label><input id="answer" inputmode="decimal" autocomplete="off" placeholder="'+m.placeholder+'"><p><button class="backtop" onclick="checkAnswer()">Comprobar respuesta</button> <button class="backtop" onclick="showHint()">Pedir una pista</button></p>';
  document.getElementById('feedback').textContent='';
  
  // Asocia dinámicamente el enlace correspondiente de Google Sites al botón Avanzar
  const btnAvanzar = document.getElementById('btnAvanzar');
  if(btnAvanzar) {
    btnAvanzar.setAttribute('onclick', `window.location.href='${m.link}'`);
  }

  document.getElementById('modal').classList.add('open');
  setTimeout(()=>document.getElementById('answer').focus(),50)
}
function checkAnswer(){const val=document.getElementById('answer').value.replace(/[$.%\s]/g,'').replace(',','.');const fb=document.getElementById('feedback');if(val===missions[current].answer){fb.textContent='¡Código correcto! Desafío superado. 🎉'}else{fb.textContent='Todavía no: revisá los datos y probá otra vez.'}}
function showHint(){document.getElementById('feedback').textContent='PISTA: '+missions[current].hint}
function closeMission(){document.getElementById('modal').classList.remove('open')}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMission()});
```[cite: 3