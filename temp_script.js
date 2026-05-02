
const KB={nodes:[{phase:"pre_election",id:"PRE_ELIGIBILITY",title:"Step 1: Check Your Eligibility",description:"Before anything else, confirm you have the legal right to vote.",steps:["Confirm you meet the minimum age requirement (typically 18 years old)","Verify your citizenship or residency status qualifies you to vote","Check that you are not disqualified by any court order or legal restriction"],why_it_matters:"Voting is a fundamental civic right — but it has legal requirements. Knowing your eligibility protects you from wasted effort and ensures your vote counts.",timeline_marker:"Months before election",region_notes:{USA:"Age 18+. U.S. citizens only. Some states restore voting rights to former felons — check your state's rules.",UK:"Age 18+ (16+ in Scotland/Wales for some elections). British, Irish, or qualifying Commonwealth citizen.",India:"Age 18+. Indian citizen. Name must appear on Electoral Roll."},keywords:["eligible","eligibility","can i vote","qualify","age","citizen","right to vote"],next_step_id:"PRE_REGISTRATION"},{phase:"pre_election",id:"PRE_REGISTRATION",title:"Step 2: Register to Vote",description:"Registration puts your name on the official voter roll — without it, you cannot vote.",steps:["Locate your official voter registration portal (national or state/local authority website)","Complete the registration form with your legal name, address, and date of birth","Submit before the registration deadline — deadlines vary significantly by region"],why_it_matters:"You can be fully eligible but still unable to vote if you are not registered. Registration is the gateway — it is how the election authority knows you exist as a voter.",timeline_marker:"Weeks to months before election",region_notes:{USA:"Register at vote.gov or your state's election website. Deadlines vary — some states allow same-day registration.",UK:"Register at gov.uk/register-to-vote. Deadline is typically 12 working days before an election.",India:"Register via voters.eci.gov.in using Form 6. The ECI conducts annual summary revisions."},keywords:["register","registration","sign up","voter roll","electoral roll","enroll"],next_step_id:"PRE_VOTER_ID"},{phase:"pre_election",id:"PRE_VOTER_ID",title:"Step 3: Get Your Voter ID",description:"Many jurisdictions require you to bring identification to vote.",steps:["Find out what form of ID is accepted at polling stations in your region","If you lack the required ID, apply for a voter ID card through your electoral authority","Keep your voter registration confirmation — you may need it on Election Day"],why_it_matters:"Arriving without the right ID can mean you cannot vote, even if you are fully registered. Preparation on this step eliminates a very fixable problem.",timeline_marker:"Weeks before election",region_notes:{USA:"ID requirements vary by state — some require photo ID, others only need a signature match.",UK:"Photo ID required in Great Britain (since 2023). Accepted: passport, driving licence, or free Voter Authority Certificate.",India:"Voter ID card (EPIC) is primary. Also accepted: Aadhaar, passport, driving licence, PAN card."},keywords:["id","voter id","identification","document","what to bring","polling card"],next_step_id:"PRE_POLLING_STATION"},{phase:"pre_election",id:"PRE_POLLING_STATION",title:"Step 4: Find Your Polling Station",description:"You must vote at your assigned polling station — you cannot vote at a different one.",steps:["Look up your assigned polling station on your electoral authority's website","Note the station's address and opening/closing hours","Plan your route and check for accessibility if needed"],why_it_matters:"Showing up at the wrong polling station wastes your trip and may mean you miss the chance to vote. Knowing your station removes all uncertainty on Election Day.",timeline_marker:"Days before election",region_notes:{USA:"Use vote.gov or your state's lookup tool. Polling hours vary by state, typically 6am–8pm.",UK:"Polling cards are sent to your registered address. Stations typically open 7am–10pm.",India:"Check your Voter Information Slip or voters.eci.gov.in. Polling typically runs 7am–6pm."},keywords:["polling station","where to vote","polling place","booth","voting location"],next_step_id:"PRE_UNDERSTAND_BALLOT"},{phase:"pre_election",id:"PRE_UNDERSTAND_BALLOT",title:"Step 5: Understand Your Ballot",description:"Know who and what you will be voting for before you enter the polling booth.",steps:["Research the candidates and parties on your ballot","Understand the voting method used (first-past-the-post, ranked choice, etc.)","If there are referendums or propositions, read official summaries"],why_it_matters:"An informed vote is a powerful vote. Understanding your ballot before you arrive means you are not guessing under pressure in the booth.",timeline_marker:"Days to weeks before election",region_notes:{USA:"Presidential elections use Electoral College. Some states use ranked-choice voting. Sample ballots often available online.",UK:"First-Past-The-Post for general elections. In some devolved elections proportional representation is used.",India:"First-Past-The-Post. Voting on EVMs — candidates listed with party symbols."},keywords:["ballot","candidates","who to vote","parties","referendum","understand voting","how to vote"],next_step_id:"ED_ARRIVE"},{phase:"election_day",id:"ED_ARRIVE",title:"Step 6: Arrive at Your Polling Station",description:"Election Day has arrived. Here is what to do when you get there.",steps:["Bring your required ID and any voter registration confirmation","Arrive with enough time — queues can form, especially in the morning","If you are in the queue before closing time, you have the right to vote — do not leave"],why_it_matters:"Getting there prepared and on time is the difference between your vote counting and being left out.",timeline_marker:"Election Day — morning",region_notes:{USA:"If you are in line when polls close, you have the right to vote. Some states have long early voting periods.",UK:"Polls close at 10pm. Any voter in the queue at 10pm can vote. You do not need your polling card.",India:"Carry your Voter ID or any approved alternate ID. Queues can be very long in populous constituencies."},keywords:["election day","arrive","go to vote","when to go","polling day"],next_step_id:"ED_CHECK_IN"},{phase:"election_day",id:"ED_CHECK_IN",title:"Step 7: Check In at the Polling Station",description:"When you enter, polling staff will verify your identity and find you on the voter roll.",steps:["Present your ID to the polling officer at the check-in desk","The officer will find your name on the electoral register and mark you as attending","You will receive your official ballot paper or be directed to a voting machine"],why_it_matters:"The check-in process ensures one person = one vote. It is quick and straightforward — polling officers are trained to help.",timeline_marker:"Election Day — at the station",region_notes:{USA:"Show your ID (if required by your state) and state your name/address. You may be asked to sign a poll book.",UK:"Show your photo ID. The clerk will cross your name off the register and hand you a ballot paper.",India:"Show your Voter ID. The presiding officer checks the roll and applies indelible ink to your finger."},keywords:["check in","sign in","polling officer","verify","ink","mark register"],next_step_id:"ED_CAST_VOTE"},{phase:"election_day",id:"ED_CAST_VOTE",title:"Step 8: Cast Your Vote",description:"This is the moment. Mark your ballot correctly and submit it.",steps:["Go to the private voting booth — your vote is completely secret","Mark your ballot clearly according to the instructions (tick, cross, number, or EVM button)","Submit: fold and place paper ballot in sealed box, or confirm on the EVM"],why_it_matters:"A spoiled or incorrectly marked ballot may not be counted. Taking 60 seconds to mark it correctly is the most important action you take today.",timeline_marker:"Election Day — in the booth",region_notes:{USA:"Methods vary: paper ballot, optical scan, or touch screen depending on your county.",UK:"Put a single X in the box next to your chosen candidate. Any other marking may spoil your ballot.",India:"Press the blue button next to your chosen candidate on the EVM. A beep confirms. VVPAT shows paper confirmation."},keywords:["cast vote","mark ballot","evm","ballot paper","booth","secret ballot","submit vote","how to vote"],next_step_id:"POST_COUNTING"},{phase:"post_election",id:"POST_COUNTING",title:"Step 9: Votes Are Counted",description:"After polls close, a rigorous counting process begins under official supervision.",steps:["Ballot boxes are sealed, transported, and opened only at official counting centers","Votes are counted by electoral officials — candidates or their agents can observe","Results are verified, cross-checked, and disputed ballots reviewed by returning officers"],why_it_matters:"The counting process is transparent and tamper-proof. Understanding it builds confidence that your vote was counted correctly.",timeline_marker:"Election Night / Following Days",region_notes:{USA:"Counting timelines vary by state. Mail-in ballots may take days. Networks project winners, but official certification takes weeks.",UK:"Counting often begins immediately after polls close at 10pm. Most results announced overnight.",India:"Counting day is a separate official day, 1–2 weeks after the last polling phase. EVM results announced by Returning Officer."},keywords:["count","counting","tally","how are votes counted","ballot counting","when will we know"],next_step_id:"POST_RESULTS"},{phase:"post_election",id:"POST_RESULTS",title:"Step 10: Results Are Declared",description:"Official results are announced and a winner is formally declared.",steps:["The Returning Officer officially announces the winner in each constituency/race","Final results are certified and published on the official electoral authority website","The winning party or candidate begins forming a government or taking office"],why_it_matters:"Understanding how results are officially declared — versus projected by media — prevents misinformation. Official results are what legally matter.",timeline_marker:"Election Night to weeks after",region_notes:{USA:"States certify results within weeks. Electoral College meets in December. Media projections are NOT official results.",UK:"Most results declared overnight. Official gazette publication follows. PM appointed once majority is clear.",India:"ECI declares results on counting day. The President invites the largest party/coalition to form government."},keywords:["results","winner","declared","who won","outcome","official result","certification"],next_step_id:"POST_APPEALS"},{phase:"post_election",id:"POST_APPEALS",title:"Step 11: Disputes and Appeals",description:"If you believe there was an irregularity, there are official processes to raise concerns.",steps:["Contact your local electoral authority or returning officer to report a specific concern","Election petitions can be filed in court — strict deadlines apply (typically 21–45 days post-result)","Recounts can be requested if the margin is very narrow — the process is formal and supervised"],why_it_matters:"Democracy depends on trust in the process. Legitimate dispute channels exist for good reason. Always rely on official evidence.",timeline_marker:"Days to weeks after results",region_notes:{USA:"Recounts can be triggered automatically (narrow margins) or requested. Legal challenges go to state courts.",UK:"Election petitions must be filed within 21 days of the result, heard by an Election Court.",India:"Election petitions filed in High Court within 45 days. ECI can also countermand elections for serious malpractice."},keywords:["appeal","dispute","recount","challenge","fraud","irregularity","contest","petition"],next_step_id:"POST_CIVIC_ROLE"},{phase:"post_election",id:"POST_CIVIC_ROLE",title:"Step 12: Your Ongoing Civic Role",description:"Voting is the start of civic engagement, not the end of it.",steps:["Track the actions of your elected representative — hold them accountable","Engage with your local government: attend town halls, write to your representative","Prepare for the next election: keep your registration up to date when you move"],why_it_matters:"Democracy is not a one-day event. Between elections, engaged citizens drive accountability. Your voice matters beyond the ballot box.",timeline_marker:"Ongoing after election",region_notes:{USA:"Contact your Representatives and Senators via congress.gov. Local elections happen frequently.",UK:"Write to your MP via writetothem.com. Local council elections and by-elections occur regularly.",India:"Contact your MP via the Lok Sabha website. RTI (Right to Information) applications are a powerful civic tool."},keywords:["civic role","after election","what now","accountable","representative","engage","next steps"],next_step_id:null}],faqs:[{id:"FAQ_001",question:"Can I vote if I am not registered?",answer:"In most countries, no — you must be on the official electoral register before you can vote. Some places allow same-day registration, but this is the exception. Register early to be safe.",phase:"pre_election"},{id:"FAQ_002",question:"What if I spoil my ballot?",answer:"A spoiled ballot is generally not counted. In most systems, you can ask for a replacement ballot if you have not yet submitted it. Once submitted, it cannot be retrieved.",phase:"election_day"},{id:"FAQ_003",question:"Is my vote really secret?",answer:"Yes. Ballot papers and EVMs are designed to make your specific vote untraceable to you personally. The secret ballot is a cornerstone of free and fair elections.",phase:"election_day"},{id:"FAQ_004",question:"How long does counting take?",answer:"It depends on the country. UK results often come overnight. US results can take days due to mail-in ballots. Indian results are announced on a dedicated counting day, weeks after polling.",phase:"post_election"},{id:"FAQ_005",question:"What if I cannot get to the polling station?",answer:"Most systems offer alternatives: postal/absentee voting, proxy voting, or accessible voting facilities. Contact your electoral authority well in advance — deadlines apply.",phase:"pre_election"}]};

