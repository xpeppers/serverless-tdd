# Serverless TDD example

## Requirements
- Docker

## Usage
Build Docker container
```
docker build -t xpeppers/serverless .
```

Install dependencies
```
docker run --rm -t -v $(pwd):/home/ec2user xpeppers/serverless npm install
```

Run unit tests
```
docker run --rm -t -v $(pwd):/home/ec2user xpeppers/serverless npm test
```

Run acceptance tests locally
```
docker run --rm -t -v $(pwd):/home/ec2user xpeppers/serverless npm run local-acceptance-test
```

Create a `.env` file with AWS credentials (Admin access is needed)
```
AWS_ACCESS_KEY_ID=<key>
AWS_SECRET_ACCESS_KEY=<secret>
```

Deploy to AWS
```
docker run --rm -t -v $(pwd):/home/ec2user xpeppers/lambda npm run deploy
```

Run tests against AWS endpoint returned by deploy or info command
```
docker run --rm -t -v $(pwd):/home/ec2user -e "ENDPOINT=<AWS Endpoint>" xpeppers/lambda npm run acceptance-test
```
