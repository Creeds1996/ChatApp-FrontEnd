import { useContext, Fragment } from "react";
import { Button, Typography } from "@material-ui/core";

import { SocketContext } from "../SocketContext";
import useStyles from "../Styling/Styles";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  const classes = useStyles();

  return (
    <Fragment>
      {call.isRecieved && !callAccepted && (
        <div className={`${classes.callNotification} test`}>
          <Typography variant="h2">{call.name} is calling:</Typography>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </Fragment>
  );
};

export default Notifications;
