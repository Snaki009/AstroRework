import commandsList from '../config/init/commandsList'
import serverConsts from '../config/serverConfig'

const registerCommands = (client) => {
    const guild = client.guilds.cache.get(serverConsts.guildId)
    const commands = guild ? guild.commands : client.application.commands


    commandsList.forEach(command => 
        commands.create(command)
    )
}

export default registerCommands