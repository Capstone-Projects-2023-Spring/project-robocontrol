"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[6654],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(o),p=r,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||i;return o?n.createElement(m,a(a({ref:t},d),{},{components:o})):n.createElement(m,a({ref:t},d))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},3144:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const i={sidebar_position:1},a="Activities",s={unversionedId:"development-plan/activities",id:"development-plan/activities",title:"Activities",description:"Requirements Gathering",source:"@site/docs/development-plan/activities.md",sourceDirName:"development-plan",slug:"/development-plan/activities",permalink:"/project-robocontrol/docs/development-plan/activities",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-robocontrol/edit/main/documentation/docs/development-plan/activities.md",tags:[],version:"current",lastUpdatedBy:"Anubhav Kundu",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Software Development Plan",permalink:"/project-robocontrol/docs/category/software-development-plan"},next:{title:"Tasks",permalink:"/project-robocontrol/docs/development-plan/tasks"}},l={},c=[{value:"Requirements Gathering",id:"requirements-gathering",level:2},{value:"Top Level Design",id:"top-level-design",level:2},{value:"Detailed Design",id:"detailed-design",level:2},{value:"Testing",id:"testing",level:2}],d={toc:c};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"activities"},"Activities"),(0,r.kt)("h2",{id:"requirements-gathering"},"Requirements Gathering"),(0,r.kt)("p",null,"The project requirements will be gathered by analyzing the overall architecture of the RaspTank, which involves using the onboard Raspberry Pi programmed with Python to gather sensor data from camera and ultrasonic sensor modules. The sensor data will be sent to a server running openCV, which will process the data before sending control instructions to a custom website. The Raspberry Pi programming will be based on the OpenCV library to capture the images and will likely use libraries like NumPy and GPIO to gather image and distance data. The project server processing will be done using HoughLines and SciPy libraries (or similar alternatives if changes are deemed necessary during the development phase) to process the data transmitted from the Raspberry Pi. The website will be developed using the React TypeScript framework and will serve as the user interface for controlling the RaspTanks movement and displaying sensor data in real-time. The website will communicate with the project server to receive the processed data that originated from the RaspTank."),(0,r.kt)("h2",{id:"top-level-design"},"Top Level Design"),(0,r.kt)("p",null,"The RoboControl Robot consists of a remote server and a robotic device driven by Raspberry Pi. The remote server will process data from input devices such as a camera module and ultrasonic sensor module and transmit control signals to the device's motor drivers and servos. Meanwhile, the robotic device will have a Raspberry Pi microcomputer that will communicate with the server via SSH, acting as the system's controller and managing connections to other components and peripherals. Additionally, the remote server will host a website graphical user interface (GUI) that allows users to give commands to robotic device and access its various features, such as obstacle detection, remote navigation, and other autonomous functionalities. The GUI will also display real-time video provided by the robotic device's camera module, enabling users to see the device's movement and guide it using controls on the GUI. Users can input commands and then receive feedback from the robotic device and performance via the GUI."),(0,r.kt)("p",null,"For the robotic device, it will be equipped with a camera module and ultrasonic sensor module for collecting environmental data, motor drivers for its tank treads, and a mechanical arm with servos. These components will work together to allow the device to move, obtain visual images, detect obstacle distances, grasp items, and more. These features allow the RoboControl Robot to implement functions including autonomous navigation and complete automated robotic arm operation."),(0,r.kt)("h2",{id:"detailed-design"},"Detailed Design"),(0,r.kt)("p",null,"Overall Architecture: The onboard Raspberry Pi will be coded with Python to gather the sensor data coming from the camera and ultrasonic sensor modules. The data acquired from these sensors will be sent to a server running OpenCV. The processed data will then be sent to a website that will host the controls for the robot. "),(0,r.kt)("p",null,"Raspberry Pi Programming: Though much of the following may be revised once the construction phase begins, the following will serve as an initial development architecture. First, the Raspberry Pi can use the OpenCV library to capture the images. A few useful libraries that are at our disposal include NumPy and GPIO. While we may go with a different route, NumPy can be useful to perform matrix operations on images such as scaling or cropping, and GPIO will be used to read distance measurements from the ultrasonic sensor in order to detect and navigate around predetermined obstacle(s)."),(0,r.kt)("p",null,"Project Server Processing: Once the data acquired from the camera and ultrasonic sensors has been sent to the server, the data will be processed, and further control instruction will be sent to the website. The sensor data gathered from the modules could potentially be processed on the server using the HoughLines and SciPy libraries. HoughLines could be used to detect straight lines in the images (the path we plan to navigate), and SciPy can be useful in determining distance measurements. We will also utilize OpenCV in the server to do color detection in images. These calculations will give the robot another means of detecting obstacles as well as detecting paths to navigate along."),(0,r.kt)("p",null,"Website: We are considering the development of a very simple website that can be used to control and interface with the RaspTank. We will be using the React TypeScript framework coupled with styled components for ease of embedded CSS. The website will serve as the user interface for controlling the robot\u2019s movement and display sensor data from the robot in real-time. As mentioned above and shown in Figure 2, the website will communicate with the project server to receive the processed data that originated from the RaspTank."),(0,r.kt)("h2",{id:"testing"},"Testing"),(0,r.kt)("p",null,"The RoboControl project includes hardware testing and software development and testing for both front-end and back-end development, so we will mainly focus on unit testing, integration testing, system testing, and acceptance testing. For unit testing, we will test the individual components of RaspTank's firmware including the camera module, ultrasonic distance sensor module, and motor drivers. This would help us ensure that each component is functioning as expected and could help identify bugs or errors early in the development process. This will also be implemented for the website to test functionality throughout the TypeScript code. This will be completed using Junit testing. "),(0,r.kt)("p",null,"Integration testing will test how different hardware components and software codes of RaspTank work together. For example, we will test how the camera and ultrasonic distance sensor work together to detect obstacles and communicate with the remote server. Another example is testing how the motor drivers and servos work together to move the robot's tank treads and mechanical arm as well as receiving users' commands. Integration testing would help us ensure that our RaspTank robot's components work together with code seamlessly and our RaspTank robot performs as expected."),(0,r.kt)("p",null,"The System Testing will test the overall functionality of the RaspTank robot, including its GUI hosted on the remote project server, obstacle detection, remote navigation, and other autonomous functionalities. This testing will enable us to ensure that our RaspTank robot meets the requirements of its intended use and that it performs reliably and accurately in real-world scenarios."),(0,r.kt)("p",null,"The Acceptance Testing will test whether our RaspTank robot meets the expectations of its end-users. We will conduct acceptance testing by having users test our RaspTank robot's features and provide feedback on usability, functionality, and performance. The purpose of this testing is to make the robot more in line with the user's needs while fulfilling the given requirements. Another part of this testing is comparing the robot\u2019s functionality with the required tasks in the Gantt chart. These tasks should match with those proposed by the end-user, and therefore should represent the end goal of the project. The Gantt chart tasks help dictate the level of success of the project features."))}h.isMDXComponent=!0}}]);