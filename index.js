import { Eden } from "eden-sdk";

const API_KEY = "admin";
const API_SECRET = "admin";

const eden = new Eden(API_KEY, API_SECRET);

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
