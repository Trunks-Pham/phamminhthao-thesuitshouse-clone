import React, { useState } from 'react';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

const AccountPage = () => {
    const [isSignup, setIsSignup] = useState(false);

    const handleSwitchToSignup = () => {
        setIsSignup(true);
    };

    const handleSwitchToLogin = () => {
        setIsSignup(false);
    };

    return (
        <div style={{ marginLeft: '50px', marginRight: '50px', marginTop: '120px' }}> 
            {isSignup ? (
                <SignupForm onSwitchToLogin={handleSwitchToLogin} />
            ) : (
                <LoginForm onSwitchToSignup={handleSwitchToSignup} />
            )}
        </div>
    );
};

export default AccountPage;
