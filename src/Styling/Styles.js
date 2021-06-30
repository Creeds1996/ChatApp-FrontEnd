import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > .MuiPaper-root": {
      maxWidth: "80%",
      padding: "2em",
      marginTop: "25px",
      "& > .MuiTypography-h1": {
        marginBottom: ".25em",
      },
    },
  },
  videoPlayer: {
    width: "100%",
    marginTop: "25px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > .MuiPaper-root": {
      width: "90%",
      marginBottom: "25px",
      textAlign: "center",
      "& video": {
        width: "100%",
      },
    },
  },
  options: {
    "& > .MuiPaper-root": {
      "& .MuiGrid-container": {
        padding: "1em",
        "& .MuiGrid-item": {
          margin: "1em 0",
          "& .MuiButton-root": {
            marginTop: "15px",
          },
        },
      },
    },
  },
  callNotification: {
    display: "flex",
    justifyContent: "center",
  },
}));

export default useStyles;
