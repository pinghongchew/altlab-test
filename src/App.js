import { useEffect, useState } from 'react';
import './App.scss';
import gifMain from "./asset/main.gif";
import imgShow1 from "./asset/1.jpeg";
import imgShow2 from "./asset/2.jpeg";
import imgShow3 from "./asset/3.jpeg";
import imgShow4 from "./asset/4.jpeg";
import imgShow5 from "./asset/5.jpeg";
import imgShow6 from "./asset/6.jpeg";
import imgShow7 from "./asset/7.jpeg";
import imgShow8 from "./asset/8.jpeg";

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

  const styleShow = {
    // backgroundImage: "linear-gradient(to right, rgb(40, 40, 40), rgb(40, 40, 40)"
    backgroundImage: "linear-gradient(to right, #8ad6cc, #8ad6cc"
  }

  const stylePerks = {
    // backgroundImage: "linear-gradient(to right, rgb(40, 40, 40), rgb(40, 40, 40)"
    backgroundImage: "linear-gradient(to right, #fff5c1, #fff5c1"
  }

  const styleRoadmap = {
    backgroundImage: "linear-gradient(to right, #f99192, #f99192",
  }

  const styleTeam = {
    // backgroundImage: "linear-gradient(to right, #f97171, #f97171",
    backgroundImage: "linear-gradient(to right, #96d0fa, #96d0fa"
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

  const connectWallet = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    console.log("Address: ", accounts[0]);
    setAddress(accounts[0]);
    setDisplayAddress(accounts[0].substring(0, 6) + "..." + accounts[0].substring(accounts[0].length - 4, accounts[0].length));
  }

  return (
    <>
      <section class="bg-center bg-no-repeat bg-cover" style={styleMain}>
        <nav class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="flex items-center py-4">
            <div class="flex mr-auto items-center">
              <img src={gifMain} style={styleIconMain}></img>
              <h1 class="text-3xl font-righteous">Alt Lab</h1>
            </div>
            <button class="disabled:opacity-50 border-2 border-gray-700 rounded-full px-6 py-2 inline-block font-extrabold hover:bg-green-300 disabled:bg-transparent" disabled onClick={connectWallet}>{displayAddress}</button>
          </div>
        </nav>

        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="flex-col pb-16">
            <img class="max-w-xs -ml-16 -mb-16 -mt-12 lg:mt-0" src={gifMain} />
            <h1 class="text-3xl lg:text-7xl leading-tight tracking-tighter py-4 font-righteous">Welcome to Alt Burger</h1>
            <h2 class="text-lg lg:text-xl py-4 font-dm-mono tracking-tighter">Alt Burger is a collection of 300 NFT. Like every artists create what they love, Alt burger ideas came from our founders obsess love for burger. To embrace their love for burgers further, they infused rare elements available from Altiverse into burger and make it into Alt Burger.</h2>
            <p class="text-lg lg:text-xl py-2 font-dm-mono tracking-tighter">&gt; First ERC-721 tokens by Alt Lab.</p>
            <p class="text-lg lg:text-xl py-2 font-dm-mono tracking-tighter">&gt; Hosted on IPFS.</p>
            <div class="mt-5">
              <button class="disabled:opacity-50 border-2 border-black font-extrabold rounded-full px-16 py-3 text-xl bg-green-100 hover:bg-green-300 disabled:bg-transparent" disabled>MINT</button>
            </div>
            {/* <div class="flex-1 flex items-center">
              <video class="max-w-xs lg:max-w-screen-sm mx-auto" src={vidMain} autoPlay loop muted playsInline></video>
            </div> */}
          </div>
        </div>
      </section>

      <section class="bg-center bg-no-repeat bg-cover" style={styleShow}>
        <div class="mx-auto px-0">
          <div class="flex flex-nowrap overflow-hidden justify-start py-10">
            <img class="max-h-40 sm:max-h-60 my-2 mx-4 rounded-full ticker" src={imgShow1}></img>
            <img class="max-h-40 sm:max-h-60 my-2 mx-4 rounded-full ticker" src={imgShow2}></img>
            <img class="max-h-40 sm:max-h-60 my-2 mx-4 rounded-full ticker" src={imgShow3}></img>
            <img class="max-h-40 sm:max-h-60 my-2 mx-4 rounded-full ticker" src={imgShow4}></img>
            <img class="max-h-40 sm:max-h-60 my-2 mx-4 rounded-full ticker" src={imgShow5}></img>
            <img class="max-h-40 sm:max-h-60 my-2 mx-4 rounded-full ticker" src={imgShow6}></img>
            <img class="max-h-40 sm:max-h-60 my-2 mx-4 rounded-full ticker" src={imgShow7}></img>
            <img class="max-h-40 sm:max-h-60 my-2 mx-4 rounded-full ticker" src={imgShow8}></img>
            <img class="max-h-40 sm:max-h-60 my-2 mx-4 rounded-full ticker" src={imgShow1}></img>
            <img class="max-h-40 sm:max-h-60 my-2 mx-4 rounded-full ticker" src={imgShow2}></img>
            <img class="max-h-40 sm:max-h-60 my-2 mx-4 rounded-full ticker" src={imgShow3}></img>
            <img class="max-h-40 sm:max-h-60 my-2 mx-4 rounded-full ticker" src={imgShow4}></img>
            <img class="max-h-40 sm:max-h-60 my-2 mx-4 rounded-full ticker" src={imgShow5}></img>
            <img class="max-h-40 sm:max-h-60 my-2 mx-4 rounded-full ticker" src={imgShow6}></img>
            <img class="max-h-40 sm:max-h-60 my-2 mx-4 rounded-full ticker" src={imgShow7}></img>
            <img class="max-h-40 sm:max-h-60 my-2 mx-4 rounded-full ticker" src={imgShow8}></img>
            <img class="max-h-40 sm:max-h-60 my-2 mx-4 rounded-full ticker" src={imgShow1}></img>
            <img class="max-h-40 sm:max-h-60 my-2 mx-4 rounded-full ticker" src={imgShow2}></img>
          </div>
        </div>
      </section>

      <section style={stylePerks}>
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="flex-col py-10 sm:py-20">
            <h2 class="text-4xl lg:text-5xl font-righteous tracking-normal">Alt Perks</h2>
            <div class="flex flex-wrap justify-around pt-4 sm:pt-10">
              <div class="rounded-xl w-full sm:w-5/12 p-8 my-4 h-auto bg-green-100">
                <div class="text-2xl">Unique NFTs</div>
                <div class="font-dm-mono pt-2">Each NFT is minted onto the Etheruem block chain ensuring the rightful owner of each Alt Burger.</div>
              </div>
              <div class="rounded-xl w-full sm:w-5/12 p-8 my-4 h-auto bg-green-100">
                <div class="text-2xl">Community First</div>
                <div class="font-dm-mono pt-2">We always listen to your ideas and suggestions. So join our community and voice out, your suggestion may be our next project.</div>
              </div>
              <div class="rounded-xl w-full sm:w-5/12 p-8 my-4 h-auto bg-green-100">
                <div class="text-2xl">Commercial Rights</div>
                <div class="font-dm-mono pt-2">You have full commercial and Intellectual rights on the NFT, feel free to let your imagination runs wild and create your own derivatives.</div>
              </div>
              <div class="rounded-xl w-full sm:w-5/12 p-8 my-4 h-auto bg-green-100">
                <div class="text-2xl">Exclusive Benefits</div>
                <div class="font-dm-mono pt-2">Every Proud Alt Burger owners enjoy early access to our future projects.</div>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section style={styleRoadmap}>
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="flex-col py-10 sm:py-20">
            <h2 class="text-4xl lg:text-5xl font-righteous tracking-normal">Our Kitchen</h2>
            <p class="text-md sm:text-xl font-dm-mono pt-2 sm:pt-4 pb-4 sm:pb-10">We are the cook, and we will serve as long as there is a community. After our first release of the Alt Burger as our first menu, we have lots of menus planned and prepped in the kitchen for our community. Breaking the boundaries and stepping into the beyond such as Metaverse and opening a merch shop are always our ultimate goal. But in the meantime, here are our next steps:</p>
            <div class="flex border rounded-lg p-8 my-4 bg-purple-100 font-dm-mono text-lg items-center">
              <div class="text-4xl font-bold w-20 flex-shrink-0 animate-bounce hidden sm:block">1</div>
              <div class="flex flex-col">
                <h4 class="font-righteous tracking-wide text-2xl">Alt Burger</h4>
                <p>Alt Burger will be our very first menu to be released in the NFT world, consist of 300 limited and uniquely crafted burgers to be served.</p>
              </div>
            </div>
            <div class="flex border rounded-lg p-8 my-4 bg-purple-100 font-dm-mono text-lg items-center">
              <div class="text-4xl font-bold w-20 flex-shrink-0 animate-bounce hidden sm:block">2</div>
              <div class="flex flex-col">
                <h4 class="font-righteous tracking-wide text-2xl">Our Community</h4>
                <p>Our kitchen is built around the community; feedbacks, ideas, suggestions will all be part of our upcoming menus and shape our next project. On top of that, Alt Burger owners will be given special privileges and discounts on our upcoming projects.</p>
              </div>
            </div>
            <div class="flex border rounded-lg p-8 my-4 bg-purple-100 font-dm-mono text-lg items-center">
              <div class="text-4xl font-bold w-20 flex-shrink-0 animate-bounce hidden sm:block">3</div>
              <div class="flex flex-col">
                <h4 class="font-righteous tracking-wide text-2xl">Our Menus</h4>
                <p>We are not stopping here! After the release of Alt Burger, with enough support, we are going to work on more exciting menus to satisfy the hunger/thirst of the community and the NFT world.</p>
              </div>
            </div>
            <div class="flex border rounded-lg p-8 my-4 bg-purple-100 font-dm-mono text-lg items-center">
              <div class="text-4xl font-bold w-20 flex-shrink-0 animate-bounce hidden sm:block">4</div>
              <div class="flex flex-col">
                <h4 class="font-righteous tracking-wide text-2xl">Giving Back</h4>
                <p>Giving back to the community is always on our mind. Giveaways and charities are also part of our plans in future projects. </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={styleTeam}>
        <div class="max-w-7xl mx-auto px-6 lg:px-8">
          <div class="flex-col py-10 sm:py-20">
            <h2 class="text-4xl lg:text-5xl font-righteous tracking-normal">Meet our Team</h2>
            <p class="text-md sm:text-xl font-dm-mono pt-2 sm:pt-4 pb-4 sm:pb-10">We are four close friends who truly believe in the blockchain technology and the NFT world. Being a foodie as we are, we created Alt Burgers as a platform for us to express our love for burgers and hope to share our creations with the world. Also, we are engineers.</p>
            <div class="flex flex-wrap lg:ml-0 lg:justify-around">
              <div class="flex items-center rounded-lg mx-auto my-2 w-full sm:w-5/12 bg-yellow-100 rounded-lg p-6">
                <img src={gifMain} class="h-40"></img>
                <div class="flex-col">
                  <div class="text-3xl">JAD</div>
                  <div class="font-dm-mono">Software engineer with a passion for Web3 and truly believes that it will changes the world of art, gaming and more.  </div>
                </div>
              </div>
              <div class="flex items-center rounded-lg mx-auto my-2 w-full sm:w-5/12 bg-yellow-100 rounded-lg p-6">
                <img src={gifMain} class="h-40"></img>
                <div class="flex-col">
                  <div class="text-3xl">Cirkus</div>
                  <div class="font-dm-mono">Artist</div>
                </div>
              </div>
              <div class="flex items-center rounded-lg mx-auto my-2 w-full sm:w-5/12 bg-yellow-100 rounded-lg p-6">
                <img src={gifMain} class="h-40"></img>
                <div class="flex-col">
                  <div class="text-3xl">Tofu</div>
                  <div class="font-dm-mono">Artist</div>
                </div>
              </div>
              <div class="flex items-center rounded-lg mx-auto my-2 w-full sm:w-5/12 bg-yellow-100 rounded-lg p-6">
                <img src={gifMain} class="h-40"></img>
                <div class="flex-col">
                  <div class="text-3xl">JUN</div>
                  <div class="font-dm-mono">Community Manager</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center text-xl py-8 font-dm-mono">© 2021 <span class="font-righteous">Alt Lab</span></div>
      </section>
    </>
  );
}

export default App;
