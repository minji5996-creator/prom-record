# PROM RECORD

공식 사이트: [PROM RECORD](https://minji5996-creator.github.io/prom-record/)

## 수정 및 배포

- 개별 HTML과 브라우저용 소스는 `site/`에 있습니다.
- `main`에는 검토한 소스를 보관합니다. 현재 공개 배포는 gh-pages 브랜치 루트에서 진행합니다.
- 배포 절차: site/ 검증 → 해당 파일 트리를 gh-pages 루트로 push → Pages 빌드 완료와 공개 사이트 확인. 기존 Actions 워크플로는 비활성화했습니다.
- 문의는 기존 Supabase 프로젝트에 저장됩니다. 관리자: [문의 관리](https://minji5996-creator.github.io/prom-record/admin/inquiries.html). 비밀번호 및 관리자 초기 설정 링크는 저장소에 포함하지 않습니다.
- 이미지·영상은 사용자 제공 Instagram 게시물 및 PR WORLD STUDIO 공개 자료를 사용합니다. 동영상은 공식 임베드와 원문 링크로 연결합니다.
- 공개 설정은 `site/assets/contact-config.js`의 Supabase URL 및 publishable key만 포함합니다. 관리자 조회는 데이터베이스 RLS와 로그인으로 제한됩니다.

`node scripts/check-site.mjs`로 정적 파일 연결을 확인할 수 있습니다.

## 방문 통계

GA4·GTM 설정과 가져오기 파일은 [analytics/README.md](analytics/README.md)를 확인하세요. GTM 컨테이너는 공개 페이지를 열면 로드하고, GA4 수집은 방문 동의 후 시작합니다. GTM 연결 파일을 게시하면 GTM이 GA4를 우선 실행하며, 게시 전까지 기존 수집을 유지합니다.
