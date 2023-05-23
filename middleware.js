const express = require("express");

const AppAvailability = (req, res, next) => {
    const currentDay = new Date().getDay();
    const currentHours = new Date().getHours();

    if ((currentDay >= 1 && currentDay <= 5) && (currentHours >= 9 && currentHours <= 17)) {
        console.log(`il est ${currentDay}h `);
        next();
    }else{
        res.status(403).send(`
        <body style="background-color: #2c3f50; color: #f5f5f5;">
            <div style=" display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh;">
                <h1  style="font-size: 4.5rem; ">Error 403</h1>
                <h1 style=" font-size: 4.5rem;">Your App is unavailable !!!</h1>
            </div>
        </body>
        `);
    }
};

module.exports = AppAvailability;
