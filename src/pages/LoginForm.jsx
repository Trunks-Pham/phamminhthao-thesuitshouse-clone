import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ onSwitchToSignup }) => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Thực hiện xác thực đăng nhập ở đây

        // Sau khi xác thực thành công, điều hướng đến trang ProductsPage
        navigate('/products');
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" gutterBottom>
                Đăng Nhập
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Email"
                    type="email"
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Mật Khẩu"
                    type="password"
                    fullWidth
                    margin="normal"
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    style={{ marginTop: '16px' }}
                >
                    Đăng Nhập
                </Button>
                <Button
                    variant="text"
                    color="secondary"
                    fullWidth
                    style={{ marginTop: '8px' }}
                    onClick={onSwitchToSignup}
                >
                    Chưa có tài khoản? Đăng ký
                </Button>
            </form>
        </Container>
    );
};

export default LoginForm;
