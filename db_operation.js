import pkg from "@aws-sdk/client-dynamodb";
const { DynamoDBClient, PutItemCommand, UpdateItemCommand, GetItemCommand, DeleteItemCommand, QueryCommand} = pkg;
const docClient = new DynamoDBClient({ region: "us-east-1" });

export const handler = async (event) => {



  let bookData;
  const { Records } = event;
  Records.map(async (record) => {
    const { body } = record || {};
    bookData = JSON.parse(body);
  })

  const {env: { DbName },} = process;

  // let bookData = event;
  // const params = {
  //   TableName: DbName,
  //   Item: bookData,
  // };
  
  
  // const { BookID, Title, Author } = event;
  // const params = {
  //   TableName: "Books",
  //   Key: {
  //     BookID: BookID ,
  //     Title:  Title ,
  //   },
  //   UpdateExpression: "SET Author = :author",
  //   ExpressionAttributeValues: {
  //     ":author": Author , 
  //   }
  // };
  

  // const { BookID, Title } = event;
  // const params = {
  //   TableName: "Books",
  //   Key: {
  //     BookID: BookID ,  
  //     Title: Title     
  //   },
  // };


  const { Author, Genre } = event;

  const params = {
    TableName: "Books",
    IndexName: "Author-YearPublished-index", 
    KeyConditionExpression: "Author = :author", 
    FilterExpression: "Genre = :Genre", 
    ExpressionAttributeValues: {
      ":author":  Author ,
      ":Genre":  Genre , 
    },
  };


  try {
    // const command = new PutItemCommand(params); 
    
    //const command = new UpdateItemCommand(params);

    //const command = new GetItemCommand(params);

    //const command = new DeleteItemCommand(params);

    const command = new QueryCommand(params);
  
    const data = await docClient.send(command);
    //console.log("Data", data)
    console.log("Data", data.Items);

    console.log("Successfull.");
    return {
      statusCode: 200,
      body: JSON.stringify({
        //message: "Book inserted successfully."

        //message: "Book updated successfully.",

        //message: "Book deleted successfully.",
        
        message: "Book retrieved successfully.",
        
      }),
    };
  } catch (err) {
    console.error("Error ", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Failed", error: err.message }),
    };
  }
};