const QUIZ=[{id:"Q001",phase:"pre_election",question:"What is the FIRST thing you should do before trying to register to vote?",options:["A) Find your polling station","B) Check your eligibility","C) Research candidates","D) Get a voter ID card"],correct:"B",explanation:"Checking eligibility (age, citizenship, residency) comes before registration. There is no point registering if you do not legally qualify.",difficulty:"easy"},{id:"Q002",phase:"pre_election",question:"Why is meeting the voter registration deadline critical?",options:["A) You get a fine if you miss it","B) Registration is just a formality","C) Missing the deadline usually means you cannot vote in that election","D) It only affects postal voting"],correct:"C",explanation:"In most jurisdictions, you must be registered before a specific deadline. Missing it typically means you cannot vote in that election cycle.",difficulty:"easy"},{id:"Q003",phase:"election_day",question:"You are in the queue when polls close. What should you do?",options:["A) Leave — you missed your chance","B) Stay — if you are in line before closing you have the right to vote","C) Try another polling station","D) Come back tomorrow"],correct:"B",explanation:"In most democracies, if you are in the queue before the official closing time, you retain the right to vote.",difficulty:"medium"},{id:"Q004",phase:"election_day",question:"What makes the secret ballot important?",options:["A) It speeds up counting","B) It allows people to vote without fear of punishment or coercion","C) It makes recounts easier","D) It prevents too many people from voting"],correct:"B",explanation:"The secret ballot means no one can trace your vote back to you. This freedom from coercion is fundamental to genuine democratic choice.",difficulty:"medium"},{id:"Q005",phase:"post_election",question:"What is the difference between a media projection and an official result?",options:["A) There is no difference","B) Media projections are estimates; official results are certified by electoral authorities","C) Official results are always announced first","D) Media projections are more accurate"],correct:"B",explanation:"Media projections are estimates based on exit polls and early counts. Official results are certified by the returning officer and are legally binding.",difficulty:"medium"},{id:"Q006",phase:"post_election",question:"What is the correct channel for disputing an election result?",options:["A) Social media campaigns","B) Approaching the winning candidate directly","C) Filing an official election petition through the courts within the legal deadline","D) Organising a re-vote independently"],correct:"C",explanation:"Election disputes must go through official legal channels — an election petition filed in court within a strict deadline. Unofficial methods have no legal standing.",difficulty:"hard"},{id:"Q007",phase:"pre_election",question:"In India, what body manages voter registration and conducts elections?",options:["A) The Parliament of India","B) The Supreme Court of India","C) The Election Commission of India (ECI)","D) State Governments"],correct:"C",explanation:"The Election Commission of India (ECI) is the independent constitutional authority responsible for administering elections.",difficulty:"easy"},{id:"Q008",phase:"election_day",question:"What does indelible ink on the finger signify in Indian elections?",options:["A) The voter has been identified as a suspect","B) The voter has already cast their vote","C) The voter's ballot was spoiled","D) The voter is a first-time voter"],correct:"B",explanation:"Indelible ink is applied after voting. It is an anti-fraud measure that prevents a person from voting more than once.",difficulty:"easy"},{id:"Q009",phase:"post_election",question:"After an election, what is the most important ongoing civic action?",options:["A) Wait for the next election","B) Celebrate or mourn and move on","C) Hold your elected representative accountable and stay engaged","D) Re-register for the next election immediately"],correct:"C",explanation:"Democracy requires continuous engagement. Tracking your representative's actions and contacting officials between elections is how citizens hold power accountable.",difficulty:"medium"},{id:"Q010",phase:"pre_election",question:"In the UK, what photo ID has been mandatory for voting in Great Britain since 2023?",options:["A) Only a passport","B) Only a driving licence","C) Various approved photo IDs including a free Voter Authority Certificate","D) A National Identity Card"],correct:"C",explanation:"The UK now requires photo ID. Accepted forms include passport, driving licence, and others. A free Voter Authority Certificate is available from your local council.",difficulty:"hard"}];

