"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[7869],{8935:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>g,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>h,toc:()=>u});var n=i(5893),a=i(1151),r=(i(7294),i(2389));function o(e){let{children:t,fallback:i}=e;return(0,r.Z)()?(0,n.jsx)(n.Fragment,{children:t?.()}):i??null}var s=i(1446);const d=()=>(0,n.jsx)("div",{ref:e=>{e&&(0,s.w)("https://widgets.testing.nevermined.app/nvm-one-widget-loader.js",e)},className:"nvm-one-widget","nvm-did":"did:nv:e51f0c4befe8bda1a5bc741f7b2cef2389a935119c5f9d06ecf0d0670659403f","nvm-wid":"wid-801506b6-8936-4261-b183-43005b2e4352","nvm-cta-text":"Tell me baby","nvm-theme":"dark","nvm-layout":"horizontal","nvm-cta-text-color":"#ffffff","nvm-cta-bg-color":"#3e95ff"}),l={sidebar_position:10,description:"How to integrate a widget in your website"},c="How to integrate a widget in your website",h={id:"tutorials/advanced/widgets-integration",title:"How to integrate a widget in your website",description:"How to integrate a widget in your website",source:"@site/docs/tutorials/advanced/10-widgets-integration.md",sourceDirName:"tutorials/advanced",slug:"/tutorials/advanced/widgets-integration",permalink:"/docs/tutorials/advanced/widgets-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/advanced/10-widgets-integration.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"How to integrate a widget in your website"},sidebar:"tutorialSidebar",previous:{title:"How to integrate an AI service in an application",permalink:"/docs/tutorials/advanced/webservice-integration"},next:{title:"How to use Smart Subscriptions to protect Smart Contracts?",permalink:"/docs/tutorials/advanced/smart-contract-access"}},g={},u=[{value:"Getting ready",id:"getting-ready",level:2},{value:"How to generate the widget code",id:"how-to-generate-the-widget-code",level:2},{value:"1. Go to <code>My Assets</code> or <code>My Plans</code> and select Edit widget",id:"1-go-to-my-assets-or-my-plans-and-select-edit-widget",level:3},{value:"2. Configure the widget properties",id:"2-configure-the-widget-properties",level:3},{value:"3. Set the layout design between Vertical or Horizontal",id:"3-set-the-layout-design-between-vertical-or-horizontal",level:3},{value:"3. Set the style between Light or Dark",id:"3-set-the-style-between-light-or-dark",level:3},{value:"4. Change the label text and set the text and button color",id:"4-change-the-label-text-and-set-the-text-and-button-color",level:3},{value:"5. Choose a default language which the asset or plan details will show",id:"5-choose-a-default-language-which-the-asset-or-plan-details-will-show",level:3},{value:"6. Save and generate the widget code",id:"6-save-and-generate-the-widget-code",level:3},{value:"Code example",id:"code-example",level:2}];function w(e){const t={a:"a",admonition:"admonition",code:"code",div:"div",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-to-integrate-a-widget-in-your-website",children:"How to integrate a widget in your website"}),"\n",(0,n.jsx)(t.p,{children:"In this tutorial we show how you can integrate a widget showing your asset on your own website."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["You can visit previous tutorials to see ",(0,n.jsx)(t.a,{href:"../builders/create-subscription",children:"how to create a Smart Subscription"}),", ",(0,n.jsx)(t.a,{href:"../builders/register-file-asset",children:"how to register a dataset"})," and ",(0,n.jsx)(t.a,{href:"../builders/register-webservice",children:"how to register an AI service"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"getting-ready",children:"Getting ready"}),"\n",(0,n.jsx)(t.h2,{id:"how-to-generate-the-widget-code",children:"How to generate the widget code"}),"\n",(0,n.jsx)(t.p,{children:"The steps to generate and integrate the widget are the following:"}),"\n",(0,n.jsxs)(t.h3,{id:"1-go-to-my-assets-or-my-plans-and-select-edit-widget",children:["1. Go to ",(0,n.jsx)(t.code,{children:"My Assets"})," or ",(0,n.jsx)(t.code,{children:"My Plans"})," and select Edit widget"]}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"/images/tutorials/05-06-My-assets.png",width:"600"})}),"\n",(0,n.jsx)(t.p,{children:'Just click on the three dots icon and select "Edit Widget".'}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"/images/tutorials/builders/assets-published-options.png",width:"600"})}),"\n",(0,n.jsx)(t.h3,{id:"2-configure-the-widget-properties",children:"2. Configure the widget properties"}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"/images/tutorials/widget/widget_config_sceen.png",width:"600"})}),"\n",(0,n.jsx)(t.h3,{id:"3-set-the-layout-design-between-vertical-or-horizontal",children:"3. Set the layout design between Vertical or Horizontal"}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"/images/tutorials/widget/widget_layout_horizontal.png",width:"600"})}),"\n",(0,n.jsx)(t.h3,{id:"3-set-the-style-between-light-or-dark",children:"3. Set the style between Light or Dark"}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"/images/tutorials/widget/edit_theme.png",width:"600"})}),"\n",(0,n.jsx)(t.h3,{id:"4-change-the-label-text-and-set-the-text-and-button-color",children:"4. Change the label text and set the text and button color"}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"/images/tutorials/widget/widget_change_color.png",width:"600"})}),"\n",(0,n.jsx)(t.h3,{id:"5-choose-a-default-language-which-the-asset-or-plan-details-will-show",children:"5. Choose a default language which the asset or plan details will show"}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"/images/tutorials/widget/select_lang.png",width:"600"})}),"\n",(0,n.jsx)(t.h3,{id:"6-save-and-generate-the-widget-code",children:"6. Save and generate the widget code"}),"\n",(0,n.jsx)("p",{align:"center",children:(0,n.jsx)("img",{src:"/images/tutorials/widget/save_config.png",width:"600"})}),"\n",(0,n.jsx)(t.h2,{id:"code-example",children:"Code example"}),"\n",(0,n.jsx)(t.p,{children:"Here is a example of a code generated:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<div class="nvm-one-widget" nvm-did="did:nv:e51f0c4befe8bda1a5bc741f7b2cef2389a935119c5f9d06ecf0d0670659403f" nvm-wid="wid-801506b6-8936-4261-b183-43005b2e4352" nvm-cta-text="Tell me baby" nvm-cta-bg-color="#3e95ff" nvm-theme="dark" nvm-layout="horizontal"></div>\n<script defer src="https://widgets.testing.nevermined.app/nvm-one-widget-loader.js"><\/script>\n'})}),"\n",(0,n.jsx)(t.p,{children:"And here is how the widget looks like once integrated in a website:"}),"\n",(0,n.jsx)(o,{fallback:(0,n.jsx)(t.div,{children:"Loading demo..."}),children:()=>(0,n.jsx)(d,{})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsx)(t.p,{children:"Send us via Discord your integration! We will be happy to share it with the community."})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(w,{...e})}):w(e)}},1446:(e,t,i)=>{i.d(t,{e:()=>n,w:()=>a});const n=e=>{const t=(new DOMParser).parseFromString(e,"text/html");return t.querySelectorAll("a").forEach((e=>{if(e.hasAttribute("href")&&e.getAttribute("href").includes("/href")){const t=e.getAttribute("href"),i=document.createElement("img");e.parentElement.replaceChild(i,e),i.setAttribute("src",t),i.setAttribute("alt","Gift")}})),t.documentElement.innerHTML},a=(e,t)=>{const i=`script[src='${e}']`;if(document.querySelectorAll(i).length>0)return;const n=document.createElement("script");n.src=e,n.defer=!0,t.parentNode?.insertBefore(n,t)}},1151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>o});var n=i(7294);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);