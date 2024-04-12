import { Container,Content, Linha } from './styles';
import Input  from './Components/Input/index';
import Bottun from './Components/Button/index';
import React, { useState } from "react";



function App() {
    const [result, setResult] = useState("0");
    const [primeroNum, setPrimeiroNun] = useState("0");
    const [operacao, setOperacao] = useState("");
    const handlerClear = () =>{
      setResult("0");
     
    }
    const handlerNumber = (numero) =>{
      setResult(prev => `${prev === '0'? '' :prev}${numero}`);
    }
    
    const handlerResult = () =>{
      if(primeroNum !== "0" && operacao !== "" && result !== ""){
        switch(operacao){
          case "+":
            somaResult();
            break;
          case "-":
            subResult();
            break;
          case "*":
            multResult();
            break;
          case "/":
            divResult();
            break;
          default:
            break;

        }
      }
    }

    const somaResult = ()=>{
      setPrimeiroNun("0")
      if(primeroNum === "0"){
        setPrimeiroNun(result)
        setResult("0")
        setOperacao("+")
        handlerClear();
      }else{
        const soma = Number(primeroNum) + Number(result);
        setResult(String(soma));
        setOperacao('');
      }
    }

    const subResult = ()=>{
      setPrimeiroNun("0")
      if(primeroNum === "0"){
        setPrimeiroNun(result)
        setResult("0")
        setOperacao("-")
        handlerClear();
      }else{
        const sub = Number(primeroNum) - Number(result);
        setResult(String(sub));
        setOperacao('');
      }
    }

    const multResult = ()=>{
      setPrimeiroNun("0")
      if(primeroNum === "0"){
        setPrimeiroNun(result)
        setResult("0")
        setOperacao("*")
        handlerClear();
      }else{
        const mult = Number(primeroNum) * Number(result);
        setResult(String(mult));
        setOperacao('');
      }
    }
    const divResult = ()=>{
      setPrimeiroNun("0")
      if(primeroNum === "0"){
        setPrimeiroNun(result)
        setResult("0")
        setOperacao("/")
        handlerClear();
      }else{
        const div = Number(primeroNum) / Number(result);
        setResult(String(div));
        setOperacao('');
      }
    }

  return (
    <Container>
     
     <Content>
      <Input value={result}/>
      <Linha>
        <Bottun label="Limpar" onClick={()=>handlerClear()}/>
      </Linha>
      <Linha>
      <Bottun label="1" onClick={()=> handlerNumber('1')}/>
      <Bottun label="2" onClick={()=> handlerNumber('2')}/>
      <Bottun label="3" onClick={()=> handlerNumber('3')}/>
      <Bottun label="/" onClick={divResult}/>
      </Linha>
      <Linha>
      <Bottun label="4" onClick={()=> handlerNumber('4')}/>
      <Bottun label="5" onClick={()=> handlerNumber('5')}/>
      <Bottun label="6" onClick={()=> handlerNumber('6')}/>
      <Bottun label="*" onClick={multResult}/>
      </Linha>
      <Linha>
      <Bottun label="7" onClick={()=> handlerNumber('7')}/>
      <Bottun label="8" onClick={()=> handlerNumber('8')}/>
      <Bottun label="9" onClick={()=> handlerNumber('9')}/>
      <Bottun label="-" onClick={subResult}/>
      </Linha>
      <Linha>
      <Bottun label="." onClick={()=> handlerNumber('.')}/>
      <Bottun label="0" onClick={()=> handlerNumber('0')}/>
      <Bottun label="=" onClick={handlerResult}/>
      <Bottun label="+" onClick={somaResult}/>
      </Linha>
     </Content>
    
    </Container>
  );
}

export default App;