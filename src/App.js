import logo from './logo.svg';
import './App.scss';
import goldenBurger from './image/burger-gold.jpeg';
import iconBun from './image/bun.png';
import iconPatty from './image/patty.png';
import iconCheese from './image/cheese.png';
import iconVege from './image/vege.png';
import vidMain from "./image/vidMain.m4v"
import iconMain from "./image/burger-icon.png"
import imgBackground from "./image/background1.png"
import bgDark from "./image/bg-dark.jpeg"
import imgGreenElement from "./image/green-alter.png"
import imgRedElement from "./image/red-alter.png"
// import imgBlueElement from "./image/darkblue1.png"
import imgYellowElement from "./image/yellow-alter.png"
import imgOrangeElement from "./image/orange-alter.png"
import imgIndigoElement from "./image/indigo-alter.png"
import imgPinkElement from "./image/pink-alter.png"
import imgDarkElement from "./image/dark-alter.png"
import imgTealElement from "./image/teal-alter.png"
import imgLogo from "./image/burger-logo.png"
import imgRedBurgerTransparent from "./image/redBurgerTransparent.png"
import gifMain from "./image/main.gif"
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
    // backgroundImage: "linear-gradient(to right, rgb(255, 245, 183), rgb(255, 245, 183)"
    backgroundImage: "linear-gradient(to right, #b2eee6, #b2eee6"
  }

  const styleOrigin = {
    // backgroundImage: "linear-gradient(to right, #BAA8EF, #CAB8FF"
    backgroundImage: "linear-gradient(to right, rgb(40, 40, 40), rgb(40, 40, 40)"
    // backgroundImage: `url(${bgDark})`
    // height: "650px"
  }

  const styleRoadmap = {
    backgroundImage: "linear-gradient(to right, #101010, #101010",
  }

  const styleTeam = {
    backgroundImage: "linear-gradient(to right, #202020, #202020",
    // height: "650px"
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

  const styleElements = {
    width: "250px",
    height: "250px"
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
        <nav class="container mx-auto lg:px-8 lg:flex items-center">
          <div class="flex items-center">
            <div class="flex mr-auto my-2 mx-1 py-2 items-center">
              <img src={gifMain} style={styleIconMain}></img>
              <h1 class="text-4xl font-righteous">ALTLAB</h1>
            </div>
            <div class="inline text-3xl text-black my-2 mx-1 px-4 py-2 block lg:hidden ml-auto">
              <a href="javascript:void(0);" class="icon" onClick={onclickHamburgerMenu}>
                <i class="fa fa-bars"></i>
              </a>
            </div>
          </div>
          <ul class="ml-auto flex items-center font-extrabold flex-col lg:flex-row text-lg inline-block">
            <li class={"order-1 my-2 mx-1 px-4 py-2 lg:block " + (showMobileMenu ? "block" : "hidden")}>Origin</li>
            <li class={"order-2 my-2 mx-1 px-4 py-2 lg:block " + (showMobileMenu ? "block" : "hidden")}>Roadmap</li>
            <li class={"order-3 my-2 mx-1 px-4 py-2 lg:block " + (showMobileMenu ? "block" : "hidden")}>Team</li>
            <li class={"order-4 lg:block " + (showMobileMenu ? "block" : "hidden")}>
              <button class="border-2 border-black rounded-lg px-4 py-2 inline-block my-2 mx-1 font-extrabold hover:bg-green-300" onClick={connectWallet}>{displayAddress}</button>
            </li>
          </ul>
        </nav>
        <div class="container mx-auto h-full px-4 lg:px-8">
          <div class="flex-col pb-16">
            <img class="max-w-xs -ml-16 -mb-16 -mt-12 lg:mt-0" src={gifMain} />
            <h1 class="text-3xl lg:text-7xl leading-tight tracking-tighter py-4">A unique burger made from precious metal infuse with alterium</h1>
            <h2 class="text-lg lg:text-xl py-4 font-dm-mono tracking-tighter">4096 + 4^ randomly generated 3D characters aping around the Ethereum blockchain as ERC-721 tokens and hosted on IPFS.</h2>
            <h2 class="text-lg lg:text-xl py-4 font-dm-mono tracking-tighter">^Individually crafted by the 4 founders.</h2>
            <div class="mt-5">
              <button class="border-2 border-black font-extrabold rounded-full px-16 py-3 text-xl bg-green-100 hover:bg-green-300">MINT</button>
            </div>
            {/* <div class="flex-1 flex items-center">
              <video class="max-w-xs lg:max-w-screen-sm mx-auto" src={vidMain} autoPlay loop muted playsInline></video>
            </div> */}
          </div>
        </div>
      </section>
      <section class="bg-center bg-no-repeat bg-cover" style={styleOrigin}>
        {/* <div class="ticker-wrap">
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
        </div> */}
        <div class="text-white container mx-auto h-full">
          <div class="flex">
            <h2 class="text-6xl leading-tight tracking-tighter pt-4 mx-auto">Origin</h2>
          </div>
          <div class="flex my-6 lg:-mb-28">
            <div class="rounded-full mx-auto hover:bg-red-600" style={styleElements}>
              <img src={imgRedElement}></img>
            </div>
            {/* <div class="rounded-full mx-auto block lg:hidden hover:bg-purple-700" style={styleElements}></div> */}
          </div>
          <div class="flex my-6 lg:my-0">
            <div class="rounded-full mx-auto lg:ml-auto lg:mr-36 hover:bg-yellow-600" style={styleElements}>
              <img src={imgOrangeElement}></img>
            </div>
            <div class="rounded-full mx-auto lg:mr-auto lg:ml-36 hover:bg-yellow-300" style={styleElements}>
              <img src={imgYellowElement}></img>
            </div>
          </div>
          <div class="flex my-6 lg:-my-4">
            <div class="rounded-full mx-auto lg:ml-auto lg:mr-80 hover:bg-green-600" style={styleElements}>
              <img src={imgGreenElement}></img>
            </div>
            <div class="rounded-full mx-auto lg:mr-auto lg:ml-80 hover:bg-green-200" style={styleElements}>
              <img src={imgTealElement}></img>
            </div>
          </div>
          <div class="flex my-6 lg:my-0">
            <div class="rounded-full mx-auto lg:ml-auto lg:mr-36 hover:bg-pink-400" style={styleElements}>
              <img src={imgPinkElement}></img>
            </div>
            <div class="rounded-full mx-auto lg:mr-auto lg:ml-36 hover:bg-purple-700" style={styleElements}>
              <img src={imgIndigoElement}></img>
            </div>
          </div>
          <div class="flex lg:-mt-28 hidden lg:block">
            <div class="rounded-full mx-auto hover:bg-gray-400" style={styleElements}>
              <img src={imgDarkElement}></img>
            </div>
          </div>

          {/* <div class="grid grid-flow-row grid-cols-4 gap-4 mx-8 h-full py-32">
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
          </div> */}
        </div>
      </section>
      <section style={styleRoadmap}>
        <div class="text-white container mx-auto h-full">
          <div class="flex">
            <h2 class="text-4xl font-extrabold mx-8 my-8 mx-auto">Roadmap</h2>
          </div>
        </div>
      </section>
      <section style={styleTeam}>
        <div class="text-white container mx-auto h-full">
          <div class="flex">
            <h2 class="text-4xl font-extrabold mx-8 my-8 mx-auto">Team</h2>
          </div>
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
              JUN
            </div>
          </div>
        </div>
        <div class="text-center py-8 text-white">
          © 2021 ALT Labs
        </div>
      </section>
    </>
  );
}

export default App;
