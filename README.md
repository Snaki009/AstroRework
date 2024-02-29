# Astro Bot refactor readme

Open source discord bot Astro project

## Deploy and testing

    1. Set token - obtainable from discord dev portal
    2. ``npm run start`` - to start the app

## Reasoning

    With replit as hosting bot started crashing a lot - we also reached limits for its database capacity so its good time for a refactor and change it to independend instance.

    Biggest problem with refactor is change key-value storage used in replit which requires a lot of changes

## Key concepts

    Discord api works using events. When something happens we can react to it using .on to listen and attach function to specific events.

    Most important being
    1. interactionCreate - which allows to take action for slash commands
    2. messageCreate - to listen for any message created

    Multi-server bots cant react to messages but we are not limited to it.

    Several apps can use the same bot token so they can all respond to same events using one bot.
    This way we could use old Astro and new at the same time to make the transition smooth.
    Only downside would be lack of shared database.

## Embed

    Embeds are a big part of discord applications. It allows to reply with fancy response instead of plain text.

    To create embed refer to discord.js docs on EmbedBuilders

## Additional info

    Psn api key is obtained by entering ``https://ca.account.sony.com/api/v1/ssocookie`` while being logged into sony services.
    You can use your own account which will cause bot to have access to your data and friends but it will have to be reset (almost) every time when you log in.
    With additional account that doesn't log in - it doesn't change for a long time but we should check if it's valid from time to time.
