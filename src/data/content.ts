// src/data/content.ts

export const personalInfo = {
  name: '张少聪',
  subtitle: '我构建AI驱动的后端应用。',
  tagline: 'AI应用开发 / Java后端开发',
  description: '硕士在读的全栈开发者，专注于AI应用开发与Java后端工程。具备从0到1构建高可用分布式系统的全栈能力，熟练运用Claude Code等AI工具进行高效开发。目前在南京，随时可到岗。',
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
  role: '通用软件开发工程师',
  period: '2025.03 — 2025.09',
  responsibilities: [
    {
      title: '企业级 SOC 平台研发',
      detail: '参与企业级安全运营中心 SOC 平台的前端及部分 Web 后端开发，负责告警可视化看板、事件详情、事件溯源、自动化响应工单、客户管理等核心模块，实现安全告警的集中展示、查询分析与运营处置。',
    },
    {
      title: '告警数据链路建设',
      detail: '参与多源安全告警接入与处理链路开发，支持 DS 通过 Syslog 接入，TrustOne、TDA、AI XDR 通过 Kafka 接入；配合 LogStash、KafkaStream 完成告警清洗、客户信息补全、范式化、白名单过滤与聚合处理，并将告警数据写入 OpenSearch 和 MySQL。',
    },
    {
      title: 'AI 智能研判功能',
      detail: '开发安全事件 AI 研判相关功能，对接外部 LLM 研判服务，实现安全事件读取、研判调用、结果回写和状态展示，辅助安全分析师完成告警初筛与事件分类，降低重复人工研判成本。',
    },
    {
      title: '性能优化与稳定性提升',
      detail: '优化安全告警、聚合告警、安全事件和工作台工单的列表查询与详情展示，使平台关键页面加载耗时降低约 35%，告警从生成到展示的平均延迟缩短至 1 秒以内，支撑安全运营团队 7×24 小时威胁监控与快速响应。',
    },
  ],
  harnessNote: '🛠 全程使用 Claude Code 进行 AI 辅助全栈开发（Vibecoding），通过 AGENTS.md、自定义 Linter 等 Harness 工程实践保障代码质量。累计独立提交 99+ 个、新增代码约 60,000 行。',
};

export const socProjectDetail = {
  title: 'SOC 安全运营中心（项目深化）',
  period: '2026.05 — 2026.07（6周）',
  team: '3人团队 · 全栈开发',
  backendLines: '~32,500',
  frontendLines: '~27,400',
  totalLines: '~59,900',
  modules: [
    {
      name: '用户管理与认证系统',
      detail: '从设计到实现全栈完成：用户管理 CRUD、登录认证、用户-客户绑定与多角色权限。后端 ~4,800 行，前端 ~6,800 行。',
    },
    {
      name: '审计日志重构',
      detail: 'login-log → audit-log 全量重命名，customer + audit 服务迁移至 mgmt 模块。后端 ~2,100 行，前端 ~1,250 行。',
    },
    {
      name: '双层导航架构重构',
      detail: '纯前端架构级工作：单层侧栏 → 顶部一级 + 侧栏二级双层结构，路由重构，i18n 配套更新，品牌化设计。前端 ~1,300 行。',
    },
    {
      name: '告警展示系统',
      detail: '告警查询字段对齐、关键词/威胁对象搜索修复、告警详情抽屉多轮迭代、可配置威胁表覆盖范围、搜索 UX 优化。后端 ~400 行，前端 ~2,100 行。',
    },
    {
      name: '安全事件 & 工作台',
      detail: '投入最大的业务模块。工作台事件 API、状态模型重构、处置流程重构、通知编辑、OpenSearch 适配。后端 ~14,800 行，前端 ~10,800 行。',
    },
    {
      name: 'AI 研判模块',
      detail: 'LLM 调用移出事务 + 持久化短事务服务、共享 HttpClient、AI 研判与人工研判数据分离、提示词模板管理。后端 ~4,900 行，前端 ~2,000 行。',
    },
    {
      name: 'AI 批量研判',
      detail: '最复杂的独立功能。异步线程池 + 内存状态机 + 逐事件错误隔离 + 启动恢复钩子 + 租户隔离，前后端全栈，含设计文档→审查修复完整闭环。后端 ~3,100 行，前端 ~2,100 行。',
    },
    {
      name: '七鱼群推送',
      detail: '安全运营事件通告七鱼群推送——外部系统集成。后端 ~1,800 行，前端 ~340 行。',
    },
  ],
  techCoverage: [
    { dimension: '后端框架', tech: 'Spring Boot、JPA/Hibernate、MySQL DDL' },
    { dimension: '数据处理', tech: 'OpenSearch/Elasticsearch 查询优化、Kafka Streams' },
    { dimension: 'AI 集成', tech: 'LLM 调用集成、异步线程池编排、批量任务状态机' },
    { dimension: '前端框架', tech: 'React 18 + TypeScript、TanStack Query v5' },
    { dimension: 'UI 组件', tech: 'shadcn/ui、Turbo monorepo' },
    { dimension: '前端工程', tech: 'MSW Mock Server、i18n（zh-CN）、Vitest + RTL' },
    { dimension: '工程实践', tech: '设计文档 → 自审修正 → 实现计划 → 编码 → 审查修复 完整闭环' },
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
