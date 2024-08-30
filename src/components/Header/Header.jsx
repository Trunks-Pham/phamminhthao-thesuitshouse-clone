import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase } from '@mui/material';
import { Search as SearchIcon, ShoppingCart as ShoppingCartIcon, AccountCircle as AccountCircleIcon } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { products, news } from '../../data';
import Logo from '../Logo/Logo';
import './Header.css';

const Header = () => {
    const [activeButton, setActiveButton] = useState('home');
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleButtonClick = (button, path) => {
        setActiveButton(button);
        navigate(path);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleProductClick = (productId) => {
        navigate(`./products/${productId}`);
    };

    const handleArticleClick = (articleId) => {
        navigate(`./news/${articleId}`);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    const filteredNews = news.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    return (
        <AppBar position="fixed" sx={{ backgroundColor: '#FFFFFF' }}>
            <Toolbar className="header-toolbar">
                <Logo />
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Button
                        sx={{ color: activeButton === 'home' ? 'GoldenRod' : 'DimGray' }}
                        onClick={() => handleButtonClick('home', '/')}
                    >
                        <b>TRANG CHỦ</b>
                    </Button>
                    <Button
                        sx={{ color: activeButton === 'products' ? 'GoldenRod' : 'DimGray' }}
                        onClick={() => handleButtonClick('products', '/products')}
                    >
                        <b>SẢN PHẨM</b>
                    </Button>
                    <Button
                        sx={{ color: activeButton === 'news' ? 'GoldenRod' : 'DimGray' }}
                        onClick={() => handleButtonClick('news', '/news')}
                    >
                        <b>TIN TỨC</b>
                    </Button>
                    <Button
                        sx={{ color: activeButton === 'policy' ? 'GoldenRod' : 'DimGray' }}
                        onClick={() => handleButtonClick('policy', '/policy')}
                    >
                        <b>CHÍNH SÁCH</b>
                    </Button>
                </Typography>
                <div className="search">
                    <div className="search-icon">
                        <SearchIcon />
                    </div>
                    <InputBase
                        placeholder="Tìm kiếm…"
                        inputProps={{ 'aria-label': 'search' }}
                        className="search-input"
                        sx={{ color: 'white' }}
                        value={searchTerm}
                        onChange={handleSearchChange}
                    />
                </div>
                <IconButton sx={{ color: 'DimGray' }} href="/account">
                    <AccountCircleIcon />
                </IconButton>
                <IconButton sx={{ color: 'DimGray' }} href="/cart">
                    <ShoppingCartIcon />
                </IconButton>
            </Toolbar>
 
            <div className="search-results">
                {searchTerm && (
                    <>
                        <div className="results-section">
                            <h3>Products</h3>
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map(product => (
                                    <div key={product.id} onClick={() => handleProductClick(product.id)}>
                                        <div>{product.name}</div>
                                        {product.image && <img src={product.imageUrl} alt={product.name} />} 
                                    </div>
                                ))
                            ) : (
                                <div>No products found</div>
                            )}
                        </div>
                        <div className="results-section">
                            <h3>News</h3>
                            {filteredNews.length > 0 ? (
                                filteredNews.map(article => (
                                    <div key={article.id} onClick={() => handleArticleClick(article.id)}>
                                        <div>{article.title}</div>
                                        {article.image && <img src={article.imageUrl} alt={article.title} />} 
                                    </div>
                                ))
                            ) : (
                                <div>No news found</div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </AppBar>
    );
};

export default Header;