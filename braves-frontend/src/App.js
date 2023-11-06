import "./App.css";
import ReactPlayer from "react-player";
import Typography from "@mui/material/Typography";
import { Card, CardActionArea, CardMedia, Grid } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Grid container spacing={2} sx={{ bgcolor: "#13274F" }}>
        <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
          <img src="https://1000logos.net/wp-content/uploads/2017/08/Atlanta-Braves-logo.png"></img>
        </Grid>
        <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
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
      <Grid container spacing={2} >
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
          <Card sx={{marginTop:4, padding:4, bgcolor: "#13274F", color:'#ffffff' }}>
            <Grid container spacing={2}>
            <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                <CardActionArea>
                  <CardMedia
                    component="iframe"
                    title="test"
                    src="https://coach-video.mlb.com/mlb/2018/04/01/e0429a12/0d38d01c/video_1522621744505_4500k.mp4"
                  />
                </CardActionArea>
              </Grid>
              <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography>Game Date: 4/1/2018</Typography>
              </Grid>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography>Play Outcome: Out</Typography>
              </Grid>
              <Grid item xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography>Batter: Yonder Alonso</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography>Pitcher: Mike Leake</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography>Launch Angle: 5.1</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography>Exit Speed: 82.3</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography>Exit Direction: 38.0</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography>Hit Distance: 72.9</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography>Hang Time: 0.7</Typography>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Typography>Spin Rate: 4206.2</Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
      </Grid>
    </div>
  );
}

export default App;
