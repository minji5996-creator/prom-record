# PROM RECORD 방문 통계 연결

대상: https://minji5996-creator.github.io/prom-record/

## 현재 상태

사이트 연동 코드와 GTM 가져오기 파일 준비 완료. GA4 측정 ID와 GTM 컨테이너 ID가 비어 있어 **현재 Google로 방문 정보를 전송하지 않습니다.** Google 계정 생성·권한 확인·컨테이너 게시·실제 GA4 수신 확인은 아직 완료되지 않았습니다. Google 계정에 로그인할 수 있는 관리 연결 도구가 현재 세션에 없습니다.

## Google에서 최초 1회 설정

1. https://analytics.google.com/ 에서 계정 및 GA4 속성을 생성합니다. 이름 PROM RECORD, 시간대 대한민국/서울, 통화 KRW. 웹 데이터 스트림 URL은 위 GitHub Pages 전체 주소로 지정합니다. 측정 ID G-…를 확인합니다.
2. **웹 스트림의 향상된 측정은 끕니다.** 자동 폼 추적은 접수 실패도 전환처럼 오해할 수 있고, 검색·브라우저 기록 자동 측정은 필터 검색어/URL을 보낼 수 있습니다. 이 구현은 별도 안전한 페이지 조회와 접수 완료 이벤트를 보냅니다. Google Signals 및 사용자 제공 데이터 수집도 사용하지 않습니다.
3. https://tagmanager.google.com/ 에서 PROM RECORD 계정/웹 컨테이너를 생성하고 GTM-…를 확인합니다.
4. GTM 관리자 → 컨테이너 가져오기에서 옆의 gtm-container-import.json을 새 작업공간에 **병합**합니다. 기존 태그가 있다면 덮어쓰지 않습니다. 이 파일은 동의 후 발생하는 prom_analytics_ready 이벤트에 단일 Custom HTML 태그를 실행합니다. 그 태그가 사이트의 검증된 GA4 로더를 호출합니다. 기존 Google 태그/GA4 태그를 중복 발화시키지 않습니다.
5. 아래 명령으로 실제 두 ID를 사이트에 적용하고 사이트를 배포합니다. GTM 미리보기로 테스트한 뒤 제출 → 게시합니다. 가져오기 파일은 JSON 및 로컬 동작 검증을 거쳤지만 실제 GTM 계정의 가져오기 결과는 아직 검증되지 않았습니다.

    node scripts/configure-analytics.mjs --gtm GTM-실제ID --ga4 G-실제ID
    node scripts/build-seo.mjs
    node scripts/export-github-pages.mjs

6. GA4 관리자에서 generate_lead를 주요 이벤트로 등록합니다. 페이지 이름·기기·국가·사용자 획득/트래픽 획득 보고서로 방문 현황을 봅니다. 세부 작업 분석용 맞춤 측정기준은 이벤트 범위 project_id, article_id, publisher, platform, content_group을 등록합니다.

GTM의 Custom HTML에는 비밀 키나 측정 ID가 들어 있지 않습니다. 공개 ID는 data/analytics.json → public/assets/analytics-config.js 한 곳에서 관리합니다. 태그 관리자 없이 별도 gtag 스니펫을 HTML에 추가하지 마세요. noscript iframe은 방문 통계 동의를 우회하지 않도록 넣지 않았습니다.

## 수집 범위

| 이벤트 | 발생 시점 | 추가 정보 |
|---|---|---|
| page_view | 동의 후 공개 페이지마다 1회 | 고정된 페이지 URL, 분류, 안전한 제목, 유입 도메인 |
| view_project | 작업 상세 페이지 링크 선택 | project_id |
| open_press_article | NEWS의 기사 원문 링크 선택 | article_id, publisher |
| open_social_link | Instagram·YouTube 외부 링크 선택 | platform |
| play_project_video | 작업 상세의 영상/게시물 열기 | platform, video_id |
| generate_lead | Supabase에서 문의 접수를 확인한 뒤 | form_id=contact |

영상 이벤트는 재생 완료/시청 시간을 뜻하지 않습니다. 임베드를 여는 행동입니다. 이름·이메일·문의 내용·검색 입력·로그인 정보·복구 토큰·원문 전체 URL·사용자 ID는 이벤트에 넣지 않습니다. 관리자·404·리다이렉트·다른 GitHub 저장소·로컬 환경은 추적하지 않습니다. 광고 개인화는 꺼져 있습니다. URL 쿼리/해시와 유입 URL의 경로도 제거하므로 UTM 캠페인 세부 정보는 수집하지 않습니다.

사용자가 방문 통계를 허용한 이후에만 GTM과 GA4를 로드합니다. 거부하거나 브라우저 추적 거부/GPC 설정이 있으면 로드하지 않습니다. 허용 여부는 이 사이트용 localStorage 키에 보관하고 우측 하단 통계 설정에서 변경할 수 있습니다. 차단 확장/거부한 방문자는 집계되지 않으므로 전체 접속 기록과 동일하지 않습니다. GA4는 방문자의 실명이나 이메일을 자동으로 알려주는 서비스가 아닙니다.

## 검증과 관리

- node scripts/qa-analytics.mjs: 실제 Chromium 기반으로 네트워크를 모의 처리해 미설정·동의·거부·회수·중복 방지·민감 정보 제외·문의 성공/실패·관리자/다른 사이트 제외를 검증합니다. 이 테스트는 GA4 서버 수신의 증거가 아닙니다.
- 실제 ID 설정/배포 후: Tag Assistant 미리보기에서 동의 전 요청 없음, 동의 후 단일 컨테이너 실행을 확인합니다. GA4 실시간에서 페이지 조회와 테스트 문의의 generate_lead 수신을 확인합니다. 수신 전에는 연결 완료로 표시하지 않습니다.
- 브라우저 콘솔의 window.PROM_ANALYTICS.getStatus()는 로컬 로더 상태만 보여줍니다. google_tag_queued는 서버 수신이나 컨테이너 게시 성공을 보증하지 않습니다.
- 테스트 문의는 테스트 표시로 남기고 관리자에서 구분합니다. 실사용자의 문의 정보는 분석 도구에 전달하지 않습니다.

공식 문서: https://support.google.com/tagmanager/answer/9442095 · https://developers.google.com/tag-platform/tag-manager/datalayer · https://developers.google.com/analytics/devguides/collection/ga4/reference/config · https://support.google.com/analytics/answer/6366371
