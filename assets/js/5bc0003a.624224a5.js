"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[8794],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),l=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=n,u=m["".concat(c,".").concat(d)]||m[d]||h[d]||i;return r?o.createElement(u,a(a({ref:t},p),{},{components:r})):o.createElement(u,a({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={sidebar_position:2},a="System Block Diagram",s={unversionedId:"requirements/system-block-diagram",id:"requirements/system-block-diagram",title:"System Block Diagram",description:"Raspberry Pi Peripherals",source:"@site/docs/requirements/system-block-diagram.md",sourceDirName:"requirements",slug:"/requirements/system-block-diagram",permalink:"/project-robocontrol/docs/requirements/system-block-diagram",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-robocontrol/edit/main/documentation/docs/requirements/system-block-diagram.md",tags:[],version:"current",lastUpdatedBy:"Kevin W Jang",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"System Overview",permalink:"/project-robocontrol/docs/requirements/system-overview"},next:{title:"General Requirements",permalink:"/project-robocontrol/docs/requirements/general-requirements"}},c={},l=[{value:"Raspberry Pi Peripherals",id:"raspberry-pi-peripherals",level:2},{value:"System Architecture",id:"system-architecture",level:2}],p={toc:l};function m(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"system-block-diagram"},"System Block Diagram"),(0,n.kt)("h2",{id:"raspberry-pi-peripherals"},"Raspberry Pi Peripherals"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(8132).Z,width:"942",height:"570"})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("em",null,"Figure 1: Raspberry Pi communication with peripherals")),(0,n.kt)("p",null,"The design diagram of RoboControl Robot's external components are shown in Figure 1. The Raspberry Pi acts as the mechanical controller for the system, managing the connections to other components and peripherals. It is connected to geared motors, which are connected to tank treads, providing the robot with mobility and tankdrive. The Raspberry Pi is also connected to the five servos, which are responsible for providing precise control over the position and movement of the robotic arm. The servos receive a control signal from the Raspberry Pi, specifying the direction to power the specified servo, and then move the robot arm in that direction for precise control. "),(0,n.kt)("p",null,"The Raspberry Pi also connects to a camera module and an ultrasonic distance sensor module, which enable the robot to gather information about its environment. The camera module allows the robot to capture visual data and process it for various tasks, while the ultrasonic sensor module provides information about distances and obstacles in the robot's surroundings. The Raspberry Pi also connects to a power supply, which provides the necessary power for the components to function."),(0,n.kt)("p",null,"To communicate with the website, the Raspberry Pi sends and receives JSON messages from the server. The sent messages will contain the images which will be used for processing and the ultrasonic distances. The received messages will contain commands expected to be executed by the Raspberry Pi, such as turn left, move forwards, open claw, and more."),(0,n.kt)("h2",{id:"system-architecture"},"System Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(5320).Z,width:"1886",height:"1068"})),(0,n.kt)("p",{style:{textAlign:"center"}},(0,n.kt)("em",null,"Figure 2: Robot, server, website block diagram")),(0,n.kt)("p",null,"Figure 2 showcases the communication pathway between the Raspberry Pi and the server. The server comprises of the OpenCV python code and a graphical user interface (GUI) website and will be hosted using NGINX. The image processing code will not be running on the Raspberry Pi to save resources when controlling the motors and servos. The Raspberry Pi acts as the interface between the robot's physical components, including the camera module and ultrasonic sensor module, and the server. It receives environmental data from the camera and ultrasonic modules in the form of images and distances respectively. This data is then transmitted to the OpenCV software for analysis with algorithms. The OpenCV algorithms process the data to determine appropriate motor speeds, which are subsequently sent back to the Raspberry Pi. A visualization of the algorithm being used in the OpenCV code will be sent to the GUI and displayed to the user for more information."),(0,n.kt)("p",null,"The GUI serves as the primary means of interaction with the robot. The GUI receives two different types of data from the OpenCV code: algorithm images and sensor data. Algorithm images will be useful to the user, as these will be displayed to show what process the server is undertaking to detect a possible path. Sensor data will be used to display the real-time video from the robot. The GUI will have input buttons, which should be able to command the robot to perform certain actions such as driving forwards, turning, and more. "),(0,n.kt)("p",null,"All the data communication and transmission occurring in this diagram will be accomplished through the WebSocket protocol in Python and JavaScript. Since the robot code is written in Python and the OpenCV code will also be, the team will utilize Python\u2019s WebSocket library for communication purposes. In the GUI, JavaScript\u2019s WebSocket library will be utilized to communicate between both the OpenCV code and the Raspberry Pi code."))}m.isMDXComponent=!0},5320:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/CommandFlowDiagram-fefcb60016a629c07c3694b9793c5016.png"},8132:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/RaspberryPiDiagram-55301d8ab7164f01c58e2a388cc9e7ad.png"}}]);