"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[5135],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4836:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={sidebar_position:6,description:"How Nevermined NFTs work"},s="Bringing NFTs to a new Dimension",o={unversionedId:"getting-started/nvm-nfts",id:"getting-started/nvm-nfts",title:"Bringing NFTs to a new Dimension",description:"How Nevermined NFTs work",source:"@site/docs/getting-started/nvm-nfts.md",sourceDirName:"getting-started",slug:"/getting-started/nvm-nfts",permalink:"/docs/getting-started/nvm-nfts",draft:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/getting-started/nvm-nfts.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"How Nevermined NFTs work"},sidebar:"tutorialSidebar",previous:{title:"What Nevermined App does?",permalink:"/docs/getting-started/what-we-do"},next:{title:"Nevermined Subscriptions",permalink:"/docs/getting-started/subscription-plans"}},l={},c=[{value:"What&#39;s a NFT",id:"whats-a-nft",level:2},{value:"New generation of NFTs",id:"new-generation-of-nfts",level:3},{value:"Utility",id:"utility",level:3},{value:"ERC-721 vs ERC-1155",id:"erc-721-vs-erc-1155",level:3},{value:"What extras are provided by Nevermined NFTs?",id:"what-extras-are-provided-by-nevermined-nfts",level:2},{value:"Selling and Purchasing assets",id:"selling-and-purchasing-assets",level:3},{value:"Access Control",id:"access-control",level:3},{value:"Royalties and Secondary Markets",id:"royalties-and-secondary-markets",level:3},{value:"Search and Discovery",id:"search-and-discovery",level:3},{value:"Provenance",id:"provenance",level:3},{value:"Subscriptions",id:"subscriptions",level:3}],d={toc:c};function h(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"bringing-nfts-to-a-new-dimension"},"Bringing NFTs to a new Dimension"),(0,i.kt)("h2",{id:"whats-a-nft"},"What's a NFT"),(0,i.kt)("p",null,"NFTs represent ownership of digital assets in a decentralized manner. They allow that assets you own in a digital environment belong to you and not to a third-party.\nIn digital environments where assets don't live in a physical world, the ownership of them is more faith than a reality. Faith in infrastructure where these assets live, and faith in the owners of that infrastructure."),(0,i.kt)("p",null,'It\'s quite common to think you own that character you purchased to play a video game, that subscription to a streaming service, etc. But in reality these are just entries in a company database. These assets you "own" and probably you paid for, tomorrow can be updated or deleted (accidentally or not) by the entity running the infrastructure where these digital assets exist, your account can be "banned", etc. In any of these situations all your digital assets just evaporate. And good luck claiming for them.'),(0,i.kt)("p",null,'NFTs are good to remove that dependency on any third-party. They live in a blockchain not owned by anyone directly, and their code (the NFT Smart Contract code) who owns them and what can be done with them and what not. Something so "simple" has massive implications because it gravitates the "real ownership" and responsibility of the asset to the final user.'),(0,i.kt)("h3",{id:"new-generation-of-nfts"},"New generation of NFTs"),(0,i.kt)("p",null,"As any new technology, in the short history of NFTs they went through the typical journey of the emerging technology hype cycle."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Emerging Technologies Hype Cycle",src:n(6615).Z,width:"642",height:"375"})),(0,i.kt)("p",null,"During 2021 and 2022 we lived the infancy of the NFTs technology. Many digital assets were put online and traded. With a bigger focus in the speculative factor of the new thing, the first age of NFTs had some characteristics:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'The concept of ownership was not enforced, the NFT content creator didn\'t "own" the asset but a small'),(0,i.kt)("li",{parentName:"ul"},"From a users point of view, most of the NFTs didn't represent any real benefit vs traditional assets. Terms & conditions made that very clear."),(0,i.kt)("li",{parentName:"ul"},"No attribution, no provenance, no utility, just static pictures")),(0,i.kt)("p",null,"Beyond the fun of playing with a new technology, the first age of NFTs didn't provide any real value to content creators or users. There is an obvious disenchantment because they didn't provide any real improvement."),(0,i.kt)("p",null,"But with the lower hype came also more clarity and thinking on the benefits NFTs technology can bring to a digital world and their users. A second age of NFTs is coming with a different direction:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enforcement of ownership and content attribution to creators and users"),(0,i.kt)("li",{parentName:"ul"},"Activation of digital assets utility"),(0,i.kt)("li",{parentName:"ul"},"Remix/combination/interaction of NFTs"),(0,i.kt)("li",{parentName:"ul"},"Attribution to content creators, provenance and royalties for secondary market sales")),(0,i.kt)("p",null,"More information in the post: ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/nevermined-io/facilitating-asset-tokenization-with-nfts-3f725bfd51e2"},"Facilitating asset tokenization with NFTs"),"."),(0,i.kt)("h3",{id:"utility"},"Utility"),(0,i.kt)("p",null,'In a digital world assets need to be represented somehow. We spoke about the ownership of them. But also NFTs are useful to describe the digital asset, what are their properties and how that asset can be used. This is important because on top of the "ownership" concept we can build the "utility" concept. That means how the asset can be used and under what conditions.'),(0,i.kt)("p",null,"The utility allows that asset owners can define things like:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A piece of that asset can be sold"),(0,i.kt)("li",{parentName:"ul"},"That ownership from a third-party of a piece of an asset can give access to something exclusive"),(0,i.kt)("li",{parentName:"ul"},"That asset can be rented for being used"),(0,i.kt)("li",{parentName:"ul"},"Or lended"),(0,i.kt)("li",{parentName:"ul"},"etc, etc")),(0,i.kt)("p",null,"There is a big territory to explore where content owners and developers can design and activate different kinds of utilities on this new kind of digital assets."),(0,i.kt)("h3",{id:"erc-721-vs-erc-1155"},"ERC-721 vs ERC-1155"),(0,i.kt)("p",null,"There are many different standards in different states defining NFTs and their potential characteristics. But the 2 main standards are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-721/"},"ERC-721")," for Non-Fungible NFTs. This allow to tokenize digital assets in several pieces. And each piece is unique. An anology in the physical world would be a photography. An artist could cut the original negative in 10 pieces and sell to the collectors. Each piece is unique and different to the others."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("a",{parentName:"li",href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/"},"ERC-1155")," describes the Multi-Token standard. It allows to tokenize assets where each piece is not distinguble of the others. An anology would be the money. If dollars can be represented via a NFT ERC-1155 because my dollar is not distingueable of your dollar.")),(0,i.kt)("p",null,"Each of these standards are usful and fit better depending on the use case. "),(0,i.kt)("h2",{id:"what-extras-are-provided-by-nevermined-nfts"},"What extras are provided by Nevermined NFTs?"),(0,i.kt)("p",null,"In Nevermined ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/contracts/tree/master/contracts/token"},"we built")," some additional features on top of both standards that can be used to deliver more powerful use cases.\nSome of these extra features are the following:"),(0,i.kt)("h3",{id:"selling-and-purchasing-assets"},"Selling and Purchasing assets"),(0,i.kt)("p",null,"Via the Nevermined Service Execution Agreements, content creators and their users can trade around digital assets in a decentralized manner. This means content creators can define under what conditions they want to sell their NFTs, and users can purchase them. The Nevermined Smart Contracts work as an intermediary of that process and ensure this process is executed securely for all the parties."),(0,i.kt)("h3",{id:"access-control"},"Access Control"),(0,i.kt)("p",null,"Nevermined includes an access control piece that allows content creators to provide special access to certain assets or services under some circumstances. This enables powerful use cases like exclusive access, enabling the users holding some NFTs to get access to something exclusive and unique."),(0,i.kt)("h3",{id:"royalties-and-secondary-markets"},"Royalties and Secondary Markets"),(0,i.kt)("p",null,"When content creators sell NFTs associated with their creations they lose control of who owns what. Nevermined enforces royalties in sales in secondary markets, allowing content creators to define upfront the royalties they want to receive, and collect them if there is a secondary market sale."),(0,i.kt)("h3",{id:"search-and-discovery"},"Search and Discovery"),(0,i.kt)("p",null,"To facilitate the discovery of digital assets and the NFTs attached to them when assets are registered into Nevermined the creator can define some metadata. This metadata can be stored in an immutable manner too on IPFS or Filecoin."),(0,i.kt)("h3",{id:"provenance"},"Provenance"),(0,i.kt)("p",null,"Nevermined Smart Contracts provide a provenance track record that register all the interactions around digital assets. More information in this ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/nevermined-io/provenance-everything-has-a-story-behind-1275e3693d3f"},"Provenance blog post"),"."),(0,i.kt)("h3",{id:"subscriptions"},"Subscriptions"),(0,i.kt)("p",null,"Nevermined allows content creators to control the access to exclusive stuff to users who are subscribed. These subscriptions can be defined in a flexible manner and specify a duration. More information in this post: ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/nevermined-io/bringing-online-subscriptions-into-web3-with-nfts-5fc2e9570122"},"Bringing online subscriptions into Web3 with NFTs"),"."))}h.isMDXComponent=!0},6615:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hype_cycle-90515f5e29c976a7eb2071917f770c81.png"}}]);