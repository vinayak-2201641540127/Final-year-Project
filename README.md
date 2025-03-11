# Final-year-Project


DataVaultX: Secure Decentralized Data Storage Platform

1. About the Project
DataVaultX is a SaaS platform designed to securely store and manage user data using decentralized cloud storage and advanced cryptography. Built with a microservices-based architecture using the MERN stack, it ensures data privacy through encryption with Crypt.js and secure authentication via blockchain-based crypto wallets. AWS S3 is used as the primary cloud storage, and the system organizes user data using labels and tags for quick and intuitive access.
________________________________________

2. Tech Stack
Frontend:
•	React.js: For building a responsive, user-friendly interface.
•	Redux: For state management.
Backend:
•	Node.js + Express.js: For building scalable microservices.
•	MongoDB Atlas: For managing metadata and user information.
•	Crypt.js: For AES-256 encryption and decryption.
Blockchain Authentication:
•	Web3.js or Ethers.js: For interacting with crypto wallets.
•	Blockchain: Ethereum or Polygon network.
Cloud Storage:
•	AWS S3: For storing encrypted files securely.
Infrastructure:
•	Docker: For containerizing microservices.
•	Kubernetes: For orchestrating and scaling services.
•	Nginx or Kong Gateway: For API Gateway.
CI/CD & Monitoring:
•	GitHub Actions or Jenkins: For CI/CD pipelines.
•	Prometheus & Grafana: For performance monitoring.

________________________________________

3. Reference Materials
•	Documentation: 
o	AWS S3 Developer Guide
o	Ethereum Developer Portal
o	Web3.js Documentation
•	Cryptography: 
o	Crypt.js AES encryption: Documentation
•	Microservices: 
o	Kubernetes Official Docs
o	Docker Docs
•	MERN Stack: 
o	MongoDB Atlas, Express.js, React.js, and Node.js official documentation

________________________________________

4. Outline of the Project
1.	Introduction
2.	Technology Stack Overview
3.	System Design (HLD & LLD)
4.	Microservices Architecture
5.	Features and Functionalities
6.	Modules and Components
7.	Step-by-Step Development Process
8.	Folder Structure
9.	Roadmap for Project Completion
10.	Deployment and Testing

________________________________________

5. Detailed Overview
The platform is divided into modular services to enhance scalability and maintainability:
1.	User Authentication Service:
o	Blockchain-based crypto wallet login using Web3.js or Ethers.js.
o	JWT tokens for session management.
2.	Encryption Service:
o	Encrypts and decrypts user data using AES-256 via Crypt.js.
3.	Storage Service:
o	Uploads encrypted files to AWS S3 and stores metadata in MongoDB.
4.	Tagging and Labeling Service:
o	Organizes data using user-defined tags and labels.
5.	Notification Service:
o	Sends real-time notifications and email alerts.
6.	Audit Logging Service:
o	Logs every access and modification for security and compliance.
7.	API Gateway:
o	Routes requests from the client to appropriate microservices.

________________________________________

6. Standard Features and Standout Features
✅ Standard Features:
•	Secure user authentication via crypto wallets
•	AES-256 encryption for data privacy
•	Decentralized cloud storage on AWS S3
•	Labels and tags for efficient data organization
•	Responsive and user-friendly frontend

🌟 Standout Features:
•	Role-Based Access Control (RBAC)
•	Data versioning and restoration
•	AI-powered search and filtering
•	Zero-knowledge encryption (only users can decrypt their data)
•	Immutable audit logs using blockchain
•	Time-limited file sharing with expiration
•	Multi-tenancy for SaaS deployment
•	Custom branding for enterprise clients
