import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "platform",
    url: "#platform",
  },
  {
    id: "1",
    title: "solutions",
    url: "#solutions",
  },
  {
    id: "2",
    title: "Resources",
    url: "#Resources",
  },
  {
    id: "3",
    title: "Company",
    url: "#Company",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Voice Transcription",
  "Automatic Speech Recognition",
  "Voice Biometrics",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Automation + Workflows",
    text: "Automate your key process",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Dev Platform + Apps",
    text: "Easily integrate with your apps",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Customize the chatbot's appearance and behavior.",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Kowledge Base + Articles",
    text: "Empower agents and answer FAQs",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Get instant answers to your questions without the hassle of searching through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Continuous Improvement",
    text: "Powered by advanced AI, the app learns and improves to provide accurate and relevant responses every time.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Accessible Anywhere on Web",
    text: "Connect to the AI assistant from any web browser, making it accessible and convenient wherever you are.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Quick Response",
    text: "Experience fast, accurate responses to your questions, enhancing your productivity without delay.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const blog = [
  {
    id: "1",
    title: "Understanding the Basics of Artificial Intelligence",
    text: "Artificial Intelligence (AI) refers to machines that can mimic human intelligence, performing tasks such as recognizing patterns, making decisions, and solving problems. This blog provides a foundational understanding of AI, its history, major breakthroughs, and the impact it has had on industries like healthcare, finance, and transportation."
  },
  {
    id: "2",
    title: "Machine Learning: The Engine Behind AI",
    text: "Machine learning (ML) is a subset of AI that enables systems to learn from data without being explicitly programmed. This article dives into ML techniques, including supervised, unsupervised, and reinforcement learning, and explores how they are applied to create smart solutions across industries, from fraud detection to personalized recommendations."
  },
  {
    id: "3",
    title: "Deep Learning and Neural Networks",
    text: "Deep learning is a type of machine learning that involves neural networks with multiple layers, allowing computers to recognize intricate patterns. This post explores neural networks' structure, such as neurons, layers, and activation functions, and covers how deep learning is used in applications like image recognition, voice processing, and autonomous driving."
  },
  {
    id: "4",
    title: "AI in Healthcare: Transforming Patient Care",
    text: "AI is revolutionizing healthcare by aiding in diagnostics, treatment planning, and patient monitoring. This blog examines AI applications such as disease prediction, medical imaging, and virtual health assistants, along with the ethical considerations and potential future impact on global healthcare delivery."
  },
  {
    id: "5",
    title: "Natural Language Processing (NLP): Teaching Machines to Understand Human Language",
    text: "Natural Language Processing (NLP) is the field of AI focused on enabling computers to understand and respond to human language. This article explains NLP techniques, including tokenization, parsing, and sentiment analysis, and reviews real-world applications such as chatbots, language translation, and sentiment detection in social media."
  },
  {
    id: "6",
    title: "Computer Vision: AI’s Role in Understanding Images and Videos",
    text: "Computer vision is a field within AI that enables machines to interpret visual information from the world. This blog covers fundamental concepts such as image processing, object detection, and facial recognition, and discusses how computer vision is used in areas like security, retail, and autonomous vehicles."
  },
  {
    id: "7",
    title: "Reinforcement Learning: How AI Learns from Experience",
    text: "Reinforcement learning is an area of ML where an agent learns by interacting with its environment to maximize rewards. This article explores core reinforcement learning concepts such as agents, environments, rewards, and policies, and looks at applications in gaming, robotics, and dynamic system optimization."
  },
  {
    id: "8",
    title: "AI Ethics: Addressing the Challenges of Artificial Intelligence",
    text: "As AI becomes increasingly integrated into society, ethical considerations have become paramount. This blog discusses issues such as bias in algorithms, data privacy, the impact on employment, and the importance of transparency in AI decision-making to build trust and ensure fair use of AI technology."
  },
  {
    id: "9",
    title: "AI in Finance: Revolutionizing Banking and Investment",
    text: "AI is transforming the finance industry through applications such as automated trading, credit scoring, and fraud detection. This article explores how AI algorithms analyze financial data, predict market trends, and enhance customer service, while also addressing regulatory and security challenges specific to financial AI."
  },
  {
    id: "10",
    title: "The Future of AI: Trends and Predictions",
    text: "AI is a rapidly evolving field with significant implications for the future. This blog explores emerging trends, such as AI-driven personalization, ethical AI governance, and advancements in quantum computing, that could shape the development of AI over the next decade, providing a glimpse into its potential impact on society."
  }
];

