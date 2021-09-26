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
  const [showElementDesc, setShowElementDesc] = useState(false);
  const [strElementDesc, setStrElementDesc] = useState("");

  const styleIconMain = {
    width: "50px",
    height: "50px"
  }

  const styleMain = {
    // backgroundImage: "linear-gradient(to right, rgb(255, 245, 183), rgb(255, 245, 183)"
    backgroundImage: "linear-gradient(to right, #b2eee6, #b2eee6"
  }

  const styleOrigin = {
    // backgroundImage: "linear-gradient(to right, rgb(40, 40, 40), rgb(40, 40, 40)"
    backgroundImage: "linear-gradient(to right, #8ad6cc, #8ad6cc"
  }

  const styleRoadmap = {
    backgroundImage: "linear-gradient(to right, #f99192, #f99192",
  }

  const styleTeam = {
    backgroundImage: "linear-gradient(to right, #f97171, #f97171",
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
    width: "200px",
    height: "200px"
  }

  const onclickHamburgerMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    console.log(showMobileMenu)
  }

  const onclickElement = (id) => {
    setShowElementDesc(true);
    let color = "";

    switch (id) {
      case 1:
        color = "RED";
        break;
      case 2:
        color = "ORANGE";
        break;
      case 3:
        color = "YELLOW";
        break;
      case 4:
        color = "GREEN";
        break;
      case 5:
        color = "BLUE";
        break;
      case 6:
        color = "INDIGO";
        break;
      case 7:
        color = "VIOLET";
        break;
      case 8:
        color = "DARK";
        break;
      default:
        break;
    }

    let desc = `What is ${color}? \n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
    setStrElementDesc(desc);
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
          <ul class="ml-auto flex items-end lg:items-center font-extrabold flex-col lg:flex-row text-lg inline-block">
            <li class={"order-1 my-2 px-6 py-2 lg:block " + (showMobileMenu ? "block" : "hidden")}>Origin</li>
            <li class={"order-2 my-2 px-6 py-2 lg:block " + (showMobileMenu ? "block" : "hidden")}>Roadmap</li>
            <li class={"order-3 my-2 px-6 py-2 lg:block " + (showMobileMenu ? "block" : "hidden")}>Team</li>
            <li class={"order-4 px-6 lg:px-0 lg:block " + (showMobileMenu ? "block" : "hidden")}>
              <button class="border-2 border-black rounded-lg px-4 py-2 inline-block my-2 font-extrabold hover:bg-green-300" onClick={connectWallet}>{displayAddress}</button>
            </li>
          </ul>
        </nav>
        <div class="container mx-auto h-full px-4 lg:px-8">
          <div class="flex-col pb-16">
            <img class="max-w-xs -ml-16 -mb-16 -mt-12 lg:mt-0" src={gifMain} />
            <h1 class="text-3xl lg:text-7xl leading-tight tracking-tighter py-4"><span class="font-righteous">ALTBurger</span> collection by <span class="font-righteous">ALTLAB</span></h1>
            <h2 class="text-lg lg:text-xl py-4 font-dm-mono tracking-tighter">4096 + 4^ randomly generated 3D burgers aping around the Ethereum blockchain as ERC-721 tokens and hosted on IPFS.</h2>
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
        <div class="container mx-auto h-full px-4 lg:px-8 pt-10 lg:pt-20 pb-10 lg:pb-20">
          <div class="flex-col">
            <h2 class="text-2xl lg:text-6xl leading-tight tracking-tighter">Origin</h2>
            <div class="flex flex-wrap justify-around my-8">
              <div class="border border-black rounded-sm h-20 w-20 my-4" onClick={() => onclickElement(1)}>Red</div>
              <div class="border border-black rounded-sm h-20 w-20 my-4" onClick={() => onclickElement(2)}>Orange</div>
              <div class="border border-black rounded-sm h-20 w-20 my-4" onClick={() => onclickElement(3)}>Yellow</div>
              <div class="border border-black rounded-sm h-20 w-20 my-4" onClick={() => onclickElement(4)}>Green</div>
              <div class="border border-black rounded-sm h-20 w-20 my-4" onClick={() => onclickElement(5)}>Blue</div>
              <div class="border border-black rounded-sm h-20 w-20 my-4" onClick={() => onclickElement(6)}>Indigo</div>
              <div class="border border-black rounded-sm h-20 w-20 my-4" onClick={() => onclickElement(7)}>Violet</div>
              <div class="border border-black rounded-sm h-20 w-20 my-4" onClick={() => onclickElement(8)}>Dark</div>
            </div>
            <div class={"flex justify-around " + (showElementDesc ? "block" : "hidden")}>
              <div class="border-2 border-black text-xl rounded-lg p-8 h-full w-full lg:w-9/12 font-dm-mono">{strElementDesc}</div>
            </div>
          </div>
          {/*<div class="flex my-6 lg:-mb-28">
            <div class="rounded-full mx-auto hover:bg-red-600" style={styleElements}>
              <img src={imgRedElement}></img>
            </div>
            <div class="rounded-full mx-auto block lg:hidden hover:bg-purple-700" style={styleElements}></div>
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
          </div> */}

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
        <div class="container mx-auto h-full px-4 lg:px-8 pt-10 lg:pt-20 pb-10 lg:pb-20">
          <div class="flex">
            <h2 class="text-2xl lg:text-6xl leading-tight tracking-tighter">Roadmap</h2>
          </div>
        </div>
      </section>
      <section style={styleTeam}>
        <div class="container mx-auto h-full px-4 lg:px-8 pt-10 lg:pt-20 pb-10 lg:pb-20">
          <div class="flex">
            <h2 class="text-2xl lg:text-6xl leading-tight tracking-tighter">Team</h2>
          </div>
          <h3 class="text-lg lg:text-xl py-4 font-dm-mono tracking-tighter">ALT Labs is home to futuristic, moody, and cool 3D characters. We love anime and we love the 3D world. Our characters bring both worlds together. We live in a culture of collaboration and community. As we grow, we want to grow our community members, which are made up of creatives, technicians, and NFT enthusiasts.</h3>
          <div class="flex flex-wrap justify-around">
            <div class="flex items-center rounded-lg m-4 w-1/4">
              <img src={gifMain} class="h-40"></img>
              <div class="flex-col">
                <div class="text-3xl">JAD</div>
                <div class="font-dm-mono">Developer</div>
              </div>
            </div>
            <div class="flex items-center rounded-lg m-4 w-1/4">
              <img src={gifMain} class="h-40"></img>
              <div class="flex-col">
                <div class="text-3xl">Cirkus</div>
                <div class="font-dm-mono">Artist</div>
              </div>
            </div>
          </div>
          <div class="flex flex-wrap justify-around">
            <div class="flex items-center rounded-lg m-4 w-1/4">
              <img src={gifMain} class="h-40"></img>
              <div class="flex-col">
                <div class="text-3xl">Tofu</div>
                <div class="font-dm-mono">Artist</div>
              </div>
            </div>
            <div class="flex items-center rounded-lg m-4 w-1/4">
              <img src={gifMain} class="h-40"></img>
              <div class="flex-col">
                <div class="text-3xl">JUN</div>
                <div class="font-dm-mono">Community Manager</div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center text-xl py-8 font-dm-mono">© 2021 <span class="font-righteous">ALTLAB</span></div>
      </section>
    </>
  );
}

export default App;
