"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1022],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),l=o,f=d["".concat(i,".").concat(l)]||d[l]||m[l]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=l;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:o,c[1]=s;for(var p=2;p<a;p++)c[p]=r[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},4215:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},c=void 0,s={unversionedId:"system-architecture/mermaid-sequence-diagrams/use-case-4",id:"system-architecture/mermaid-sequence-diagrams/use-case-4",title:"use-case-4",description:"",source:"@site/docs/system-architecture/mermaid-sequence-diagrams/use-case-4.md",sourceDirName:"system-architecture/mermaid-sequence-diagrams",slug:"/system-architecture/mermaid-sequence-diagrams/use-case-4",permalink:"/project-robocontrol/docs/system-architecture/mermaid-sequence-diagrams/use-case-4",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-robocontrol/edit/main/documentation/docs/system-architecture/mermaid-sequence-diagrams/use-case-4.md",tags:[],version:"current",lastUpdatedBy:"Anubhav Kundu",frontMatter:{},sidebar:"docsSidebar",previous:{title:"use-case-3",permalink:"/project-robocontrol/docs/system-architecture/mermaid-sequence-diagrams/use-case-3"},next:{title:"use-case-5",permalink:"/project-robocontrol/docs/system-architecture/mermaid-sequence-diagrams/use-case-5"}},i={},p=[],u={toc:p};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("mermaid",{value:'sequenceDiagram\n    actor U as User\n    participant App as :App\n    participant C as :Control\n    participant BG as :ButtonGrid\n    participant CV as opencv:OpenCV\n    participant R as :Robot\n    actor M as Motors\n\n    U->>App: Open App\n\n    loop VideoFeed\n        U->>+App: Click "CONTROL" button\n        App->>+C: Render\n        C->>+CV: Get video\n        CV->>+R: Get video\n        R--\x3e>-CV: Video feed\n        CV--\x3e>-C: Video feed\n        C--\x3e>-App: Video feed\n        App--\x3e>-U: Video Feed\n    end\n\n    loop Keyboard Listener:\n        U->>+C: Press key\n        C->>+BG: Send key data\n        BG->>+CV: WebSocket command\n        CV->>+R: WebSocket command\n        R->>+M: Move arm servo up\n        Note right of U: Loop occurs while the user<br/>wants to keep controlling<br/>the robot\n        M->>-R: \n        R->>-CV: \n        CV->>-BG: \n        BG->>-C: \n        C->>-U: \n    end'}))}d.isMDXComponent=!0}}]);