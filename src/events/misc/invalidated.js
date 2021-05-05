
module.exports = (client) => {
    client.destroy();
    console.log("The session is invalid");
    process.exit();
}