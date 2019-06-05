import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import Rotate from "./src/Rotate";
import Random from "./src/RandomSequence";
import Spring from "./src/Spring";
import Parallel from "./src/Parallel";
import Sequence from "./src/Sequence";
import Staggered from "./src/Staggered";
import Draggable from "./src/Draggable";
import Colors from "./src/Colors";

AppRegistry.registerComponent(appName, () => Colors);
