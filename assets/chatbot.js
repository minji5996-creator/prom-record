(() => {
 'use strict';
 if(document.getElementById('prom-chatbot'))return;
 const assetURL=new URL('.',document.currentScript.src),siteURL=new URL('../',assetURL);
 const revision=new URL(document.currentScript.src).search;
 const root=document.createElement('aside');root.id='prom-chatbot';root.setAttribute('aria-label','프롬레코드 안내');document.body.append(root);
 const el=(tag,text,cls)=>{const x=document.createElement(tag);if(text)x.textContent=text;if(cls)x.className=cls;return x};
 const button=(label,fn,cls)=>{const b=el('button',label,cls);b.type='button';b.onclick=fn;return b};
 const launcher=button('안내 / 문의',()=>toggle(),'pr-chat-launcher');launcher.setAttribute('aria-expanded','false');launcher.setAttribute('aria-controls','pr-chat-panel');root.append(launcher);
 const panel=el('section',null,'pr-chat-panel');panel.id='pr-chat-panel';panel.hidden=true;panel.setAttribute('role','dialog');panel.setAttribute('aria-label','PROM RECORD 안내 챗봇');root.append(panel);
 const head=el('header',null,'pr-chat-head');const title=el('div');title.append(el('strong','PROM RECORD'),el('small','등록된 회사 안내 · 제작 문의'));
 const close=button('×',()=>toggle(false),'pr-chat-close');close.setAttribute('aria-label','대화창 닫기');head.append(title,close);
 const contextLabel=el('p',null,'pr-chat-context');const feed=el('div',null,'pr-chat-feed');feed.tabIndex=0;feed.setAttribute('aria-label','대화 내용');
 const announce=el('div',null,'pr-chat-sr');announce.setAttribute('role','status');
 const nav=el('nav',null,'pr-chat-nav');nav.setAttribute('aria-label','대화 이동');
 const back=button('이전으로',()=>goBack()),home=button('처음으로',()=>go(data.start,'처음으로')),reset=button('대화 초기화',()=>{generation++;state=initial();state.open=true;try{sessionStorage.removeItem(data.storageKey)}catch{}render();announce.textContent='대화와 저장된 선택을 초기화했습니다.'});nav.append(back,home,reset);
 const search=el('form',null,'pr-chat-search');const query=el('input');query.type='text';query.maxLength=200;query.placeholder='가격, 제작 기간 등을 입력';query.setAttribute('aria-label','안내 검색');query.autocomplete='off';const send=el('button','보내기');send.type='submit';search.append(query,send);
 panel.append(head,contextLabel,feed,announce,nav,search);
 let data,state,generation=0,submissionBusy=false;
 function initial(){return{version:data.version,current:data.start,previous:[],context:{field:'',conditions:{}},messages:[{node:data.start}],open:false}}
 function save(){try{sessionStorage.setItem(data.storageKey,JSON.stringify(state))}catch{}}
 function restore(){try{const saved=JSON.parse(sessionStorage.getItem(data.storageKey));if(saved?.version!==data.version||!data.nodes[saved.current]||!Array.isArray(saved.previous)||!Array.isArray(saved.messages))return initial();const cleanContext=c=>({field:typeof c?.field==='string'?c.field.slice(0,80):'',conditions:{schedule:typeof c?.conditions?.schedule==='string'?c.conditions.schedule.slice(0,120):''}});return{version:data.version,current:saved.current,previous:saved.previous.filter(p=>data.nodes[p.node]).slice(-30).map(p=>({node:p.node,context:cleanContext(p.context)})),context:cleanContext(saved.context),messages:saved.messages.filter(m=>data.nodes[m.node]||m.kind==='fallback'||m.kind==='matches').slice(-40).map(m=>({node:data.nodes[m.node]?m.node:undefined,kind:m.kind,label:typeof m.label==='string'?m.label.slice(0,200):undefined,matches:Array.isArray(m.matches)?m.matches.filter(id=>data.nodes[id]):undefined})),open:saved.open===true}}catch{return initial()}}
 function toggle(force){if(!data){panel.hidden=false;launcher.setAttribute('aria-expanded','true');return}state.open=force??!state.open;panel.hidden=!state.open;launcher.setAttribute('aria-expanded',String(state.open));save();if(state.open)close.focus();else launcher.focus()}
 panel.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();toggle(false)}});
 function pushMessage(m){state.messages.push(m);state.messages=state.messages.slice(-40)}
 function go(id,label,change){if(!data.nodes[id])return;generation++;state.previous.push({node:state.current,context:structuredClone(state.context)});state.previous=state.previous.slice(-30);state.current=id;if(change?.field)state.context.field=String(change.field).slice(0,80);if(change?.conditions?.schedule)state.context.conditions.schedule=String(change.conditions.schedule).slice(0,120);pushMessage({node:id,label});save();render();announce.textContent=data.nodes[id].answer}
 function goBack(){const prev=state.previous.pop();if(!prev)return;generation++;state.current=prev.node;state.context=prev.context;pushMessage({node:prev.node,label:'이전으로'});save();render();announce.textContent=data.nodes[state.current].answer}
 function safeURL(value){try{const u=new URL(value,siteURL);return u.origin===siteURL.origin&&u.pathname.startsWith(siteURL.pathname)&&/^https?:$/.test(u.protocol)?u.href:null}catch{return null}}
 function link(item){const a=el('a',item.label||item.title,'pr-chat-choice');const url=safeURL(item.href);if(url)a.href=url;return a}
 function choices(items,parent){const list=el('div',null,'pr-chat-choices');for(const item of items||[])list.append(item.href?link(item):button(item.label,()=>go(item.target,item.label,item.set),'pr-chat-choice'));parent.append(list)}
 function cards(items,parent){const list=el('div',null,'pr-chat-cards');for(const item of items||[]){const a=el('a',null,'pr-chat-card');const href=safeURL(item.href);if(href)a.href=href;const src=item.image&&safeURL(item.image);if(src){const img=el('img');img.src=src;img.alt=item.title;img.loading='lazy';img.width=300;img.height=160;img.addEventListener('error',()=>img.replaceWith(el('div','이미지 입력 필요','pr-chat-noimage')),{once:true});a.append(img)}else a.append(el('div','이미지 입력 필요','pr-chat-noimage'));a.append(el('strong',item.title),el('span',item.description),el('small','작업 자세히 보기 ↗'));list.append(a)}parent.append(list)}
 function render(){
  panel.hidden=!state.open;launcher.setAttribute('aria-expanded',String(state.open));feed.replaceChildren();
  contextLabel.textContent=[state.context.field,state.context.conditions.schedule].filter(Boolean).join(' · ')||'원하는 안내를 선택해주세요';
  for(const [i,m]of state.messages.entries()){
   if(m.label)feed.append(el('p',m.label,'pr-chat-user'));
   const bubble=el('div',null,'pr-chat-bubble');const node=data.nodes[m.node];
   bubble.append(el('p',node?.answer||(m.kind==='matches'?'여러 안내가 일치해요. 원하는 항목을 선택해주세요.':data.fallback)));
   if(node?.cards)cards(node.cards,bubble);
   if(i===state.messages.length-1){if(node?.form==='inquiry')inquiry(bubble);if(m.kind==='matches')choices(m.matches.map(id=>({label:data.nodes[id].label,target:id})),bubble);else choices(node?.buttons||data.nodes[data.start].buttons,bubble)}
   feed.append(bubble);
  }
  back.disabled=!state.previous.length;requestAnimationFrame(()=>{const last=feed.lastElementChild;if(last)feed.scrollTop=Math.max(0,feed.scrollTop+last.getBoundingClientRect().top-feed.getBoundingClientRect().top-45)});
 }
 const normalize=s=>s.normalize('NFKC').toLowerCase().replace(/\s+/g,'');
 search.onsubmit=e=>{e.preventDefault();if(!data)return;const raw=query.value.trim();if(!raw)return;query.value='';const q=normalize(raw);const matches=Object.entries(data.nodes).filter(([,node])=>(node.keywords||[]).some(k=>q.includes(normalize(k)))).map(([id])=>id);if(matches.length===1){go(matches[0],data.nodes[matches[0]].label);return}generation++;pushMessage({kind:matches.length?'matches':'fallback',matches});save();render();announce.textContent=matches.length?'안내 항목을 선택해주세요.':data.fallback;};
 function inquiry(parent){
  const form=el('form',null,'pr-chat-inquiry');form.setAttribute('aria-label','챗봇 제작 문의');
  const input=(label,name,type,min,max)=>{const l=el('label',label);const x=el(type==='textarea'?'textarea':'input');x.name=name;if(type!=='textarea')x.type=type;x.required=true;if(min)x.minLength=min;if(max)x.maxLength=max;l.append(x);form.append(l);return x};
  const fieldLabel=el('label','제작 분야');const field=el('select');field.name='field';for(const val of ['',...data.nodes.fields.buttons.map(b=>b.set.field)]){const o=el('option',val||'미선택');o.value=val;field.append(o)}field.value=state.context.field;fieldLabel.append(field);form.append(fieldLabel);
  field.onchange=()=>{state.context.field=field.value;save();contextLabel.textContent=[state.context.field,state.context.conditions.schedule].filter(Boolean).join(' · ')};
  input('이름 / 회사명','full_name','text',2,80).autocomplete='name';input('이메일','email','email',null,254).autocomplete='email';
  const scheduleLabel=el('label','희망 일정 (선택)');const schedule=el('input');schedule.name='schedule';schedule.type='text';schedule.maxLength=120;schedule.value=state.context.conditions.schedule||'';scheduleLabel.append(schedule);form.append(scheduleLabel);schedule.onchange=()=>{state.context.conditions.schedule=schedule.value.trim();save();contextLabel.textContent=[state.context.field,state.context.conditions.schedule].filter(Boolean).join(' · ')};
  const content=input('문의 내용 (10자 이상)','message','textarea',10,4500);content.rows=4;
  const consent=el('label',null,'pr-chat-consent');const checkbox=el('input');checkbox.type='checkbox';checkbox.name='consent';checkbox.required=true;consent.append(checkbox,document.createTextNode('문의 답변을 위한 이름·이메일·문의 내용 수집 및 이용에 동의합니다.'));form.append(consent);
  const privacy=el('a','문의 페이지의 접수 안내 보기');privacy.href=new URL('contact.html#contact-form',siteURL).href;form.append(privacy);
  const trap=el('input');trap.name='website';trap.type='text';trap.tabIndex=-1;trap.autocomplete='off';trap.className='pr-chat-trap';trap.setAttribute('aria-hidden','true');form.append(trap);
  const status=el('p',null,'pr-chat-form-status');status.setAttribute('role','status');const submit=el('button','문의 보내기','pr-chat-submit');submit.type='submit';form.append(status,submit);parent.append(form);
  let requestId,signature;const currentGeneration=generation;
  form.onsubmit=async e=>{
   e.preventDefault();if(submissionBusy||!form.reportValidity()||trap.value)return;
   const fields=new FormData(form);const userMessage=String(fields.get('message')).trim();const name=String(fields.get('full_name')).trim();if(name.length<2||userMessage.length<10){status.textContent='이름 2자 이상, 문의 내용 10자 이상 입력해주세요.';return}
   const data={full_name:name,email:String(fields.get('email')).trim(),consent:checkbox.checked,message:'[챗봇 제작 문의]\n제작 분야: '+(field.value||'미선택')+'\n희망 일정: '+(schedule.value.trim()||'미정')+'\n\n'+userMessage};
   const nextSignature=JSON.stringify(data);if(signature!==nextSignature){signature=nextSignature;requestId=crypto.randomUUID()}
   submissionBusy=true;submit.disabled=true;submit.textContent='보내는 중…';status.textContent='';
   try{
    await import(new URL('contact-config.js',assetURL).href);
    const {submitInquiry}=await import(new URL('inquiry-client.js'+revision,assetURL).href);await submitInquiry(data,requestId);
    window.PROM_ANALYTICS?.track('generate_lead',{form_id:'chatbot'});
    if(generation===currentGeneration){form.reset();requestId=null;signature=null;status.textContent='문의가 접수되었습니다. 남겨주신 이메일로 답변드리겠습니다.';field.value=state.context.field;schedule.value=state.context.conditions.schedule||'';}
   }catch{if(generation===currentGeneration)status.textContent='문의를 보내지 못했습니다. 입력 내용은 유지됩니다. 다시 보내거나 문의 페이지를 이용해주세요.'}
   finally{submissionBusy=false;submit.disabled=false;submit.textContent='문의 보내기'}
  };
 }
 async function load(){try{
  const response=await fetch(new URL('chatbot-data.json'+revision,assetURL));if(!response.ok)throw new Error('Unable to load registered answers');data=await response.json();if(!data.nodes?.[data.start])throw new Error('Invalid chatbot data');state=restore();render();
 }catch{feed.replaceChildren(el('p','안내를 불러오지 못했습니다. 새로고침하거나 문의 페이지를 이용해주세요.'));const a=el('a','문의 페이지');a.href=new URL('contact.html',siteURL).href;feed.append(a);nav.hidden=true;search.hidden=true;launcher.onclick=()=>{panel.hidden=!panel.hidden;launcher.setAttribute('aria-expanded',String(!panel.hidden))};close.onclick=()=>{panel.hidden=true;launcher.setAttribute('aria-expanded','false');launcher.focus()}}}
 load();
})();
