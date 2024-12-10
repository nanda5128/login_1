const express = require('express');
const app = new express();
const dotenv = require('dotenv');
require('dotenv').config();
const PORT = process.env.PORT;
require('./db/connection');
const adminRoutes = require('./routes/adminroutes');
app.use('/admin',adminRoutes);
const mentorRoutes = require('./routes/mentorroutes');
app.use('/mentor',mentorRoutes);





app.listen(PORT,()=>{
    console.log(`server running at PORT ${PORT}`);
})