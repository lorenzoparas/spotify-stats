import React from 'react';

function Dashboard(accessToken) {
    return (
        <div>
            Hi, user. Your access token is {accessToken.accessToken}
        </div>
    );
}

export default Dashboard;