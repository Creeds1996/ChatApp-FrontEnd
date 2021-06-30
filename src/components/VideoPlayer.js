import { useContext } from "react";
import useStyles from "../Styling/Styles";
import { Grid, Typography, Paper } from "@material-ui/core";

import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
    const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)
    const classes = useStyles();

    return (
        <Grid container className={classes.videoPlayer}>
            {/* Own Video */}
            {
                stream && <Paper>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>{name || "Name"}</Typography>
                    <video playsInline ref={myVideo} muted autoPlay />
                </Grid>
            </Paper>
            }
            
            {/* Users Video */}
            {
                callAccepted && !callEnded && (
                    <Paper>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom>{call.name || "Name"}</Typography>
                            <video playsInline ref={userVideo} autoPlay />
                        </Grid>
                    </Paper>
                )
            }
            
        </Grid>
    )
}

export default VideoPlayer;