// ── State ──────────────────────────────────────────────────────────────────
let state={currentStepId:null,completedSteps:[],region:null,experienceLevel:null,mode:'chat',quizQuestions:[],quizIndex:0,quizAnswers:[],unknownCount:0,milestonesShown:[]};

const PHASE_COLOR={pre_election:'blue',election_day:'green',post_election:'amber'};
const PHASE_EMOJI={pre_election:'🔵',election_day:'🟢',post_election:'🟡'};
const ALL_NODES=KB.nodes;

function getNode(id){return ALL_NODES.find(n=>n.id===id);}
function getStepNumber(id){return ALL_NODES.findIndex(n=>n.id===id)+1;}

// ── Timeline strip ─────────────────────────────────────────────────────────
function updateTimeline(stepId){
  document.querySelectorAll('.tl-phase').forEach(el=>el.classList.remove('active'));
  const node=getNode(stepId);
  if(!node)return;
  const map={pre_election:'tl-pre',election_day:'tl-ed',post_election:'tl-post'};
  const el=document.getElementById(map[node.phase]);
  if(el)el.classList.add('active');
  const num=getStepNumber(stepId);
  document.getElementById('step-num').textContent=num||'—';
  const preComplete=ALL_NODES.filter(n=>n.phase==='pre_election').every(n=>state.completedSteps.includes(n.id));
  if(preComplete)document.getElementById('tl-con1').classList.add('done');
  const edComplete=ALL_NODES.filter(n=>n.phase==='election_day').every(n=>state.completedSteps.includes(n.id));
  if(edComplete)document.getElementById('tl-con2').classList.add('done');
}

// ── Chat helpers ────────────────────────────────────────────────────────────
function chat(){return document.getElementById('chat');}
function scrollBottom(){const c=chat();c.scrollTop=c.scrollHeight;}

function addMsg(role,html){
  const wrap=document.createElement('div');
  wrap.className=`msg ${role}`;
  const avatar=document.createElement('div');
  avatar.className='msg-avatar';
  avatar.textContent=role==='bot'?'🗳️':'👤';
  const bubble=document.createElement('div');
  bubble.className='msg-bubble';
  bubble.innerHTML=html;
  wrap.appendChild(avatar);wrap.appendChild(bubble);
  chat().appendChild(wrap);
  scrollBottom();
  return bubble;
}

function addElement(el){
  const wrap=document.createElement('div');
  wrap.className='msg bot';
  const avatar=document.createElement('div');
  avatar.className='msg-avatar';
  avatar.textContent='🗳️';
  wrap.appendChild(avatar);
  wrap.appendChild(el);
  chat().appendChild(wrap);
  scrollBottom();
}

function showTyping(){
  const t=document.createElement('div');
  t.className='msg bot';t.id='typing-indicator';
  t.innerHTML='<div class="msg-avatar">🗳️</div><div class="typing"><span></span><span></span><span></span></div>';
  chat().appendChild(t);scrollBottom();
  return t;
}
function hideTyping(){const t=document.getElementById('typing-indicator');if(t)t.remove();}

function botReply(fn,delay=600){
  const t=showTyping();
  setTimeout(()=>{hideTyping();fn();},delay);
}

// ── Intent Router ──────────────────────────────────────────────────────────
const ROUTES=[
  {keys:['quiz','test me','quiz me','practice question','examine','exam mode']  ,type:'quiz'},
  {keys:['timeline','full process','overview','all steps','complete guide','whole process','summarize','summary'],type:'overview'},
  {keys:['restart','start over','beginning','confused','main menu','reset','go back']                        ,type:'restart'},
  {keys:['eligible','eligibility','can i vote','qualify','am i eligible','age requirement','who can vote']   ,type:'step',id:'PRE_ELIGIBILITY'},
  {keys:['register','registration','sign up','voter roll','electoral roll','how do i register','voter list'] ,type:'step',id:'PRE_REGISTRATION'},
  {keys:['voter id','what to bring','what do i need','identification','polling card','what id','documents']  ,type:'step',id:'PRE_VOTER_ID'},
  {keys:['polling station','where to vote','polling place','booth location','where do i go','find my booth'] ,type:'step',id:'PRE_POLLING_STATION'},
  {keys:['ballot','candidates','who is running','parties','referendum','understand voting','what is on ballot'],type:'step',id:'PRE_UNDERSTAND_BALLOT'},
  {keys:['election day','today','arrive','go to vote','voting day','polling day']                            ,type:'step',id:'ED_ARRIVE'},
  {keys:['check in','sign in','polling officer','verify identity','mark register','when i get there']        ,type:'step',id:'ED_CHECK_IN'},
  {keys:['cast vote','mark ballot','evm','ballot paper','voting booth','secret ballot','submit vote','press']  ,type:'step',id:'ED_CAST_VOTE'},
  {keys:['count','counting','tally','how are votes counted','ballot counting']                               ,type:'step',id:'POST_COUNTING'},
  {keys:['results','winner','who won','declared','outcome','official result','certified']                    ,type:'step',id:'POST_RESULTS'},
  {keys:['appeal','dispute','recount','challenge','fraud','contest','petition','irregularity']               ,type:'step',id:'POST_APPEALS'},
  {keys:['civic role','after election','what now','accountable','representative','engage','next steps']      ,type:'step',id:'POST_CIVIC_ROLE'},
  {keys:['faq','what if','can i','is it','do i need']                                                       ,type:'faq'},
];

const REGION_SIGNALS={USA:['usa','america','united states','american','us election','electoral college','congress'],UK:['uk','britain','england','british','parliament','westminster','electoral commission','scotland'],India:['india','indian','lok sabha','eci','evm','vvpat','aadhaar','form 6']};

function detectRegion(txt){
  const t=txt.toLowerCase();
  for(const[r,sigs]of Object.entries(REGION_SIGNALS))for(const s of sigs)if(t.includes(s))return r;
  return null;
}

function routeIntent(msg){
  const t=msg.toLowerCase().replace(/[^\w\s]/g,' ');
  const r=detectRegion(t);
  if(r&&!state.region){state.region=r;}
  for(const route of ROUTES){
    for(const k of route.keys){
      if(t.includes(k))return{type:route.type,id:route.id||null};
    }
  }
  // FAQ scan
  for(const f of KB.faqs){
    const words=f.question.toLowerCase().split(' ').filter(w=>w.length>3);
    if(words.some(w=>t.includes(w)))return{type:'faq_match',faq:f};
  }
  return{type:'clarify'};
}

