"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[3961],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var m=n.createContext({}),u=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},s="mdxType",N={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(a),k=l,c=s["".concat(m,".").concat(k)]||s[k]||N[k]||r;return a?n.createElement(c,i(i({ref:t},p),{},{components:a})):n.createElement(c,i({ref:t},p))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=k;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o[s]="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>s,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_position:1},i="Class Diagrams",o={unversionedId:"system-architecture/design",id:"system-architecture/design",title:"Class Diagrams",description:"Robot Diagram",source:"@site/docs/system-architecture/design.md",sourceDirName:"system-architecture",slug:"/system-architecture/design",permalink:"/project-robocontrol/docs/system-architecture/design",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-robocontrol/edit/main/documentation/docs/system-architecture/design.md",tags:[],version:"current",lastUpdatedBy:"Antonio Keyes",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"System Architecture",permalink:"/project-robocontrol/docs/category/system-architecture"},next:{title:"API Specification",permalink:"/project-robocontrol/docs/category/api-specification"}},m={},u=[{value:"Robot Diagram",id:"robot-diagram",level:2},{value:"Robot Code",id:"robot-code",level:3},{value:"OpenCV Diagram",id:"opencv-diagram",level:2},{value:"OpenCV Code",id:"opencv-code",level:3},{value:"Website Diagram",id:"website-diagram",level:2},{value:"Website Code",id:"website-code",level:3}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"class-diagrams"},"Class Diagrams"),(0,l.kt)("h2",{id:"robot-diagram"},"Robot Diagram"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(7915).Z,width:"1028",height:"764"})),(0,l.kt)("h3",{id:"robot-code"},"Robot Code"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(Main) Class purpose: Main handler of robot functions. Also manages the websockets for sending data."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Data Fields:  ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"commands: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: RobotCommandsWS "))),(0,l.kt)("li",{parentName:"ul"},"video: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: RobotVideoWS "))),(0,l.kt)("li",{parentName:"ul"},"commands_thread: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: Thread "))),(0,l.kt)("li",{parentName:"ul"},"video_thread:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: Thread"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(robot_commands_ws) Class purpose: Provides a means for sending commands from the robot to the server. "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Data Fields:  "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PORT ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: int "))),(0,l.kt)("li",{parentName:"ul"},"HOST: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: string "))),(0,l.kt)("li",{parentName:"ul"},"HOST_PATH:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: string"))),(0,l.kt)("li",{parentName:"ul"},"fuc : ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: functions"))),(0,l.kt)("li",{parentName:"ul"},"clients: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: Set"))),(0,l.kt)("li",{parentName:"ul"},"robot_ws: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: WebSocket"))),(0,l.kt)("li",{parentName:"ul"},"autonomous:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: boolean"))),(0,l.kt)("li",{parentName:"ul"},"connected:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: boolean"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Methods: "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"connect() : void ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This method will connect the robot to the server through JSON websockets. "),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Parameters: None "),(0,l.kt)("li",{parentName:"ul"},"Return Values: None "),(0,l.kt)("li",{parentName:"ul"},"Exceptions thrown: None "))),(0,l.kt)("li",{parentName:"ul"},"receive(WebSocket) : void ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This method will interpret commands received through the JSON websockets. "),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Parameters: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Websocket: A JSON websocket connecting the the host server. "))),(0,l.kt)("li",{parentName:"ul"},"Return Values: None "),(0,l.kt)("li",{parentName:"ul"},"Exceptions thrown: None  "))),(0,l.kt)("li",{parentName:"ul"},"send(WebSocket) : void ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This method will send data from the robot to the server through JSON websockets. "),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Parameters: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"WebSocket: A JSON websocket connecting the the host server. "))),(0,l.kt)("li",{parentName:"ul"},"Return Values: None "),(0,l.kt)("li",{parentName:"ul"},"Exceptions thrown: None "))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(RobotVideoWS) Class purpose: Send video data from the robot to the server. "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Data Fields: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"gstr ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: string "))))),(0,l.kt)("li",{parentName:"ul"},"Methods: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"run() : void ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This method take the images from the robot's onboard camera and send it through the JSON websocket. "),(0,l.kt)("li",{parentName:"ul"},"Preconditions: None "),(0,l.kt)("li",{parentName:"ul"},"Parameters: None "),(0,l.kt)("li",{parentName:"ul"},"Return Value: None "),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None ")))))))),(0,l.kt)("h2",{id:"opencv-diagram"},"OpenCV Diagram"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(2005).Z,width:"2341",height:"1141"})),(0,l.kt)("h3",{id:"opencv-code"},"OpenCV Code"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(opencv) Class Purpose: The controller for video feed display and image processing. Also handles command passing to the robot for both manual and autnomous mode. "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Data Fields: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"img_proc_q ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: Queue "))),(0,l.kt)("li",{parentName:"ul"},"websocket_q ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: Queue"))),(0,l.kt)("li",{parentName:"ul"},"command_q: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: Queue "))),(0,l.kt)("li",{parentName:"ul"},"autonomous:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: boolean"))),(0,l.kt)("li",{parentName:"ul"},"ultrasonic_data_q:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: Queue"))),(0,l.kt)("li",{parentName:"ul"},"commands:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: CommandWS"))),(0,l.kt)("li",{parentName:"ul"},"video:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: VideoWS"))),(0,l.kt)("li",{parentName:"ul"},"commands_thread:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: Thread"))),(0,l.kt)("li",{parentName:"ul"},"video_thread:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: Thread"))),(0,l.kt)("li",{parentName:"ul"},"img_processing_thread:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: Thread"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(opencv_video) Class purpose: Handles the processing and passing of video images.  "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Data Fields: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"original_lock ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: Lock "))),(0,l.kt)("li",{parentName:"ul"},"color_detection_lock ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: Lock "))))),(0,l.kt)("li",{parentName:"ul"},"Methods: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"cv2_to_base64(img) : int64 []",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This method will take the image from the video feed and convert it to base64 array.  "),(0,l.kt)("li",{parentName:"ul"},"Parameters: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"img: An image received received from the robot in cv2 format. "))),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: Must be connected to the robot websocket delivering images from the onboard camera "),(0,l.kt)("li",{parentName:"ul"},"Post-conditions: None "),(0,l.kt)("li",{parentName:"ul"},"Return Values: An array of base64 integers "),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(VideoWS) Class purpose: Connects to the websocket port and creates two video feeds, one of the original video data and one of the processed images from the onboard camera. "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Data Fields: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"None"))),(0,l.kt)("li",{parentName:"ul"},"Methods: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"start(img_proc_q, websocket_q, autonomous) : void ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This method connects to the websocket queue for both the image processing and display of original video "),(0,l.kt)("li",{parentName:"ul"},"Parameters: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"img_proc_q: A queue of processed images to send to the website."),(0,l.kt)("li",{parentName:"ul"},"websocket_q: A queue of images received from the robot."),(0,l.kt)("li",{parentName:"ul"},"autonomous: A boolean value to indicate whether or not the autonomous logic should be executed. "))),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: Connection to both website and robot "),(0,l.kt)("li",{parentName:"ul"},"Post-conditions: None "),(0,l.kt)("li",{parentName:"ul"},"Return Values: None  "),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(CommandsWS) Class purpose: Handles the sending of commands through either manual or autonomous mode."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Data Fields:"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"PORT:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: int"))),(0,l.kt)("li",{parentName:"ul"},"HOST:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: string "))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Methods: "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"start_server(): void "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This method start the connection to the robot for passing of commands.  "),(0,l.kt)("li",{parentName:"ul"},"Parameters: None "),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: Successful connection to robot and website host. "),(0,l.kt)("li",{parentName:"ul"},"Post-conditions: None "),(0,l.kt)("li",{parentName:"ul"},"Return values: None "),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None "))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"serve(websocket): void "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This method sends data and receives commands from the website. "),(0,l.kt)("li",{parentName:"ul"},"Parameters: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Websocket: A JSON websocket. "))),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: Successful connection to robot and the website host."),(0,l.kt)("li",{parentName:"ul"},"Post-conditions: None "),(0,l.kt)("li",{parentName:"ul"},"Return values: None "),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"receive(websocket): void"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This method will receive commands from the website as well as flag to set the autonomous function."),(0,l.kt)("li",{parentName:"ul"},"Parameters: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Websocket: A JSON websocket."))),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: Successful connections to the robot and the website host."),(0,l.kt)("li",{parentName:"ul"},"Post-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Return values: None"),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(process_images) Class purpose: Processes the images received from the robot."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Data Fields:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"None"))),(0,l.kt)("li",{parentName:"ul"},"Methods:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"process_img(img_proc_q, websocket_q, command_q, autonomous, ultrasonic_data_q) : void",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This method processes the images received. If in manual mode, sends commands from website to robot. If in autonomous mode, executes the logic to send commands to the robot."),(0,l.kt)("li",{parentName:"ul"},"Parameters: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"img_proc_q: A queue of processed images received to send to the website."),(0,l.kt)("li",{parentName:"ul"},"websocket_q: A queue of images received from the robot."),(0,l.kt)("li",{parentName:"ul"},"command_q: A queue of commands to send to the robot. All commands are in dict format."),(0,l.kt)("li",{parentName:"ul"},"autonomous: A list of a single boolean value."),(0,l.kt)("li",{parentName:"ul"},"ultrasonic_data_q: A queue of ultrasonic data received from the robot in dict format. "))),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Post-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Return values: None"),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(automation) Class purpose: The automation logic to execute to the robot."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Data Fields:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"isCentered: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: boolean"))),(0,l.kt)("li",{parentName:"ul"},"commands_q:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: Queue"))),(0,l.kt)("li",{parentName:"ul"},"ultrasonic_data:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: dict"))))),(0,l.kt)("li",{parentName:"ul"},"Methods:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"process_ultrasonic_data(data) : void",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This method processes individual ultrasonic data packets pulled from the ultrasonic data queue. "),(0,l.kt)("li",{parentName:"ul"},"Parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"data: The data received from the robot. This will be a dict item."))),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Post-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Return values: None"),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))),(0,l.kt)("li",{parentName:"ul"},"crop_image(image, start, h) : int ","[][]",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This method crops the image received from the robot onboard camera."),(0,l.kt)("li",{parentName:"ul"},"Parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"image: The image received from the robot. This is pulled from the websocket queue."),(0,l.kt)("li",{parentName:"ul"},"start: An integer value depicting the index of the image in array form. "),(0,l.kt)("li",{parentName:"ul"},"h: An integer value representing the height of the image to be cut."))),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Post-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Return values: An integer array holding X and Y pixel matrix of the image."),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))),(0,l.kt)("li",{parentName:"ul"},"center_robot(direction) : dict",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This method returns a dictionary item of the specific direction to turn the robot."),(0,l.kt)("li",{parentName:"ul"},"Parameters: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"direction: A string value of which way to turn the robot."))),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Post-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Return values: A dictionary item holding the direction, turn, and speed values to turn the robot. "),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(color_detection) Class purpose: Identifies the color to search for in the image and creates contours around those objects."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Data Fields: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"yellow_tape_lower: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: A numpy array of integer values with the RGB values of the lower end for the color to detect."))),(0,l.kt)("li",{parentName:"ul"},"yellow_tape_upper:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: A numpy array of integer values iwth the RGB values of the upper end for hte color to detect."))),(0,l.kt)("li",{parentName:"ul"},"kernel: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: A numpy matrix of 1's."))),(0,l.kt)("li",{parentName:"ul"},"center_tolerance: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: An integer value of the tolerance for centering."))),(0,l.kt)("li",{parentName:"ul"},"contour_tolerance:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: An integer value of the tolerance for contour size."))))),(0,l.kt)("li",{parentName:"ul"},"Methods:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"None"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(Contour) Class purpose: An object over the image received from the robot depicting the area of the color defined."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Data Fields:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"area:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: An integer value of the area to select."))),(0,l.kt)("li",{parentName:"ul"},"contour:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: A contour of the detected value."))))),(0,l.kt)("li",{parentName:"ul"},"Methods:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"draw_contour(img, contour, text) : void",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This method draws the contour over the image received from the robot image queue."),(0,l.kt)("li",{parentName:"ul"},"Parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"img: The image in cv2 format received from the robot image queue."),(0,l.kt)("li",{parentName:"ul"},"contour: The contour object to put over the image."),(0,l.kt)("li",{parentName:"ul"},"text: A string value to put next to the contour placed over the image."))),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Post-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Return values: None"),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(ColorDetection) Class purpose: Detects the color between the selected range defined in the color_detection class."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Data Fields:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"img:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: Image"))),(0,l.kt)("li",{parentName:"ul"},"turn:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: boolean"))),(0,l.kt)("li",{parentName:"ul"},"turn_direction:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: string"))))),(0,l.kt)("li",{parentName:"ul"},"Methods:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"set_img(img) : void",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This methods sets the image for color detection."),(0,l.kt)("li",{parentName:"ul"},"Parameters:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"img: An image received from the robot onboard camera."))),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Post-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Return values: None"),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))),(0,l.kt)("li",{parentName:"ul"},"direction to center(): string",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This methods returns a dictionary item that hold the values to center the robot. If there is two contours, calls two_lines visible method. If only a single contour, calls one_line_visible method. If no contours, sends backward command."),(0,l.kt)("li",{parentName:"ul"},"Parameters: None"),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Post-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Return values: A dictionary item holding the direction, turn, and speed values to the center between two contours or a single contour."),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))),(0,l.kt)("li",{parentName:"ul"},"two_lines_visible(largest_contours) : string",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This method decides if the robot is centerd between two detected contours."),(0,l.kt)("li",{parentName:"ul"},"Parameters: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"largest_contours: A list of the largest contours detected from the image of the color specified in color_detection."))),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: Two contours detected within the image."),(0,l.kt)("li",{parentName:"ul"},"Post-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Return value: A string of 'left', 'right', 'forward', or 'backward'."),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))),(0,l.kt)("li",{parentName:"ul"},"one_line_visible(largest_contours) : String",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"This method returns a string object to center the robot. A single contour is only possible of the robot needs to make a turn."),(0,l.kt)("li",{parentName:"ul"},"Parameters: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"largest_contours: A list of the largest contours detected from the image of the color specified in color_detection."))),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: Only one contour detected within the image."),(0,l.kt)("li",{parentName:"ul"},"Post-conditions: Turn the robot to bring back two contours into the image."),(0,l.kt)("li",{parentName:"ul"},"Return value: A string of 'left', 'right', 'forward', or 'backward'."),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None")))))))),(0,l.kt)("h2",{id:"website-diagram"},"Website Diagram"),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(6114).Z,width:"1191",height:"1109"})),(0,l.kt)("h3",{id:"website-code"},"Website Code"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(App) Class purpose: Main executable handler for the website."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Data Fields:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"None    "))),(0,l.kt)("li",{parentName:"ul"},"Methods:  ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"app(): void ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Runs and manages interactions between "),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: None "),(0,l.kt)("li",{parentName:"ul"},"Post-conditions: None "),(0,l.kt)("li",{parentName:"ul"},"Parameters:  ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"None "))),(0,l.kt)("li",{parentName:"ul"},"Returns: None"),(0,l.kt)("li",{parentName:"ul"}))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(Banner) Class purpose: Website code to manage interaction menu for the user. "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Data Fields:  ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"state ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: boolean "))))),(0,l.kt)("li",{parentName:"ul"},"Methods:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"render(): void",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Displays and manages user interaction with the banner menu."),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: The server and robot must be initialized and connected."),(0,l.kt)("li",{parentName:"ul"},"Post-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Parameters: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"None"))),(0,l.kt)("li",{parentName:"ul"},"Returns: None"),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(About) Class purpose: Handles the display of about information to the website. "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Data Fields:  "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"About ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: ReactElement "))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Methods:  "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"return(): void ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Returns and displays elements of the About page to the website"),(0,l.kt)("li",{parentName:"ul"},"Pre-Conditions: The server and robot must be initialized and connected. "),(0,l.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,l.kt)("li",{parentName:"ul"},"Parameters: None"),(0,l.kt)("li",{parentName:"ul"},"Returns: None "),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None "))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(Control) Class purpose: Handles rendering and interaction of the control page to the website."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Data Fields:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"COMMANDS_WS_URL: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: string"))),(0,l.kt)("li",{parentName:"ul"},"commands_ws: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: websocket"))),(0,l.kt)("li",{parentName:"ul"},"Control: ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: ReactElement "))))),(0,l.kt)("li",{parentName:"ul"},"Methods:  ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"return(): void ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Returns the control page object to the website. "),(0,l.kt)("li",{parentName:"ul"},"Pre-Conditions: The server and robot must be initialized and connected. "),(0,l.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,l.kt)("li",{parentName:"ul"},"Parameters: None "),(0,l.kt)("li",{parentName:"ul"},"Returns: None"),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None "))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(ButtongGrid) Class purpose: Handles the rendering of the buttons on the control page."),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Data Fields:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"KeyPress:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: dict"))),(0,l.kt)("li",{parentName:"ul"},"DirectionContent:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: dict"))),(0,l.kt)("li",{parentName:"ul"},"msgData:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: dict"))),(0,l.kt)("li",{parentName:"ul"},"wasd:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: dict"))),(0,l.kt)("li",{parentName:"ul"},"direction_buttons:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: dict"))),(0,l.kt)("li",{parentName:"ul"},"wasd_default:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: dict"))),(0,l.kt)("li",{parentName:"ul"},"ButtonGrid:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: ReactElement"),(0,l.kt)("li",{parentName:"ul"}))))),(0,l.kt)("li",{parentName:"ul"},"Methods:  ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"render(): React.ReactElement ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Renders the buttong grid layout of controls. "),(0,l.kt)("li",{parentName:"ul"},"Pre-Conditions: The server and robot must be initialized and connected."),(0,l.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,l.kt)("li",{parentName:"ul"},"Parameters: None "),(0,l.kt)("li",{parentName:"ul"},"Returns: A React.ReactElement "),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None "))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(Home) Class purpose: Handles the rendering and interaction of the home page to the website. "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Methods:  ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"navigate(): void ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Handles the navigation of the user to different components of the website. "),(0,l.kt)("li",{parentName:"ul"},"Pre-Conditions: None "),(0,l.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,l.kt)("li",{parentName:"ul"},"Parameters: None "),(0,l.kt)("li",{parentName:"ul"},"Returns: None "),(0,l.kt)("li",{parentName:"ul"},"Exceptions thrown: None "))),(0,l.kt)("li",{parentName:"ul"},"return(): void",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Returns the home page to the website."),(0,l.kt)("li",{parentName:"ul"},"Pre-conditions: The server and robot must be initialized and connected."),(0,l.kt)("li",{parentName:"ul"},"Post-conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Parameters: None"),(0,l.kt)("li",{parentName:"ul"},"Returns: None"),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None"))))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"(Login) Class purpose: Handles the rendering and interaction of the login page of the website. "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Data Fields:  "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"LoginProps ",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Type: dict "))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Methods:  "),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Login(): void",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Handles the logic of login to the website for control page access. "),(0,l.kt)("li",{parentName:"ul"},"Pre-Conditions: The server and robot must be initialized and connected. "),(0,l.kt)("li",{parentName:"ul"},"Post-Conditions: None "),(0,l.kt)("li",{parentName:"ul"},"Parameters: None "),(0,l.kt)("li",{parentName:"ul"},"Returns: A React.ReactElement "),(0,l.kt)("li",{parentName:"ul"},"Exceptions thrown: None "))),(0,l.kt)("li",{parentName:"ul"},"HandleClick(): void",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Handles the logic of the user clicking on a button or menu object for the website."),(0,l.kt)("li",{parentName:"ul"},"Pre-Conditions: None"),(0,l.kt)("li",{parentName:"ul"},"Parameters: None"),(0,l.kt)("li",{parentName:"ul"},"Returns: None"),(0,l.kt)("li",{parentName:"ul"},"Exceptions Thrown: None")))))))),(0,l.kt)("h1",{id:"sequence-diagrams"},"Sequence Diagrams"))}s.isMDXComponent=!0},7915:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Architecture_TREAD_BOT-0e5e0aa677f6351a46033bce9aed9ba8.png"},2005:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Architecture_TREAD_BOT_OPENCV-932baa0e4ad10ad243a85876b1e75fd5.png"},6114:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Architecture_TREAD_BOT_WEBSITE-015319702d531f8519c519e2a8512653.png"}}]);