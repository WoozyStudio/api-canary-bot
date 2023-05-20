<img width="150" height="150" align="left" style="float: left; margin: 0 10px 0 0;" alt="MatrixIA" src="https://cdn.discordapp.com/attachments/1059645728391168010/1109587140670664704/Active_Developer.png">

# API Canary

---

API Canary is a private bot created for a Discord bot development server. It has included commands specially created for the server but others in public form.

If you modify, download or fork the bot, it has to be accredited by Woozy's YT. Here are the instructions to use the bot:

1. Create a config folder and create a file called config.json with this information inside:

```json
{
  "token": "", //Your bot token here
  "botId": "" //Your bot id here
}
```

2. If you want to change the bot presence you can do it in the ready.js file.

```js
await client.user.setPresence({
  activities: [
    {
      name: "", //Text
      type: ActivityType.Watching, //Competing, Custom, Listening, Playing, Watching, Streaming
    },
  ],
  status: "", //dnd, idle, invisible, online
});
```

3. Install the necessary dependencies to run the bot:

```
@discordjs/rest
chalk
colors@1.4.0
discord-api-types
discord.js
```


