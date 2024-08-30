import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data';
import NotificationModal from '../Notification/NotificationModal'; // Import modal

const ProductsPage = ({ addToCart }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalProduct, setModalProduct] = useState(null); // State to hold product details for modal

  const handleAddToCart = (product) => {
    addToCart(product);
    setModalProduct(product); // Set the product details for the modal
    setModalOpen(true); // Open the modal
  };

  return (
    <div style={{ marginLeft:'50px', marginRight:'50px', marginTop: '120px' }}>
      <p style={{ marginLeft: '20px' }}>Trang Chủ / <b>Nhà Suits</b></p>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product">
            <Link to={`/products/${product.id}`}>
              <img src={product.imageUrl} alt={product.name} />
            </Link>
            <h4>{product.name}</h4>
            <p>{product.price.toLocaleString('vi-VN')} VNĐ</p>
            <div className="product-details">
              <button onClick={() => handleAddToCart(product)}>Thêm vào giỏ hàng</button>
            </div>
          </div>
        ))}
      </div>

      {/* Hiển thị modal khi modalOpen là true */}
      {modalProduct && (
        <NotificationModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          productName={modalProduct.name}
          productImageSrc={modalProduct.imageUrl}
          productPrice={modalProduct.price.toLocaleString('vi-VN') + ' VNĐ'}
        />
      )}
    </div>
  );
};

export default ProductsPage;