// ── Renderers ──────────────────────────────────────────────────────────────
function renderStepCard(nodeId){
  const node=getNode(nodeId);if(!node)return;
  state.currentStepId=nodeId;
  updateTimeline(nodeId);
  const col=PHASE_COLOR[node.phase];
  const em=PHASE_EMOJI[node.phase];
  const stepNum=getStepNumber(nodeId);
  const regionNote=state.region&&node.region_notes?node.region_notes[state.region]:null;
  const stepsHtml=node.steps.map((s,i)=>`<li><div class="step-num ${col}">${i+1}</div><div>${s}</div></li>`).join('');
  const regionHtml=regionNote?`<div class="region-box"><strong>📍 ${state.region} note:</strong> ${regionNote}</div>`:'';
  const nextLabel=node.next_step_id?getNode(node.next_step_id)?.title:'Finish Guide 🎉';
  const card=document.createElement('div');
  card.className='step-card';
  card.innerHTML=`
    <div class="step-card-header">
      <div class="step-badge ${col}">${em} ${node.phase.replace('_',' ').toUpperCase()} · STEP ${stepNum}</div>
      <div class="step-card-title">${node.title}</div>
      <div class="step-card-timeline">📅 ${node.timeline_marker}</div>
    </div>
    <div class="step-card-body">
      <div class="step-card-desc">${node.description}</div>
      <ul class="steps-list">${stepsHtml}</ul>
      <div class="why-box"><div class="why-label">💡 Why this matters</div><div class="why-text">${node.why_it_matters}</div></div>
      ${regionHtml}
      <div class="caveat">⚠️ Specific dates and deadlines vary by jurisdiction. Always verify with your local electoral authority.</div>
    </div>
    <div class="card-actions">
      <button class="btn-next" onclick="handleNext('${node.next_step_id||''}')">
        ${node.next_step_id?'Next: '+nextLabel+' →':'🎉 Complete! View Quiz'}
      </button>
      <button class="btn-ask" onclick="focusInput('Ask a question about this step...')">❓ Ask a question</button>
      <button class="btn-ask" onclick="showTimeline()">🗺️ Full Timeline</button>
    </div>`;
  var _al=buildActionLink(nodeId);
  if(_al){var _bd=card.querySelector('.step-card-body');if(_bd){var _ad=document.createElement('div');_ad.innerHTML=_al;_bd.appendChild(_ad);}}
  card.innerHTML += buildPhaseDots(nodeId) + buildSuggestions(nodeId);
  addElement(card);
  if(!state.completedSteps.includes(nodeId)){state.completedSteps.push(nodeId);checkPhaseMilestone(nodeId);}saveProgress();
}

function renderOverview(){
  const card=document.createElement('div');
  card.className='overview-card';
  const phasesHtml=`
    <div class="overview-phases">
      <div class="ov-phase blue" onclick="jumpToPhase('pre_election')">
        <span class="ov-phase-emoji">🔵</span>
        <div class="ov-phase-label">Pre-Election</div>
        <div class="ov-phase-steps">Steps 1–5</div>
        <div class="ov-phase-summary">Eligibility, registration, ID, and ballot research</div>
      </div>
      <div class="ov-phase green" onclick="jumpToPhase('election_day')">
        <span class="ov-phase-emoji">🟢</span>
        <div class="ov-phase-label">Election Day</div>
        <div class="ov-phase-steps">Steps 6–8</div>
        <div class="ov-phase-summary">Arriving, checking in, and casting your vote</div>
      </div>
      <div class="ov-phase amber" onclick="jumpToPhase('post_election')">
        <span class="ov-phase-emoji">🟡</span>
        <div class="ov-phase-label">Post-Election</div>
        <div class="ov-phase-steps">Steps 9–12</div>
        <div class="ov-phase-summary">Counting, results, disputes, and civic role</div>
      </div>
    </div>
    <div class="ov-step-list">
      ${ALL_NODES.map((n,i)=>{
        const c=PHASE_COLOR[n.phase];
        const done=state.completedSteps.includes(n.id)?'✓ ':'';
        return `<div class="ov-step-item" onclick="goToStep('${n.id}')">
          <div class="ov-step-num ${c}">${i+1}</div>
          <div class="ov-step-title">${done}${n.title.replace(/^Step \d+: /,'')}</div>
          <div class="ov-step-time">${n.timeline_marker}</div>
        </div>`;
      }).join('')}
    </div>`;
  card.innerHTML=phasesHtml;
  addElement(card);
  addFloatingIcons(card);
}

function renderOptions(opts){
  const row=document.createElement('div');
  row.className='options-row';
  opts.forEach(o=>{
    const b=document.createElement('button');
    b.className='opt-chip';
    b.textContent=o.label;
    b.onclick=()=>handleOptionClick(o);
    row.appendChild(b);
  });
  addElement(row);
}

function renderQuizQuestion(){
  const q=state.quizQuestions[state.quizIndex];if(!q)return endQuiz();
  const pct=Math.round((state.quizIndex/state.quizQuestions.length)*100);
  const card=document.createElement('div');
  card.className='quiz-card';
  const optsHtml=q.options.map(o=>`<button class="quiz-opt" onclick="handleQuizAnswer(this,'${o[0]}','${q.id}')">${o}</button>`).join('');
  card.innerHTML=`
    <div class="quiz-header">
      <span>🧠</span><span class="quiz-title">Election Quiz</span>
      <span class="quiz-progress-text">Q${state.quizIndex+1} of ${state.quizQuestions.length}</span>
    </div>
    <div class="quiz-progress-bar-wrap"><div class="quiz-progress-bar" style="width:${pct}%"></div></div>
    <div class="quiz-body">
      <div class="quiz-diff ${q.difficulty}">${q.difficulty}</div>
      <div class="quiz-q">${q.question}</div>
      <div class="quiz-options">${optsHtml}</div>
      <div class="quiz-explanation" id="quiz-exp-${q.id}">${q.explanation}</div>
    </div>
    <div class="quiz-footer" id="quiz-next-${q.id}" style="display:none">
      <button class="btn-next" onclick="nextQuizQuestion()">${state.quizIndex+1<state.quizQuestions.length?'Next Question →':'See Results 🏆'}</button>
    </div>`;
  addElement(card);
  addFloatingIcons(card);
}

function handleQuizAnswer(btn,selected,qid){
  const q=state.quizQuestions.find(x=>x.id===qid);if(!q)return;
  const parent=btn.closest('.quiz-options');
  parent.querySelectorAll('.quiz-opt').forEach(b=>{
    b.disabled=true;
    if(b.textContent.trim().startsWith(q.correct))b.classList.add('correct');
    else if(b===btn&&selected!==q.correct)b.classList.add('wrong');
  });
  const correct=selected===q.correct;
  state.quizAnswers.push({qid,correct});
  const expEl=document.getElementById(`quiz-exp-${qid}`);
  if(expEl)expEl.classList.add('show');
  const nextBtn=document.getElementById(`quiz-next-${qid}`);
  if(nextBtn)nextBtn.style.display='flex';
  if(correct)addMsg('bot','🎉 Correct! Well done!');
  else addMsg('bot',`❌ Not quite. The correct answer is <strong>${q.correct}</strong>. ${q.explanation}`);
}

function nextQuizQuestion(){
  state.quizIndex++;
  if(state.quizIndex>=state.quizQuestions.length)endQuiz();
  else botReply(()=>renderQuizQuestion(),300);
}

