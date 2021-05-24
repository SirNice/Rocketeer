
class Command {
    constructor(client, {
        name = null,
        description = "No description provided.",
        category = "Miscellaneous",
        usage = "No usage provided.",
        enabled = true,
        aliases = new Array()
    }) {
        this.client = client
    }
}

module.exports = Command