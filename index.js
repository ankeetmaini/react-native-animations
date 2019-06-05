/**
 * @format
 */

import { AppRegistry } from "react-native";
import Rotate from "./src/Rotate";
import Sequence from "./src/Sequence";
import Spring from "./src/Spring";
import Parallel from "./src/Parallel";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Parallel);
