import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [nome, setNome] = useState({
    nome: '',
    email: '',
    senha: ''
  })
  const [alerta, setAlerta] = useState('')

  function fnNome(e) { setNome(prev => ({ ...prev, nome: e.target.value })) }
  function fnSenha(e) { setNome(prev => ({ ...prev, senha: e.target.value })) }
  function fnEmail(e) { setNome(prev => ({ ...prev, email: e.target.value })) }

  function fnCadastro() {
    if (nome.senha == '') { setAlerta('SENHA VAZIO') }
    if (nome.email == '') { setAlerta('EMAIL VAZIO') }
    if (nome.nome == '') { setAlerta('NOME VAZIO') }
    if (nome.nome !== '' && nome.senha !== '' && nome.email !== '') { alert('PODE ENVIAR FORMULARIO') }

  }
 
  useEffect(() => {
    console.log('', nome)
  }, [nome])

  return (


    <div className="App">
      <p>{alerta}</p>
      <label>NOME</label>
      <input onChange={fnNome} />
      <label>EMAIL</label>
      <input onChange={fnEmail} />
      <label>SENHA</label>
      <input onChange={fnSenha} />
      <button onClick={fnCadastro}>CADASTRO</button>
    </div>
  );
}

export default App;
