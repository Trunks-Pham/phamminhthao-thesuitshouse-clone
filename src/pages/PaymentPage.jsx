import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Modal, Backdrop, Fade, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import emailjs from 'emailjs-com';

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    ward: '',
    note: '',
  });
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
      .then(response => response.json())
      .then(data => {
        setProvinces(data.map(item => ({ id: item.Id, name: item.Name })));
      })
      .catch(error => console.error('Error fetching provinces:', error));
  }, []);

  useEffect(() => {
    if (formData.city) {
      fetch('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
        .then(response => response.json())
        .then(data => {
          const selectedProvince = data.find(item => item.Id === formData.city);
          if (selectedProvince) {
            setDistricts(selectedProvince.Districts.map(d => ({ id: d.Id, name: d.Name })));
            setWards([]);
          }
        })
        .catch(error => console.error('Error fetching districts:', error));
    }
  }, [formData.city]);

  useEffect(() => {
    if (formData.district) {
      fetch('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
        .then(response => response.json())
        .then(data => {
          const selectedProvince = data.find(item => item.Id === formData.city);
          if (selectedProvince) {
            const selectedDistrict = selectedProvince.Districts.find(d => d.Id === formData.district);
            if (selectedDistrict) {
              setWards(selectedDistrict.Wards.map(w => ({ id: w.Id, name: w.Name })));
            }
          }
        })
        .catch(error => console.error('Error fetching wards:', error));
    }
  }, [formData.city, formData.district]);

  useEffect(() => {
    if (location.state) {
      const { cart, total } = location.state;
      setCart(cart || []);
      setTotal(total || 0);
    }
  }, [location.state]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleConfirmPayment = () => {
    if (!formData.email || !formData.name) {
      alert("Vui lòng nhập thông tin bắt buộc.");
      return;
    }

    const templateParams = {
      to_email: formData.email,
      name: formData.name,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      district: formData.district,
      ward: formData.ward,
      note: formData.note,
      paymentMethod,
      cart,
      total,
    };

    emailjs.send('hoiii hoiii', 'hoiii hoiii', templateParams, 'hoiii hoiii')
      .then((response) => {
        console.log('Email sent successfully:', response);
        setModalMessage("Đặt hàng thành công!");
        setModalOpen(true);
        setTimeout(() => {
          setModalOpen(false);
          navigate('/');
        }, 3000);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setModalMessage(`
          Kính gửi quý khách ${formData.name},
          
          Chúng tôi xin chân thành cảm ơn quý khách đã chọn The Suits House và sử dụng dịch vụ của chúng tôi. Sự tin tưởng và ủng hộ của quý khách là động lực lớn lao giúp chúng tôi không ngừng hoàn thiện và phát triển.
          
          Chúng tôi hy vọng rằng quý khách đã có những trải nghiệm hài lòng và nhận được sản phẩm/dịch vụ tốt nhất từ chúng tôi. Nếu có bất kỳ câu hỏi hoặc yêu cầu nào trong tương lai, xin đừng ngần ngại liên hệ với chúng tôi. Chúng tôi luôn sẵn sàng lắng nghe và phục vụ quý khách.
          
          Một lần nữa, xin chân thành cảm ơn quý khách và mong rằng chúng tôi sẽ có cơ hội phục vụ quý khách lần nữa trong thời gian tới.
          
          Trân trọng,
          
          Đội ngũ The Suits House
          `);
          
        setModalOpen(true);
        setTimeout(() => setModalOpen(false), 3000);
      });
  };

  return (
    <div style={{ marginLeft: '100px', marginRight: '50px', maxWidth: '1000px', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginTop: '100px' }}>Thanh Toán</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ flexBasis: '60%', paddingRight: '20px' }}>
          {/* Form Inputs */}
          <div className="input-group">
            <label>Họ và tên</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Số điện thoại</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="input-group">
            <label>Tỉnh thành</label>
            <select name="city" value={formData.city} onChange={handleInputChange}>
              <option value="">---</option>
              {provinces.map(province => (
                <option key={province.id} value={province.id}>{province.name}</option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label>Quận huyện</label>
            <select name="district" value={formData.district} onChange={handleInputChange}>
              <option value="">---</option>
              {districts.map(district => (
                <option key={district.id} value={district.id}>{district.name}</option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label>Xã phường</label>
            <select name="ward" value={formData.ward} onChange={handleInputChange}>
              <option value="">---</option>
              {wards.map(ward => (
                <option key={ward.id} value={ward.id}>{ward.name}</option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label>Số nhà/Hẻm/Tên Đường - Số nhà/Thôn/Xóm/Ấp</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <label>Ghi chú (không bắt buộc)</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </div>
        <div style={{ flexBasis: '35%' }}>
          {/* Payment Method */}
          <div className="payment-method">
            <h3>Vận chuyển</h3>
            <p>Vui lòng nhập thông tin giao hàng</p>
          </div>
          <div className="payment-method">
            <h3>Thanh toán</h3>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="COD"
                checked={paymentMethod === 'COD'}
                onChange={() => setPaymentMethod('COD')}
              />
              Thanh toán khi nhận hàng (COD)
            </label>
            <label>
              <input
                type="radio"
                name="paymentMethod"
                value="PAY"
                checked={paymentMethod === 'PAY'}
                onChange={() => setPaymentMethod('PAY')}
              />
              PAY
            </label>
            {paymentMethod === 'PAY' && (
              <div>
                <p>Chọn phương thức:</p>
                <label>
                  <input
                    type="radio"
                    name="payMethod"
                    value="account"
                  />
                  Số tài khoản
                </label>
                <label>
                  <input
                    type="radio"
                    name="payMethod"
                    value="momo"
                  />
                  Momo
                </label>
              </div>
            )}
          </div>
          <Box className="order-summary" sx={ {width: '170%'}}>
            <Typography variant="h6">Tóm tắt đơn hàng</Typography> 
            <TableContainer component={Paper} >
      <Table aria-label="cart table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5'}}>
            <TableCell sx={{ width: '40%', border: '1px solid #ddd' }}>Sản phẩm</TableCell>
            <TableCell align="right" sx={{ width: '25%', border: '1px solid #ddd', textAlign: 'center' }}>Giá</TableCell>
            <TableCell align="right" sx={{ width: '14%', border: '1px solid #ddd' }}>Số lượng</TableCell>
            <TableCell align="right" sx={{ width: '50%', border: '1px solid #ddd' , textAlign: 'center'}}>Thành tiền</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((product, index) => (
            <TableRow key={index}>
              <TableCell sx={{ border: '1px solid #ddd' }}>{product.name}</TableCell>
              <TableCell align="right" sx={{ border: '1px solid #ddd' }}>{product.price.toLocaleString()} VNĐ</TableCell>
              <TableCell align="right" sx={{ border: '1px solid #ddd' }}>{product.quantity}</TableCell>
              <TableCell align="right" sx={{ border: '1px solid #ddd', textAlign: 'left' }}>{(product.price * product.quantity).toLocaleString()} VNĐ</TableCell>
            </TableRow>
          ))}
          <TableRow sx={{ backgroundColor: '#f5f5f5', height: '60px' }}>
            <TableCell colSpan={3} align="right" sx={{ fontWeight: 'bold', border: '1px solid #ddd' }}>
              Tổng cộng:
            </TableCell>
            <TableCell align="right" sx={{ fontWeight: 'bold', border: '1px solid #ddd',width: '40%', textAlign: 'left' }}>
              {total.toLocaleString()} VNĐ
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
            <Button 
              fullWidth
              onClick={handleConfirmPayment}
              sx={{marginTop: '20px', backgroundColor: ' #8c6630', color: 'white',width: '40%', height: '50px', '&:hover': { backgroundColor: '#BA8F44' , width: '40%', height: '50px'} }}
            >
              Xác Nhận Thanh Toán
            </Button>
          </Box>
        </div>
      </div>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{ timeout: 500 }}
      >
        <Fade in={modalOpen}>
        <Box sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          p: 4,
        }}>
            <Typography sx={{ textAlign: 'left', fontSize: '20px', backgroundColor: '',color: '#8c6630', fontWeight: 'italic'}}>
              {modalMessage}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default PaymentPage;
