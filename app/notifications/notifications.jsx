import React from 'react';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import NotificationList from './notificationList.jsx';
import NotificationForm from './notificationForm.jsx';

const Notifications = ({notifications, addNotification, dismissNotification}) => (
    <div>
        <AppBar title="Notifications"></AppBar>
        <NotificationList notifications={notifications} onDismiss={dismissNotification}/>
        <NotificationForm addNotification={addNotification}/>
    </div>
)

Notifications.propTypes = {

};

export default Notifications;