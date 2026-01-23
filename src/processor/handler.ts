export const handler = async (event: any) => {
  console.log("Processing SQS event:", JSON.stringify(event));

  for (const record of event.Records || []) {
    const body = record.body;
    console.log("Message body:", body);
  }

  return {
    statusCode: 200,
  };
};
