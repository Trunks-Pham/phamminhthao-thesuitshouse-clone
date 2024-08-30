import React from 'react';
import { useParams } from 'react-router-dom';
import { news } from '../data';

const NewsDetail = () => {
  const { id } = useParams();
  // Chuyển đổi id từ string sang number
  const articleId = parseInt(id, 10);
  const article = news.find(article => article.id === articleId);

  if (!article) {
    return <p style={{ marginTop: '120px' }}>Bài viết không tồn tại.</p>;
  }

  return (
    <div style={{ marginLeft: '50px', marginRight: '50px', marginTop: '120px' }}>
      <p style={{ marginLeft: '20px' }}>Trang Chủ / Tin Tức / <b>{article.title}</b></p>
      <div className="news-article">
        <img src={article.imageUrl} alt={article.title} style={{ width: '100%', height: 'auto' }} />
        <h2>{article.title}</h2>
        <p>{article.content}</p>
        <p><em>Ngày đăng: {article.date}</em></p>
        <p>Sự xuất hiện của Nghệ Sĩ Trường Giang trong bộ suit đen lịch lãm từ The Suits House đã góp phần tô điểm thêm sự sang trọng và ý nghĩa cho buổi lễ. Kiểu dáng suit được thiết kế tinh tế, cùng gam màu trang nhã đã tôn lên vẻ ngoài lịch lãm, nam tính của anh, đồng thời thể hiện sự trân trọng dành cho cô dâu và chú rể.
<br/>
<br/>
Niềm vinh dự to lớn khi được đồng hành cùng Nghệ Sĩ Trường Giang trong ngày vui trọng đại này, The Suits House mong rằng bộ suit đã góp phần tạo nên những khoảnh khắc đẹp và đáng nhớ cho anh, Midu và Minh Đạt.
<br/>
<br/>
Một lần nữa, Nhà SUITS xin chân thành cảm ơn Nghệ sĩ Trường Giang và chúc cho cô dâu Midu và chú rể Minh Đạt trăm năm hạnh phúc.
<img src="https://bizweb.dktcdn.net/100/314/343/files/2-11zon.jpg?v=1720508156023" style={{ width: '100%', height: 'auto' }} />
<br/>
<img src="https://bizweb.dktcdn.net/100/314/343/files/1-11zon.jpg?v=1720508153872s" style={{ width: '100%', height: 'auto' }}/>
</p>
      </div>
    </div>
  );
};

export default NewsDetail;
