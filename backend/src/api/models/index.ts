'use strict';
/*import{pathImport} from 'path';
import {sequelize} from 'sequelize';
import {processImport} from 'process';
import {configImport} from '__dirname + /../config/config.json';
const path = pathImport;
const Sequelize = sequelize;
const process = processImport;
import{fsImport} from 'fs';
const config = configImport[env];
const fs = fsImport;*/
const fs = require('fs');
/*import * as fs from 'fs';
import * as path from 'path';
import * as Sequelize from 'sequelize';
import * as process from 'process';*/
//const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;

if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(__dirname)
    .filter(file => {
        return (
            file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
        );
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
export default db;