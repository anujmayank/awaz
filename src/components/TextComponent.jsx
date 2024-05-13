import React from 'react';
import {Button} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Check from '@mui/icons-material/Check';

const TextComponent = ({cardData}) => {

    return (
        <>
            <h3 className="cardHeader">
                Create <span className="videoText">Video Resume</span> for Job Applications
            </h3>
            {!cardData && (<p>
                Showcase your personality and create lasting impact, before the interview
            </p>)}

            {cardData && cardData.list.map((item, index) => {
                return (<List key={index}>
                <ListItem>
                        <ListItemIcon>
                            <Check/>
                        </ListItemIcon>
                        <ListItemText
                            primary={item}
                        />
                    </ListItem>
            </List>)
            })}

            {cardData ? <p className="cardSubtitle">{cardData.subtitle}</p> : <Button className="cardButton">Get Started</Button>}
        </>
    )
}

export default TextComponent;