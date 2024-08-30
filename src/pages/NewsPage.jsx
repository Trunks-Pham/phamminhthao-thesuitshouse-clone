import React from 'react';
import { useNavigate } from 'react-router-dom';
import { news } from '../data';

const NewsPage = () => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/news/${id}`);
  };

  return (
    <div style={{ marginLeft: '50px', marginRight: '50px', marginTop: '120px' }}>
      <p style={{ marginLeft: '20px' }}>Trang Chủ / <b>Tin Tức</b></p>
      <div className="news-articles">
        {news.map(article => (
          <div
            key={article.id}
            className="news-article"
            onClick={() => handleClick(article.id)}
            style={{ cursor: 'pointer', marginBottom: '20px' }}
          >
            <img src={article.imageUrl} alt={article.title} style={{ width: '100%', height: 'auto' }} />
            <h2>{article.title}</h2>
            <p>{article.content}</p>
            <p><em>Ngày đăng: {article.date}</em></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
