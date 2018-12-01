const mongoose = require('mongoose');
const Meme = require('../models/Meme');
const MemeController = {};

MemeController.index = async function(req, res, next) {
    try {
        let memes = await Meme.find();
        return res.status(200).json(memes);
    } catch (error) {
        return res.status(500).json({error: error, message: "No se encontro ningun usuario"});
    }
}

MemeController.findOne = async function(req, res, next)  {
    let { id } = req.params;
    let meme = await Meme.findById(id).catch(err => {
        return next(res);
    });
    return res.status(200).json(meme);
}

MemeController.store = function(req, res, next) {
    let meme = new Meme({
        origen: req.body.origen,
        idioma: req.body.idioma,
        anio: req.body.anio
    });
    
    meme.save(function(err){
        if(!err){
            return res.status(200).json({ "message": "Se almaceno el meme exitosamente"});
        } else {
            return res.status(500).json({err : err});
        }
    });
}

MemeController.update = function(req, res, next) {
    let { id } = req.parmams;
    let meme = {
        origen: req.body.origen,
        idioma: req.body.idioma,
        anio: req.body.anio
    }

    Meme.updateOne({ _id: id}, meme, function(err) {
        if(!err){
            return res.status(200).json({ "message": "Se actualizo el meme exitosamente"});
        } else {
            return res.status(500).json({ err: err});
        }});
}

MemeController.delete = function(req, res, next) {
    let { id } = req.params;
    Meme.findByIdAndRemove(id, function(err) {
        if(!err) {
            return res.status(200).json({ "message": "Se elimino el meme exitosamente"});
        } else {
            return res.status(500).json({ err: err});
        }
    });
}

module.exports = MemeController;