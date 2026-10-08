// ============================================================
// THE SKILLS MILLIONAIRE - QUESTION BANK
// 120 questions about Hard Skills & Soft Skills
// Each question: { id, difficulty, en: {q, options[4], correct, hint}, pt: {...} }
// correct = index 0..3
// difficulty: "easy" | "medium" | "hard"
// ============================================================

const QUESTIONS = [
  // ---------- EASY (40) ----------
  {
    id: 1, difficulty: "easy",
    en: { q: "What is a soft skill?",
      options: ["Programming", "Excel", "Communication", "Data Analysis"],
      correct: 2, hint: "It's about people, not machines." },
    pt: { q: "O que é uma soft skill?",
      options: ["Programação", "Excel", "Comunicação", "Análise de Dados"],
      correct: 2, hint: "Tem a ver com pessoas, não com máquinas." }
  },
  {
    id: 2, difficulty: "easy",
    en: { q: "Which of these is a hard skill?",
      options: ["Teamwork", "Leadership", "Creativity", "Programming"],
      correct: 3, hint: "It is technical and measurable." },
    pt: { q: "Qual destas é uma hard skill?",
      options: ["Trabalho em equipe", "Liderança", "Criatividade", "Programação"],
      correct: 3, hint: "É técnica e mensurável." }
  },
  {
    id: 3, difficulty: "easy",
    en: { q: "Which skill helps you work well with other people?",
      options: ["Communication", "Coding", "Data analysis", "Graphic design"],
      correct: 0, hint: "Think about talking and listening." },
    pt: { q: "Qual habilidade ajuda você a trabalhar bem com outras pessoas?",
      options: ["Comunicação", "Programação", "Análise de dados", "Design gráfico"],
      correct: 0, hint: "Pense em falar e ouvir." }
  },
  {
    id: 4, difficulty: "easy",
    en: { q: "Which one is an example of a soft skill?",
      options: ["Microsoft Excel", "Python programming", "Problem solving", "Database management"],
      correct: 2, hint: "You use your mind, not a specific tool." },
    pt: { q: "Qual destas é um exemplo de soft skill?",
      options: ["Microsoft Excel", "Programação em Python", "Resolução de problemas", "Gestão de banco de dados"],
      correct: 2, hint: "Você usa a mente, não uma ferramenta específica." }
  },
  {
    id: 5, difficulty: "easy",
    en: { q: "Which statement best describes a hard skill?",
      options: ["It is a personal characteristic.", "It is a technical skill that can be learned and measured.", "It is the ability to work with other people.", "It is related only to leadership."],
      correct: 1, hint: "Learnable + measurable." },
    pt: { q: "Qual afirmação descreve melhor uma hard skill?",
      options: ["É uma característica pessoal.", "É uma habilidade técnica que pode ser aprendida e medida.", "É a capacidade de trabalhar com outras pessoas.", "Está relacionada apenas à liderança."],
      correct: 1, hint: "Aprendível + mensurável." }
  },
  {
    id: 6, difficulty: "easy",
    en: { q: "A person is great at programming but struggles to communicate with the team. What is correct?",
      options: ["They have only soft skills.", "They have only hard skills.", "They have a hard skill but need to develop a soft skill.", "Programming and communication are both hard skills."],
      correct: 2, hint: "One is technical, the other is personal." },
    pt: { q: "Uma pessoa é ótima em programação mas tem dificuldade para se comunicar com a equipe. O que está correto?",
      options: ["Ela tem apenas soft skills.", "Ela tem apenas hard skills.", "Ela tem uma hard skill mas precisa desenvolver uma soft skill.", "Programação e comunicação são ambas hard skills."],
      correct: 2, hint: "Uma é técnica, a outra é pessoal." }
  },
  {
    id: 7, difficulty: "easy",
    en: { q: "Which of these is a hard skill?",
      options: ["Empathy", "Speaking English", "Patience", "Friendliness"],
      correct: 1, hint: "A language you can test." },
    pt: { q: "Qual destas é uma hard skill?",
      options: ["Empatia", "Falar inglês", "Paciência", "Simpatia"],
      correct: 1, hint: "Um idioma que pode ser testado." }
  },
  {
    id: 8, difficulty: "easy",
    en: { q: "Which is a soft skill?",
      options: ["Accounting", "Time management", "HTML coding", "Driving a forklift"],
      correct: 1, hint: "It's about how you organize yourself." },
    pt: { q: "Qual é uma soft skill?",
      options: ["Contabilidade", "Gestão de tempo", "Programar HTML", "Dirigir uma empilhadeira"],
      correct: 1, hint: "Tem a ver com como você se organiza." }
  },
  {
    id: 9, difficulty: "easy",
    en: { q: "Which skill is technical and learned in school or training?",
      options: ["Communication", "Hard skill", "Soft skill", "Emotional intelligence"],
      correct: 1, hint: "The opposite of soft." },
    pt: { q: "Qual habilidade é técnica e aprendida na escola ou treinamento?",
      options: ["Comunicação", "Hard skill", "Soft skill", "Inteligência emocional"],
      correct: 1, hint: "O oposto de soft." }
  },
  {
    id: 10, difficulty: "easy",
    en: { q: "Which of these is a soft skill?",
      options: ["Welding", "Cooking", "Adaptability", "Fixing a car"],
      correct: 2, hint: "How you handle change." },
    pt: { q: "Qual destas é uma soft skill?",
      options: ["Solda", "Cozinhar", "Adaptabilidade", "Consertar um carro"],
      correct: 2, hint: "Como você lida com mudanças." }
  },
  {
    id: 11, difficulty: "easy",
    en: { q: "Which one is a hard skill?",
      options: ["Critical thinking", "Negotiation", "Photoshop", "Motivation"],
      correct: 2, hint: "A specific software." },
    pt: { q: "Qual destas é uma hard skill?",
      options: ["Pensamento crítico", "Negociação", "Photoshop", "Motivação"],
      correct: 2, hint: "Um software específico." }
  },
  {
    id: 12, difficulty: "easy",
    en: { q: "Soft skills are mainly about…",
      options: ["Machines and tools", "People and behavior", "Money", "Physical strength"],
      correct: 1, hint: "Think 'people skills'." },
    pt: { q: "Soft skills são principalmente sobre…",
      options: ["Máquinas e ferramentas", "Pessoas e comportamento", "Dinheiro", "Força física"],
      correct: 1, hint: "Pense em 'habilidades com pessoas'." }
  },
  {
    id: 13, difficulty: "easy",
    en: { q: "Which of these can be measured with a test or certificate?",
      options: ["Kindness", "Hard skill", "Patience", "Optimism"],
      correct: 1, hint: "Diplomas and certificates." },
    pt: { q: "Qual destas pode ser medida com um teste ou certificado?",
      options: ["Bondade", "Hard skill", "Paciência", "Otimismo"],
      correct: 1, hint: "Diplomas e certificados." }
  },
  {
    id: 14, difficulty: "easy",
    en: { q: "Which one is a soft skill?",
      options: ["Coding in Java", "Using PowerPoint", "Teamwork", "Operating a machine"],
      correct: 2, hint: "Working with others." },
    pt: { q: "Qual destas é uma soft skill?",
      options: ["Programar em Java", "Usar PowerPoint", "Trabalho em equipe", "Operar uma máquina"],
      correct: 2, hint: "Trabalhar com os outros." }
  },
  {
    id: 15, difficulty: "easy",
    en: { q: "Which is a hard skill?",
      options: ["Public speaking", "Data analysis", "Empathy", "Creativity"],
      correct: 1, hint: "Working with numbers and data." },
    pt: { q: "Qual é uma hard skill?",
      options: ["Falar em público", "Análise de dados", "Empatia", "Criatividade"],
      correct: 1, hint: "Trabalhar com números e dados." }
  },
  {
    id: 16, difficulty: "easy",
    en: { q: "Which skill is more about personality than technique?",
      options: ["Accounting", "Soft skill", "Programming", "Engineering"],
      correct: 1, hint: "The 'people' side." },
    pt: { q: "Qual habilidade é mais sobre personalidade do que técnica?",
      options: ["Contabilidade", "Soft skill", "Programação", "Engenharia"],
      correct: 1, hint: "O lado 'humano'." }
  },
  {
    id: 17, difficulty: "easy",
    en: { q: "Which of these is a hard skill?",
      options: ["Listening", "Graphic design", "Empathy", "Positivity"],
      correct: 1, hint: "Think 'design software'." },
    pt: { q: "Qual destas é uma hard skill?",
      options: ["Escutar", "Design gráfico", "Empatia", "Positividade"],
      correct: 1, hint: "Pense em 'software de design'." }
  },
  {
    id: 18, difficulty: "easy",
    en: { q: "Which is a soft skill?",
      options: ["Forklift driving", "Nursing", "Conflict resolution", "Welding"],
      correct: 2, hint: "Solving problems between people." },
    pt: { q: "Qual é uma soft skill?",
      options: ["Dirigir empilhadeira", "Enfermagem", "Resolução de conflitos", "Solda"],
      correct: 2, hint: "Resolver problemas entre pessoas." }
  },
  {
    id: 19, difficulty: "easy",
    en: { q: "Which of these is a hard skill?",
      options: ["Networking", "Foreign language", "Persuasion", "Flexibility"],
      correct: 1, hint: "You can study and test it." },
    pt: { q: "Qual destas é uma hard skill?",
      options: ["Networking", "Idioma estrangeiro", "Persuasão", "Flexibilidade"],
      correct: 1, hint: "Você pode estudar e testar." }
  },
  {
    id: 20, difficulty: "easy",
    en: { q: "Which one is a soft skill?",
      options: ["Video editing", "Report writing", "Leadership", "Excel formulas"],
      correct: 2, hint: "Guiding a group." },
    pt: { q: "Qual destas é uma soft skill?",
      options: ["Edição de vídeo", "Escrever relatórios", "Liderança", "Fórmulas do Excel"],
      correct: 2, hint: "Guiar um grupo." }
  },
  {
    id: 21, difficulty: "easy",
    en: { q: "Which is easier to prove with a certificate?",
      options: ["Empathy", "Hard skill", "Kindness", "Patience"],
      correct: 1, hint: "Think 'measurable'." },
    pt: { q: "Qual é mais fácil de provar com um certificado?",
      options: ["Empatia", "Hard skill", "Bondade", "Paciência"],
      correct: 1, hint: "Pense em 'mensurável'." }
  },
  {
    id: 22, difficulty: "easy",
    en: { q: "Which is a hard skill?",
      options: ["Creativity", "Cooking techniques", "Motivation", "Communication"],
      correct: 1, hint: "Hands-on technique." },
    pt: { q: "Qual é uma hard skill?",
      options: ["Criatividade", "Técnicas de culinária", "Motivação", "Comunicação"],
      correct: 1, hint: "Técnica prática." }
  },
  {
    id: 23, difficulty: "easy",
    en: { q: "Which of these is a soft skill?",
      options: ["3D modeling", "Time management", "Tax calculation", "Server maintenance"],
      correct: 1, hint: "How you organize yourself." },
    pt: { q: "Qual destas é uma soft skill?",
      options: ["Modelagem 3D", "Gestão de tempo", "Cálculo de impostos", "Manutenção de servidor"],
      correct: 1, hint: "Como você se organiza." }
  },
  {
    id: 24, difficulty: "easy",
    en: { q: "Hard skills are usually learned through…",
      options: ["Personal experiences only", "Training, school, or practice", "Sleep", "Friendship"],
      correct: 1, hint: "Where do you learn technical things?" },
    pt: { q: "Hard skills geralmente são aprendidas através de…",
      options: ["Apenas experiências pessoais", "Treinamento, escola ou prática", "Sono", "Amizade"],
      correct: 1, hint: "Onde você aprende coisas técnicas?" }
  },
  {
    id: 25, difficulty: "easy",
    en: { q: "Which is a soft skill?",
      options: ["Typing fast", "Drawing", "Active listening", "Coding"],
      correct: 2, hint: "Paying full attention to someone." },
    pt: { q: "Qual é uma soft skill?",
      options: ["Digitar rápido", "Desenhar", "Escuta ativa", "Programar"],
      correct: 2, hint: "Dar total atenção a alguém." }
  },
  {
    id: 26, difficulty: "easy",
    en: { q: "Which of these is a hard skill?",
      options: ["Emotional intelligence", "Web development", "Teamwork", "Empathy"],
      correct: 1, hint: "Building websites." },
    pt: { q: "Qual destas é uma hard skill?",
      options: ["Inteligência emocional", "Desenvolvimento web", "Trabalho em equipe", "Empatia"],
      correct: 1, hint: "Construir sites." }
  },
  {
    id: 27, difficulty: "easy",
    en: { q: "Which one is a soft skill?",
      options: ["Using Photoshop", "Writing SQL", "Problem solving", "Managing Linux"],
      correct: 2, hint: "Thinking through challenges." },
    pt: { q: "Qual destas é uma soft skill?",
      options: ["Usar Photoshop", "Escrever SQL", "Resolução de problemas", "Gerenciar Linux"],
      correct: 2, hint: "Pensar em desafios." }
  },
  {
    id: 28, difficulty: "easy",
    en: { q: "Which of these is a hard skill?",
      options: ["Friendliness", "Public relations", "Accounting", "Sense of humor"],
      correct: 2, hint: "Numbers and money." },
    pt: { q: "Qual destas é uma hard skill?",
      options: ["Amabilidade", "Relações públicas", "Contabilidade", "Senso de humor"],
      correct: 2, hint: "Números e dinheiro." }
  },
  {
    id: 29, difficulty: "easy",
    en: { q: "Which one is a soft skill?",
      options: ["Machine operation", "Adaptability", "Database design", "AutoCAD"],
      correct: 1, hint: "How you handle change." },
    pt: { q: "Qual destas é uma soft skill?",
      options: ["Operação de máquina", "Adaptabilidade", "Design de banco de dados", "AutoCAD"],
      correct: 1, hint: "Como você lida com mudança." }
  },
  {
    id: 30, difficulty: "easy",
    en: { q: "Which is a hard skill?",
      options: ["Teamwork", "Negotiation", "Cooking", "Motivation"],
      correct: 2, hint: "A practical skill." },
    pt: { q: "Qual é uma hard skill?",
      options: ["Trabalho em equipe", "Negociação", "Cozinhar", "Motivação"],
      correct: 2, hint: "Uma habilidade prática." }
  },
  {
    id: 31, difficulty: "easy",
    en: { q: "Which one is a soft skill?",
      options: ["Filing taxes", "Mixing chemicals", "Creativity", "Driving a truck"],
      correct: 2, hint: "Imagination and new ideas." },
    pt: { q: "Qual destas é uma soft skill?",
      options: ["Declarar impostos", "Misturar produtos químicos", "Criatividade", "Dirigir um caminhão"],
      correct: 2, hint: "Imaginação e novas ideias." }
  },
  {
    id: 32, difficulty: "easy",
    en: { q: "Which is a hard skill?",
      options: ["Conflict resolution", "Foreign language", "Empathy", "Positivity"],
      correct: 1, hint: "You can study and test it." },
    pt: { q: "Qual é uma hard skill?",
      options: ["Resolução de conflitos", "Idioma estrangeiro", "Empatia", "Positividade"],
      correct: 1, hint: "Você pode estudar e testar." }
  },
  {
    id: 33, difficulty: "easy",
    en: { q: "Which of these is a soft skill?",
      options: ["Coding", "Critical thinking", "Accounting", "Drawing"],
      correct: 1, hint: "Analyzing and questioning." },
    pt: { q: "Qual destas é uma soft skill?",
      options: ["Programar", "Pensamento crítico", "Contabilidade", "Desenhar"],
      correct: 1, hint: "Analisar e questionar." }
  },
  {
    id: 34, difficulty: "easy",
    en: { q: "Which is a hard skill?",
      options: ["Stress management", "Public speaking", "Network configuration", "Motivation"],
      correct: 2, hint: "IT and systems." },
    pt: { q: "Qual é uma hard skill?",
      options: ["Gestão de estresse", "Falar em público", "Configuração de rede", "Motivação"],
      correct: 2, hint: "TI e sistemas." }
  },
  {
    id: 35, difficulty: "easy",
    en: { q: "Which one is a soft skill?",
      options: ["Using Excel", "Reading blueprints", "Empathy", "Debugging code"],
      correct: 2, hint: "Understanding others' feelings." },
    pt: { q: "Qual destas é uma soft skill?",
      options: ["Usar Excel", "Ler plantas", "Empatia", "Depurar código"],
      correct: 2, hint: "Entender os sentimentos dos outros." }
  },
  {
    id: 36, difficulty: "easy",
    en: { q: "Which is a hard skill?",
      options: ["Persuasion", "Foreign language", "Active listening", "Positivity"],
      correct: 1, hint: "You can study and test it." },
    pt: { q: "Qual é uma hard skill?",
      options: ["Persuasão", "Idioma estrangeiro", "Escuta ativa", "Positividade"],
      correct: 1, hint: "Você pode estudar e testar." }
  },
  {
    id: 37, difficulty: "easy",
    en: { q: "Which of these is a soft skill?",
      options: ["Fixing printers", "Negotiation", "Typing 80wpm", "Using Photoshop"],
      correct: 1, hint: "Reaching an agreement." },
    pt: { q: "Qual destas é uma soft skill?",
      options: ["Consertar impressoras", "Negociação", "Digitar 80 ppm", "Usar Photoshop"],
      correct: 1, hint: "Chegar a um acordo." }
  },
  {
    id: 38, difficulty: "easy",
    en: { q: "Which is a hard skill?",
      options: ["Teamwork", "Motivation", "Video editing", "Positivity"],
      correct: 2, hint: "Using editing software." },
    pt: { q: "Qual é uma hard skill?",
      options: ["Trabalho em equipe", "Motivação", "Edição de vídeo", "Positividade"],
      correct: 2, hint: "Usar software de edição." }
  },
  {
    id: 39, difficulty: "easy",
    en: { q: "Which one is a soft skill?",
      options: ["Writing code", "Managing time", "Fixing a car", "Building a wall"],
      correct: 1, hint: "It's about how you organize tasks." },
    pt: { q: "Qual destas é uma soft skill?",
      options: ["Escrever código", "Gerenciar o tempo", "Consertar um carro", "Construir um muro"],
      correct: 1, hint: "É sobre como você organiza tarefas." }
  },
  {
    id: 40, difficulty: "easy",
    en: { q: "Which is a hard skill?",
      options: ["Empathy", "Problem solving", "Cooking", "Adaptability"],
      correct: 2, hint: "A practical kitchen skill." },
    pt: { q: "Qual é uma hard skill?",
      options: ["Empatia", "Resolução de problemas", "Cozinhar", "Adaptabilidade"],
      correct: 2, hint: "Uma habilidade prática de cozinha." }
  },

  // ---------- MEDIUM (50) ----------
  {
    id: 41, difficulty: "medium",
    en: { q: "Which pair combines one hard skill and one soft skill?",
      options: ["Programming + Excel", "Python + Java", "Programming + Communication", "Excel + PowerPoint"],
      correct: 2, hint: "One is technical, one is personal." },
    pt: { q: "Qual par combina uma hard skill e uma soft skill?",
      options: ["Programação + Excel", "Python + Java", "Programação + Comunicação", "Excel + PowerPoint"],
      correct: 2, hint: "Uma é técnica, a outra é pessoal." }
  },
  {
    id: 42, difficulty: "medium",
    en: { q: "A job ad says: 'Must know Python.' Which type of skill is required?",
      options: ["Soft skill", "Hard skill", "Both", "None"],
      correct: 1, hint: "Python is a technical tool." },
    pt: { q: "Um anúncio diz: 'Precisa saber Python.' Que tipo de habilidade é exigida?",
      options: ["Soft skill", "Hard skill", "Ambas", "Nenhuma"],
      correct: 1, hint: "Python é uma ferramenta técnica." }
  },
  {
    id: 43, difficulty: "medium",
    en: { q: "Why do employers value soft skills?",
      options: ["They look nice on CVs", "They help teams work well together", "They are easy to test", "They replace hard skills"],
      correct: 1, hint: "It's about collaboration." },
    pt: { q: "Por que empregadores valorizam soft skills?",
      options: ["Ficam bonitas no currículo", "Ajudam equipes a trabalhar bem juntas", "São fáceis de testar", "Substituem hard skills"],
      correct: 1, hint: "Tem a ver com colaboração." }
  },
  {
    id: 44, difficulty: "medium",
    en: { q: "Which is more difficult to measure in a job interview?",
      options: ["Coding ability", "Soft skills", "Excel skills", "Typing speed"],
      correct: 1, hint: "They are more subjective." },
    pt: { q: "Qual é mais difícil de medir em uma entrevista de emprego?",
      options: ["Capacidade de programar", "Soft skills", "Habilidades em Excel", "Velocidade de digitação"],
      correct: 1, hint: "São mais subjetivas." }
  },
  {
    id: 45, difficulty: "medium",
    en: { q: "Which combination best describes a great employee?",
      options: ["Only hard skills", "Only soft skills", "Both hard and soft skills", "Neither"],
      correct: 2, hint: "Balance is key." },
    pt: { q: "Qual combinação melhor descreve um ótimo funcionário?",
      options: ["Apenas hard skills", "Apenas soft skills", "Hard e soft skills", "Nenhuma"],
      correct: 2, hint: "O equilíbrio é fundamental." }
  },
  {
    id: 46, difficulty: "medium",
    en: { q: "Learning a new language is mainly which type of skill?",
      options: ["Soft skill", "Hard skill", "Physical skill", "Artistic skill"],
      correct: 1, hint: "It can be tested and certified." },
    pt: { q: "Aprender um novo idioma é principalmente qual tipo de habilidade?",
      options: ["Soft skill", "Hard skill", "Habilidade física", "Habilidade artística"],
      correct: 1, hint: "Pode ser testada e certificada." }
  },
  {
    id: 47, difficulty: "medium",
    en: { q: "Which soft skill is most related to handling your own emotions?",
      options: ["Empathy", "Emotional intelligence", "Adaptability", "Leadership"],
      correct: 1, hint: "It's in the name." },
    pt: { q: "Qual soft skill está mais relacionada a lidar com suas próprias emoções?",
      options: ["Empatia", "Inteligência emocional", "Adaptabilidade", "Liderança"],
      correct: 1, hint: "Está no nome." }
  },
  {
    id: 48, difficulty: "medium",
    en: { q: "Which is an example of a hard skill in customer service?",
      options: ["Patience", "Empathy", "CRM software", "Positivity"],
      correct: 2, hint: "A tool used in the job." },
    pt: { q: "Qual é um exemplo de hard skill no atendimento ao cliente?",
      options: ["Paciência", "Empatia", "Software de CRM", "Positividade"],
      correct: 2, hint: "Uma ferramenta usada no trabalho." }
  },
  {
    id: 49, difficulty: "medium",
    en: { q: "Which soft skill is most important for a team leader?",
      options: ["Typing speed", "Excel macros", "Communication", "Coding"],
      correct: 2, hint: "How they talk and listen." },
    pt: { q: "Qual soft skill é mais importante para um líder de equipe?",
      options: ["Velocidade de digitação", "Macros do Excel", "Comunicação", "Programação"],
      correct: 2, hint: "Como eles falam e escutam." }
  },
  {
    id: 50, difficulty: "medium",
    en: { q: "A person who codes very well but cannot explain their work has a lack of…",
      options: ["Hard skills", "Soft skills", "Technical tools", "Experience"],
      correct: 1, hint: "Explaining is a people skill." },
    pt: { q: "Uma pessoa que programa muito bem mas não consegue explicar seu trabalho tem falta de…",
      options: ["Hard skills", "Soft skills", "Ferramentas técnicas", "Experiência"],
      correct: 1, hint: "Explicar é uma habilidade com pessoas." }
  },
  {
    id: 51, difficulty: "medium",
    en: { q: "Which is NOT usually considered a soft skill?",
      options: ["Leadership", "Communication", "Java programming", "Teamwork"],
      correct: 2, hint: "It's a programming language." },
    pt: { q: "Qual NÃO é geralmente considerada uma soft skill?",
      options: ["Liderança", "Comunicação", "Programação em Java", "Trabalho em equipe"],
      correct: 2, hint: "É uma linguagem de programação." }
  },
  {
    id: 52, difficulty: "medium",
    en: { q: "Which is NOT usually considered a hard skill?",
      options: ["Database management", "Excel", "Empathy", "Web design"],
      correct: 2, hint: "It's about feelings." },
    pt: { q: "Qual NÃO é geralmente considerada uma hard skill?",
      options: ["Gestão de banco de dados", "Excel", "Empatia", "Design web"],
      correct: 2, hint: "Tem a ver com sentimentos." }
  },
  {
    id: 53, difficulty: "medium",
    en: { q: "Why are soft skills sometimes called 'transferable skills'?",
      options: ["They can be moved between jobs", "They are only for IT", "They can be bought", "They are physical"],
      correct: 0, hint: "Think 'portable'." },
    pt: { q: "Por que soft skills às vezes são chamadas de 'habilidades transferíveis'?",
      options: ["Podem ser levadas entre empregos", "São só para TI", "Podem ser compradas", "São físicas"],
      correct: 0, hint: "Pense em 'portáteis'." }
  },
  {
    id: 54, difficulty: "medium",
    en: { q: "Which best improves team performance?",
      options: ["Only hiring experts", "Combining hard and soft skills", "Ignoring feedback", "Working alone"],
      correct: 1, hint: "Variety of skills helps." },
    pt: { q: "O que melhora melhor o desempenho da equipe?",
      options: ["Contratar apenas especialistas", "Combinar hard e soft skills", "Ignorar feedback", "Trabalhar sozinho"],
      correct: 1, hint: "A variedade de habilidades ajuda." }
  },
  {
    id: 55, difficulty: "medium",
    en: { q: "Which soft skill helps you accept criticism without getting upset?",
      options: ["Resilience", "Coding", "Excel", "Data entry"],
      correct: 0, hint: "The ability to bounce back." },
    pt: { q: "Qual soft skill ajuda você a aceitar críticas sem ficar chateado?",
      options: ["Resiliência", "Programar", "Excel", "Entrada de dados"],
      correct: 0, hint: "Capacidade de se recuperar." }
  },
  {
    id: 56, difficulty: "medium",
    en: { q: "A graphic designer needs which hard skill?",
      options: ["Empathy", "Adobe Photoshop", "Leadership", "Patience"],
      correct: 1, hint: "A design tool." },
    pt: { q: "Um designer gráfico precisa de qual hard skill?",
      options: ["Empatia", "Adobe Photoshop", "Liderança", "Paciência"],
      correct: 1, hint: "Uma ferramenta de design." }
  },
  {
    id: 57, difficulty: "medium",
    en: { q: "Which soft skill is key for a negotiator?",
      options: ["Coding", "Persuasion", "Typing", "Excel"],
      correct: 1, hint: "Convincing others." },
    pt: { q: "Qual soft skill é fundamental para um negociador?",
      options: ["Programar", "Persuasão", "Digitação", "Excel"],
      correct: 1, hint: "Convencer os outros." }
  },
  {
    id: 58, difficulty: "medium",
    en: { q: "Which is an example of a hard skill in marketing?",
      options: ["Creativity", "SEO tools", "Empathy", "Patience"],
      correct: 1, hint: "A marketing tool." },
    pt: { q: "Qual é um exemplo de hard skill em marketing?",
      options: ["Criatividade", "Ferramentas de SEO", "Empatia", "Paciência"],
      correct: 1, hint: "Uma ferramenta de marketing." }
  },
  {
    id: 59, difficulty: "medium",
    en: { q: "Which soft skill helps you lead a project successfully?",
      options: ["Attention to detail", "Teamwork", "Excel skills", "Data entry"],
      correct: 1, hint: "Working well with people." },
    pt: { q: "Qual soft skill ajuda você a liderar um projeto com sucesso?",
      options: ["Atenção aos detalhes", "Trabalho em equipe", "Habilidades em Excel", "Entrada de dados"],
      correct: 1, hint: "Trabalhar bem com pessoas." }
  },
  {
    id: 60, difficulty: "medium",
    en: { q: "Which is more likely to change over time?",
      options: ["Hard skills only", "Soft skills only", "Both can change with practice", "Neither"],
      correct: 2, hint: "You can improve both." },
    pt: { q: "Qual é mais provável de mudar com o tempo?",
      options: ["Apenas hard skills", "Apenas soft skills", "Ambas podem mudar com prática", "Nenhuma"],
      correct: 2, hint: "Você pode melhorar as duas." }
  },
  {
    id: 61, difficulty: "medium",
    en: { q: "What is the main difference between a hard and a soft skill?",
      options: ["Hard skills are more fun", "Hard skills are teachable and measurable, soft skills are personal and interpersonal", "Soft skills cost more", "There is no difference"],
      correct: 1, hint: "One is technical, one is personal." },
    pt: { q: "Qual é a principal diferença entre uma hard skill e uma soft skill?",
      options: ["Hard skills são mais divertidas", "Hard skills são ensináveis e mensuráveis, soft skills são pessoais e interpessoais", "Soft skills custam mais", "Não há diferença"],
      correct: 1, hint: "Uma é técnica, a outra é pessoal." }
  },
  {
    id: 62, difficulty: "medium",
    en: { q: "Which pair contains ONLY soft skills?",
      options: ["Communication and Excel", "Leadership and Teamwork", "Programming and Communication", "Excel and Data Analysis"],
      correct: 1, hint: "Both are people skills." },
    pt: { q: "Qual par contém APENAS soft skills?",
      options: ["Comunicação e Excel", "Liderança e Trabalho em equipe", "Programação e Comunicação", "Excel e Análise de Dados"],
      correct: 1, hint: "Ambas são habilidades com pessoas." }
  },
  {
    id: 63, difficulty: "medium",
    en: { q: "Which pair contains ONLY hard skills?",
      options: ["Python and Excel", "Communication and Python", "Empathy and Excel", "Leadership and Python"],
      correct: 0, hint: "Both are technical tools." },
    pt: { q: "Qual par contém APENAS hard skills?",
      options: ["Python e Excel", "Comunicação e Python", "Empatia e Excel", "Liderança e Python"],
      correct: 0, hint: "Ambas são ferramentas técnicas." }
  },
  {
    id: 64, difficulty: "medium",
    en: { q: "Critical thinking is best classified as…",
      options: ["A hard skill", "A soft skill", "A physical skill", "An artistic skill"],
      correct: 1, hint: "It's about how you think." },
    pt: { q: "Pensamento crítico é melhor classificado como…",
      options: ["Uma hard skill", "Uma soft skill", "Uma habilidade física", "Uma habilidade artística"],
      correct: 1, hint: "Tem a ver com como você pensa." }
  },
  {
    id: 65, difficulty: "medium",
    en: { q: "Which one is more likely to be listed on a technical CV?",
      options: ["Empathy", "Python", "Patience", "Motivation"],
      correct: 1, hint: "Concrete, technical tools." },
    pt: { q: "Qual é mais provável de estar em um currículo técnico?",
      options: ["Empatia", "Python", "Paciência", "Motivação"],
      correct: 1, hint: "Ferramentas técnicas concretas." }
  },
  {
    id: 66, difficulty: "medium",
    en: { q: "Which one is more likely to be evaluated in a behavioral interview?",
      options: ["Typing speed", "Leadership", "Excel skills", "Coding ability"],
      correct: 1, hint: "Behavioral = about how you act." },
    pt: { q: "Qual é mais provável de ser avaliado em uma entrevista comportamental?",
      options: ["Velocidade de digitação", "Liderança", "Habilidades em Excel", "Capacidade de programar"],
      correct: 1, hint: "Comportamental = sobre como você age." }
  },
  {
    id: 67, difficulty: "medium",
    en: { q: "For a manager, which soft skill is most useful for delegating tasks?",
      options: ["Programming", "Trust and communication", "Excel", "Data entry"],
      correct: 1, hint: "You need to trust and explain." },
    pt: { q: "Para um gerente, qual soft skill é mais útil para delegar tarefas?",
      options: ["Programação", "Confiança e comunicação", "Excel", "Entrada de dados"],
      correct: 1, hint: "Você precisa confiar e explicar." }
  },
  {
    id: 68, difficulty: "medium",
    en: { q: "Which is the best example of a 'hybrid' professional?",
      options: ["Only technical", "Only creative", "Strong in both hard and soft skills", "Only good at talking"],
      correct: 2, hint: "Balance is best." },
    pt: { q: "Qual é o melhor exemplo de um profissional 'híbrido'?",
      options: ["Apenas técnico", "Apenas criativo", "Forte em hard e soft skills", "Apenas bom de conversa"],
      correct: 2, hint: "O equilíbrio é melhor." }
  },
  {
    id: 69, difficulty: "medium",
    en: { q: "An accountant mainly uses which type of skill?",
      options: ["Soft", "Hard", "Physical", "Artistic"],
      correct: 1, hint: "Numbers and rules." },
    pt: { q: "Um contador usa principalmente qual tipo de habilidade?",
      options: ["Soft", "Hard", "Física", "Artística"],
      correct: 1, hint: "Números e regras." }
  },
  {
    id: 70, difficulty: "medium",
    en: { q: "A therapist mainly uses which type of skill?",
      options: ["Soft", "Hard", "Physical", "Mechanical"],
      correct: 0, hint: "It's about people and emotions." },
    pt: { q: "Um terapeuta usa principalmente qual tipo de habilidade?",
      options: ["Soft", "Hard", "Física", "Mecânica"],
      correct: 0, hint: "Tem a ver com pessoas e emoções." }
  },
  {
    id: 71, difficulty: "medium",
    en: { q: "Which soft skill improves teamwork the most?",
      options: ["Collaboration", "Typing", "Excel", "Coding"],
      correct: 0, hint: "It's in the name of the skill." },
    pt: { q: "Qual soft skill melhora mais o trabalho em equipe?",
      options: ["Colaboração", "Digitação", "Excel", "Programação"],
      correct: 0, hint: "Está no nome da habilidade." }
  },
  {
    id: 72, difficulty: "medium",
    en: { q: "Which hard skill is essential for a data analyst?",
      options: ["Empathy", "SQL", "Leadership", "Creativity"],
      correct: 1, hint: "A data query language." },
    pt: { q: "Qual hard skill é essencial para um analista de dados?",
      options: ["Empatia", "SQL", "Liderança", "Criatividade"],
      correct: 1, hint: "Uma linguagem de consulta de dados." }
  },
  {
    id: 73, difficulty: "medium",
    en: { q: "Which soft skill helps you deal with angry customers?",
      options: ["Coding", "Patience and empathy", "Excel", "Data analysis"],
      correct: 1, hint: "Calm + understanding." },
    pt: { q: "Qual soft skill ajuda você a lidar com clientes irritados?",
      options: ["Programação", "Paciência e empatia", "Excel", "Análise de dados"],
      correct: 1, hint: "Calma + compreensão." }
  },
  {
    id: 74, difficulty: "medium",
    en: { q: "Which is the best description of 'adaptability'?",
      options: ["A hard skill", "A soft skill", "A physical skill", "A technical tool"],
      correct: 1, hint: "How you handle change." },
    pt: { q: "Qual é a melhor descrição de 'adaptabilidade'?",
      options: ["Uma hard skill", "Uma soft skill", "Uma habilidade física", "Uma ferramenta técnica"],
      correct: 1, hint: "Como você lida com mudanças." }
  },
  {
    id: 75, difficulty: "medium",
    en: { q: "Which combination of skills is best for a project manager?",
      options: ["Only hard skills", "Only soft skills", "Both - technical + people skills", "Only programming"],
      correct: 2, hint: "Projects need both." },
    pt: { q: "Qual combinação de habilidades é melhor para um gerente de projeto?",
      options: ["Apenas hard skills", "Apenas soft skills", "Ambas - técnicas + pessoas", "Apenas programação"],
      correct: 2, hint: "Projetos precisam das duas." }
  },
  {
    id: 76, difficulty: "medium",
    en: { q: "Which soft skill is MOST related to innovation?",
    options: ["Routine", "Creativity", "Obedience", "Silence"],
      correct: 1, hint: "New ideas come from it." },
    pt: { q: "Qual soft skill está MAIS relacionada à inovação?",
      options: ["Rotina", "Criatividade", "Obediência", "Silêncio"],
      correct: 1, hint: "Novas ideias vêm dela." }
  },
  {
    id: 77, difficulty: "medium",
    en: { q: "Which hard skill would a translator need?",
    options: ["Empathy", "Fluency in two languages", "Leadership", "Patience"],
      correct: 1, hint: "It's about languages." },
    pt: { q: "Qual hard skill um tradutor precisaria?",
      options: ["Empatia", "Fluência em dois idiomas", "Liderança", "Paciência"],
      correct: 1, hint: "Tem a ver com idiomas." }
  },
  {
    id: 78, difficulty: "medium",
    en: { q: "Which soft skill is required for effective feedback?",
    options: ["Coding", "Constructive communication", "Excel", "Speed typing"],
      correct: 1, hint: "It's about how you say things." },
    pt: { q: "Qual soft skill é necessária para um feedback eficaz?",
      options: ["Programação", "Comunicação construtiva", "Excel", "Digitação rápida"],
      correct: 1, hint: "Tem a ver com como você diz as coisas." }
  },
  {
    id: 79, difficulty: "medium",
    en: { q: "Which is an example of a hard skill in the medical field?",
    options: ["Empathy", "Surgery technique", "Patience", "Bedside manner"],
      correct: 1, hint: "A technical medical procedure." },
    pt: { q: "Qual é um exemplo de hard skill na área médica?",
      options: ["Empatia", "Técnica cirúrgica", "Paciência", "Forma de tratar o paciente"],
      correct: 1, hint: "Um procedimento médico técnico." }
  },
  {
    id: 80, difficulty: "medium",
    en: { q: "Which soft skill is required to give a public presentation?",
    options: ["Confidence and communication", "Programming", "Excel", "Data entry"],
      correct: 0, hint: "Confidence + speaking." },
    pt: { q: "Qual soft skill é necessária para dar uma apresentação pública?",
      options: ["Confiança e comunicação", "Programação", "Excel", "Entrada de dados"],
      correct: 0, hint: "Confiança + falar." }
  },
  {
    id: 81, difficulty: "medium",
    en: { q: "Which is the best example of a hard skill in a chef's job?",
    options: ["Leadership", "Knife technique", "Patience", "Creativity"],
      correct: 1, hint: "A specific kitchen technique." },
    pt: { q: "Qual é o melhor exemplo de hard skill no trabalho de um chef?",
      options: ["Liderança", "Técnica de corte com faca", "Paciência", "Criatividade"],
      correct: 1, hint: "Uma técnica específica de cozinha." }
  },
  {
    id: 82, difficulty: "medium",
    en: { q: "Which soft skill is essential for good customer support?",
    options: ["Typing speed", "Empathy", "Programming", "Coding"],
      correct: 1, hint: "Understanding feelings." },
    pt: { q: "Qual soft skill é essencial para um bom suporte ao cliente?",
      options: ["Velocidade de digitação", "Empatia", "Programação", "Código"],
      correct: 1, hint: "Entender sentimentos." }
  },
  {
    id: 83, difficulty: "medium",
    en: { q: "Which hard skill would a graphic designer need?",
    options: ["Empathy", "Adobe Illustrator", "Leadership", "Patience"],
      correct: 1, hint: "A design software." },
    pt: { q: "Qual hard skill um designer gráfico precisaria?",
      options: ["Empatia", "Adobe Illustrator", "Liderança", "Paciência"],
      correct: 1, hint: "Um software de design." }
  },
  {
    id: 84, difficulty: "medium",
    en: { q: "Which combination is BEST for a startup founder?",
      options: ["Only hard skills", "Only soft skills", "Both: technical + leadership + communication", "Only finance"],
      correct: 2, hint: "Founders need it all." },
    pt: { q: "Qual combinação é MELHOR para o fundador de uma startup?",
      options: ["Apenas hard skills", "Apenas soft skills", "Ambas: técnicas + liderança + comunicação", "Apenas finanças"],
      correct: 2, hint: "Fundadores precisam de tudo." }
  },
  {
    id: 85, difficulty: "medium",
    en: { q: "Which soft skill helps avoid misunderstandings in emails?",
    options: ["Clear writing", "Coding", "Excel", "Speed typing"],
      correct: 0, hint: "Be clear in your messages." },
    pt: { q: "Qual soft skill ajuda a evitar mal-entendidos em e-mails?",
      options: ["Escrita clara", "Programação", "Excel", "Digitação rápida"],
      correct: 0, hint: "Seja claro nas mensagens." }
  },
  {
    id: 86, difficulty: "medium",
    en: { q: "Which type of skill improves faster with deliberate practice?",
    options: ["Soft skills only", "Hard skills only", "Both can improve with practice", "Neither"],
      correct: 2, hint: "Practice helps everything." },
    pt: { q: "Qual tipo de habilidade melhora mais rápido com prática deliberada?",
      options: ["Apenas soft skills", "Apenas hard skills", "Ambas podem melhorar com prática", "Nenhuma"],
      correct: 2, hint: "Prática ajuda em tudo." }
  },
  {
    id: 87, difficulty: "medium",
    en: { q: "Which is a good example of a 'soft skill on a CV'?",
    options: ["Proficient in Java", "Strong team player", "Expert in Photoshop", "Certified in Excel"],
      correct: 1, hint: "It's about people." },
    pt: { q: "Qual é um bom exemplo de 'soft skill no currículo'?",
      options: ["Proficiente em Java", "Forte jogador de equipe", "Especialista em Photoshop", "Certificado em Excel"],
      correct: 1, hint: "Tem a ver com pessoas." }
  },
  {
    id: 88, difficulty: "medium",
    en: { q: "Which is a good example of a 'hard skill on a CV'?",
      options: ["Team player", "Fluent in Spanish", "Empathetic", "Creative"],
      correct: 1, hint: "You can test it." },
    pt: { q: "Qual é um bom exemplo de 'hard skill no currículo'?",
      options: ["Jogador de equipe", "Fluente em espanhol", "Empático", "Criativo"],
      correct: 1, hint: "Você pode testar." }
  },
  {
    id: 89, difficulty: "medium",
    en: { q: "Which pair contains a soft skill + a hard skill?",
      options: ["Excel + PowerPoint", "Empathy + Excel", "Empathy + Patience", "Excel + Data analysis"],
      correct: 1, hint: "One is people, one is tool." },
    pt: { q: "Qual par contém uma soft skill + uma hard skill?",
      options: ["Excel + PowerPoint", "Empatia + Excel", "Empatia + Paciência", "Excel + Análise de dados"],
      correct: 1, hint: "Uma é pessoas, outra é ferramenta." }
  },
  {
    id: 90, difficulty: "medium",
    en: { q: "Which is true about soft skills?",
      options: ["They cannot be learned", "They can be developed with practice", "They only matter in IT", "They replace hard skills"],
      correct: 1, hint: "You can train them." },
    pt: { q: "O que é verdade sobre soft skills?",
      options: ["Não podem ser aprendidas", "Podem ser desenvolvidas com prática", "Só importam em TI", "Substituem hard skills"],
      correct: 1, hint: "Você pode treiná-las." }
  },

  // ---------- HARD (30) ----------
  {
    id: 91, difficulty: "hard",
    en: { q: "Which statement is most accurate?",
      options: ["Only hard skills matter for success", "Only soft skills matter", "Hard skills get you the interview, soft skills get you the job", "Soft skills are for managers only"],
      correct: 2, hint: "It's a common saying in HR." },
    pt: { q: "Qual afirmação é mais precisa?",
      options: ["Apenas hard skills importam para o sucesso", "Apenas soft skills importam", "Hard skills te fazem conseguir a entrevista, soft skills te fazem conseguir o trabalho", "Soft skills são só para gerentes"],
      correct: 2, hint: "É um ditado comum em RH." }
  },
  {
    id: 92, difficulty: "hard",
    en: { q: "In the 21st-century workplace, which is generally considered MORE difficult to automate?",
      options: ["Data entry", "Repetitive tasks", "Soft skills such as empathy and creativity", "Simple calculations"],
      correct: 2, hint: "Human qualities are harder to replace." },
    pt: { q: "No mercado de trabalho do século 21, o que geralmente é considerado MAIS difícil de automatizar?",
      options: ["Entrada de dados", "Tarefas repetitivas", "Soft skills como empatia e criatividade", "Cálculos simples"],
      correct: 2, hint: "Qualidades humanas são mais difíceis de substituir." }
  },
  {
    id: 93, difficulty: "hard",
    en: { q: "A software engineer is promoted to a team lead. What is the main skill they must develop?",
      options: ["More programming languages", "People leadership and communication", "Excel", "Typing"],
      correct: 1, hint: "The new role is about people." },
    pt: { q: "Um engenheiro de software é promovido a líder de equipe. Qual é a principal habilidade que ele deve desenvolver?",
      options: ["Mais linguagens de programação", "Liderança de pessoas e comunicação", "Excel", "Digitação"],
      correct: 1, hint: "O novo papel é sobre pessoas." }
  },
  {
    id: 94, difficulty: "hard",
    en: { q: "Which is the best example of 'emotional intelligence' in the workplace?",
      options: ["Ignoring feedback", "Recognizing your own emotions and managing them", "Working long hours", "Being always right"],
      correct: 1, hint: "Awareness + management." },
    pt: { q: "Qual é o melhor exemplo de 'inteligência emocional' no trabalho?",
      options: ["Ignorar feedback", "Reconhecer suas próprias emoções e gerenciá-las", "Trabalhar muitas horas", "Estar sempre certo"],
      correct: 1, hint: "Consciência + gestão." }
  },
  {
    id: 95, difficulty: "hard",
    en: { q: "Which situation best shows a lack of 'active listening'?",
      options: ["Asking clarifying questions", "Interrupting before the person finishes", "Taking notes", "Nodding in understanding"],
      correct: 1, hint: "Interrupting = not listening." },
    pt: { q: "Qual situação melhor mostra falta de 'escuta ativa'?",
      options: ["Fazer perguntas esclarecedoras", "Interromper antes da pessoa terminar", "Fazer anotações", "Acenar compreendendo"],
      correct: 1, hint: "Interromper = não escutar." }
  },
  {
    id: 96, difficulty: "hard",
    en: { q: "Which is TRUE about the relationship between hard and soft skills?",
      options: ["You only need one", "They are independent", "They complement each other in a successful career", "Soft skills are less important"],
      correct: 2, hint: "Both together is best." },
    pt: { q: "O que é VERDADE sobre a relação entre hard e soft skills?",
      options: ["Você só precisa de uma", "São independentes", "Elas se complementam em uma carreira de sucesso", "Soft skills são menos importantes"],
      correct: 2, hint: "As duas juntas é melhor." }
  },
  {
    id: 97, difficulty: "hard",
    en: { q: "A team is failing to meet deadlines. Which soft skill is most likely missing?",
    options: ["Excel", "Time management and accountability", "Coding", "Photoshop"],
      correct: 1, hint: "Deadlines = time + responsibility." },
    pt: { q: "Uma equipe não está cumprindo prazos. Qual soft skill provavelmente está faltando?",
      options: ["Excel", "Gestão de tempo e responsabilidade", "Programação", "Photoshop"],
      correct: 1, hint: "Prazos = tempo + responsabilidade." }
  },
  {
    id: 98, difficulty: "hard",
    en: { q: "Which scenario best illustrates 'adaptability'?",
    options: ["Refusing change", "Learning a new tool when the company switches systems", "Complaining about new rules", "Doing the same thing for 10 years"],
      correct: 1, hint: "Adapt = learn new things." },
    pt: { q: "Qual cenário ilustra melhor 'adaptabilidade'?",
      options: ["Recusar mudanças", "Aprender uma nova ferramenta quando a empresa muda de sistema", "Reclamar de novas regras", "Fazer a mesma coisa por 10 anos"],
      correct: 1, hint: "Adaptar = aprender coisas novas." }
  },
  {
    id: 99, difficulty: "hard",
    en: { q: "Why is 'communication' often considered the #1 soft skill?",
      options: ["It's easy to learn", "It affects every other skill and task", "It's only for managers", "It replaces hard skills"],
      correct: 1, hint: "It touches everything." },
    pt: { q: "Por que 'comunicação' é frequentemente considerada a soft skill #1?",
      options: ["É fácil de aprender", "Afeta todas as outras habilidades e tarefas", "É só para gerentes", "Substitui hard skills"],
      correct: 1, hint: "Toca em tudo." }
  },
  {
    id: 100, difficulty: "hard",
    en: { q: "In a crisis, which combination of skills is most valuable?",
      options: ["Only technical skills", "Only creativity", "Technical competence + calm decision-making", "Only charisma"],
      correct: 2, hint: "Competence + calmness." },
    pt: { q: "Em uma crise, qual combinação de habilidades é mais valiosa?",
      options: ["Apenas habilidades técnicas", "Apenas criatividade", "Competência técnica + tomada de decisão calma", "Apenas carisma"],
      correct: 2, hint: "Competência + calma." }
  },
  {
    id: 101, difficulty: "hard",
    en: { q: "Which describes the 'T-shaped professional'?",
      options: ["Only one skill", "Deep expertise in one area + broad skills in others", "Only soft skills", "Only hard skills"],
      correct: 1, hint: "Deep + broad." },
    pt: { q: "O que descreve o 'profissional em forma de T'?",
      options: ["Apenas uma habilidade", "Expertise profunda em uma área + habilidades amplas em outras", "Apenas soft skills", "Apenas hard skills"],
      correct: 1, hint: "Profundo + amplo." }
  },
  {
    id: 102, difficulty: "hard",
    en: { q: "Which soft skill is most connected to 'growth mindset'?",
    options: ["Resistance to feedback", "Willingness to learn from mistakes", "Perfectionism", "Avoiding challenges"],
      correct: 1, hint: "Growth = learning." },
    pt: { q: "Qual soft skill está mais conectada ao 'mindset de crescimento'?",
      options: ["Resistência ao feedback", "Disposição para aprender com erros", "Perfeccionismo", "Evitar desafios"],
      correct: 1, hint: "Crescimento = aprender." }
  },
  {
    id: 103, difficulty: "hard",
    en: { q: "Which is the strongest sign that someone has good 'leadership' skills?",
      options: ["They give orders", "They inspire and develop others", "They work alone", "They avoid decisions"],
      correct: 1, hint: "Leadership = developing people." },
    pt: { q: "Qual é o sinal mais forte de que alguém tem boas habilidades de 'liderança'?",
      options: ["Dá ordens", "Inspira e desenvolve os outros", "Trabalha sozinho", "Evita decisões"],
      correct: 1, hint: "Liderança = desenvolver pessoas." }
  },
  {
    id: 104, difficulty: "hard",
    en: { q: "Which is a common mistake when listing skills on a CV?",
      options: ["Being specific", "Listing vague soft skills without examples", "Using metrics", "Showing certificates"],
      correct: 1, hint: "Vague = weak." },
    pt: { q: "Qual é um erro comum ao listar habilidades no currículo?",
      options: ["Ser específico", "Listar soft skills vagas sem exemplos", "Usar métricas", "Mostrar certificados"],
      correct: 1, hint: "Vago = fraco." }
  },
  {
    id: 105, difficulty: "hard",
    en: { q: "The best way to PROVE a soft skill in an interview is to…",
      options: ["Just say you have it", "Give a concrete example (STAR method)", "List it on the CV", "Avoid the topic"],
      correct: 1, hint: "STAR = Situation, Task, Action, Result." },
    pt: { q: "A melhor forma de PROVAR uma soft skill em uma entrevista é…",
      options: ["Apenas dizer que você tem", "Dar um exemplo concreto (método STAR)", "Listar no currículo", "Evitar o assunto"],
      correct: 1, hint: "STAR = Situação, Tarefa, Ação, Resultado." }
  },
  {
    id: 106, difficulty: "hard",
    en: { q: "Which statement about the future of work is most accurate?",
      options: ["Soft skills will matter less", "Both hard and soft skills will keep evolving", "Only coding matters", "AI will replace all soft skills"],
      correct: 1, hint: "Everything evolves." },
    pt: { q: "Qual afirmação sobre o futuro do trabalho é mais precisa?",
      options: ["Soft skills importarão menos", "Hard e soft skills continuarão evoluindo", "Apenas programação importa", "A IA substituirá todas as soft skills"],
      correct: 1, hint: "Tudo evolui." }
  },
  {
    id: 107, difficulty: "hard",
    en: { q: "Which skill best helps a professional recover from failure?",
      options: ["Excel", "Resilience", "Coding", "Data entry"],
      correct: 1, hint: "Bounce back from setbacks." },
    pt: { q: "Qual habilidade ajuda melhor um profissional a se recuperar de um fracasso?",
      options: ["Excel", "Resiliência", "Programação", "Entrada de dados"],
      correct: 1, hint: "Recuperar-se de contratempos." }
  },
  {
    id: 108, difficulty: "hard",
    en: { q: "Which of these best combines hard + soft skills in the SAME action?",
    options: ["Writing code alone", "Presenting a data analysis to non-technical stakeholders", "Reading a book", "Filing documents"],
      correct: 1, hint: "Technical + communication." },
    pt: { q: "Qual destas melhor combina hard + soft skills NA MESMA ação?",
    options: ["Escrever código sozinho", "Apresentar uma análise de dados para partes interessadas não técnicas", "Ler um livro", "Arquivar documentos"],
      correct: 1, hint: "Técnica + comunicação." }
  },
  {
    id: 109, difficulty: "hard",
    en: { q: "Why do technical experts sometimes struggle as managers?",
      options: ["They lack hard skills", "They may lack soft skills like delegation and empathy", "They know too much", "They are always lazy"],
      correct: 1, hint: "Different skill set needed." },
    pt: { q: "Por que especialistas técnicos às vezes têm dificuldade como gerentes?",
      options: ["Faltam hard skills", "Podem faltar soft skills como delegação e empatia", "Sabem demais", "São sempre preguiçosos"],
      correct: 1, hint: "Conjunto de habilidades diferente." }
  },
  {
    id: 110, difficulty: "hard",
    en: { q: "Which is the best example of 'constructive feedback'?",
      options: ["'You are wrong.'", "'I noticed X; how about trying Y next time?'", "'Everyone knows this.'", "Saying nothing"],
      correct: 1, hint: "Specific + supportive." },
    pt: { q: "Qual é o melhor exemplo de 'feedback construtivo'?",
      options: ["'Você está errado.'", "'Notei X; que tal tentar Y na próxima vez?'", "'Todo mundo sabe disso.'", "Não dizer nada"],
      correct: 1, hint: "Específico + solidário." }
  },
  {
    id: 111, difficulty: "hard",
    en: { q: "Which is TRUE about soft skills across cultures?",
      options: ["They mean the same everywhere", "Some have different meanings in different cultures", "They don't exist outside the West", "They are illegal in some countries"],
      correct: 1, hint: "Context matters." },
    pt: { q: "O que é VERDADE sobre soft skills entre culturas?",
      options: ["Significam o mesmo em todos os lugares", "Algumas têm significados diferentes em diferentes culturas", "Não existem fora do Ocidente", "São ilegais em alguns países"],
      correct: 1, hint: "Contexto importa." }
  },
  {
    id: 112, difficulty: "hard",
    en: { q: "Which is the best example of 'empathy' at work?",
      options: ["Ignoring a colleague's stress", "Understanding a colleague's perspective before responding", "Telling them to calm down", "Reporting them to HR"],
      correct: 1, hint: "Understand first." },
    pt: { q: "Qual é o melhor exemplo de 'empatia' no trabalho?",
      options: ["Ignorar o estresse de um colega", "Entender a perspectiva do colega antes de responder", "Dizer para ele se acalmar", "Denunciá-lo ao RH"],
      correct: 1, hint: "Entenda primeiro." }
  },
  {
    id: 113, difficulty: "hard",
    en: { q: "Which soft skill is MOST needed for remote work?",
    options: ["Public speaking", "Self-discipline and written communication", "Cooking", "Typing"],
      correct: 1, hint: "Remote = autonomy + written." },
    pt: { q: "Qual soft skill é MAIS necessária para o trabalho remoto?",
      options: ["Falar em público", "Autodisciplina e comunicação escrita", "Cozinhar", "Digitação"],
      correct: 1, hint: "Remoto = autonomia + escrita." }
  },
  {
    id: 114, difficulty: "hard",
    en: { q: "Which is the strongest sign of good 'critical thinking'?",
    options: ["Accepting everything", "Questioning assumptions with evidence", "Never changing your mind", "Repeating what you hear"],
      correct: 1, hint: "Question + evidence." },
    pt: { q: "Qual é o sinal mais forte de um bom 'pensamento crítico'?",
      options: ["Aceitar tudo", "Questionar suposições com evidências", "Nunca mudar de ideia", "Repetir o que ouve"],
      correct: 1, hint: "Questionar + evidência." }
  },
  {
    id: 115, difficulty: "hard",
    en: { q: "Which phrase best captures the value of soft skills in a team?",
    options: ["'I win, you lose'", "'We rise by lifting others'", "'Every man for himself'", "'Silence is golden'"],
      correct: 1, hint: "Collaboration mindset." },
    pt: { q: "Qual frase melhor captura o valor das soft skills em uma equipe?",
      options: ["'Eu ganho, você perde'", "'Subimos quando levantamos os outros'", "'Cada um por si'", "'O silêncio é ouro'"],
      correct: 1, hint: "Mentalidade de colaboração." }
  },
  {
    id: 116, difficulty: "hard",
    en: { q: "Which is the biggest risk of ignoring soft skills development?",
      options: ["Becoming too technical", "Being technically capable but unable to lead or collaborate", "Losing money only", "Nothing"],
      correct: 1, hint: "Career ceiling." },
    pt: { q: "Qual é o maior risco de ignorar o desenvolvimento de soft skills?",
      options: ["Ficar técnico demais", "Ser tecnicamente capaz mas incapaz de liderar ou colaborar", "Perder apenas dinheiro", "Nada"],
      correct: 1, hint: "Teto de carreira." }
  },
  {
    id: 117, difficulty: "hard",
    en: { q: "Which combination is BEST for a customer success role?",
    options: ["Only coding", "Only Excel", "Empathy + product knowledge + communication", "Only design"],
      correct: 2, hint: "People + product + talking." },
    pt: { q: "Qual combinação é MELHOR para uma função de sucesso do cliente?",
      options: ["Apenas programação", "Apenas Excel", "Empatia + conhecimento do produto + comunicação", "Apenas design"],
      correct: 2, hint: "Pessoas + produto + conversar." }
  },
  {
    id: 118, difficulty: "hard",
    en: { q: "Which statement about 'soft skills training' is correct?",
      options: ["It's impossible", "It requires practice and feedback", "It's only for children", "It happens overnight"],
      correct: 1, hint: "Practice + feedback." },
    pt: { q: "Qual afirmação sobre 'treinamento de soft skills' está correta?",
      options: ["É impossível", "Requer prática e feedback", "É só para crianças", "Acontece da noite para o dia"],
      correct: 1, hint: "Prática + feedback." }
  },
  {
    id: 119, difficulty: "hard",
    en: { q: "Which is the best example of a 'cross-functional skill'?",
    options: ["Only coding in one language", "Project management that combines technical and people skills", "Only Excel", "Only soft skills"],
      correct: 1, hint: "Bridges technical + people." },
    pt: { q: "Qual é o melhor exemplo de uma 'habilidade multifuncional'?",
      options: ["Programar em apenas uma linguagem", "Gestão de projetos que combina habilidades técnicas e de pessoas", "Apenas Excel", "Apenas soft skills"],
      correct: 1, hint: "Une técnico + pessoas." }
  },
  {
    id: 120, difficulty: "hard",
    en: { q: "Which best describes the relationship between hard and soft skills in a career?",
    options: ["Choose one or the other", "Hard skills open doors; soft skills keep them open", "Only hard skills matter", "Only soft skills matter"],
      correct: 1, hint: "Doors = open + keep open." },
    pt: { q: "O que melhor descreve a relação entre hard e soft skills em uma carreira?",
      options: ["Escolha uma ou outra", "Hard skills abrem portas; soft skills as mantêm abertas", "Apenas hard skills importam", "Apenas soft skills importam"],
      correct: 1, hint: "Portas = abrir + manter aberta." }
  }
];

// Distribuição: 40 easy (1-40), 50 medium (41-90), 30 hard (91-120)
const DIFFICULTY_DISTRIBUTION = {
  easy:   { count: 40, weight: 0.4 },
  medium: { count: 50, weight: 0.4 },
  hard:   { count: 30, weight: 0.2 }
};