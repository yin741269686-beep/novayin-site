import { ExperienceEffects } from "./ExperienceEffects";
import { HeroPortrait } from "./HeroPortrait";

const cases = [
  {
    number: "01",
    title: "新媒体 AI 生产工作台",
    text: "把市场调研、选题策划、内容生产、评论线索与数据复盘，组合成一套持续运行的内容系统。",
    meta: "AI 实践 · 内容增长",
  },
  {
    number: "02",
    title: "民宿业务从 0 到 200+",
    text: "通过流程拆解、岗位分工与标准化 SOP，用 2 名全职加兼职团队支撑业务规模化增长。",
    meta: "实体经营 · SOP",
  },
  {
    number: "03",
    title: "新媒体全链路 AI 应用",
    text: "从单点内容生成，升级为调研、生产、获客、转化与复盘的完整经营闭环。",
    meta: "新媒体 · 获客",
  },
];

const services = [
  ["AI 业务诊断", "找到真正值得 AI 介入的业务环节"],
  ["SOP 与 AI 改造", "把个人经验变成团队可执行的流程"],
  ["新媒体 AI 工作台", "打通内容生产、线索识别与数据复盘"],
  ["企业培训与共创", "围绕企业真实资料做出可用 Agent 原型"],
];

const steps = [
  ["01", "业务诊断", "理解行业、团队与当前瓶颈"],
  ["02", "流程拆解", "还原任务、角色、数据与决策点"],
  ["03", "场景筛选", "找到投入产出比最高的位置"],
  ["04", "原型搭建", "做出可以使用的工作流或 Agent"],
  ["05", "试运行与复盘", "让团队使用，再根据结果迭代"],
];

