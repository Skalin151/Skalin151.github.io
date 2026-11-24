/*==================== SKILLS DATA & INTERACTIVE DOSSIER ====================*/
const skillsData = {
    html5: {
        name: "HTML5",
        category: { en: "Fullstack & Web", pt: "Fullstack & Web" },
        badge: { en: "Web Standard", pt: "Padrão Web" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5">',
        experience: {
            en: "Semantic structuring of modern web interfaces, accessibility (a11y), responsive layouts, and clean DOM hierarchy.",
            pt: "Estruturação semântica de interfaces web modernas, acessibilidade (a11y) e integração com layouts reativos e dinâmicos."
        },
        projects: [
            { name: "Viseu Hospital", modalId: "portfolioModal7" },
            { name: "Discord Dashboard", modalId: "portfolioModal1" },
            { name: "Steam Family Tool", modalId: "portfolioModal5" }
        ],
        ideas: {
            en: "Continuous focus on clean semantic HTML for SEO optimization and rapid first paint.",
            pt: "Foco contínuo em HTML semântico limpo para otimização SEO e carregamento rápido."
        }
    },
    css3: {
        name: "CSS3",
        category: { en: "Fullstack & Web", pt: "Fullstack & Web" },
        badge: { en: "Styling & UI", pt: "Estilização & UI" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3">',
        experience: {
            en: "Advanced Flexbox, CSS Grid, fluid animations, glassmorphism aesthetics, and custom synthwave / cyberpunk designs without heavy UI frameworks.",
            pt: "Domínio de Flexbox, CSS Grid, animações fluidas, efeitos glassmorphism e estilização synthwave / cyberpunk personalizada sem bibliotecas pesadas."
        },
        projects: [
            { name: "Synthwave Portfolio", modalId: "portfolioModal2" },
            { name: "Discord Dashboard", modalId: "portfolioModal1" }
        ],
        ideas: {
            en: "Building modular design systems with native CSS Custom Properties and hardware-accelerated transitions.",
            pt: "Construção de design systems modulares com CSS Custom Properties e micro-interações fluidas."
        }
    },
    javascript: {
        name: "JavaScript",
        category: { en: "Fullstack & Web", pt: "Fullstack & Web" },
        badge: { en: "Daily Driver", pt: "Daily Driver" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript">',
        experience: {
            en: "Modern ES6+, asynchronous programming (Promises, Async/Await), real-time WebSockets, DOM manipulation, and backend automation.",
            pt: "Desenvolvimento ES6+, programação assíncrona com Promises e Async/Await, manipulação do DOM, WebSockets e automação backend."
        },
        projects: [
            { name: "Discord Bot & Dashboard", modalId: "portfolioModal1" },
            { name: "Steam Family Tool", modalId: "portfolioModal5" },
            { name: "Viseu Hospital", modalId: "portfolioModal7" }
        ],
        ideas: {
            en: "Exploring event-driven architectures and event-loop performance tuning for high concurrency.",
            pt: "Exploração de arquiteturas orientadas a eventos e otimizações de performance no event-loop."
        }
    },
    typescript: {
        name: "TypeScript",
        category: { en: "Fullstack & Web", pt: "Fullstack & Web" },
        badge: { en: "Type Safety", pt: "Tipagem Estática" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript">',
        experience: {
            en: "Strict static typing in fullstack codebases to prevent runtime bugs, improve refactoring confidence, and build self-documenting APIs.",
            pt: "Tipagem estática estrita em projetos fullstack para prevenir bugs em tempo de compilação, refatorações seguras e APIs autodocumentadas."
        },
        projects: [
            { name: "GitHub Repositories", modalId: "portfolioModal2" }
        ],
        ideas: {
            en: "End-to-end type sharing between client and server using Zod schemas and tRPC.",
            pt: "Integração contínua de tipos partilhados entre backend e frontend (tRPC / schemas Zod)."
        }
    },
    react: {
        name: "React",
        category: { en: "Fullstack & Web", pt: "Fullstack & Web" },
        badge: { en: "Frontend SPA", pt: "Frontend SPA" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React">',
        experience: {
            en: "Building responsive SPAs using functional components, custom hooks, centralized state, and real-time REST/WebSocket API integration.",
            pt: "Construção de Single Page Applications orientadas a componentes funcionais, custom hooks, gestão de estado e integração com APIs REST e WebSockets."
        },
        projects: [
            { name: "Web Interfaces", modalId: "portfolioModal2" }
        ],
        ideas: {
            en: "Deepening React Server Components and code-splitting patterns for instant rendering.",
            pt: "Aprofundando Server Components e técnicas de code-splitting para rendering instantâneo."
        }
    },
    bootstrap: {
        name: "Bootstrap",
        category: { en: "Fullstack & Web", pt: "Fullstack & Web" },
        badge: { en: "UI Prototyping", pt: "Prototipagem UI" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap">',
        experience: {
            en: "Rapid responsive prototyping of management dashboards, adaptive grid systems, and retro-futuristic dark mode customization.",
            pt: "Prototipagem rápida de dashboards responsivos, sistemas de grelha adaptáveis e painéis administrativos com customização retro-futurista."
        },
        projects: [
            { name: "Discord Dashboard", modalId: "portfolioModal1" }
        ],
        ideas: {
            en: "Combining lightweight utilities with custom neon dark themes.",
            pt: "Combinação de componentes utilitários com temas neon dark mode customizados."
        }
    },
    nodejs: {
        name: "Node.js",
        category: { en: "Fullstack & Web", pt: "Fullstack & Web" },
        badge: { en: "Backend Core", pt: "Núcleo Backend" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js">',
        experience: {
            en: "Scalable REST API engineering with Express, event-driven backends, real-time WebSockets, and comprehensive automated unit testing with Jest.",
            pt: "Desenvolvimento de APIs REST escaláveis com Express, arquiteturas orientadas a eventos, WebSockets em tempo real e testes unitários automatizados com Jest."
        },
        projects: [
            { name: "Viseu Hospital Bed Management", modalId: "portfolioModal7" },
            { name: "Discord Bot & Dashboard", modalId: "portfolioModal1" }
        ],
        ideas: {
            en: "Building resilient autonomous microservices with asynchronous concurrency handling.",
            pt: "Construção de microsserviços autónomos resilientes com processamento concorrente assíncrono."
        }
    },
    c: {
        name: "C",
        category: { en: "Systems & Linux", pt: "Sistemas & Linux" },
        badge: { en: "Low-Level Core", pt: "Sistemas Base" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C">',
        experience: {
            en: "Systems programming, manual dynamic memory management (malloc/free), pointers, foundational data structures, and optimized algorithms.",
            pt: "Programação de sistemas, alocação de memória dinâmica (malloc/free), ponteiros, estruturas de dados clássicas e algoritmos com eficiência máxima."
        },
        projects: [
            { name: "Algorithms & Systems Repos", modalId: "portfolioModal2" }
        ],
        ideas: {
            en: "Strong foundational insight into how operating systems and CPUs manage memory.",
            pt: "Base sólida para compreender a fundo a gestão de memória pelo sistema operativo e CPU."
        }
    },
    cpp: {
        name: "C++",
        category: { en: "Systems & Linux", pt: "Sistemas & Linux" },
        badge: { en: "High Performance", pt: "Alta Performance" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++">',
        experience: {
            en: "Object-oriented systems programming, Standard Template Library (STL), templates, RAII patterns, and high-performance computing.",
            pt: "Programação orientada a objetos (OOP), Standard Template Library (STL), templates, RAII e desenvolvimento de soluções com foco em alta performance."
        },
        projects: [
            { name: "Systems & Algorithms", modalId: "portfolioModal2" }
        ],
        ideas: {
            en: "Modern C++ (C++20) applied to graphics engines and physics simulations.",
            pt: "Exploração de C++ moderno em engines gráficas e simulações físicas."
        }
    },
    python: {
        name: "Python",
        category: { en: "Systems & Linux", pt: "Sistemas & Linux" },
        badge: { en: "Scripting & Data", pt: "Automação & Dados" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python">',
        experience: {
            en: "Rapid automation scripting, web scraping, data manipulation and parsing, and agile backend utility prototyping.",
            pt: "Scripts de automação rápida, web scraping, manipulação e tratamento de dados, e criação ágil de utilitários de backend."
        },
        projects: [
            { name: "Automation & Tools", modalId: "portfolioModal2" }
        ],
        ideas: {
            en: "Automated pipelines for extracting, cleaning, and reporting server health metrics.",
            pt: "Criação de pipelines de automação para extração e processamento de métricas do sistema."
        }
    },
    bash: {
        name: "Bash Scripting",
        category: { en: "Systems & Linux", pt: "Sistemas & Linux" },
        badge: { en: "Automation & CLI", pt: "Automação & CLI" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Bash">',
        experience: {
            en: "Advanced Linux terminal automation: Restic backup routines, log rotation, Docker container health checks, and machine provisioning.",
            pt: "Automação avançada no terminal Linux: rotinas de backup com Restic, rotação de logs, health-checks de contentores Docker e aprovisionamento de máquinas."
        },
        projects: [
            { name: "Linux Environment Suite", modalId: "portfolioModal8" },
            { name: "Homelab Infrastructure", modalId: "portfolioModal6" }
        ],
        ideas: {
            en: "Developing modular CLI tools with interactive flags and structured JSON output.",
            pt: "Desenvolvimento de ferramentas CLI modulares com gestão de argumentos e saída estruturada em JSON."
        }
    },
    linux: {
        name: "Linux (CachyOS / ZimaOS)",
        category: { en: "Systems & Linux", pt: "Sistemas & Linux" },
        badge: { en: "Daily Driver & Server", pt: "OS Diário & Servidor" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux">',
        experience: {
            en: "Daily desktop workflow on CachyOS with Hyprland (Wayland tiling WM), package building via AUR/PKGBUILDs, and 24/7 headless administration of ZimaOS.",
            pt: "Ambiente diário em CachyOS com Hyprland (Wayland tiling WM), compilação via AUR/PKGBUILDs e administração 24/7 de servidor headless ZimaOS."
        },
        projects: [
            { name: "Linux & Systems Environment", modalId: "portfolioModal8" },
            { name: "Self-Hosted Homelab", modalId: "portfolioModal6" }
        ],
        ideas: {
            en: "Continuous optimization of version-controlled dotfiles and rapid disaster recovery automation.",
            pt: "Otimização contínua de dotfiles controlados por versão e automação de rotinas de recuperação rápida de desastre."
        }
    },
    windows: {
        name: "Windows 11 (3D/CAD)",
        category: { en: "Systems & Linux", pt: "Sistemas & Linux" },
        badge: { en: "Workstation OS", pt: "Workstation" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" alt="Windows 11">',
        experience: {
            en: "Primary workstation for 3D modeling, CAD design, GPU rendering, multimedia authoring, and virtualization with WSL2.",
            pt: "Estação de trabalho principal para modelação 3D, CAD, renderização por GPU, desenvolvimento multimédia e virtualização com WSL2."
        },
        projects: [
            { name: "Creative & Engineering Work", modalId: "portfolioModal8" }
        ],
        ideas: {
            en: "Hybrid workflow bridging Windows DirectX/CUDA compute with local Linux instances via SSH and Tailscale.",
            pt: "Integração híbrida e remota entre ambiente Windows e instâncias Linux locais via SSH e Tailscale."
        }
    },
    azure: {
        name: "Azure",
        category: { en: "Cloud & DevOps", pt: "Cloud & DevOps" },
        badge: { en: "Cloud Platform", pt: "Plataforma Cloud" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Azure">',
        experience: {
            en: "Provisioning virtual machines, blob storage accounts, virtual networks, and exploring enterprise cloud architectures.",
            pt: "Configuração de máquinas virtuais, storage accounts, rede virtual e exploração de arquiteturas de infraestrutura em nuvem."
        },
        projects: [
            { name: "Cloud & Academic Labs", modalId: "portfolioModal2" }
        ],
        ideas: {
            en: "Deploying containerized microservices with Azure Container Instances and Azure DevOps CI/CD.",
            pt: "Deploy de microsserviços com Azure Container Instances e integração de CI/CD corporativo."
        }
    },
    postgresql: {
        name: "PostgreSQL",
        category: { en: "Databases", pt: "Bases de Dados" },
        badge: { en: "Relational SQL", pt: "SQL Relacional" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="Postgres">',
        experience: {
            en: "Complex relational schema design, triggers, views, optimized indexing, and strict ACID compliance in hospital environments.",
            pt: "Modelagem de bases de dados relacionais complexas, triggers, views, índices otimizados e garantia estrita de integridade ACID em ambiente hospitalar."
        },
        projects: [
            { name: "Viseu Hospital Bed Management", modalId: "portfolioModal7" }
        ],
        ideas: {
            en: "Leveraging pgvector for high-performance semantic vector similarity searches.",
            pt: "Aprofundamento em extensões avançadas como pgvector para buscas semânticas vetoriais."
        }
    },
    mongodb: {
        name: "MongoDB",
        category: { en: "Databases", pt: "Bases de Dados" },
        badge: { en: "NoSQL Document Store", pt: "NoSQL Documental" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB">',
        experience: {
            en: "Atomic concurrency operations with Mongoose, aggregation pipelines, and high-throughput production schema design serving 2,500+ users.",
            pt: "Operações atómicas com Mongoose, agregação de dados e gestão de concorrência em produção para uma comunidade com mais de 2.500 utilizadores ativos."
        },
        projects: [
            { name: "Discord Bot & Dashboard", modalId: "portfolioModal1" }
        ],
        ideas: {
            en: "Compound indexing strategies and application-layer caching for sub-millisecond query responses.",
            pt: "Desenvolvimento de schemas híbridos e caching na camada de aplicação para latência ultrabaixa."
        }
    },
    supabase: {
        name: "Supabase",
        category: { en: "Databases", pt: "Bases de Dados" },
        badge: { en: "Realtime BaaS", pt: "BaaS em Tempo Real" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg" alt="Supabase">',
        experience: {
            en: "Postgres-backed real-time event streaming, role-based authentication, and fine-grained security policies via Row-Level Security (RLS).",
            pt: "Configuração de eventos em tempo real sobre Postgres, autenticação e políticas de segurança granulares com Row-Level Security (RLS)."
        },
        projects: [
            { name: "Viseu Hospital Bed Management", modalId: "portfolioModal7" }
        ],
        ideas: {
            en: "Building serverless Edge Functions in Deno with bidirectional high-frequency event channels.",
            pt: "Integração de Edge Functions em Deno e streams bidirecionais de alta frequência."
        }
    },
    flutter: {
        name: "Flutter",
        category: { en: "Mobile & Games", pt: "Mobile & Jogos" },
        badge: { en: "Mobile UI", pt: "Mobile UI" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" alt="Flutter">',
        experience: {
            en: "Cross-platform mobile apps with reactive widget trees, smooth UI animations, assignment submissions, and backend sync via REST & Firebase.",
            pt: "Construção de aplicações mobile multiplataforma com árvore de widgets reativa, animações fluidas e sincronização com backend Node.js e Firebase."
        },
        projects: [
            { name: "Softskills Mobile App", modalId: "portfolioModal4" }
        ],
        ideas: {
            en: "Clean architecture design with reactive state management (BLoC) and offline-first local cache.",
            pt: "Adoção de padrões de arquitetura limpa com gestão de estado reativa e persistência offline-first."
        }
    },
    dart: {
        name: "Dart",
        category: { en: "Mobile & Games", pt: "Mobile & Jogos" },
        badge: { en: "App Language", pt: "Linguagem Mobile" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" alt="Dart">',
        experience: {
            en: "Modern object-oriented app logic, sound null-safety, reactive Streams, and robust JSON serialization.",
            pt: "Programação orientada a objetos moderna, tipagem rigorosa, programação reativa com Streams e serialização eficiente de payloads JSON."
        },
        projects: [
            { name: "Softskills Mobile App", modalId: "portfolioModal4" }
        ],
        ideas: {
            en: "Shared utility libraries for data models across Flutter apps and command-line utilities.",
            pt: "Desenvolvimento de bibliotecas partilhadas de modelos e utilitários para ecossistemas mobile."
        }
    },
    androidstudio: {
        name: "Android Studio",
        category: { en: "Mobile & Games", pt: "Mobile & Jogos" },
        badge: { en: "Mobile Tooling", pt: "Ferramenta Mobile" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg" alt="Android Studio">',
        experience: {
            en: "Native SDK configuration, Android virtual device emulation, Gradle build pipelines, Logcat debugging, and memory profiling.",
            pt: "Configuração de SDKs nativos, emulação de dispositivos Android, build pipelines com Gradle, monitorização de memória e inspeção de logs."
        },
        projects: [
            { name: "Softskills Mobile App", modalId: "portfolioModal4" }
        ],
        ideas: {
            en: "Automated device testing across multiple Android API levels and screen densities.",
            pt: "Testes automatizados de compatibilidade em emuladores com múltiplas densidades de ecrã."
        }
    },
    unity: {
        name: "Unity",
        category: { en: "Mobile & Games", pt: "Mobile & Jogos" },
        badge: { en: "Game Engine", pt: "Motor de Jogos" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg" alt="Unity">',
        experience: {
            en: "2D and 3D game mechanics prototyping, C# scripting, particle systems, physics colliders, and lighting setup.",
            pt: "Prototipagem de mecânicas de jogos 2D e 3D, programação em C#, sistemas de partículas, controlo de física e iluminação."
        },
        projects: [
            { name: "Game Dev Experiments", modalId: "portfolioModal2" }
        ],
        ideas: {
            en: "Retro action game prototypes with custom pixel shaders and dynamic illumination.",
            pt: "Criação de protótipos de jogos de ação e exploração retro com shaders personalizados."
        }
    },
    godot: {
        name: "Godot Engine",
        category: { en: "Mobile & Games", pt: "Mobile & Jogos" },
        badge: { en: "FOSS Engine", pt: "Motor Open Source" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/godot/godot-original.svg" alt="Godot">',
        experience: {
            en: "Rapid 2D game development with GDScript, node/scene hierarchy architecture, and lightweight multiplatform exports.",
            pt: "Desenvolvimento rápido de jogos 2D com GDScript, arquitetura modular hierárquica baseada em nós/cenas e exportação leve para múltiplas plataformas."
        },
        projects: [
            { name: "Open Source Game Labs", modalId: "portfolioModal2" }
        ],
        ideas: {
            en: "Procedural lightweight games running directly in the browser via WebAssembly.",
            pt: "Desenvolvimento de jogos procedurais leves executáveis diretamente no browser via WebAssembly."
        }
    },
    docker: {
        name: "Docker & Portainer",
        category: { en: "Cloud & DevOps", pt: "Cloud & DevOps" },
        badge: { en: "Containerization", pt: "Contentorização" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker">',
        experience: {
            en: "Service containerization with multi-stage Dockerfiles, isolated virtual bridge networks, persistent volume management, and Portainer orchestration of 15+ homelab services on a 24/7 headless server.",
            pt: "Contentorização de serviços com Dockerfiles multi-stage, redes internas virtuais isoladas, gestão de volumes persistentes e orquestração de mais de 15 serviços com Portainer num servidor headless 24/7."
        },
        projects: [
            { name: "Self-Hosted Homelab", modalId: "portfolioModal6" },
            { name: "Steam Family Tool", modalId: "portfolioModal5" }
        ],
        ideas: {
            en: "GitOps deployment pipelines for declarative configuration of homelab services.",
            pt: "Implementação de pipelines GitOps para sincronização declarativa dos contentores do homelab."
        }
    },
    kubernetes: {
        name: "Kubernetes",
        category: { en: "Cloud & DevOps", pt: "Cloud & DevOps" },
        badge: { en: "Orchestration", pt: "Orquestração" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes">',
        experience: {
            en: "Declarative cluster orchestration via YAML manifests (Deployments, Services, Ingress, ConfigMaps) ensuring high availability in hospital environments.",
            pt: "Gestão declarativa de clusters com manifests YAML: Deployments, Services, Ingress e ConfigMaps para garantir alta disponibilidade de aplicações em ambiente hospitalar."
        },
        projects: [
            { name: "Viseu Hospital Bed Management", modalId: "portfolioModal7" }
        ],
        ideas: {
            en: "Building a lightweight resilient k3s multi-node cluster in the homelab environment.",
            pt: "Configuração de um cluster k3s leve e resiliente com nós distribuídos no homelab."
        }
    },
    cicd: {
        name: "CI/CD (GitHub Actions)",
        category: { en: "Cloud & DevOps", pt: "Cloud & DevOps" },
        badge: { en: "Automated Pipelines", pt: "Pipelines CI/CD" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg" alt="GitHub Actions">',
        experience: {
            en: "Automated GitHub Actions workflows for linting, Jest unit test suites, Docker image builds, and automated GitHub Pages deployment on push.",
            pt: "Criação de workflows automatizados para linting, execução de testes Jest, build de imagens Docker e deploy automático para GitHub Pages em cada commit."
        },
        projects: [
            { name: "Steam Family Tool", modalId: "portfolioModal5" },
            { name: "Discord Bot", modalId: "portfolioModal1" }
        ],
        ideas: {
            en: "Adding automated static security scans (SAST) and container vulnerability checks in every pull request.",
            pt: "Adicionar verificações automáticas de vulnerabilidades de dependências nos repositórios."
        }
    },
    nginx: {
        name: "Nginx & TLS",
        category: { en: "Cloud & DevOps", pt: "Cloud & DevOps" },
        badge: { en: "Reverse Proxy & Edge", pt: "Proxy Reverso" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" alt="Nginx">',
        experience: {
            en: "Reverse proxy routing, load balancing, automated Let's Encrypt SSL/TLS cert renewal with Certbot, HSTS header policies, and route isolation.",
            pt: "Configuração de proxy reverso com balanceamento de carga, terminação SSL com Let's Encrypt (Certbot), políticas de cabeçalhos HSTS e isolamento de rotas."
        },
        projects: [
            { name: "Self-Hosted Homelab", modalId: "portfolioModal6" }
        ],
        ideas: {
            en: "Dynamic edge gateway routing with hardware key 2FA and CrowdSec brute-force protection.",
            pt: "Configuração de gateways dinâmicos com autenticação por chave de hardware e proteção contra brute-force."
        }
    },
    tailscale: {
        name: "Tailscale Mesh",
        category: { en: "Cloud & DevOps", pt: "Cloud & DevOps" },
        badge: { en: "Zero-Trust Mesh", pt: "Rede Zero-Trust" },
        icon: '<i class="fas fa-network-wired" style="font-size: 1.8rem; color: var(--synth-cyan);"></i>',
        experience: {
            en: "WireGuard-based private mesh VPN securely interconnecting servers, workstations, and mobile devices without exposing ports to the public internet.",
            pt: "Rede privada mesh baseada no protocolo WireGuard interligando servidores, máquinas de trabalho e dispositivos móveis de forma segura e sem necessidade de abrir portas no router."
        },
        projects: [
            { name: "Self-Hosted Homelab", modalId: "portfolioModal6" }
        ],
        ideas: {
            en: "Dedicated subnet routers and exit nodes for encrypted remote browsing on public Wi-Fi.",
            pt: "Configuração de subnet routers e exit nodes dedicados para navegação cifrada em redes públicas."
        }
    },
    systemd: {
        name: "Systemd & Sysadmin",
        category: { en: "Systems & Linux", pt: "Sistemas & Linux" },
        badge: { en: "Daemon Management", pt: "Gestão de Daemons" },
        icon: '<i class="fas fa-microchip" style="font-size: 1.8rem; color: var(--synth-pink);"></i>',
        experience: {
            en: "Authoring custom .service and .timer units, background daemon management, SSH hardening (ed25519), and firewall configuration (ufw).",
            pt: "Criação de ficheiros .service e .timer personalizados, arranque automático de processos background, hardening de SSH (ed25519) e gestão de firewall (ufw)."
        },
        projects: [
            { name: "Linux & Systems Environment", modalId: "portfolioModal8" },
            { name: "Self-Hosted Homelab", modalId: "portfolioModal6" }
        ],
        ideas: {
            en: "Periodic automated server integrity and uptime checks with webhook alerts.",
            pt: "Automatização de auditorias periódicas de integridade e métricas de uptime com alertas por webhook."
        }
    },
    git: {
        name: "Git",
        category: { en: "Systems & Linux", pt: "Sistemas & Linux" },
        badge: { en: "Version Control", pt: "Controlo de Versões" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git">',
        experience: {
            en: "Disciplined Git branching, semantic atomic commits, pull request merges, conflict resolution, and release tagging.",
            pt: "Fluxos de trabalho com Git (branching, commits atómicos semânticos, merge de pull requests, resolução de conflitos e automação de releases)."
        },
        projects: [
            { name: "GitHub Repositories", modalId: "portfolioModal2" },
            { name: "Viseu Hospital", modalId: "portfolioModal7" }
        ],
        ideas: {
            en: "Advanced local pre-commit hooks ensuring linting and test passes before pushing.",
            pt: "Utilização avançada de Git hooks locais para garantir linting e testes antes de cada commit."
        }
    },
    aws: {
        name: "AWS",
        category: { en: "Cloud & DevOps", pt: "Cloud & DevOps" },
        badge: { en: "Cloud Services", pt: "Serviços Cloud" },
        icon: '<i class="fab fa-aws" style="font-size: 2.2rem; color: #ff9900;"></i>',
        experience: {
            en: "Solid knowledge of EC2 compute instances, S3 object storage buckets, IAM access policies, and scalable cloud design principles.",
            pt: "Noções sólidas de instâncias EC2, buckets de armazenamento S3, gestão de permissões IAM e arquiteturas escaláveis em cloud."
        },
        projects: [
            { name: "Cloud Infrastructure Labs", modalId: "portfolioModal2" }
        ],
        ideas: {
            en: "Prototyping serverless event-driven microservices with AWS Lambda and API Gateway.",
            pt: "Testar a implementação de microsserviços serverless com AWS Lambda integrados com API Gateway."
        }
    },
    obsidian: {
        name: "Obsidian Notes",
        category: { en: "Creative & Hardware", pt: "Criativo & Hardware" },
        badge: { en: "Knowledge Vault", pt: "Cofre de Conhecimento" },
        icon: '<img src="https://upload.wikimedia.org/wikipedia/commons/1/10/2023_Obsidian_logo.svg" alt="Obsidian">',
        experience: {
            en: "Personal Knowledge Management (PKM) vault with interconnected graph views for network topologies, server runbooks, and code snippets.",
            pt: "Manutenção de uma base de conhecimento pessoal interligada (PKM) com grafos relacionais de topologias de rede, documentação de servidores e snippets de código."
        },
        projects: [
            { name: "Linux & Systems Environment", modalId: "portfolioModal8" }
        ],
        ideas: {
            en: "Automated encrypted vault synchronization using Git and scheduled cron scripts.",
            pt: "Sincronização cifrada e versionada do cofre pessoal de notas através de Git e scripts agendados."
        }
    },
    figma: {
        name: "Figma",
        category: { en: "Creative & Hardware", pt: "Criativo & Hardware" },
        badge: { en: "UI/UX Design", pt: "Design UI/UX" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma">',
        experience: {
            en: "Wireframing, responsive design systems, visual hierarchy, and navigable prototypes before writing production code.",
            pt: "Desenho de wireframes, design systems responsivos, hierarquia visual e protótipos navegáveis antes de avançar para a implementação de código."
        },
        projects: [
            { name: "Softskills Mobile App", modalId: "portfolioModal4" },
            { name: "Viseu Hospital UI", modalId: "portfolioModal7" }
        ],
        ideas: {
            en: "Direct export of Figma design tokens to native CSS custom properties to accelerate front-end delivery.",
            pt: "Exportação direta de design tokens do Figma para variáveis de CSS nativas para acelerar o desenvolvimento."
        }
    },
    photoshop: {
        name: "Photoshop",
        category: { en: "Creative & Hardware", pt: "Criativo & Hardware" },
        badge: { en: "Graphic Design", pt: "Design Gráfico" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg" alt="Photoshop">',
        experience: {
            en: "Raster asset editing, custom UI textures, portfolio project mockups, promotional banners, and visual asset composition.",
            pt: "Tratamento de imagem, criação de texturas, mockups de interfaces, banners promocionais e composição gráfica para portfólios."
        },
        projects: [
            { name: "Creative Media & Banners", modalId: "portfolioModal2" }
        ],
        ideas: {
            en: "Crafting retro-futuristic graphics with customized chromatic aberration and dithering shaders.",
            pt: "Desenvolvimento de grafismos retro-futuristas com efeitos de aberração cromática e dithering."
        }
    },
    illustrator: {
        name: "Illustrator",
        category: { en: "Creative & Hardware", pt: "Criativo & Hardware" },
        badge: { en: "Vector Art", pt: "Arte Vetorial" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg" alt="Illustrator">',
        experience: {
            en: "Scalable vector illustrations, crisp logo design, SVG icons, and clean resolution-independent assets for web applications.",
            pt: "Criação de ilustrações vetoriais escaláveis, desenho de logótipos nítidos, ícones SVG e assets otimizados para a web."
        },
        projects: [
            { name: "Logos & Vector Assets", modalId: "portfolioModal2" }
        ],
        ideas: {
            en: "Custom vector icon sets optimized for smooth CSS/SVG stroke animations.",
            pt: "Criação de conjuntos completos de ícones vetoriais personalizados preparados para animações CSS/SVG."
        }
    },
    blender: {
        name: "Blender",
        category: { en: "Creative & Hardware", pt: "Criativo & Hardware" },
        badge: { en: "3D Modeling", pt: "Modelação 3D" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" alt="Blender">',
        experience: {
            en: "Low-poly and high-poly 3D modeling, scene lighting, procedural materials, and preparing models for rendering and 3D printing.",
            pt: "Modelação 3D low-poly e high-poly, iluminação de cena, criação de materiais e preparação de modelos para renderização e impressão 3D."
        },
        projects: [
            { name: "3D Art & Models", modalId: "portfolioModal2" }
        ],
        ideas: {
            en: "Real-time interactive 3D model rendering directly in the browser using Three.js.",
            pt: "Integração de modelos 3D interativos renderizados em tempo real no navegador com Three.js."
        }
    },
    arduino: {
        name: "Arduino",
        category: { en: "Creative & Hardware", pt: "Criativo & Hardware" },
        badge: { en: "Embedded & IoT", pt: "Embarcados & IoT" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" alt="Arduino">',
        experience: {
            en: "Microcontroller programming in C/C++, analog/digital sensor reading, actuator control, PWM signal generation, and serial communications.",
            pt: "Programação de microcontroladores em C/C++, leitura de sensores analógicos/digitais, controlo de atuadores, sinais PWM e comunicação serial."
        },
        projects: [
            { name: "Hardware & IoT Repos", modalId: "portfolioModal2" }
        ],
        ideas: {
            en: "Streaming physical environmental sensor telemetry to real-time web dashboards via MQTT.",
            pt: "Integração de sensores ambientais físicos com visualização de dados em dashboards web em tempo real via MQTT."
        }
    },
    raspberrypi: {
        name: "Raspberry Pi",
        category: { en: "Creative & Hardware", pt: "Criativo & Hardware" },
        badge: { en: "SBC Systems", pt: "Sistemas SBC" },
        icon: '<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" alt="Raspberry Pi">',
        experience: {
            en: "Headless SBC configuration for local network services, GPIO hardware automation, serial communication bridges, and auxiliary homelab nodes.",
            pt: "Configuração de SBC headless para serviços de rede local, automação com pinos GPIO, bridges de comunicação e nós auxiliares no homelab."
        },
        projects: [
            { name: "Self-Hosted Homelab", modalId: "portfolioModal6" }
        ],
        ideas: {
            en: "Portable network diagnostics node equipped with a dedicated e-ink display.",
            pt: "Construção de uma mini-estação de diagnóstico de rede portátil com ecrã e-ink dedicado."
        }
    }
};

const projectLabels = {
    pt: {
        "Viseu Hospital": "Hospital de Viseu",
        "Viseu Hospital Bed Management": "Gestão de Camas Hospital de Viseu",
        "Viseu Hospital UI": "Interface Hospital de Viseu",
        "Discord Dashboard": "Dashboard Discord",
        "Discord Bot & Dashboard": "Discord Bot & Dashboard",
        "Discord Bot": "Bot Discord",
        "Steam Family Tool": "Steam Family Tool",
        "Synthwave Portfolio": "Portfólio Synthwave",
        "GitHub Repositories": "Repositórios GitHub",
        "Web Interfaces": "Interfaces Web",
        "Algorithms & Systems Repos": "Repositórios de Algoritmos",
        "Systems & Algorithms": "Sistemas & Algoritmos",
        "Automation & Tools": "Automação & Ferramentas",
        "Linux Environment Suite": "Ambiente Linux & Sistemas",
        "Linux & Systems Environment": "Ambiente Linux & Sistemas",
        "Homelab Infrastructure": "Infraestrutura Homelab",
        "Self-Hosted Homelab": "Homelab Self-Hosted 24/7",
        "Creative & Engineering Work": "Engenharia & Criação",
        "Cloud & Academic Labs": "Labs Cloud & Académicos",
        "Softskills Mobile App": "App Mobile Softskills",
        "Game Dev Experiments": "Projetos de Jogos",
        "Open Source Game Labs": "Labs Open Source de Jogos",
        "Cloud Infrastructure Labs": "Labs de Infraestrutura Cloud",
        "Creative Media & Banners": "Media Criativa & Banners",
        "Logos & Vector Assets": "Logos & Gráficos Vetoriais",
        "3D Art & Models": "Arte & Modelos 3D",
        "Hardware & IoT Repos": "Projetos IoT & Hardware"
    }
};

function getActiveLanguage() {
    if (window.i18n && window.i18n.currentLang) {
        return window.i18n.currentLang;
    }
    const htmlLang = document.documentElement.lang;
    if (htmlLang && (htmlLang === 'pt' || htmlLang.toLowerCase().startsWith('pt'))) {
        return 'pt';
    }
    const saved = localStorage.getItem('portfolio_lang');
    if (saved && (saved === 'pt' || saved === 'en')) {
        return saved;
    }
    const nav = (navigator.language || navigator.userLanguage || '').toLowerCase();
    return nav.startsWith('pt') ? 'pt' : 'en';
}

function initSkillsDossier() {
    const chips = document.querySelectorAll('.skills__chip');
    const filters = document.querySelectorAll('.skills__filter');
    const dossierContent = document.getElementById('dossier-content');
    if (!chips.length || !dossierContent) return;

    function renderDossier(skillKey, forcedLang) {
        const data = skillsData[skillKey];
        if (!data) return;

        const lang = forcedLang || getActiveLanguage();
        const category = typeof data.category === 'object' ? (data.category[lang] || data.category.en) : data.category;
        const badge = typeof data.badge === 'object' ? (data.badge[lang] || data.badge.en) : data.badge;
        const experience = typeof data.experience === 'object' ? (data.experience[lang] || data.experience.en) : data.experience;
        const ideas = typeof data.ideas === 'object' ? (data.ideas[lang] || data.ideas.en) : data.ideas;

        const labels = {
            en: {
                projects: "Featured In Projects",
                experience: "Practical Experience",
                ideas: "Exploration & Ideas",
                hint: "Click any tech icon on the left to inspect"
            },
            pt: {
                projects: "Projetos Relacionados",
                experience: "Experiência Prática",
                ideas: "Exploração & Ideias",
                hint: "Clica em qualquer tecnologia para inspecionar"
            }
        }[lang] || {
            projects: "Featured In Projects",
            experience: "Practical Experience",
            ideas: "Exploration & Ideas",
            hint: "Click any tech icon on the left to inspect"
        };

        dossierContent.classList.add('fading');

        setTimeout(() => {
            let projectsHtml = '';
            if (data.projects && data.projects.length > 0) {
                projectsHtml = `
                    <div class="dossier__section">
                        <span class="dossier__section-label">
                            <i class="fas fa-folder-open"></i> ${labels.projects}
                        </span>
                        <div class="dossier__projects-list">
                            ${data.projects.map(p => {
                                const pName = (lang === 'pt' && projectLabels.pt[p.name]) 
                                    ? projectLabels.pt[p.name] 
                                    : (typeof p.name === 'object' ? (p.name[lang] || p.name.en) : p.name);
                                return `
                                <button type="button" class="dossier__project-btn" onclick="openPortfolioModal('${p.modalId}')">
                                    <i class="fas fa-arrow-up-right-from-square"></i> ${pName}
                                </button>
                            `;}).join('')}
                        </div>
                    </div>
                `;
            }

            dossierContent.innerHTML = `
                <div class="dossier__identity">
                    <div class="dossier__icon-bubble">
                        ${data.icon}
                    </div>
                    <div class="dossier__title-group">
                        <h3 class="dossier__title">${data.name}</h3>
                        <div class="dossier__badges">
                            <span class="dossier__badge dossier__badge--role">${badge}</span>
                            <span class="dossier__badge dossier__badge--category">${category}</span>
                        </div>
                    </div>
                </div>

                <div class="dossier__section">
                    <span class="dossier__section-label">
                        <i class="fas fa-terminal"></i> ${labels.experience}
                    </span>
                    <p class="dossier__experience">${experience}</p>
                </div>

                ${projectsHtml}

                <div class="dossier__section">
                    <span class="dossier__section-label">
                        <i class="fas fa-lightbulb"></i> ${labels.ideas}
                    </span>
                    <div class="dossier__idea-box">
                        <p class="dossier__idea-text">"${ideas}"</p>
                    </div>
                </div>

                <div class="dossier__hint">
                    <i class="fas fa-hand-pointer"></i> ${labels.hint}
                </div>
            `;

            dossierContent.classList.remove('fading');

            // Attach cursor hover listeners to new project buttons
            const cursor = document.querySelector('.cursor');
            if (cursor) {
                dossierContent.querySelectorAll('.dossier__project-btn').forEach(btn => {
                    btn.addEventListener('mouseenter', () => cursor.classList.add('hover'));
                    btn.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
                });
            }
        }, 120);
    }

    // Chip click handlers
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            const skillKey = chip.getAttribute('data-skill');
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');
            renderDossier(skillKey, getActiveLanguage());

            // On mobile devices, smoothly scroll dossier into view if needed
            if (window.innerWidth <= 992) {
                const dossierEl = document.getElementById('skills-dossier');
                if (dossierEl) {
                    const rect = dossierEl.getBoundingClientRect();
                    if (rect.top < 0 || rect.top > window.innerHeight * 0.7) {
                        dossierEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                    }
                }
            }
        });
    });

    // Filter handlers
    filters.forEach(filterBtn => {
        filterBtn.addEventListener('click', () => {
            const filter = filterBtn.getAttribute('data-filter');
            filters.forEach(btn => btn.classList.remove('active'));
            filterBtn.classList.add('active');

            let firstVisibleChip = null;
            let currentActiveVisible = false;

            chips.forEach(chip => {
                const chipCategory = chip.getAttribute('data-category');
                const isMatch = filter === 'all' || chipCategory === filter;

                if (isMatch) {
                    chip.classList.remove('hidden');
                    if (!firstVisibleChip) firstVisibleChip = chip;
                    if (chip.classList.contains('active')) currentActiveVisible = true;
                } else {
                    chip.classList.add('hidden');
                }
            });

            // If active chip was filtered out, select first visible
            if (!currentActiveVisible && firstVisibleChip) {
                chips.forEach(c => c.classList.remove('active'));
                firstVisibleChip.classList.add('active');
                renderDossier(firstVisibleChip.getAttribute('data-skill'), getActiveLanguage());
            }
        });
    });

    // Language change listener to re-render active skill in new language
    window.addEventListener('languageChanged', (e) => {
        const lang = (e && e.detail && e.detail.lang) || getActiveLanguage();
        const activeChip = document.querySelector('.skills__chip.active') || chips[0];
        if (activeChip) {
            renderDossier(activeChip.getAttribute('data-skill'), lang);
        }
    });

    // Initial render for default active chip
    const initialActive = document.querySelector('.skills__chip.active') || chips[0];
    if (initialActive) {
        initialActive.classList.add('active');
        renderDossier(initialActive.getAttribute('data-skill'), getActiveLanguage());
    }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSkillsDossier);
} else {
    initSkillsDossier();
}
