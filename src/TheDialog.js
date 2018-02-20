import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';


export default class DialogExampleModal extends React.Component {
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />
        ];

        return (
            <div>
                <RaisedButton label="Call Customer Service" onClick={this.handleOpen} />
                <Dialog
                    title="Preparing to Call Customer Support"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                >
                    One moment please...
          </Dialog>
            </div>
        );
    }
}