# PROM RECORD 방문 통계

사이트: https://minji5996-creator.github.io/prom-record/

## 연결 정보

- Google 태그 관리자: GTM-WNHDK5M8
- GA4 측정 ID: G-FF9HTVGCBX
- 공개 ID 설정: data/analytics.json → public/assets/analytics-config.js
- 방문 통계를 허용한 경우에만 Google 도구를 로드합니다. 거부, GPC/브라우저 추적 거부, 관리자, 404, 리다이렉트, 다른 GitHub 프로젝트 및 로컬 환경은 제외합니다.

## 구현

GTM에서 사이트의 GA4 로더를 실행하도록 전환할 준비가 되어 있습니다. **Google 컨테이너 안의 연결 태그 가져오기·게시가 아직 남아 있으며, 연결 완료로 보고하지 않습니다.** gtm-container-import.json을 GTM-WNHDK5M8에 병합하고 게시하면 prom_analytics_ready 이벤트에서 정확한 컨테이너·측정 ID를 확인한 뒤 GA4를 실행합니다. 1.5초 안에 GTM 연결 태그가 실행되지 않으면 기존 사이트 방식으로 GA4 수집을 유지합니다. 늦거나 중복된 GTM 콜백은 Google 태그나 조회를 추가 실행하지 않습니다. **이 연결 파일 외에 같은 ID의 Google/GA4 태그나 HTML 스니펫을 중복 삽입하지 마세요.**

실제 Google 라이브러리 검증 중 기본 향상된 측정이 부모 문서의 뉴스 검색어를 자동 수집하는 것을 확인했습니다. Google 라이브러리는 assets/analytics-frame.html의 빈 동일 출처 문서에서 실행하고, 부모 사이트의 승인된 이벤트와 정리한 페이지 문맥만 전달하도록 분리했습니다. 자동 관찰기가 문의 폼·뉴스 검색창·부모 URL 변경을 직접 읽지 않습니다. 해당 프레임은 noindex이며 직접 단독으로 열면 GA4를 초기화하지 않습니다. 자동 페이지 조회를 끄고 부모 페이지 URL/제목/유입 도메인으로 명시적인 조회를 전송합니다. iframe의 URL을 보고서 페이지 URL로 사용하지 않습니다.

Google Signals와 광고 개인화를 사용하지 않습니다. 사이트 동의는 analytics_storage만 허용하고 광고 저장소·광고 사용자 데이터·광고 개인화는 거부합니다. 추적 도구 없이도 문의 접수와 사이트 이용은 가능합니다.

## 이벤트

| 이벤트 | 시점 | 추가 정보 |
|---|---|---|
| page_view | 동의 후 공개 페이지마다 1회 | 고정 페이지 URL/제목, 분류, 유입 도메인 |
| view_project | 작업 상세 링크 선택 | project_id |
| open_press_article | NEWS 기사 원문 링크 선택 | article_id, publisher |
| open_social_link | Instagram·YouTube 링크 선택 | platform |
| play_project_video | 작업 상세 임베드 열기 | platform, video_id |
| generate_lead | Supabase 접수 확인 후 | form_id=contact |

영상 이벤트는 시청 시간이나 재생 완료가 아니라 임베드를 여는 행동입니다. 이름·이메일·문의 내용·검색 입력·URL 쿼리/해시·복구 토큰·사용자 ID를 직접 전달하지 않습니다. UTM 매개변수도 제외됩니다. 문의 실패와 중복 클릭은 문의 전환으로 보내지 않습니다. 동의를 거부하거나 추적을 차단한 방문은 집계되지 않습니다. GA4는 방문자의 실명/이메일을 자동으로 알려주는 서비스가 아닙니다.

## 관리와 보고서

- https://analytics.google.com/ → 해당 속성 → 보고서 → 실시간에서 최근 방문을 확인합니다.
- 주요 이벤트로 generate_lead를 등록하면 문의 전환을 별도로 볼 수 있습니다. 계정 안에서 주요 이벤트 등록과 보고서 반영 여부까지 확인한 것은 아닙니다.
- 작업별 분석이 필요하면 이벤트 범위 맞춤 측정기준 project_id, article_id, publisher, platform, content_group을 등록합니다.
- Google 수집 주소의 HTTP 응답은 네트워크 수신 확인이며 GA4 보고서 처리/집계를 보증하지 않습니다.
- 향상된 측정이 필요 없다면 웹 데이터 스트림에서 끌 수 있습니다. 현재 구현은 부모 문서의 자동 DOM·검색 추적에 의존하지 않습니다.

## 검증

- scripts/qa-analytics.mjs: 모의 Google/Supabase로 미설정·GTM 단독·GTM 게시 전 기존 수집 유지·GTM 우선 실행·지연/중복 콜백·동의/거부/회수·중복 방지·문의 성공/실패·민감 정보 제외를 검증합니다.
- scripts/qa-ga4-google-runtime.mjs: 실제 Google 라이브러리를 실행하되 수집 요청은 전송 전에 가로채어 검색어 자동 전송·조회 중복을 확인합니다.
- scripts/qa-analytics-live.mjs: 공개 13개 페이지와 관리자 제외를 확인하고, 허용 후 실제 Google 태그 로드 및 수집 주소 응답을 검사합니다. GA4 대시보드의 내부 데이터에 접근하는 테스트가 아닙니다.
- window.PROM_ANALYTICS.getStatus()의 gtmTagConfirmed=true 및 ga4Controller=gtm은 해당 문서에서 GTM이 GA4 실행을 제어한 증거입니다. site_fallback이면 기존 직접 수집이 유지 중입니다. googleTagLoaded는 라이브러리 로드 상태이며, 보고서 수신/처리 완료를 뜻하지 않습니다.

공개 ID 변경:

    node scripts/configure-analytics.mjs --gtm GTM-WNHDK5M8 --ga4 G-FF9HTVGCBX
    node scripts/build-seo.mjs
    node scripts/export-github-pages.mjs

공식 문서: https://developers.google.com/analytics/devguides/collection/ga4/views · https://developers.google.com/analytics/devguides/collection/ga4/reference/config
