"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[5614],{4247:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"tutorials/builders/register-file-asset","title":"How to register your file assets and link to a Payment Plan","description":"How to register your file assets and link to a Payment Plan","source":"@site/docs/tutorials/builders/06-register-file-asset.md","sourceDirName":"tutorials/builders","slug":"/tutorials/builders/register-file-asset","permalink":"/docs/tutorials/builders/register-file-asset","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"description":"How to register your file assets and link to a Payment Plan"},"sidebar":"tutorialSidebar","previous":{"title":"How to register your AI agent and link to a Payment Plan","permalink":"/docs/tutorials/builders/register-agent"},"next":{"title":"Distribute your AI agents and make some money","permalink":"/docs/tutorials/builders/distribute"}}');var s=a(4848),n=a(8453);const o={sidebar_position:6,description:"How to register your file assets and link to a Payment Plan"},r="How to register your file assets and link to a Payment Plan",l={},d=[{value:"How to register a dataset",id:"how-to-register-a-dataset",level:2},{value:"1. Open the New Asset page",id:"1-open-the-new-asset-page",level:3},{value:"2. Describe your data asset",id:"2-describe-your-data-asset",level:3},{value:"Provide a short title",id:"provide-a-short-title",level:4},{value:"Add a description",id:"add-a-description",level:4},{value:"Include tags",id:"include-tags",level:4},{value:"3. Upload the files and additional information",id:"3-upload-the-files-and-additional-information",level:3},{value:"Upload files",id:"upload-files",level:4},{value:"Data schema (for datasets only)",id:"data-schema-for-datasets-only",level:4},{value:"Upload a cover image (optional)",id:"upload-a-cover-image-optional",level:4},{value:"Upload sample data files (optional)",id:"upload-sample-data-files-optional",level:4},{value:"4. Choose the Payment Plan",id:"4-choose-the-payment-plan",level:3},{value:"5. Review everything is okay",id:"5-review-everything-is-okay",level:3},{value:"6. Dataset registration",id:"6-dataset-registration",level:3}];function h(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"how-to-register-your-file-assets-and-link-to-a-payment-plan",children:"How to register your file assets and link to a Payment Plan"})}),"\n",(0,s.jsx)(t.p,{children:"Here we go through the required steps of registering a new dataset and link it to your Payment Plan. Owners who purchase that plan will get access to the one or more file assets that are included in the plan."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["You can't register an asset without first configuring a Payment Plan. So if you skipped that part, please go to the tutorial about ",(0,s.jsx)(t.a,{href:"create-plan",children:"How to create a Payment Plan"})," first."]})}),"\n",(0,s.jsx)(t.p,{children:"In Nevermined you can register different types of file assets:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Datasets"}),"\n",(0,s.jsx)(t.li,{children:"Models"}),"\n",(0,s.jsx)(t.li,{children:"Media files"}),"\n",(0,s.jsx)(t.li,{children:"Software/Algorithms"}),"\n",(0,s.jsx)(t.li,{children:"Any other kind of file"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"The registration of any of those is very similar. In this tutorial we will focus on datasets, but the process is the same for any other type of file asset."}),"\n",(0,s.jsx)(t.h2,{id:"how-to-register-a-dataset",children:"How to register a dataset"}),"\n",(0,s.jsx)(t.p,{children:"These are the steps to make your dataset available to holders of your Payment Plan."}),"\n",(0,s.jsx)(t.p,{children:"If you don't want to read the whole tutorial, you can watch the video tutorial:"}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("iframe",{width:"840",height:"470",src:"https://www.youtube.com/embed/MepagutRdrM?si=Gwsyj8BRrf5_PKs9",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),"\n",(0,s.jsx)(t.h3,{id:"1-open-the-new-asset-page",children:"1. Open the New Asset page"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Click on the New button in the top right to go the New Asset page."}),"\n",(0,s.jsx)(t.li,{children:"Click on the \u201cCreate Asset\u201d button of the Dataset or any other box."}),"\n"]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/images/tutorials/builders/registration-asset-types.png",width:"600"})}),"\n",(0,s.jsx)(t.h3,{id:"2-describe-your-data-asset",children:"2. Describe your data asset"}),"\n",(0,s.jsx)(t.h4,{id:"provide-a-short-title",children:"Provide a short title"}),"\n",(0,s.jsx)(t.h4,{id:"add-a-description",children:"Add a description"}),"\n",(0,s.jsx)(t.p,{children:"For example:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Aggregate dataset about hair loss research. Done by Dr. Whig. Conducted in 2021, with 3500 Spanish males."}),"\n",(0,s.jsx)(t.li,{children:"A CSV file containing the lyrics of these 43 Elvis songs: Love Me Tender, Jailhouse Rock,..."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"include-tags",children:"Include tags"}),"\n",(0,s.jsx)(t.p,{children:"Add tags to help buyers find your Dataset(s) in the Nevermined App. Click the '+' symbol to add new tags."}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/images/tutorials/06-01-Dataset-Description.png",width:"600"})}),"\n",(0,s.jsx)(t.h3,{id:"3-upload-the-files-and-additional-information",children:"3. Upload the files and additional information"}),"\n",(0,s.jsx)(t.h4,{id:"upload-files",children:"Upload files"}),"\n",(0,s.jsx)(t.p,{children:"Drag & drop or browse in your local computer to upload your dataset. Note: a dataset can have multiple files associated to it. Any file format is permitted."}),"\n",(0,s.jsx)(t.h4,{id:"data-schema-for-datasets-only",children:"Data schema (for datasets only)"}),"\n",(0,s.jsxs)(t.p,{children:["If you are publishing a ",(0,s.jsx)(t.strong,{children:"dataset"})," the App will ask you to provide some information about the data schema. This is very useful for potential buyers to understand the structure of your dataset.\nDescribe the structure of your dataset: fields, field types, number records, etc"]}),"\n",(0,s.jsx)(t.h4,{id:"upload-a-cover-image-optional",children:"Upload a cover image (optional)"}),"\n",(0,s.jsx)(t.p,{children:"You have the option to add a visual that gives more info about your Data Asset, e.g. an image of the research institute which generated the dataset."}),"\n",(0,s.jsx)(t.h4,{id:"upload-sample-data-files-optional",children:"Upload sample data files (optional)"}),"\n",(0,s.jsx)(t.p,{children:"If you have sample files or addional information that you want to share with potential buyers, you can upload them here. These files will be openly available to anyone who visits your asset page."}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/images/tutorials/06-02-Dataset-Upload.png",width:"600"})}),"\n",(0,s.jsx)(t.h3,{id:"4-choose-the-payment-plan",children:"4. Choose the Payment Plan"}),"\n",(0,s.jsx)(t.p,{children:"Next, you need to specify what type of plan a user requires to get access to your dataset."}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"If you want your data set to be available via different plans, you can go through this process once more.\nRegister the asset again and add it to another Payment Plan. For now ;-)"})}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/images/tutorials/06-03-Dataset-Plan.png",width:"600"})}),"\n",(0,s.jsx)(t.h3,{id:"5-review-everything-is-okay",children:"5. Review everything is okay"}),"\n",(0,s.jsx)(t.p,{children:"Finally, review your data plan. Click on \u201cCreate\u201d if everything looks good. Or go \u201cBack\u201d if you want to modify anything."}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/images/tutorials/06_04_Dataset_review.png"})}),"\n",(0,s.jsx)(t.h3,{id:"6-dataset-registration",children:"6. Dataset registration"}),"\n",(0,s.jsx)(t.p,{children:"The Nevermined App will register the new AI agent. This will take just a few seconds and once it's done, you will see a success message."}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/images/tutorials/10_New_Dataset_05.png",width:"600"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"You\u2019re done!"})}),"\n",(0,s.jsxs)(t.p,{children:["If you are interested on promoting your new Dataset or file asset and make some money, please to the tutorial about ",(0,s.jsx)(t.a,{href:"/docs/tutorials/builders/distribute",children:"How to distribute your AI services and files and make some money"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>r});var i=a(6540);const s={},n=i.createContext(s);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);