import logo from './logo.svg';
import './App.scss';
import goldenBurger from './image/burger-gold.jpeg';
import iconBun from './image/bun.png';
import iconPatty from './image/patty.png';
import iconCheese from './image/cheese.png';
import iconVege from './image/vege.png';
import vidMain from "./image/vidMain.m4v"
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
    // height: "650px"
  }

  const styleRarity = {
    backgroundColor: "rgb(29, 29, 29)",
    // height: "650px"
  }

  const styleTeam = {
    backgroundImage: "linear-gradient(to top right, rgb(53, 53, 53), rgb(65, 40, 40)",
    height: "650px"
  }

  const styleIconBun = {
    width: "100px",
    height: "100px"
  }
  const styleDivBun = {
    // backgroundColor: "rgb(184,145,156)"
    // backgroundColor: "rgb(186,156,166)"
    backgroundColor: "rgb(192,156,166)"
    // backgroundColor: "rgb(186,158,167)"
  }

  const styleMovingBun = {
    width: "200px",
    height: "200px"
  }

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log(accounts[0]);
    setAddress(accounts[0]);
  }

  return (
    <>
      <section class="bg-center bg-no-repeat bg-cover" style={styleMain}>
        <nav class="container mx-auto lg:px-8">
          <ul class="flex flex-row-reverse text-white text-xl">
            <li class="order-6 border-2 my-2 ml-2 mr-auto px-4 py-2 font-semibold"><i>alt</i> LAB</li>
            <li class="order-4 my-2 mx-1 px-4 py-2">Origin</li>
            <li class="order-3 my-2 mx-1 px-4 py-2">Roadmap</li>
            <li class="order-2 my-2 mx-1 px-4 py-2">Team</li>
            <li class="order-1">
              <button class="border rounded-lg px-4 py-2 inline-block my-2 mx-1" onClick={connectWallet}>{address}</button>
            </li>
          </ul>
        </nav>
        <div class="container mx-auto h-full lg:px-8">
          <div class="text-white grid grid-rows-3 grid-cols-5 grid-flow-col gap-4 py-32">
            <div class="row-span-1 col-span-3">
              <h1 class="text-5xl">Welcome to <em>alt</em> BURGER</h1>
            </div>
            <div class="row-span-1 col-span-3">
              <h2 class="text-2xl">4100 randomly generated 3D characters aping around the Ethereum blockchain as ERC-721 tokens and hosted on IPFS.</h2>
            </div>
            <div class="row-span-1">
              <button class="border rounded-lg inline-block px-8 py-2">Mint</button>
            </div>
            <div class="place-self-end row-span-3 col-span-2">
              <video class="max-w-xs" src={vidMain} autoPlay loop muted></video>
              {/* https://chibiapes.com/assets/videos/video.mp4 */}
            </div>
          </div>
        </div>
      </section>
      <section style={styleRarity}>
        <div class="ticker-wrap">
          <div class="ticker">
            <li class="ticker__item"><img src={iconBun} style={styleMovingBun} /></li>
            <li class="ticker__item"><img src={iconBun} style={styleMovingBun} /></li>
            <li class="ticker__item"><img src={iconBun} style={styleMovingBun} /></li>
            <li class="ticker__item"><img src={iconBun} style={styleMovingBun} /></li>
            <li class="ticker__item"><img src={iconBun} style={styleMovingBun} /></li>
            <li class="ticker__item"><img src={iconBun} style={styleMovingBun} /></li>
            <li class="ticker__item"><img src={iconBun} style={styleMovingBun} /></li>
            <li class="ticker__item"><img src={iconBun} style={styleMovingBun} /></li>
            <li class="ticker__item"><img src={iconBun} style={styleMovingBun} /></li>
            <li class="ticker__item"><img src={iconBun} style={styleMovingBun} /></li>
          </div>
        </div>
        <div class="text-white container mx-auto h-full">
          <h2 class="text-3xl mx-8">Origin</h2>
          <div class="grid grid-flow-row grid-cols-4 gap-4 mx-8 h-full py-32">
            <div class="border fade-in-mode-up opacity-0" style={styleDivBun}>
              <div class="flex justify-around items-center">
                <div><img src={iconBun} style={styleIconBun} /></div>
                <div class="text-center">Bun</div>
              </div>
            </div>
            <div class="border fade-in-mode-up animation-delay-1 opacity-0" style={styleDivBun}>
              <div class="flex justify-around items-center">
                <div><img src={iconPatty} style={styleIconBun} /></div>
                <div class="text-center">Patty</div>
              </div>
            </div>
            <div class="border fade-in-mode-up animation-delay-2 opacity-0" style={styleDivBun}>
              <div class="flex justify-around items-center">
                <div><img src={iconCheese} style={styleIconBun} /></div>
                <div class="text-center">Cheese</div>
              </div>
            </div>
            <div class="border fade-in-mode-up animation-delay-3 opacity-0" style={styleDivBun}>
              <div class="flex justify-around items-center">
                <div><img src={iconVege} style={styleIconBun} /></div>
                <div class="text-center">Vege</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section style={styleTeam}>
        <div class="text-white container mx-auto h-full">
          <h2 class="pt-16 text-3xl mx-8">Team</h2>
          <h3 class="pb-12 pt-4 text-md mx-8">ALT Labs is home to futuristic, moody, and cool 3D characters. We love anime and we love the 3D world. Our characters bring both worlds together. We live in a culture of collaboration and community. As we grow, we want to grow our community members, which are made up of creatives, technicians, and NFT enthusiasts.</h3>
          <div class="grid grid-flow-row grid-cols-4 gap-4 mx-8 h-64">
            <div class="border rounded-lg fade-in-mode-up opacity-0 text-center pt-28">
              JAD
            </div>
            <div class="border rounded-lg fade-in-mode-up animation-delay-1 opacity-0 text-center pt-28">
              Cirkus
            </div>
            <div class="border rounded-lg fade-in-mode-up animation-delay-2 opacity-0 text-center pt-28">
              Tofu
            </div>
            <div class="border rounded-lg fade-in-mode-up animation-delay-3 opacity-0 text-center pt-28">
              JunnnnWei
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="text-center py-8 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
          © 2021 ALT Labs
        </div>
      </section>
    </>
  );
}

export default App;
