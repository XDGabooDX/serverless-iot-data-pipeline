export const handler = async (event: any) => {
  console.log("Processing SQS event:", JSON.stringify(event));

  for (const record of event.Records || []) {
    const payload = JSON.parse(record.body);

    const item = {
      deviceId: payload.deviceId,
      timestamp: payload.timestamp,
      data: payload.data,
    };

    // Simulated DynamoDB write
    console.log("Storing item in DynamoDB:", JSON.stringify(item));
  }

  return {
    statusCode: 200,
  };
};
