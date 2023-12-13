document.querySelector(".roteiro-comprar").addEventListener("click", function() {

    const destino = document.querySelector(".roteiro-destino").textContent;
  
    const inclusos = [];
    const itensIncluidos = document.querySelector(".roteiro-incluso").querySelectorAll("li");
    itensIncluidos.forEach(item => {
      inclusos.push(item.textContent);
    });

    const preco = document.querySelector(".roteiro-preco").textContent;
  
    const parcelamento = [];
    const itensParcelamento = document.querySelector(".roteiro-parcelamento").querySelectorAll("li");
    itensParcelamento.forEach(item => {
      parcelamento.push(item.textContent);
    });
  
    const pacoteTuristico = {
      destino,
      inclusos,
      preco,
      parcelamento
    };
    
    console.log(pacoteTuristico);
  });