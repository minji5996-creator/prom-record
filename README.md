# PROM RECORD

공식 사이트: [PROM RECORD](https://minji5996-creator.github.io/prom-record/)

## 수정 및 배포

- 개별 HTML과 브라우저용 소스는 `site/`에 있습니다.
- `main`에 push하면 GitHub Actions가 파일을 점검하고 GitHub Pages로 자동 배포합니다.
- 수동 재배포: Actions → Publish PROM RECORD → Run workflow.
- 문의는 기존 Supabase 프로젝트에 저장됩니다. 관리자: [문의 관리](https://minji5996-creator.github.io/prom-record/admin/inquiries.html). 비밀번호 및 관리자 초기 설정 링크는 저장소에 포함하지 않습니다.
- 이미지·영상은 사용자 제공 Instagram 게시물 및 PR WORLD STUDIO 공개 자료를 사용합니다. 동영상은 공식 임베드와 원문 링크로 연결합니다.
- 공개 설정은 `site/assets/contact-config.js`의 Supabase URL 및 publishable key만 포함합니다. 관리자 조회는 데이터베이스 RLS와 로그인으로 제한됩니다.

`node scripts/check-site.mjs`로 정적 파일 연결을 확인할 수 있습니다.

## 방문 통계

GA4·GTM 설정과 가져오기 파일은 [analytics/README.md](analytics/README.md)를 확인하세요. 방문 동의 후 GTM과 GA4를 로드합니다. GA4는 사이트에서 직접 시작하며 개인정보가 있는 폼과 검색 화면을 자동 관찰하지 않습니다.
