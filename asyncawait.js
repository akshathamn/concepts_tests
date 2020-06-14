function makerequest(location){
    return new Promise((resolve,reject)=>{
        console.log(`making request to ${location}`)
     if(location === 'mandya'){
         resolve('say hi');
     }
     else{
         reject('cannot connect');
     }
    })
}

function processRequest(response){
    return new Promise((resolve,reject) =>{
        console.log('processing response');
       resolve(`extra information + ${response}`);
    })
}

async function dowork(){
    try{
        const response = await makerequest('mandya')
        console.log(response);
        const processedresponse = await processRequest(response)
        console.log(processedresponse);
    }
    catch(err){
        console.log(err);
    }
}
dowork();