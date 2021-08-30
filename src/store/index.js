import { init } from "@rematch/core";
import * as posts from "./posts";
const models = { ...posts };

const store = init({ models });

export default store;
