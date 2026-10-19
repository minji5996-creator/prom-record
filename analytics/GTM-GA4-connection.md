# GA4 직접 head 설치로 전환됨

현재 GA4 G-FF9HTVGCBX는 공개 13페이지의 상위 head에 설치합니다. GTM-WSNV4HSJ는 보존하지만 GA4 실행을 맡지 않습니다.

과거 prom_analytics_ready 연결 이벤트는 더 이상 발생하지 않으며 activateFromGtm 콜백은 false로 종료합니다. 과거 가져오기 JSON은 역사적 기록이며 다시 가져오거나 같은 측정 ID의 GA4 태그를 추가하지 마세요. 새 GTM 가져오기·게시는 필요 없습니다.

window.PROM_ANALYTICS.getStatus()에서 installation=direct_head, ga4Controller=head, legacyGtmBridgeDisabled=true를 확인합니다.
