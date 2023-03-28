"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[9617],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>b});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(r),p=n,b=d["".concat(s,".").concat(p)]||d[p]||c[p]||a;return r?o.createElement(b,i(i({ref:t},m),{},{components:r})):o.createElement(b,i({ref:t},m))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:4},i="Features and Requirements",l={unversionedId:"requirements/features-and-requirements",id:"requirements/features-and-requirements",title:"Features and Requirements",description:"- Movement Control",source:"@site/docs/requirements/features-and-requirements.md",sourceDirName:"requirements",slug:"/requirements/features-and-requirements",permalink:"/project-robocontrol/docs/requirements/features-and-requirements",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-robocontrol/edit/main/documentation/docs/requirements/features-and-requirements.md",tags:[],version:"current",lastUpdatedBy:"Kevin W Jang",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"General Requirements",permalink:"/project-robocontrol/docs/requirements/general-requirements"},next:{title:"Use-case descriptions",permalink:"/project-robocontrol/docs/requirements/use-case-descriptions"}},s={},u=[],m={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"features-and-requirements"},"Features and Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Movement Control",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User should be able to move robot forwards, backwards, and make turns by alternating direction of treads"),(0,n.kt)("li",{parentName:"ul"},"User should be able to make slow turns without stuttering stops"),(0,n.kt)("li",{parentName:"ul"},"User should be able to issue an emergency stop command in the middle of any movement operation"),(0,n.kt)("li",{parentName:"ul"},"User should be able to sequence movement commands"),(0,n.kt)("li",{parentName:"ul"},"Robot should be able to move in autonomous mode within established parameters"))),(0,n.kt)("li",{parentName:"ul"},"Video Imaging",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User should be able to receive video stream from robot"),(0,n.kt)("li",{parentName:"ul"},"User should be able to receive screenshots of video stream"),(0,n.kt)("li",{parentName:"ul"},"Robot should be able to upload video stream or snapshots in autonomous mode to the GUI"))),(0,n.kt)("li",{parentName:"ul"},"Ultrasonic Sensor",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User should be able to receive ultrasonic data indicating distance to nearest object"),(0,n.kt)("li",{parentName:"ul"},"User should be notified if max range of ultrasonic sensor has been reached"),(0,n.kt)("li",{parentName:"ul"},"Robot should be able to upload ultrasonic sensor data in autonomous mode"))),(0,n.kt)("li",{parentName:"ul"},"Autonomous Mode",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"User should be able to enable and disable autonomous mode allowing robot to act within a set of parameters"),(0,n.kt)("li",{parentName:"ul"},"Robot should have parameters established for autonomous mode allowing for movement within object or following distinct feature within video or ultrasonic sensor"),(0,n.kt)("li",{parentName:"ul"},"Robot should be able to identify obstacles in autonomous mode and find routes to continue with issued commands"))),(0,n.kt)("li",{parentName:"ul"},"Image Recognition",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Video data or image data from robot should be fed into algorithm allowing for recognition of object in robots path"),(0,n.kt)("li",{parentName:"ul"},"Video data or image data should allow for identification of follow parameters in autonomous mode or notification for user in control mode"),(0,n.kt)("li",{parentName:"ul"},"Video data or image data should be processed to detect follow-lines of a specific color on each side of the robot"))),(0,n.kt)("li",{parentName:"ul"},"World Route Construction",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ultrasonic and video data should enable web server to build graph of traversable paths"),(0,n.kt)("li",{parentName:"ul"},"Server should have preset parameters defined allowing for scanning with video or ultrasonic data to identify traversable paths "),(0,n.kt)("li",{parentName:"ul"},"Graph data should be transmitted to robot to enable autonomous movement command sequencing"),(0,n.kt)("li",{parentName:"ul"},"Follow-line data will be sent to the robot to stay in between the detected path")))))}d.isMDXComponent=!0}}]);