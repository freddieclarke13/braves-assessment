import React from "react";
import axios from "axios";
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

const App = () => {
  const [predictions, setPredictions] = React.useState([]);
  const [currentPlay, setCurrentPlay] = React.useState(0);

  React.useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/predictions")
      .then((response) => {
        setPredictions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handlePrevClick = () => {
    if (currentPlay > 0) {
      setCurrentPlay(currentPlay - 1);
    }
  };
  const handleNextClick = () => {
    if (currentPlay < predictions.length - 1) {
      setCurrentPlay(currentPlay + 1);
    }
  };

  const renderPlay = () => {
    if (predictions.length == 0) {
      return <div>Loading</div>;
    }

    const play = predictions[currentPlay];

    return (
        <div className="prediction">
          <Grid container spacing={2}>
            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
              <Card
                sx={{
                  marginTop: 4,
                  padding: 4,
                  bgcolor: "#13274F",
                  color: "#ffffff",
                }}
              >
                <Grid
                  container
                  spacing={2}
                  align="center"
                  justify="center"
                  alignItems="center"
                >
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
                  <Grid
                    item
                    xs={8}
                    sm={8}
                    md={8}
                    lg={8}
                    xl={8}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <CardActionArea>
                      <CardMedia
                        component="iframe"
                        title="test"
                        src={play.videoLink}
                        sx={{ width: 500, height: 281 }}
                      />
                    </CardActionArea>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
                  <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
                  <Grid
                    item
                    xs={6}
                    sm={6}
                    md={6}
                    lg={6}
                    xl={6}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography>
                      <span style={{ color: "#CE1141" }}>
                        <b>Game Date:</b>
                      </span>{" "}
                      {play.date}
                    </Typography>
                  </Grid>
                  <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography>
                      <span style={{ color: "#CE1141" }}>
                        <b>True Outcome:</b>
                      </span>{" "}
                      {play.trueOutcome}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography>
                      <span style={{ color: "#CE1141" }}>
                        <b>Predicted Outcome:</b>
                      </span>{" "}
                      {play.predictedOutcome}
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography>
                      <span style={{ color: "#CE1141" }}>
                        <b>Batter:</b>
                      </span>{" "}
                      {play.batter}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography>
                      <span style={{ color: "#CE1141" }}>
                        <b>Pitcher:</b>
                      </span>{" "}
                      {play.pitcher}
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
                  <Grid
                    item
                    xs={4}
                    sm={4}
                    md={4}
                    lg={4}
                    xl={4}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      textAlign: "center",
                    }}
                  >
                    <Typography>
                      <span style={{ color: "#CE1141" }}>
                        <b>Launch Angle:</b>
                      </span>{" "}
                      {play.launchAngle}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Typography>
                      <span style={{ color: "#CE1141" }}>
                        <b>Exit Speed:</b>
                      </span>{" "}
                      {play.exitSpeed}
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Typography>
                      <span style={{ color: "#CE1141" }}>
                        <b>Exit Direction:</b>
                      </span>{" "}
                      {play.exitDirection}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Typography>
                      <span style={{ color: "#CE1141" }}>
                        <b>Hit Distance:</b>
                      </span>{" "}
                      {play.hitDistance}
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Typography>
                      <span style={{ color: "#CE1141" }}>
                        <b>Hang Time:</b>
                      </span>{" "}
                      {play.hangTime}
                    </Typography>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Typography>
                      <span style={{ color: "#CE1141" }}>
                        <b>Spin Rate:</b>
                      </span>{" "}
                      {play.hitSpinRate}
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                    <Button
                      variant="contained"
                      onClick={handlePrevClick}
                      disabled={currentPlay === 0}
                      sx={{ backgroundColor: "#CE1141" }}
                    >
                      Previous
                    </Button>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2} xl={2}>
                    <Button
                      variant="contained"
                      onClick={handleNextClick}
                      disabled={currentPlay === predictions.length - 1}
                      sx={{ backgroundColor: "#CE1141" }}
                    >
                      Next
                    </Button>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
                </Grid>
              </Card>
            </Grid>
            <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
          </Grid>
        </div>
    );
  };

  return (
    <ThemeProvider theme={theme}>
    <div>
      <Grid container spacing={2} sx={{ bgcolor: "#13274F" }}>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          style={{ textAlign: "center" }}
        >
          <Typography
            sx={{ color: "#CE1141", fontWeight: 500 }}
            variant="h2"
            margin={4}
          >
            Inside The At-Bat
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
      </Grid>
      <div className="predictions-container">{renderPlay()}</div>
      <Grid
        container
        spacing={2}
        sx={{
          bgcolor: "#13274F",
          marginTop: 4,
          paddingLeft: 2,
          paddingRight: 2,
          paddingBottom: 4,
        }}
      >
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
        <Grid
          item
          xs={6}
          sm={6}
          md={6}
          lg={6}
          xl={6}
          style={{ textAlign: "center" }}
        >
          <Typography sx={{ color: "#CE1141", fontWeight: 400 }} variant="h3">
            Data Overview
          </Typography>
        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <Card align="center" justify="center" alignItems="center">
            <CardMedia
              component="img"
              height="250"
              image={require("./exit_speed_distribution.png")}
              style={{
                width: "auto",
              }}
            ></CardMedia>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <Card align="center" justify="center" alignItems="center">
            <CardMedia
              component="img"
              height="250"
              image={require("./hit_distance_distribution.png")}
              style={{
                width: "auto",
              }}
            ></CardMedia>
          </Card>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <Card align="center" justify="center" alignItems="center">
            <CardMedia
              component="img"
              height="250"
              image={require("./launch_angle_distribution.png")}
              style={{
                width: "auto",
              }}
            ></CardMedia>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <Card align="center" justify="center" alignItems="center">
            <CardMedia
              component="img"
              height="250"
              image={require("./exit_velocity_vs_hit_distance.png")}
              style={{
                width: "auto",
              }}
            ></CardMedia>
          </Card>
        </Grid>

        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <Card align="center" justify="center" alignItems="center">
            <CardMedia
              component="img"
              height="250"
              image={require("./exit_velocity_vs_launch_angle.png")}
              style={{
                width: "auto",
              }}
            ></CardMedia>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <Card align="center" justify="center" alignItems="center">
            <CardMedia
              component="img"
              height="250"
              image={require("./launch_angle_vs_hit_distance.png")}
              style={{
                width: "auto",
              }}
            ></CardMedia>
          </Card>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2} xl={2}></Grid>
      </Grid>
    </div>
    </ThemeProvider>
  );
};

export default App;
