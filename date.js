module.exports.getDate=function(){
    const today = new Date();
    const options={
        weekday:'long',
        day:'numeric',
        month:'long'
    };
    return today.toLocaleDateString('en-US',options);
   
}
module.exports.getDay=function getDay(){
    const today = new Date();
    const options={
        weekday:'long',
    };
    return today.toLocaleDateString('en-US',options);
    
}
//console.log(exports);
