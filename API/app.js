const promise = new Promise((resole,reject)=>{
    const job = "Web Developer";
    if(job == "Web Developer"){
        resole("Yes");
    }
    else{
        reject("Error Function");
    }
});
promise.then((result)=>{
    console.log(result);
}).catch((err)=>{
    console.log(err);
}).finally('Promise End');