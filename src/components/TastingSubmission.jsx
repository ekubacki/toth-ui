import React from 'react';
import PropTypes from 'prop-types';
import { ExpansionPanelSummary, ExpansionPanel, ExpansionPanelDetails } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import BusinessIcon from '@material-ui/icons/Business'
import PersonIcon from '@material-ui/icons/Person'
import ListItemText from '@material-ui/core/ListItemText';
import { ExpandMore } from '@material-ui/icons'

const SUBMISSION_STYLE = {
    maxWidth: '70%',
    margin: 'auto'
}

export class TastingSubmission extends React.Component {
    render() {
        const { tasting } = this.props
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
                            <ListItemText secondary="Brewery " primary={tasting.brewery}/>
                        </ListItem>
                        <ListItem>
                            <PersonIcon>
                            </PersonIcon>
                            <ListItemText secondary="Submitter " primary={tasting.displayNames[0]} />
                        </ListItem>
                        <ListItem>
                            <ListItemText secondary="Rating " primary={tasting.rating} />
                        </ListItem>
                    </List>
                </ExpansionPanelDetails>
            </ExpansionPanel>
        )
    }
}

TastingSubmission.propTypes = {
    tasting: PropTypes.object.isRequired,
};