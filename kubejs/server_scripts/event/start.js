PlayerEvents.loggedIn(event => {
    const {player, server} = event

    // 玩家首次登录
    if(!player.persistentData.logged) {
        player.persistentData.logged = true

        player.tell(Text.aqua("----------------------------------------"))
        player.tell(Text.of("欢迎游玩《核后世界(Post-nuclear world)》！"))
        player.tell(Text.of("Welcome to Post-nuclear world!"))
        player.tell(Text.of("本整合包是属于轻量魔改整合包。"))
        player.tell(Text.of("An integration package for lightweight modifications."))
        player.tell(Text.of("当前为1.0测试版本，如发现任何bug烦请上报制作组。"))
        player.tell(Text.of("This is the 1.0 Beta — please report any bugs to the dev team."))
        player.tell(Text.aqua("----------------------------------------"))
        
        // 开局给予20分钟恒温
        player.potionEffects.add('legendarysurvivaloverhaul:temperature_immunity', 20*60*20)

        // 新手礼包
        player.give('ftbquests:book')
        player.give('solcarrot:food_book')
        player.give('immersiveengineering:manual')
        player.give('securitycraft:sc_manual')
        server.runCommandSilent(`item replace entity ${player.username} armor.chest with sophisticatedbackpacks:backpack[sophisticatedcore:number_of_inventory_slots=27,sophisticatedcore:number_of_upgrade_slots=1]`)
        server.runCommandSilent(`item replace entity ${player.username} armor.legs with minecraft:leather_leggings`)
    }
})

ServerEvents.loaded(event => {
    event.server.runCommandSilent('gamerule reducedDebugInfo false')
})