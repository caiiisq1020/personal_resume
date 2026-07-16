// src/data/content.ts

export const personalInfo = {
  name: '张少聪',
  subtitle: '我构建AI驱动的后端应用。',
  tagline: 'AI应用开发 / Java后端开发',
  description: '南京邮电大学电子信息专业硕士，专注于AI应用开发与Java后端工程，具备从0到1构建高可用分布式系统的全栈能力。持续探索Harness Engineering，熟练运用Claude Code/Codex等AI工具进行工程化实践，实现高效开发。目前在江苏南京，户籍湖北。',
  email: '18727967108@163.com',
  phone: '18727967108',
  location: '江苏南京',
};

export const skillCategories = [
  {
    name: 'AI 应用开发',
    tags: [
      'LangChain', 'LangChain4j', 'RAG', 'Function Calling', 'MCP',
      'Memory', '流式输出', 'RAGFlow', 'Coze', 'Dify',
      '提示词工程', 'WebFlux', 'Pinecone',
    ],
  },
  {
    name: 'AI 工程化 & Harness Engineering',
    tags: [
      'Claude Code', 'Codex', 'AGENTS.md', '上下文管理',
      '分层文档', 'Agent 编排', 'Harness 六层架构',
      '自定义 Linter', '验证闭环', 'MCP 工具集成',
      'Agent Skills', 'Vibecoding',
    ],
  },
  {
    name: '后端开发',
    tags: [
      'Java', 'Spring Boot', 'MyBatis-Plus',
      'Spring Cloud Alibaba', 'Nacos', 'Sentinel',
      'OpenFeign', 'Gateway', 'Kafka Streams',
      'JVM', '并发编程', 'Python',
    ],
  },
  {
    name: '数据存储 & 中间件',
    tags: [
      'MySQL', 'Redis', 'Redisson', 'MongoDB',
      'Elasticsearch', 'OpenSearch', 'Docker',
      'RabbitMQ', 'Canal', 'XXL-JOB',
      'CompletableFuture', 'Kubernetes', 'Helm',
    ],
  },
  {
    name: '开发工具',
    tags: [
      'Claude Code', 'Cursor', 'Git', 'Linux',
      'VS Code', 'MSW', 'Vitest',
      'React Testing Library', 'i18n',
    ],
  },
];

