"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[4195],{9337:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(7294);function n(e){function t(){return t=e.id?e.id:(t=(t=(t=e.caption).replaceAll("."," ")).replaceAll(" ","-")).toLowerCase()}return r.createElement("figure",{id:t(),align:e.align?e.align:"center",style:e.style?e.style:{}},e.children,e.src?r.createElement("img",{src:e.src,alt:e.alt}):r.createElement(r.Fragment,null),r.createElement("figcaption",{align:e.align?e.align:"center",style:{fontWeight:"bold"}},e.caption),r.createElement("figcaption",{align:e.align?e.align:"center",style:{}},e.subcaption))}},8140:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var r=a(7294),n=a(6010),o=a(9960),l=a(2263),i=a(782),s=a(7462),c=a(3905);const u={toc:[{value:"Keywords",id:"keywords",level:2},{value:"Project Abstract",id:"project-abstract",level:2},{value:"High Level Requirement",id:"high-level-requirement",level:2},{value:"Conceptual Design",id:"conceptual-design",level:2},{value:"Required Resources",id:"required-resources",level:2},{value:"Development Environment",id:"development-environment",level:3},{value:"Required Hardware",id:"required-hardware",level:4},{value:"Required Software",id:"required-software",level:4},{value:"Selected IDE",id:"selected-ide",level:4},{value:"Compilers",id:"compilers",level:4},{value:"Test Tools",id:"test-tools",level:4},{value:"Collaborators",id:"collaborators",level:2},{value:"Commands",id:"commands",level:2}]};function m(e){let{components:t,...a}=e;return(0,c.kt)("wrapper",(0,s.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://classroom.github.com/open-in-codespaces?assignment_repo_id=10120395"},(0,c.kt)("img",{parentName:"a",src:"https://classroom.github.com/assets/launch-codespace-f4981d0f882b2a3f0472912d15f9806d57e124e0fc890972558857b51b24a6f9.svg",alt:"Open in Codespaces"}))),(0,c.kt)("div",{align:"center"},(0,c.kt)("h1",{id:"project-name"},"Project Name"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://temple-cis-projects-in-cs.atlassian.net/jira/software/c/projects/DT/issues"},(0,c.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Report%20Issues-Jira-0052CC?style=flat&logo=jira-software",alt:"Report Issue on Jira"})),"\n",(0,c.kt)("a",{parentName:"p",href:"https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml"},(0,c.kt)("img",{parentName:"a",src:"https://github.com/ApplebaumIan/tu-cis-4398-docs-template/actions/workflows/deploy.yml/badge.svg",alt:"Deploy Docs"})),"\n",(0,c.kt)("a",{parentName:"p",href:"https://applebaumian.github.io/tu-cis-4398-docs-template/"},(0,c.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Documentation%20Website-brightgreen",alt:"Documentation Website Link"})))),(0,c.kt)("h2",{id:"keywords"},"Keywords"),(0,c.kt)("p",null,"Section 003, Python, JavaScript, React, Computer Vision, Robotics, Automation, Website Design and Interface."),(0,c.kt)("h2",{id:"project-abstract"},"Project Abstract"),(0,c.kt)("p",null,"Robocontrol provides a web-based user interface to control the Adeept RaspTank robot. It implements features such as remote navigation, autonomous functionality of the robot, as well as manual control via a website GUI. The RaspTank has a Raspberry Pi 3B+ single board computer which will interface with a remote server and GUI over Wi-Fi to process the data from the various input devices such as the on-board camera and ultrasonic distance sensor, as well as control the motor drivers for the tank treads and the servos for the mechanical arm. Video feed from the camera will be transmitted in near-real-time to the GUI so that the user can see where the robot is going even if they are not in the same environment, and they are able to use this to navigate with controls on the GUI which will be transmitted back to the microcontroller through the server. If the user would prefer the robot to navigate its environment autonomously, the server will use camera and sensor information it receives from the microcontroller to make autonomous navigation decisions using Python and transmit these decisions back to the microcontroller so that they can be implemented by the motors in the robot\u2019s tank treads."),(0,c.kt)("h2",{id:"high-level-requirement"},"High Level Requirement"),(0,c.kt)("p",null,"The RoboControl robot consists of a remote server and a robotic device driven by a Raspberry Pi microcomputer. The remote server will process data from input devices such as the camera and ultrasonic sensor modules and transmit control signals to the device's motor drivers and servos. The robotic device's Raspberry Pi microcomputer will communicate with the server via SSH, acting as the system's controller and managing connections to other components and peripherals. Additionally, the remote server will host a website graphical user interface (GUI) that allows users to give commands to robotic device and access its various features, such as color detection, remote navigation, and other autonomous functionalities. The GUI will also display real-time video provided by the robotic device's camera module, enabling users to see the device's movement and guide it using controls on the GUI. Users can input commands and then receive feedback from the robotic device via the GUI."),(0,c.kt)("p",null,"For the robotic device, it will be equipped with camera and ultrasonic sensor modules for collecting environmental data, motor drivers for its tank treads, and a mechanical arm with servos. These components will work together to allow the device to move, obtain color information, grasp items, and more. These features allow the RoboControl Robot to implement functions such as autonomous navigation."),(0,c.kt)("h2",{id:"conceptual-design"},"Conceptual Design"),(0,c.kt)("p",null,"Overall Architecture: The onboard Raspberry Pi will be developed with Python to gather the sensor data coming from the camera and ultrasonic sensor modules. The data acquired from these sensors will be sent to a server running the OpenCV library. The processed data will then be sent to a website that will host the controls for the robot."),(0,c.kt)("p",null,"Raspberry Pi Programming: Though much of the following may be revised once the construction phase begins, the following will serve as an initial development architecture. First, the Raspberry Pi can use the OpenCV library to capture the images. NumPy will be useful to perform matrix operations on images such as scaling or cropping."),(0,c.kt)("p",null,"Project Server Processing: Once the data acquired from the camera and ultrasonic sensors has been sent to the server, the data will be processed, and further control instruction will be sent to the website. The sensor data gathered from the modules are processed on the server using the OpenCV library. We will also utilize OpenCV in the server to do color detection in images. These calculations will give the robot another means of detecting obstacles as well as detecting paths to navigate along."),(0,c.kt)("p",null,"Website: We will develop a website GUI that can be used to control and interface with the RaspTank. We will be using Flask and the React TypeScript framework coupled with styled components for ease of embedded CSS. The website will serve as the user interface for controlling the robot\u2019s movement and display sensor data from the robot in real-time. As mentioned above and shown in Figure 2, the website will communicate with the project server to receive the processed data that originated from the RaspTank."),(0,c.kt)("h2",{id:"required-resources"},"Required Resources"),(0,c.kt)("h3",{id:"development-environment"},"Development Environment"),(0,c.kt)("p",null,"This section provides an overview of the hardware and software components required for this project. It covers the components necessary for the robot's operation, communication, and hosting services, such as the website and remote server. "),(0,c.kt)("h4",{id:"required-hardware"},"Required Hardware"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Adeept Rasptank",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"Servos \u2013 x5"),(0,c.kt)("li",{parentName:"ul"},"Raspberry Pi 3 B+"),(0,c.kt)("li",{parentName:"ul"},"Acrylic frame"),(0,c.kt)("li",{parentName:"ul"},"Geared motors \u2013 x2"),(0,c.kt)("li",{parentName:"ul"},"Ultrasonic distance sensor"),(0,c.kt)("li",{parentName:"ul"},"Battery cells \u2013 x2"),(0,c.kt)("li",{parentName:"ul"},"Tank treads"),(0,c.kt)("li",{parentName:"ul"},"Raspberry Pi Camera"))),(0,c.kt)("li",{parentName:"ul"},"Battery charger")),(0,c.kt)("h4",{id:"required-software"},"Required Software"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Adeept Rasptank Raspberry Pi Software",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"Raspbian Buster flashed onto the Raspberry Pi"),(0,c.kt)("li",{parentName:"ul"},"Adeept Rasptank code"),(0,c.kt)("li",{parentName:"ul"},"Python 3"))),(0,c.kt)("li",{parentName:"ul"},"Web Server",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"Ubuntu 22.04 Server"),(0,c.kt)("li",{parentName:"ul"},"NodeJS"),(0,c.kt)("li",{parentName:"ul"},"ReactJS"),(0,c.kt)("li",{parentName:"ul"},"TypeScript, HTML5, CSS, and a capable web browser"),(0,c.kt)("li",{parentName:"ul"},"Python 3"),(0,c.kt)("li",{parentName:"ul"},"Open cv color detection"))),(0,c.kt)("li",{parentName:"ul"},"Git version control"),(0,c.kt)("li",{parentName:"ul"},"WebSockets"),(0,c.kt)("li",{parentName:"ul"},"GitHub Pages")),(0,c.kt)("h4",{id:"selected-ide"},"Selected IDE"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Visual Studio Code"),(0,c.kt)("li",{parentName:"ul"},"Visual Studio Code Extensions",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},"SSH"),(0,c.kt)("li",{parentName:"ul"},"Python"),(0,c.kt)("li",{parentName:"ul"},"Styled Components"),(0,c.kt)("li",{parentName:"ul"},"ESLint"),(0,c.kt)("li",{parentName:"ul"},"React Native Tools")))),(0,c.kt)("h4",{id:"compilers"},"Compilers"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Babel")),(0,c.kt)("h4",{id:"test-tools"},"Test Tools"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"JUnit testing"),(0,c.kt)("li",{parentName:"ul"},"Mock calls"),(0,c.kt)("li",{parentName:"ul"},"Hardware testing")),(0,c.kt)("h2",{id:"collaborators"},"Collaborators"),(0,c.kt)("table",null,(0,c.kt)("tr",null,(0,c.kt)("td",{align:"center"},(0,c.kt)("a",{href:"https://github.com/ApplebaumIan"},(0,c.kt)("img",{src:"https://avatars.githubusercontent.com/u/9451941?v=4",width:"100;",alt:"ApplebaumIan"}),(0,c.kt)("br",null),(0,c.kt)("sub",null,(0,c.kt)("b",null,"Ian Tyler Applebaum")))),(0,c.kt)("td",{align:"center"},(0,c.kt)("a",{href:"https://github.com/leighflagg"},(0,c.kt)("img",{src:"https://avatars.githubusercontent.com/u/77810293?v=4",width:"100;",alt:"leighflagg"}),(0,c.kt)("br",null),(0,c.kt)("sub",null,(0,c.kt)("b",null,"Null")))))),(0,c.kt)("h2",{id:"commands"},"Commands"),(0,c.kt)("ul",null,(0,c.kt)("li",{parentName:"ul"},"Cloning the repo",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"git clone --recurse-submodules https://github.com/Capstone-Projects-2023-Spring/project-robocontrol.git")))),(0,c.kt)("li",{parentName:"ul"},"Updating this repo locally with changes in the submodules",(0,c.kt)("ul",{parentName:"li"},(0,c.kt)("li",{parentName:"ul"},(0,c.kt)("inlineCode",{parentName:"li"},"git submodule update --init --recursive"))))))}function d(){return r.createElement("div",{className:"container",style:{marginTop:"50px",marginBottom:"100px"}},r.createElement(m,null))}m.isMDXComponent=!0;const h="heroBanner_qdFl",p="buttons_AeoN";var b=a(6706);function k(){const{siteConfig:e}=(0,l.Z)();return r.createElement("header",{className:(0,n.Z)("hero hero--primary",h)},r.createElement("div",{className:"container"},r.createElement("h1",{className:"hero__title"},e.title),r.createElement("p",{className:"hero__subtitle"},e.tagline),r.createElement("div",{className:p},r.createElement(o.Z,{className:"button button--secondary button--lg",to:"/tutorial/intro"},"Docusaurus Tutorial - 5min \u23f1\ufe0f"))))}function g(){const{siteConfig:e}=(0,l.Z)();return r.createElement(i.Z,{title:`Hello from ${e.title}`,description:"Description will go into a meta tag in <head />"},r.createElement(k,null),r.createElement("main",null,r.createElement(b.Z,null,r.createElement(d,null))))}},6706:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(7294),n=a(4912);function o(e){return r.createElement(r.Fragment,null,r.createElement(n.Z,e))}},6922:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(7294),n=a(9337),o=a(9676);const l={React:r,...r,Figure:n.Z,dinosaur:o.Z}},9676:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAT3UlEQVR42u1dCVQVV5pWXNt2N0czykl33KImZ7IgKgqIghq3KCDK+qowCek2c2K0Mx3idBxakzYxJnZiq3Gf6Bg7UdN2R51MxnTSia3gew9Rwccm7oqiiIK4sPxTt1hEHo9XvPVW1fed852Dr+67UNb/1f3/+9/731atAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8i2CxGjDUJXzMGmcSZnmoHAF7B6GMJvYPNwq5gk1AmMS/YJMbaahtkNsRLbeghmoU4d7cDAO+NCEbhQCMjrZbe5q81bhdyVOwuXbtqZdDSZ+yau9oBgNcgGeIvmzDQJkUy1ix8ZKMtsWvuagcAXsNYs/iyLSNlIgk2GebLQjKJQ6R/32+mbcWYI8KTrm6HJwR4170yCV80Y6T1I4kklH122lFNG9e2wxMC3Ao/U1KnQLPgF2SK/xeri5TiIxlikX1DBXVANpoXSy/DzGCjYfdYs2FRiFkcxWxEu/GF0RAm3fT1Bv8JJyV+LLlV08ccnNuFCQeGAdrheWkkXxaSGueruZFDurlrzfn4QSbDGRgAqJD3JK4NMcU8oo3RIz1hOB4q6AZeCzKK0aoXCIs58DBBt9Esfip5Ke3UPkN1Eg8TdB8N+5grr+JRxPAJHiLoTgaZhf97MiuqvVqTgNPxEEEPcK0qBTIyNa6rnWw1CLooJjHMUZc6KMWnNs9xDg8Q9ACLQtMMvbhfeFi7tuoLZMhBz1NczaUw2H4OFizhAYFe5l0uM+61m53wgMAWM+C7aBr425Ey2c8umPpdxmO+oxQPWz8cvnOmTGf7Gf1DDHXs25lYxMrIfmafOdnvOe4WONZsk4XhaD7nkJpAPQN96w2a/cw+c7S/QYsC6vuq46D/CHD+7zQaRvDmYsXVbG6CEWmZQ5YGWRk0+8zR/phb1bg/9pkLgvVk/twso+EViETbfPw1PyuDHrDQ36n4o6GL1eHRn7skDhlrEnZyuvbKMN/TIglKM9AzmyfLbzL2sBjZz89sniJfg2G7Nvbwad+m3qB9OrQh/z0RTschzK1yXZAu8zi/CxQ9NJL4fT6d+kwdQG27drB6q9WxXbcO1GfaAPL78wswcBfx6Y2T6ZHxv5DJfuY1acj5Kl55JHHPtOCBaOozZQC18mltUxhWlNoyobjwDQVyng/hVhyBaYbBrEKhW0aNL2Y85LO2lB37daHhX86AAemAPC4z6R5sEt9j6nWXONr8vJ3D4qhj287tIRIIxMP7PmrKd151p1vV3MjRtmt7eiT0F+QbN4z6xQ6T/eO2XdrbbP8z3y5wtyAQT+VAxAh336wcczQVhPfsKM+ANJWsYp+xRFS7Hh2b/C6LSWBIEIgnsuh73T1b1VRA3ql/dxq5d5bd74/4OlJu21TgjtktCMT9uwbdFJDXjx5TBzQ5cigRR71I/hZJ7bpbTwf3mT4QxgSBuHtbrSHcnUlAlstwxXqdgcmjmsyTIJkIgag2SGcZ8qYCckcWyAUdTpBnsBr398yWKTAoCESd07xD3rFeHMdmqxztj81uNe5v6B+CYVAQiAeD9qPiIOkP/NIVN9l//nArg/ZNeNLh/nzjn7Tqr//rw2FQEIg6M+lN7RcY/LvR3PQHupdh6S9R+LH5ZMh8i17NfoeS81bSO6fX0cfn/ps2X/wL7bzyv/TNtYP0z5KjdLw0hwrKL1DR/Rt0r+q+Plys0d/HyMtDGib4nNlx5ur+QPcZuLPQTSa9bjk0oyuM2dX9adm4Zx57jeIzk+lXliX0Ru4KSjm1hlac/S/69MKXtP3yXvrr1b/Td8WplHbzOGWV5dPZO5fo+v0Slxi4ZgTiiUw66BoD/32BPQO/zI2Ba0cgbs6kg9aMPfFbWn5mM/258H80a+CaEYi7M+ngA7JR4ERpHgFqEogbM+lgDSelv0LfFx+B1SNIBxtzWsarlH27ABavZoF4YsOUHhliEuX4AlCOwsJC2rVrF7+JwjHGuU8Em4X9MHDn+afzOzRtzGVlZbR69WqKjY2lqKgoev/996m4uNihvqqrqyklJYU6dKhf3Kq/Pel6izuKK246bYQXLlygvXv30ldffUWZmZlO9cX6CAwMpI4dO1Lbtm3pueeeo61btzrUV1ZWFj3++ONWKxseffRRMpvNLe7vzTffrClF5ONDEydOhIuldb53ZqNTxpyfn08RERFWBsiM2mQytbi/+fPn29zCnJSU1KK+ioqKyNe3poTpU089RRs3bqTt27dTQEBAvUiuXr2quL8ff/xRFgYT7e7duxGk64E/FBsdFsfhw4epR48eNTsvO3WioKAgmjRpEvXu3Vv+rHPnzvTTTz8p7u/dd9+tqXwouS/Lly+nS5cuUUlJCa1fv17ui11j7pFSTJs2Tf4O+7tu3bpV//ndu3fr3v40Y8YMRX1VVFTQkCFD5O8sW7YMmXS98MLdQofEYbFYqFu3brLBsBGEBa11KC0tpcTERPkaa8NGGXs4ePCg/HZu06YN7du3z+r6/v3769/e6enpdvvbs2dPTeHrnj1l968xLl68SN2712yR/vbbb+3299lnn8ltn3jiCbp37x4y6XphedWdFouDBbiDBw+WDWb27NlUWVlp1aaqqooiIyPlNsOHD3/IqBrj9u3bNGjQILnt4sWLbbZbuHCh3Mbf37/J31kH9rvq+mPBuS2w0Yi18fPzk4NvW2C/iwmDtd22bRsy6RAINWvM48aNq48z2L9tgblH/fv3l9suWLDAZrt58+bJbZ5++ulmhcRGpscee8yu4a9YsUJuM2zYMNk1soXy8nLq16+f3Hbnzp0227EJAtZm4MCBVv0hkw4XS8aNGzdkV4S9bZmxMMM6f/683e+lpaVR+/Y1W5A//PBDq+vr1q2Tr7E2GRkZil2nrl27Um5ubpOTBuwaa/PNN9/Y7a/u97MRgsUmjcE+Y8JgbbZs2YJMut6oZGnJ6NGjHz5bQzKYggLlWXf2BmbxA/suC+LZbNKOHTsoLi6OWrduLXPz5s2K+2P5DNYXC5rz8h6sGbt8+bI8qrFrrI3S4JuNNOw7ycnJVtfffvvtZkcjTPNqnMtOb7BrRGPGjJFnlpiRfPDBB826VbbABNGrVy/rii/t2tGqVata7OY9++yz8ve7dOkiC41NAdfNng0dOlR2x5TCaDTKfwf77tKlS2UhsJiEuXFs0oCJ+9ChQ+pYauKOPel65sT0JJckCpXmJVhgzLLZM2fOpEWLFj00ArR0oqCp/AuLj9hI0lIwkbKRrG7mqy42YVyyZIl61mJhqYnruercdtUuI2HTzZs2baK1a9fSkSPOrURm8U1droOxb9++tGHDBixWxGJFkVJLjmEFYoMcCYuxmpsBQ5Cuu+Xu8+hk2SmoQ63L3ZFJ90w8cuD6YVi9KgWCTLrHuDB3uVwep5qqoQC1CASZdM8z+sQb9P6ZTbSjcD+KNnAvEGTSUfYHAkGQDoGhcBymeUGUHkUmHdS6wG5VlmFPOgjq/gAdEMQRbCCoZYEgkw5CIMikgxAIMukgBIJMOgiBIEgHIRBM84KgegSCTDoIgSCTzvcWXbNAv7bE0/oL0fSPG1F0+k4k3aoMp4rqmUSkL8LFAus563gCbb88h4ruR+hOCKoQCIJ07/CFDAP9rWg23a+GILgVCDLp3uGSghi6WREOMXAvEGTSPcrxUpzxtTRqQAQqEQgCck9WNzFQasksCEBVAkEm3WMjB8SBIB20QbhVmOYFbXBpQazLDYjlR25XhetGIJOyXuw5JntuF2TSNVd61EAlLpytqpa4sjCWJmSLMtdcidG2QKhV67CcxHVh2WJVLVcik65zjmVZ9QyRxmcKFHpSJMkoaGqOSHGnDPTGuXj53w1pLIvSnECk+yoPzRZPh2Un/r3x/YZZEifBxdLrcpOMB6JQyt3Fc7QokOb4OoJ0vdEs0LgTLRNGHQ/cnE07JZEcLo2SXTCtC2RCdmJ8aI64MNSSOI25YMik64COiqMxPy6M0cMI0oDCGmTSdeBWuUIcYbWBe6kGZrdacM/VIafF7sikazggb2nMYU8gJZURehJIVUhO0iPIpGt29HCdOBj/qDMXS3ohfIogXctLUDJd516xaeCvb8yhMv24WGekQP2VsFNJ3TDNq1G60r2qY4IkFLWLpIX3fMojIkEm3QsV0LMFlwuEcfS/P0N+ft29ypdf/qWnBEJhFiEJmXQIRDH7RQ2uP5fcW+zbt6PHBDIhJ/EluFhwsRRxzsl4OmgeTyZTiFdZXDzVUwLJd6uLhSBdO0H63huzdRWkM9fKreJAJl07SULGjy7H6iuTbhHXI5Ou8URhGBKFHCcKEZB7fxQ5iqUm/C41QSadk8WKrhHJJ4X6crFCLeKfkEnXiavl7HL31LJZutgPUrfcPSxXmIoNU3rcMGURsGGKpw1TyKTzKZTxmWJtnkT6OSOBxhyYRX6fPW9lML0C+3k9KdgUR47s4dSWW4kF3Gy5RSbdtXTUMEaM6NG84bVuRUNSAiThSCNNlkCDk/25FAfjqFE9XVO0IVtcW1uwoTLMInyEsj86FohSllaGU7mOyv5MPR7bIyRrXmcUjoNAQFR3h0BAVHeHQEBUdwchEFR3ByEQVHdHkA6BQCCY5oVAIBBk0tUrEH//Htwm/jyZSedWIMikc55JVxFdkkmHiwWBgAjSIRAQmXQQAkEmHYRAkEkHeRDIP0ujaOG5eJqWK8j8jfQzOyQHAkEmXfcC2XA12uaOuk1F0RAIgnRtC4Qd4XyifBZZ7kRaHefMRg5722wbjySsD9YX61MLx0OH5cwNnJwX1xXTvDoTyF3JeD8pjKHncx4Y+xTp51VXYuRrrM3CJk6ybUx22u2D/mLlPuquTc4RavqrVv2e9LthOcKqgPNRP0MmXQcCqZAMdsFZ28b/unTNf1QvGpceZ1cg48xx5NPOh4Z/PsVmG79tz1Prtj5q3ZPekD/4mZLaIZOu9dpXx+1XKBl3XFlFk9BMAw1+a4Tddo8Zhqkyk95EQbz5cLG0Xsk9S3TLUQfN8ddnErRS9seMIF3rZ4FYPC+QF3IFrQjkFjLpOAvE5UwsMGhFIBZk0rV+FsgJweMC+Vilp95a34uwBpl0rdffNXtWIKzS+9Hbs2hlYSwZThnkqWA2onx+LZr7KeDGFdxDsw3jwnIS18mnSWWLd9iIEmpJfMvtU8DIpHtwBMny/Ahii/8mBe88JxRb8BJIc3tCEUG6Nt0re/zgcozqBVLrfm3GNK+aC1Ef408cjBM5Po2qhfdS6dZTppBJd2/cEWoRuRQIY8/RfdWQSbfP3LlhSoPuxSGpcb7IpMO1UsIe/n1UkUm3OxrmCsF2jTs09aU+0kO5zQwcLhYHTBe5Fgdb1HirMlwLLtbdSVkv9lSS01ha93CCzMpP4UGQzve5g+7iHzk+z7CF97JWadIvr8EDqmJZcmTSvUSzd5aWKOX8swn1y+tVLpCD001JnezHHkdE/yYe1B17IkEm3U3BeTq/o8faK9Hy0nvVn3JrET5SvAxeeii/sfGwqqSY5DVk0j3sXh3jd/Rgm7V43+Ou8F7uSyyT+P1EizjdnkC+sDPk7x+TPrcvMukemr3K5DtA532PuyP3EZojvtvc9G6mggd3LcgoLAg49PD6FQTp7li5K6hGIE3tcVejQGSRWBKn2RpBLrXgAbK2vws0zu2PaV7t7P1whnV73NUuEHZstC2B3HFwtuVIkEn8cKxRiJFGkn8NyZgbGGw07IaROzmCZKtLIGyPu6oz6fY2VkkP5R4MEwJxlCGmOG4y6ferw525l5u2BHIdhsmRQOBiOUy2gNLhGCRb/M6ZIB3U8PZaZ5haNosbgRTcjXT8XnKFqbZGkK9gmDxtjlKPOLZwNs37j1uzHbwXYWlzOwMXwTCRKFSaKJyeK8huFU8jh5K6xNaJQqGUuVU2R476aVqzOAqGiaUmSnjmXiTXy0xePZOgLN7ISxymfL06pfhID+YcjJMTgXAah7xymu9CclfuR8jFJhTcy1EHSvgYlsE41VVq1NPccX0O1wJhFVcU3UuOmNzyfeWpcb7Ih/C1YYqnfAirsnijkt8l7iz/EZ1vUJQMnJif0NvRQnBrYZw8bZriRyDbrvE9euwpnqOs1E+OsNjhogsBh17sKT2YIhgnLxunRC7WZc3OF6ic4w1SN6WRLTJP0ehxOSRrXmfn6lwZxWgYJ8r+NKywmMbhdG5DLrkYp+ReqsbnGCa7qij1pzBOVDdh3HqN7zMN/3pjttLA/D9dVt8q6suoNmNNwl9gnPreRPV76c1czbE4WKJyUo6il8euFErxcWkROD9TUqdgk2EfjJOf3IgnRfLepViqrOY37mCbtKbmKhLH1pDvU9q6pVIi29SOmS19zWxNqC3MUM25W6Vg5KhmhRlaUavWHjgoxzAHs1scBe4ZclUOl4sjJt9AxrIoboVRUhmuNCA/F2ZJnOTRs0BC0wy9gk3iamyr5ad2lquCd1alZM2VGG6PNGBJQJbnCM+ze7+sSslKr56RPj7D0K92WQrWbnEiFLYsxZG1W2zEYMszeC0herUiQv77FGTIz7EDcRSVEPUYKMUnyGgYIY0qyVIAuVN6WMdrdyZiuYqXgvixRwX5KOjxmTWLHdnORLZchfnrEdLb9+XTCZKLEiv78GfvRXA0QsykmxXhlF8eST8UR9G6i9H0q7x4Cm10H2HZQoUkhmsSj0/IFnZOyBFeDctNGNoKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsI3/BxVeQNnL1kBuAAAAAElFTkSuQmCC"}}]);