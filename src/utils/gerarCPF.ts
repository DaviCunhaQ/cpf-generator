
export function gerarCPF(estado: number){
  if (estado > 9 || estado < 0){
    throw new Error ('Invalid number')
  }else{
    let cpf = [] //cria array de cpf
    for(let c= 0; c <= 7; c++){
      cpf.push(
        Math.floor( //arredonda o número aleatório
          Math.random() * 10 + 0 //gera o número aleatório entre 0 e 9
        )
      )
    }
  
    cpf.push(estado) //adiciona o número relacionado ao estado no nono dígito
  
    let mult = 10 //multiplicador
    let acc = 0 //acumulador
    for(let a = 0; a <=8; a++){
      let num = cpf[a] //recebe o número do cpf
      num = num * mult //aplica o multiplicador
      acc = acc + num //acumula o número
      mult = mult - 1 //diminui o multiplicador
    }
  
    let primeiroDigito = 11 - (acc % 11) //gera o primeiro digito verificador
  
    if(primeiroDigito < 10){
      cpf.push(primeiroDigito) //adiciona o primeiro digito ao cpf
    }else{
      cpf.push(0) //caso o número seja maior que 10
    }
  
    mult = 11 //setando o multiplicador
    acc = 0 //setando o acumulador
  
    for(let b = 0; b <=9 ; b++){
      let nums = cpf[b] //recebe o número do cpf
      nums = nums * mult //aplica o multiplicador
      acc = acc + nums //acumula o número
      mult = mult - 1 //diminui o multiplicador
    }
  
    let segundoDigito = 11 - (acc % 11) //gera o segundo digito verificador
  
    if(segundoDigito < 10){
      cpf.push(segundoDigito) //adiciona o segundo digito ao cpf
    }else{
      cpf.push(0) //caso o número seja maior que 10
    }
  
    //transformar o array em string
    const cpfNovo = `${cpf[0]}${cpf[1]}${cpf[2]}.${cpf[3]}${cpf[4]}${cpf[5]}.${cpf[6]}${cpf[7]}${cpf[8]}-${cpf[9]}${cpf[10]}`
  
    return cpfNovo
  }
}
