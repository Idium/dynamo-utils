import AWS from 'aws-sdk';
const dynamoDb = {};

dynamoDb.init = function(region) {
  let credentials = new AWS.SharedIniFileCredentials({
    profile: 'default'
  });
  this.config = new AWS.Config({
    credentials: credentials
  });
  AWS.config.update({region});

  this.ddb = new AWS.DynamoDB();
  this.docClient = new AWS.DynamoDB.DocumentClient();
};

export default dynamoDb;
