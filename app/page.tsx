import { HeroPortrait } from "./HeroPortrait";

const capabilities = [
  {
    number: "01",
    title: "业务 SOP 梳理",
    text: "把散落在员工经验、聊天记录和表格里的做法，整理成可执行、可培训、可复盘的标准流程。",
  },
  {
    number: "02",
    title: "AI 场景诊断",
    text: "从真实业务瓶颈出发，判断哪些环节值得自动化，哪些决策仍应该保留给人。",
  },
  {
    number: "03",
    title: "新媒体增长系统",
    text: "打通调研、选题、生产、评论线索、数据复盘与下一轮内容的完整闭环。",
  },
  {
    number: "04",
    title: "Agent 与团队协作",
    text: "将工具、知识库与工作流组合成团队真正用得起来、能够持续运行的业务系统。",
  },
];

const services = [
  {
    tag: "从哪里开始",
    title: "AI 业务诊断",
    text: "梳理当前流程与重复工作，识别高价值场景，给出分阶段落地路线。",
    items: ["业务流程访谈", "场景优先级清单", "实施路线图"],
  },
  {
    tag: "让团队跑起来",
    title: "SOP 与 AI 改造",
    text: "把依赖个人经验的工作，改造成有标准、有模板、有 AI 辅助节点的协作流程。",
    items: ["流程与岗位 SOP", "模板及知识库", "人机协作规范"],
  },
  {
    tag: "从内容到线索",
    title: "新媒体 AI 工作台",
    text: "为酒店、民宿、文旅和本地企业搭建可持续的新媒体生产与复盘系统。",
    items: ["调研与选题系统", "内容生产流程", "线索识别与复盘"],
  },
  {
    tag: "一起做出结果",
    title: "企业培训与共创",
    text: "围绕企业自己的资料和真实问题，带团队完成一个可以立即使用的工作流。",
    items: ["场景化工作坊", "Agent 原型", "试运行与迭代"],
  },
];

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="#top" aria-label="返回首页">
          NOVA<span>·</span>
        </a>
        <div className="navLinks">
          <a href="#about">关于我</a>
          <a href="#practice">我的实践</a>
          <a href="#services">合作方式</a>
        </div>
        <a className="navCta" href="#contact">聊聊你的业务</a>
      </nav>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow">成都 · 实体行业 AI 落地与新媒体增长</p>
          <h1>
            让 AI 进入业务，
            <br />
            <em>而不只停在演示里。</em>
          </h1>
          <p className="heroLead">
            我是 Nova，尹阳阳阳儿。
            <br />
            我把复杂的 AI，变成企业能直接使用、团队能持续执行、结果可以复盘的业务系统。
          </p>
          <div className="heroActions">
            <a className="primaryButton" href="#contact">预约一次业务交流 <span>↗</span></a>
            <a className="textLink" href="#practice">看看我做过什么 <span>↓</span></a>
          </div>
          <div className="heroProof" aria-label="关键经历">
            <div><strong>200万+</strong><span>项目投资</span></div>
            <div><strong>0 → 200+</strong><span>民宿规模</span></div>
            <div><strong>2名全职</strong><span>轻量团队</span></div>
          </div>
        </div>
        <div className="heroVisual">
          <HeroPortrait />
          <p className="portraitNote">NOVA / YINYANG<br />CHENGDU, CHINA</p>
          <div className="orbitText" aria-hidden="true">BUSINESS · AI · GROWTH ·</div>
        </div>
      </section>

      <section className="manifesto" aria-label="个人主张">
        <p className="sectionKicker">我的判断</p>
        <blockquote>
          “真正有价值的 AI 落地，<br />
          不是多装一个工具，而是重新设计一次业务。”
        </blockquote>
        <p className="manifestoSide">
          懂经营 · 懂新媒体 · 懂实体行业<br />
          也能亲手把方案搭出来
        </p>
      </section>

      <section className="about" id="about">
        <div className="sectionHeader">
          <p className="sectionKicker">01 / ABOUT</p>
          <h2>先做过真实生意，<br />再谈 AI 怎么落地。</h2>
        </div>
        <div className="aboutGrid">
          <div className="aboutStory">
            <p>
              2023 年，我获得 <strong>200 万+投资</strong>，采用“2 名全职＋兼职团队”的轻量化模式，
              在一年内将民宿业务从 0 拓展至 200+。
            </p>
            <p>
              这段经历让我确信：规模化的核心不是不断增加人手，而是把业务经验沉淀成清晰、稳定、可复制的流程。
            </p>
            <p>
              2026 年，我开始深度应用 AI，将它系统性地用于市场调研、选题策划、内容生产、数据复盘与客户转化，
              并逐步搭建出自己的新媒体生产工作台。
            </p>
          </div>
          <div className="aboutCard">
            <span className="cardLabel">我最擅长的事</span>
            <p>从业务问题出发，拆流程、建系统、跑验证，直到团队真的用起来。</p>
            <div className="toolLine">GPT · Gemini · Codex<br />Claude Code · Workbuddy</div>
          </div>
        </div>
      </section>

      <section className="capabilities" aria-label="核心能力">
        {capabilities.map((item) => (
          <article className="capability" key={item.number}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="practice" id="practice">
        <div className="practiceIntro">
          <p className="sectionKicker light">02 / IN PRACTICE</p>
          <h2>我的第一批案例，<br />来自我自己的业务。</h2>
          <p>
            在为客户提供 AI 服务之前，我先把它放进自己的工作中持续运行。
            我不交付一份看起来完整、团队却无法使用的方案。
          </p>
        </div>
        <div className="practicePhoto mainPhoto">
          <img src="/nova-ai-talk.jpg" alt="Nova 在线下分享 AI 在业务中的应用" />
          <div className="photoCaption"><span>AI 实践分享</span><span>Chengdu / 2026</span></div>
        </div>
        <article className="practiceCase caseOne">
          <p className="caseNo">CASE 01</p>
          <h3>新媒体 AI 生产工作台</h3>
          <p>把行业调研、用户洞察、选题、内容生产、评论线索和数据复盘，组合成一套持续运行的内容系统。</p>
        </article>
        <article className="practiceCase caseTwo">
          <p className="caseNo">CASE 02</p>
          <h3>民宿业务从 0 到 200+</h3>
          <p>通过流程拆解、岗位分工和标准化 SOP，用轻量团队支撑业务规模化增长。</p>
        </article>
        <article className="practiceCase caseThree">
          <p className="caseNo">CASE 03</p>
          <h3>新媒体全链路 AI 应用</h3>
          <p>从单点内容生成，升级为“调研—生产—线索—复盘”的完整经营闭环。</p>
        </article>
      </section>

      <section className="services" id="services">
        <div className="sectionHeader serviceHeader">
          <p className="sectionKicker">03 / WORK WITH ME</p>
          <h2>不是卖工具，<br />而是一起解决业务问题。</h2>
          <p>优先服务酒店、民宿、文旅、本地生活与希望通过新媒体获客的实体企业。</p>
        </div>
        <div className="serviceGrid">
          {services.map((service, index) => (
            <article className="serviceCard" key={service.title}>
              <div className="serviceTop"><span>{service.tag}</span><b>0{index + 1}</b></div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <ul>
                {service.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="method">
        <div className="methodImage">
          <img src="/nova-speaking-stage.jpg" alt="Nova 在现场进行业务分享" />
        </div>
        <div className="methodCopy">
          <p className="sectionKicker">04 / HOW I WORK</p>
          <h2>从一个真实问题开始。</h2>
          <ol>
            <li><span>01</span><div><strong>业务诊断</strong><p>理解行业、团队与当前瓶颈</p></div></li>
            <li><span>02</span><div><strong>流程拆解</strong><p>还原任务、角色、数据与决策点</p></div></li>
            <li><span>03</span><div><strong>场景筛选</strong><p>找到最值得 AI 介入的位置</p></div></li>
            <li><span>04</span><div><strong>原型搭建</strong><p>做出可使用的工作流或 Agent</p></div></li>
            <li><span>05</span><div><strong>试运行与复盘</strong><p>让团队使用，再根据结果迭代</p></div></li>
          </ol>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contactCopy">
          <p className="sectionKicker light">LET&apos;S TALK</p>
          <h2>说说你最耗时间的<br />那件工作。</h2>
          <p>
            如果你正在思考企业应该如何使用 AI，欢迎简单告诉我你的行业、团队规模和当前最想解决的问题。
          </p>
          <div className="contactMeta">
            <span>NOVA · 尹阳阳阳儿</span>
            <span>四川 · 成都</span>
          </div>
        </div>
        <div className="qrCard">
          <img src="/nova-wechat.jpg" alt="添加 Nova 微信的二维码" />
          <p>扫码添加微信<br /><span>备注「AI 业务交流」</span></p>
        </div>
      </section>

      <footer>
        <a className="brand footerBrand" href="#top">NOVA<span>·</span></a>
        <p>把复杂的 AI，变成能持续运行的业务系统。</p>
        <a href="#top">回到顶部 ↑</a>
      </footer>
    </main>
  );
}
