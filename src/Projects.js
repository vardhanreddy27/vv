import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Fade,
  Grid,
  Hidden,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Link from "next/link";
import { RepoForkedIcon, RepoIcon, StarIcon } from "@primer/octicons-react";
import Image from "next/image";
import { useRef } from "react";
import useAnimate from "./useAnimate";

const useStyles = makeStyles((theme) => ({
  cont: {
    minHeight: `calc(100vh - ${theme.spacing(4)}px)`,
  },
  card: {
    height: "100%",
  },
  cardActionArea: {
    height: "100%",
    // display: 'grid'
  },
}));

export default function Projects({ data }) {
  const classes = useStyles();

  const animRef = useRef(null);
  const animate = useAnimate(animRef);

  return (
    <Grid
      direction="row-reverse"
      container
      justify="center"
      alignItems="center"
      spacing={10}
      className={classes.cont}
    >
      <Grid item xs={12} lg={6}>
        <Typography variant="h2" gutterBottom align="center" innerRef={animRef}>
          Projects
        </Typography>
        <Hidden mdDown>
          <Fade in={animate} style={{ transitionDelay: "250ms" }}>
            <div>
              <Image
                alt="Projects"
                src="/projects.svg"
                width="1144"
                height="617.32"
              />
            </div>
          </Fade>
        </Hidden>
      </Grid>
      <Grid container item xs={12} lg={6} direction="row" spacing={1}>
        <div className="col-md-4">
          <div className="card card-1">
            <a href="https://www.saveglobe.in/">
              <h3>www.saveglobe.in</h3>
            </a>

            <p>
              ecofriendly food containers online india, bangalore, chennai,
              hyderabad, kolkata, mumbai, delhi, jaipur, kerala, ecofriendly
              products india
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-2">
            <a href="https://www.ifceeae.ovh/">
              <h3>www.ifceeae.ovh</h3>
            </a>
            <p>
              IFCEEAE is a partnership between New Horizon College of
              Engineering, Schneider Electric India and French Ministry of
              National Education.
            </p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card card-3">
            <a href="https://www.airportmechanical.com.au/">
              <h3>airportmechanical.com.au</h3>
            </a>
            <p>
              Since 2005 airport mechanical has been a one-stop-shop for drivers
              in Shed 50/170 Mayers Street. Manunda, providing a wide range of
              services and repairs for all makes and models of vehicles.
            </p>
          </div>
        </div>
      </Grid>
    </Grid>
  );
}
