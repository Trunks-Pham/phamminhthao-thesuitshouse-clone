import React from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignupForm = ({ onSwitchToLogin }) => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // Thực hiện xác thực đăng ký ở đây

        // Sau khi xác thực thành công, điều hướng đến trang ProductsPage
        navigate('/products');
    };

    return (
        <Container maxWidth="xs">
            <Typography variant="h4" gutterBottom>
                Đăng Ký
            </Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Họ và Tên"
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Số Điện Thoại"
                    type="tel"
                    fullWidth
                    margin="normal"
                    required
                />
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
                <TextField
                    label="Xác Nhận Mật Khẩu"
                    type="password"
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Tỉnh/Thành Phố"
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Quận/Huyện"
                    fullWidth
                    margin="normal"
                    required
                />
                <TextField
                    label="Xã/Phường"
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
                    Đăng Ký
                </Button>
                <Button
                    variant="text"
                    color="secondary"
                    fullWidth
                    style={{ marginTop: '8px' }}
                    onClick={onSwitchToLogin}
                >
                    Đã có tài khoản? Đăng nhập
                </Button>
            </form>
        </Container>
    );
};

export default SignupForm;
