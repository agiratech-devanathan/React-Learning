// const element = React.createElement('div', {}, 'hello world')
// const channelName='Feed to Mind'
// function getChannelName(){
//     if(channelName=='Feed to Mind')
//     return <div><h2>{channelName}</h2></div>
//     else 
//     return 'does not match';    
// }
// const element2 = (
// <div>
//     <div>Hello world</div>
//     <h2>{getChannelName()}</h2>
// </div>)
// ReactDOM.render(element2, document.getElementById('app'));

function render(){
const element = `<div>
<div>Hello World<div>
<div><input type='text'/> </div>
<div>${new Date().toLocaleTimeString()}</div>
</div>`
document.getElementById('app1').innerHTML = element;

const element2 =  React.createElement(
    'div', 
    null,
        React.createElement('div', null, 'hello company'),
        
        React.createElement(
            'div', 
            null,
            React.createElement('input', { type: 'text' }),
            React.createElement('div', null, new Date().toLocaleTimeString()),
        )

    );

ReactDom.render(element2, document.getElementById('app2'));
       
}
setInterval(render,1000)


// function render() {
//     const element = `<div>
//     <div>Hello world</div>
//     <div><input type="text"/></div>
//     <div>${new Date().toLocaleTimeString()}</div>
//     </div>`;

//     document.getElementById('app1').innerHTML = element;

//     const element2 = React.createElement(
//         'div',
//         null,
//         React.createElement('div', null, 'Hello world'),
//         React.createElement(
//             'div',
//             null,
//             React.createElement('input', { type: 'text' }),
//             React.createElement('div', null, new Date().toLocaleTimeString()),
//         ),
        
//     );

//     ReactDOM.render(element2, document.getElementById('app2'));
// }

// setInterval(render, 1000);