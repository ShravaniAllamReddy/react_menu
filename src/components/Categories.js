import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  
    center: {
        display:'flex',
        justifyContent:'center',
    }
}));
export default function Categories({ categories, filterItems }) {
    const classes = useStyles();
    return (
    
            <ButtonGroup className={classes.center}>
                {categories.map((category, index) => {

                    return (
                        <Button className={classes.filter} color="primary" key={index} value={category} onClick={() => filterItems(category)} >
                            {category}
                        </Button>
                    )
                })}
            </ButtonGroup>


    )
}