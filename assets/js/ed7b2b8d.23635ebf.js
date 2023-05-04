"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=m(a),k=r,c=u["".concat(p,".").concat(k)]||u[k]||N[k]||l;return a?n.createElement(c,i(i({ref:t},s),{},{components:a})):n.createElement(c,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={sidebar_position:1},i="Class Diagrams",o={unversionedId:"system-architecture/design",id:"system-architecture/design",title:"Class Diagrams",description:"Robot Diagram",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-robocontrol/docs/system-architecture/design",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-robocontrol/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"Ciiinnnddyy",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-robocontrol/docs/category/system-architecture"},next:{title:"API Specification",permalink:"/project-robocontrol/docs/category/api-specification"}},p={},m=[{value:"Robot Diagram",id:"robot-diagram",level:2},{value:"Robot Code",id:"robot-code",level:3},{value:"OpenCV Diagram",id:"opencv-diagram",level:2},{value:"OpenCV Code",id:"opencv-code",level:3},{value:"Website Diagram",id:"website-diagram",level:2},{value:"Website Code",id:"website-code",level:3}],s={toc:m};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"class-diagrams"},"Class Diagrams"),(0,r.kt)("h2",{id:"robot-diagram"},"Robot Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4169).Z,width:"633",height:"364"})),(0,r.kt)("h3",{id:"robot-code"},"Robot Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Main) Class purpose: Creates instances of Website, Server and Robot classes and handles their interactions. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Data Fields:  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"website ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Website "))),(0,r.kt)("li",{parentName:"ul"},"timer: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Timer "))),(0,r.kt)("li",{parentName:"ul"},"robot: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Robot "))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Website) Class purpose: Provides a means for sending data from the robot to the website. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data Fields:  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"img ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Image "))),(0,r.kt)("li",{parentName:"ul"},"dist: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: int "))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Methods: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"sendSensorData(Image img, int dist): void ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This method will send the data acquired by the sensors (camera and ultrasonic) to the website in the form of a JSON string. "),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: The robot's camera and ultrasonic sensors must be functioning properly. "),(0,r.kt)("li",{parentName:"ul"},"Parameters: img, dist "),(0,r.kt)("li",{parentName:"ul"},"Return Values: None "),(0,r.kt)("li",{parentName:"ul"},"Exceptions thrown: None  "))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Robot) Class purpose: Facilitates the movement of the robot. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Data Fields: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"move ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Movement "))))),(0,r.kt)("li",{parentName:"ul"},"Methods: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"move(String direction): void ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This method will accept a string as an argument and send a command to the servos as an output. "),(0,r.kt)("li",{parentName:"ul"},'Preconditions: The direction must be a string representing a valid direction, which can be one of the following: "forward", "backward", "left", or "right". '),(0,r.kt)("li",{parentName:"ul"},"Parameters: direction "),(0,r.kt)("li",{parentName:"ul"},"Return Value: None "),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: None "))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Server) Class purpose: Sends robot data to the server. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Methods: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"sendSensorData(Image img, int dist): void ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This method will send the data acquired by the sensors (camera and ultrasonic) to the server in the form of JSON strings. "),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: The robot's camera and ultrasonic sensors must be functioning properly. "),(0,r.kt)("li",{parentName:"ul"},"Parameters: img, dist "),(0,r.kt)("li",{parentName:"ul"},"Return Values: None "),(0,r.kt)("li",{parentName:"ul"},"Exceptions thrown: None "))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Movement) Class purpose: This class will house the logic for the different movements of the robot. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Methods: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"forward() "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moves the robot Forward in its current direction by the current speed. "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Return Value: None "),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: None "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"backward() "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moves the robot backward in its current direction by the current speed. "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Return Value: None "),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: None "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"left() "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Moves Turns the robot left "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Return Value: None "),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: None "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"right() "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Turns the robot right "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Return Value: None "),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: None ")))))))),(0,r.kt)("h2",{id:"opencv-diagram"},"OpenCV Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(1533).Z,width:"633",height:"368"})),(0,r.kt)("h3",{id:"opencv-code"},"OpenCV Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Main) Class Purpose: The controller for navigation and image recognition. It ties together all the subcomponents within the OpenCV architecture allowing for seamless communication and data transfer. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Data Fields: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"robot ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Robot "))),(0,r.kt)("li",{parentName:"ul"},"website ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Website"))),(0,r.kt)("li",{parentName:"ul"},"process ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: ProcessData "))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Robot) Class purpose: Represents data and information sent to and from the robot itself. The class will also contain methods to manipulate the robot\u2019s speed by left and right tracks. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data Fields: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"image ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Image "))),(0,r.kt)("li",{parentName:"ul"},"obstacleDistance ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: int "))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Methods: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"serve(): int "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This method will start the robot WebSocket server.  "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Return Values: 1 for successful connection, 0 otherwise.  "),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown:  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"404: Robot not available "),(0,r.kt)("li",{parentName:"ul"},"405: Left tread motor not working. "),(0,r.kt)("li",{parentName:"ul"},"406: Right tread motor not working. "))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"setLeftMotorSpeed(int speed): void"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This method will set the speed of the left tread motors. It will accept an integer and pass this value to the left tread motors. "),(0,r.kt)("li",{parentName:"ul"},"Parameters: An integer value for speed.  "),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: Successful connection to robot "),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown:  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"405: Left tread motor not functioning. "))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"SetRightMotorSpeed(int speed): void "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This method will set the speed of the right tread motors. It will accept an integer and pass this value to the right tread motors.  "),(0,r.kt)("li",{parentName:"ul"},"Parameters: An integer value for speed. "),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: Successful connection to robot "),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown:  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"406: Right motor not working.  "))))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Website) Class purpose: Sends data to the website for display purposes. Used for visualization of the imaging algorithm. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Methods: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"serve(): int ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This method will start the website WebSocket server. "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Return Values: 1(one) for successful connection, 0(zero) otherwise.  "),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"414: Website not available. "),(0,r.kt)("li",{parentName:"ul"},"sendImage(Image image): void "),(0,r.kt)("li",{parentName:"ul"},"This method will transfer image(s) to be displayed on the website.  "),(0,r.kt)("li",{parentName:"ul"},"Parameters: An image received by the robot\u2019s camera. "),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: Successful connection(s) to both robot and website. "),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"415: Image is not of proper resolution. "))))))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(ProcessData) Class purpose: Processes image(s) received by the robot and detect color(s) for object recognition. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Methods: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"detectColors(): void "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This method will detect color(s) in images received by the robot.  "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: Successful connection to robot. "),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Return values: None "),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"424: No image(s) to process. "),(0,r.kt)("li",{parentName:"ul"},"425: Image is grey scaled. "))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"processImages(): void "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"This method converts information from the images and ultrasonic distances to motor speeds. "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Pre-conditions: Successful connection to robot "),(0,r.kt)("li",{parentName:"ul"},"Post-conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Return values: None "),(0,r.kt)("li",{parentName:"ul"},"Exceptions Thrown: ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"434: No image received. "),(0,r.kt)("li",{parentName:"ul"},"435: Unknown value(s) in image. ")))))))))),(0,r.kt)("h2",{id:"website-diagram"},"Website Diagram"),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(4547).Z,width:"633",height:"266"})),(0,r.kt)("h3",{id:"website-code"},"Website Code"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Robot) Class purpose: To control the robot's movements and retrieve sensor data. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data Fields:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"IPAddress ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: string "))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Methods:  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"sendCommand(string command): void "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sends specified command to the robot in JSON format. "),(0,r.kt)("li",{parentName:"ul"},"Pre-Conditions: The robot must be connected to the website and functioning properly. "),(0,r.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Parameters:  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"command: A string command that will be sent to the robot. "))),(0,r.kt)("li",{parentName:"ul"},"Returns: None "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"forward(): void "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sends forward command to the robot. "),(0,r.kt)("li",{parentName:"ul"},"Pre-Conditions: The robot must be connected and functioning        properly. "),(0,r.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Returns: None "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"backward(): void "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sends backward command to the robot. "),(0,r.kt)("li",{parentName:"ul"},"Pre-Conditions: The robot must be connected and functioning properly. "),(0,r.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Returns: None "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"left(): void "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sends left command to the robot. "),(0,r.kt)("li",{parentName:"ul"},"Pre-Conditions: The robot must be connected and functioning properly. "),(0,r.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Returns: None "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"right(): void "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sends right command to the robot. "),(0,r.kt)("li",{parentName:"ul"},"Pre-Conditions: The robot must be connected and functioning properly. "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Returns: None "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"stop(): void "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sends stop command to the robot. "),(0,r.kt)("li",{parentName:"ul"},"Pre-Conditions: The robot must be connected and functioning properly. "),(0,r.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Returns: None "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"getSensorData(): Sensors "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Retrieves sensor data from the robot. "),(0,r.kt)("li",{parentName:"ul"},"Pre-Conditions: The robot must be connected and functioning properly. "),(0,r.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Returns: A Sensors object representing the sensor data "))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Sensors) Class purpose: Data type for storing sensor data from the robot (video, ultraonsic). "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Data Fields:  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"image ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Image "))),(0,r.kt)("li",{parentName:"ul"},"ultrasonic ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: int "))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(CommandWindow) Class purpose: To execute commands on the robot and render a user interface element. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data Fields:  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"robot ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Robot "))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Methods:  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"executeCommand(String command): void "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Executes a command given as a string. "),(0,r.kt)("li",{parentName:"ul"},"Pre-Conditions: The robot must be initialized and connected. "),(0,r.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Parameters: command (String) - the command to be executed "),(0,r.kt)("li",{parentName:"ul"},"Returns: None "),(0,r.kt)("li",{parentName:"ul"},"Exceptions thrown: None "))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"render(): React.ReactElement "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Renders the command window component. "),(0,r.kt)("li",{parentName:"ul"},"Pre-Conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Returns: A React.ReactElement "),(0,r.kt)("li",{parentName:"ul"},"Exceptions thrown: None "))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(StopRobotButton) Class purpose: To render a user interface element to stop the robot's movement. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Methods:  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"render(): React.ReactElement ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Renders the stop button component. "),(0,r.kt)("li",{parentName:"ul"},"Pre-Conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Returns: A React.ReactElement "),(0,r.kt)("li",{parentName:"ul"},"Exceptions thrown: None "))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(SidePanel) Class purpose: To render a selection panel on the side of the website for navigation. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Methods:  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"render(): React.ReactElement ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Renders the side panel component. "),(0,r.kt)("li",{parentName:"ul"},"Pre-Conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Returns: A React.ReactElement "),(0,r.kt)("li",{parentName:"ul"},"Exceptions thrown: None "))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(DataWindow) Class purpose: To retrieve and display server and robot data and render a user interface element. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data Fields:  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"server ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Server "))),(0,r.kt)("li",{parentName:"ul"},"robot ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Robot "))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Methods:  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"render(): React.ReactElement ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Renders the data window component. "),(0,r.kt)("li",{parentName:"ul"},"Pre-Conditions: The server and robot must be initialized and connected. "),(0,r.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Returns: A React.ReactElement "),(0,r.kt)("li",{parentName:"ul"},"Exceptions thrown: None "))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(Server) Class purpose: Send messages to and communicate with the OpenCV code on the server. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Methods:  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"getAlgorithmVisual(): Image ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Returns a video that shows the algorithm being used by the server. "),(0,r.kt)("li",{parentName:"ul"},"Pre-Conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Returns: A Video object "),(0,r.kt)("li",{parentName:"ul"},"Exceptions thrown: None "))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"(App) Class purpose: To connect the user to the server and the robot. "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Data Fields:  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"robot ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Type: Robot "))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Methods:  "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"connectToServer(): Server ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Connects the app to the server. "),(0,r.kt)("li",{parentName:"ul"},"Pre-Conditions: The server must be initialized and the WebSocket server running. "),(0,r.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Returns: A Server object "),(0,r.kt)("li",{parentName:"ul"},"Exceptions thrown: None "))),(0,r.kt)("li",{parentName:"ul"},"connectToRobot(): Robot  ",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Connects the app to the robot. "),(0,r.kt)("li",{parentName:"ul"},"Pre-Conditions: The robot must be initialized and the robot WebSocket server running. "),(0,r.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,r.kt)("li",{parentName:"ul"},"Parameters: None "),(0,r.kt)("li",{parentName:"ul"},"Returns: A Robot object "),(0,r.kt)("li",{parentName:"ul"},"Exceptions thrown: None \\")))))))),(0,r.kt)("h1",{id:"sequence-diagrams"},"Sequence Diagrams"))}u.isMDXComponent=!0},1533:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ArchitectureOPENCV-7e12e9ccd115c576cd69b31a12a23eda.png"},4169:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ArchitectureROBOT-93ea68bd3911a0cb24e260b94b3b45f1.png"},4547:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ArchitectureWEBSITE-751cf81c1e7dad6ca3eb2fcde805d15e.png"}}]);