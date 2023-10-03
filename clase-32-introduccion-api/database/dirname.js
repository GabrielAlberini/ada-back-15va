import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const filename = fileURLToPath(import.meta.url);
const __dirname = dirname(filename);

export { __dirname };
