import express = require('express');

var table = new UpgradeGameTable();

exports.index = (req: express.Request, res: express.Response)=>{
    res.render('index', { title: 'Index' });
};

exports.play = (req: express.Request, res: express.Response)=>{
    res.render('table', { name: req.body.name });
};