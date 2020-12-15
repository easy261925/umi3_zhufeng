/**
 * 写入临时文件
 */
const plugin = (pluginAPI)=>{
    //监听一个事件，生成文件了
    pluginAPI.onGenerateFiles(async ()=>{
        console.log('我要写history文件了');
    });
}
module.exports = plugin;