import { useContext } from "react";
import useStyles from "../Styling/Styles";
import { Grid, Typography, Paper } from "@material-ui/core";

import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  const classes = useStyles();

  return (
    <Grid container className={classes.videoPlayer}>
      {/* Own Video */}
      {stream && (
        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video playsInline ref={myVideo} muted autoPlay />
          </Paper>
        </Grid>
      )}

      {/* Users Video */}
      {callAccepted && !callEnded && (
        <Grid item xs={12} md={6}>
          <Paper>
            <Typography variant="h5" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <video playsInline ref={userVideo} autoPlay />
          </Paper>
        </Grid>
      )}
    </Grid>
  );
};

export default VideoPlayer;
