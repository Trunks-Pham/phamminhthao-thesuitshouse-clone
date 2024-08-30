import React from 'react';
import { Modal, Button } from '@mui/material'; // Sử dụng Material-UI cho modal
import { useNavigate } from 'react-router-dom';

const NotificationModal = ({ open, onClose, productName, productImageSrc, productPrice }) => {
  const navigate = useNavigate();

  const handleContinueShopping = () => {
    onClose();
  };

  const handleGoToCart = () => {
    onClose();
    navigate('/cart');
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div style={{ 
        padding: '20px', 
        margin: '15% auto', 
        backgroundColor: 'white', 
        maxWidth: '500px', 
        textAlign: 'center',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center' 
      }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '20px' 
        }}>
          <img src={productImageSrc} alt={productName} style={{ maxWidth: '200px', marginRight: '20px' }} />
          <div style={{ textAlign: 'left' }}>
            <p><b>Đã thêm sản phẩm vào giỏ hành của quý khách</b></p>
            <p style={{ fontSize: '18px', margin: '0' }}>{productName}</p>
            <p style={{ fontSize: '16px', margin: '0' }}>Giá tiền: {productPrice}</p>
          </div>
        </div>
        <div>
          <Button onClick={handleGoToCart} sx={{backgroundColor: '#BA8F44', color: 'white', ":hover": {backgroundColor: 'DarkGoldenRod', color: 'white'}}}>
            Đến giỏ hàng
          </Button>
          <Button onClick={handleContinueShopping} sx={{backgroundColor: 'DarkGoldenRod', color: 'white', marginLeft: '10px', ":hover": {backgroundColor: '#DAA520', color: 'white'}}}>
            Mua tiếp
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default NotificationModal;
