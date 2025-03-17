📁 node-express-boilerplate
├── 📁 api
│ ├── 📁 controllers
│ │ └── userController.js # User controller logic
│ ├── 📁 enums
│ │ └── userEnum.js # User-related enums
│ ├── 📁 implementation
│ │ └── userImplementation.js # User-related business logic implementation
│ ├── 📁 routers
│ │ └── userRoutes.js # User-related routes
│ └── ─ routes.js # General API routes
├── 📁 src
│ ├── 📁 middleware
│ │ └── verifyToken.js # Token verification middleware
│ ├── 📁 models
│ │ └── userModel.js # User model schema
│ ├── 📁 queries
│ │ └── userQueries.js # User queries for database interaction
│ ├── 📁 services
│ │ ├── emailService.js # Email-related services
│ │ ├── responseService.js # Response formatting and services
│ │ ├── socketService.js # Socket.io services for real-time communication
│ │ └── tokenService.js # Token generation and validation services
│ ├── 📁 utilities
│ │ ├── constants.js # Application constants
│ │ └── messages.js # Application messages and error handling
│ ├── 📁 validations
│ │ └── userValidations.js # User input validation logic
├── ─ .env # Environment variables
├── ─ .env.example # Example environment variables
├── ─ .gitignore # Git ignore rules
├── ─ index.js # Entry point of the application
├── ─ package-lock.json # NPM package lock file
├── ─ package.json # NPM package configuration
└── ─ README.md # Project documentation
