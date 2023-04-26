function sonIguales(elemento1, elemento2) {
    // Devuelve "true" si "elemento1" y "elemento2" son estrictamente iguales
    // De lo contrario, devuelve "false"
    //↓↓↓ Tu código: ↓↓↓ */
  if(elemento1 === elemento2)
  {
  return true;}

  else {return false
  
  }
console.log(sonIguales(15,15)); 
console.log(sonIguales(90,90));
console.log(sonIguales(90,"90"));
console.log(sonIguales("test", "test"));

  }
  function tienenMismaLongitud(str1, str2) {
    // Devuelve "true" si las dos strings tienen la misma longitud
    // De lo contrario, devuelve "false"
    // Tu código:
    
      if (str1.length === str2.length) {
        return true;
      } else {
        return false;
      }
      console.log(tienenMismaLongitud("hi", "there"));
      console.log(tienenMismaLongitud("javascript", "bumfuzzled"));
    }


   

function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    
      return num * num;

      console.log(elevarAlCuadrado(2)); // devuelve 4
      console.log(elevarAlCuadrado(5)); // devuelve 25
     
    }
    function esPar(num) {
        // Devuelve "true" si "num" es par
        // De lo contrario, devuelve "false"
        // Tu código:
        
         
          if(num % 2 === 0)
          {
          return true;
          console.log(esPar(6)); 
        }
          else {return false
            console.log(esPar(7)); 
          }
         

        }

        function esImpar(num) {
            // Devuelve "true" si "num" es impar
            // De lo contrario, devuelve "false"
            // Tu código:
          
            if(num % 2 === 1)
            {
            return true;
            console.log(esImpar(6));
        }

            else {return false
                console.log(esImpar(7));
            
            }
          }

          function elevarAlCubo(num) {
            // Devuelve el valor de "num" elevado al cuadrado
            // ojo: No es raiz cuadrada!
            // Tu código:
            
              return num ** 3 ;
        
              console.log(elevarAlCubo(3)); 
              console.log(elevarAlCubo(0)); 
              console.log(elevarAlCubo(-5)); 
            }


            function elevar(num, exponent) {
              // Devuelve el valor de "num" elevado al exponente dado en "exponent"
              // Tu código:
             
                let resultado = 1;
                for (let i = 0; i < exponent; i++) {
                  resultado *= num;
                }
                return resultado;
                console.log(elevar(2,2)); 
                console.log(elevar(2,3)); 
                console.log(elevar(0,5)); 
                console.log(elevar(10,1)); 
                
              }
            