import { Typography, Paper } from "@material-ui/core"

import useStyles from "./Styling/Styles";
import Options from "./components/Options";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";

const App = () => {
    const classes = useStyles();
    
    return (
        <div className={classes.wrapper}>
        <Paper>
            <Typography variant="h1">Video Chat Application</Typography>
            <Typography variant="h2">Created by Nathan Williams</Typography>
        </Paper>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    )
}

export default App;