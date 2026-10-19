# PROM RECORD — 개별 HTML 페이지

## 페이지
- index.html: 메인 / 대표 작품 선택
- studio.html: 회사 소개
- work.html: 외주 프로젝트 + 작품 분류 / Grid·Index 보기
- news.html: 뉴스 검색 / 분류 / 상세 기록
- z12.html: 12별자리 멤버 / 35개 콘텐츠 아카이브 / 3D 하트
- contact.html: 프로젝트 문의
- work/a2o-may.html: A2O MAY 캐릭터 외주
- work/vfx.html: VFX 외주 (세부 내용 확인 대기)

## 편집
각 HTML을 직접 수정하면 됩니다. 공통 파일은 assets/studio.css, assets/pages.css, assets/pages.js에 있습니다. Z12 스타일은 assets/z12.css, 뉴스 스타일은 assets/news.css입니다.
이미지는 media/, 이미지 뷰어의 작품 데이터는 assets/site-data.js에 있습니다. 작품 본문과 데이터 수정 시 해당 HTML과 site-data.js를 함께 수정하세요.

## 실행 / 전달
폴더 구조를 유지해서 복사하거나 정적 웹 서버에 올리면 됩니다. React 개발 서버 없이 정적 호스팅이 가능합니다. 파일을 직접 여는 경우 기본 콘텐츠와 필터는 사용할 수 있으나, Z12 3D 모듈은 브라우저 보안 정책상 HTTP 서버에서 확인해야 합니다.
현재 개발 서버: http://localhost:5173/index.html
첫 주소 /는 index.html로 연결됩니다. 이전 React 소스와 /z12, /news, /kart 경로는 보존되어 있지만 새 메뉴는 개별 HTML을 사용합니다.

## 확인
8개 HTML과 160개 로컬 참조 검증. 대표 이미지 선택, Work 분류·목록 전환, 뉴스 검색, Z12 멤버 선택·필터·확대·닫기 DOM 기능 검증 완료. 실제 브라우저 화면과 WebGL 렌더링 검증은 미실시.

## 주의
scripts/export-html.mjs는 최초 변환용입니다. 직접 수정한 HTML에 재실행하면 내용을 덮어쓸 수 있습니다. 이후 편집은 HTML 파일에서 진행하세요. VFX 작품명·담당 범위는 원본 확인 전까지 임의 작성하지 않았습니다.

## 3D 연출 업데이트
메인과 Work의 입체 레코드·작품 패널은 assets/stage3d.js와 assets/stage3d.css에서 실행합니다. 데스크톱·모바일 실제 WebGL 렌더링, 모션 정지, 이미지 전환과 재시작을 검증했습니다. Z12의 기존 3D 하트도 유지됩니다.


## Chrome Study 01
현재 메인과 Work는 assets/stage3d-art.js / stage3d-art.css를 사용합니다. 사이트 전용 생성 아트워크는 assets/art/prom-chrome-bloom-v1.png이며, 원본 작품 사진과 구분된 브랜드 연출 이미지입니다.


## 문의 기능
contact.html: 이름·이메일·문의 내용을 입력합니다. admin/inquiries.html: 관리자 로그인 후 문의 목록을 확인합니다. Supabase prom-record-contact(서울) 프로젝트 연결 완료. 실제 접수·관리자 조회·상태 변경·비로그인 조회 차단 검증 완료. 관리자 이메일은 promrecord1@gmail.com입니다. 초기 비밀번호 설정 링크는 공개 ZIP에 포함하지 않으며 프로젝트 outputs/PROM-관리자-시작.md에 보관합니다. 설정은 assets/contact-config.js이며 Secret/service_role 키는 넣지 않습니다. 설정 안내는 프로젝트 docs/supabase-contact.md에 있습니다.


## 검색용 구조화 데이터
회사 소개·뉴스·작업물과 각 공개 페이지에 정적 JSON-LD, 대표 URL, 개별 제목·설명을 적용했습니다. sitemap.xml과 robots.txt 포함. 관리자와 자료 준비 중인 VFX 페이지는 사이트맵에서 제외합니다. 설정은 data/site-seo.json, 생성은 scripts/build-seo.mjs, 운영 안내는 docs/seo-structured-data.md입니다. 실제 배포 버전과 공개 접근 검증은 프로젝트 outputs/public-deployment-verification.json에서 확인합니다.
