import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid,Zoom } from '@material-ui/core';
class cardLayout extends Component {
    state = { 
        zoom:true
     }
    styles = {
        card: {
          maxWidth: 345
        },
        media: {
          height: 160,
        },
      };
      
    render() { 
        return ( 
            <Grid item xl>
            <Zoom in={this.state.zoom} style={{ transitionDelay: this.state.zoom ? '500ms' : '0ms' }}>
                <Card style={this.styles.card}>
                    <CardActionArea>
                        <CardMedia
                        style={this.styles.media}
                        image={this.props.img}
                        title={this.props.title}
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {this.props.title}
                        </Typography>
                        <Typography component="p">
                            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                            across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>        
                </Card>
                </Zoom>
            </Grid>
         );
    }
}
 
export default cardLayout;