# Serverless IoT Data Ingestion Pipeline

## Overview
This project simulates a real-world serverless data ingestion pipeline for IoT devices, designed with production-oriented constraints such as scalability, observability, and fault tolerance.

## Architecture
- API Gateway receives data from simulated IoT devices
- Ingestion Lambda validates and logs incoming events
- Messages are sent to an SQS queue for decoupled processing
- Processor Lambda consumes messages asynchronously
- Processed data can be stored in DynamoDB
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

- ## Usage Example

Below is an example of a simulated IoT payload that the ingestion Lambda is expected to receive:

```json
{
  "deviceId": "device-001",
  "timestamp": "2025-01-01T12:00:00Z",
  "data": {
    "temperature": 27.4,
    "humidity": 38
  }
}

