// import {sum} from "./mymath.js"; // local module
import { readFile } from "node:fs/promises"; // node fs module

async function main() {
  console.log("READ FILE DEMO");

  let filepath = "/Users/research/Desktop/dac-22/dac-22-kochi/day2/1.html";
  // let output =  readFile(filepath);
  // let output = await readFile(filepath);
  let output = await readFile(filepath, { encoding: "utf8" });

  console.log(output);
}

main();
