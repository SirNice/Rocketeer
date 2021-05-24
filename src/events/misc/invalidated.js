module.exports = class{
    constructor(client){
        this.client = client;
    }
    
    async run(){

        client.destroy();
        console.log("The session is invalid");
        process.exit();

    }
}