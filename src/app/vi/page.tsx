import { type Metadata } from 'next'

import { LocalizedLanding } from '@/components/LocalizedLanding'
import { hreflangAlternates } from '@/components/landingAlternates'

export const metadata: Metadata = {
  title: 'Phần mềm POS miễn phí cho tiệm sửa điện thoại',
  description:
    'Phần mềm POS miễn phí cho tiệm sửa điện thoại — không phí hàng tháng, không thuê bao. Phiếu sửa chữa, báo khách qua SMS và WhatsApp, thanh toán và biên nhận trên iPhone và iPad. Hoạt động không cần mạng, bằng tiếng Việt.',
  alternates: hreflangAlternates('/vi'),
  openGraph: { locale: 'vi_VN' },
}

export default function Page() {
  return (
    <LocalizedLanding
      lang="vi"
      strings={{
        langName: 'Tiếng Việt',
        heroTitle: 'Phần mềm POS miễn phí cho tiệm sửa điện thoại',
        heroAccent: 'miễn phí',
        heroSubtitle:
          'Tạo phiếu sửa chữa, theo dõi từng ca sửa và thu tiền — tất cả trên iPhone hoặc iPad của bạn. Không phí hàng tháng, không thuê bao, không cần đăng ký. Tải về và bắt đầu làm việc trong một phút, hoàn toàn bằng tiếng Việt.',
        cta: 'Tải miễn phí trên App Store',
        featuresHeading: 'Mọi thứ tiệm của bạn cần',
        features: [
          {
            title: 'Tạo phiếu trong 30 giây',
            body: 'Khách hàng, thiết bị, lỗi và báo giá trên cùng một màn hình. Xong trước khi khách tiếp theo bước vào.',
          },
          {
            title: 'Trạng thái trực quan',
            body: 'Đã nhận → Đang kiểm tra → Đang sửa → Sẵn sàng → Đã giao. Biết ngay từng máy đang ở bước nào.',
          },
          {
            title: 'Báo khách qua SMS, WhatsApp và email',
            body: 'Một chạm để báo khách máy đã sửa xong. Gửi từ số điện thoại của bạn, không tốn phí cho mỗi tin nhắn.',
          },
          {
            title: 'Thu tiền và thanh toán',
            body: 'Ghi nhận thanh toán bằng tiền mặt, thẻ hoặc kết hợp. Luôn biết ai đã trả và ai còn nợ.',
          },
          {
            title: 'Biên nhận PDF',
            body: 'Biên nhận có tên tiệm của bạn, sẵn sàng in qua AirPrint hoặc gửi qua WhatsApp hay email.',
          },
          {
            title: 'Hoạt động không cần internet',
            body: 'Mọi dữ liệu nằm ngay trên thiết bị của bạn. iPad trên quầy, iPhone trong túi.',
          },
        ],
        stepsHeading: 'Cách hoạt động',
        steps: [
          {
            title: 'Tạo phiếu',
            body: 'Khách đến, bạn ghi lại thiết bị và lỗi, rồi đưa khách số phiếu. Chưa đến 30 giây.',
          },
          {
            title: 'Theo dõi sửa chữa',
            body: 'Chuyển công việc qua từng bước, thêm ghi chú và giúp cả nhóm nắm được tiến độ.',
          },
          {
            title: 'Thu tiền và giao máy',
            body: 'Đánh dấu đã sửa xong, ghi nhận thanh toán, báo khách và đóng phiếu.',
          },
        ],
        faqHeading: 'Câu hỏi thường gặp',
        faq: [
          {
            q: 'Có thật sự miễn phí không?',
            a: 'Có. Không phí hàng tháng, không cần thẻ tín dụng, không có thời gian dùng thử. Các đối thủ tính từ 39 đến 149 đô la mỗi tháng cho cùng tính năng.',
          },
          {
            q: 'Có dùng được khi không có internet không?',
            a: 'Có, 100%. Dữ liệu được lưu ngay trên thiết bị của bạn. Không cần internet để tạo phiếu, đổi trạng thái hay ghi nhận thanh toán.',
          },
          {
            q: 'Dùng được trên thiết bị nào?',
            a: 'iPhone và iPad. Trên iPad bạn có bảng điều khiển đầy đủ cho quầy; trên iPhone, cả tiệm nằm gọn trong túi bạn.',
          },
          {
            q: 'Ứng dụng có tiếng Việt không?',
            a: 'Có, ứng dụng được dịch hoàn toàn sang tiếng Việt — cùng với tiếng Anh, Tây Ban Nha, Bồ Đào Nha, Pháp, Đức, Ý, Nhật, Nga, Trung, Thổ Nhĩ Kỳ, Thái, Do Thái (Hebrew) và Ả Rập. Tổng cộng 14 ngôn ngữ.',
          },
        ],
        footerNote:
          'Được tạo bởi những người hiểu rõ tiệm sửa chữa. Không chi phí ẩn: tải về ngay hôm nay và quản lý tiệm của bạn bằng tiếng Việt.',
        inEnglish: 'In English',
      }}
    />
  )
}
