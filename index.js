/**
 * @format
 */

import { AppRegistry } from "react-native";
import Rotate from "./src/Rotate";
import Random from "./src/RandomSequence";
import Spring from "./src/Spring";
import Parallel from "./src/Parallel";
import Sequence from "./src/Sequence";
import Staggered from "./src/Staggered";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Staggered);
