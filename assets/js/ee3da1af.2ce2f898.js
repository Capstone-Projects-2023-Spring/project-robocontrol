"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[5885],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,g=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(g,s(s({ref:t},p),{},{components:r})):n.createElement(g,s({ref:t},p))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9347:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},s=void 0,c={unversionedId:"Class Diagrams/OpenCV Class Diagram",id:"Class Diagrams/OpenCV Class Diagram",title:"OpenCV Class Diagram",description:"",source:"@site/docs/Class Diagrams/OpenCV Class Diagram.md",sourceDirName:"Class Diagrams",slug:"/Class Diagrams/OpenCV Class Diagram",permalink:"/project-robocontrol/docs/Class Diagrams/OpenCV Class Diagram",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-robocontrol/edit/main/documentation/docs/Class Diagrams/OpenCV Class Diagram.md",tags:[],version:"current",lastUpdatedBy:"Ryan Hodge",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Acceptance test",permalink:"/project-robocontrol/docs/testing/acceptence-testing"},next:{title:"Robot Code Class Diagram",permalink:"/project-robocontrol/docs/Class Diagrams/Robot Code Class Diagram"}},i={},l=[],p={toc:l};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("mermaid",{value:'classDiagram\n    Main "1" o-- Robot\n    Main "1" o-- Website\n    Main "1" *-- ProcessData\n\n    class Main {\n        -Robot robot\n        -Website website\n        -ProcessData process\n    }\n    class Robot {\n        -Image image\n        -int obstacleDistance\n        +connect() int\n        +setLeftMotorSpeed(int speed) void\n        +setRightMotorSpeed(int speed) void\n    }\n    class Website {\n        +connect() int\n        +sendImage(Image img) void\n    }\n    class ProcessData {\n        -detectColors()\n        -processImages()\n    }'}))}m.isMDXComponent=!0}}]);