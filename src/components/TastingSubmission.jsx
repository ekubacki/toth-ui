import React from 'react';
import PropTypes from 'prop-types';
import { ExpansionPanelSummary, ExpansionPanel, ExpansionPanelDetails } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import BusinessIcon from '@material-ui/icons/Business'
import PersonIcon from '@material-ui/icons/Person'
import ListItemText from '@material-ui/core/ListItemText';
import { ExpandMore } from '@material-ui/icons'
import RatingContainer from './RatingContainer';
import Button from "@material-ui/core/Button";

const SUBMISSION_STYLE = {
  maxWidth: '70%',
  margin: 'auto'
}

export class TastingSubmission extends React.Component {
  getBeerTastedButton() {
    if(this.props.user.isAdmin) {
      return <Button color="primary" variant="contained">Beer Tasted</Button>
    } else {
      return <></>
    }
  }

  render() {
    const { tasting, user } = this.props
    const beerTastedButton = this.getBeerTastedButton()
    return (
      <ExpansionPanel style={SUBMISSION_STYLE}>
        <ExpansionPanelSummary expandIcon={<ExpandMore />}>
          <h3>{tasting.beerName}</h3>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <List dense={false}>
            <ListItem>
              <BusinessIcon>
              </BusinessIcon>
              <ListItemText secondary="Brewery " primary={tasting.brewery} />
            </ListItem>
            <ListItem>
              <PersonIcon>
              </PersonIcon>
              <ListItemText secondary="Submitter " primary={tasting.displayNames.toString()} />
            </ListItem>
            <ListItem>
              <ListItemText primary={"Rating "} />
            </ListItem>
            <ListItem>
              <RatingContainer user={user} tasting={tasting} />
            </ListItem>
            {beerTastedButton}
          </List>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }
}

TastingSubmission.propTypes = {
  user: PropTypes.object.isRequired,
  tasting: PropTypes.object.isRequired,
};