import React from 'react';

const HomePage = () => {
    return (
        <div> 
            <img src="https://bizweb.dktcdn.net/100/314/343/themes/780999/assets/slider_1.jpg?1720407861153" alt="Banner" width={"100%"} height="auto" />
            
            <div className="home-infor">
                <div className="text-infor">
                <h2>CÂU CHUYỆN THƯƠNG HIỆU</h2>
                <h3>SỨ MỆNH CỦA NHÀ SUITS</h3>
                <p>The Suits House đem đến cho khách hàng trải nghiệm may đo suit nhanh nhất trong 06 tiếng bằng phương pháp may đo truyền thống kết hợp công nghệ và chất lượng dịch vụ tận tâm, chu đáo và chuyên nghiệp.</p>

                <h3>NIỀM TỰ HÀO CỦA NHÀ SUITS</h3>
                <p>Bằng sự nỗ lực không ngừng nghỉ, The Suits House tự tin sẽ trở thành thương hiệu suit may đo nhanh nhất đầu tiên tại Việt Nam đưa may mặc Việt "đánh dấu" top 10 bản đồ thế giới trong 05 năm tới.</p>
                </div>
                <div className="video-infor">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/nUdYZZ1kj0A?si=_S1VGXBgtws4ZwXY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
            </div> 
                    <div className="infor-suits">
                    <div className="infor-suit-item">
                        <h2>01. MAY ĐO BỘ SUIT CHỈ TRONG VÒNG 6 TIẾNG</h2>
                        <p>Với công nghệ may đo tiên tiến, The Suits House tự hào là nhãn hàng đầu tiên tại Việt Nam với khả năng may đo 01 bộ suit nhanh nhất chỉ trong 06 tiếng.</p>
                    </div>
                    <div className="infor-suit-item">
                        <h2>02. BẢO HÀNH TRỌN ĐỜI - CHỈNH SỬA TUYỆT VỜI</h2>
                        <p>Chế độ hậu mãi và khả năng chỉnh sửa trang phục vừa vặn tuyệt đối với khách hàng chính là điều The Suits House tự hào nhất.</p>
                    </div>
                    <div className="infor-suit-item">
                        <h2>03. MAY ĐO TRUYỀN THỐNG VÀ CÔNG NGHỆ</h2>
                        <p>Khác với những phương thức tư vấn bán hàng cơ bản, The Suits House nay đã kết hợp với công nghệ hiện đại nhằm mang đến cho khách hàng trải nghiệm mua sắm hoàn toàn mới lạ.</p>
                    </div>
                    <div className="infor-suit-item">
                        <h2>04. DỊCH VỤ BÁN HÀNG HÀI LÒNG NHẤT</h2>
                        <p>The Suits House đã và đang trên đường hoàn thành nhiệm vụ trở thành thương hiệu mang lại trải nghiệm hài lòng nhất đến khách hàng cùng phương châm: Phục vụ khách hàng như Người Nhà!</p>
                    </div>
            </div>
            
        </div>
    );
};

export default HomePage;