(()=>{'use strict';
if(window.PROM_ANALYTICS)return;
const config=window.PROM_ANALYTICS_CONFIG||{},path=location.pathname;
const pages={'':'Home','index.html':'Home','studio.html':'Studio','work.html':'Work','news.html':'News','z12.html':'Z12','contact.html':'Contact','work/a2o-may.html':'Project','work/naevis.html':'Project','work/pan-chongchong.html':'Project','work/mcnd.html':'Project','work/enderble.html':'Project','work/project.html':'Project','work/vfx.html':'Work','kart/':'Game','kart/index.html':'Game'};
const inScope=location.origin===config.siteOrigin&&path.startsWith(config.basePath||'/prom-record/');
const route=inScope?path.slice(config.basePath.length):null,group=pages[route];
const configured=/^GTM-[A-Z0-9]{4,20}$/.test(config.gtmContainerId||'');
const ga4Configured=/^G-[A-Z0-9]{4,20}$/.test(config.ga4MeasurementId||'');
const blocked=navigator.globalPrivacyControl===true||navigator.doNotTrack==='1'||new URLSearchParams(location.search).get('cms_preview')==='1';
let state=!inScope||!group?'excluded':!configured?'waiting_for_ids':blocked?'browser_opt_out':'awaiting_consent';
let active=false,containerQueued=false,googleQueued=false,gtmLoaded=false,googleTagLoaded=false,queue=[],banner,gtmTagConfirmed=false,ga4Controller='none';
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
 if(googleQueued)window.gtag('event',name,{...safe,send_to:config.ga4MeasurementId});else if(ga4Configured&&queue.length<50)queue.push([name,safe]);
}
function connectGoogleTag(){
 if(!active||!ga4Configured||googleQueued)return;
 googleQueued=true;ga4Controller='head';state='google_tag_queued';
 window['ga-disable-'+config.ga4MeasurementId]=false;
 window.gtag('config',config.ga4MeasurementId,{...context,send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false,cookie_path:config.basePath});
 for(const [name,params]of queue)window.gtag('event',name,{...params,send_to:config.ga4MeasurementId});queue=[];
 if(window.PROM_GOOGLE_TAG_LOADED){googleTagLoaded=true;state='google_tag_loaded'}
}
// The previously published GTM custom tag may still call this API. Direct head installation owns GA4 now.
function activateFromGtm(){return false;}
window.addEventListener('prom-google-tag-loaded',()=>{googleTagLoaded=true;if(active)state='google_tag_loaded'});
window.addEventListener('prom-google-tag-failed',()=>{if(active)state='google_tag_load_failed'});
function loadContainer(){
 if(containerQueued||!inScope||!group||!configured||blocked)return;
 containerQueued=true;window.dataLayer=window.dataLayer||[];
 push('consent','default',{analytics_storage:'denied',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
 window.dataLayer.push({'gtm.start':Date.now(),event:'gtm.js',prom_content_group:group});
 const script=document.createElement('script');script.async=true;script.src='https://www.googletagmanager.com/gtm.js?id='+encodeURIComponent(config.gtmContainerId);script.onload=()=>{gtmLoaded=true;if(active&&!googleQueued)state=ga4Configured?'gtm_loaded_waiting_for_ga4_tag':'gtm_loaded_waiting_for_ga4'};script.onerror=()=>{if(active&&!googleQueued)state='gtm_load_failed'};document.head.append(script);
}
function activate(){
 if(active||!inScope||!group||!configured||blocked)return;
 active=true;state=gtmLoaded?(ga4Configured?'gtm_loaded_waiting_for_ga4_tag':'gtm_loaded_waiting_for_ga4'):'gtm_loading';
 loadContainer();
 push('consent','update',{analytics_storage:'granted',ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied'});
 track('page_view');
 connectGoogleTag();
}
function setConsent(value){
 if(!inScope||!group||!configured||blocked)return;
 if(value==='granted'){saveConsent('granted');banner?.remove();activate()}
 else if(value==='denied'){
  saveConsent('denied');banner?.remove();
  if(active){push('consent','update',{analytics_storage:'denied'});window['ga-disable-'+config.ga4MeasurementId]=true;active=false;queue=[];location.reload()}
  else state='consent_denied';
 }
}
function showConsent(){
 if(banner?.isConnected)return;
 banner=document.createElement('section');banner.className='prom-analytics-consent';banner.setAttribute('aria-label','방문 통계 설정');
 const copy=document.createElement('p');copy.textContent='방문 통계를 허용하시겠어요? 허용하면 페이지 이용과 문의 접수 건수를 집계합니다. 문의 내용은 보내지 않습니다.';
 const actions=document.createElement('div');
 for(const [label,value]of [['거부','denied'],['허용','granted']]){const button=document.createElement('button');button.type='button';button.textContent=label;button.dataset.analyticsConsent=value;button.onclick=()=>setConsent(value);actions.append(button)}
 banner.append(copy,actions);document.body.append(banner);
}
window.PROM_ANALYTICS=Object.freeze({track,setConsent,connectGoogleTag,activateFromGtm,getStatus:()=>({state,configured,gtmConfigured:configured,ga4Configured,inScope:!!(inScope&&group),active,ga4Controller,gtmTagConfirmed,gtmLoaded,googleTagLoaded:!!(googleTagLoaded||window.PROM_GOOGLE_TAG_LOADED),googleTagQueued:googleQueued,installation:'direct_head',legacyGtmBridgeDisabled:true})});
if(!inScope||!group||!configured||blocked)return;
loadContainer();
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
