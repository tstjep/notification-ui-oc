import { connect } from 'react-redux';
import Notifications from './notifications.jsx';
import {createNotification, dismissNotification, subscribeToUpdates, echoNotification} from './notificationActions.jsx';

const getVisibleNotifications = (notifications) => (notifications ? notifications.filter((n) => n.visible) : undefined);

const mapStateToProps = (state) => {
    return {
        notifications: getVisibleNotifications(state.notifications.notifications)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        dismissNotification: (notification) => {
            dispatch(dismissNotification(notification.id))
        },
        addNotification: (text) => {
            dispatch(createNotification(text))
        },
        subscribeNotifications: () => {
            dispatch(subscribeToUpdates())
        },
        echoNotification: (text) => {
            dispatch(echoNotification(text))
        }

    }
};

const NotificationsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Notifications);

export default NotificationsContainer;