function endQuiz(){
  const correct=state.quizAnswers.filter(a=>a.correct).length;
  const total=state.quizAnswers.length;
  const pct=Math.round((correct/total)*100);
  let grade,msg;
  if(pct>=90){grade='🏆 Expert Voter';msg='Outstanding! You clearly understand the election process.';}
  else if(pct>=70){grade='✅ Civic Citizen';msg='Great job! You have a solid understanding of how elections work.';}
  else if(pct>=50){grade='📚 Learning Voter';msg="Good effort! There's more to learn — try reviewing the guide and quiz again.";}
  else{grade='🌱 Keep Going!';msg='Keep going! Take your time with the guide — every voter starts somewhere. 💪';}
  const card=document.createElement('div');
  card.className='quiz-card';
  card.innerHTML=`
    <div class="quiz-header"><span>🏆</span><span class="quiz-title">Quiz Complete!</span></div>
    <div class="quiz-result">
      <div class="quiz-score">${correct}/${total}</div>
      <div class="quiz-grade">${grade}</div>
      <div class="quiz-msg">${msg}</div>
      <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
        <button class="btn-next" onclick="startQuiz()">🔄 Retry Quiz</button>
        <button class="btn-ask" onclick="restartGuide()">↺ Back to Guide</button>
      </div>
    </div>`;
  addElement(card);
  state.mode='chat';
}

// ── Action handlers ────────────────────────────────────────────────────────
function handleNext(nextId){
  if(!nextId){startQuiz();return;}
  botReply(()=>renderStepCard(nextId),400);
}

function goToStep(id){botReply(()=>renderStepCard(id),300);}

function jumpToPhase(phase){
  const first=ALL_NODES.find(n=>n.phase===phase);
  if(first)botReply(()=>renderStepCard(first.id),300);
}

function showTimeline(){
  botReply(()=>{
    addMsg('bot','<strong>🗺️ Complete Election Timeline</strong><br>Here is your full journey — click any step to jump to it:');
    renderOverview();
  },300);
}

function startQuiz(){
  state.mode='quiz';
  state.quizQuestions=[...QUIZ].sort(()=>Math.random()-.5).slice(0,5);
  state.quizIndex=0;
  state.quizAnswers=[];
  botReply(()=>{
    addMsg('bot','🧠 <strong>Election Knowledge Quiz</strong><br>5 questions to test your understanding. No pressure — this is all about learning!');
    renderQuizQuestion();
  },400);
}

function restartGuide(){
  state={currentStepId:null,completedSteps:[],region:state.region,experienceLevel:null,milestonesShown:[],mode:'chat',quizQuestions:[],quizIndex:0,quizAnswers:[],unknownCount:0};
  document.getElementById('step-num').textContent='—';
  document.querySelectorAll('.tl-phase').forEach(el=>el.classList.remove('active'));
  document.getElementById('tl-con1').classList.remove('done');
  document.getElementById('tl-con2').classList.remove('done');
  clearProgress();chat().innerHTML='';showWelcome();
}

function focusInput(placeholder){
  const inp=document.getElementById('user-input');
  inp.placeholder=placeholder;inp.focus();
}

function handleOptionClick(opt){
  if(opt.action==='first_time'){state.experienceLevel='first_time';addMsg('user','🗳️ I\'m a first-time voter');botReply(()=>{addMsg('bot','Welcome! I\'m so glad you\'re here. Let\'s walk through everything step by step — no rush at all. 😊<br><br>We\'ll start right from the beginning:');renderStepCard('PRE_ELIGIBILITY');},500);}
  else if(opt.action==='quick'){state.experienceLevel='returning';addMsg('user','⚡ Quick overview please');botReply(()=>{addMsg('bot','Got it! Here\'s your complete election roadmap at a glance:');renderOverview();},400);}
  else if(opt.action==='quiz'){addMsg('user','🧠 Quiz me!');startQuiz();}
  else if(opt.action==='region'){/* handled by select */}
  else if(opt.step){addMsg('user',opt.label);botReply(()=>renderStepCard(opt.step),400);}
  else if(opt.type==='overview'){addMsg('user',opt.label);botReply(()=>{addMsg('bot','Here\'s your complete election roadmap:');renderOverview();},400);}
}

// ── Welcome screen ─────────────────────────────────────────────────────────
function showWelcome(){
  const card=document.createElement('div');
  card.className='welcome-card';
  card.innerHTML=`
    <div class="welcome-icon">🗳️</div>
    <h2>Your Election Guide</h2>
    <p>I'll walk you through the complete election process — from checking your eligibility all the way to understanding results. Simple, clear, and step by step.</p>
    <div class="entry-modes">
      <button class="entry-btn" onclick="handleOptionClick({action:'first_time'})">
        <span class="btn-icon">🌱</span>
        <span class="btn-title">First-Time Voter</span>
        <span class="btn-desc">Full guided walkthrough</span>
      </button>
      <button class="entry-btn" onclick="handleOptionClick({action:'quick'})">
        <span class="btn-icon">⚡</span>
        <span class="btn-title">Quick Overview</span>
        <span class="btn-desc">See the full timeline</span>
      </button>
      <button class="entry-btn" onclick="handleOptionClick({action:'quiz'})">
        <span class="btn-icon">🧠</span>
        <span class="btn-title">Test My Knowledge</span>
        <span class="btn-desc">5-question quiz</span>
      </button>
    </div>
    <div class="region-select-row">
      <span>🌍 Your region (optional):</span>
      <select class="region-picker" id="region-picker" onchange="setRegion(this.value)">
        <option value="">General (all countries)</option>
        <option value="USA">🇺🇸 United States</option>
        <option value="UK">🇬🇧 United Kingdom</option>
        <option value="India">🇮🇳 India</option>
      </select>
    </div>`;
  addElement(card);
  addFloatingIcons(card);
}

function setRegion(val){state.region=val||null;}

// ── Main send handler ──────────────────────────────────────────────────────
function handleSend(){
  const inp=document.getElementById('user-input');
  const msg=inp.value.trim();if(!msg)return;
  inp.value='';inp.style.height='auto';
  addMsg('user',msg);
  // Smart answer check first
const smart=smartAnswer(msg);
if(smart){
  botReply(()=>{
    addMsg('bot',smart.answer.replace(/\*\*(.+?)\*\*/g,'<strong>$1</strong>'));
    if(smart.step){
      const opts=document.createElement('div');
      opts.className='options-row';
      const b=document.createElement('button');
      b.className='opt-chip';b.textContent='📖 Show me the full step →';
      b.onclick=()=>{addMsg('user','Show me the full step');botReply(()=>renderStepCard(smart.step),300);};
      opts.appendChild(b);addElement(opts);
    }
    saveProgress();
  },500);
  return;
}
const route=routeIntent(msg);
  state.unknownCount=route.type==='clarify'?state.unknownCount+1:0;

  botReply(()=>{
    if(route.type==='step')renderStepCard(route.id);
    else if(route.type==='overview'){addMsg('bot','Here\'s the complete election timeline:');renderOverview();}
    else if(route.type==='quiz')startQuiz();
    else if(route.type==='restart')restartGuide();
    else if(route.type==='faq'||route.type==='faq_match'){
      const f=route.faq||KB.faqs[0];
      const card=document.createElement('div');
      card.className='faq-card';
      card.innerHTML=`<div class="faq-q">❓ ${f.question}</div><div class="faq-a">${f.answer}</div>`;
      addElement(card);
      renderOptions([{label:'Continue the guide',step:state.currentStepId||'PRE_ELIGIBILITY'},{label:'🗺️ Full Timeline',type:'overview'},{label:'🧠 Quiz Me',action:'quiz'}]);
    }
    else{
      // clarify
      addMsg('bot',`I want to make sure I give you the right answer! What are you looking for?${state.unknownCount>=2?'<br><br>Or would you like to <strong>start over from the beginning?</strong>':''}`);
      renderOptions([
        {label:'📋 Registration',step:'PRE_REGISTRATION'},
        {label:'🗳️ Voting Process',step:'ED_CAST_VOTE'},
        {label:'📊 Results & Counting',step:'POST_COUNTING'},
        {label:'🗺️ Full Timeline',type:'overview'},
        {label:'🧠 Quiz Mode',action:'quiz'},
        ...(state.unknownCount>=2?[{label:'↺ Start Over',action:'restart'}]:[])
      ]);
    }
  },600);
}

