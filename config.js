/* =====================================================================
 *  CẤU HÌNH ỨNG DỤNG ĐẶT XE GHÉP
 *  -> Giá, tuyến, hotline, giờ chạy: sửa trong TRANG QUẢN LÝ (admin.html) là đủ.
 *     File này chỉ là giá trị gốc khi chưa sửa gì trên trang quản lý.
 *  -> Sau khi sửa: tăng APP_VERSION 1 số để điện thoại khách tự cập nhật.
 * ===================================================================== */
window.APP_CONFIG = {
  APP_VERSION: "1.1.0",

  /* Thương hiệu hiển thị */
  BRAND: "Xe Xanh",
  SLOGAN: "Xe ghép – Bao xe cao tốc · Đón trả tận nơi",
  TAGLINE: "Phục vụ nhiệt tình · Chu đáo · Tin cậy",
  HOTLINE: "0589353353",          // số gọi (không dấu cách)
  HOTLINE_DISPLAY: "0589 353 353",
  ZALO: "0589353353",             // số Zalo nhận tin
  HOTLINE_LABEL: "Hotline hỗ trợ ứng dụng",
  POSTER_FOOTER: "APP ĐẶT XE SIÊU TỐC",
  POSTER_FOOTER_SUB: "Đặt xe trực tuyến 24/7",
  WEBSITE: "xeghepsieutoc.vn",   // địa chỉ web in trên poster

  /* Nhận đơn – sửa nhanh trong trang quản lý admin.html */
  OPEN: true,
  CLOSED_MSG: "Hệ thống đang tạm ngưng nhận đơn, vui lòng gọi hotline.",
  NOTICE: "",
  CAR_SEATS: 7,         // số ghế 1 xe ghép (dùng khi xếp chuyến)

  /* URL Web App Google Apps Script (dán vào sau khi Deploy Code.gs).
     Để trống "" = chế độ DEMO (không gửi Telegram, chỉ hiện thông báo). */
  API_URL: "https://script.google.com/macros/s/AKfycbzNV1zZrskPx1unvRlMA0PvMSbncIx2bSiu0m_hJBHKb3ah-0F0NsbePIRKkcLx6Thg/exec",

  /* Giờ xuất bến có thể chọn */
  FIRST_HOUR: 4,        // chuyến sớm nhất 04:00
  LAST_HOUR: 22,        // chuyến muộn nhất 22:00
  STEP_MINUTES: 30,     // mỗi 30 phút 1 khung giờ
  MIN_LEAD_MINUTES: 45, // khách phải đặt trước ít nhất 45 phút
  MAX_DAYS_AHEAD: 30,   // cho đặt trước tối đa 30 ngày
  MAX_SEATS_GHEP: 6,    // số ghế tối đa 1 lần đặt ghép

  /* Các điểm (key viết liền không dấu) */
  PLACES: [
    { key: "hanoi",    name: "Hà Nội" },
    { key: "haiphong", name: "Hải Phòng" },
    { key: "halong",   name: "Hạ Long" },
    { key: "campha",   name: "Cẩm Phả" },
    { key: "vandon",   name: "Vân Đồn" },
    { key: "mongcai",  name: "Móng Cái" }
  ],

  /* Bảng giá (nghìn đồng) – áp dụng CẢ 2 CHIỀU.
     ghep = giá 1 ghế xe ghép · xe5 = bao xe 5 chỗ · xe7 = bao xe 7 chỗ */
  ROUTES: [
    { a: "hanoi",    b: "mongcai",  xe5: 2200, xe7: 2400, ghep: 650 },
    { a: "hanoi",    b: "vandon",   xe5: 1600, xe7: 1800, ghep: 600 },
    { a: "hanoi",    b: "campha",   xe5: 1300, xe7: 1500, ghep: 500 },
    { a: "hanoi",    b: "halong",   xe5: 1100, xe7: 1200, ghep: 450 },
    { a: "hanoi",    b: "haiphong", xe5: 900,  xe7: 1000, ghep: 400 },
    { a: "haiphong", b: "mongcai",  xe5: 1500, xe7: 1700, ghep: 500 },
    { a: "haiphong", b: "vandon",   xe5: 900,  xe7: 1100, ghep: 400 },
    { a: "haiphong", b: "campha",   xe5: 600,  xe7: 700,  ghep: 350 },
    { a: "haiphong", b: "halong",   xe5: 400,  xe7: 500,  ghep: 250 },
    { a: "halong",   b: "mongcai",  xe5: 900,  xe7: 1100, ghep: 350 },
    { a: "halong",   b: "vandon",   xe5: 400,  xe7: 500,  ghep: 200 }
  ],

  /* Điểm đi/đến mặc định khi khách mở app (có thể đổi bằng link ?from=hanoi&to=halong) */
  DEFAULT_FROM: "hanoi",
  DEFAULT_TO: "halong",

  /* Ưu điểm hiển thị ở trang chủ */
  HIGHLIGHTS: [
    { icon: "🏠", text: "Đón trả tận nhà" },
    { icon: "🛣️", text: "Chạy cao tốc" },
    { icon: "🚘", text: "Xe đời mới, sạch sẽ" },
    { icon: "⏱️", text: "Xác nhận nhanh" }
  ]
};