export const internship = {
  company: '亚信安全科技股份有限公司',
  department: 'SOC 安全运营中心',
  role: '全栈开发实习生',
  period: '2026.06 — 2026.07',
  team: '2 人团队 · 全栈业务功能开发',
  totalLines: '~60,000',
  background:
    'SOC（安全运营中心）为 TrustOne、TDA、DS、AIXDR 四类安全产品提供告警与安全事件的统一运维平台。核心链路：多源告警接入 → Kafka Streams 两阶段范式化+聚合 → OpenSearch 存储 → 安全事件规则引擎匹配 → AI 研判闭环 → 工作台处置。',
  responsibilities: [
    {
      title: '用户管理与认证系统',
      tag: '全栈',
      detail: '独立完成从设计到实现的全栈闭环。设计规格+实施计划、用户 CRUD+登录认证（OTP 二次验证）、用户-客户多对多绑定、多角色权限模型。后端 ~4,800 行，前端 ~6,800 行。',
    },
    {
      title: '工作台 & 安全事件模块',
      tag: '全栈',
      detail: '投入最大的业务模块，覆盖告警到安全事件的端到端处置流程。工作台事件 API（列表/统计/筛选/排序）、状态模型多轮重构（pendingJudgement → ai_judgement 字段分离）、处置流程重构、通知编辑、OpenSearch 适配。后端 ~14,800 行，前端 ~10,800 行。',
    },
    {
      title: 'AI 研判系统',
      tag: '全栈',
      detail: 'LLM 集成+异步任务编排。LLM 调用从事务中解耦、共享 HttpClient 连接池、从原始告警 payload 构建 alert_info 为 LLM 提供上下文、AI 研判与人工研判数据分离、提示词模板管理。后端 ~4,900 行，前端 ~2,000 行。',
    },
    {
      title: 'AI 批量研判',
      tag: '全栈',
      detail: '项目中最复杂的独立功能，完整的设计→实现→审查闭环。异步线程池（并发度3）+ 内存状态机 + 逐事件错误隔离 + 原子计数 + 启动恢复钩子 + 租户隔离 + 事务后派发（TransactionSynchronizationManager）。审查修复覆盖异步边界、JPQL原子更新、N+1查询优化等。后端 14 提交 ~3,100 行，前端 12 提交 ~2,100 行。',
    },
    {
      title: '七鱼群推送集成',
      tag: '全栈',
      detail: '安全事件通告通过七鱼 SDK 转发至企业微信群——外部系统集成。设计文档+实施计划+完整编码实现，前端群推送配置页+管理员权限过滤。后端 ~1,800 行，前端 ~340 行。',
    },
    {
      title: '审计日志重构 + 双层导航架构',
      tag: '全栈/前端',
      detail: '审计日志 login-log → audit-log 全量重命名重构，服务迁移至 mgmt 模块。导航从单层侧栏重构为"顶部一级 + 侧栏二级"双层结构，TopNav + Sidebar 动态二级渲染，MDR 品牌化，i18n 配套更新。',
    },
  ],
  harnessEngineering: {
    title: 'AI 辅助开发体系搭建（Harness 工程实践）',
    description: '作为团队中推动 AI 辅助开发规范化的主要成员，搭建了完整的 Agent 知识库与开发流程体系。',
    items: [
      {
        title: 'AGENTS.md 三层规范体系',
        detail: '设计并维护分层加载的 Agent 规范架构：根 AGENTS.md（工作区边界、协作规则）、soc-backend/AGENTS.md（后端项目形态、验收要求）、soc-frontend/AGENTS.md（前端技术栈、按需加载细则）。',
      },
      {
        title: '.agents/ 结构化知识库（20+ 规范文件）',
        detail: '按领域组织的可复用开发规范。设计了 ROUTING.md 任务路由表定义 11 种任务原型及 Minimum 文件集+Optional 触发条件，按需加载避免上下文膨胀。涵盖语言规范、领域规范、流程规范、安全规范、契约规范五大类。',
      },
      {
        title: 'SDD（Superpowers Driven Development）开发流程',
        detail: '建立了 Spec → Self-Review → Plan → Implement → Code Review → Fixes 完整闭环。AI 批量研判功能完整跑通此闭环（后端 10 任务+前端 8 任务，30+ 次 review）。每轮提交后 Agent 代码审查生成 review diff，问题自动修复后 re-review 确认。',
      },
      {
        title: '前端自定义 Agent Skill（3 个）',
        detail: 'shadcn/ui Skill（组件使用规则+CLI命令+样式规范）、frontend-patterns Skill（React组件+数据加载+表单模式）、frontend-design-direction Skill（前端体验和视觉设计方向），提升 AI 生成代码一致性。',
      },
      {
        title: '权限与安全管控',
        detail: '结构化人工审核机制：pom.xml / package.json / SQL 迁移 / 环境变量 / auth/security 等高危变更需提交审核模板并等待人工确认。建立 Memory 记忆系统持久化项目特殊规则及常见错误为 Agent 长期记忆。',
      },
    ],
  },
  modules: [
    { name: '用户管理 & 认证', backend: '~4,800', frontend: '~6,800', total: '~11,600' },
    { name: '审计日志重构', backend: '~2,100', frontend: '~1,250', total: '~3,350' },
    { name: '导航架构重构', backend: '—', frontend: '~1,300', total: '~1,300' },
    { name: '告警展示', backend: '~400', frontend: '~2,100', total: '~2,500' },
    { name: '安全事件 & 工作台', backend: '~14,800', frontend: '~10,800', total: '~25,600' },
    { name: 'AI 研判模块', backend: '~4,900', frontend: '~2,000', total: '~6,900' },
    { name: 'AI 批量研判', backend: '~3,100', frontend: '~2,100', total: '~5,200' },
    { name: '七鱼群推送', backend: '~1,800', frontend: '~340', total: '~2,140' },
    { name: '系统配置 & UI', backend: '~570', frontend: '~750', total: '~1,320' },
  ],
  techCoverage: [
    { dimension: '后端', tech: 'Java 25、Spring Boot 4.0.6、Spring JPA/Hibernate、Maven 多模块、MySQL DDL' },
    { dimension: '数据处理', tech: 'OpenSearch/Elasticsearch 查询优化、Kafka Streams 范式化上下文' },
    { dimension: 'AI 集成', tech: 'LLM 调用集成（信立方）、异步线程池编排（@Async + ThreadPoolTaskExecutor）、批量任务内存状态机、事务后派发（TransactionSynchronizationManager）' },
    { dimension: '前端框架', tech: 'React 18 + TypeScript、TanStack Query v5（mutation+轮询）、shadcn/ui 组件库、Turbo monorepo' },
    { dimension: '前端工程', tech: 'MSW v2 Mock Server（固定 faker seed）、react-i18next 国际化、Vitest v4 + React Testing Library、react-hook-form + Zod' },
    { dimension: '部署', tech: 'Docker Compose 本地环境、Helm + Kubernetes（火山引擎）' },
    { dimension: '协作', tech: 'GitLab 代码托管、Agent 驱动代码审查（每轮提交后自动 review）' },
  ],
  learnings: [
    '全栈闭环能力：从数据库 DDL 到前端 UI 交互，独立完成 9 个功能模块的完整链路',
    '复杂异步系统设计：线程池配置、异步任务编排、事务边界处理、启动恢复、错误隔离等分布式系统关注点',
    'AI 辅助工程化：不仅用 AI 写代码，还搭建了完整的 Agent 知识库、任务路由表和开发流程规范',
    '代码审查意识：SDD 流程中养成了设计→实现→审查→修复的工作习惯，每个功能都经过多轮 review 验证后才合并',
  ],
};

