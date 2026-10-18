(()=>{'use strict';
if(window.PROM_ANALYTICS)return;
const config=window.PROM_ANALYTICS_CONFIG||{},path=location.pathname;
const pages={'':'Home','index.html':'Home','studio.html':'Studio','work.html':'Work','news.html':'News','z12.html':'Z12','contact.html':'Contact','work/a2o-may.html':'Project','work/naevis.html':'Project','work/pan-chongchong.html':'Project','work/mcnd.html':'Project','work/enderble.html':'Project','work/vfx.html':'Work','kart/':'Game','kart/index.html':'Game'};
const inScope=location.origin===config.siteOrigin&&path.startsWith(config.basePath||'/prom-record/');
const route=inScope?path.slice(config.basePath.length):null,group=pages[route];
const configured=/^GTM-[A-Z0-9]{4,20}$/.test(config.gtmContainerId||'');
const ga4Configured=/^G-[A-Z0-9]{4,20}$/.test(config.ga4MeasurementId||'');
const blocked=navigator.globalPrivacyControl===true||navigator.doNotTrack==='1';
let state=!inScope||!group?'excluded':!configured?'waiting_for_ids':blocked?'browser_opt_out':'awaiting_consent';
let active=false,googleQueued=false,gtmLoaded=false,googleTagLoaded=false,queue=[],banner,bridge,fallbackTimer,gtmTagConfirmed=false,ga4Controller='none';
const consentKey='prom-record.analytics-consent.v1';
function readConsent(){try{return localStorage.getItem(consentKey)}catch{return null}}
function saveConsent(value){try{localStorage.setItem(consentKey,value)}catch{}}
function referrer(){try{return new URL(document.referrer).origin+'/'}catch{return ''}}
const context={page_location:inScope?config.siteOrigin+config.basePath+(route===''?'index.html':route):'',page_referrer:referrer(),page_title:group?'PROM RECORD / '+group:'',content_group:group||''};
const allowed=new Set(['page_view','view_project','open_press_article','open_social_link','play_project_video','generate_lead']);
const keys=['project_id','article_id','publisher','platform','video_id','form_id'];
function push(){window.dataLayer=window.dataLayer||[];window.dataLayer.push(arguments)}
function track(name,params={}){
 if(!active||!allowed.has(name))return;
 const safe={...context};
 for(const key of keys)if(typeof params[key]==='string'&&/^[a-zA-Z0-9_-]{1,100}$/.test(params[key]))safe[key]=params[key];
 const metadata={event:'prom_'+name,prom_event_name:name};
 for(const key of keys)metadata['prom_'+key]=safe[key]||'';
 window.dataLayer.push(metadata);
 if(bridge)bridge.track(name,safe);else if(ga4Configured&&queue.length<50)queue.push([name,safe]);
}
function connectGoogleTag(source='site_fallback'){
 if(!active||!ga4Configured||googleQueued)return;
 googleQueued=true;ga4Controller=source==='gtm'?'gtm':'site_fallback';state='google_tag_queued';
 const frame=document.createElement('iframe');frame.style.cssText='position:fixed;left:-10000px;top:0;width:1px;height:1px;border:0;pointer-events:none;opacity:0';frame.tabIndex=-1;frame.setAttribute('aria-hidden','true');frame.title='PROM RECORD 방문 통계';frame.dataset.ga4Frame='';frame.referrerPolicy='origin';
 const revision=new URL(document.querySelector('script[src*="assets/analytics.js"]')?.src||location.href).searchParams.get('v')||'1';
 frame.src=config.siteOrigin+config.basePath+'assets/analytics-frame.html?v='+encodeURIComponent(revision);
 frame.onload=()=>{
  if(!active)return;
  const api=frame.contentWindow?.PROM_GA4_BRIDGE;
  if(!api){state='google_tag_load_failed';return}
  const ok=api.initialize(config,context,phase=>{googleTagLoaded=phase==='loaded';state=googleTagLoaded?'google_tag_loaded':'google_tag_load_failed'});
  if(!ok){state='google_tag_load_failed';return}
  bridge=api;for(const [name,params]of queue)bridge.track(name,params);queue=[];
 };
 frame.onerror=()=>{state='google_tag_load_failed'};document.body.append(frame);
}
function activateFromGtm(containerId,measurementId){
 if(!active||!ga4Configured||containerId!==config.gtmContainerId||measurementId!==config.ga4MeasurementId)return false;
 const first=!gtmTagConfirmed;gtmTagConfirmed=true;clearTimeout(fallbackTimer);
 connectGoogleTag('gtm');
 if(first)window.dataLayer.push({event:'prom_gtm_ga4_connected',prom_gtm_container_id:containerId,prom_ga4_measurement_id:measurementId});
 return true;
}
function activate(){
 if(active||!inScope||!group||!configured||blocked)return;
 active=true;state='gtm_loading';window.dataLayer=window.dataLayer||[];
 push('consent','default',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
 window.dataLayer.push({'gtm.start':Date.now(),event:'gtm.js',prom_content_group:group});
 track('page_view');
 window.dataLayer.push({event:'prom_analytics_ready'});
 const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtm.js?id='+encodeURIComponent(config.gtmContainerId);script.onload=()=>{gtmLoaded=true;if(active&&!googleQueued)state=ga4Configured?'gtm_loaded_waiting_for_ga4_tag':'gtm_loaded_waiting_for_ga4'};script.onerror=()=>{if(!googleQueued)state='gtm_load_failed'};document.head.append(script);
 if(ga4Configured)fallbackTimer=setTimeout(()=>connectGoogleTag('site_fallback'),1500);
}
function setConsent(value){
 if(!inScope||!group||!configured||blocked)return;
 if(value==='granted'){saveConsent('granted');banner?.remove();activate()}
 else if(value==='denied'){
  saveConsent('denied');banner?.remove();clearTimeout(fallbackTimer);
  if(active){push('consent','update',{analytics_storage:'denied'});bridge?.revoke();active=false;queue=[];location.reload()}
  else state='consent_denied';
 }
}
function showConsent(){
 if(banner?.isConnected)return;
 banner=document.createElement('section');banner.className='prom-analytics-consent';banner.setAttribute('aria-label','방문 통계 설정');
 const copy=document.createElement('p');copy.textContent='방문 통계를 허용하시겠어요? 통계 도구를 불러와 페이지 이용과 문의 접수 건수를 집계합니다. 문의 내용은 보내지 않습니다.';
 const actions=document.createElement('div');
 for(const [label,value]of [['거부','denied'],['허용','granted']]){const button=document.createElement('button');button.type='button';button.textContent=label;button.dataset.analyticsConsent=value;button.onclick=()=>setConsent(value);actions.append(button)}
 banner.append(copy,actions);document.body.append(banner);
}
window.PROM_ANALYTICS=Object.freeze({track,setConsent,connectGoogleTag,activateFromGtm,getStatus:()=>({state,configured,gtmConfigured:configured,ga4Configured,inScope:!!(inScope&&group),active,ga4Controller,gtmTagConfirmed,gtmLoaded,googleTagLoaded,googleTagQueued:googleQueued})});
if(!inScope||!group||!configured||blocked)return;
function ready(){
 const button=document.createElement('button');button.type='button';button.className='prom-analytics-settings';button.textContent='통계 설정';button.onclick=showConsent;document.body.append(button);
 const consent=readConsent();if(consent==='granted')activate();else if(consent==='denied')state='consent_denied';else showConsent();
 document.addEventListener('click',event=>{
  const element=event.target instanceof Element?event.target:null;if(!element)return;
  const video=element.closest('[data-project-video],[data-project-instagram]');
  if(video){track('play_project_video',{platform:video.dataset.projectVideo?'youtube':'instagram',video_id:video.dataset.projectVideo||video.dataset.projectInstagram});return}
  const link=element.closest('a[href]');if(!link)return;
  let url;try{url=new URL(link.href)}catch{return}
  const article=link.closest('.catalogItem');
  if(article&&url.origin!==location.origin){track('open_press_article',{article_id:article.id,publisher:article.dataset.publisher});return}
  const detail=/\/work\/([a-z0-9-]+)\.html$/.exec(url.pathname);
  if(url.origin===location.origin&&detail){track('view_project',{project_id:detail[1]});return}
  const platform=/^(www\.)?instagram\.com$/.test(url.hostname)?'instagram':/^(www\.)?(youtube\.com|youtu\.be)$/.test(url.hostname)?'youtube':null;
  if(platform)track('open_social_link',{platform});
 });
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready,{once:true});else ready();
})();
