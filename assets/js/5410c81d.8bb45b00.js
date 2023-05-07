"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[6654],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(o),u=n,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||i;return o?r.createElement(m,a(a({ref:t},d),{},{components:o})):r.createElement(m,a({ref:t},d))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}u.displayName="MDXCreateElement"},3144:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const i={sidebar_position:1},a="Activities",s={unversionedId:"development-plan/activities",id:"development-plan/activities",title:"Activities",description:"Requirements Gathering",source:"@site/docs/development-plan/activities.md",sourceDirName:"development-plan",slug:"/development-plan/activities",permalink:"/project-robocontrol/docs/development-plan/activities",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-robocontrol/edit/main/documentation/docs/development-plan/activities.md",tags:[],version:"current",lastUpdatedBy:"Edward Keegan",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Software Development Plan",permalink:"/project-robocontrol/docs/category/software-development-plan"},next:{title:"Tasks",permalink:"/project-robocontrol/docs/development-plan/tasks"}},l={},c=[{value:"Requirements Gathering",id:"requirements-gathering",level:2},{value:"Top Level Design",id:"top-level-design",level:2},{value:"Detailed Design",id:"detailed-design",level:2},{value:"Testing",id:"testing",level:2}],d={toc:c};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"activities"},"Activities"),(0,n.kt)("h2",{id:"requirements-gathering"},"Requirements Gathering"),(0,n.kt)("p",null,"The project requirements will be gathered by analyzing the overall architecture of the RaspTank, which involves using the onboard Raspberry Pi programmed with Python to gather data from camera and ultrasonic sensor modules. The sensor data will be sent to a server running the OpenCV library, which will process the data and send control instructions to a custom website. The Raspberry Pi programming will be based on the OpenCV, and NumPy ibraries to process the images and colors. The website will be developed using Flask and the React TypeScript framework, and will serve as the user interface for controlling the RaspTanks movement and color detection/image processing data in real-time. The website will communicate with the project server to receive the processed data that originated from the RaspTank."),(0,n.kt)("h2",{id:"top-level-design"},"Top Level Design"),(0,n.kt)("p",null,"The RoboControl robot consists of a remote server and a robotic device driven by a Raspberry Pi microcomputer. The remote server will process data from input devices such as the camera and ultrasonic sensor modules and transmit control signals to the device's motor drivers and servos. The robotic device's Raspberry Pi microcomputer will communicate with the server via SSH, acting as the system's controller and managing connections to other components and peripherals. Additionally, the remote server will host a website graphical user interface (GUI) that allows users to give commands to robotic device and access its various features, such as color detection, remote navigation, and other autonomous functionalities. The GUI will also display real-time video provided by the robotic device's camera module, enabling users to see the device's movement and guide it using controls on the GUI. Users can input commands and then receive feedback from the robotic device via the GUI."),(0,n.kt)("p",null,"For the robotic device, it will be equipped with camera and ultrasonic sensor modules for collecting environmental data, motor drivers for its tank treads, and a mechanical arm with servos. These components will work together to allow the device to move, obtain color information, grasp items, and more. These features allow the RoboControl Robot to implement functions such as autonomous navigation."),(0,n.kt)("h2",{id:"detailed-design"},"Detailed Design"),(0,n.kt)("p",null,"Overall Architecture: The onboard Raspberry Pi will be developed with Python to gather the sensor data coming from the camera and ultrasonic sensor modules. The data acquired from these sensors will be sent to a server running the OpenCV library. The processed data will then be sent to a website that will host the controls for the robot. "),(0,n.kt)("p",null,"Raspberry Pi Programming: Though much of the following may be revised once the construction phase begins, the following will serve as an initial development architecture. First, the Raspberry Pi can use the OpenCV library to capture the images. NumPy will be useful to perform matrix operations on images such as scaling or cropping."),(0,n.kt)("p",null,"Project Server Processing: Once the data acquired from the camera and ultrasonic sensors has been sent to the server, the data will be processed, and further control instruction will be sent to the website. The sensor data gathered from the modules are processed on the server using the OpenCV library. We will also utilize OpenCV in the server to do color detection in images. These calculations will give the robot another means of detecting obstacles as well as detecting paths to navigate along."),(0,n.kt)("p",null,"Website: We will develop a website GUI that can be used to control and interface with the RaspTank. We will be using Flask and the React TypeScript framework coupled with styled components for ease of embedded CSS. The website will serve as the user interface for controlling the robot\u2019s movement and display sensor data from the robot in real-time. As mentioned above and shown in Figure 2, the website will communicate with the project server to receive the processed data that originated from the RaspTank."),(0,n.kt)("h2",{id:"testing"},"Testing"),(0,n.kt)("p",null,"The RoboControl project includes hardware testing and software development and testing for both front-end and back-end development, so we will mainly focus on unit testing, integration testing, system testing, and acceptance testing. For unit testing, we will test the individual components of RaspTank's firmware including the camera module, ultrasonic distance sensor module, and motor drivers. This would help us ensure that each component is functioning as expected and could help identify bugs or errors early in the development process. This will also be implemented for the website to test functionality throughout the TypeScript code. This will be completed using Junit testing. "),(0,n.kt)("p",null,"Integration testing will test how different hardware components and software codes of RaspTank work together. For example, we will test how the camera and ultrasonic distance sensor work together to detect colors, obstacles, and communicate with the remote server. Another example is testing how the motor drivers and servos work together to move the robot's tank treads and mechanical arm as well as receiving users' commands. Integration testing would help us ensure that our RaspTank robot's components work together with code seamlessly and our RaspTank robot performs as expected."),(0,n.kt)("p",null,"The System Testing will test the overall functionality of the RaspTank robot, including its GUI hosted on the remote project server, color detection, remote navigation, and other autonomous functionalities. This testing will enable us to ensure that our RaspTank robot meets the requirements of its intended use and that it performs reliably and accurately in real-world scenarios."),(0,n.kt)("p",null,"The Acceptance Testing will test whether our RaspTank robot meets the expectations of its end-users. We will conduct acceptance testing by having users test our RaspTank robot's features and provide feedback on usability, functionality, and performance. The purpose of this testing is to make the robot more in line with the user's needs while fulfilling the given requirements. Another part of this testing is comparing the robot\u2019s functionality with the required tasks in the Gantt chart. These tasks should match with those proposed by the end-user, and therefore should represent the end goal of the project. The Gantt chart tasks help dictate the level of success of the project features."))}h.isMDXComponent=!0}}]);