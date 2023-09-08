# Prerequisites

- an aws account is available and a user has been registered
- aws cli is installed
- create an access key in "My security credentials"

# Environment

region: eu-central-1
account-id: ***
access key: ***
image tag: server

# Configure AWS CLI

aws configure
AWS Access Key ID [None]: ***
AWS Secret Access Key [None]: ***
Default region name [None]: eu-central-1
Default output format [None]: json

# Create ECR Repository

- Create test-repository

# Pushing a Docker image

- The Amazon ECR repository (server) must exist before you push the image. For more information, see Creating a private repository.

	$ aws ecr get-login-password --region eu-central-1 | docker login --username AWS --password-stdin ***.dkr.ecr.eu-central-1.amazonaws.com
	$ docker images
	$ docker tag server:latest ***.dkr.ecr.eu-central-1.amazonaws.com/***:latest
	$ docker push ***.dkr.ecr.eu-central-1.amazonaws.com/***:latest

# Create ESC Cluster

- Create Fargate cluster: "test-cluster"

- Create task: "test-task", AWS Fargate, 

- Create service: "test-service"

- 

# Change Security Group

Allow inbound from any address.

# Get the Public IP

Check the task for "Public IP"


