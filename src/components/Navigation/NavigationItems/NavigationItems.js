import React from 'react'
import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const NavigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link={'/'} active>Burger Builder</NavigationItem>
            <NavigationItem link={'/'} >Active</NavigationItem>
        </ul>
    )
}

export default NavigationItems