export default function Home() {
  return (
    <main>
      <ExperienceEffects />

      <nav className="nav" aria-label="主导航">
        <a className="brand" href="#top" aria-label="返回首页">Nova</a>
        <div className="navLinks">
          <a data-nav="about" href="#about">ABOUT</a><i>·</i>
          <a data-nav="practice" href="#practice">PRACTICE</a><i>·</i>
          <a data-nav="services" href="#services">SERVICE</a><i>·</i>
          <a data-nav="contact" href="#contact">CONTACT</a>
        </div>
        <p className="navStat">CHENGDU · CN</p>
      </nav>

      <div className="pageRail" aria-hidden="true"><i /><i /><i /></div>

      <section className="hero pageSection" id="top">
        <div className="heroCopy">
          <h1 data-reveal>Nova</h1>
          <p className="heroKicker" data-reveal><b /> AI BUSINESS × NEW MEDIA</p>
          <div className="heroLower">
            <p className="heroLead" data-reveal>
              让 AI 进入真实业务<br />而不只停在演示里
            </p>
            <div className="heroActions" data-reveal>
              <a className="outlineButton" href="#practice">查看实践 <span>→</span></a>
              <a className="outlineButton" href="#contact">联系我 <span>→</span></a>
            </div>
          </div>
        </div>
        <div className="heroVisual">
          <span className="cross crossTop" aria-hidden="true" />
          <HeroPortrait />
          <span className="cross crossBottom" aria-hidden="true" />
          <p className="portraitNote">NOVA / YINYANG<br />CHENGDU, CHINA</p>
        </div>
      </section>

      <section className="about pageSection" id="about">
        <div className="aboutCopy">
          <h2 data-reveal>About me</h2>
          <div className="aboutBio" data-reveal>
            <p>我是 Nova，尹阳阳阳儿，坐标四川成都。</p>
            <p>做过真实生意，也亲手把 AI 放进业务里跑。</p>
            <p>擅长业务 SOP、AI 提效与实体行业的新媒体获客。</p>
          </div>
        </div>

        <div className="blueprint" data-reveal>
          <span className="blueprintCode">AI BUSINESS / BUILDER</span>
          <span className="blueprintId">ID // NOVA</span>
          <img src="/nova-workshop.jpg" alt="Nova 在 AI 工作坊现场分享" />
          <div className="blueprintLeft">
            <b>SPEC. 001</b><br />
            FOCUS : SOP &amp; AI<br />
            TOPIC : GROWTH<br />
            FORMAT : WORKFLOW<br />
            VALUE : DELIVERY
          </div>
          <div className="blueprintRight">
            <b>EXPERIENCE</b><br />
            BUSINESS<br />
            CONTENT<br />
            AGENT<br />
            EST. 2023
          </div>
          <span className="blueprintCoord">N 30° 34′ · E 104° 04′</span>
        </div>

        <div className="capabilitySignals" data-reveal>
          <div><b>梳</b><span>SOP</span></div><i />
          <div><b>提</b><span>AI EFFICIENCY</span></div><i />
          <div><b>获</b><span>GROWTH</span></div>
        </div>

        <div className="signalPanel" data-reveal>
          <div className="signalHead"><h3>业务实践信号台</h3><span>LIVE / READY</span></div>
          <div className="signalRows">
            <div><span>01</span><b>200万+</b><em>项目投资</em><i>LIVE</i></div>
            <div><span>02</span><b>0 → 200+</b><em>民宿规模</em><i>LIVE</i></div>
            <div><span>03</span><b>2名全职</b><em>轻量团队</em><i>LIVE</i></div>
            <div><span>04</span><b>全链路</b><em>新媒体 AI 工作台</em><i>READY</i></div>
          </div>
        </div>
      </section>

      <section className="practice pageSection" id="practice">
        <header className="practiceHead">
          <h2 data-reveal>Practice</h2>
          <div className="practiceCats" data-reveal>
            <span>做 — DO</span>
            <p><b>做</b><i>·</i><span>讲 <small>LIVE</small></span><i>·</i><span>建 <small>NOW</small></span></p>
          </div>
        </header>

        <div className="caseGrid">
          <article className="featuredCase" data-reveal>
            <div className="featuredImage"><img src="/nova-ai-talk.jpg" alt="Nova 分享 AI 在业务中的应用" /></div>
            <div className="featuredCopy">
              <span>01</span>
              <h3>把 AI 当同事，<br />不是当玩具</h3>
              <p>从真实业务问题出发，先拆流程，再选工具，最后把结果做成团队能持续使用的系统。</p>
              <em>AI 落地 · 企业应用 · 2026</em>
            </div>
          </article>

          <div className="caseList">
            {cases.map((item) => (
              <article className="caseRow" data-reveal key={item.number}>
                <span>{item.number}</span>
                <div><h3>{item.title}</h3><p>{item.text}</p><em>{item.meta}</em></div>
                <b>→</b>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="services pageSection darkSection" id="services">
        <div className="cinema" data-reveal>
          <div className="cinemaBar"><span><i /> REC · <b data-rec-time>00:00:00</b></span><span>FIELD.01 · 实战中</span></div>
          <img src="/nova-speaking-stage.jpg" alt="Nova 在活动现场进行业务分享" />
          <div className="cinemaTitle"><h3>让 AI 真正在业务里跑起来</h3><p>从一次真实问题开始</p></div>
          <div className="cinemaPlayer"><b>▶</b><span>00:00</span><i><b /></i><em>0%</em></div>
        </div>

        <div className="serviceFoot">
          <div data-reveal><p>服 — SERVICE</p><h2>Service</h2></div>
          <div className="serviceList" data-reveal>
            {services.map((item, index) => (
              <div key={item[0]}><span>0{index + 1}</span><p><b>{item[0]}</b><em>{item[1]}</em></p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="method pageSection" id="method">
        <div className="methodCopy" data-reveal>
          <p>建 — BUILD</p>
          <h2>Deliver</h2>
          <span><i /> 从诊断到交付 · 一起跑通</span>
          <p className="methodIntro">我不交付一份看起来完整、团队却无法使用的方案。每次合作都以真实资料、实际流程和可验证结果为起点。</p>
        </div>

        <div className="terminal" data-build data-reveal>
          <div className="terminalTop"><i /><i /><i /></div>
          <pre><code data-typed>$ nova build --for-real</code><b className="caret" /></pre>
          <div className="terminalProgress"><span>v1.0.0 · <b data-compile-label>waiting...</b></span><em data-progress-num>0%</em><i><b data-progress-bar /></i></div>
        </div>

        <ol className="methodSteps" data-reveal>
          {steps.map((step) => (
            <li key={step[0]}><span>{step[0]}</span><p><b>{step[1]}</b><em>{step[2]}</em></p></li>
          ))}
        </ol>
      </section>

      <section className="contact pageSection" id="contact">
        <div className="contactCenter">
          <p data-reveal><i /> GET IN TOUCH / 联系 <i /></p>
          <h2 data-reveal>Let’s talk.</h2>
          <h3 data-reveal>说说你最耗时间的那件工作。</h3>
          <span data-reveal><i /> 当前开放合作 · Available</span>
        </div>

        <div className="marquee" aria-hidden="true"><div>AI 落地 · 酒店民宿 · 新媒体增长 · 业务 SOP · Agent · 企业应用 · AI 落地 · 酒店民宿 · 新媒体增长 · 业务 SOP · Agent · 企业应用 ·</div></div>

        <div className="contactBar" data-reveal>
          <div className="contactInfo"><span>NAME</span><b>Nova · 尹阳阳阳儿</b></div>
          <div className="contactInfo"><span>LOCATION</span><b>四川 · 成都</b></div>
          <div className="wechatBox"><img src="/nova-wechat.jpg" alt="添加 Nova 微信的二维码" /><p>微信 / WeChat<br /><span>备注「AI 业务交流」</span></p></div>
        </div>

        <footer><span>© 2026 Nova</span><p>AI BUSINESS × NEW MEDIA</p><a href="#top">回到顶部 ↑</a></footer>
      </section>
    </main>
  );
}
