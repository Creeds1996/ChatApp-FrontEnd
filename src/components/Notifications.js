import { useContext, Fragment } from "react";
import { Button, Typography } from "@material-ui/core";

import { SocketContext } from "../SocketContext";
import useStyles from "../Styling/Styles";

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext);

  const classes = useStyles();

  return (
    <Fragment>
      {call.isReceivingCall && !callAccepted && (
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <h1>{call.name} is calling:</h1>
          <Button variant="contained" color="primary" onClick={answerCall}>
            Answer
          </Button>
        </div>
      )}
    </Fragment>
  );
};

export default Notifications;
