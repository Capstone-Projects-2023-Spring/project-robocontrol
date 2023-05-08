"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[6937],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,v=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(v,l(l({ref:t},c),{},{components:r})):n.createElement(v,l({ref:t},c))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2273:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4},l="Development Environment",i={unversionedId:"development-plan/development-environment",id:"development-plan/development-environment",title:"Development Environment",description:"This section provides an overview of the hardware and software components required for this project. It covers the components necessary for the robot's operation, communication, and hosting services, such as the website and remote server.",source:"@site/docs/development-plan/development-environment.md",sourceDirName:"development-plan",slug:"/development-plan/development-environment",permalink:"/project-robocontrol/docs/development-plan/development-environment",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-robocontrol/edit/main/documentation/docs/development-plan/development-environment.md",tags:[],version:"current",lastUpdatedBy:"Anubhav Kundu",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"Schedule",permalink:"/project-robocontrol/docs/development-plan/schedule"},next:{title:"Version Control",permalink:"/project-robocontrol/docs/development-plan/version-control"}},p={},s=[{value:"Required Hardware",id:"required-hardware",level:2},{value:"Required Software",id:"required-software",level:2},{value:"Selected IDE",id:"selected-ide",level:2},{value:"Compilers",id:"compilers",level:2},{value:"Test Tools",id:"test-tools",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"development-environment"},"Development Environment"),(0,o.kt)("p",null,"This section provides an overview of the hardware and software components required for this project. It covers the components necessary for the robot's operation, communication, and hosting services, such as the website and remote server. "),(0,o.kt)("h2",{id:"required-hardware"},"Required Hardware"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adeept Rasptank",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Servos \u2013 x5"),(0,o.kt)("li",{parentName:"ul"},"Raspberry Pi 3 B+"),(0,o.kt)("li",{parentName:"ul"},"Acrylic frame"),(0,o.kt)("li",{parentName:"ul"},"Geared motors \u2013 x2"),(0,o.kt)("li",{parentName:"ul"},"Ultrasonic distance sensor"),(0,o.kt)("li",{parentName:"ul"},"Battery cells \u2013 x2"),(0,o.kt)("li",{parentName:"ul"},"Tank treads"),(0,o.kt)("li",{parentName:"ul"},"Raspberry Pi Camera"))),(0,o.kt)("li",{parentName:"ul"},"Battery charger")),(0,o.kt)("h2",{id:"required-software"},"Required Software"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Adeept Rasptank Raspberry Pi Software",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Raspbian Buster flashed onto the Raspberry Pi"),(0,o.kt)("li",{parentName:"ul"},"Adeept Rasptank code"),(0,o.kt)("li",{parentName:"ul"},"Python 3"))),(0,o.kt)("li",{parentName:"ul"},"Web Server",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Ubuntu 22.04 Server"),(0,o.kt)("li",{parentName:"ul"},"NodeJS"),(0,o.kt)("li",{parentName:"ul"},"ReactJS"),(0,o.kt)("li",{parentName:"ul"},"TypeScript, HTML5, CSS, and a capable web browser"),(0,o.kt)("li",{parentName:"ul"},"Python 3"),(0,o.kt)("li",{parentName:"ul"},"Open cv color detection"))),(0,o.kt)("li",{parentName:"ul"},"Git version control"),(0,o.kt)("li",{parentName:"ul"},"WebSockets"),(0,o.kt)("li",{parentName:"ul"},"GitHub Pages")),(0,o.kt)("h2",{id:"selected-ide"},"Selected IDE"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Visual Studio Code"),(0,o.kt)("li",{parentName:"ul"},"Visual Studio Code Extensions",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"SSH"),(0,o.kt)("li",{parentName:"ul"},"Python"),(0,o.kt)("li",{parentName:"ul"},"Styled Components"),(0,o.kt)("li",{parentName:"ul"},"ESLint"),(0,o.kt)("li",{parentName:"ul"},"React Native Tools")))),(0,o.kt)("h2",{id:"compilers"},"Compilers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Babel")),(0,o.kt)("h2",{id:"test-tools"},"Test Tools"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"JUnit testing"),(0,o.kt)("li",{parentName:"ul"},"Mock calls"),(0,o.kt)("li",{parentName:"ul"},"Hardware testing")))}u.isMDXComponent=!0}}]);