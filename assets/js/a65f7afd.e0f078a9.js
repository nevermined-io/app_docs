(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[63],{3905:(e,t,a)=>{"use strict";a.d(t,{Zo:()=>u,kt:()=>d});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var m=n.createContext({}),c=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,m=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),g=c(a),d=i,p=g["".concat(m,".").concat(d)]||g[d]||l[d]||o;return a?n.createElement(p,r(r({ref:t},u),{},{components:a})):n.createElement(p,r({ref:t},u))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=g;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},1358:(e,t,a)=>{"use strict";a.d(t,{Z:()=>h});var n=a(7294),i=a(6010),o=a(2802),r=a(9960),s=a(3919),m=a(5999);const c="cardContainer_fWXF",u="cardTitle_rnsV",l="cardDescription_PWke";function g(e){let{defaultIcon:t,iconStaticFolderPath:o,iconClassName:r}=e;const[s,m]=(0,n.useState)();return(0,n.useEffect)((()=>{o&&a(2349)(`./${o}`).then((e=>m(e.default)))}),[o]),o&&s?n.createElement("span",{className:"sidebar-item-doc-card__icon-wrapper"},n.createElement("img",{src:s,className:(0,i.Z)("sidebar-item-doc-card__icon",r)})):o?null:n.createElement("span",{className:"sidebar-item-doc-card__icon-wrapper"},t)}function d(e){let{href:t,children:a,className:o}=e;return n.createElement(r.Z,{href:t,className:(0,i.Z)("card",c,o)},a)}function p(e){let{href:t,icon:a,title:o,description:r,className:s}=e;return n.createElement(d,{href:t,className:s},a,n.createElement("h2",{className:(0,i.Z)("sidebar-item-doc-card__title",u),title:o},o),r&&n.createElement("p",{className:(0,i.Z)("sidebar-item-doc-card__description",l),title:r},r))}function b(e){var t,a,r;let{item:s}=e;const c=(0,o.Wl)(s);return c?n.createElement(p,{href:c,icon:n.createElement(g,{defaultIcon:"\ud83d\uddc3\ufe0f",iconStaticFolderPath:null==(t=s.customProps)?void 0:t.iconStaticFolderPath,iconClassName:null==(a=s.customProps)?void 0:a.iconClassName}),title:s.label,description:(0,m.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:s.items.length}),className:(0,i.Z)("sidebar-item-doc-card","sidebar-item-doc-card__category",null==(r=s.customProps)?void 0:r.className)}):null}function _(e){var t,a,r;let{item:m}=e;const c=(0,s.Z)(m.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",u=(0,o.xz)(m.docId??void 0);return n.createElement(p,{href:m.href,icon:n.createElement(g,{defaultIcon:c,iconStaticFolderPath:null==(t=m.customProps)?void 0:t.iconStaticFolderPath,iconClassName:null==(a=m.customProps)?void 0:a.iconClassName}),title:m.label,description:null==u?void 0:u.description,className:(0,i.Z)("sidebar-item-doc-card","sidebar-item-doc-card__link",null==(r=m.customProps)?void 0:r.className)})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(_,{item:t});case"category":return n.createElement(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function f(e){let{className:t}=e;const a=(0,o.jA)();return n.createElement(h,{items:a.items,className:t})}function h(e){const{items:t,className:a}=e;if(!t)return n.createElement(f,e);const r=(0,o.MN)(t);return n.createElement("section",{className:(0,i.Z)("row","sidebar-item-doc-card__row",a)},r.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}},326:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>g,frontMatter:()=>r,metadata:()=>m,toc:()=>u});var n=a(7462),i=(a(7294),a(3905)),o=a(1358);const r={sidebar_position:1,description:"Get Started with the Tutorials"},s="Getting Started with the Tutorials",m={unversionedId:"tutorials/index",id:"tutorials/index",title:"Getting Started with the Tutorials",description:"Get Started with the Tutorials",source:"@site/docs/tutorials/index.mdx",sourceDirName:"tutorials",slug:"/tutorials/",permalink:"/docs/tutorials/",draft:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Get Started with the Tutorials"},sidebar:"tutorialSidebar",previous:{title:"Frequently Asked Questions (FAQ)",permalink:"/docs/getting-started/faq"},next:{title:"How to set up a MetaMask wallet",permalink:"/docs/tutorials/metamask"}},c={},u=[],l={toc:u};function g(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-the-tutorials"},"Getting Started with the Tutorials"),(0,i.kt)("p",null,"In order to register, token-gate and monetize your web services or your data, the Nevermined App guides you through a few steps. "),(0,i.kt)("p",null,"These tutorials are a detailed guide for each of the different steps. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you need further help or you miss a tutorial, feel free to let us know via ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/GZju2qScKq"},"Discord"))),(0,i.kt)(o.Z,{mdxType:"DocCardList"}))}g.isMDXComponent=!0},2349:(e,t,a)=>{var n={"./CNAME":[267,7,267],"./contracts/AaveBorrowCondition.mumbai":[1178,3,1178],"./contracts/AaveBorrowCondition.mumbai.json":[1178,3,1178],"./contracts/AaveCollateralDepositCondition.mumbai":[8735,3,8735],"./contracts/AaveCollateralDepositCondition.mumbai.json":[8735,3,8735],"./contracts/AaveCollateralWithdrawCondition.mumbai":[257,3,257],"./contracts/AaveCollateralWithdrawCondition.mumbai.json":[257,3,257],"./contracts/AaveCreditTemplate.mumbai":[531,3,531],"./contracts/AaveCreditTemplate.mumbai.json":[531,3,531],"./contracts/AaveCreditVault.mumbai":[6486,3,6486],"./contracts/AaveCreditVault.mumbai.json":[6486,3,6486],"./contracts/AaveRepayCondition.mumbai":[6581,3,6581],"./contracts/AaveRepayCondition.mumbai.json":[6581,3,6581],"./contracts/AccessCondition.mumbai":[7017,3,7017],"./contracts/AccessCondition.mumbai.json":[7017,3,7017],"./contracts/AccessProofCondition.mumbai":[7140,3,7140],"./contracts/AccessProofCondition.mumbai.json":[7140,3,7140],"./contracts/AccessProofTemplate.mumbai":[237,3,237],"./contracts/AccessProofTemplate.mumbai.json":[237,3,237],"./contracts/AccessTemplate.mumbai":[9665,3,9665],"./contracts/AccessTemplate.mumbai.json":[9665,3,9665],"./contracts/AgreementStoreManager.mumbai":[7754,3,7754],"./contracts/AgreementStoreManager.mumbai.json":[7754,3,7754],"./contracts/ComputeExecutionCondition.mumbai":[9661,3,9661],"./contracts/ComputeExecutionCondition.mumbai.json":[9661,3,9661],"./contracts/ConditionStoreManager.mumbai":[8046,3,8046],"./contracts/ConditionStoreManager.mumbai.json":[8046,3,8046],"./contracts/DIDRegistry.mumbai":[5985,3,5985],"./contracts/DIDRegistry.mumbai.json":[5985,3,5985],"./contracts/DIDSalesTemplate.mumbai":[8114,3,8114],"./contracts/DIDSalesTemplate.mumbai.json":[8114,3,8114],"./contracts/Dispenser.mumbai":[6575,3,6575],"./contracts/Dispenser.mumbai.json":[6575,3,6575],"./contracts/DistributeNFTCollateralCondition.mumbai":[9575,3,9575],"./contracts/DistributeNFTCollateralCondition.mumbai.json":[9575,3,9575],"./contracts/EscrowComputeExecutionTemplate.mumbai":[5730,3,5730],"./contracts/EscrowComputeExecutionTemplate.mumbai.json":[5730,3,5730],"./contracts/EscrowPaymentCondition.mumbai":[3601,3,3601],"./contracts/EscrowPaymentCondition.mumbai.json":[3601,3,3601],"./contracts/HashLockCondition.mumbai":[4942,3,4942],"./contracts/HashLockCondition.mumbai.json":[4942,3,4942],"./contracts/LockPaymentCondition.mumbai":[9512,3,9512],"./contracts/LockPaymentCondition.mumbai.json":[9512,3,9512],"./contracts/NFT1155Upgradeable.mumbai":[4391,3,4391],"./contracts/NFT1155Upgradeable.mumbai.json":[4391,3,4391],"./contracts/NFT721AccessProofTemplate.mumbai":[5674,3,5674],"./contracts/NFT721AccessProofTemplate.mumbai.json":[5674,3,5674],"./contracts/NFT721AccessSwapTemplate.mumbai":[449,3,449],"./contracts/NFT721AccessSwapTemplate.mumbai.json":[449,3,449],"./contracts/NFT721AccessTemplate.mumbai":[3108,3,3108],"./contracts/NFT721AccessTemplate.mumbai.json":[3108,3,3108],"./contracts/NFT721EscrowPaymentCondition.mumbai":[6418,3,6418],"./contracts/NFT721EscrowPaymentCondition.mumbai.json":[6418,3,6418],"./contracts/NFT721HolderCondition.mumbai":[1048,3,1048],"./contracts/NFT721HolderCondition.mumbai.json":[1048,3,1048],"./contracts/NFT721LockCondition.mumbai":[7846,3,3310],"./contracts/NFT721LockCondition.mumbai.json":[7846,3,3310],"./contracts/NFT721SalesTemplate.mumbai":[6114,3,6114],"./contracts/NFT721SalesTemplate.mumbai.json":[6114,3,6114],"./contracts/NFT721SalesWithAccessTemplate.mumbai":[8854,3,8854],"./contracts/NFT721SalesWithAccessTemplate.mumbai.json":[8854,3,8854],"./contracts/NFT721Upgradeable.mumbai":[3355,3,3355],"./contracts/NFT721Upgradeable.mumbai.json":[3355,3,3355],"./contracts/NFTAccessCondition.mumbai":[8991,3,8991],"./contracts/NFTAccessCondition.mumbai.json":[8991,3,8991],"./contracts/NFTAccessProofTemplate.mumbai":[146,3,146],"./contracts/NFTAccessProofTemplate.mumbai.json":[146,3,146],"./contracts/NFTAccessSwapTemplate.mumbai":[7227,3,7227],"./contracts/NFTAccessSwapTemplate.mumbai.json":[7227,3,7227],"./contracts/NFTAccessTemplate.mumbai":[8456,3,8456],"./contracts/NFTAccessTemplate.mumbai.json":[8456,3,8456],"./contracts/NFTEscrowPaymentCondition.mumbai":[6866,3,6866],"./contracts/NFTEscrowPaymentCondition.mumbai.json":[6866,3,6866],"./contracts/NFTHolderCondition.mumbai":[6813,3,6813],"./contracts/NFTHolderCondition.mumbai.json":[6813,3,6813],"./contracts/NFTLockCondition.mumbai":[4228,3,4228],"./contracts/NFTLockCondition.mumbai.json":[4228,3,4228],"./contracts/NFTSalesTemplate.mumbai":[842,3,842],"./contracts/NFTSalesTemplate.mumbai.json":[842,3,842],"./contracts/NFTSalesWithAccessTemplate.mumbai":[6720,3,6720],"./contracts/NFTSalesWithAccessTemplate.mumbai.json":[6720,3,6720],"./contracts/NeverminedConfig.mumbai":[4284,3,4284],"./contracts/NeverminedConfig.mumbai.json":[4284,3,4284],"./contracts/NeverminedToken.mumbai":[3146,3,3146],"./contracts/NeverminedToken.mumbai.json":[3146,3,3146],"./contracts/PlonkVerifier.mumbai":[1666,3,1666],"./contracts/PlonkVerifier.mumbai.json":[1666,3,1666],"./contracts/RewardsDistributor.mumbai":[1305,3,1305],"./contracts/RewardsDistributor.mumbai.json":[1305,3,1305],"./contracts/SignCondition.mumbai":[3721,3,3721],"./contracts/SignCondition.mumbai.json":[3721,3,3721],"./contracts/StandardRoyalties.mumbai":[3011,3,3011],"./contracts/StandardRoyalties.mumbai.json":[3011,3,3011],"./contracts/TemplateStoreManager.mumbai":[4073,3,4073],"./contracts/TemplateStoreManager.mumbai.json":[4073,3,4073],"./contracts/ThresholdCondition.mumbai":[5365,3,5365],"./contracts/ThresholdCondition.mumbai.json":[5365,3,5365],"./contracts/TransferDIDOwnershipCondition.mumbai":[821,3,821],"./contracts/TransferDIDOwnershipCondition.mumbai.json":[821,3,821],"./contracts/TransferNFT721Condition.mumbai":[8603,3,8603],"./contracts/TransferNFT721Condition.mumbai.json":[8603,3,8603],"./contracts/TransferNFTCondition.mumbai":[8070,3,8070],"./contracts/TransferNFTCondition.mumbai.json":[8070,3,8070],"./contracts/WhitelistingCondition.mumbai":[7482,3,7482],"./contracts/WhitelistingCondition.mumbai.json":[7482,3,7482],"./fonts/Catalogue/Catalogue-Bold.otf":[1631,9,1631],"./fonts/Catalogue/Catalogue-BoldItalic.otf":[6900,9,6900],"./fonts/Catalogue/Catalogue-Book.otf":[1514,9,1514],"./fonts/Catalogue/Catalogue-BookItalic.otf":[1360,9,1360],"./fonts/Catalogue/Catalogue-Demi.otf":[6629,9,6629],"./fonts/Catalogue/Catalogue-DemiItalic.otf":[2076,9,9752],"./fonts/Catalogue/Catalogue-Italic.otf":[3762,9,3762],"./fonts/Catalogue/Catalogue-Light.otf":[5438,9,5438],"./fonts/Catalogue/Catalogue-LightItalic.otf":[3913,9,3913],"./fonts/Catalogue/Catalogue-Medium.otf":[242,9,242],"./fonts/Catalogue/Catalogue-MediumItalic.otf":[8079,9,8079],"./fonts/Catalogue/Catalogue-Regular.otf":[7152,9,1327],"./fonts/Catalogue/Catalogue-Thin.otf":[5975,9,5975],"./fonts/Catalogue/Catalogue-ThinItalic.otf":[7500,9,7500],"./fonts/PT_Mono/OFL.txt":[8313,9,8313],"./fonts/PT_Mono/PTMono-Regular.ttf":[1706,9,1706],"./images/architecture/Flow_API_integration.png":[1942,9,1942],"./images/architecture/Flow_Subscription_get_access_token.png":[9131,9,9131],"./images/architecture/Flow_Subscription_purchase.png":[2722,9,2722],"./images/architecture/Flow_Subscription_registration.png":[5369,9,5369],"./images/architecture/Flow_WebService_registration.png":[8354,9,8354],"./images/architecture/Nevermined_App_Architecture.png":[5586,9,5586],"./images/architecture/Nevermined_Stack.png":[4219,9,4219],"./images/architecture/Proxy_integration.png":[1255,9,1255],"./images/hype_cycle.png":[3862,9,3862],"./images/nfts_are_dead.jpg":[2325,9,2325],"./images/tutorials/00_Connect_Wallet.png":[8483,9,8483],"./images/tutorials/00_Create_Account.png":[2914,9,2914],"./images/tutorials/01_New_Subscription.png":[3765,9,3765],"./images/tutorials/02_New_Subscription_01.png":[3921,9,3921],"./images/tutorials/03_New_Subscription_02.png":[1952,9,1952],"./images/tutorials/04_01_New_Subscription.png":[3858,9,3858],"./images/tutorials/04_02_Subscription_Description.png":[2698,9,2698],"./images/tutorials/04_03_Subscription_Price.png":[8430,9,8430],"./images/tutorials/04_03_Subscription_Pricing.png":[3779,9,3779],"./images/tutorials/04_04_Subscription_Review.png":[5639,9,5639],"./images/tutorials/04_05_Subscription_AddAsset.png":[8450,9,8450],"./images/tutorials/04_New_Subscription_03.png":[4257,9,4257],"./images/tutorials/04_Sign.png":[2920,9,143],"./images/tutorials/05-01-Webservice-Describe.png":[1094,9,1094],"./images/tutorials/05-02-Webservice-Content.png":[684,9,9727],"./images/tutorials/05-03-Webservice-Integration.png":[241,9,3919],"./images/tutorials/05-04-Webservice-Plan.png":[3608,9,9873],"./images/tutorials/05-05-Webservice-Review.png":[1608,9,1608],"./images/tutorials/05-06-Webservice-Dashboard.png":[8660,9,8660],"./images/tutorials/05-07-Webservice-AssetPage.png":[2837,9,2837],"./images/tutorials/05_03_Subscription_Price.png":[9961,9,9961],"./images/tutorials/05_New_Subscription_04.png":[1570,9,1570],"./images/tutorials/06_New_Service_01.png":[4640,9,2633],"./images/tutorials/07_New_Service_02.png":[3138,9,3138],"./images/tutorials/07_New_Service_03.png":[5995,9,5995],"./images/tutorials/08_New_Service_03.png":[8526,9,8526],"./images/tutorials/09_New_Service_04.png":[728,9,728],"./images/tutorials/10_New_Service_05.png":[3815,9,3815],"./images/tutorials/11_Publisher_Dashboard_no_balance.png":[9410,9,9410],"./images/tutorials/12_Service_details.png":[2640,9,2640],"./images/tutorials/13_Consumer_Dashboard_before.png":[9213,9,9213],"./images/tutorials/13_Consumer_Purchase_01.png":[3012,9,3012],"./images/tutorials/14_Consumer_Purchase_02.png":[7081,9,7081],"./images/tutorials/15_Consumer_Dashboard_after.png":[3160,9,3160],"./images/tutorials/16_Consumer_Dashboard_JWT.png":[8604,9,8604],"./images/tutorials/17_Publisher_Dashboard_with_balance.png":[250,9,250],"./images/tutorials/18_Publisher_dataset_01.png":[8085,9,8085],"./images/tutorials/19_Publisher_dataset_02.png":[2398,9,2398],"./images/tutorials/20_Publisher_dataset_03.png":[8247,9,8247],"./images/tutorials/21_Publisher_dataset_04.png":[1427,9,1427],"./images/tutorials/22_Publisher_dataset_05.png":[9956,9,9956],"./images/tutorials/23_Dataset_details_page.png":[7928,9,7928],"./images/tutorials/24_marketplace_filter.png":[2374,9,2374],"./images/tutorials/25_purchase_review.png":[7177,9,7177],"./images/tutorials/26_Purchase_USDCcap.png":[657,9,2497],"./images/tutorials/27_purchase_metamask_confirm.png":[7582,9,7582],"./images/tutorials/28_purchase_confirm.png":[4845,9,4845],"./images/tutorials/30_Free_Plan_1.png":[6832,9,6832],"./images/tutorials/32_Free_Plan_2.png":[8132,9,8132],"./images/tutorials/Discord_bot.png":[8227,9,8227],"./images/tutorials/Discord_summary_command.png":[8658,9,8658],"./images/tutorials/Elvis.png":[8702,9,8702],"./images/tutorials/MetaMask-tokens-Polygon-USDC-Bridge.png":[6352,9,6352],"./images/tutorials/MetaMask-tokens-Polygon-USDC-Swap.png":[6858,9,6858],"./images/tutorials/adam_and_evil.png":[3325,9,3325],"./images/tutorials/metamask/Connect_MM.png":[4009,9,4009],"./images/tutorials/metamask/MM_Arbitrum_Bridge.png":[97,9,97],"./images/tutorials/metamask/MM_Arbitrum_Buy.png":[6439,9,6439],"./images/tutorials/metamask/MM_Arbitrum_Network.png":[3369,9,9590],"./images/tutorials/metamask/MM_Arbitrum_Swap.png":[1634,9,1634],"./images/tutorials/metamask/MM_Buy.png":[7156,9,7156],"./images/tutorials/metamask/MM_Get_started.png":[869,9,869],"./images/tutorials/metamask/MM_Gnosis_Omnibridge.png":[1476,9,1476],"./images/tutorials/metamask/MM_Matic_Asset.png":[9834,9,9834],"./images/tutorials/metamask/MM_Matic_Bridge.png":[1600,9,1600],"./images/tutorials/metamask/MM_Success.png":[3782,9,3782],"./images/tutorials/metamask/MM_add netwok.png":[6329,9,6329],"./images/tutorials/metamask/MM_add_network_manually_1.png":[4420,9,4420],"./images/tutorials/metamask/MM_add_network_manually_2.png":[775,9,775],"./images/tutorials/metamask/MM_addon_installed.png":[6475,9,6475],"./images/tutorials/metamask/MM_buy_1.png":[6648,9,6648],"./images/tutorials/metamask/MM_buy_2.png":[8449,9,2351],"./images/tutorials/metamask/MM_buy_3.png":[332,9,332],"./images/tutorials/metamask/MM_copy_address.png":[2060,9,2060],"./images/tutorials/metamask/MM_create_password.png":[4239,9,4239],"./images/tutorials/metamask/MM_create_wallet.png":[8533,9,8533],"./images/tutorials/metamask/MM_i_agree.png":[6119,9,6119],"./images/tutorials/metamask/MM_install_MM.png":[6047,9,6047],"./images/tutorials/metamask/MM_install_addon.png":[262,9,262],"./images/tutorials/metamask/MM_post_recovery_phrase.png":[8,9,8],"./images/tutorials/metamask/MM_recovery_phrase.png":[5310,9,5310],"./images/tutorials/metamask/MM_settings.png":[898,9,898],"./images/tutorials/metamask/MM_settings_Network.png":[470,9,470],"./images/tutorials/metamask/Matic_header.png":[567,9,567],"./images/tutorials/metamask/MetaMask-Token-Arbitrum-USDC.png":[4474,9,4474],"./img/docusaurus.png":[9676,9,9676],"./img/favicon.ico":[8750,9,8750],"./img/logo.svg":[1735,9,1735],"./img/nevermined/nevermined-app-logo.png":[1779,9,1779],"./img/nevermined/nevermined-logo-symbol-gradient-dark-bg.png":[8240,9,8240],"./img/nevermined/nevermined-symbol-gradient.png":[3128,9,3128],"./img/nevermined/nevermined_logo.svg":[1569,9,1569],"./img/nevermined/nevermined_logo_1.png":[1508,9,1508],"./img/nevermined/nevermined_logo_1.svg":[1218,9,1218],"./img/nevermined/nevermined_logo_250.png":[6406,9,6406],"./img/nvm-logo.png":[9674,9,9674],"./img/undraw_docusaurus_mountain.svg":[3181,9,3181],"./img/undraw_docusaurus_react.svg":[1336,9,1336],"./img/undraw_docusaurus_tree.svg":[6750,9,6750],"./nevermined/analysis.svg":[616,9,616],"./nevermined/arrow-right.svg":[2253,9,2253],"./nevermined/backgrounds/contact-bg-body.png":[5444,9,5444],"./nevermined/backgrounds/contact-bg-body.webp":[4242,9,4242],"./nevermined/backgrounds/header-bg.png":[6785,9,6785],"./nevermined/backgrounds/header-bg.webp":[1499,9,1499],"./nevermined/backgrounds/header-bg_mobile.png":[6425,9,6425],"./nevermined/backgrounds/header-bg_mobile.webp":[77,9,77],"./nevermined/backgrounds/home-bg-banner.png":[6744,9,6744],"./nevermined/backgrounds/home-bg-banner.webp":[4880,9,4880],"./nevermined/backgrounds/home-bg-banner_mobile.png":[6536,9,6536],"./nevermined/backgrounds/home-bg-banner_mobile.webp":[5841,9,5841],"./nevermined/backgrounds/home-bg-box.png":[5922,9,5922],"./nevermined/backgrounds/home-bg-products.png":[517,9,517],"./nevermined/backgrounds/home-bg-products.webp":[3277,9,3277],"./nevermined/backgrounds/home-bg-products_mobile.png":[3816,9,3816],"./nevermined/backgrounds/home-bg-products_mobile.webp":[8574,9,8574],"./nevermined/backgrounds/home-bg.png":[5387,9,5387],"./nevermined/backgrounds/single-bg-body.png":[4341,9,4341],"./nevermined/backgrounds/single-bg-body.webp":[2079,9,2079],"./nevermined/bat/battalion-bg.png":[7674,9,7674],"./nevermined/bat/battalion-logo.png":[9604,9,9604],"./nevermined/breadcrumb-arrow.svg":[3526,9,3526],"./nevermined/burger.svg":[7250,9,7250],"./nevermined/close.svg":[6430,9,6430],"./nevermined/compatibility.svg":[5488,9,5488],"./nevermined/digital-assets-marketplaces.svg":[8648,9,8648],"./nevermined/discord-gray.svg":[7958,9,7958],"./nevermined/discord-round.svg":[5627,9,5627],"./nevermined/discord.svg":[8963,9,8963],"./nevermined/doc-card-assets-tokenization-via-NFTs.svg":[5355,9,5355],"./nevermined/doc-card-connecting-devs-to-infrastructure.svg":[3195,9,3195],"./nevermined/doc-card-data-sharing.svg":[7262,9,7262],"./nevermined/doc-card-introducing-a-standard-model-for-the-web3-process-lifecycle.svg":[1459,9,1459],"./nevermined/documents.svg":[7071,9,7071],"./nevermined/filtering.svg":[4897,9,4897],"./nevermined/github-gray.svg":[2052,9,2052],"./nevermined/github.svg":[5324,9,5324],"./nevermined/integrationDocs.svg":[1918,9,4640],"./nevermined/linkedin.svg":[4339,9,4339],"./nevermined/logo.svg":[619,9,619],"./nevermined/medium.svg":[1858,9,1858],"./nevermined/neverminedDocs.svg":[4269,9,4269],"./nevermined/planetEclipse.svg":[1247,9,1247],"./nevermined/remote-computation.svg":[1582,9,12],"./nevermined/test/tutorialsDocs.svg":[1141,9,645],"./nevermined/tutorialsDocs.png":[8640,9,8640],"./nevermined/tutorialsDocs.svg":[8338,9,8281],"./nevermined/twitter.svg":[7157,9,7157]};function i(e){if(!a.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],i=t[0];return a.e(t[2]).then((()=>a.t(i,16|t[1])))}i.keys=()=>Object.keys(n),i.id=2349,e.exports=i}}]);