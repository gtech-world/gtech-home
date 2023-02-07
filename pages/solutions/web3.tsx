import { HeaderLayout } from "@components/common/headerLayout";
import {Button} from "@components/button";


function Top(){
  return(
    <div className="h-[44.625rem] w-full bg-[url(/images/map.png)] bg-no-repeat bg-[length:auto_100%] bg-center flex justify-center items-center px-9 md:h-[26rem]">
      <div className="bg-green/[.92] p-8 text-[2rem] leading-[2.75rem] text-yellow md:text-lg md:text-center">
        <h3 className="text-white font-bold text-5xl md:text-[1.75rem]">Web3-featured Data Solutions</h3>
        <p className="mt-3">Case: The Redefined Web3</p>
        <p className="">Storage Solution Safeguarding Key Business Data</p>
      </div>
    </div>
  )
}

function StorageInitiative(){
  return(
    <div className="flex flex-col items-center pb-20 md:pb-8">
      <h3 className="my-16 text-center md:px-8 md:my-12">Cloud3: A Web3 Cloud Storage Initiative</h3>
      <div className="flex md:flex-col md:px-3">
        <img className="mx-auto md:w-full md:max-w-[20.875rem]" src="/images/web3_pic.svg" alt=""/>
        <div className="ml-14 w-[39.75rem] leading-6 md:w-full md:ml-0 md:text-center md:mt-8">
          <h4 className="text-2xl font-bold md:text-base">How Web3 Technologies Benefit Data Storage?</h4>
          <p className="mt-5">
            Web3 technologies generally refer to several interdependent technologies such like blockchain, IPFS and other decentralized protocols, which are still in fast-paced evolution in the Web3 space.
          </p>
          <p>
            When taken use of properly, these technologies together produce great features for many business use cases where data storage is concerned. For example, the data stored will be granted with multiple replicas across the globe, and assured with extremely high availability, mathmatically secure encryption, tamper-proof immutability and programmable/customizable authorization upon specific customer demands.
          </p>
          <h4 className="text-2xl font-bold mb-5 mt-8 md:text-base">Cloud3 - Cloud Storage Redefined</h4>
          <p>
            Cloud3 is a suite of featured products and solutions to help build Web3.0 experiences with decentralized data storage, retrieval and management, in a user-friendly and developer-friendly way.
          </p>
          <p>
            Cloud3 believes that a good data storage solution should bring more trust and credibility to the data managed and stored by the Cloud.
          </p>
        </div>
      </div>
    </div>
  )
}

