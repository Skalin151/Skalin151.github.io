/*==================== DYNAMIC I18N SYSTEM (EN / PT) ====================*/
const i18n = {
    currentLang: 'en',

    translations: {
        en: {
            // Navigation
            "nav.home": "Home",
            "nav.about": "About",
            "nav.skills": "Skills",
            "nav.services": "Services",
            "nav.portfolio": "Portfolio",
            "nav.contact": "Contact",

            // Hero / Home
            "home.greeting": "Hi! I'm João",
            "home.subtitle": "Fullstack & Systems Engineer",
            "home.description": "Building real-time web systems, high-concurrency applications, and self-hosted infrastructure.",
            "home.resumeBtn": "View Resume / CV",

            // About Me
            "about.title": "About Me",
            "about.subtitle": "My Background, Education & Engineering Focus",
            "about.role": "Fullstack & Systems Software Engineer",
            "about.bio": "Hi, I'm <strong>João Cruz (Skalin)</strong>, a Fullstack & Systems Software Engineer. I specialize in backend architecture, Node.js, TypeScript, real-time WebSocket communication, relational & NoSQL databases (PostgreSQL, MongoDB), containerized orchestration (Docker, Portainer, Kubernetes), CI/CD pipelines (GitHub Actions), and Linux sysadmin.<br><br>I am passionate about building resilient end-to-end systems—from real-time hospital bed tracking solutions and high-concurrency Discord bots to custom Linux desktop workflows (CachyOS + Hyprland) and 24/7 self-hosted infrastructure (ZimaOS). I maintain detailed engineering logs in Obsidian and actively contribute to open-source software.<br><br><em style=\"opacity: 0.9; font-size: 0.92rem;\"><strong>Creative Workstation & Hobbies:</strong> On my Windows workstation, I explore 3D modeling (Blender), CAD design, sound design (FL Studio), and video editing.</em>",
            "about.eduTitle": "Education & Qualifications",
            "about.degree": "B.Sc. in Computer Engineering",
            "about.period": "Computer Engineering • 2022 – 2026",
            "about.institution": "<strong>Instituto Politécnico de Viseu (IPV)</strong> — Escola Superior de Gestão e Tecnologia de Viseu (ESTGV)",
            "about.gpa": "<strong>Academic Standing:</strong> 13.8 / 20 GPA",
            "about.coursework": "<strong>Key Coursework:</strong> Software Engineering, Distributed Systems, Relational & NoSQL Databases, Computer Networks, Operating Systems, and Algorithms.",
            "about.licenseTitle": "Driving License",
            "about.licenseDesc": "Categories <strong>B</strong> (Passenger Cars) and <strong>B1</strong> (Quadricycles), with full vehicle mobility.",
            "about.availability": "Available to work in <strong>Viseu</strong> and <strong>Aveiro</strong>.",

            // Skills Section
            "skills.title": "Skills",
            "skills.subtitle": "Interactive Technical Arsenal • Click any tech to inspect",
            "skills.filterAll": "All Tech",
            "skills.filterWeb": "Fullstack & Web",
            "skills.filterSystems": "Systems & Linux",
            "skills.filterCloud": "Cloud & DevOps",
            "skills.filterData": "Databases",
            "skills.filterMobile": "Mobile & Games",
            "skills.filterCreative": "Creative & Hardware",
            "skills.dossierPrompt": "SYSTEM DOSSIER // TECHNICAL LOG",

            // Services Section
            "services.title": "Services & Solutions",
            "services.subtitle": "Specialized Engineering Deliverables & Architecture",
            "services.deliverablesLabel": "Key Deliverables",
            "services.stackLabel": "Tech Stack:",
            "services.viewSpecs": "Technical Specs",
            "services.viewCaseStudy": "Case Study",

            // Pillar 1: Fullstack & Real-Time
            "services.pillar1.tag": "WEB & REAL-TIME",
            "services.pillar1.title": "Real-Time Web & Resilient APIs",
            "services.pillar1.desc": "High-performance fullstack systems engineered for sub-second WebSocket updates, concurrent requests, and strict database integrity.",
            "services.pillar1.item1": "Real-time data streaming & live state synchronization (WebSockets, Supabase).",
            "services.pillar1.item2": "Scalable REST & GraphQL API architecture designed in Node.js & TypeScript.",
            "services.pillar1.item3": "Relational and NoSQL database modeling with query optimization (PostgreSQL, MongoDB).",
            "services.pillar1.item4": "Reactive, accessible frontend interfaces with modern component architectures.",

            // Pillar 2: Cloud Infrastructure & DevOps
            "services.pillar2.tag": "CLOUD & DEVOPS",
            "services.pillar2.title": "Cloud, DevOps & CI/CD Pipelines",
            "services.pillar2.desc": "Containerized fleet orchestration, declarative infrastructure, and zero-downtime deployment automation.",
            "services.pillar2.item1": "Container fleet orchestration and multi-node clusters with Docker, Portainer & Kubernetes.",
            "services.pillar2.item2": "Automated CI/CD pipelines (GitHub Actions) for linting, Jest testing & rolling builds.",
            "services.pillar2.item3": "Reverse proxy routing, rate-limiting, and automated Let's Encrypt SSL/TLS via Nginx.",
            "services.pillar2.item4": "Hybrid cloud environments bridging AWS, Azure services, and bare-metal nodes.",

            // Pillar 3: Linux Sysadmin & Homelab 24/7
            "services.pillar3.tag": "SYSTEMS & LINUX",
            "services.pillar3.title": "Linux Sysadmin & Homelab 24/7",
            "services.pillar3.desc": "Enterprise-grade Linux server management, encrypted zero-trust mesh networking, and hardened storage solutions.",
            "services.pillar3.item1": "24/7 self-hosted production homelab hosting 15+ isolated containerized services.",
            "services.pillar3.item2": "Zero-trust encrypted private networking with Tailscale mesh VPN & subnet routers.",
            "services.pillar3.item3": "Automated encrypted backup pipelines (Restic / Borg) with disaster recovery routines.",
            "services.pillar3.item4": "Linux desktop & server hardening (CachyOS, Hyprland, Systemd services, Bash automation).",

            // Pillar 4: Multiplatform & Software Engineering
            "services.pillar4.tag": "MOBILE & SOFTWARE",
            "services.pillar4.title": "Multiplatform Apps & Software Utilities",
            "services.pillar4.desc": "Cross-platform mobile applications, resilient open-source developer utilities, and 3D visual engineering.",
            "services.pillar4.item1": "Cross-platform mobile applications in Flutter integrated with cloud APIs and Firebase.",
            "services.pillar4.item2": "Fault-tolerant utility tools featuring API rate limiting, response caching, and Docker packaging.",
            "services.pillar4.item3": "High-concurrency bot automation managing atomic database operations and web dashboards.",
            "services.pillar4.item4": "3D spatial assets, vector graphics, and CAD design workflows (Blender, Figma design tokens).",

            // Services Modal 1
            "services.modal1.title": "Real-Time Web & Resilient APIs",
            "services.modal1.item1": "Web application architecture & responsive frontend development.",
            "services.modal1.item2": "RESTful & GraphQL API design using Node.js & TypeScript.",
            "services.modal1.item3": "Real-time data synchronization via WebSockets.",
            "services.modal1.item4": "Database schema design & query optimization (PostgreSQL, MongoDB).",
            "services.modal1.item5": "Frontend component modularity, state management, and accessibility standards.",

            // Services Modal 2
            "services.modal2.title": "Cloud, DevOps & CI/CD Pipelines",
            "services.modal2.item1": "Container fleet management & orchestration (Docker, Portainer, Kubernetes).",
            "services.modal2.item2": "Automated CI/CD pipelines (GitHub Actions) for container builds, automated testing & rolling deployments.",
            "services.modal2.item3": "Reverse proxy routing (Nginx) & automated Let's Encrypt SSL/TLS certificate management.",
            "services.modal2.item4": "Infrastructure as code, secrets management, and environmental isolation.",
            "services.modal2.item5": "Cloud provider integration with AWS (Lambda, API Gateway) and Azure.",

            // Services Modal 3
            "services.modal3.title": "Linux Sysadmin & Homelab 24/7",
            "services.modal3.item1": "24/7 dedicated homelab administration running ZimaOS & CasaOS.",
            "services.modal3.item2": "Tailscale mesh VPN configuration, subnet routing & secure exit-node deployment.",
            "services.modal3.item3": "Encrypted backup automation (Restic/Borg) with verified disaster restore tests.",
            "services.modal3.item4": "Linux workstation customization with CachyOS, Hyprland, Waybar & rofi.",
            "services.modal3.item5": "Systemd unit authoring, timer daemons, and automated bash maintenance scripts.",
            "services.modal3.item6": "Out-of-band remote hardware management & planned IP-KVM control bridge.",

            // Services Modal 4
            "services.modal4.title": "Multiplatform Apps & Software Utilities",
            "services.modal4.item1": "Cross-platform mobile application development with Flutter & Dart.",
            "services.modal4.item2": "State management, asynchronous reactive streams, and Firebase integration.",
            "services.modal4.item3": "Resilient API integration with rate-limiting backoff algorithms and cache layers.",
            "services.modal4.item4": "Atomic transaction management for high-concurrency bot systems (MongoDB / Node.js).",
            "services.modal4.item5": "3D visual design (Blender) and custom vector asset pipelines (Illustrator, Photoshop, Figma).",

            // Portfolio Section
            "portfolio.title": "Engineering Portfolio",
            "portfolio.subtitle": "Featured Systems & Case Studies",

            // Project Cards
            "portfolio.card7.badge": "Internship Case Study • Feb 2024 – Jul 2024",
            "portfolio.card7.title": "Viseu Hospital Bed Management",
            "portfolio.card7.desc": "<strong>Role: Fullstack Engineer (Team of 3)</strong><br>Real-time hospital bed & patient discharge monitoring system built with WebSockets, Node.js, Supabase, and Kubernetes across 6 departments.",

            "portfolio.card1.badge": "Production System • 2023 – Present",
            "portfolio.card1.title": "Discord Bot & Dashboard",
            "portfolio.card1.desc": "<strong>Role: Solo Developer</strong><br>Production community bot serving 2,500+ users across 15+ servers with MongoDB atomic concurrency handling, Express dashboard, and comprehensive Jest unit test suites for economy & item systems.",

            "portfolio.card4.badge": "Academic Project • Sep 2023 – Dec 2023",
            "portfolio.card4.title": "Softskills Mobile App",
            "portfolio.card4.desc": "<strong>Role: Mobile & API Developer (Team of 4)</strong><br>Flutter educational course platform featuring assignment submissions, interactive quizzes, and community forums backed by Node.js & Firebase.",

            "portfolio.card5.badge": "Open Source Tool • 2024",
            "portfolio.card5.title": "Steam Family Library Tool",
            "portfolio.card5.desc": "<strong>Role: Solo Developer</strong><br>JavaScript + Docker tool fetching and aggregating Steam family game libraries with API rate limiting, response caching, and error resilience.",

            "portfolio.card6.badge": "Infrastructure • Ongoing",
            "portfolio.card6.title": "Self-Hosted Homelab",
            "portfolio.card6.desc": "<strong>Role: Systems Administrator</strong><br>24/7 ZimaOS server hosting 15+ Docker microservices via Portainer, Jellyfin, Home Assistant, zero-trust Tailscale exit node, and verified Restic backups.",

            "portfolio.card8.badge": "Systems & Workflow • Ongoing",
            "portfolio.card8.title": "Linux & Systems Environment",
            "portfolio.card8.desc": "<strong>Role: Linux Power User & Sysadmin</strong><br>CachyOS + Hyprland tiling desktop workflow, systemd service automation, SSH hardening, modular Bash tooling, and Obsidian systems vault.",

            "portfolio.card2.badge": "Open Source • Ongoing",
            "portfolio.card2.title": "GitHub & Pinned Repos",
            "portfolio.card2.desc": "<strong>Role: Developer & Maintainer</strong><br>Curated codebase repositories featuring algorithm implementations, automation scripts, and documented open-source side projects.",

            // Contact
            "contact.title": "Contact Me",
            "contact.subtitle": "Get in touch",
            "contact.nameLabel": "Name",
            "contact.emailLabel": "Email",
            "contact.projectLabel": "Project",
            "contact.messageLabel": "Message",
            "contact.sendBtn": "Send Message",

            // Footer
            "footer.subtitle": "Fullstack Developer",
            "footer.linksTitle": "Links",
            "footer.socialsTitle": "Socials",
            "footer.copy": "@Skalin. All rights reserved"
        },

        pt: {
            // Navigation
            "nav.home": "Início",
            "nav.about": "Sobre",
            "nav.skills": "Skills",
            "nav.services": "Serviços",
            "nav.portfolio": "Portfólio",
            "nav.contact": "Contacto",

            // Hero / Home
            "home.greeting": "Olá! Sou o João",
            "home.subtitle": "Engenheiro Fullstack & Sistemas",
            "home.description": "Desenvolvimento de sistemas web em tempo real, aplicações de alta concorrência e infraestrutura self-hosted.",
            "home.resumeBtn": "Ver Currículo / CV",

            // About Me
            "about.title": "Sobre Mim",
            "about.subtitle": "Percurso, Formação Académica e Foco de Engenharia",
            "about.role": "Engenheiro de Software Fullstack & Sistemas",
            "about.bio": "Olá, sou o <strong>João Cruz (Skalin)</strong>, Engenheiro de Software Fullstack & Sistemas. Especializo-me em arquitetura de backend, Node.js, TypeScript, comunicação WebSockets em tempo real, bases de dados relacionais e NoSQL (PostgreSQL, MongoDB), orquestração em contentores (Docker, Portainer, Kubernetes), pipelines de CI/CD (GitHub Actions) e administração de sistemas Linux.<br><br>Sou apaixonado por construir sistemas ponta-a-ponta resilientes — desde monitorização hospitalar em tempo real e bots de Discord de alta concorrência até ambientes Linux customizados (CachyOS + Hyprland) e infraestrutura self-hosted 24/7 (ZimaOS). Mantenho registos detalhados de engenharia no Obsidian e contribuo ativamente para open-source.<br><br><em style=\"opacity: 0.9; font-size: 0.92rem;\"><strong>Workstation Criativa & Hobbies:</strong> No meu computador Windows, exploro modelação 3D (Blender), desenho CAD, produção áudio (FL Studio) e edição de vídeo.</em>",
            "about.eduTitle": "Formação & Qualificações",
            "about.degree": "Licenciatura em Engenharia Informática",
            "about.period": "Engenharia Informática • 2022 – 2026",
            "about.institution": "<strong>Instituto Politécnico de Viseu (IPV)</strong> — Escola Superior de Gestão e Tecnologia de Viseu (ESTGV)",
            "about.gpa": "<strong>Média Atual:</strong> 13.8 / 20 Valores",
            "about.coursework": "<strong>Disciplinas Relevantes:</strong> Engenharia de Software, Sistemas Distribuídos, Bases de Dados Relacionais & NoSQL, Redes de Computadores, Sistemas Operativos e Algoritmos.",
            "about.licenseTitle": "Carta de Condução",
            "about.licenseDesc": "Categorias <strong>B</strong> (Ligeiros) e <strong>B1</strong> (Quadriciclos), com total mobilidade e viatura própria.",
            "about.availability": "Disponibilidade geográfica para <strong>Viseu</strong> e <strong>Aveiro</strong>.",

            // Skills Section
            "skills.title": "Competências",
            "skills.subtitle": "Arsenal Técnico Interativo • Clica em qualquer tecnologia para inspecionar",
            "skills.filterAll": "Todas",
            "skills.filterWeb": "Fullstack & Web",
            "skills.filterSystems": "Sistemas & Linux",
            "skills.filterCloud": "Cloud & DevOps",
            "skills.filterData": "Bases de Dados",
            "skills.filterMobile": "Mobile & Jogos",
            "skills.filterCreative": "Criativo & Hardware",
            "skills.dossierPrompt": "DOSSIÊ TÉCNICO // REGISTO DE SISTEMA",

            // Services Section
            "services.title": "Serviços & Soluções",
            "services.subtitle": "Soluções de Engenharia Especializadas & Entregáveis",
            "services.deliverablesLabel": "Entregáveis Principais",
            "services.stackLabel": "Tecnologias:",
            "services.viewSpecs": "Especificações Técnicas",
            "services.viewCaseStudy": "Caso de Estudo",

            // Pillar 1: Fullstack & Real-Time
            "services.pillar1.tag": "WEB & TEMPO REAL",
            "services.pillar1.title": "Aplicações Web em Tempo Real & APIs Resilientes",
            "services.pillar1.desc": "Sistemas fullstack de alta performance desenvolvidos para sincronização em tempo real via WebSockets, concorrência e integridade de dados.",
            "services.pillar1.item1": "Streaming de dados bidirecional em tempo real e monitorização de estados (WebSockets, Supabase).",
            "services.pillar1.item2": "Arquitetura de APIs REST e GraphQL escaláveis desenvolvidas em Node.js e TypeScript.",
            "services.pillar1.item3": "Modelação de esquemas relacionais e NoSQL com otimização de consultas (PostgreSQL, MongoDB).",
            "services.pillar1.item4": "Interfaces front-end responsivas e reativas com arquiteturas modernas de componentes.",

            // Pillar 2: Cloud Infrastructure & DevOps
            "services.pillar2.tag": "CLOUD & DEVOPS",
            "services.pillar2.title": "DevOps, Cloud & Automação CI/CD",
            "services.pillar2.desc": "Orquestração de frotas de contentores, infraestrutura declarativa e automação de deploys contínuos sem downtime.",
            "services.pillar2.item1": "Orquestração de frotas de contentores e clusters multi-node com Docker, Portainer e Kubernetes.",
            "services.pillar2.item2": "Pipelines de CI/CD (GitHub Actions) para linting, compilação de imagens e testes unitários Jest.",
            "services.pillar2.item3": "Roteamento de proxies reversos (Nginx), rate-limiting e renovação automática de certificados SSL/TLS.",
            "services.pillar2.item4": "Configurações de nuvem híbrida interligando serviços na AWS, Azure e instâncias bare-metal.",

            // Pillar 3: Linux Sysadmin & Homelab 24/7
            "services.pillar3.tag": "SISTEMAS & LINUX",
            "services.pillar3.title": "Administração Linux & Infraestrutura Self-Hosted 24/7",
            "services.pillar3.desc": "Administração avançada de servidores Linux, redes mesh cifradas zero-trust e infraestrutura self-hosted resiliente.",
            "services.pillar3.item1": "Servidor homelab 24/7 em produção com mais de 15 serviços contentorizados isolados.",
            "services.pillar3.item2": "Redes privadas seguras zero-trust com Tailscale mesh VPN e roteamento de subredes.",
            "services.pillar3.item3": "Pipelines de backups cifrados (Restic/Borg) com rotinas validadas de recuperação de desastres.",
            "services.pillar3.item4": "Hardening de ambientes Linux (CachyOS, Hyprland, serviços systemd e scripts Bash de automação).",

            // Pillar 4: Multiplatform & Software Engineering
            "services.pillar4.tag": "MOBILE & ENGENHARIA",
            "services.pillar4.title": "Apps Multiplataforma & Engenharia de Software",
            "services.pillar4.desc": "Aplicações móveis multiplataforma, ferramentas open-source resilientes com rate-limiting e engenharia visual 3D.",
            "services.pillar4.item1": "Aplicações móveis multiplataforma em Flutter integradas com APIs em nuvem e Firebase.",
            "services.pillar4.item2": "Ferramentas utilitárias com rate limiting de API, cache de respostas e empacotamento em Docker.",
            "services.pillar4.item3": "Bots de automação de alta concorrência com controlo de transações atómicas e dashboards web.",
            "services.pillar4.item4": "Modelação e renderização 3D, grafismos vetoriais e integração de design tokens do Figma.",

            // Services Modal 1
            "services.modal1.title": "Aplicações Web em Tempo Real & APIs Resilientes",
            "services.modal1.item1": "Arquitetura de aplicações web e desenvolvimento de frontends responsivos.",
            "services.modal1.item2": "Conceção de APIs RESTful e GraphQL utilizando Node.js e TypeScript.",
            "services.modal1.item3": "Sincronização de dados em tempo real através de WebSockets.",
            "services.modal1.item4": "Design de esquemas e otimização de consultas em bases de dados (PostgreSQL, MongoDB).",
            "services.modal1.item5": "Modularidade de componentes de frontend, gestão de estado e boas práticas de acessibilidade.",

            // Services Modal 2
            "services.modal2.title": "DevOps, Cloud & Automação CI/CD",
            "services.modal2.item1": "Gestão e orquestração de frotas de contentores (Docker, Portainer, Kubernetes).",
            "services.modal2.item2": "Pipelines de CI/CD automatizados (GitHub Actions) para compilação, testes unitários e deploys contínuos.",
            "services.modal2.item3": "Roteamento de proxy reverso (Nginx) e gestão automatizada de certificados SSL/TLS com Let's Encrypt.",
            "services.modal2.item4": "Infraestrutura como código, gestão de segredos e isolamento de ambientes.",
            "services.modal2.item5": "Integração cloud com serviços AWS (Lambda, API Gateway) e Azure.",

            // Services Modal 3
            "services.modal3.title": "Administração Linux & Infraestrutura Self-Hosted 24/7",
            "services.modal3.item1": "Administração de homelab dedicado 24/7 baseado em ZimaOS e CasaOS.",
            "services.modal3.item2": "Configuração de redes zero-trust com Tailscale mesh VPN, roteamento de subredes e exit nodes.",
            "services.modal3.item3": "Pipelines de cópias de segurança cifradas (Restic/Borg) com testes periódicos de restauração.",
            "services.modal3.item4": "Customização de ambiente de trabalho Linux com CachyOS, Hyprland, Waybar e rofi.",
            "services.modal3.item5": "Criação de units e daemons do systemd e scripts bash automatizados de manutenção.",
            "services.modal3.item6": "Gestão remota de hardware out-of-band e bridge planeada de controlo IP-KVM.",

            // Services Modal 4
            "services.modal4.title": "Apps Multiplataforma & Engenharia de Software",
            "services.modal4.item1": "Desenvolvimento de aplicações mobile multiplataforma com Flutter e Dart.",
            "services.modal4.item2": "Gestão de estado reativa, fluxos assíncronos e integração com Firebase.",
            "services.modal4.item3": "Integração de APIs resilientes com algoritmos de rate-limiting backoff e camadas de cache.",
            "services.modal4.item4": "Gestão de concorrência atómica para sistemas de bots (MongoDB / Node.js).",
            "services.modal4.item5": "Design visual 3D (Blender) e produção de ativos vetoriais (Illustrator, Photoshop, Figma).",

            // Portfolio Section
            "portfolio.title": "Portfólio de Engenharia",
            "portfolio.subtitle": "Sistemas em Destaque & Estudos de Caso",

            // Project Cards
            "portfolio.card7.badge": "Estudo de Caso Hospitalar • Fev 2024 – Jul 2024",
            "portfolio.card7.title": "Gestão de Camas Hospital de Viseu",
            "portfolio.card7.desc": "<strong>Função: Engenheiro Fullstack (Equipa de 3)</strong><br>Sistema em tempo real de monitorização de camas e altas hospitalares desenvolvido com WebSockets, Node.js, Supabase e Kubernetes em 6 enfermarias.",

            "portfolio.card1.badge": "Sistema em Produção • 2023 – Presente",
            "portfolio.card1.title": "Discord Bot & Dashboard Web",
            "portfolio.card1.desc": "<strong>Função: Desenvolvedor Solo</strong><br>Bot comunitário em produção com mais de 2.500 utilizadores em 15+ servidores, com gestão de concorrência atómica em MongoDB, dashboard Express e testes unitários Jest.",

            "portfolio.card4.badge": "Projeto Académico • Set 2023 – Dez 2023",
            "portfolio.card4.title": "App Mobile Softskills",
            "portfolio.card4.desc": "<strong>Função: Desenvolvedor Mobile & API (Equipa de 4)</strong><br>Plataforma educativa em Flutter com submissão de tarefas, questionários interativos e fóruns comunitários suportados por Node.js e Firebase.",

            "portfolio.card5.badge": "Ferramenta Open Source • 2024",
            "portfolio.card5.title": "Steam Family Library Tool",
            "portfolio.card5.desc": "<strong>Função: Desenvolvedor Solo</strong><br>Ferramenta em JavaScript + Docker para consulta e agregação de bibliotecas familiares da Steam com rate limiting de API, cache de respostas e resiliência a falhas.",

            "portfolio.card6.badge": "Infraestrutura • Contínuo",
            "portfolio.card6.title": "Homelab Self-Hosted 24/7",
            "portfolio.card6.desc": "<strong>Função: Administrador de Sistemas</strong><br>Servidor ZimaOS 24/7 com mais de 15 microsserviços em Docker geridos via Portainer, Jellyfin, Home Assistant, exit node Tailscale e backups automáticos com Restic.",

            "portfolio.card8.badge": "Sistemas & Workflow • Contínuo",
            "portfolio.card8.title": "Ambiente Linux & Sistemas",
            "portfolio.card8.desc": "<strong>Função: Power User Linux & Sysadmin</strong><br>Workflow tiling com CachyOS + Hyprland, automação de serviços systemd, hardening de SSH, ferramentas modulares em Bash e cofre de notas em Obsidian.",

            "portfolio.card2.badge": "Open Source • Contínuo",
            "portfolio.card2.title": "Repositórios GitHub & Código",
            "portfolio.card2.desc": "<strong>Função: Desenvolvedor & Maintainer</strong><br>Repositórios públicos selecionados com implementações de algoritmos, scripts de automação de sistemas e projetos utilitários documentados.",

            // Contact
            "contact.title": "Contactar",
            "contact.subtitle": "Entra em contacto",
            "contact.nameLabel": "Nome",
            "contact.emailLabel": "Email",
            "contact.projectLabel": "Projeto",
            "contact.messageLabel": "Mensagem",
            "contact.sendBtn": "Enviar Mensagem",

            // Footer
            "footer.subtitle": "Desenvolvedor Fullstack",
            "footer.linksTitle": "Links",
            "footer.socialsTitle": "Redes",
            "footer.copy": "@Skalin. Todos os direitos reservados"
        }
    },

    init() {
        const savedLang = localStorage.getItem('portfolio_lang');
        const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase().startsWith('pt') ? 'pt' : 'en';
        const lang = savedLang || browserLang;
        this.setLanguage(lang, false);
        this.bindEvents();
    },

    setLanguage(lang, save = true) {
        if (!this.translations[lang]) lang = 'en';
        this.currentLang = lang;
        if (save) localStorage.setItem('portfolio_lang', lang);
        document.documentElement.lang = lang;

        const dict = this.translations[lang];

        // 1. Text elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                if (dict[key].includes('<')) {
                    el.innerHTML = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        // 2. Attributes with data-i18n-attr="placeholder:key"
        document.querySelectorAll('[data-i18n-attr]').forEach(el => {
            const mapping = el.getAttribute('data-i18n-attr');
            if (mapping) {
                const parts = mapping.split(':');
                if (parts.length === 2) {
                    const attr = parts[0];
                    const key = parts[1];
                    if (dict[key] !== undefined) {
                        el.setAttribute(attr, dict[key]);
                    }
                }
            }
        });

        // 3. Update active state on language switcher buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // 4. Notify other modules (Typed.js, Skills Dossier)
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: this.currentLang } }));
    },

    bindEvents() {
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const chosenLang = btn.getAttribute('data-lang');
                if (chosenLang) {
                    this.setLanguage(chosenLang, true);
                }
            });
        });
    }
};

// Expose globally for cross-module communication
window.i18n = i18n;

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => i18n.init());
} else {
    i18n.init();
}
