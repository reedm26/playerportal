import React from "react";
// import propTypes from "prop-types";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    minWidth: 25,
    maxWidth: 275,
    marginTop: "13px",
    margin: "auto",
  },

  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
function TeamCard(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            College of Idaho
          </Typography>
          <Typography variant="h5" component="h2">
            Yotes
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            varsity
          </Typography>
          <Typography variant="body2" component="p">
            The Road to Nationals
            <br />
            {'"Natty or Bust"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Get Recruited</Button>
        </CardActions>
      </Card>
    </div>
  );
}

// TeamCard.propTypes = {
//   team: propTypes.array.isRequired,
// };

export default TeamCard;
