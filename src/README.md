## Source Code

### Ingestion Lambda

The `ingest` Lambda is responsible for receiving incoming data from IoT devices
via API Gateway. It validates and logs incoming events and returns a basic
success response.

This function is designed to be small, stateless, and easy to scale.
