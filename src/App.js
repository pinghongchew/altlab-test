import logo from './logo.svg';
import './App.css';
import goldenBurger from './image/burger-gold.jpeg';
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    } else {
      console.log('MetaMask is not install!');
    }
  })

  const [address, setAddress] = useState("Connect Wallet");

  const styleMain = {
    backgroundImage: "url(https://myburgerlab.com/static/img/home/img_hero_3_desktop.jpg)",
    // backgroundPosition: "left -200px bottom 10px",
    height: "650px"
  }

  const styleRarity = {
    backgroundColor: "rgb(29, 29, 29)",
    height: "650px"
  }

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log(accounts[0]);
    setAddress(accounts[0]);
  }

  return (
    <>
      <section class="bg-center bg-no-repeat bg-cover" style={styleMain}>
        <div class="flex flex-row-reverse text-white">
          <button class="border rounded-sm px-4 py-2 inline-block place-self-right m-2" onClick={connectWallet}>{address}</button>
        </div>
        <div class="container mx-auto h-full">
          <div class="text-white grid grid-rows-3 grid-cols-2 grid-flow-col gap-4 py-16">
            <div class="row-span-1 col-span-1 m-8">
              <h1 class="text-6xl">Welcome to ALT Burger</h1>
            </div>
            <div class="row-span-1 mx-8">
              <h2 class="text-2xl">10000 randomly generated 3D characters aping around the Ethereum blockchain as ERC-721 tokens and hosted on IPFS.</h2>
            </div>
            <div class="row-span-1 mx-8">
              <button class="border rounded-lg inline-block px-8 py-2">Mint</button>
            </div>
            <div class="place-self-center row-span-3 col-span-1 m-8">
              <video class="max-w-xs" src="https://chibiapes.com/assets/videos/video.mp4" autoPlay loop muted></video>
            </div>
          </div>
        </div>
      </section>
      <section style={styleRarity}>
        <div class="text-white container mx-auto h-full">
          <h2 class="py-16 text-3xl mx-8">Your ALT Burger Rarity</h2>
          <div class="grid grid-flow-row grid-cols-4 gap-4 mx-8 h-96">
            <div class="border fade-in-mode-up opacity-0">
              FRESHLY BAKED BAMBOO CHARCOAL BUNS
            </div>
            <div class="border fade-in-mode-up animation-delay-1 opacity-0">
              FRESHLY BAKED BAMBOO CHARCOAL BUNS
            </div>
            <div class="border fade-in-mode-up animation-delay-2 opacity-0">
              FRESHLY BAKED BAMBOO CHARCOAL BUNS
            </div>
            <div class="border fade-in-mode-up animation-delay-3 opacity-0">
              FRESHLY BAKED BAMBOO CHARCOAL BUNS
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
