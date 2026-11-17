/* =====================================================================
 *  ĐA NGÔN NGỮ – trang khách đặt xe (Tiếng Việt · English · 中文 · 한국어)
 *  Đơn gửi về Telegram/Google Sheet vẫn bằng tiếng Việt.
 * ===================================================================== */
window.XG_I18N = (function () {
  var LANGS = [["vi", "🇻🇳 VI"], ["en", "🇬🇧 EN"], ["zh", "🇨🇳 中文"], ["ko", "🇰🇷 한국어"]];
  var IDX = { vi: 0, en: 1, zh: 2, ko: 3 };

  /* Tên địa điểm hiển thị (dữ liệu đơn vẫn dùng tên tiếng Việt) */
  var PLACES = {
    hanoi:    ["Hà Nội", "Hanoi", "河内", "하노이"],
    haiphong: ["Hải Phòng", "Hai Phong", "海防", "하이퐁"],
    halong:   ["Hạ Long", "Ha Long", "下龙", "하롱"],
    campha:   ["Cẩm Phả", "Cam Pha", "锦普", "깜파"],
    vandon:   ["Vân Đồn", "Van Don", "云屯", "번돈"],
    mongcai:  ["Móng Cái", "Mong Cai", "芒街", "몽까이"]
  };

  /* Chữ trong cấu hình mặc định (đầu trang, ưu điểm, chân trang) */
  var CFG = {
    "App đặt xe ghép siêu tốc": ["Express shared rides", "极速拼车预订", "초고속 합승 예약"],
    "⚡ Chỉ 1 phút xe sẽ liên hệ với bạn": ["⚡ We contact you in 1 minute", "⚡ 1分钟内与您联系", "⚡ 1분 안에 연락드립니다"],
    "Đón trả tận nhà": ["Door-to-door pick-up", "上门接送", "집 앞 픽업·하차"],
    "Chạy cao tốc": ["Expressway route", "走高速", "고속도로 운행"],
    "Xe đời mới, sạch sẽ": ["New, clean cars", "新车·干净整洁", "신형·깨끗한 차량"],
    "Xác nhận nhanh": ["Fast confirmation", "快速确认", "빠른 확인"],
    "Phục vụ nhiệt tình · Chu đáo · Tin cậy": ["Friendly · Attentive · Reliable", "热情 · 周到 · 可靠", "친절 · 세심 · 신뢰"]
  };

  /* Chữ động trong mã: [vi, en, zh, ko] */
  var S = {
    today: ["Hôm nay", "Today", "今天", "오늘"],
    tomorrow: ["Ngày mai", "Tomorrow", "明天", "내일"],
    dayafter: ["Ngày kia", "In 2 days", "后天", "모레"],
    otherday: ["Ngày khác", "Other date", "其他日期", "다른 날짜"],
    pick: ["📅 Chọn", "📅 Pick", "📅 选择", "📅 선택"],
    g1: ["🌅 Sáng sớm", "🌅 Early morning", "🌅 清晨", "🌅 이른 아침"],
    g2: ["☀️ Buổi sáng", "☀️ Morning", "☀️ 上午", "☀️ 오전"],
    g3: ["🌤️ Buổi chiều", "🌤️ Afternoon", "🌤️ 下午", "🌤️ 오후"],
    g4: ["🌙 Buổi tối", "🌙 Evening", "🌙 晚上", "🌙 저녁"],
    hintPick: ["Chọn giờ bạn muốn xuất phát (giờ đón dự kiến).", "Choose your departure (pick-up) time.", "请选择出发（接载）时间。", "출발(픽업) 시간을 선택하세요."],
    hintSel: ["Đã chọn {t} – {d}. Tài xế có thể đón sớm/muộn 10–15 phút tuỳ lộ trình ghép.",
              "Selected {t} – {d}. The driver may arrive 10–15 minutes early or late depending on the shared route.",
              "已选 {t} – {d}。根据拼车路线，司机可能提前或晚到10–15分钟。",
              "{d} {t} 선택됨. 합승 경로에 따라 기사님이 10–15분 일찍 또는 늦게 도착할 수 있습니다."],
    perSeat: [" / ghế", " / seat", " / 座", " / 1석"],
    contact: ["Liên hệ", "Ask us", "请咨询", "문의"],
    priceContact: ["Giá liên hệ", "Price on request", "价格请咨询", "가격 문의"],
    seats: ["ghế", "seat(s)", "座", "석"],
    svc_ghep: ["Xe ghép", "Shared ride", "拼车", "합승"],
    svc_xe5: ["Bao xe 5 chỗ", "Private 5-seat car", "包车（5座）", "5인승 단독 차량"],
    svc_xe7: ["Bao xe 7 chỗ", "Private 7-seat car", "包车（7座）", "7인승 단독 차량"],
    outToday: ["Hôm nay đã hết khung giờ, đã chuyển sang ngày mai", "No more trips today – switched to tomorrow", "今天已无班次，已切换到明天", "오늘 운행이 마감되어 내일로 변경했습니다"],
    maxDays: ["Chỉ nhận đặt trong {n} ngày tới", "Bookings accepted only within the next {n} days", "仅接受未来{n}天内的预订", "향후 {n}일 이내만 예약할 수 있습니다"],
    needTime: ["⏰ Vui lòng chọn giờ đi", "⏰ Please choose a departure time", "⏰ 请选择出发时间", "⏰ 출발 시간을 선택하세요"],
    chosen: ["Đã chọn {r}", "Selected {r}", "已选择 {r}", "{r} 선택됨"],
    lbSvc: ["Loại xe", "Service", "车型", "서비스"],
    lbRoute: ["Tuyến", "Route", "路线", "노선"],
    lbTime: ["Ngày giờ", "Date & time", "日期时间", "날짜·시간"],
    lbName: ["Họ tên", "Name", "姓名", "이름"],
    lbPhone: ["Điện thoại", "Phone", "电话", "전화번호"],
    lbPick: ["📍 Điểm đón", "📍 Pick-up", "📍 上车地点", "📍 픽업 장소"],
    lbDrop: ["Điểm trả", "Drop-off", "下车地点", "하차 장소"],
    lbNote: ["Ghi chú", "Note", "备注", "메모"],
    lbTotal: ["Tạm tính", "Estimated fare", "预估费用", "예상 요금"],
    editPick: ["✏️ Đổi điểm đón", "✏️ Change pick-up", "✏️ 修改上车地点", "✏️ 픽업 장소 변경"],
    send: ["Gửi đặt xe", "Send booking", "提交预订", "예약 보내기"],
    sending: ["Đang gửi…", "Sending…", "提交中…", "보내는 중…"],
    doneMsg: ["Tổng đài sẽ gọi lại số {p} trong ít phút để xác nhận và báo thông tin tài xế.",
              "We will contact {p} within a few minutes to confirm your booking.",
              "我们将在几分钟内联系 {p} 确认您的预订。",
              "몇 분 안에 {p}(으)로 연락드려 예약을 확인해 드립니다."],
    failTail: [" Bạn có thể thử lại hoặc gọi / nhắn Zalo để đặt nhanh.", " Please try again or call us to book.", " 请重试，或致电我们预订。", " 다시 시도하시거나 전화로 예약해 주세요."],
    netErr: ["Máy chủ chưa nhận được đơn.", "The server did not receive your booking.", "服务器未收到您的预订。", "서버가 예약을 받지 못했습니다."],
    copiedZalo: ["Đã copy thông tin – dán vào khung chat Zalo", "Booking details copied – paste them into a chat with us", "预订信息已复制，请粘贴到聊天中发给我们", "예약 정보가 복사되었습니다 – 채팅에 붙여넣어 보내주세요"],
    pkLbl: ["📍 Chọn nhanh điểm đón đã dùng:", "📍 Your recent pick-up addresses:", "📍 最近使用的上车地点：", "📍 최근 픽업 장소:"],
    dpLbl: ["🏁 Điểm trả đã dùng:", "🏁 Recent drop-off addresses:", "🏁 最近使用的下车地点：", "🏁 최근 하차 장소:"],
    closed: ["Tạm ngưng nhận đơn", "Bookings paused", "暂停接单", "예약 일시 중지"],
    closedMsg: ["Hệ thống đang tạm ngưng nhận đơn.", "We are not taking bookings at the moment.", "目前暂停接受预订。", "현재 예약을 받지 않습니다."],
    browser: ["trình duyệt", "browser", "浏览器", "브라우저"],
    copiedLink: ["Đã copy link – mở Chrome/Safari rồi dán vào ô địa chỉ", "Link copied – open Chrome/Safari and paste it", "链接已复制，请在 Chrome/Safari 中粘贴打开", "링크 복사됨 – Chrome/Safari 주소창에 붙여넣으세요"],
    installed: ["🎉 Đã cài app thành công!", "🎉 App installed!", "🎉 安装成功！", "🎉 앱이 설치되었습니다!"],
    newVer: ["Đã có phiên bản mới", "A new version is available", "有新版本", "새 버전이 있습니다"],
    reload: ["Tải lại", "Reload", "刷新", "새로고침"],
    version: ["Phiên bản", "Version", "版本", "버전"],
    title: ["Đặt xe ghép", "Shared ride booking", "拼车预订", "합승 예약"],
    phoneErr: ["Số điện thoại chưa đúng (10 số, bắt đầu bằng 0)", "Invalid phone number – use a Vietnamese number or include your country code, e.g. +86…", "电话号码无效：请填写越南号码，或带国家区号，如 +86…", "전화번호가 올바르지 않습니다 – 베트남 번호 또는 국가번호 포함(예: +82…)"],
    /* Hướng dẫn riêng cho khách nước ngoài */
    foreign: ["",
      "<b>ℹ️ Good to know</b><br>• We will message you to confirm the exact pick-up point.<br>• You pay the driver when you get in the car.<br>• If you need to cancel, please let us know as soon as possible.",
      "<b>ℹ️ 温馨提示</b><br>• 车行会发消息与您确认具体上车地点。<br>• 上车后再付款。<br>• 如需取消行程，请尽早告知我们。",
      "<b>ℹ️ 안내</b><br>• 차량 회사에서 메시지로 정확한 픽업 장소를 확인해 드립니다.<br>• 요금은 차량에 탑승한 후 결제합니다.<br>• 예약을 취소하실 경우 꼭 미리 알려 주세요."],
    /* Định vị */
    gpsBtn: ["📍 Dùng vị trí hiện tại của tôi", "📍 Use my current location", "📍 使用我的当前位置", "📍 현재 위치 사용"],
    gpsLoading: ["Đang lấy vị trí…", "Getting your location…", "正在获取位置…", "위치를 가져오는 중…"],
    gpsOk: ["Đã lấy vị trí GPS (sai số ~{m}m) – kiểm tra lại số nhà nếu cần", "GPS location added (±{m} m) – please check the address", "已获取GPS位置（误差约{m}米），如有需要请核对地址", "GPS 위치 추가됨 (오차 약 {m}m) – 주소를 확인해 주세요"],
    gpsMap: ["Xem trên bản đồ", "View on map", "在地图上查看", "지도에서 보기"],
    gpsDenied: ["Bạn chưa cho phép định vị. Vào Cài đặt trình duyệt → Vị trí → Cho phép, hoặc nhập địa chỉ tay.", "Location permission denied. Allow location in your browser settings, or type the address.", "未允许定位。请在浏览器设置中允许位置权限，或手动输入地址。", "위치 권한이 없습니다. 브라우저 설정에서 위치를 허용하거나 주소를 직접 입력하세요."],
    gpsFail: ["Không lấy được vị trí, vui lòng nhập địa chỉ.", "Could not get your location – please type the address.", "无法获取位置，请手动输入地址。", "위치를 가져오지 못했습니다 – 주소를 입력하세요."],
    gpsNoAddr: ["Vị trí GPS của tôi", "My GPS location", "我的GPS位置", "내 GPS 위치"],
    /* Huỷ chuyến */
    cancelBtn: ["Huỷ chuyến", "Cancel trip", "取消行程", "예약 취소"],
    cancelled: ["Đã huỷ", "Cancelled", "已取消", "취소됨"],
    cancelTitle: ["Huỷ chuyến {c}", "Cancel booking {c}", "取消预订 {c}", "예약 {c} 취소"],
    cancelSub: ["Vui lòng cho nhà xe biết lý do huỷ chuyến", "Please let us know why you are cancelling", "请告诉我们取消的原因", "취소 사유를 알려 주세요"],
    otherPh: ["Nhập lý do huỷ…", "Type your reason…", "请输入原因…", "사유를 입력하세요…"],
    keep: ["Không huỷ nữa", "Keep booking", "不取消了", "취소 안 함"],
    confirmCancel: ["Xác nhận huỷ chuyến", "Confirm cancellation", "确认取消", "취소 확인"],
    cancelling: ["Đang huỷ…", "Cancelling…", "取消中…", "취소 중…"],
    pickReason: ["Vui lòng chọn hoặc nhập lý do huỷ", "Please choose or type a reason", "请选择或填写取消原因", "취소 사유를 선택하거나 입력하세요"],
    cancelOk: ["✔ Đã huỷ chuyến – nhà xe đã nhận được thông báo", "✔ Booking cancelled – we have been notified", "✔ 已取消，车行已收到通知", "✔ 예약이 취소되었고 업체에 전달되었습니다"],
    /* Ghi chú gửi về nhà xe (tiếng Việt) */
    noteLang: ["", "🌐 Khách nước ngoài – nói tiếng Anh, nhắn tin xác nhận điểm đón", "🌐 Khách nước ngoài – nói tiếng Trung, nhắn tin xác nhận điểm đón", "🌐 Khách nước ngoài – nói tiếng Hàn, nhắn tin xác nhận điểm đón"]
  };
  /* Lý do huỷ – mục cuối là "Lý do khác" (mở ô nhập) */
  var REASONS = [
    ["Thay đổi kế hoạch", "My plans changed", "行程有变", "일정이 변경됨"],
    ["Đặt nhầm giờ hoặc tuyến", "Booked the wrong time or route", "时间或路线订错了", "시간·노선을 잘못 예약함"],
    ["Đã có phương tiện khác", "Found other transport", "已有其他交通方式", "다른 교통편을 이용함"],
    ["Chờ lâu chưa được xác nhận", "Waited too long for confirmation", "等待确认太久", "확인 연락이 너무 늦음"],
    ["Lý do khác", "Other reason", "其他原因", "기타 사유"]
  ];
  var WD = [["CN","T2","T3","T4","T5","T6","T7"], ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"], ["周日","周一","周二","周三","周四","周五","周六"], ["일","월","화","수","목","금","토"]];

  var SHARE_SVG = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 15V3M8 7l4-4 4 4"/><path d="M6 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-1"/></svg>';

  /* Chữ cố định trên trang: selector → [en, zh, ko] (HTML) */
  var H = [
    ["#inappBanner .bt", ['<b>Opened inside <span id="inappName">an app</span></b>Open in your browser to install the app.', '<b>正在 <span id="inappName">应用</span> 内打开</b>请用浏览器打开以安装应用。', '<b><span id="inappName">앱</span> 안에서 열림</b>앱을 설치하려면 브라우저로 여세요.']],
    ["#inappOpen", ["Open browser", "用浏览器打开", "브라우저 열기"]],
    ["#installBanner .bt", ["<b>Install the app</b>Book with one tap next time", "<b>安装应用</b>下次一键预订", "<b>앱 설치</b>다음에는 한 번에 예약"]],
    ["#installOpen", ["Install", "安装", "설치"]],
    [".hero h1", ["Book a shared ride<br><em>in 30 seconds</em>", "拼车预订<br><em>只需30秒</em>", "합승 예약<br><em>단 30초</em>"]],
    ["#heroSub", ["Choose route · Choose time · Book – we confirm right away.", "选择路线 · 选择时间 · 一键预订，我们马上确认。", "노선 선택 · 시간 선택 · 예약 – 바로 확인해 드립니다."]],
    ["#heroInstall b", ["Install the booking app", "安装预订应用", "예약 앱 설치"]],
    ["#heroInstall small", ["Free · One-tap booking next time", "免费 · 下次一键预订", "무료 · 다음엔 한 번에 예약"]],
    ["#heroInstall .go", ["📲 Install", "📲 安装", "📲 설치"]],
    ["#svc [data-v=ghep] b", ["Shared ride", "拼车", "합승"]],
    ["#svc [data-v=ghep] small", ["Per seat", "按座位计价", "좌석당 요금"]],
    ["#svc [data-v=xe5] b", ["Private 5-seat", "包车 5座", "단독 5인승"]],
    ["#svc [data-v=xe5] small", ["Whole car", "整车包", "차량 전체"]],
    ["#svc [data-v=xe7] b", ["Private 7-seat", "包车 7座", "단독 7인승"]],
    ["#svc [data-v=xe7] small", ["Whole car", "整车包", "차량 전체"]],
    [".route label:nth-of-type(1) small", ["From", "出发地", "출발지"]],
    [".route label:nth-of-type(2) small", ["To", "目的地", "도착지"]],
    [".seats .lb b", ["Number of seats", "座位数", "좌석 수"]],
    ["#name + .errmsg", ["Please enter your name", "请输入姓名", "이름을 입력하세요"]],
    ["#pickup + .errmsg", ["Please enter the pick-up address", "请输入上车地点", "픽업 장소를 입력하세요"]],
    ["#ptabs [data-v=ghep]", ["Shared / seat", "拼车 / 座", "합승 / 석"]],
    ["#ptabs [data-v=xe5]", ["Private 5-seat", "包车 5座", "단독 5인승"]],
    ["#ptabs [data-v=xe7]", ["Private 7-seat", "包车 7座", "단독 7인승"]],
    ["#priceCard .note", ["Prices apply in both directions. Tap a route to select it. Prices may change during holidays – we confirm the exact fare when we contact you.", "价格双向通用。点击路线可快速选择。节假日价格可能变动，确认时会告知准确价格。", "요금은 왕복 동일합니다. 노선을 누르면 바로 선택됩니다. 명절에는 요금이 달라질 수 있으며 확인 연락 시 정확한 요금을 안내합니다."]],
    [".steps .step:nth-child(1) b", ["Choose route & time, tap Book", "选择路线和时间，点击预订", "노선·시간 선택 후 예약"]],
    [".steps .step:nth-child(1) small", ["No account needed.", "无需注册账号。", "회원가입이 필요 없습니다."]],
    [".steps .step:nth-child(2) b", ["We contact you to confirm", "我们联系您确认", "확인 연락을 드립니다"]],
    [".steps .step:nth-child(2) small", ["Exact fare, driver and plate number.", "准确价格、司机及车牌信息。", "정확한 요금, 기사 및 차량 번호 안내."]],
    [".steps .step:nth-child(3) b", ["Door-to-door pick-up on time", "准时上门接送", "정시에 집 앞 픽업"]],
    [".steps .step:nth-child(3) small", ["Pay when you get in the car.", "上车后付款。", "탑승 후 결제합니다."]],
    ["#ftInstall", ["Install app", "安装应用", "앱 설치"]],
    ["#bookBtn", ["Book now", "立即预订", "지금 예약"]],
    ["#ovConfirm h3", ["Confirm booking", "确认预订", "예약 확인"]],
    ["#ovConfirm .sub", ["Please check your details before sending", "提交前请核对信息", "보내기 전에 정보를 확인하세요"]],
    ["#ovConfirm [data-close]", ["Edit", "修改", "수정"]],
    ["#sendBtn", ["Send booking", "提交预订", "예약 보내기"]],
    ["#ovDone h3", ["Booking received!", "预订成功！", "예약 완료!"]],
    ["#ovDone p.sub:not(#doneMsg)", ["Your booking code", "您的预订编号", "예약 번호"]],
    ["#doneCall", ["📞 Call us now", "📞 立即致电", "📞 지금 전화하기"]],
    ["#ovDone [data-close]", ["Book another trip", "再订一程", "다른 예약하기"]],
    ["#ovErr h3", ["Booking not sent", "预订未发送", "예약을 보내지 못했습니다"]],
    ["#errMsg", ["Unstable connection. Please try again or call us to book.", "网络不稳定。请重试，或致电我们预订。", "연결이 불안정합니다. 다시 시도하시거나 전화로 예약해 주세요."]],
    ["#retryBtn", ["Try again", "重试", "다시 시도"]],
    ["#errZalo", ["💬 Send details via chat", "💬 通过聊天发送信息", "💬 채팅으로 정보 보내기"]],
    ["#errCall", ["📞 Call us", "📞 致电我们", "📞 전화하기"]],
    ["#ovInstall h3", ["📲 Install the app on your phone", "📲 将应用安装到手机", "📲 휴대폰에 앱 설치"]],
    ["#ovInstall .sub", ["Free · No app store needed · Under 1 MB", "免费 · 无需应用商店 · 不到1MB", "무료 · 앱스토어 불필요 · 1MB 미만"]],
    ["#nativeInstall", ["⬇️ Install now (one tap)", "⬇️ 立即安装（一键）", "⬇️ 지금 설치 (한 번 탭)"]],
    ["#ig-android .isteps", [
      '<li><div>Open this page in <b>Chrome</b> (inside Zalo/Facebook: tap <span class="kbd">⋮</span> → <b>Open in browser</b>).</div></li><li><div>Tap <span class="kbd">⋮</span> at the <b>top right</b> of Chrome.</div></li><li><div>Choose <b>“Add to Home screen”</b> or <b>“Install app”</b>.<div class="ill">📱 <span>Samsung Internet: tap <span class="kbd">≡</span> → <b>Add page to</b> → <b>Home screen</b></span></div></div></li><li><div>Tap <b>Install / Add</b>. The <b id="igName1">Đặt Xe Ghép</b> icon will appear on your home screen.</div></li>',
      '<li><div>用 <b>Chrome</b> 打开本页（在 Zalo/Facebook 内：点 <span class="kbd">⋮</span> → <b>用浏览器打开</b>）。</div></li><li><div>点 Chrome <b>右上角</b>的 <span class="kbd">⋮</span>。</div></li><li><div>选择 <b>“添加到主屏幕”</b> 或 <b>“安装应用”</b>。<div class="ill">📱 <span>Samsung Internet：点 <span class="kbd">≡</span> → <b>添加页面到</b> → <b>主屏幕</b></span></div></div></li><li><div>点 <b>安装 / 添加</b>，主屏幕会出现 <b id="igName1">Đặt Xe Ghép</b> 图标。</div></li>',
      '<li><div><b>Chrome</b>으로 이 페이지를 여세요 (Zalo/Facebook 안이라면 <span class="kbd">⋮</span> → <b>브라우저로 열기</b>).</div></li><li><div>Chrome <b>오른쪽 위</b>의 <span class="kbd">⋮</span>를 누르세요.</div></li><li><div><b>“홈 화면에 추가”</b> 또는 <b>“앱 설치”</b>를 선택하세요.<div class="ill">📱 <span>삼성 인터넷: <span class="kbd">≡</span> → <b>페이지 추가</b> → <b>홈 화면</b></span></div></div></li><li><div><b>설치 / 추가</b>를 누르면 홈 화면에 <b id="igName1">Đặt Xe Ghép</b> 아이콘이 생깁니다.</div></li>']],
    ["#ig-ios .isteps", [
      '<li><div>Open this page in <b>Safari</b> (inside Zalo/Facebook: tap <span class="kbd">⋯</span> → <b>Open in Safari</b>).</div></li><li><div>Tap <span class="kbd">' + SHARE_SVG + ' Share</span> at the bottom (iOS 26: tap <span class="kbd">⋯</span> first, then Share).</div></li><li><div>Scroll down and choose <span class="kbd">⊞ Add to Home Screen</span>.</div></li><li><div>Tap <b>Add</b> at the top right. Done! Open the app from the <b id="igName2">Đặt Xe Ghép</b> icon.</div></li>',
      '<li><div>用 <b>Safari</b> 打开本页（在 Zalo/Facebook 内：点 <span class="kbd">⋯</span> → <b>在 Safari 中打开</b>）。</div></li><li><div>点底部的 <span class="kbd">' + SHARE_SVG + ' 分享</span>（iOS 26：先点 <span class="kbd">⋯</span> 再选分享）。</div></li><li><div>向下滑动，选择 <span class="kbd">⊞ 添加到主屏幕</span>。</div></li><li><div>点右上角 <b>添加</b>。完成！从 <b id="igName2">Đặt Xe Ghép</b> 图标打开应用。</div></li>',
      '<li><div><b>Safari</b>로 이 페이지를 여세요 (Zalo/Facebook 안이라면 <span class="kbd">⋯</span> → <b>Safari로 열기</b>).</div></li><li><div>아래쪽 <span class="kbd">' + SHARE_SVG + ' 공유</span>를 누르세요 (iOS 26: 먼저 <span class="kbd">⋯</span>를 누른 뒤 공유).</div></li><li><div>아래로 내려 <span class="kbd">⊞ 홈 화면에 추가</span>를 선택하세요.</div></li><li><div>오른쪽 위 <b>추가</b>를 누르면 완료! <b id="igName2">Đặt Xe Ghép</b> 아이콘으로 앱을 여세요.</div></li>']],
    ["#installedNote", ["✅ Once installed, the app opens full-screen and remembers your name & phone for faster booking.", "✅ 安装后应用全屏打开，并记住您的姓名和电话，下次预订更快。", "✅ 설치 후 앱이 전체 화면으로 열리며 이름과 전화번호를 기억해 더 빠르게 예약할 수 있습니다."]],
    ["#ovInstall [data-close]", ["Later", "以后再说", "나중에"]],
    ["#ovInapp h3", ['Open in <span id="iaBrowser">browser</span> to install', '用 <span id="iaBrowser">浏览器</span> 打开以安装', '<span id="iaBrowser">브라우저</span>로 열어 설치하기']],
    ["#ovInapp .sub", ['You are inside <b id="iaApp">Zalo</b>, which cannot install apps. Open this page in your browser to add the booking app to your home screen.', '您正在 <b id="iaApp">Zalo</b> 内浏览，无法安装应用。请用浏览器打开，将预订应用添加到主屏幕。', '<b id="iaApp">Zalo</b> 안에서는 앱을 설치할 수 없습니다. 브라우저로 열어 홈 화면에 예약 앱을 추가하세요.']],
    ["#iaOpen", ['🚀 Open in <span id="iaBrowser2">browser</span>', '🚀 用 <span id="iaBrowser2">浏览器</span> 打开', '🚀 <span id="iaBrowser2">브라우저</span>로 열기']],
    ["#iaManual", ['If it does not open: tap <b>⋯</b> or <b>⋮</b> at the <b>top right</b> → choose <b>“Open in browser”</b> / <b>“Open in Safari”</b>.', '如未自动打开：点 <b>右上角</b> 的 <b>⋯</b> 或 <b>⋮</b> → 选择 <b>“用浏览器打开”</b> / <b>“在 Safari 中打开”</b>。', '열리지 않으면 <b>오른쪽 위</b> <b>⋯</b> 또는 <b>⋮</b> → <b>“브라우저로 열기”</b> / <b>“Safari로 열기”</b>를 선택하세요.']],
    ["#iaCopy", ["📋 Copy link to paste in browser", "📋 复制链接到浏览器粘贴", "📋 링크 복사해 브라우저에 붙여넣기"]],
    ["#ovInapp [data-close]", ["Book right here", "在此直接预订", "여기서 바로 예약"]],
    ["#iaArrow", ["Tap ⋯ here ↗ → Open in browser", "点这里 ⋯ ↗ → 用浏览器打开", "여기 ⋯ ↗ → 브라우저로 열기"]],
    ["#iosArrow", ["Tap <b>Share</b> ⬆️ below → <b>Add to Home Screen</b>", "点下方 <b>分享</b> ⬆️ → <b>添加到主屏幕</b>", "아래 <b>공유</b> ⬆️ → <b>홈 화면에 추가</b>"]]
  ];
  /* Tiêu đề từng mục (theo thứ tự .sec-t trên trang) */
  var SEC = [
    ["Service", "车型", "차량 종류"], ["Route", "路线", "노선"], ["Date & time", "日期和时间", "날짜·시간"], ["Passengers", "人数", "인원"],
    ["Contact details", "联系方式", "연락처"], ["💰 Fares", "💰 参考价格", "💰 요금표"], ["✨ How it works", "✨ 预订流程", "✨ 이용 방법"], ["🧾 Your bookings", "🧾 您的预订", "🧾 예약 내역"]
  ];
  /* Nhãn ô nhập (theo thứ tự .field > span) */
  var FIELD = [
    ['Name <i>*</i>', '姓名 <i>*</i>', '이름 <i>*</i>'],
    ['Phone <i>*</i>', '电话 <i>*</i>', '전화번호 <i>*</i>'],
    ['Pick-up address <i>*</i>', '上车地点 <i>*</i>', '픽업 장소 <i>*</i>'],
    ['Drop-off address', '下车地点', '하차 장소'],
    ['Note', '备注', '메모']
  ];
  var PH = {
    name: ["e.g. John Smith", "例如：王小明", "예: 김민수"],
    phone: ["e.g. +84 912 345 678 or +86…", "例如：+86 138 0000 0000", "예: +82 10 1234 5678"],
    pickup: ["Hotel name, street address…", "酒店名称、详细地址…", "호텔 이름, 주소…"],
    dropoff: ["Can be added when we contact you", "可在确认时补充", "확인 연락 시 알려주셔도 됩니다"],
    note: ["Large luggage, children, etc.", "大件行李、儿童等", "큰 짐, 어린이 동반 등"]
  };

  function detect() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && IDX[q] != null) return q;
    try { var s = localStorage.getItem("xg_lang"); if (s && IDX[s] != null) return s; } catch (e) {}
    var n = (navigator.language || "").toLowerCase();
    if (n.indexOf("zh") === 0) return "zh";
    if (n.indexOf("ko") === 0) return "ko";
    return "vi";   /* nhiều máy người Việt để giao diện tiếng Anh nên mặc định vẫn là tiếng Việt */
  }
  var LANG = detect(), I = IDX[LANG];

  function t(k, vars) {
    var a = S[k]; var v = a ? (a[I] || a[0]) : k;
    if (vars) for (var x in vars) v = v.split("{" + x + "}").join(vars[x]);
    return v;
  }
  function place(key, viName) { var p = PLACES[key]; return I && p ? p[I] : (viName || key); }
  function cfg(v) { var a = CFG[v]; return I && a ? a[I - 1] : v; }
  function wd(d) { return WD[I][d]; }

  function apply() {
    document.documentElement.lang = LANG;
    if (!I) return;
    H.forEach(function (h) { var el = document.querySelector(h[0]); if (el) el.innerHTML = h[1][I - 1]; });
    [].forEach.call(document.querySelectorAll(".sec-t"), function (el, i) {
      if (!SEC[i]) return; var n = el.querySelector(".n"); el.innerHTML = ""; if (n) el.appendChild(n); el.appendChild(document.createTextNode(SEC[i][I - 1]));
    });
    [].forEach.call(document.querySelectorAll(".field > span"), function (el, i) { if (FIELD[i]) el.innerHTML = FIELD[i][I - 1]; });
    for (var id in PH) { var e = document.getElementById(id); if (e) e.placeholder = PH[id][I - 1]; }
    var pe = document.querySelector("#phone + .errmsg"); if (pe) pe.textContent = t("phoneErr");
  }
  function set(l) { try { localStorage.setItem("xg_lang", l); } catch (e) {} var u = new URL(location.href); u.searchParams.delete("lang"); location.replace(u.toString()); }

  function reasons() { return REASONS.map(function (r) { return r[I]; }); }
  function reasonsVi() { return REASONS.map(function (r) { return r[0]; }); }
  return { reasons: reasons, reasonsVi: reasonsVi, LANGS: LANGS, lang: LANG, i: I, t: t, place: place, cfg: cfg, wd: wd, apply: apply, set: set };
})();
