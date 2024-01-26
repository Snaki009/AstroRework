import { getAvatar } from "./account/index.js"

export const handleCommands = async (interaction, client) => {
    // most commands would require interaction to be passed so they can respond and client to do stuff

    switch(interaction.commandName) {
        case 'avatar':
            getAvatar(interaction, client)
            break
        default:
            break
    }
}

export const handleInlineCommands = async (msg, clieant) => {
    const c = msg.content

    if(c.startsWith('<COMMAND>')) {

    }
}