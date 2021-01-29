const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();

type Lollies = {
    id: string,
    sender: string,
    reciver: string,
    msg: string,
    color1: string,
    color2: string,
    color3: string,
}



type AppSyncEvent = {
    info: {
        fieldName: string
    }
    arguments: {
        // title: string,
        lolyId: string,
        loly: Lollies
    }
}


async function addLoly(loly: Lollies) {
    let params = {
        TableName: process.env.LOLY_POP_TABLE,
        Item: loly
    }

    try {
        await docClient.put(params).promise();
        return loly

    }
    catch (e) {
        console.info("error in dynamo db ", e)
        return null

    }
}


async function getLollies() {

    let params = {
        TableName: process.env.LOLY_POP_TABLE
    }

    try {
        const data = await docClient.scan(params).promise()
        return data.Items
    }
    catch (error) {
        console.log("erorr during fetch data ", error);

    }

}


exports.handler = async (event: AppSyncEvent) => {
    switch (event.info.fieldName) {

        case 'addLoly':
            return await addLoly(event.arguments.loly)
        case 'getLollies':
            return await getLollies()
        
        default:
            return null

    }
}