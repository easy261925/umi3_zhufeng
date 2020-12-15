
let Service = require('./Service');
let pluginDev = require('./plugins/commands/dev');
let pluginHistory = require('./plugins/generateFiles/history');
(async function(){
    let service = new Service({
        plugins:[
            {id:'dev',apply:pluginDev},
            {id:'history',apply:pluginHistory}
        ]
    });
    //运行dev这个命令
    await service.run({name:'dev'});
})();
/**
 * 插件是有标准定义的
 * 格式{id:'dev',apply:此插件对应的函数}
 */