// ── Input auto-resize ──────────────────────────────────────────────────────
document.getElementById('user-input').addEventListener('input',function(){
  this.style.height='auto';
  this.style.height=Math.min(this.scrollHeight,120)+'px';
});
document.getElementById('user-input').addEventListener('keydown',function(e){
  if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();handleSend();}
});


// ── UPGRADE PATCH: Enhanced JS Features ──────────────────────────────────────

// ── Confetti Engine ────────────────────────────────────────────────────────
function launchConfetti(duration=2500){
  const canvas=document.getElementById('confetti-canvas');
  canvas.style.display='block';
  const ctx=canvas.getContext('2d');
  canvas.width=window.innerWidth;canvas.height=window.innerHeight;
  const colors=['#3b82f6','#10b981','#f59e0b','#6366f1','#ec4899','#34d399','#60a5fa'];
  const pieces=[];
  for(let i=0;i<120;i++){
    pieces.push({
      x:Math.random()*canvas.width,y:Math.random()*canvas.height-canvas.height,
      r:Math.random()*6+3,color:colors[Math.floor(Math.random()*colors.length)],
      vy:Math.random()*3+2,vx:(Math.random()-.5)*2,rot:Math.random()*360,rotV:(Math.random()-.5)*5
    });
  }
  const start=Date.now();
  function draw(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    pieces.forEach(p=>{
      ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.rot*Math.PI/180);
      ctx.fillStyle=p.color;ctx.fillRect(-p.r/2,-p.r/2,p.r,p.r*2);
      ctx.restore();
      p.y+=p.vy;p.x+=p.vx;p.rot+=p.rotV;
      if(p.y>canvas.height){p.y=-10;p.x=Math.random()*canvas.width;}
    });
    if(Date.now()-start<duration)requestAnimationFrame(draw);
    else{ctx.clearRect(0,0,canvas.width,canvas.height);canvas.style.display='none';}
  }
  draw();
}

// ── Phase Milestone Detection ───────────────────────────────────────────────
const PHASE_LAST={pre_election:'PRE_UNDERSTAND_BALLOT',election_day:'ED_CAST_VOTE',post_election:'POST_CIVIC_ROLE'};
const PHASE_LABELS={pre_election:'Pre-Election Complete!',election_day:'Election Day Done!',post_election:'Full Guide Complete!'};
const PHASE_SUBS={pre_election:"You're fully prepared before Election Day. Next up: Election Day steps.",election_day:"You've cast your vote! Now let's understand what happens next.",post_election:"You've completed the entire election guide. You're a fully informed voter! 🗳️"};

function checkPhaseMilestone(nodeId){
  for(const[phase,lastId]of Object.entries(PHASE_LAST)){
    if(nodeId===lastId&&!state.milestonesShown.includes(phase)){
      state.milestonesShown.push(phase);
      const isLast=phase==='post_election';
      setTimeout(()=>{
        if(isLast){launchConfetti(4000);renderCompleteCard();}
        else{launchConfetti(2000);renderMilestoneCard(phase);}
      },500);
    }
  }
}

function renderMilestoneCard(phase){
  const card=document.createElement('div');
  card.className='milestone-card';
  const em=phase==='pre_election'?'🔵✅':'🟢✅';
  card.innerHTML=`
    <div class="milestone-emoji">${em}</div>
    <div class="milestone-title">${PHASE_LABELS[phase]}</div>
    <div class="milestone-sub">${PHASE_SUBS[phase]}</div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
      <button class="btn-next" onclick="jumpToPhase('${phase==='pre_election'?'election_day':'post_election'}')">
        Continue to ${phase==='pre_election'?'🟢 Election Day':'🟡 Post-Election'} →
      </button>
      <button class="btn-ask" onclick="showChecklist()">📋 My Checklist</button>
    </div>`;
  addElement(card);
  addFloatingIcons(card);
}

function renderCompleteCard(){
  const total=ALL_NODES.length;
  const card=document.createElement('div');
  card.className='complete-card';
  card.innerHTML=`
    <div style="font-size:2.5rem;margin-bottom:10px">🎉🗳️🎉</div>
    <h3>You've Completed the Full Election Guide!</h3>
    <p>You now understand the complete election journey — from eligibility to your ongoing civic role. Democracy is stronger because of informed voters like you.</p>
    <div class="complete-stats">
      <div class="stat-box"><div class="stat-num">${total}</div><div class="stat-label">Steps Completed</div></div>
      <div class="stat-box"><div class="stat-num">3</div><div class="stat-label">Phases Mastered</div></div>
      <div class="stat-box"><div class="stat-num">🌍</div><div class="stat-label">Ready to Vote</div></div>
    </div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
      <button class="btn-next" onclick="startQuiz()">🧠 Test Your Knowledge</button>
      <button class="btn-ask" onclick="showChecklist()">📋 Download Checklist</button>
      <button class="btn-ask" onclick="restartGuide()">↺ Start Over</button>
    </div>`;
  addElement(card);
  addFloatingIcons(card);
}

// ── Phase Progress Dots ─────────────────────────────────────────────────────
function buildPhaseDots(currentNodeId){
  const node=getNode(currentNodeId);if(!node)return '';
  const phaseNodes=ALL_NODES.filter(n=>n.phase===node.phase);
  const dots=phaseNodes.map(n=>{
    if(state.completedSteps.includes(n.id))return '<div class="prog-dot done"></div>';
    if(n.id===currentNodeId)return '<div class="prog-dot current"></div>';
    return '<div class="prog-dot"></div>';
  }).join('');
  const done=phaseNodes.filter(n=>state.completedSteps.includes(n.id)).length;
  return `<div class="phase-progress"><span class="phase-prog-label">${done}/${phaseNodes.length} in this phase</span><div class="phase-prog-dots">${dots}</div></div>`;
}

// ── Contextual Suggestions Per Step ────────────────────────────────────────
const STEP_SUGGESTIONS={
  PRE_ELIGIBILITY:["How do I register?","What ID do I need?","Quick overview"],
  PRE_REGISTRATION:["What ID do I need?","Find my polling station","What if I miss the deadline?"],
  PRE_VOTER_ID:["Find my polling station","Understand my ballot","What to bring on Election Day?"],
  PRE_POLLING_STATION:["Understand my ballot","What happens on Election Day?","Can I vote early?"],
  PRE_UNDERSTAND_BALLOT:["What happens on Election Day?","What do I do at the polling station?","Quiz me"],
  ED_ARRIVE:["What happens when I check in?","How do I actually vote?","Is my vote secret?"],
  ED_CHECK_IN:["How do I cast my vote?","What if I make a mistake on my ballot?","Is my vote really secret?"],
  ED_CAST_VOTE:["How are votes counted?","When will results be announced?","What happens after I vote?"],
  POST_COUNTING:["When are results declared?","What if there's a dispute?","How can I verify my vote?"],
  POST_RESULTS:["Can results be challenged?","What happens after the winner is announced?","Quiz me"],
  POST_APPEALS:["What is my role after the election?","How do I contact my representative?","Quiz me"],
  POST_CIVIC_ROLE:["Take the quiz","Start the guide again","Download my checklist"],
};

function buildSuggestions(nodeId){
  const sugs=STEP_SUGGESTIONS[nodeId]||[];
  if(!sugs.length)return '';
  const chips=sugs.map(s=>`<button class="sug-chip" onclick="handleSuggestion('${s.replace(/'/g,"\\'")}')"> ${s}</button>`).join('');
  return `<div class="suggestion-row"><div class="suggestion-label">💬 You might also want to know</div>${chips}</div>`;
}

