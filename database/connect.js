mongoose.connect( process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("[DATABASE] Conectado a MongoDB") //mensaje de confirmación.
})
mongoose.connection.on("error", function(e) { console.error(e); });