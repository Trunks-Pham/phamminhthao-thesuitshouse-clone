import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton, Button, Typography, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const CartPage = ({ cart, updateCart }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false); // State for "Select All"
  const navigate = useNavigate();

  const handleQuantityChange = (index, delta) => {
    const newCart = [...cart];
    newCart[index].quantity += delta;
    if (newCart[index].quantity < 1) {
      newCart[index].quantity = 1;
    }
    updateCart(newCart);
  };

  const handleSelectItem = (index) => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.includes(index)
        ? prevSelectedItems.filter((i) => i !== index)
        : [...prevSelectedItems, index]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(cart.map((_, index) => index));
    }
    setSelectAll(!selectAll);
  };

  const handleDeleteItem = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    updateCart(newCart);
    setSelectedItems(selectedItems.filter((i) => i !== index));
  };

  const calculateTotal = () => {
    return selectedItems.reduce((total, index) => {
      const item = cart[index];
      if (!item) return total;
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity, 10);
      if (isNaN(price) || isNaN(quantity)) return total;
      return total + price * quantity;
    }, 0);
  };

  const calculateTotalProducts = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price);
      const quantity = parseInt(item.quantity, 10);
      if (isNaN(price) || isNaN(quantity)) return total;
      return total + price * quantity;
    }, 0);
  };

  useEffect(() => {
    setSelectedItems((prevSelectedItems) =>
      prevSelectedItems.filter((index) => index < cart.length)
    );
  }, [cart]);

  useEffect(() => {
    if (selectedItems.length === cart.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedItems, cart.length]);

  const handleProceedToPayment = () => {
    if (selectedItems.length > 0) {
      navigate('/payment', {
        state: {
          cart: selectedItems.map(index => cart[index]),
          total: calculateTotal(),
          totalProducts: calculateTotalProducts()
        }
      });
    }
  };

  return (
    <Box className="cart-container">
      <Typography className="cart-title" sx={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginTop: '120px', marginBottom: '20px' }}>
        Giỏ Hàng
      </Typography>
      {cart.length === 0 ? (
        <Typography variant="h6" align="center">Giỏ hàng của bạn đang trống.</Typography>
      ) : (
        <table className="cart-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectAll}
                  onChange={handleSelectAll}
                />
              </th>
              <th>Hình</th>
              <th>Tên</th>
              <th>Số lượng</th>
              <th>Giá</th>
              <th>Tổng tiền sản phẩm</th>
              <th>Xóa</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(index)}
                    onChange={() => handleSelectItem(index)}
                  />
                </td>
                <td>
                  <img src={item.imageUrl} alt={item.name} style={{ width: '100px', height: 'auto' }} />
                </td>
                <td>
                  <Typography variant="body1">{item.name}</Typography>
                </td>
                <td>
                  <Box className="quantity-controls">
                    <Button onClick={() => handleQuantityChange(index, -1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button onClick={() => handleQuantityChange(index, 1)}>+</Button>
                  </Box>
                </td>
                <td>
                  <Typography variant="body1">{item.price.toLocaleString('vi-VN')} VNĐ</Typography>
                </td>
                <td>
                  <Typography variant="body1">{(item.price * item.quantity).toLocaleString('vi-VN')} VNĐ</Typography>
                </td>
                <td>
                  <IconButton onClick={() => handleDeleteItem(index)} color="error" className="delete-button">
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="5" className="text-right">Tổng tiền tất cả sản phẩm trong giỏ hàng:</td>
              <td>{calculateTotalProducts().toLocaleString('vi-VN')} VNĐ</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}
      <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: 'bold', marginTop: '20px', textAlign: 'right' }}>
        Tổng Tiền Cần Thanh Toán Cho Các Sản Phẩm Đã Lựa Chọn: {calculateTotal().toLocaleString('vi-VN')} VNĐ
      </Typography>
      <Box className="cart-buttons">
        <Button
          onClick={handleProceedToPayment}
          disabled={selectedItems.length === 0}
          sx={{
            marginBottom: '10px',
            color: 'white',
            backgroundColor: selectedItems.length === 0 ? 'gray' : 'DarkGoldenRod',
            ":hover": { backgroundColor: selectedItems.length === 0 ? 'gray' : 'GoldenRod' },
            width: '250px',
            height: '50px'
          }}
        >
          Tiến Hành Thanh Toán
        </Button>
        <Button
          sx={{
            marginBottom: '10px',
            color: 'gray',
            backgroundColor: 'white',
            ":hover": { backgroundColor: 'DarkGoldenRod', color: 'white' },
            border: '1px solid gray',
            width: '250px',
            height: '50px'
          }}
          onClick={() => navigate('/products')}
        >
          Mua tiếp
        </Button>
      </Box>
    </Box>
  );
};

export default CartPage;