function handleSuggestion(text){
  document.getElementById('user-input').value=text;
  handleSend();
}

// ── Checklist Modal ─────────────────────────────────────────────────────────
function showChecklist(){
  const modal=document.getElementById('checklist-modal');
  const body=document.getElementById('checklist-body');
  const phases=[
    {phase:'pre_election',label:'🔵 Pre-Election',cls:'blue'},
    {phase:'election_day',label:'🟢 Election Day',cls:'green'},
    {phase:'post_election',label:'🟡 Post-Election',cls:'amber'},
  ];
  let html='';
  phases.forEach(({phase,label,cls})=>{
    const nodes=ALL_NODES.filter(n=>n.phase===phase);
    const items=nodes.map(n=>{
      const done=state.completedSteps.includes(n.id);
      const checkHtml=done?'<div class="cl-check done">✓</div>':'<div class="cl-check"></div>';
      return `<div class="cl-item">${checkHtml}<div>${n.title.replace(/^Step \d+: /,'')}</div></div>`;
    }).join('');
    html+=`<div class="cl-phase"><div class="cl-phase-title ${cls}">${label}</div>${items}</div>`;
  });
  body.innerHTML=html;
  modal.classList.add('show');
}

function closeChecklist(){document.getElementById('checklist-modal').classList.remove('show');}

function printChecklist(){
  const body=document.getElementById('checklist-body').innerHTML;
  const region=state.region?` — ${state.region}`:'';
  const win=window.open('','_blank');
  win.document.write(`<!DOCTYPE html><html><head><title>My Voter Checklist${region}</title>
  <style>body{font-family:Arial,sans-serif;max-width:500px;margin:30px auto;color:#111}
  h1{font-size:1.3rem;margin-bottom:20px}
  .cl-phase{margin-bottom:20px}.cl-phase-title{font-weight:bold;font-size:1rem;border-bottom:1px solid #ccc;padding-bottom:6px;margin-bottom:10px}
  .cl-item{display:flex;gap:10px;align-items:flex-start;padding:5px 0;font-size:.85rem}
  .cl-check{width:14px;height:14px;border:2px solid #888;border-radius:2px;flex-shrink:0;margin-top:2px}
  .cl-check.done{background:#10b981;border-color:#10b981}
  @media print{button{display:none}}</style></head>
  <body><h1>🗳️ My Voter Checklist${region}</h1>${body}
  <p style="margin-top:20px;font-size:.75rem;color:#666">Generated by ElectIQ Election Guide. Always verify deadlines with your local electoral authority.</p>
  <button onclick="window.print()" style="margin-top:10px;padding:8px 16px;cursor:pointer">🖨️ Print</button>
  </body></html>`);
  win.document.close();
}

// ── Floating Icons (injected into welcome card) ─────────────────────────────
function addFloatingIcons(card){
  const iconsDiv=document.createElement('div');
  iconsDiv.className='float-icons';
  const icons=['🗳️','📋','🏛️','✅','📊','🌍','⚖️','🤝'];
  icons.forEach((ic,i)=>{
    const span=document.createElement('span');
    span.className='float-icon';
    span.textContent=ic;
    span.style.cssText=`left:${10+i*12}%;animation-duration:${6+i*1.5}s;animation-delay:${i*.8}s`;
    iconsDiv.appendChild(span);
  });
  card.insertBefore(iconsDiv,card.firstChild);
}

// ── FAQ Tiles Renderer ──────────────────────────────────────────────────────
function renderFAQTiles(){
  const grid=document.createElement('div');
  grid.className='faq-grid';
  KB.faqs.forEach(f=>{
    const tile=document.createElement('div');
    tile.className='faq-tile';
    const phaseLabel={pre_election:'Pre-Election',election_day:'Election Day',post_election:'Post-Election'}[f.phase]||'General';
    tile.innerHTML=`<div class="faq-tile-q">${f.question}</div><div class="faq-tile-tag">${phaseLabel}</div>`;
    tile.onclick=()=>{
      addMsg('user',f.question);
      botReply(()=>{
        const card=document.createElement('div');card.className='faq-card';
        card.innerHTML=`<div class="faq-q">❓ ${f.question}</div><div class="faq-a">${f.answer}</div>`;
        addElement(card);
      },400);
    };
    grid.appendChild(tile);
  });
  addElement(grid);
}

// ── MOVE 1: Voice Input (Web Speech API) ──────────────────────────────────
// ── MOVE 1: Voice Input (Web Speech API) ──────────────────────────────────
var _vsr=null,_vlis=false;
function handleVoiceClick(){
  var SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  var btn=document.getElementById('voice-btn');
  if(!SR){
    addMsg('bot','🎤 Voice input is not supported in this browser. Please use Chrome and try again.');
    return;
  }
  if(_vlis){
    if(_vsr)_vsr.stop();
    return;
  }
  _vsr=new SR();
  _vsr.lang='en-US';_vsr.interimResults=false;_vsr.maxAlternatives=1;
  _vsr.onstart=function(){
    _vlis=true;
    btn.innerHTML='🔴';btn.title='Listening… click to stop';
    btn.style.cssText='background:rgba(239,68,68,.15);border-color:#ef4444;';
    addMsg('bot','<em>🎤 Listening… speak your question now.</em>');
  };
  _vsr.onresult=function(e){
    var txt=e.results[0][0].transcript;
    document.getElementById('user-input').value=txt;
    handleSend();
  };
  _vsr.onerror=function(e){
    _vlis=false;
    btn.innerHTML='🎤';btn.style.cssText='';
    var msg=e.error==='not-allowed'
      ?'🎤 Microphone access denied. Please allow microphone access in your browser and try again.'
      :'🎤 Could not hear clearly. Please try again or type your question.';
    addMsg('bot',msg);
  };
  _vsr.onend=function(){
    _vlis=false;
    btn.innerHTML='🎤';btn.style.cssText='';
  };
  try{_vsr.start();}catch(err){addMsg('bot','🎤 Could not start voice recognition. Please try again.');}
}

