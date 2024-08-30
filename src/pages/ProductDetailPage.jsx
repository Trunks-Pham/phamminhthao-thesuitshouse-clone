import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data';
const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [size, setSize] = useState('');

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (event) => {
    const value = Math.max(1, parseInt(event.target.value, 10));
    setQuantity(value);
  };

  const calculateSize = () => {
    // Quy tắc chuyển đổi đơn giản dựa trên chiều cao và cân nặng
    if (height && weight) {
      const h = parseInt(height, 10);
      const w = parseInt(weight, 10);

      if (h < 160 && w < 50) {
        setSize('S');
      } else if (h < 170 && w < 60) {
        setSize('M');
      } else if (h < 180 && w < 70) {
        setSize('L');
      } else if (h < 190 && w < 80) {
        setSize('XL');
      } else {
        setSize('XXL');
      }
    } else {
      setSize('Vui lòng nhập đầy đủ chiều cao và cân nặng');
    }
  };

  return (
    <div>
      <p style={{marginTop: '110px', marginLeft: '20px' }}>Trang Chủ / Nhà Suits / <b>{product.name}</b></p>
      <div className="product-detail">
        <img src={product.imageUrl} alt={product.name} />
        <div className="product-info">
          <h2>{product.name}</h2>
          <p className="product-price">Giá: {product.price.toLocaleString('vi-VN')} VNĐ</p>
          
          <div className="quantity-selector">
            <button className="quantity-btn" onClick={handleDecrease}>-</button>
            <input 
              type="number" 
              className="quantity-input" 
              value={quantity} 
              onChange={handleQuantityChange} 
              min="1"
            />
            <button className="quantity-btn" onClick={handleIncrease}>+</button>
          </div>
          
          <br />
          {/* <p className="product-description">Mô tả: {product.description}</p> */}
          <div className="product-details">
            <button className="add-to-cart-btn">Thêm vào giỏ hàng</button>
            <div className="product-extra-info"> 
              <p>HỖ TRỢ giao hàng trong và ngoài nước</p> 
              <p>Quý khách hàng sẽ được bảo hành - chỉnh sửa bộ suit của mình MIỄN PHÍ TRỌN ĐỜI.</p>
              <p>MIỄN PHÍ giặt hấp</p>
              <p>Khi mua một bộ suit bất kỳ, Nhà SUITS sẽ tặng 2 phiếu giặt hấp, mỗi phiếu trị giá 500.000VNĐ cùng phần QUÀ TRAO TAY cực hấp dẫn.</p>
            </div>
          </div>
        </div>
      </div>
      <p className="product-description" style={{ marginLeft: '170px', marginRight: '170px' }}>{product.name}{product.description}</p>
      <div className="additional-info">
        <div className="infor-prod">
          <img src="https://cf.shopee.vn/file/vn-11134208-7r98o-luhcwggaydd1cb" alt="" />
        </div>
        <div className="size-calculator">
          <h3 style={{ textAlign: 'center' }}>Gợi Ý Kích Thước Phù Hợp</h3>
          <input 
            type="text" 
            placeholder="Chiều cao (cm)" 
            value={height} 
            onChange={(e) => setHeight(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Cân nặng (kg)" 
            value={weight} 
            onChange={(e) => setWeight(e.target.value)} 
          />
          <button onClick={calculateSize}>Đưa Ra Gợi Ý</button>
          {size && <p>Kích cỡ phù hợp: <b>{size}</b></p>}
          <p><b>LƯU Ý:</b> Đây chỉ là gợi ý để biết kích thước phù hợp nhất hãy đến với The Suits House để chúng tôi hỗ trợ bạn!</p> 
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;