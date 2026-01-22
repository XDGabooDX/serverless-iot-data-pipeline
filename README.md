# Serverless IoT Data Ingestion Pipeline

## Overview
This project simulates a real-world serverless data ingestion pipeline for IoT devices, designed with production-oriented constraints such as scalability, observability, and fault tolerance.

## Architecture
- API Gateway receives data from simulated IoT devices
- AWS Lambda (TypeScript) handles ingestion
- Messages are queued using SQS for decoupling
- A processing Lambda stores data in DynamoDB
- Logs and metrics are collected via CloudWatch

## Tech Stack
- AWS Lambda (TypeScript)
- API Gateway
- SQS
- DynamoDB
- S3
- Terraform (Infrastructure as Code)

## Goals
- Simulate ingestion of high-volume IoT data
- Practice serverless architecture patterns
- Apply infrastructure as code principles
- Design with cost awareness and scalability in mind

## Next Steps
- Implement Lambda ingestion function
- Define Terraform infrastructure
- Add basic error handling and retries
- Improve observability and logging
