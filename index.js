import { Eden } from "eden-sdk";

import dotenv from "dotenv";
dotenv.config();

const {EDEN_API_KEY, EDEN_API_SECRET} = process.env;

const eden = new Eden(EDEN_API_KEY, EDEN_API_SECRET);

let config = {
  text_input: "The Simulation Sessions happening on Mars, desertpunk nomads, solar energy",
  width: 768,
  height: 512
}

// let result = await eden.create("create", config);
//
let result = await eden.getCreations({});

for (let creation of result) {
    let {task, uri} = creation;
    console.log(`prompt ${task.config.text_input}, uri: ${uri}`);
}

console.log(result);
