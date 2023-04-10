"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[7607],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(o),p=r,m=u["".concat(l,".").concat(p)]||u[p]||h[p]||a;return o?n.createElement(m,s(s({ref:t},d),{},{components:o})):n.createElement(m,s({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,s=new Array(a);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=o[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},4757:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:5},s=void 0,i={unversionedId:"requirements/use-case-descriptions",id:"requirements/use-case-descriptions",title:"use-case-descriptions",description:"Three use cases are described in detail below. Each use case represents a different method of using the application. These scenarios outline the edge of the device\u2019s capabilities showcasing the possibilities of the project.",source:"@site/docs/requirements/use-case-descriptions.md",sourceDirName:"requirements",slug:"/requirements/use-case-descriptions",permalink:"/project-robocontrol/docs/requirements/use-case-descriptions",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-robocontrol/edit/main/documentation/docs/requirements/use-case-descriptions.md",tags:[],version:"current",lastUpdatedBy:"Ryan Hodge",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docsSidebar",previous:{title:"Features and Requirements",permalink:"/project-robocontrol/docs/requirements/features-and-requirements"},next:{title:"Software Development Plan",permalink:"/project-robocontrol/docs/category/software-development-plan"}},l={},c=[{value:"Use Case #1",id:"use-case-1",level:2},{value:"Normal Flow (Actor: Madison, System: RoboControl):",id:"normal-flow-actor-madison-system-robocontrol",level:3},{value:"Alternate Flow (Obstacle):",id:"alternate-flow-obstacle",level:3},{value:"Use Case #2",id:"use-case-2",level:2},{value:"Normal flow (Actor: Jason, System: RoboControl):",id:"normal-flow-actor-jason-system-robocontrol",level:3},{value:"Alternative Flow (Obstacle &amp; Image Recognition):",id:"alternative-flow-obstacle--image-recognition",level:3},{value:"Use Case #3",id:"use-case-3",level:2},{value:"Normal flow (Actor: Charlie, System: RoboControl):",id:"normal-flow-actor-charlie-system-robocontrol",level:3},{value:"Alternative Flow (Autonomous &amp; Obstacle):",id:"alternative-flow-autonomous--obstacle",level:3}],d={toc:c};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"use-case-descriptions"},"Use-case descriptions"),(0,r.kt)("p",null,"Three use cases are described in detail below. Each use case represents a different method of using the application. These scenarios outline the edge of the device\u2019s capabilities showcasing the possibilities of the project."),(0,r.kt)("h2",{id:"use-case-1"},"Use Case #1"),(0,r.kt)("b",null,"Triggering Event"),": Madison Beer is looking for a small, lost object in an unsanitary area.",(0,r.kt)("h3",{id:"normal-flow-actor-madison-system-robocontrol"},"Normal Flow (Actor: Madison, System: RoboControl):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Madison powers on her RoboControl device and starts the GUI."),(0,r.kt)("li",{parentName:"ol"},"The robot starts moving and uses its sensors and camera to gather data about its surroundings."),(0,r.kt)("li",{parentName:"ol"},"Madison uses the onboard GUI to control the device and view the live video feed to observe the surroundings. "),(0,r.kt)("li",{parentName:"ol"},"Once she finds the lost object, she uses the GUI to control the robot arm to pick up the object."),(0,r.kt)("li",{parentName:"ol"},"Madison uses the controls to recall the RoboControl device, then leaving the GUI and turning the device off.")),(0,r.kt)("h3",{id:"alternate-flow-obstacle"},"Alternate Flow (Obstacle):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Madison powers on her RoboControl device and starts the GUI."),(0,r.kt)("li",{parentName:"ol"},"The robot starts moving and uses its sensors and camera to gather data about its surroundings."),(0,r.kt)("li",{parentName:"ol"},"The robot encounters an obstacle (wall, boxes, etc.) while searching for the lost object."),(0,r.kt)("li",{parentName:"ol"},"Madison views the obstacle on the video feed, and the robot uses image recognition to show an obstacle on the GUI."),(0,r.kt)("li",{parentName:"ol"},"Madison uses the controls to reroute the robot away from the obstacle to continue searching for the lost object. ")),(0,r.kt)("h2",{id:"use-case-2"},"Use Case #2"),(0,r.kt)("b",null,"Triggering Event"),": Jason Derulo wants to use the RoboControl on a course he built, for his entertainment.",(0,r.kt)("h3",{id:"normal-flow-actor-jason-system-robocontrol"},"Normal flow (Actor: Jason, System: RoboControl):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Jason powers on his RoboControl device and starts the GUI."),(0,r.kt)("li",{parentName:"ol"},"Jason uses the web-based GUI to control the robot and has it traverse through the course he built."),(0,r.kt)("li",{parentName:"ol"},"The RoboControl device finishes the track, and Jason powers off the device. ")),(0,r.kt)("h3",{id:"alternative-flow-obstacle--image-recognition"},"Alternative Flow (Obstacle & Image Recognition):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Jason turns on the RoboControl device and starts the GUI."),(0,r.kt)("li",{parentName:"ol"},"Jason uses the onboard GUI to control the robot, but he mistakenly has it go off-course."),(0,r.kt)("li",{parentName:"ol"},"The RoboControl device uses its image recognition capabilities to spot an unavoidable obstacle, halts, and notifies Jason through the GUI."),(0,r.kt)("li",{parentName:"ol"},"Jason then uses the controls to reposition the robot onto the course."),(0,r.kt)("li",{parentName:"ol"},"The RoboControl device finishes the track, and Jason powers off the device.")),(0,r.kt)("h2",{id:"use-case-3"},"Use Case #3"),(0,r.kt)("b",null,"Triggering Event"),": Charlie Puth works at Wal-Mart and wants an efficient way to manage inventory.",(0,r.kt)("h3",{id:"normal-flow-actor-charlie-system-robocontrol"},"Normal flow (Actor: Charlie, System: RoboControl):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Charlie powers on the RoboControl device and places it in the desired starting position in the store."),(0,r.kt)("li",{parentName:"ol"},"Charlie uses the onboard GUI and camera on the device to take pictures of desired items on shelves around the store."),(0,r.kt)("li",{parentName:"ol"},"Charlie uses this information to manage and update inventory information in real time."),(0,r.kt)("li",{parentName:"ol"},"Charlie continues this process until it is no longer needed and turns off the camera feed/device.")),(0,r.kt)("h3",{id:"alternative-flow-autonomous--obstacle"},"Alternative Flow (Autonomous & Obstacle):"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Charlie powers on the RoboControl device and places it in the desired starting position in the store."),(0,r.kt)("li",{parentName:"ol"},"The RoboControl device is set to autonomous mode and goes around the store to view the desired items on shelves."),(0,r.kt)("li",{parentName:"ol"},"The RoboControl device spots an obstacle (customers, boxes, etc.) in its path, and preemptively changes its course using image recognition to avoid the obstacle."),(0,r.kt)("li",{parentName:"ol"},"Charlie continues to update and manage inventory information in real time as the RoboControl moves forward using the real-time video shown in the GUI.")))}u.isMDXComponent=!0}}]);