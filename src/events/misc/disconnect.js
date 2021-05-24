
module.exports = class{
    constructor(client){
        this.client = client;
    }
    
    async run(){
        console.log(`[INFO] ${moment} You have been disconnected`);

    }
}