function StorageMiddlewares(){
  return(
    <div className="w-full bg-bgc flex flex-col items-center pt-16 pb-16 md:pt-8 md:pb-10">
      <h3 className="text-green mb-20 px-12 text-center md:mb-8">Key Cloud Storage Middlewares in Web3</h3>
      <div className="flex items-center md:flex-col-reverse">
        <div className="w-[29.875rem] md:w-full md:text-center md:mt-8">
          <div className="px-7">
            <p>
              Cloud3 defines what cloud storage middlewares should look like in Web3 - every storage bucket is a NFT, and every IPFS gateway is a NFT.
            </p>
            <h5 className="mt-8 mb-5">
              Store files in W3Buckets: Decentralized, Guaranteed & Alive.
            </h5>
            <p>
              All contents in the W3Buckets are immutable, decentralized stored,  guaranteed with up to permanent persistence in the open internet, and most importantly, owned & controlled by the NFT owner.
            </p>
            <h5 className="mt-8 mb-5">
              IPFS Remote Pin
            </h5>
            <p>Storage service are called by Standard IPFS Remote Pinning Service APIs that make your files always available (alive!) on IPFS with multiple replicas and accessible from everywhere.</p>
          </div>
        </div>
        <div className="flex ml-24 md:flex-col md:px-8 md:ml-0">
          <div className="w-[21.75rem] border-2 border-black bg-white rounded-l-xl md:rounded-t-xl md:rounded-b-none md:pb-2">
            <div className="flex flex-col items-center border-b-2 border-black pt-5 pb-4">
              <div className="text-[1.75rem] font-medium">PaaS</div>
              <span className="leading-[1.3125rem] mt-[.625rem]">Platform-as-a-Service</span>
            </div>
            <div className="flex flex-col items-center pt-6 pb-7">
              <div className="flex items-center text-4xl">
                <span className="mr-2">W3</span>
                <img src="/images/container.svg" />
                <span className="px-3">+</span>
                <span className="mr-2">W3</span>
                <img src="/images/upload.svg" />
              </div>
              <h6
                // onClick={() => scrollToAnchor("nft")}
                className="text-[1.35rem] leading-[29px] font-medium leading-7 mt-6 mb-2 underline no-skip-ink cursor-pointer"
              >
                W3Buckets
              </h6>
              <span className="leading-[1.375rem]">NFT-nized IPFS storage buckets</span>
              <h6
                // onClick={() => scrollToAnchor("nft")}
                className="text-[1.35rem] leading-[29px] font-medium leading-7 mt-4 mb-2 underline no-skip-ink cursor-pointer"
              >
                W3Gateways
              </h6>
              <span className="leading-[1.375rem]">NFT-nized IPFS Gateways</span>
            </div>
          </div>
          <div className="w-[21.75rem] border-l-2 border-black border-2 border-black bg-white rounded-r-xl md:mt-3 md:rounded-b-xl md:rounded-t-none md:pb-12">
            <div className="flex flex-col items-center border-b-2 border-black pt-5 pb-4">
              <div className="text-[1.75rem] font-medium">SaaS</div>
              <span className="leading-[1.3125rem] mt-[.625rem]">Software-as-a-Service</span>
            </div>
            <div className="flex flex-col items-center pt-6">
              <div className="flex items-center text-4xl">
                <span className="mr-2">W3</span>
                <img src="/images/widget.svg" alt=""/>
              </div>
              <h6
                // onClick={() => scrollToAnchor("widget")}
                className="text-[1.35rem] leading-[29px] font-medium leading-7 mt-6 mb-2 underline no-skip-ink cursor-pointer"
              >
                Web3 Storage Widgets
              </h6>
              <p className="w-[298px] leading-[1.375rem] text-center">
                Rich-text Editor/Publisher Widget IPFS File Storage Widget
              </p>
              <p className="w-[298px] leading-[1.375rem] text-center">IPFS Storage Retrieval Widget and more...</p>
            </div>
          </div>
        </div>
      </div>
      <Button onClick={()=>window.open(`https://cloud3.cc/`, "_blank")} className="w-96 mt-16 md:max-w-[19.375rem] md:mt-8" text="View More in Cloud3" />
    </div>
  )
}

function StorageCases(){
  const data = [
    {
      title: 'UNISWAP - The World’s Leading Decentralized Exchange DApp',
      text: 'One of the world’s largest De-Fi protocol, Uniswap, is using Cloud3’s solution to store its frontend codes for top-level data security, immutability and availability worldwide. Uniswap is dealing with billions of crypto asset trades every single day, making it crucial to keep the entrance safe and accessible with great assurance.',
      imgUrl: '/images/uniswap.svg'
    },
    {
      title: 'AAVE - The Top Open Source Liquidity Protocol for Crypto Assets',
      text: 'The ethereum-based crypto asset collateral & lending protocol AAVE is taking advantage of the Cloud3 solution to make sure the ‘right’, unhacked websites and frontend repositories are always exposed to the users. This helps to protect $10 billion USD equivalent assets that are locked in AAVE’s protocol. The Cloud3 solution guarantees super long term (100+ years) perseverance of its precious data on the internet.',
      imgUrl: '/images/aave.svg'
    }
  ]
  return(
    <div className="flex flex-col items-center bg-white">
      <h3 className="text-center my-16 px-12 md:my-8">Discover Real Web3 Storage Use Cases </h3>
      <div className="flex flex-col mt-10 md:mt-0">
        {
          data.map((v,i)=>{
            return(
              <div className="mb-20 flex px-3 md:flex-col md:mb-10">
                <img className="mx-auto md:w-[17.125rem]" src={v.imgUrl} alt=""/>
                <div className="w-[50.75rem] ml-12 md:w-full md:ml-0 md:text-center">
                  <h5 className="px-12 md:mt-4">{v.title}</h5>
                  <p className="mt-5">{v.text}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default function Index() {
  return(
    <HeaderLayout>
      <Top />
      <StorageInitiative />
      <StorageMiddlewares />
      <StorageCases />
    </HeaderLayout>
  )
}
