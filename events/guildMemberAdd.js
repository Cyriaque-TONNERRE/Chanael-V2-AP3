const {register_user} = require('../fonctions/register_user.js');

const {QuickDB} = require("quick.db");
const db = new QuickDB();

const user_db = db.table("user");

module.exports = {
    name: 'guildMemberAdd',
    async execute(member) {
        if (!await user_db.has(member.id)) {
            register_user(member.id);
        }
    }
}