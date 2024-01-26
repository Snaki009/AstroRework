const handleCommands = async (interaction, client) => {
    switch(interaction.commandName) {

/* TEMPLATE for commands
        case '<COMMAND NAME>':
            <CALL COMMAND FUNCTION>
            break 


*/
        case '':
            break
        default:
            break
    }
}

const handleInlineCommands = async (msg, clieant) => {
    const c = msg.content

    if(c.startsWith('<COMMAND>')) {

    }
}

module.exports = { handleCommands, handleInlineCommands }