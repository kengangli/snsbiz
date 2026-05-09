/* SNS Biz — i18n dictionary and language switcher */
(function () {
  const T = {
    en: {
      // Common
      'nav.home': 'Home',
      'nav.solutions': 'Solutions',
      'nav.services': 'Services',
      'nav.about': 'About Us',
      'lang.toggle': '中文',
      'footer.about': 'Tax, accounting and business consulting for Australian small and medium businesses.',
      'footer.quicklinks': 'Quick Links',
      'footer.contact': 'Contact',
      'footer.legal': '© <span id="year"></span> SNS Biz · Registered Tax Agent · All rights reserved.',

      // Home
      'home.title': 'SNS Biz — Tax & Business Consulting',
      'home.hero.h1': 'Tax, Accounting &amp; Business Consulting You Can Build On.',
      'home.hero.lede': "SNS Biz partners with Australian small and medium businesses to simplify tax, sharpen financial decisions and unlock growth. Registered Tax Agent. Trusted advisor. Local team.",
      'home.hero.btn1': 'Explore Services',
      'home.hero.btn2': 'About Us',
      'home.what.title': 'What we do',
      'home.what.sub': "From tax lodgement to long-term business strategy — we help you stay compliant, profitable and ready for what's next.",
      'home.card1.title': 'Tax &amp; Compliance',
      'home.card1.body': 'Tax returns, BAS, GST, FBT and ATO correspondence handled by a Registered Tax Agent — accurate, on time, audit-ready.',
      'home.card2.title': 'Accounting &amp; Bookkeeping',
      'home.card2.body': 'Cloud-based bookkeeping, payroll and management accounts that give you a clean, real-time view of how the business is tracking.',
      'home.card3.title': 'Business Consulting',
      'home.card3.body': 'Practical advisory across pricing, profitability, cash flow and structuring — translating numbers into the decisions that move you forward.',
      'home.card4.title': 'Setup &amp; Structuring',
      'home.card4.body': 'Choosing the right entity, registering for the right taxes, and structuring for protection and tax efficiency from day one.',
      'home.stats.years': 'Years Experience',
      'home.stats.clients': 'Clients Served',
      'home.stats.agent': 'Registered Tax Agent',
      'home.stats.local': 'Local Team',
      'home.builtfor.title': 'Built for Australian SMEs',
      'home.builtfor.body': "SNS Biz is built for owners and operators who want straight answers, not jargon. We combine the rigour of a tax practice with the lateral thinking of a consultancy — so the work we do connects compliance to commercial outcomes.",
      'home.builtfor.body2': "Whether you're a sole trader, a growing company or planning the next phase, we work alongside you to keep the books clean, the tax right, and the strategy sharp.",
      'home.builtfor.btn': 'View Solutions',
      'home.why.title': 'Why clients choose us',
      'home.why.li1': '<strong>Registered Tax Agent</strong> — accountable, regulated, ATO-recognised.',
      'home.why.li2': '<strong>One point of contact</strong> — your principal consultant, end to end.',
      'home.why.li3': '<strong>Plain English advice</strong> — clear options, no jargon.',
      'home.why.li4': '<strong>Practical, commercial</strong> — advice you can actually act on.',
      'home.cta.title': 'Ready to talk?',
      'home.cta.body': 'Book a no-obligation conversation about your tax, books or business plans.',
      'home.cta.btn': 'Email Us',

      // Solutions
      'solutions.title': 'Solutions — SNS Biz',
      'solutions.header.h1': 'Solutions',
      'solutions.header.sub': 'Packaged solutions designed around the stage and shape of your business — from sole trader to scale-up.',
      'solutions.section.title': 'Solutions for every stage',
      'solutions.section.sub': "Choose the bundle that fits where you are today. We'll tailor the detail around your industry, structure and goals.",
      'solutions.includes': 'Includes:',
      'solutions.s1.title': 'Sole Trader &amp; Contractor',
      'solutions.s1.body': 'For freelancers, contractors and sole traders who need clean tax outcomes without the overhead of a full back office.',
      'solutions.s1.list': 'Annual tax returns, BAS lodgement, deduction optimisation, ABN/GST setup.',
      'solutions.s2.title': 'Small Business Essentials',
      'solutions.s2.body': 'For early-stage companies and partnerships ready to put proper books, payroll and tax compliance in place.',
      'solutions.s2.list': 'Bookkeeping, payroll, BAS/GST, annual accounts, company tax return, advisory check-ins.',
      'solutions.s3.title': 'Growing Business Advisory',
      'solutions.s3.body': 'For established SMEs that need a finance partner — not just a bookkeeper — to support pricing, cash flow and growth decisions.',
      'solutions.s3.list': 'Management reporting, budgeting, cash flow forecasts, tax planning, quarterly strategy sessions.',
      'solutions.s4.title': 'Structuring &amp; Restructuring',
      'solutions.s4.body': 'For owners considering a new entity, group structure, or restructure to support growth, asset protection or succession.',
      'solutions.s4.list': 'Entity reviews, trust &amp; company set-ups, tax-effective structuring, ATO/ASIC liaison.',
      'solutions.s5.title': 'Tax Planning &amp; Strategy',
      'solutions.s5.body': 'For business owners and high-income earners who want to minimise tax legitimately and plan beyond the financial year.',
      'solutions.s5.list': 'Year-end planning, super strategies, CGT planning, dividend &amp; trust distribution review.',
      'solutions.s6.title': 'Outsourced Finance Function',
      'solutions.s6.body': 'For businesses that want a dedicated finance team without the cost of hiring one in-house.',
      'solutions.s6.list': 'Day-to-day bookkeeping, payroll, supplier payments, monthly reporting, virtual CFO support.',
      'solutions.notsure.title': 'Not sure which fits?',
      'solutions.notsure.body': "Every business is different. We start with a short discovery call to understand your situation, then recommend the right solution — or shape one around you.",
      'solutions.notsure.btn': 'Request a Discovery Call',

      // Services
      'services.title': 'Services — SNS Biz',
      'services.header.h1': 'Services',
      'services.header.sub': 'A full-service tax and consulting practice — covering everything from compliance basics to commercial advice.',
      'services.tax.title': 'Tax Services',
      'services.tax.l1': 'Individual, sole trader, partnership, company &amp; trust tax returns',
      'services.tax.l2': 'Business Activity Statements (BAS) and Instalment Activity Statements (IAS)',
      'services.tax.l3': 'GST registration, lodgement and reviews',
      'services.tax.l4': 'Fringe Benefits Tax (FBT) returns and advice',
      'services.tax.l5': 'Capital Gains Tax (CGT) planning and reporting',
      'services.tax.l6': 'ATO correspondence, audit support and dispute resolution',
      'services.tax.l7': 'Year-end tax planning &amp; minimisation strategies',
      'services.acc.title': 'Accounting &amp; Bookkeeping',
      'services.acc.l1': 'Cloud bookkeeping setup and migration (Xero, MYOB, QuickBooks)',
      'services.acc.l2': 'Day-to-day bookkeeping, bank reconciliation and accounts payable/receivable',
      'services.acc.l3': 'Monthly &amp; quarterly management accounts',
      'services.acc.l4': 'Payroll processing, Single Touch Payroll (STP) and superannuation',
      'services.acc.l5': 'Year-end financial statements preparation',
      'services.acc.l6': 'Workpaper management and audit-ready records',
      'services.con.title': 'Business Consulting',
      'services.con.l1': 'Profit, pricing and margin analysis',
      'services.con.l2': 'Cash flow management, forecasting and scenario modelling',
      'services.con.l3': 'Budgeting and financial planning',
      'services.con.l4': 'Virtual CFO &amp; finance leadership support',
      'services.con.l5': 'Operational reviews and process improvement',
      'services.con.l6': 'Performance reporting and KPI dashboards',
      'services.set.title': 'Setup, Structuring &amp; Compliance',
      'services.set.l1': 'Company, trust and partnership setup',
      'services.set.l2': 'ABN, TFN, GST, PAYG and payroll registrations',
      'services.set.l3': 'ASIC compliance and annual reviews',
      'services.set.l4': 'Group structure design for asset protection and tax efficiency',
      'services.set.l5': 'Restructure planning and execution',
      'services.set.l6': 'Director duties &amp; governance support',
      'services.adv.title': 'Advisory for Owners &amp; Leaders',
      'services.adv.l1': 'Personal tax planning for business owners and high-income earners',
      'services.adv.l2': 'Superannuation and self-managed super fund (SMSF) coordination',
      'services.adv.l3': 'Succession, exit and sale-readiness planning',
      'services.adv.l4': 'Strategic reviews and quarterly business check-ins',
      'services.adv.l5': 'Buy/sell, due diligence and transaction support',
      'services.cta.title': 'Looking for something specific?',
      'services.cta.body': "Tell us what you need — we'll let you know how we can help.",
      'services.cta.btn': 'Get in Touch',

      // About
      'about.title': 'About Us — SNS Biz',
      'about.header.h1': 'About Us',
      'about.header.sub': 'A Sydney-based tax and consulting practice built around clarity, accountability and commercial outcomes.',
      'about.who.title': 'Who we are',
      'about.who.body': "SNS Biz is a boutique professional services firm that combines tax expertise with business consulting. We work with sole traders, family businesses, growing SMEs and established companies who want a trusted partner — not just a tax preparer.",
      'about.who.body2': "We believe small and medium businesses deserve advice of the same calibre offered to large corporates: rigorous, lateral, and grounded in commercial reality. That belief shapes how we hire, how we work, and how we charge.",
      'about.how.title': 'How we work',
      'about.how.body': "Every engagement starts with understanding the business. From there, we design a service mix that's right-sized to your stage and ambition — never bloated, never under-resourced.",
      'about.how.body2': "You'll deal directly with a senior consultant who knows your file, returns your call, and is accountable for outcomes. No call centres, no juniors learning on your business.",
      'about.values.title': 'Our values',
      'about.values.v1.title': 'Clarity',
      'about.values.v1.body': 'Plain English advice, real options, and clear next steps. We translate tax and finance into decisions you can act on.',
      'about.values.v2.title': 'Accountability',
      'about.values.v2.body': 'Registered, regulated and personally responsible. When we sign off, we stand behind it.',
      'about.values.v3.title': 'Commercial Sense',
      'about.values.v3.body': 'Compliance is the floor, not the ceiling. We connect numbers to strategy so the work pays for itself.',
      'about.values.v4.title': 'Long-term Partnership',
      'about.values.v4.body': 'Most of our clients stay with us for years. We invest in understanding your business so the advice gets sharper over time.',
      'about.lead.title': 'Leadership',
      'about.lead.sub': 'Direct access to senior expertise on every engagement.',
      'about.lead.role': 'Principal Consultant · Registered Tax Agent',
      'about.lead.bio1': 'Julia leads SNS Biz as Principal Consultant. As a Registered Tax Agent, she advises business owners and individuals on tax, structuring and growth strategy — combining technical rigour with a practical, commercial mindset.',
      'about.lead.bio2': 'Her work spans sole traders setting up for the first time through to established companies navigating restructure, succession or scale.',
      'about.cta.title': "Let's talk",
      'about.cta.body': "Whether it's a tax question, a structuring decision, or a business challenge — start with a conversation.",
      'about.cta.btn': 'Email Julia',
    },

    zh: {
      // Common
      'nav.home': '首页',
      'nav.solutions': '解决方案',
      'nav.services': '服务项目',
      'nav.about': '关于我们',
      'lang.toggle': 'English',
      'footer.about': '为澳大利亚中小企业提供税务、会计与商业咨询服务。',
      'footer.quicklinks': '快速链接',
      'footer.contact': '联系方式',
      'footer.legal': '© <span id="year"></span> SNS Biz · 注册税务代理 · 版权所有',

      // Home
      'home.title': 'SNS Biz — 税务与商业咨询',
      'home.hero.h1': '值得信赖的税务、会计与商业咨询服务',
      'home.hero.lede': 'SNS Biz 与澳大利亚中小企业紧密合作，简化税务事务、优化财务决策、助力业务增长。注册税务代理 · 值得信赖的顾问 · 本地团队。',
      'home.hero.btn1': '查看服务',
      'home.hero.btn2': '关于我们',
      'home.what.title': '我们的服务',
      'home.what.sub': '从税务申报到长期商业战略 — 助您保持合规、稳健盈利、为下一阶段做好准备。',
      'home.card1.title': '税务与合规',
      'home.card1.body': '由注册税务代理处理的税务申报、BAS、GST、FBT 及澳大利亚税务局往来事务 — 精准、及时、可应对审计。',
      'home.card2.title': '会计与记账',
      'home.card2.body': '基于云端的记账、薪酬和管理报表，让您实时清晰地掌握业务运营状况。',
      'home.card3.title': '商业咨询',
      'home.card3.body': '在定价、盈利能力、现金流与公司架构方面提供务实建议 — 将数字转化为推动业务前行的决策。',
      'home.card4.title': '设立与架构规划',
      'home.card4.body': '从第一天起选择合适的实体类型、登记适当的税种，并为资产保护与税务效率搭建合理架构。',
      'home.stats.years': '年行业经验',
      'home.stats.clients': '服务客户',
      'home.stats.agent': '注册税务代理',
      'home.stats.local': '本地团队',
      'home.builtfor.title': '为澳大利亚中小企业打造',
      'home.builtfor.body': 'SNS Biz 服务于希望获得直接、坦率建议的企业主与经营者。我们将税务实践的严谨性与咨询业的横向思维相结合 — 让我们的工作将合规与商业成果紧密连接。',
      'home.builtfor.body2': '无论您是个体经营者、成长型企业，还是正在规划下一阶段的发展，我们都将与您并肩工作，让账目清晰、税务合规、战略明朗。',
      'home.builtfor.btn': '查看解决方案',
      'home.why.title': '客户选择我们的理由',
      'home.why.li1': '<strong>注册税务代理</strong> — 负责任、受监管、获 ATO 认可。',
      'home.why.li2': '<strong>单一联络人</strong> — 您的首席顾问，全程负责。',
      'home.why.li3': '<strong>浅显易懂的建议</strong> — 选项清晰，没有行业术语。',
      'home.why.li4': '<strong>务实、商业化</strong> — 您可以立即采取行动的建议。',
      'home.cta.title': '准备好沟通了吗？',
      'home.cta.body': '预约一次免费咨询，谈谈您的税务、账务或业务规划。',
      'home.cta.btn': '发邮件给我们',

      // Solutions
      'solutions.title': '解决方案 — SNS Biz',
      'solutions.header.h1': '解决方案',
      'solutions.header.sub': '围绕您业务阶段与形态量身定制的打包方案 — 从个体经营者到规模化企业。',
      'solutions.section.title': '适合每一阶段的解决方案',
      'solutions.section.sub': '选择最适合您当前阶段的方案。我们将根据您的行业、架构与目标进行细节调整。',
      'solutions.includes': '包含：',
      'solutions.s1.title': '个体经营者与承包商',
      'solutions.s1.body': '适合自由职业者、承包商及个体经营者，无需庞大的后台支持，即可获得清晰的税务结果。',
      'solutions.s1.list': '年度税务申报、BAS 申报、扣除项优化、ABN/GST 设立。',
      'solutions.s2.title': '小型企业基础方案',
      'solutions.s2.body': '适合早期阶段的公司与合伙企业，准备建立完善的账务、薪酬与税务合规体系。',
      'solutions.s2.list': '记账、薪酬、BAS/GST、年度账目、公司税申报、定期咨询沟通。',
      'solutions.s3.title': '成长型企业咨询',
      'solutions.s3.body': '适合需要财务合作伙伴 — 而不仅是记账员 — 支持定价、现金流与成长决策的成熟中小企业。',
      'solutions.s3.list': '管理报告、预算编制、现金流预测、税务规划、季度战略会议。',
      'solutions.s4.title': '架构设立与重组',
      'solutions.s4.body': '适合考虑设立新实体、集团架构或重组以支持增长、资产保护或继承的企业主。',
      'solutions.s4.list': '实体审核、信托与公司设立、节税架构设计、ATO/ASIC 沟通。',
      'solutions.s5.title': '税务规划与策略',
      'solutions.s5.body': '适合希望合法降低税负、并制定财政年度之外计划的企业主与高收入者。',
      'solutions.s5.list': '年终规划、养老金策略、CGT 规划、股息与信托分配审查。',
      'solutions.s6.title': '外包财务部门',
      'solutions.s6.body': '适合希望拥有专属财务团队但不愿承担内部招聘成本的企业。',
      'solutions.s6.list': '日常记账、薪酬、供应商付款、月度报告、虚拟首席财务官支持。',
      'solutions.notsure.title': '不确定哪个方案适合您？',
      'solutions.notsure.body': '每家企业都不同。我们会先安排一次简短的沟通，了解您的情况，再推荐合适的方案 — 或为您量身打造一个。',
      'solutions.notsure.btn': '预约咨询通话',

      // Services
      'services.title': '服务项目 — SNS Biz',
      'services.header.h1': '服务项目',
      'services.header.sub': '全方位的税务与咨询服务 — 涵盖从基础合规到商业建议的方方面面。',
      'services.tax.title': '税务服务',
      'services.tax.l1': '个人、个体经营者、合伙企业、公司及信托税务申报',
      'services.tax.l2': '商业活动报表 (BAS) 与分期活动报表 (IAS)',
      'services.tax.l3': 'GST 注册、申报与审查',
      'services.tax.l4': '附加福利税 (FBT) 申报与咨询',
      'services.tax.l5': '资本利得税 (CGT) 规划与报告',
      'services.tax.l6': 'ATO 信件往来、审计支持与争议解决',
      'services.tax.l7': '年终税务规划与节税策略',
      'services.acc.title': '会计与记账',
      'services.acc.l1': '云端记账系统设置与迁移 (Xero, MYOB, QuickBooks)',
      'services.acc.l2': '日常记账、银行对账与应付应收账款',
      'services.acc.l3': '月度与季度管理账目',
      'services.acc.l4': '薪酬处理、单触式工资申报 (STP) 与养老金',
      'services.acc.l5': '年度财务报表编制',
      'services.acc.l6': '工作底稿管理与可应对审计的记录',
      'services.con.title': '商业咨询',
      'services.con.l1': '利润、定价与利润率分析',
      'services.con.l2': '现金流管理、预测与情景建模',
      'services.con.l3': '预算与财务规划',
      'services.con.l4': '虚拟首席财务官与财务领导支持',
      'services.con.l5': '运营审查与流程改进',
      'services.con.l6': '业绩报告与关键绩效指标仪表板',
      'services.set.title': '设立、架构与合规',
      'services.set.l1': '公司、信托与合伙企业设立',
      'services.set.l2': 'ABN、TFN、GST、PAYG 与薪酬注册',
      'services.set.l3': 'ASIC 合规与年度审查',
      'services.set.l4': '面向资产保护与税务效率的集团架构设计',
      'services.set.l5': '重组规划与执行',
      'services.set.l6': '董事职责与公司治理支持',
      'services.adv.title': '面向业主与高管的咨询',
      'services.adv.l1': '企业主与高收入人士的个人税务规划',
      'services.adv.l2': '养老金与自管养老金 (SMSF) 协调',
      'services.adv.l3': '继承、退出与出售前准备规划',
      'services.adv.l4': '战略审查与季度业务沟通',
      'services.adv.l5': '买卖、尽职调查与交易支持',
      'services.cta.title': '需要其他特定服务？',
      'services.cta.body': '告诉我们您的需求 — 我们会第一时间回复说明如何提供帮助。',
      'services.cta.btn': '联系我们',

      // About
      'about.title': '关于我们 — SNS Biz',
      'about.header.h1': '关于我们',
      'about.header.sub': '一家位于悉尼的税务与咨询事务所，秉承清晰、负责与商业成果导向。',
      'about.who.title': '我们是谁',
      'about.who.body': 'SNS Biz 是一家精品专业服务机构，将税务专业能力与商业咨询深度结合。我们的客户包括个体经营者、家族企业、成长型中小企业以及成熟公司 — 他们寻求的是值得信赖的合作伙伴，而不仅是税务申报员。',
      'about.who.body2': '我们相信，中小企业理应享有与大型企业同等水平的专业建议：严谨、横向思考、扎根商业现实。这一信念塑造了我们如何招聘、如何工作以及如何收费。',
      'about.how.title': '我们的工作方式',
      'about.how.body': '每一次合作都始于深入了解客户的业务。在此基础上，我们设计与您所处阶段和发展抱负相匹配的服务组合 — 既不冗余，也不简陋。',
      'about.how.body2': '您将直接与了解您档案的资深顾问对接，他们会回复您的电话，并对结果负责。没有客服中心，没有在您业务上练手的初级人员。',
      'about.values.title': '我们的价值观',
      'about.values.v1.title': '清晰',
      'about.values.v1.body': '浅显易懂的建议、真实的选项、明确的下一步。我们将税务与财务转化为您可以采取行动的决策。',
      'about.values.v2.title': '负责',
      'about.values.v2.body': '注册、受监管、个人负责。当我们签字时，我们对结果负责到底。',
      'about.values.v3.title': '商业意识',
      'about.values.v3.body': '合规是底线，而非天花板。我们将数字与战略相连，让我们的工作物超所值。',
      'about.values.v4.title': '长期合作',
      'about.values.v4.body': '我们的大多数客户与我们合作多年。我们投入精力深入了解您的业务，让建议随时间不断精准。',
      'about.lead.title': '团队介绍',
      'about.lead.sub': '每一次合作，都直接对接资深专业人员。',
      'about.lead.role': '首席顾问 · 注册税务代理',
      'about.lead.bio1': 'Julia 担任 SNS Biz 首席顾问。作为注册税务代理，她为企业主与个人提供税务、架构与增长策略方面的建议 — 将技术严谨性与务实、商业化的思维方式相结合。',
      'about.lead.bio2': '她的服务范围涵盖从首次设立的个体经营者，到正在经历重组、继承或扩张的成熟公司。',
      'about.cta.title': '与我们沟通',
      'about.cta.body': '无论是税务问题、架构决策，还是业务挑战 — 都从一次对话开始。',
      'about.cta.btn': '发邮件给 Julia',
    }
  };

  function getLang() {
    try {
      return localStorage.getItem('snsbiz_lang') || 'en';
    } catch (e) { return 'en'; }
  }

  function setStoredLang(lang) {
    try { localStorage.setItem('snsbiz_lang', lang); } catch (e) {}
  }

  function applyLang(lang) {
    if (!T[lang]) lang = 'en';
    document.documentElement.lang = (lang === 'zh' ? 'zh-CN' : 'en');
    document.body.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
    });
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      if (T[lang][key] !== undefined) {
        document.title = T[lang][key].replace(/<[^>]+>/g, '');
      }
    });

    // Refresh year placeholders if any (legal line gets re-rendered on lang switch)
    document.querySelectorAll('#year').forEach(s => { s.textContent = new Date().getFullYear(); });
  }

  function toggleLang() {
    const next = getLang() === 'en' ? 'zh' : 'en';
    setStoredLang(next);
    applyLang(next);
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(getLang());
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.addEventListener('click', function (e) { e.preventDefault(); toggleLang(); });
    });
  });
})();
