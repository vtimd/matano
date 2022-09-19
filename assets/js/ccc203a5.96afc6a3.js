"use strict";(self.webpackChunk_matano_website=self.webpackChunk_matano_website||[]).push([[6215],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(r),p=n,g=d["".concat(c,".").concat(p)]||d[p]||m[p]||a;return r?o.createElement(g,s(s({ref:t},u),{},{components:r})):o.createElement(g,s({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},32658:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>N,contentTitle:()=>O,default:()=>T,frontMatter:()=>w,metadata:()=>E,toc:()=>x});var o=r(87462),n=r(67294),a=r(3905),s=r(86010),i=r(52802),c=r(39960),l=r(13919),u=r(95999);const m="cardContainer_fWXF",d="cardTitle_rnsV",p="cardDescription_PWke";function g(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,s.Z)("card padding--lg",m)},r)}function f(e){let{href:t,icon:r,title:o,description:a}=e;return n.createElement(g,{href:t},n.createElement("h2",{className:(0,s.Z)("text--truncate",d),title:o},r," ",o),a&&n.createElement("p",{className:(0,s.Z)("text--truncate",p),title:a},a))}function y(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){var t;let{item:r}=e;const o=(0,l.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(null!=(t=r.docId)?t:void 0);return n.createElement(f,{href:r.href,icon:o,title:r.label,description:null==a?void 0:a.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(h,{item:t});case"category":return n.createElement(y,{item:t});default:throw new Error("unknown item type "+JSON.stringify(t))}}function b(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(k,{items:r.items,className:t})}function k(e){const{items:t,className:r}=e;if(!t)return n.createElement(b,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,s.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(v,{item:e})))))}const w={title:"Log sources"},O=void 0,E={unversionedId:"log-sources/managed-log-sources/index",id:"log-sources/managed-log-sources/index",title:"Log sources",description:"Matano managed log sources are common log sources for which Matano provides preconfigured normalizations, transformations, and schemas. This lets you easily ingest logs from a supported log source without having to write a transformation, specify a schema.",source:"@site/docs/log-sources/managed-log-sources/index.mdx",sourceDirName:"log-sources/managed-log-sources",slug:"/log-sources/managed-log-sources/",permalink:"/docs/log-sources/managed-log-sources/",draft:!1,editUrl:"https://github.com/matanolabs/matano/tree/main/website/docs/log-sources/managed-log-sources/index.mdx",tags:[],version:"current",frontMatter:{title:"Log sources"},sidebar:"tutorialSidebar",previous:{title:"Log source schema",permalink:"/docs/log-sources/schema"},next:{title:"CloudTrail",permalink:"/docs/log-sources/managed-log-sources/cloudtrail"}},N={},x=[{value:"Using managed log sources",id:"using-managed-log-sources",level:2},{value:"Supported managed log sources",id:"supported-managed-log-sources",level:2}],C={toc:x};function T(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},C,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Matano managed log sources are common log sources for which Matano provides preconfigured normalizations, transformations, and schemas. This lets you easily ingest logs from a supported log source without having to write a transformation, specify a schema."),(0,a.kt)("h2",{id:"using-managed-log-sources"},"Using managed log sources"),(0,a.kt)("p",null,"To use a Matano managed log source, specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"managed.type")," property in your ",(0,a.kt)("inlineCode",{parentName:"p"},"log_source.yml")," with the corresponding identifier for the managed log source. There is then no need to specify fields like ",(0,a.kt)("inlineCode",{parentName:"p"},"transform")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," as these will be applied automatically by the managed log source."),(0,a.kt)("p",null,"For example, to use the CloudTrail managed log source, your ",(0,a.kt)("inlineCode",{parentName:"p"},"log_source.yml")," may look as follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yml"},'name: "cloudtrail"\n\nmanaged:\n  type: "cloudtrail"\n')),(0,a.kt)("p",null,"Managed log sources may also specify additional properties for custom configuration. You may provide this in the ",(0,a.kt)("inlineCode",{parentName:"p"},"managed.properties")," key in your ",(0,a.kt)("inlineCode",{parentName:"p"},"log_source.yml"),". Consult the log source specific documentation for the values to provide, if any."),(0,a.kt)("h2",{id:"supported-managed-log-sources"},"Supported managed log sources"),(0,a.kt)("p",null,"The following are currently supported Matano managed log sources. Click through to view specific documentation for each log source."),(0,a.kt)(k,{mdxType:"DocCardList"}))}T.isMDXComponent=!0}}]);