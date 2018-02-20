import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import PropTypes from "prop-types";

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';

const MyCard = (props) => {
  const name= props.name
  const initial= name[0]
  return (
  <Card
    initiallyExpanded = {false}
  >
    
    <CardHeader
      title=""
      subtitle=""
      avatar={(<Avatar
        color={deepOrange300}
        backgroundColor={purple500}
        size={30}
      >
        {initial}
        </Avatar>)}
    />
    <CardTitle title="" subtitle="" />
    <CardText>
      {name}
      
    </CardText>
    <CardActions>
      {/* <FlatButton label="Action1" />
      <FlatButton label="Action2" /> */}
    </CardActions>
  </Card>
  );
};
MyCard.propTypes={
  name:PropTypes.string.isRequired
};
export default MyCard;