var cron = require('node-cron');
const express = require('express');
const app = express ();
app.use(express.json());

app.get("/status", (request, response) => {
    const status = {
       "Status": "Running"
    };
    
    response.send(status);
});
app.get("/cron", (request, response) => {
    const status = {
       "Status": "Running"
    };
    cron.schedule('* * * * *', async () => {
        console.log('running every minute 1, 2, 4 and 5');
        const result = await fetch("https://cvback-yj18.onrender.com/",{
          method:"GET"
        });
        let res = await result.json()
        console.log("res ", res)
      });
    
    response.send(status);
});

app.listen(8080, () => {
    console.log("Server Listening on PORT:", 8080);
});



cron.schedule('* * * * *', async () => {
    console.log('running every minute 1, 2, 4 and 5');
    const resultcv = await fetch("https://cvback-yj18.onrender.com/",{
      method:"GET"
    });
    let rescv = await resultcv.json()
    console.log("res ", rescv)
    const resultupload = await fetch("https://upload-wps4.onrender.com/remove/video",{
      method:"GET"
    });
    let resupload = await resultupload.json()
    console.log("res upload ", resupload)
    const resultclient = await fetch("https://elearnclient.onrender.com",{
      method:"GET"
    });
    let resclient = await resultclient.json()
    console.log("res upload ", resclient)
    
});