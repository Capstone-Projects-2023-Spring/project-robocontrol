"use strict";(self.webpackChunkcreate_project_docs=self.webpackChunkcreate_project_docs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"docsSidebar":[{"type":"link","label":"Introduction","href":"/project-robocontrol/docs/intro","docId":"intro"},{"type":"category","label":"Requirements Specification","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"System Overview","href":"/project-robocontrol/docs/requirements/system-overview","docId":"requirements/system-overview"},{"type":"link","label":"System Block Diagram","href":"/project-robocontrol/docs/requirements/system-block-diagram","docId":"requirements/system-block-diagram"},{"type":"link","label":"General Requirements","href":"/project-robocontrol/docs/requirements/general-requirements","docId":"requirements/general-requirements"},{"type":"link","label":"Features and Requirements","href":"/project-robocontrol/docs/requirements/features-and-requirements","docId":"requirements/features-and-requirements"},{"type":"link","label":"use-case-descriptions","href":"/project-robocontrol/docs/requirements/use-case-descriptions","docId":"requirements/use-case-descriptions"}],"href":"/project-robocontrol/docs/category/requirements-specification"},{"type":"category","label":"Software Development Plan","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Activities","href":"/project-robocontrol/docs/development-plan/activities","docId":"development-plan/activities"},{"type":"link","label":"Tasks","href":"/project-robocontrol/docs/development-plan/tasks","docId":"development-plan/tasks"},{"type":"link","label":"Schedule","href":"/project-robocontrol/docs/development-plan/schedule","docId":"development-plan/schedule"},{"type":"link","label":"Development Environment","href":"/project-robocontrol/docs/development-plan/development-environment","docId":"development-plan/development-environment"},{"type":"link","label":"Version Control","href":"/project-robocontrol/docs/development-plan/version-control","docId":"development-plan/version-control"}],"href":"/project-robocontrol/docs/category/software-development-plan"},{"type":"category","label":"System Architecture","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Class Diagrams","href":"/project-robocontrol/docs/system-architecture/design","docId":"system-architecture/design"}],"href":"/project-robocontrol/docs/category/system-architecture"},{"type":"category","label":"API Specification","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Class Documentation","href":"/project-robocontrol/docs/api-specification/class-documentation","docId":"api-specification/class-documentation"}],"href":"/project-robocontrol/docs/category/api-specification"},{"type":"category","label":"Test Procedures","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Unit tests","href":"/project-robocontrol/docs/testing/unit-testing","docId":"testing/unit-testing"},{"type":"link","label":"Integration tests","href":"/project-robocontrol/docs/testing/integration-testing","docId":"testing/integration-testing"},{"type":"link","label":"Acceptance Testing","href":"/project-robocontrol/docs/testing/acceptence-testing","docId":"testing/acceptence-testing"}],"href":"/project-robocontrol/docs/category/test-procedures"},{"type":"category","label":"Class Diagrams","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"OpenCV Class Diagram","href":"/project-robocontrol/docs/Class Diagrams/OpenCV Class Diagram","docId":"Class Diagrams/OpenCV Class Diagram"},{"type":"link","label":"Robot Code Class Diagram","href":"/project-robocontrol/docs/Class Diagrams/Robot Code Class Diagram","docId":"Class Diagrams/Robot Code Class Diagram"},{"type":"link","label":"Website Class Diagram","href":"/project-robocontrol/docs/Class Diagrams/Website Class Diagram","docId":"Class Diagrams/Website Class Diagram"}]}]},"docs":{"api-specification/class-documentation":{"id":"api-specification/class-documentation","title":"Class Documentation","description":"What should be in this section.","sidebar":"docsSidebar"},"Class Diagrams/OpenCV Class Diagram":{"id":"Class Diagrams/OpenCV Class Diagram","title":"OpenCV Class Diagram","description":"","sidebar":"docsSidebar"},"Class Diagrams/Robot Code Class Diagram":{"id":"Class Diagrams/Robot Code Class Diagram","title":"Robot Code Class Diagram","description":"","sidebar":"docsSidebar"},"Class Diagrams/Website Class Diagram":{"id":"Class Diagrams/Website Class Diagram","title":"Website Class Diagram","description":"","sidebar":"docsSidebar"},"development-plan/activities":{"id":"development-plan/activities","title":"Activities","description":"Requirements Gathering","sidebar":"docsSidebar"},"development-plan/development-environment":{"id":"development-plan/development-environment","title":"Development Environment","description":"This section contains an outline of the hardware and software components of this project. This includes the components necessary for the robot to function properly, the components needed for communication, and the components to host the services such as the website and the remote server.","sidebar":"docsSidebar"},"development-plan/schedule":{"id":"development-plan/schedule","title":"Schedule","description":"The schedule was structured into distinct sections that corresponded to specific project milestones. For each milestone, there were associated tasks that needed to be completed before moving on to the next phase and for presenting. The elaboration phase is the phase dedicated to documentation of the project. The Hello World demo contains the tasks which must be completed that would prove the projects overall design concept. Subsequent milestones built on the preceding tasks until the Final Demo, where the project should be completed days in advance to allow time for final testing and preparation.","sidebar":"docsSidebar"},"development-plan/tasks":{"id":"development-plan/tasks","title":"Tasks","description":"1. Develop User Wireframes & Website Interface Mockups","sidebar":"docsSidebar"},"development-plan/version-control":{"id":"development-plan/version-control","title":"Version Control","description":"Version control tool: Git version control","sidebar":"docsSidebar"},"intro":{"id":"intro","title":"Introduction","description":"Robocontrol is a user-friendly way to interact with the Adeept RaspTank. The RaspTank is a small \'tank\' with treads, a camera, an ultrasonic sensor, and an arm with a claw. In addition to the \'out of the box\' functionalities of the RaspTank, our team has enhanced the user experience by creating an \'Autonomous\' mode, which allows the tank to navigate an obstacle course without human intervention.","sidebar":"docsSidebar"},"requirements/features-and-requirements":{"id":"requirements/features-and-requirements","title":"Features and Requirements","description":"- Movement Control","sidebar":"docsSidebar"},"requirements/general-requirements":{"id":"requirements/general-requirements","title":"General Requirements","description":"- Adeept RaspTank","sidebar":"docsSidebar"},"requirements/system-block-diagram":{"id":"requirements/system-block-diagram","title":"System Block Diagram","description":"Raspberry Pi Peripherals","sidebar":"docsSidebar"},"requirements/system-overview":{"id":"requirements/system-overview","title":"System Overview","description":"Robocontrol provides a web-based user interface to control the Adeept RaspTank robot. It will implement features such as obstacle detection, remote navigation, and autonomous functionality of the robot, as well as manual control via a website GUI. The RaspTank has a Raspberry Pi 3B+ microcomputer which will interface with a remote server and GUI over Wi-Fi to process the data from the various input devices such as the on-board camera and ultrasonic sensor, as well as control the motor drivers for the tank treads and the servos for the mechanical arm. Video feed from the camera will be transmitted in near-real-time to the GUI so that the user can see where the robot is going even if they are not in the same environment, and they are able to use this to navigate with controls on the GUI which will be transmitted back to the microcontroller through the server. If the user would prefer the robot to navigate its environment autonomously, the server will use camera and sensor information it receives from the microcontroller to make autonomous navigation decisions using Python and transmit these decisions back to the microcontroller so that they can be implemented by the motors in the robot\u2019s tank treads.","sidebar":"docsSidebar"},"requirements/use-case-descriptions":{"id":"requirements/use-case-descriptions","title":"use-case-descriptions","description":"Three use cases are described in detail below. Each use case represents a different method of using the application, with the third one combining first two. These scenarios outline the edge of the device\u2019s capabilities showcasing the possibilities of the project.","sidebar":"docsSidebar"},"system-architecture/design":{"id":"system-architecture/design","title":"Class Diagrams","description":"Robot Diagram","sidebar":"docsSidebar"},"testing/acceptence-testing":{"id":"testing/acceptence-testing","title":"Acceptance Testing","description":"| Test ID | Action/Steps | Expected Results |","sidebar":"docsSidebar"},"testing/integration-testing":{"id":"testing/integration-testing","title":"Integration tests","description":"Tests to demonstrate each use-case based on the use-case descriptions and the sequence diagrams. External input should be provided via mock objects and results verified via mock objects. Integration tests should not require manual entry of data nor require manual interpretation of results.","sidebar":"docsSidebar"},"testing/unit-testing":{"id":"testing/unit-testing","title":"Unit tests","description":"For each method, one or more test cases.","sidebar":"docsSidebar"}}}')}}]);