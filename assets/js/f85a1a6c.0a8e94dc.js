"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[1270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),h=a,d=m["".concat(s,".").concat(h)]||m[h]||c[h]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Unit tests",l={unversionedId:"testing/unit-testing",id:"testing/unit-testing",title:"Unit tests",description:"Testing Procedure",source:"@site/docs/testing/unit-testing.md",sourceDirName:"testing",slug:"/testing/unit-testing",permalink:"/project-robocontrol/docs/testing/unit-testing",draft:!1,editUrl:"https://github.com/Capstone-Projects-2023-Spring/project-robocontrol/edit/main/documentation/docs/testing/unit-testing.md",tags:[],version:"current",lastUpdatedBy:"Ryan Hodge",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Test Procedures",permalink:"/project-robocontrol/docs/category/test-procedures"},next:{title:"Integration tests",permalink:"/project-robocontrol/docs/testing/integration-testing"}},s={},u=[{value:"Testing Procedure",id:"testing-procedure",level:2},{value:"Website",id:"website",level:3},{value:"OpenCV Server",id:"opencv-server",level:3},{value:"Testing Results",id:"testing-results",level:2},{value:"Website",id:"website-1",level:3},{value:"OpenCV Server",id:"opencv-server-1",level:3},{value:"Robot Code",id:"robot-code",level:3}],p={toc:u};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"unit-tests"},"Unit tests"),(0,a.kt)("h2",{id:"testing-procedure"},"Testing Procedure"),(0,a.kt)("h3",{id:"website"},"Website"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"App.test.tsx",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Render whole app",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: Render the entire application to confirm that it can be rendered properly and there are no initial rendering issues",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Confirm that the buttons were rendered in the assertion"))),(0,a.kt)("li",{parentName:"ul"},"Input: None"),(0,a.kt)("li",{parentName:"ul"},"Result: The app is rendered in the background and the buttons have been rendered"))),(0,a.kt)("li",{parentName:"ul"},"Open control page",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: Click on the control button on the home page to render the control page. Assert that the window path has changed to include the control subtext"),(0,a.kt)("li",{parentName:"ul"},'Input: A user click on the button labeled "CONTROL"'),(0,a.kt)("li",{parentName:"ul"},"Result: The window location ends with '/control'"))),(0,a.kt)("li",{parentName:"ul"},"Open about page",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Test: Use the hamburger menu to navigate back to the home screen. Then, from the home screen, click on the button labeled "ABOUT" to render the about page'),(0,a.kt)("li",{parentName:"ul"},"Input: A user click on the hamburger icon, a user click on the HOME button on the hamburger menu, and then a user click on the ABOUT button on the home page."),(0,a.kt)("li",{parentName:"ul"},"Result: The window location ends with '/about'"))),(0,a.kt)("li",{parentName:"ul"},"Navigate to controls page from offcanvas",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: use the offcanvas (Hamburger) menu to navigate to the control page from any page."),(0,a.kt)("li",{parentName:"ul"},"Input: A user click on the hamburger icon, then another on the CONTROL button on the offcanvas menu"),(0,a.kt)("li",{parentName:"ul"},"Result: The window location ends with '/control'"))),(0,a.kt)("li",{parentName:"ul"},"Navigate to about page from offcanvas",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: use the offcanvas (Hamburger) menu to navigate to the about page from any page."),(0,a.kt)("li",{parentName:"ul"},"Input: A user click on the hamburger icon, then another on the ABOUT button on the offcanvas menu"),(0,a.kt)("li",{parentName:"ul"},"Result: The window location ends with '/about'"))),(0,a.kt)("li",{parentName:"ul"},"Navigate back to home page from offcanvas",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: use the offcanvas (Hamburger) menu to navigate to the home page from any page."),(0,a.kt)("li",{parentName:"ul"},"Input: A user click on the hamburger icon, then another on the CONTROL button on the offcanvas menu, then a user click on the hamburger icon, then another on the HOME button on the offcanvas menu"),(0,a.kt)("li",{parentName:"ul"},"Result: The window location ends with '/home'"))))),(0,a.kt)("li",{parentName:"ul"},"Control.test.tsx",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Render control page",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Test: Confirm that the controls page is rendering properly without issue by asserting that the test id "Control" exists on the page'),(0,a.kt)("li",{parentName:"ul"},"Input: None"),(0,a.kt)("li",{parentName:"ul"},"Result: The control page has rendered on the test website"))),(0,a.kt)("li",{parentName:"ul"},"Try to login",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: That logging in works properly when mocking the server"),(0,a.kt)("li",{parentName:"ul"},'Input: User typing "ryan" into the username section of the login, user typing "ryan" into the password section of the login, the user clicking the "Login" button.'),(0,a.kt)("li",{parentName:"ul"},"Result: The user is able to properly login to the button grid controls and control the robot"))))),(0,a.kt)("li",{parentName:"ul"},"ButtonGrid.test.tsx",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Render button grid",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: The button grid component is rendered with dummy data to confirm the components baseline functionality"),(0,a.kt)("li",{parentName:"ul"},"Input: None"),(0,a.kt)("li",{parentName:"ul"},"Result: The ButtonGrid component is indexed by its test ID and is confirmed to exist"))),(0,a.kt)("li",{parentName:"ul"},"Move robot with key-presses",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: Confirm the functionality of the arrow keys sending messages to the robot over websockets"),(0,a.kt)("li",{parentName:"ul"},"Input: Mocked keystrokes are used as inputs by rerendering the ButtonGrid component similarly to how Control would rerender the ButtonGrid on keystroke inputs"),(0,a.kt)("li",{parentName:"ul"},"Result: The ButtonGrid component is rerendered each time a new key is being tested, and the corresponding button is checked to see if its styling includes the correct color."))),(0,a.kt)("li",{parentName:"ul"},"Autonomous button",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: Confirm functionality of the autonomous button by clicking it"),(0,a.kt)("li",{parentName:"ul"},'Input: User clicks on the button labeled "AUTONOMOUS"'),(0,a.kt)("li",{parentName:"ul"},"Result: The button turns green when in autonomous mode, hence a green color is checked for in the styling of the button component to confirm autonomous mode has occurred.")))))),(0,a.kt)("h3",{id:"opencv-server"},"OpenCV Server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"test_autonomy",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"test_turn_left",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: Given a left turning direction, confirm that the output command of center_robot gives the correct dictionary object"),(0,a.kt)("li",{parentName:"ul"},"Input: A string 'left'"),(0,a.kt)("li",{parentName:"ul"},"Result: The output of center_robot will return a dictionary including a turn property which will be set equal to 'left'"))),(0,a.kt)("li",{parentName:"ul"},"test_turn_right",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: Given a right turning direction, confirm that the output command of center_robot gives the correct dictionary object"),(0,a.kt)("li",{parentName:"ul"},"Input: A string 'right'"),(0,a.kt)("li",{parentName:"ul"},"Result: The output of center_robot will return a dictionary including a turn property which will be set equal to 'right'"))),(0,a.kt)("li",{parentName:"ul"},"test_already_centered",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: Given no turning direction, confirm that the output command of center_robot gives the correct dictionary object"),(0,a.kt)("li",{parentName:"ul"},"Input: A string 'stop'"),(0,a.kt)("li",{parentName:"ul"},"Result: The output of center_robot will return a dictionary including a turn property which will be set equal to 'no'"))),(0,a.kt)("li",{parentName:"ul"},"test_crop_image",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: Crop a given image to a given height"),(0,a.kt)("li",{parentName:"ul"},"Input: A small black image, a minimum height to crop at, and a maximum height to crop at"),(0,a.kt)("li",{parentName:"ul"},"Result: Confirm that the cropped image is the expected heigh of 20 and that the width has not changed of the original image"))))),(0,a.kt)("li",{parentName:"ul"},"test_color_detection",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"test_draw_contour",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: Given an image and a contour, confirm that a contour is drawn around an image using the draw_contour function"),(0,a.kt)("li",{parentName:"ul"},"Input: A small black image, a constant defined contour"),(0,a.kt)("li",{parentName:"ul"},"Result: The original image has been changed and a contour has been drawn on it. Testing the (0, 0) pixel to confirm that it has changed from black to a different color"))),(0,a.kt)("li",{parentName:"ul"},"test_already_centered",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: Confirm that, when the robot detects a straight path, it will not try to send a turning command to the robot"),(0,a.kt)("li",{parentName:"ul"},"Input: An image of two detectable lines separated and centered horizontally."),(0,a.kt)("li",{parentName:"ul"},"Result: Assert that the robot will not try to turn when given this image"))),(0,a.kt)("li",{parentName:"ul"},"test_turn_right",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: Confirm that, when the robot detects a single path on the left of the screen, it will try to send a right turn command"),(0,a.kt)("li",{parentName:"ul"},"Input: An image of one detectable line on the left side of the image"),(0,a.kt)("li",{parentName:"ul"},"Result: Assert that the robot will try to turn right in this scenario"))),(0,a.kt)("li",{parentName:"ul"},"test_turn_left",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: Confirm that, when the robot detects a single path on the right of the screen, it will try to send a left turn command"),(0,a.kt)("li",{parentName:"ul"},"Input: An image of one detectable line on the right side of the image"),(0,a.kt)("li",{parentName:"ul"},"Result: Assert that the robot will try to turn left in this scenario"))))),(0,a.kt)("li",{parentName:"ul"},"test_opencv_video",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"test_image_to_base64",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: Convert an image into base64 encoding"),(0,a.kt)("li",{parentName:"ul"},"Input: A small black image"),(0,a.kt)("li",{parentName:"ul"},"Result: Assert that the output of the cv2_to_base64 function is in bytes"))),(0,a.kt)("li",{parentName:"ul"},"test_original_stream",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: Try to run the original stream function"),(0,a.kt)("li",{parentName:"ul"},"Input: None"),(0,a.kt)("li",{parentName:"ul"},"Result: The video stream should start running. Nothing is asserted here"))),(0,a.kt)("li",{parentName:"ul"},"test_opencv_stream",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: Try to run the opencv stream function"),(0,a.kt)("li",{parentName:"ul"},"Input: None"),(0,a.kt)("li",{parentName:"ul"},"Result: The video stream should start running. Nothing is asserted here"))))),(0,a.kt)("li",{parentName:"ul"},"test_process_images",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"test_without_autonomy",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: To start, confirm that the function is working without autonomy"),(0,a.kt)("li",{parentName:"ul"},"Input: Autonomous is set to False and four empty queues"),(0,a.kt)("li",{parentName:"ul"},"Result: Confirm that the command queue is still empty"))),(0,a.kt)("li",{parentName:"ul"},"test_move_straight",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: Test if the robot will move straight given an image with a straight path"),(0,a.kt)("li",{parentName:"ul"},"Input: Autonomous is set to True and three empty queues. A fourth queue is added with the image already in it"),(0,a.kt)("li",{parentName:"ul"},"Result: Forward is included in the output command and no turn direction as well"))),(0,a.kt)("li",{parentName:"ul"},"test_turn_right",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Test: Confirm that the robot will try to turn the correct direction if given a one line image"),(0,a.kt)("li",{parentName:"ul"},"Input: Three empty queues, one queue with an image containing a path on the left side of the image, and autonomous set to True"),(0,a.kt)("li",{parentName:"ul"},"Result: Confirm that there is no forward movement and there is a right turn in the command sent from the server")))))),(0,a.kt)("h2",{id:"testing-results"},"Testing Results"),(0,a.kt)("h3",{id:"website-1"},"Website"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2339).Z,width:"1386",height:"972"})),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("em",null,"Figure 1: Website command line report")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(4909).Z,width:"2880",height:"856"})),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("em",null,"Figure 2: Website coverage report")),(0,a.kt)("p",null,"The website was able to be tested for 89.1% of its lines of code, with many files showing 100% coverage. Each component of the website was tested individually and confirmed to be functioning properly before moving to the next component. Figure 1 displays the testing coverage report given in the command line when executing the testing command. "),(0,a.kt)("h3",{id:"opencv-server-1"},"OpenCV Server"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(3554).Z,width:"2144",height:"670"})),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("em",null,"Figure 3: OpenCV server command line report")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(418).Z,width:"1868",height:"766"})),(0,a.kt)("p",{style:{textAlign:"center"}},(0,a.kt)("em",null,"Figure 4: OpenCV server coverage report")),(0,a.kt)("p",null,"The OpenCV server code was able to be tested for a total of 81% coverage, although some files are missing from the coverage data. The server has a similar problem to the robot code, where most of the code consists of communication which cannot be testing in procedural unit tests, and instead must be tested through manual acceptance criterion and tests. "),(0,a.kt)("h3",{id:"robot-code"},"Robot Code"),(0,a.kt)("p",null,"No unit testing was able to be carried out on the robot code since the purpose of this code was to simply take commands from the websockets and convert them into motor movement. The majority of the robot code was manually tested through sending websocket commands manually to the robot and observing the robot's response."))}m.isMDXComponent=!0},3554:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/OpenCVServerCoverageCLI-540ff5a54730c0db3439761c689646d2.png"},418:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/OpenCVServerCoverageReport-18bd74fa27c4573bf5154e9f6a64c1f2.png"},2339:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/WebsiteCoverageCLI-a7a83bf53ec21a41fb2d374214dba7c4.png"},4909:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/WebsiteCoverageReport-f50c7c5ef17dd2bc1424525f47f62009.png"}}]);