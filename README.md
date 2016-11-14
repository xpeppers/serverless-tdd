# Serverless TDD example

## Requirements
- Docker

## Usage
Build and start Docker container
```
docker build -t xpeppers/lambda .
docker run -it -v $(pwd):/home/ec2user xpeppers/lambda
```

Install dependencies
```
npm install
```

Run unit tests
```
npm test
```

Run acceptance tests locally
```
npm run test:acceptance
```

Create a `.env` file with AWS credentials (Admin access is needed)
```
AWS_ACCESS_KEY_ID=<key>
AWS_SECRET_ACCESS_KEY=<secret>
```

Deploy to AWS
```
npm run deploy
```

Run tests against AWS endpoint returned by deploy command
```
npm run test:acceptance ENDPOINT=<AWS Endpoint>
```
