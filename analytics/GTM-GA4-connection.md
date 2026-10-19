# GTM → GA4 연결

대상 컨테이너: GTM-WSNV4HSJ
GA4 측정 ID: G-FF9HTVGCBX
사이트: https://minji5996-creator.github.io/prom-record/

## 현재 상태

사이트 연결 코드와 가져오기 JSON 준비. Google 컨테이너의 수정·게시 권한을 가진 도구가 현재 세션에 없어, Google 쪽 가져오기·게시는 수행하지 못했습니다. 기존 GA4 수집은 유지됩니다. GTM에서 관리하는 연결은 게시 후 실제 동작 확인까지 남아 있습니다.

## 관리자에서 한 번 수행할 작업

1. https://tagmanager.google.com/ 에서 GTM-WSNV4HSJ을 선택합니다.
2. 관리 → 컨테이너 가져오기 → 파일 선택에서 이 폴더의 gtm-container-import.json을 선택합니다. 간단한 복사본은 D:/NEURA/outputs/GTM-WSNV4HSJ-GA4-connect.json입니다.
3. 작업공간을 선택하고 **병합**합니다. 덮어쓰기는 기존 설정을 삭제하므로 사용하지 않습니다. 기존 태그와 트리거는 보존합니다.
4. 가져오기 미리보기에서 새 태그 1개와 트리거 1개를 확인합니다. 미리보기에서 사이트를 연결하고 방문 통계를 허용한 뒤 태그 실행을 확인합니다.
5. 제출 → 게시합니다. 버전 이름은 PROM RECORD GA4 connection 등으로 지정합니다.

태그는 Custom HTML 1개이며, prom_analytics_ready 이벤트에서 window.PROM_ANALYTICS.activateFromGtm('GTM-WSNV4HSJ','G-FF9HTVGCBX')를 호출합니다. 기존 동의·민감 정보 제외 처리를 그대로 적용합니다. 별도의 GA4 네이티브 태그를 추가하면 중복 측정이 생길 수 있으므로 이 파일과 동시에 추가하지 않습니다.

## 게시 후 확인

사이트를 새로 열고 방문 통계를 허용합니다. 콘솔에서 window.PROM_ANALYTICS.getStatus()를 확인합니다.

- gtmTagConfirmed: true — 정확한 컨테이너/측정 ID의 GTM 연결 태그 실행 확인.
- ga4Controller: gtm — 해당 페이지에서 GTM이 GA4를 시작함.
- ga4Controller: site_fallback — GTM 연결 태그가 아직 없거나 1.5초보다 늦어 기존 직접 수집을 유지함. 늦은 GTM 태그가 확인되어도 조회를 중복 전송하지 않음.
- googleTagLoaded: true — GA4 라이브러리 로드 확인. GA4 보고서 처리/집계 완료의 증거는 아님.

scripts/qa-analytics.mjs는 가져오기 파일의 실제 태그 코드를 모의 컨테이너에서 실행하여 GTM 우선·미게시·지연/중복 콜백을 검증합니다. 실제 Google 관리자 가져오기 성공은 검증하지 않았습니다.

공식 가져오기 안내: https://support.google.com/tagmanager/answer/6106997?hl=ko
