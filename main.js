const element = React.createElement('div', {}, 'hello world')
const channelName='Feed to Mind'
function getChannelName(){
    if(channelName=='Feed to Mind')
    return <div><h2>{channelName}</h2></div>
    else 
    return 'does not match';    
}
const element2 = (
<div>
    <div>Hello world</div>
    <h2>{getChannelName()}</h2>
</div>)
ReactDOM.render(element2, document.getElementById('app'));