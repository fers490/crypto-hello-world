import './App.css';

import { useEffect, useState } from 'react'
import { useProvider, useContract } from './hooks/web3' 

import HelloWorld from './artifacts/contracts/HelloWorld.sol/HelloWorld.json';

const contractAddr = '0xDc64a140Aa3E981100a9becA4E685f962f0cF6C9'

function App() {
  const [message, setMessage] = useState('')
  const [destination, setDst] = useState('')

  const provider = useProvider(window.ethereum);
  const signer = provider.getSigner();
  const contract = useContract(contractAddr, HelloWorld.abi, signer);

  useEffect(() => {
    getMessage();
  })

  async function getMessage() {
    const newMessage = await contract.hello();
    console.log('Message:' + newMessage)
    setMessage(newMessage)
  }
  
  async function setDestination() {
    const transaction = await contract.setDestination(destination);
    await transaction.wait()
    await getMessage()
  }

  return (
    <div className="App">
      <button onClick={getMessage}>Get message</button>
      <button onClick={setDestination}>Set destination</button>
      <input type='text' value={destination} placeholder='New destination' onChange={(event) => setDst(event.target.value)}></input>
      <input type='text' value={message} placeholder='Current message' onChange={(event) => setMessage(event.target.value)}></input>
    </div>
  );
}

export default App;
