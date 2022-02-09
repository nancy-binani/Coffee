import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    center: {
      marginLeft:"27rem",
    },
    code: {
      color: "white",
    },
    ser: {
      paddingLeft: "265px",
      color: "#5f6368",
    },
    title: {
      fontSize: "25px",
    },
    block: {
      marginBottom: "20px",
      boxShadow: "0 3px 10px white",
      color: "white",
    },
    imag: {
      height: "5rem",
      width: "6rem",
    },
    container: {
      backgroundImage: `url(https://ak.picdn.net/shutterstock/videos/1012349138/thumb/1.jpg)`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "repeat-y",
    },
    content: {
      paddingLeft: "200px",
      paddingTop: "10px",
      fontSize: "15px",
      width: "78rem",
    },
    wrapper: {
      display: "grid",
      gridTemplateColumns: "260px 760px 120px",
      height: "60px",
      alignItems: "center",
      color: "#5f6368",
    },
  
    logo: {
      display: "flex",
      height: "45px",
    },
  
    SearchBarWrapper: {
      backgroundColor: "#f1f3f4",
      width: "100%",
      maxWidth: "750px",
      display: "grid",
      gridTemplateColumns: "7% auto 10%",
      placeItems: "center",
      height: "45px",
      borderRadius: "6px",
      color: "#5f6368",
    },
  
    inp: {
      width: "100%",
      height: "30px",
      background: "none",
      border: "none",
      fontSize: "17px",
  
      "&:focus": {
        outline: "none",
      },
    },
  });
  