const { Webhook } = require("discord-webhook-node");
const webhooks = require("./config.json");

function sendMessage(webhook) {
    const hook = new Webhook(webhook);
    hook.send(webhooks.message);
    console.log("sendt message with webhook")
}

sendMessage(webhooks.webhook1)
sendMessage(webhooks.webhook2)
