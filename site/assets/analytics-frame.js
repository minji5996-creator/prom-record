(()=>{'use strict';
// Keep Google's automatic DOM/search observers in this empty same-origin document.
// Only the parent site's explicitly approved, sanitized events enter this frame.
if(parent===window)return;
let initialized=false,id='';
const events=new Set(['page_view','view_project','open_press_article','open_social_link','play_project_video','generate_lead']);
function gtag(){window.dataLayer=window.dataLayer||[];window.dataLayer.push(arguments)}
function safeContext(c){try{const u=new URL(c.page_location);return u.origin==='https://minji5996-creator.github.io'&&u.pathname.startsWith('/prom-record/')&&!u.search&&!u.hash}catch{return false}}
window.PROM_GA4_BRIDGE=Object.freeze({
 initialize(config,context,notify){
  if(initialized||!/^G-[A-Z0-9]{4,20}$/.test(config.ga4MeasurementId||'')||config.siteOrigin!==location.origin||!safeContext(context))return false;
  initialized=true;id=config.ga4MeasurementId;
  gtag('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
  gtag('js',new Date());gtag('config',id,{...context,send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false,cookie_path:'/prom-record/'});
  const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtag/js?id='+encodeURIComponent(id);script.onload=()=>notify('loaded');script.onerror=()=>notify('failed');document.head.append(script);return true;
 },
 track(name,params){if(initialized&&events.has(name)&&safeContext(params))gtag('event',name,{...params,send_to:id})},
 revoke(){if(initialized)gtag('consent','update',{analytics_storage:'denied'})}
});
})();
