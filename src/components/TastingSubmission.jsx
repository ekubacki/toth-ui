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
import TastedContainer from './TastedContainer';

const SUBMISSION_STYLE = {
  maxWidth: '70%',
  margin: 'auto'
}

export class TastingSubmission extends React.Component {
  handleExpanded(event, expanded) {
    event.preventDefault()

    const { tasting } = this.props
    const expandedTasting = expanded ? tasting.id : undefined
    this.props.onSubmissionExpanded(expandedTasting)
  }

  render() {
    const { tasting, user, expanded } = this.props
    const ratingRounded = tasting.rating ? `${tasting.rating.toFixed(1)} Avg` : '-'
    
    return (
      <ExpansionPanel expanded={expanded === tasting.id} onChange={this.handleExpanded.bind(this)} style={SUBMISSION_STYLE}>
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
              <ListItemText primary={"Rating"} secondary={ratingRounded} />
            </ListItem>
            <ListItem>
              <RatingContainer user={user} tasting={tasting} />
            </ListItem>
            <TastedContainer user={user} tasting={tasting} />
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