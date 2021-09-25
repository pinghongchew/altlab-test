import logo from './logo.svg';
import './App.scss';
import goldenBurger from './image/burger-gold.jpeg';
import iconBun from './image/bun.png';
import iconPatty from './image/patty.png';
import iconCheese from './image/cheese.png';
import iconVege from './image/vege.png';
import vidMain from "./image/vidMain.m4v"
import iconMain from "./image/burger-icon.png"
import { useEffect, useState } from 'react';

function App() {

  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed!');
    } else {
      console.log('MetaMask is not install!');
    }
  })

  const [address, setAddress] = useState(0);
  const [displayAddress, setDisplayAddress] = useState("Connect Wallet");
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const styleIconMain = {
    width: "50px",
    height: "50px"
  }

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

  const onclickHamburgerMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    console.log(showMobileMenu)
  }

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log("Address: ", accounts[0]);
    setAddress(accounts[0]);
    setDisplayAddress(accounts[0].substring(0, 6) + "..." + accounts[0].substring(accounts[0].length - 4, accounts[0].length));
  }

  return (
    <>
      <section class="bg-center bg-no-repeat bg-cover" style={styleMain}>
        <nav class="container mx-auto lg:px-8 sm:flex items-center">
          <div class="flex items-center">
            <div class="inline mr-auto my-2 mx-1 px-4 py-2"><img src={iconMain} style={styleIconMain}></img></div>
            <div class="inline text-3xl text-white my-2 mx-1 px-4 py-2 block sm:hidden ml-auto">
              <a href="javascript:void(0);" class="icon" onClick={onclickHamburgerMenu}>
                <i class="fa fa-bars"></i>
              </a>
            </div>
          </div>
          <ul class="ml-auto flex items-center flex-col sm:flex-row text-white text-xl inline-block">
            <li class={"order-1 my-2 mx-1 px-4 py-2 sm:block " + (showMobileMenu ? "block" : "hidden")}>Origin</li>
            <li class={"order-2 my-2 mx-1 px-4 py-2 sm:block " + (showMobileMenu ? "block" : "hidden")}>Roadmap</li>
            <li class={"order-3 my-2 mx-1 px-4 py-2 sm:block " + (showMobileMenu ? "block" : "hidden")}>Team</li>
            <li class={"order-4 sm:block " + (showMobileMenu ? "block" : "hidden")}>
              <button class="border rounded-lg px-4 py-2 inline-block my-2 mx-1" onClick={connectWallet}>{displayAddress}</button>
            </li>
          </ul>
        </nav>
        <div class="container mx-auto h-full lg:px-8">
          <div class="flex flex-wrap text-white sm:py-32 pt-4 pb-16">
            <div class="flex-1">
              <h1 class="text-5xl sm:ml-40 py-4 mx-8">Welcome to <br /> <em>alt</em> BURGER</h1>
              <h2 class="text-2xl sm:ml-40 py-4 mx-8">4100 randomly generated 3D characters aping around the Ethereum blockchain as ERC-721 tokens and hosted on IPFS.</h2>
              <div class="sm:ml-40 mx-8 py-4">
                <button class="border rounded-lg inline-block px-8 py-2">Mint</button>
              </div>
            </div>
            <div class="flex-1">
              <video class="max-w-xs mx-8 sm:ml-auto sm:mr-40" src={vidMain} autoPlay loop muted playsInline></video>
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
