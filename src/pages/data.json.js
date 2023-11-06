import {
  DynamoDBClient,
  UpdateItemCommand,
  ScanCommand,
} from "@aws-sdk/client-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const client = new DynamoDBClient({
  region: import.meta.env.REGION,
  accessKeyId: import.meta.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.AWS_SECRET_ACCESS_KEY,
});

export const prerender = false;

export async function GET({ params, request }) {
  console.log("running")
  const Item = await client.send(
    new ScanCommand({
      TableName: "ld-devrel-workshop",
      ExpressionAttributeNames: {
        "#SI": "signin",
        "#CK": "client_key",
        "#SK": "server_key",
        "#IU": "in_use",
        "#ID": "id",
      },
      ExpressionAttributeValues: {
        ":a": {
          BOOL: true,
        },
      },
      FilterExpression: "in_use <> :a",
      ProjectionExpression: "#SI, #CK, #SK, #ID, #IU",
    })
  );

  let returnData = [];
  function clearArray() {
    returnData.length = 0;
  }

  try {
    clearArray();
    const items = Item["Items"].map((item) => {
      return unmarshall(item);
    });
    const signinUrl = items[0].signin;
    const clientKey = items[0].client_key;
    const serverKey = items[0].server_key;
    const id = items[0].id;

    returnData.push(
      { signin: signinUrl },
      { client_key: clientKey },
      { server_key: serverKey }
    );

    const { inputItem } = await client.send(
      new UpdateItemCommand({
        ExpressionAttributeNames: {
          "#IU": "in_use",
        },
        ExpressionAttributeValues: {
          ":a": {
            BOOL: true,
          },
        },
        Key: {
          id: {
            S: id,
          },
        },
        ReturnValues: "ALL_NEW",
        TableName: "ld-devrel-workshop",
        UpdateExpression: "SET #IU = :a",
      })
    );
      console.log(returnData[0])
    return new Response( JSON.stringify(returnData[0]));
  } catch (err) {
    console.error(err);
  }
}
