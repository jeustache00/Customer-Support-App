import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import MainContent from './MainContent';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import TheDialog from './TheDialog';

class MyAppBar extends Component {
    state = {
        open: false
    }

    onClick = (event) => {
        this.setState({
            open: true,
            anchorEl: event.currentTarget
        });
    }
    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };


render() {
    return (
        <div>

            <AppBar
                title="Customer Support"
                iconClassNameRight="muidocs-icon-navigation-expand-more"
                onLeftIconButtonClick={this.onClick}
            />
            <div>
                <Popover
                    open={this.state.open}
                    anchorEl={this.state.anchorEl}
                    onRequestClose={this.handleRequestClose}
                >
                    <Menu>
                        <MenuItem primaryText="Refresh" />
                        <TheDialog/>
                        <MenuItem primaryText="Settings" />
                        <MenuItem primaryText="Sign out" />
                    </Menu>
                </Popover>
            </div>
            <div style={{ display: 'flex', height: '100%' }}>
            </div>
        </div>
    )
    }
}


export default MyAppBar;