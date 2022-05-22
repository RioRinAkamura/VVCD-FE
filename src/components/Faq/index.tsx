import { Button, Collapse } from "antd";
import React from "react";

const { Panel } = Collapse;

const Faq = () => {
  return (
    <div className="container-fluid">
      <div className="faqBlock">
        <div className="titleHolder">
          <h2>Câu hỏi thường gặp (FAQ)</h2>
          <p>
            Dưới đây là một số câu hỏi thường gặp khi du khách đến với Côn Đảo
          </p>
        </div>
        <Collapse defaultActiveKey={4}>
          <Panel header="Nên đến Côn Đảo vào thời gian nào?" key="4">
            <p>
              Các tháng 3 - 9 là thời gian biển êm, các trận mưa ở Côn Đảo
              thường ngắn nên không ảnh hưởng đến việc tham quan của du khách.
            </p>
            <p>
              Bạn nên hạn chế tới Côn Đảo trong khoảng thời gian từ tháng 10 đến
              hết tháng 2 năm sau. Đây là lúc biển động, chi phí sinh hoạt tại
              Côn Đảo thường rất đắt đỏ do tàu bè chuyên chở hàng hóa không thể
              ra đảo.
            </p>
          </Panel>
          <Panel header="Di chuyển đến Côn Đảo bằng cách nào?" key="1">
            <p>
              Để đi đến Côn Đảo, bạn có thể di chuyển bằng máy bay từ TP.HCM,
              Cần Thơ, Hà Nội, Hải Phòng, Đà Nẵng hoặc tàu thủy từ Vũng Tàu, Cần
              Thơ
            </p>
          </Panel>
          <Panel header="Côn Đảo có đặc sản gì?" key="2">
            <p>
              Đặc sản của Côn Đảo là cá mú đỏ, mực một nắng, sá sùng, cua mặt
              trăng, ốc vú nàng… cũng là những món không nên bỏ qua. Điều đặc
              biệt là giá cả của các nhà hàng ở đây tương đối giống nhau, nên
              không cần phải chọn lựa nhiều. Ngoài hải sản khô và tươi, hạt bàng
              là một đặc sản mà du khách nên thử khi đến Côn Đảo. Hạt bàng rang
              muối hay tẩm đường và gừng là một món quà đặc biệt bạn dành cho
              người thân ở nhà.
            </p>
          </Panel>
          <Panel header="Đến Côn Đảo chơi gì?" key="6">
            <p>
              <b>Lặn ngắm san hô:</b> Bạn có thể tìm thấy rất nhiều loại san hô
              cũng như các loại cá rất ấn tượng tại hầu hết các hòn đảo nhỏ
              chung quanh đảo lớn Côn Đảo. Hệ thống san hô tại Côn Đảo có thể
              nói là phong phú vào bậc nhất Việt Nam.
            </p>
            <p>
              <b>Câu cá:</b> Câu cá có hai dạng, câu cá giải trí (thời gian nửa
              hoặc 1 ngày) hay câu cá chuyên nghiệp (thời gian thường từ 3 ngày
              2 đêm trở lên). Dù là câu cá giải trí hay câu cá chuyên nghiệp thì
              hoạt động này đặc biệt thu hút các câu thủ từ khắp mọi nơi đến
              đây.
            </p>
            <p>
              <b>Xem vích đẻ trứng:</b> Tận hưởng những khoảnh khắc khó quên
              nhất tại Côn Đảo với một ngày trên hoang đảo và trải nghiệm một
              đêm lặng lẽ nhưng vô cùng quyến rũ trên hòn Bảy Cạnh. Bạn sẽ được
              tận mắt chứng kiến những con rùa biển Chelonia mydas mà dân gian
              hay gọi rùa xanh hay vích… làm ổ và đẻ trứng bên bờ biển.
            </p>
            <p>
              <b>Khám phá đảo hoang:</b> Vịnh Côn Sơn bao gồm hệ thống 14 hòn
              đảo nhỏ to khác nhau với chuỗi hòn Tài, hòn Trác, hòn Thỏ, … quây
              quần như một đại gia đình và hòn Bảy Cạnh, Bông Lan, hòn Cau, hòn
              Trứng, hòn Tre… hùng vĩ giữa khơi xa, là những hòn đảo tạo nên vẻ
              đẹp thơ mộng cho Vịnh Côn Sơn và là khu bảo tồn sinh thái biển với
              các rạn san hô ít có nơi nào có thể sánh được về mật độ và chủng
              loại.
            </p>
          </Panel>
          <Panel header="Phương tiện đi lại trên đảo như thế nào?" key="3">
            <p>
              <b>Đi bộ:</b> Phù hợp khi đi lại tại các điểm tham quan ở khu vực
              trung tâm thị trấn, đi dạo bộ tại các bãi biển,… Các điểm tham
              quan tại Côn Đảo nằm tương đối xa nhau nên muốn đi bộ để đi lại
              giữa các điểm tham quan không phải là một lựa chọn hợp lý.
            </p>
            <p>
              <b>Xe đạp:</b> Nếu bạn yêu thích di chuyển bằng xe đạp để khám phá
              Côn Đảo, bạn có thể thuê xe đạp tại các khách sạn, resort.
            </p>
            <p>
              <b>Xe máy:</b> Xe máy là phương tiện đi lại cơ động và chủ động
              nhất. Du khách có thể mang xe máy theo khi ra Côn Đảo bằng tàu cao
              tốc hoặc thuê xe máy tại các khách sạn, tại các cửa hàng dịch vụ
              thuê xe gắn máy. Nếu không du khách vẫn có thể đi xe ôm.
            </p>
            <p>
              <b>Xe taxi</b>
            </p>
            <p>
              <b>Xe điện</b>
            </p>
            <p>
              <b>Xe du lịch</b>
            </p>
            <p>
              <b>Tàu, thuyền, cano:</b> Nếu có nhu cầu đi thăm quan các đảo, đi
              câu cá, lặn ngắm san hô, xem vích đẻ trứng,…{" "}
            </p>
          </Panel>

          <Panel header="Điểm tham quan nào nổi tiếng?" key="5">
            <p>
              Những điểm đến tìm hiểu lịch sử và tâm linh: nghĩa trang Hàng
              Dương, di tích lịch sử nhà tù Côn Đảo, bảo tàng Côn Đảo, đền thờ
              bà Phi Yến, miếu và mộ của Hoàng tử Cải, chùa Núi Một. Các điểm
              thăm thú thiên nhiên: Bãi Đầm Trầu, rừng Ông Đụng, mũi Cá Mập, hòn
              Bảy Cạnh, hòn Tài, hòn Tre lớn, hòn Cau, vịnh Đầm Tre…
            </p>
          </Panel>
        </Collapse>
        <div className="quickSupport">
          <h3>Hotline</h3>
          <p>0869.315.579</p>
          <Button type="primary" size="large">
            <i className="fas fa-envelope"></i> Email your question
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Faq;