// ── MOVE 2: Smart Inline Answers ───────────────────────────────────────────
const SMART_PATTERNS=[
  {
    pattern:/\b1[0-7]\b|i('m| am) (1[0-7]|seventeen|sixteen|fifteen|fourteen|thirteen|twelve|eleven|ten)/i,
    answer:"Great question! In most countries, the voting age is **18**. If you are 17 now, you will likely be eligible to vote in the next election after your 18th birthday — but this depends on your specific election date and jurisdiction. Some places allow 16 or 17 year olds to vote in certain local elections. Check with your local electoral authority for the exact rules!",
    step:'PRE_ELIGIBILITY'
  },
  {
    pattern:/moved|new address|change.*address|address.*change|just moved|relocated/i,
    answer:"If you have recently moved, your voter registration is usually tied to your **old address** and may no longer be valid. You should **update your registration** with your new address as soon as possible. In most countries, you can do this online through your electoral authority's website. Do this well before any election — deadlines apply!",
    step:'PRE_REGISTRATION'
  },
  {
    pattern:/too late|missed (the )?deadline|deadline passed|registration (is |)closed/i,
    answer:"It depends! Some jurisdictions allow **same-day registration** at the polling station. Others have the registration close weeks before election day. Check your local electoral authority's website immediately — there may still be options like provisional ballots or emergency registration in some areas. Don't give up without checking!",
    step:'PRE_REGISTRATION'
  },
  {
    pattern:/postal|mail.*vote|vote by mail|absentee|proxy vote|can't (go|make it|attend)/i,
    answer:"If you cannot get to a polling station, most countries offer **alternatives**: 📮 Postal/absentee voting — request a ballot to be sent to you by post. 👥 Proxy voting — appoint someone you trust to vote on your behalf. ♿ Accessible voting — adapted facilities for voters with disabilities. Contact your electoral authority well in advance as each option has its own deadlines!",
    step:'PRE_VOTER_ID'
  },
  {
    pattern:/spoil|ruined|mistake.*ballot|wrong.*ballot|ballot.*wrong|crossed.*wrong/i,
    answer:"If you haven't submitted your ballot yet, you can usually ask the polling officer for a **replacement ballot**. Once submitted to the ballot box or EVM, it generally cannot be retrieved. If you accidentally spoil a paper ballot before submitting it, raise your hand and ask quietly — polling officers are trained to handle this without revealing your vote.",
    step:'ED_CAST_VOTE'
  },
  {
    pattern:/how long|queue|line|wait|busy|crowded/i,
    answer:"Polling station queues vary greatly — early morning and after work hours (5–7pm) tend to be busiest. Mid-morning and early afternoon are often quieter. The most important thing: **if you are in the queue before the official closing time, you legally have the right to vote**. Do not leave the queue even if the clock ticks past closing.",
    step:'ED_ARRIVE'
  },
  {
    pattern:/first time|never voted|new voter|beginner/i,
    answer:"Welcome! Voting for the first time is exciting. Here's the short version: ✅ Check you're eligible → 📝 Register → 🪪 Get your ID ready → 📍 Find your polling station → 🗳️ Show up and vote! Want me to walk you through each step in detail?",
    step:'PRE_ELIGIBILITY'
  },
  {
    pattern:/secret|anonymous|private|who (can |will |)see|someone.*see.*vote|track.*vote/i,
    answer:"Your vote is completely **secret**. The ballot system is specifically designed so your individual vote cannot be traced back to you — not by the government, not by candidates, not by anyone. This is called the 'secret ballot' and is a cornerstone of free and fair democracy. Vote with complete confidence.",
    step:'ED_CAST_VOTE'
  },
];

function smartAnswer(msg){
  for(const p of SMART_PATTERNS){
    if(p.pattern.test(msg)){
      return{answer:p.answer,step:p.step};
    }
  }
  return null;
}

// ── MOVE 3: Real Action Links Per Step ────────────────────────────────────
const ACTION_LINKS={
  PRE_ELIGIBILITY:{
    USA:{label:'Check Eligibility on USA.gov',url:'https://www.usa.gov/voter-registration-card'},
    UK:{label:'Check Eligibility — Electoral Commission',url:'https://www.electoralcommission.org.uk/i-am-a/voter/registering-vote'},
    India:{label:'Check Eligibility — ECI',url:'https://voters.eci.gov.in/'},
    default:{label:'Learn About Voter Eligibility',url:'https://www.aceproject.org/ace-en/topics/vo/voter-registration/voter-eligibility'}
  },
  PRE_REGISTRATION:{
    USA:{label:'Register to Vote — vote.gov',url:'https://vote.gov/'},
    UK:{label:'Register to Vote — gov.uk',url:'https://www.gov.uk/register-to-vote'},
    India:{label:'Register — voters.eci.gov.in',url:'https://voters.eci.gov.in/'},
    default:{label:'Find Your Country\'s Registration Portal',url:'https://www.idea.int/data-tools/country-view/country-information'}
  },
  PRE_VOTER_ID:{
    USA:{label:'Check Your State\'s ID Requirements',url:'https://www.ncsl.org/elections-and-campaigns/voter-id'},
    UK:{label:'Get a Free Voter Authority Certificate',url:'https://www.gov.uk/apply-for-photo-id-voter-authority-certificate'},
    India:{label:'Apply for Voter ID (EPIC) — ECI',url:'https://voters.eci.gov.in/'},
    default:{label:'Learn About Voter ID Requirements',url:'https://aceproject.org'}
  },
  PRE_POLLING_STATION:{
    USA:{label:'Find Your Polling Place — vote.gov',url:'https://vote.gov/'},
    UK:{label:'Find Your Polling Station',url:'https://www.gov.uk/contact-electoral-registration-office'},
    India:{label:'Find Your Booth — voters.eci.gov.in',url:'https://voters.eci.gov.in/'},
    default:{label:'Contact Your Electoral Authority',url:'https://aceproject.org'}
  },
  POST_APPEALS:{
    USA:{label:'File an Election Complaint',url:'https://www.eac.gov/voters/file-election-complaint'},
    UK:{label:'Report an Election Problem',url:'https://www.electoralcommission.org.uk/who-we-are-and-what-we-do/contact-us'},
    India:{label:'Lodge a Complaint with ECI',url:'https://eci.gov.in/complaints/'},
    default:{label:'Find Your Electoral Authority',url:'https://aceproject.org'}
  }
};

function buildActionLink(nodeId){
  const links=ACTION_LINKS[nodeId];
  if(!links)return '';
  const link=state.region?links[state.region]||links.default:links.default;
  if(!link)return '';
  return `<a href="${link.url}" target="_blank" rel="noopener" class="action-link">🔗 ${link.label} ↗</a>`;
}

// ── MOVE 4: Progress Persistence (localStorage) ────────────────────────────
const SAVE_KEY='electiq_progress_v1';

function saveProgress(){
  try{
    localStorage.setItem(SAVE_KEY,JSON.stringify({
      currentStepId:state.currentStepId,
      completedSteps:state.completedSteps,
      region:state.region,
      experienceLevel:state.experienceLevel,
      milestonesShown:state.milestonesShown||[],
      savedAt:Date.now()
    }));
  }catch(e){}
}

function loadProgress(){
  try{
    const raw=localStorage.getItem(SAVE_KEY);
    if(!raw)return null;
    const saved=JSON.parse(raw);
    // Expire after 7 days
    if(Date.now()-saved.savedAt>7*24*60*60*1000){
      localStorage.removeItem(SAVE_KEY);return null;
    }
    return saved;
  }catch(e){return null;}
}

function clearProgress(){localStorage.removeItem(SAVE_KEY);}

function offerResume(saved){
  const node=getNode(saved.currentStepId);
  if(!node)return;
  const card=document.createElement('div');
  card.className='resume-card';
  const regionLabel=saved.region?` · ${saved.region}`:'';
  card.innerHTML=`
    <div class="resume-icon">🔖</div>
    <div class="resume-text">
      <div class="resume-title">Welcome back!</div>
      <div class="resume-sub">You were on <strong>${node.title}</strong>${regionLabel}</div>
    </div>
    <div class="resume-actions">
      <button class="btn-next" onclick="resumeSession()" id="resume-yes-btn">Continue →</button>
      <button class="btn-ask" onclick="freshStart()">Start Fresh</button>
    </div>`;
  addElement(card);
}

function resumeSession(){
  const saved=loadProgress();
  if(!saved)return;
  state.completedSteps=saved.completedSteps||[];
  state.region=saved.region;
  state.experienceLevel=saved.experienceLevel;
  state.milestonesShown=saved.milestonesShown||[];
  const regionLabel=saved.region?`Region set to ${saved.region}. `:'';
  addMsg('bot',`✅ ${regionLabel}Resuming from where you left off:`);
  botReply(()=>renderStepCard(saved.currentStepId),400);
}

function freshStart(){clearProgress();restartGuide();}

// ── Boot ───────────────────────────────────────────────────────────────────
setTimeout(()=>{
  const savedProg=loadProgress();
  addMsg('bot', `👋 <strong>Welcome to ElectIQ!</strong> I'm your personal election guide — here to make the voting process crystal clear.`);
  setTimeout(()=>{
    if(savedProg&&savedProg.currentStepId){offerResume(savedProg);}
    else{showWelcome();}
  },400);
},200);

