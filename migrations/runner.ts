import {pool} from ".../config/db.js";
import* as fs from "nod:fs";
import * as path from "node:path"

const migrationsDir=path.resolve(_dirname, "../../magration");

async function runMigrations(){
console.log("starting database migrtions...");

const bootStrapFile= "000_create_migration_history.sql";

const bootStrapPath=await path.join(migrationsDir,bootStrapFile);

const bootStrapSql=fs.readFileSync(bootStrapPath,"UTF-8");

await pool.query(bootStrapSql);




}