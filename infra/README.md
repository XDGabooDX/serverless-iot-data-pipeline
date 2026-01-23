## Infrastructure

This directory will contain Terraform code used to provision AWS resources
such as Lambda, API Gateway, SQS, DynamoDB, and IAM roles.

### DynamoDB

A DynamoDB table will be used to store processed IoT data.
The table will be designed for high write throughput and low latency,
making it suitable for serverless event-driven workloads.

### Terraform

Terraform is used to define the AWS infrastructure as code.
The initial configuration sets up the AWS provider and region,
serving as the foundation for future resources such as Lambda,
SQS, and DynamoDB.