export const projects = [
  {
    id: 'smart-healthcare',
    title: '基于智能体协作的智慧医疗服务平台',
    period: '2026.02 — 2026.04',
    category: 'AI应用开发',
    techs: ['LangChain4j', 'Qwen', 'RAG', 'Pinecone', 'Function Calling', 'WebFlux', 'Spring Cloud Alibaba', 'MongoDB', 'RabbitMQ'],
    highlights: [
      '基于 LangChain4j 集成阿里百炼 Qwen 大模型，通过 AIService 代理实现模型交互',
      '深度整合 RAG + Pinecone 向量数据库，为医院、科室等非结构化文档构建专业知识库',
      'Function Calling 自定义开发预约挂号、取消预约等业务工具，实现 NL→业务操作全链路闭环',
      'TokenWindowChatMemory 多轮记忆 + MongoDB 持久化，集成 WebFlux 流式输出（首字 <200ms）',
      'Spring Cloud Alibaba 微服务集群，涵盖用户、医院、订单等模块',
    ],
  },
  {
    id: 'coze-agents',
    title: '基于 Coze 平台的商业级 AI 智能体开发实践',
    period: '2025.12 — 2026.02',
    category: 'AI应用开发',
    techs: ['Coze', '工作流编排', '自定义插件', '剪映集成', '大模型'],
    highlights: [
      '独立完成 AI 旅行规划助手、跨境电商答疑助手、历史人物视频生成器等多个商业级智能体',
      '设计包含意图识别、路由分发、知识库检索、大模型生成、批处理及多插件联动的复杂工作流',
      '自定义插件实现敏感词过滤、格式转换等核心功能',
      '结合剪映插件生态，打通从文案生成到视频合成的全链路自动化',
    ],
  },
  {
    id: 'rag-knowledge-qa',
    title: '基于 RAGFlow 的多源知识库智能问答平台',
    period: '2025.10 — 2025.12',
    category: 'AI应用开发',
    techs: ['RAGFlow', 'LangChain', 'MCP', 'Qwen', 'MongoDB', 'Function Calling', '异步生成器'],
    highlights: [
      '基于 RAGFlow 构建多知识库空间，API 封装实现知识库创建、文档解析、向量化及聊天助手管理',
      '应用 LangChain Function Calling/MCP 技术，将三种问答模式封装为标准工具，LLM 自动路由分发',
      'MongoDB 持久化 ConversationBufferMemory，独立设计查询增强模块解决上下文遗忘',
      '全链路异步处理 + 异步生成器接口，JMeter 压测稳定支持 100+ 用户并发',
    ],
  },
  {
    id: 'audiobook-platform',
    title: '高并发有声读物服务平台',
    period: '2025.08 — 2025.10',
    category: '后端开发',
    techs: ['Spring Cloud Alibaba', '微信支付V3', 'Elasticsearch', 'Redis', 'Redisson', 'Canal', 'RabbitMQ', 'XXL-JOB'],
    highlights: [
      '基于 Spring Cloud Alibaba 构建微服务，独立完成专辑、声音、订单、支付等核心模块',
      '集成微信支付 V3 API，AOP + 自定义注解登录态校验，RabbitMQ 延迟消息自动取消未支付订单',
      'Elasticsearch 分词搜索 + 高亮 + 自动补全；Redis + Redisson 分布式锁 + 布隆过滤器多层缓存',
      '缓存架构将核心接口 QPS 从 500 提升至 8000；Canal 监听 binlog 准实时同步缓存',
      '自定义 SQL 优化排行榜（JOIN + TIMESTAMPDIFF）将接口响应 2200ms → 180ms（↑10倍）',
    ],
  },
  {
    id: 'ai-exam-system',
    title: 'AI 驱动的智能组卷与阅卷系统',
    period: '2025.06 — 2025.08',
    category: 'AI应用开发',
    techs: ['LangChain4j', 'Kimi', 'MinIO', 'Redis', 'Apache POI', '提示词工程'],
    highlights: [
      '基于 LangChain4j 集成 Kimi 大模型，精细化提示词工程驱动智能出题、自动组卷及语义级自动评分',
      '带重试机制的异步调用方案确保 AI 交互健壮性，内容生产效率提升 3 倍以上',
      'Redis ZSet 热门题目排行榜 + 缓存预热 + 优雅降级策略',
      'MinIO 统一文件存储，Apache POI "预览→校验→导入"两阶段流程 + @Transactional 事务一致性',
      '自定义 SQL 优化排行榜：N+1 查询 → 单次关联查询，响应 2200ms → 180ms',
    ],
  },
];

export const patent = {
  title: '一种传播环境反演认知的6G指纹定位模型智能重构方法',
  type: '中国发明专利',
  inventor: '第一发明人',
  applicationNumber: '2026108534550',
  applicationDate: '2026-06-12',
};

export const researchProject = {
  title: '国家自然科学基金项目（92367302）',
  subtitle: '基于新型体系架构全要素按需协同互联的工业互联网集成系统及验证',
  role: '参与后端核心业务模块开发，协助完成项目文档撰写与结题验收',
};

export const education = [
  {
    school: '南京邮电大学',
    degree: '硕士',
    major: '电子信息',
    tag: '双一流',
    period: '2024.09 — 至今',
  },
  {
    school: '成都理工大学',
    degree: '本科',
    major: '电子信息工程',
    tag: '双一流',
    period: '2020.09 — 2024.06',
  },
];

export const navLinks = [
  { label: '科研', path: '/research' },
  { label: '技能', path: '/skills' },
  { label: '实习', path: '/internship' },
  { label: '项目', path: '/projects' },
  { label: '简历', path: '/resume' },
];
