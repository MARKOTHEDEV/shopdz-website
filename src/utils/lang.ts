/* Lightweight i18n for static text only */
import { useSyncExternalStore } from "react";

export type Lang = "en" | "fr" | "ar";

// Static mapping for UI strings. Keys can be semantic or the raw English string.
const mapping: Record<string, Record<Lang, string>> = {
  // --- Navigation & Menu ---
  Products: {
    en: "Products",
    fr: "Produits",
    ar: "المنتجات",
  },
  Discover: {
    en: "Discover",
    fr: "Découvrir",
    ar: "اكتشف",
  },
  "About us": {
    en: "About us",
    fr: "À propos",
    ar: "من نحن",
  },
  Blog: {
    en: "Blog",
    fr: "Blog",
    ar: "المدونة",
  },
  Login: {
    en: "Login",
    fr: "Connexion",
    ar: "تسجيل الدخول",
  },
  "Use for free": {
    en: "Use for free",
    fr: "Utiliser gratuitement",
    ar: "جرب مجاناً",
  },
  "How it works": {
    en: "How it works",
    fr: "Comment ça marche",
    ar: "كيف يعمل",
  },

  // --- Products Dropdown ---
  "Store link": {
    en: "Store link",
    fr: "Lien du magasin",
    ar: "رابط المتجر",
  },
  "Create your online store and share your link anywhere.": {
    en: "Create your online store and share your link anywhere.",
    fr: "Créez votre boutique en ligne et partagez votre lien n'importe où.",
    ar: "أنشئ متجرك الإلكتروني وشارك رابطك في أي مكان.",
  },
  "Customers & Campaigns": {
    en: "Customers & Campaigns",
    fr: "Clients et Campagnes",
    ar: "العملاء والحملات",
  },
  "Manage customers and send targeted marketing that works.": {
    en: "Manage customers and send targeted marketing that works.",
    fr: "Gérez les clients et envoyez un marketing ciblé qui fonctionne.",
    ar: "إدارة العملاء وإرسال حملات تسويقية فعالة.",
  },
  "Order Management": {
    en: "Order Management",
    fr: "Gestion des commandes",
    ar: "إدارة الطلبات",
  },
  "Deliver orders fast with trusted partners, hassle-free.": {
    en: "Deliver orders fast with trusted partners, hassle-free.",
    fr: "Livrez les commandes rapidement avec des partenaires de confiance.",
    ar: "توصيل الطلبات بسرعة مع شركاء موثوقين.",
  },
  "Delivery & Fulfillment": {
    en: "Delivery & Fulfillment",
    fr: "Livraison et Exécution",
    ar: "التوصيل والتنفيذ",
  },
  "Track, organize, and manage every order with ease.": {
    en: "Track, organize, and manage every order with ease.",
    fr: "Suivez, organisez et gérez chaque commande facilement.",
    ar: "تتبع ونظم وأدر كل طلب بسهولة.",
  },

  // --- Homepage Hero ---
  "Sell anything, anywhere": {
    en: "Sell anything, anywhere",
    fr: "Vendez n'importe quoi, n'importe où",
    ar: "بع أي شيء في أي مكان",
  },
  "with your online store": {
    en: "with your online store",
    fr: "avec votre boutique en ligne",
    ar: "بمتجرك الإلكتروني",
  },
  heroDescription: {
    en: "Create your online store in minutes with tools made for your business. Share your link, collect orders, manage payments, and deliver.",
    fr: "Créez votre boutique en ligne en quelques minutes avec des outils conçus pour votre entreprise. Partagez votre lien, recevez des commandes, gérez les paiements et livrez.",
    ar: "أنشئ متجرك الإلكتروني في دقائق باستخدام أدوات مخصصة لعملك. شارك رابطك، استقبل الطلبات، أدر المدفوعات وقم بالتوصيل.",
  },
  "Create your online store": {
    en: "Create your online store",
    fr: "Créez votre boutique en ligne",
    ar: "أنشئ متجرك الإلكتروني",
  },
  heroFooter: {
    en: "No setup fees · No technical skills needed · Multi-language support.",
    fr: "Pas de frais d'installation · Aucune compétence technique requise · Support multilingue.",
    ar: "بدون رسوم تأسيس · لا حاجة لمهارات تقنية · دعم متعدد اللغات.",
  },
  "Trusted by fast": {
    en: "Trusted by fast",
    fr: "Approuvé par",
    ar: "موثوق من قبل",
  },
  "growing businesses": {
    en: "growing businesses",
    fr: "les entreprises en croissance",
    ar: "الشركات سريعة النمو",
  },

  // --- Common ---
  "No setup fees": {
    en: "No setup fees",
    fr: "Pas de frais d'installation",
    ar: "بدون رسوم تأسيس",
  },
  "No technical skills needed": {
    en: "No technical skills needed",
    fr: "Aucune compétence technique requise",
    ar: "لا حاجة لمهارات تقنية",
  },
  "Multi-language support": {
    en: "Multi-language support",
    fr: "Support multilingue",
    ar: "دعم متعدد اللغات",
  },
  "Get started": {
    en: "Get started",
    fr: "Commencer",
    ar: "ابدأ الآن",
  },
  "Create your store": {
    en: "Create your store",
    fr: "Créez votre boutique",
    ar: "أنشئ متجرك",
  },
  "Start fulfilling orders": {
    en: "Start fulfilling orders",
    fr: "Commencez à exécuter les commandes",
    ar: "ابدأ في تنفيذ الطلبات",
  },
  "Start engaging customers": {
    en: "Start engaging customers",
    fr: "Commencez à engager les clients",
    ar: "ابدأ في إشراك العملاء",
  },

  // --- About Page ---
  "ABOUT US": {
    en: "ABOUT US",
    fr: "À PROPOS DE NOUS",
    ar: "من نحن",
  },
  aboutHeroTitle: {
    en: "Built for Sellers. Backed by Purpose.",
    fr: "Conçu pour les vendeurs. Soutenu par un but.",
    ar: "بنيت للبائعين. مدعومة بهدف.",
  },
  "Built for Sellers.": {
    en: "Built for Sellers.",
    fr: "Conçu pour les vendeurs.",
    ar: "بنيت للبائعين.",
  },
  "Backed by Purpose.": {
    en: "Backed by Purpose.",
    fr: "Soutenu par un but.",
    ar: "مدعومة بهدف.",
  },
  aboutHeroDesc: {
    en: "We believe anyone with something to sell deserves the tools to grow.",
    fr: "Nous croyons que toute personne ayant quelque chose à vendre mérite les outils pour grandir.",
    ar: "نؤمن أن أي شخص لديه شيء لبيعه يستحق الأدوات للنمو.",
  },
  missionTitle: {
    en: "Our mission to make selling online as simple",
    fr: "Notre mission de rendre la vente en ligne aussi simple",
    ar: "مهمتنا لجعل البيع عبر الإنترنت بسيطاً",
  },
  missionDesc1: {
    en: "To empower small businesses in emerging markets to sell online simply, locally, and beautifully",
    fr: "Donner aux petites entreprises des marchés émergents les moyens de vendre en ligne simplement, localement et magnifiquement",
    ar: "تمكين الشركات الصغيرة في الأسواق الناشئة من البيع عبر الإنترنت ببساطة، ومحلياً، وبشكل جميل",
  },
  missionDesc2: {
    en: "We believe the next generation of commerce will be driven by everyday people: the home bakers, the fashion resellers, the neighborhood phone dealers, the beauty entrepreneurs",
    fr: "Nous croyons que la prochaine génération de commerce sera dirigée par des gens ordinaires : les boulangers à domicile, les revendeurs de mode, les vendeurs de téléphones du quartier, les entrepreneurs de beauté",
    ar: "نؤمن أن الجيل القادم من التجارة سيقوده أشخاص عاديون: الخبازون في المنازل، وبائعو الأزياء، وتجار الهواتف في الأحياء، ورواد الأعمال في مجال التجميل",
  },
  "Our mission": {
    en: "Our mission",
    fr: "Notre mission",
    ar: "مهمتنا",
  },
  ourMissionDesc1: {
    en: "To give them powerful tools that feel simple, no complicated setup, no expensive software Just one place to manage products, orders, payments, and deliveries all from a phone.",
    fr: "Leur donner des outils puissants qui semblent simples, pas de configuration compliquée, pas de logiciel coûteux. Juste un endroit pour gérer les produits, les commandes, les paiements et les livraisons, le tout depuis un téléphone.",
    ar: "منحهم أدوات قوية تبدو بسيطة، بدون إعداد معقد، وبدون برامج باهظة الثمن. مكان واحد فقط لإدارة المنتجات والطلبات والمدفوعات والتسليم، كل ذلك من الهاتف.",
  },
  ourMissionDesc2: {
    en: "We’re building for the makers, the risk-takers, the first-time founders. Our platform is designed to grow with them, from first sale to full store. We believe that technology should serve business owners, not overwhelm them.",
    fr: "Nous construisons pour les créateurs, les preneurs de risques, les fondateurs débutants. Notre plateforme est conçue pour grandir avec eux, de la première vente au magasin complet. Nous croyons que la technologie doit servir les propriétaires d'entreprise, pas les submerger.",
    ar: "نحن نبني للصناع، والمخاطرين، والمؤسسين لأول مرة. تم تصميم منصتنا لتنمو معهم، من البيع الأول إلى المتجر الكامل. نؤمن أن التكنولوجيا يجب أن تخدم أصحاب الأعمال، لا أن تثقل كاهلهم.",
  },
  ourMissionDesc3: {
    en: "That’s why we’re obsessed with making e-commerce more human, more accessible, and more local. So sellers can focus less on logistics and more on what they love.",
    fr: "C'est pourquoi nous sommes obsédés par l'idée de rendre le commerce électronique plus humain, plus accessible et plus local. Pour que les vendeurs puissent moins se concentrer sur la logistique et plus sur ce qu'ils aiment.",
    ar: "لهذا السبب نحن مهووسون بجعل التجارة الإلكترونية أكثر إنسانية، وأكثر سهولة في الوصول، وأكثر محلية. حتى يتمكن البائعون من التركيز بشكل أقل على الخدمات اللوجستية وبشكل أكبر على ما يحبون.",
  },
  contactHeading: {
    en: "Want to get in contact with us?",
    fr: "Vous voulez entrer en contact avec nous ?",
    ar: "هل ترغب في التواصل معنا؟",
  },
  contactDesc: {
    en: "We’re always learning from our sellers. If you have ideas, complaints, or features you wish existed — we want to hear from you.",
    fr: "Nous apprenons toujours de nos vendeurs. Si vous avez des idées, des plaintes ou des fonctionnalités que vous souhaiteriez voir exister, nous voulons vous entendre.",
    ar: "نحن نتعلم دائماً من بائعينا. إذا كانت لديك أفكار أو شكاوى أو ميزات تتمنى وجودها — فنحن نريد أن نسمع منك.",
  },
  "Contact us via email": {
    en: "Contact us via email",
    fr: "Contactez-nous par email",
    ar: "تواصل معنا عبر البريد الإلكتروني",
  },
  "Contact us at hello@shop.dz": {
    en: "Contact us at hello@shop.dz",
    fr: "Contactez-nous à hello@shop.dz",
    ar: "تواصل معنا عبر hello@shop.dz",
  },
  "Send an email": {
    en: "Send an email",
    fr: "Envoyer un email",
    ar: "إرسال بريد إلكتروني",
  },
  "Contact us via phone": {
    en: "Contact us via phone",
    fr: "Contactez-nous par téléphone",
    ar: "تواصل معنا عبر الهاتف",
  },
  "Chat with us directly on WhatsApp": {
    en: "Chat with us directly on WhatsApp",
    fr: "Discutez avec nous directement sur WhatsApp",
    ar: "دردش معنا مباشرة على واتساب",
  },

  // --- Discover Page ---
  discoverHeroTitle: {
    en: "Find Your Next Favorite Store",
    fr: "Trouvez votre prochain magasin préféré",
    ar: "اعثر على متجرك المفضل التالي",
  },
  discoverHeroDesc: {
    en: "Search, explore, and shop from registered stores.",
    fr: "Recherchez, explorez et achetez dans les magasins enregistrés.",
    ar: "ابحث واكتشف وتسوق من المتاجر المسجلة.",
  },
  "Find stores": {
    en: "Find stores",
    fr: "Trouver des magasins",
    ar: "البحث عن المتاجر",
  },
  Search: {
    en: "Search",
    fr: "Rechercher",
    ar: "بحث",
  },
  "Fashion & Apparel": {
    en: "Fashion & Apparel",
    fr: "Mode et vêtements",
    ar: "الأزياء والملابس",
  },

  // --- Customers & Campaigns ---
  "CUSTOMERS & CAMPAIGNS": {
    en: "CUSTOMERS & CAMPAIGNS",
    fr: "CLIENTS ET CAMPAGNES",
    ar: "العملاء والحملات",
  },
  ccHeroTitle: {
    en: "Know Your Customers. Engage Them Better.",
    fr: "Connaissez vos clients. Engagez-les mieux.",
    ar: "اعرف عملاءك. تفاعل معهم بشكل أفضل.",
  },
  "Know Your Customers.": {
    en: "Know Your Customers.",
    fr: "Connaissez vos clients.",
    ar: "اعرف عملاءك.",
  },
  "Engage Them Better.": {
    en: "Engage Them Better.",
    fr: "Engagez-les mieux.",
    ar: "تفاعل معهم بشكل أفضل.",
  },
  ccHeroDesc: {
    en: "See exactly who’s buying from you, run targeted campaigns with AI-crafted content to keep them coming back for more.",
    fr: "Voyez exactement qui achète chez vous, lancez des campagnes ciblées avec du contenu créé par l'IA pour les inciter à revenir.",
    ar: "تعرف بالضبط على من يشتري منك، وقم بتشغيل حملات مستهدفة بمحتوى مصاغ بالذكاء الاصطناعي لجعلهم يعودون للمزيد.",
  },
  "Customer Insights at": {
    en: "Customer Insights at",
    fr: "Informations clients à",
    ar: "رؤى العملاء في",
  },
  "Your Fingertips": {
    en: "Your Fingertips",
    fr: "Portée de main",
    ar: "متناول يدك",
  },
  ccFeature1Desc: {
    en: "Track every customer’s order history, total spend, and frequency so you can identify your most loyal buyers and reward them.",
    fr: "Suivez l'historique des commandes, les dépenses totales et la fréquence de chaque client pour identifier vos acheteurs les plus fidèles et les récompenser.",
    ar: "تتبع سجل طلبات كل عميل، وإجمالي الإنفاق، والتكرار حتى تتمكن من تحديد المشترين الأكثر ولاءً ومكافأتهم.",
  },
  "View detailed customer lists": {
    en: "View detailed customer lists",
    fr: "Voir les listes détaillées des clients",
    ar: "عرض قوائم العملاء التفصيلية",
  },
  "See lifetime order counts and revenue per customer": {
    en: "See lifetime order counts and revenue per customer",
    fr: "Voir le nombre de commandes à vie et les revenus par client",
    ar: "عرض إجمالي الطلبات والإيرادات لكل عميل",
  },
  "Identify top spenders and frequent buyers": {
    en: "Identify top spenders and frequent buyers",
    fr: "Identifier les plus gros dépensiers et les acheteurs fréquents",
    ar: "تحديد كبار المنفقين والمشترين المتكررين",
  },
  "Run Powerful": {
    en: "Run Powerful",
    fr: "Lancez Puissant",
    ar: "شغل حملات",
  },
  "Marketing Campaigns": {
    en: "Marketing Campaigns",
    fr: "Campagnes Marketing",
    ar: "تسويقية قوية",
  },
  ccFeature2Desc: {
    en: "Send bulk or targeted campaigns via SMS, email, or WhatsApp all from one platform.",
    fr: "Envoyez des campagnes en masse ou ciblées par SMS, email ou WhatsApp, le tout depuis une seule plateforme.",
    ar: "إرسال حملات جماعية أو مستهدفة عبر الرسائل القصيرة أو البريد الإلكتروني أو واتساب، كل ذلك من منصة واحدة.",
  },
  "Send campaigns to all or specific customers": {
    en: "Send campaigns to all or specific customers",
    fr: "Envoyer des campagnes à tous les clients ou à des clients spécifiques",
    ar: "إرسال حملات لجميع العملاء أو عملاء محددين",
  },
  "Track open rates, campaigns sent, and conversions": {
    en: "Track open rates, campaigns sent, and conversions",
    fr: "Suivre les taux d'ouverture, les campagnes envoyées et les conversions",
    ar: "تتبع معدلات الفتح، والحملات المرسلة، والتحويلات",
  },
  "Optimize based on real-time performance data.": {
    en: "Optimize based on real-time performance data.",
    fr: "Optimiser en fonction des données de performance en temps réel.",
    ar: "تحسين بناءً على بيانات الأداء في الوقت الفعلي.",
  },
  "AI-Powered Campaign": {
    en: "AI-Powered Campaign",
    fr: "Campagne alimentée par l'IA",
    ar: "حملة مدعومة بالذكاء الاصطناعي",
  },
  Creation: {
    en: "Creation",
    fr: "Création",
    ar: "إنشاء",
  },
  ccFeature3Desc: {
    en: "Create engaging campaigns in minutes with AI suggestions and content generation. Simply describe your goal, and let AI do the writing for you.",
    fr: "Créez des campagnes engageantes en quelques minutes avec des suggestions d'IA et la génération de contenu. Décrivez simplement votre objectif et laissez l'IA écrire pour vous.",
    ar: "أنشئ حملات جذابة في دقائق مع اقتراحات الذكاء الاصطناعي وإنشاء المحتوى. ببساطة صف هدفك، ودع الذكاء الاصطناعي يقوم بالكتابة نيابة عنك.",
  },
  "Use ready-made campaign ideas": {
    en: "Use ready-made campaign ideas",
    fr: "Utiliser des idées de campagne prêtes à l'emploi",
    ar: "استخدام أفكار حملات جاهزة",
  },
  "Generate high-converting copy with AI": {
    en: "Generate high-converting copy with AI",
    fr: "Générer des textes à fort taux de conversion avec l'IA",
    ar: "توليد نصوص عالية التحويل باستخدام الذكاء الاصطناعي",
  },
  "Save time while keeping campaigns fresh and relevant.": {
    en: "Save time while keeping campaigns fresh and relevant.",
    fr: "Gagner du temps tout en gardant les campagnes fraîches et pertinentes.",
    ar: "توفير الوقت مع الحفاظ على الحملات جديدة وذات صلة.",
  },
  "Turn Customer Insights": {
    en: "Turn Customer Insights",
    fr: "Transformez les informations clients",
    ar: "حول رؤى العملاء",
  },
  "into Sales": {
    en: "into Sales",
    fr: "en ventes",
    ar: "إلى مبيعات",
  },
  ccCtaDesc: {
    en: "Your store link is more than just a URL, it’s your 24/7 online shop. Create, share, and start selling in minutes.",
    fr: "Votre lien de magasin est plus qu'une simple URL, c'est votre boutique en ligne 24/7. Créez, partagez et commencez à vendre en quelques minutes.",
    ar: "رابط متجرك هو أكثر من مجرد رابط، إنه متجرك عبر الإنترنت الذي يعمل على مدار الساعة طوال أيام الأسبوع. أنشئ، وشارك، وابدأ البيع في دقائق.",
  },

  // --- Deliveries & Fulfillment ---
  "DELIVERIES & FULFILLMENT": {
    en: "DELIVERIES & FULFILLMENT",
    fr: "LIVRAISONS ET EXÉCUTION",
    ar: "التسليم والتنفيذ",
  },
  dfHeroTitle: {
    en: "Less Hassle. Faster Fulfillment.",
    fr: "Moins de tracas. Exécution plus rapide.",
    ar: "متاعب أقل. تنفيذ أسرع.",
  },
  "Less Hassle.": {
    en: "Less Hassle.",
    fr: "Moins de tracas.",
    ar: "متاعب أقل.",
  },
  "Faster Fulfillment.": {
    en: "Faster Fulfillment.",
    fr: "Exécution plus rapide.",
    ar: "تنفيذ أسرع.",
  },
  dfHeroDesc: {
    en: "choose your preferred delivery partner, and track every shipment all from one dashboard. We handle the logistics so you can focus on selling.",
    fr: "choisissez votre partenaire de livraison préféré et suivez chaque expédition depuis un seul tableau de bord. Nous gérons la logistique pour que vous puissiez vous concentrer sur la vente.",
    ar: "اختر شريك التوصيل المفضل لديك، وتتبع كل شحنة من لوحة تحكم واحدة. نحن نتولى الخدمات اللوجستية حتى تتمكن من التركيز على البيع.",
  },
  "Flexible Delivery": {
    en: "Flexible Delivery",
    fr: "Livraison Flexible",
    ar: "توصيل مرن",
  },
  Options: {
    en: "Options",
    fr: "Options",
    ar: "خيارات",
  },
  dfFeature1Desc: {
    en: "Let customers choose how their orders are delivered and select from trusted delivery partners.",
    fr: "Laissez les clients choisir comment leurs commandes sont livrées et sélectionnez parmi des partenaires de livraison de confiance.",
    ar: "دع العملاء يختارون كيفية توصيل طلباتهم واختر من بين شركاء التوصيل الموثوق بهم.",
  },
  "Offer prepaid or pay-on-delivery options": {
    en: "Offer prepaid or pay-on-delivery options",
    fr: "Offrir des options prépayées ou de paiement à la livraison",
    ar: "تقديم خيارات الدفع المسبق أو الدفع عند الاستلام",
  },
  "Select from multiple delivery providers": {
    en: "Select from multiple delivery providers",
    fr: "Sélectionner parmi plusieurs fournisseurs de livraison",
    ar: "الاختيار من بين عدة مزودي خدمة توصيل",
  },
  "Give customers delivery flexibility.": {
    en: "Give customers delivery flexibility.",
    fr: "Donner aux clients une flexibilité de livraison.",
    ar: "منح العملاء مرونة في التوصيل.",
  },
  "Seamless Order": {
    en: "Seamless Order",
    fr: "Commande Transparente",
    ar: "طلب سلس",
  },
  Fulfillment: {
    en: "Fulfillment",
    fr: "Exécution",
    ar: "تنفيذ",
  },
  dfFeature2Desc: {
    en: "From pickup to drop-off, we work with delivery partners to get your products to customers quickly and safely.",
    fr: "De la collecte au dépôt, nous travaillons avec des partenaires de livraison pour acheminer vos produits aux clients rapidement et en toute sécurité.",
    ar: "من الاستلام إلى التسليم، نعمل مع شركاء التوصيل لإيصال منتجاتك للعملاء بسرعة وأمان.",
  },
  "Automatic delivery booking with partners": {
    en: "Automatic delivery booking with partners",
    fr: "Réservation automatique de livraison avec les partenaires",
    ar: "حجز توصيل تلقائي مع الشركاء",
  },
  "Real-time pickup and delivery coordination": {
    en: "Real-time pickup and delivery coordination",
    fr: "Coordination de la collecte et de la livraison en temps réel",
    ar: "تنسيق الاستلام والتسليم في الوقت الفعلي",
  },
  "Secure and reliable order handling": {
    en: "Secure and reliable order handling",
    fr: "Traitement des commandes sécurisé et fiable",
    ar: "معالجة طلبات آمنة وموثوقة",
  },
  "Track Every Shipment": {
    en: "Track Every Shipment",
    fr: "Suivre chaque expédition",
    ar: "تتبع كل شحنة",
  },
  dfFeature3Desc: {
    en: "See the status of all deliveries, pending, in transit, or fulfilled — directly from your dashboard.",
    fr: "Voyez le statut de toutes les livraisons, en attente, en transit ou exécutées — directement depuis votre tableau de bord.",
    ar: "شاهد حالة جميع عمليات التوصيل، سواء كانت معلقة، أو قيد النقل، أو مكتملة — مباشرة من لوحة التحكم الخاصة بك.",
  },
  "View pending, processing, and fulfilled orders": {
    en: "View pending, processing, and fulfilled orders",
    fr: "Voir les commandes en attente, en traitement et exécutées",
    ar: "عرض الطلبات المعلقة، وقيد المعالجة، والمكتملة",
  },
  "Access complete delivery details and timelines": {
    en: "Access complete delivery details and timelines",
    fr: "Accéder aux détails complets de la livraison et aux délais",
    ar: "الوصول إلى تفاصيل التوصيل الكاملة والجداول الزمنية",
  },
  "Keep customers updated on their orders.": {
    en: "Keep customers updated on their orders.",
    fr: "Tenir les clients informés de leurs commandes.",
    ar: "إبقاء العملاء على اطلاع دائم بطلباتهم.",
  },
  "Deliver Every Order with ": {
    en: "Deliver Every Order with ",
    fr: "Livrez chaque commande avec ",
    ar: "وصل كل طلب بـ ",
  },
  Ease: {
    en: "Ease",
    fr: "Facilité",
    ar: "سهولة",
  },
  dfCtaDesc: {
    en: "Simplify your logistics, give customers options, and ensure every order reaches them on time.",
    fr: "Simplifiez votre logistique, donnez des options aux clients et assurez-vous que chaque commande leur parvient à temps.",
    ar: "بسط خدماتك اللوجستية، وامنح العملاء خيارات، وتأكد من وصول كل طلب إليهم في الوقت المحدد.",
  },

  // --- Order Management ---
  "ORDER MANAGEMENT": {
    en: "ORDER MANAGEMENT",
    fr: "GESTION DES COMMANDES",
    ar: "إدارة الطلبات",
  },
  omHeroTitle: {
    en: "All the Tools to Stay on . Top of Every Order",
    fr: "Tous les outils pour rester au top de chaque commande",
    ar: "كل الأدوات للبقاء على اطلاع بكل طلب",
  },
  "All the Tools to Stay on .": {
    en: "All the Tools to Stay on .",
    fr: "Tous les outils pour rester",
    ar: "كل الأدوات للبقاء",
  },
  "Top of Every Order": {
    en: "Top of Every Order",
    fr: "au top de chaque commande",
    ar: "على اطلاع بكل طلب",
  },
  omHeroDesc: {
    en: "We gives you everything you need to manage orders without the stress.",
    fr: "Nous vous donnons tout ce dont vous avez besoin pour gérer les commandes sans stress.",
    ar: "نمنحك كل ما تحتاجه لإدارة الطلبات بدون توتر.",
  },
  "See Your Orders in One": {
    en: "See Your Orders in One",
    fr: "Voir vos commandes en une seule",
    ar: "شاهد طلباتك في مكان",
  },
  View: {
    en: "View",
    fr: "Vue",
    ar: "واحد",
  },
  omFeature1Desc: {
    en: "Easily monitor all orders—whether pending, processing, paid, or unpaid—so nothing slips through the cracks.",
    fr: "Surveillez facilement toutes les commandes — qu'elles soient en attente, en traitement, payées ou impayées — pour que rien ne passe à travers les mailles du filet.",
    ar: "راقب بسهولة جميع الطلبات — سواء كانت معلقة، أو قيد المعالجة، أو مدفوعة، أو غير مدفوعة — حتى لا يفوتك أي شيء.",
  },
  "Filter orders by status for faster tracking.": {
    en: "Filter orders by status for faster tracking.",
    fr: "Filtrer les commandes par statut pour un suivi plus rapide.",
    ar: "تصفية الطلبات حسب الحالة لتتبع أسرع.",
  },
  "Search orders by date, ID, or customer.": {
    en: "Search orders by date, ID, or customer.",
    fr: "Rechercher des commandes par date, ID ou client.",
    ar: "البحث عن الطلبات حسب التاريخ، أو المعرف، أو العميل.",
  },
  "View order history at a glance.": {
    en: "View order history at a glance.",
    fr: "Voir l'historique des commandes en un coup d'œil.",
    ar: "عرض سجل الطلبات في لمحة.",
  },
  "Access Full Order &": {
    en: "Access Full Order &",
    fr: "Accéder à la commande complète &",
    ar: "الوصول للطلب الكامل &",
  },
  "Customer Details": {
    en: "Customer Details",
    fr: "Détails du client",
    ar: "تفاصيل العميل",
  },
  omFeature2Desc: {
    en: "Open any order to see everything you need to fulfill it quickly and accurately.",
    fr: "Ouvrez n'importe quelle commande pour voir tout ce dont vous avez besoin pour l'exécuter rapidement et avec précision.",
    ar: "افتح أي طلب لرؤية كل ما تحتاجه لتنفيذه بسرعة ودقة.",
  },
  "Check the list of ordered products and quantities.": {
    en: "Check the list of ordered products and quantities.",
    fr: "Vérifier la liste des produits commandés et les quantités.",
    ar: "التحقق من قائمة المنتجات المطلوبة والكميات.",
  },
  "View customer contact info and delivery address.": {
    en: "View customer contact info and delivery address.",
    fr: "Voir les coordonnées du client et l'adresse de livraison.",
    ar: "عرض معلومات اتصال العميل وعنوان التوصيل.",
  },
  "See special instructions or notes attached to the order.": {
    en: "See special instructions or notes attached to the order.",
    fr: "Voir les instructions spéciales ou les notes jointes à la commande.",
    ar: "رؤية التعليمات الخاصة أو الملاحظات المرفقة بالطلب.",
  },
  "Manage Invoices &": {
    en: "Manage Invoices &",
    fr: "Gérer les factures &",
    ar: "إدارة الفواتير &",
  },
  Updates: {
    en: "Updates",
    fr: "Mises à jour",
    ar: "التحديثات",
  },
  omFeature3Desc: {
    en: "Keep customers informed and finances in check with built-in invoice tools.",
    fr: "Tenez les clients informés et les finances sous contrôle avec des outils de facturation intégrés.",
    ar: "إبقاء العملاء على اطلاع والمالية تحت السيطرة مع أدوات الفواتير المدمجة.",
  },
  "Generate and send invoices directly to customers.": {
    en: "Generate and send invoices directly to customers.",
    fr: "Générer et envoyer des factures directement aux clients.",
    ar: "إنشاء وإرسال الفواتير مباشرة للعملاء.",
  },
  "View payment status in real time.": {
    en: "View payment status in real time.",
    fr: "Voir le statut du paiement en temps réel.",
    ar: "عرض حالة الدفع في الوقت الفعلي.",
  },
  "Update order statuses and send notifications instantly.": {
    en: "Update order statuses and send notifications instantly.",
    fr: "Mettre à jour les statuts des commandes et envoyer des notifications instantanément.",
    ar: "تحديث حالات الطلب وإرسال الإشعارات فوراً.",
  },
  "Turn Order Chaos into": {
    en: "Turn Order Chaos into",
    fr: "Transformez le chaos des commandes en",
    ar: "حول فوضى الطلبات إلى",
  },
  Clarity: {
    en: "Clarity",
    fr: "Clarté",
    ar: "وضوح",
  },
  omCtaDesc: {
    en: "Stay organized, save time, and keep customers happy with a smarter way to manage orders.",
    fr: "Restez organisé, gagnez du temps et gardez les clients heureux avec une façon plus intelligente de gérer les commandes.",
    ar: "ابق منظماً، ووفر الوقت، وحافظ على سعادة العملاء بطريقة أذكى لإدارة الطلبات.",
  },

  // --- Store Link ---
  "STORE LINK": {
    en: "STORE LINK",
    fr: "LIEN DU MAGASIN",
    ar: "رابط المتجر",
  },
  slHeroTitle: {
    en: "Your Online Storefront in One Simple Link",
    fr: "Votre vitrine en ligne en un lien simple",
    ar: "واجهة متجرك الإلكتروني في رابط بسيط واحد",
  },
  "Your Online Storefront in": {
    en: "Your Online Storefront in",
    fr: "Votre vitrine en ligne en",
    ar: "واجهة متجرك الإلكتروني في",
  },
  "One Simple Link": {
    en: "One Simple Link",
    fr: "un lien simple",
    ar: "رابط بسيط واحد",
  },
  slHeroDesc: {
    en: "Get a unique store link instantly when you sign up and share your link anywhere, so customers can browse and buy with ease.",
    fr: "Obtenez un lien de magasin unique instantanément lors de votre inscription et partagez votre lien n'importe où, pour que les clients puissent naviguer et acheter facilement.",
    ar: "احصل على رابط متجر فريد فور التسجيل وشارك رابطك في أي مكان، حتى يتمكن العملاء من التصفح والشراء بسهولة.",
  },
  "Add Products &": {
    en: "Add Products &",
    fr: "Ajouter des produits &",
    ar: "إضافة منتجات &",
  },
  "Categories with ease": {
    en: "Categories with ease",
    fr: "Catégories avec facilité",
    ar: "فئات بسهولة",
  },
  slFeature1Desc: {
    en: "Set up your store in minutes. Create product listings, add categories, and customize details so your customers find exactly what they need.",
    fr: "Configurez votre magasin en quelques minutes. Créez des listes de produits, ajoutez des catégories et personnalisez les détails pour que vos clients trouvent exactement ce dont ils ont besoin.",
    ar: "قم بإعداد متجرك في دقائق. أنشئ قوائم المنتجات، وأضف الفئات، وخصص التفاصيل حتى يجد عملاؤك ما يحتاجونه بالضبط.",
  },
  "Organize items with clear categories.": {
    en: "Organize items with clear categories.",
    fr: "Organiser les articles avec des catégories claires.",
    ar: "تنظيم العناصر بفئات واضحة.",
  },
  "Add unlimited products and descriptions.": {
    en: "Add unlimited products and descriptions.",
    fr: "Ajouter des produits et des descriptions illimités.",
    ar: "إضافة منتجات وأوصاف غير محدودة.",
  },
  "Set prices, discounts, and availability instantly.": {
    en: "Set prices, discounts, and availability instantly.",
    fr: "Définir les prix, les remises et la disponibilité instantanément.",
    ar: "تحديد الأسعار والخصومات والتوافر فوراً.",
  },
  "Share Your Store Link": {
    en: "Share Your Store Link",
    fr: "Partagez votre lien de magasin",
    ar: "شارك رابط متجرك",
  },
  Anywhere: {
    en: "Anywhere",
    fr: "N'importe où",
    ar: "في أي مكان",
  },
  slFeature2Desc: {
    en: "Your store link is designed to be shared across any platform. Post it on your socials, add it to your bio, or send it directly to potential customers.",
    fr: "Votre lien de magasin est conçu pour être partagé sur n'importe quelle plateforme. Publiez-le sur vos réseaux sociaux, ajoutez-le à votre bio ou envoyez-le directement à des clients potentiels.",
    ar: "تم تصميم رابط متجرك ليتم مشاركته عبر أي منصة. انشره على وسائل التواصل الاجتماعي، أو أضفه إلى سيرتك الذاتية، أو أرسله مباشرة إلى العملاء المحتملين.",
  },
  "Share on Instagram, TikTok, X (Twitter), and more": {
    en: "Share on Instagram, TikTok, X (Twitter), and more",
    fr: "Partager sur Instagram, TikTok, X (Twitter) et plus",
    ar: "مشاركة على إنستغرام، تيك توك، إكس (تويتر)، والمزيد",
  },
  "Easy to send via chat or DMs": {
    en: "Easy to send via chat or DMs",
    fr: "Facile à envoyer par chat ou DM",
    ar: "سهل الإرسال عبر الدردشة أو الرسائل المباشرة",
  },
  "One link that shows your entire store.": {
    en: "One link that shows your entire store.",
    fr: "Un lien qui montre tout votre magasin.",
    ar: "رابط واحد يعرض متجرك بالكامل.",
  },
  "Seamless Experience for": {
    en: "Seamless Experience for",
    fr: "Expérience transparente pour",
    ar: "تجربة سلسة لـ",
  },
  Customers: {
    en: "Customers",
    fr: "Clients",
    ar: "العملاء",
  },
  slFeature3Desc: {
    en: "We make it easy for customers to browse, select, and order. Orders can go directly to your WhatsApp for quick closing or be completed entirely online.",
    fr: "Nous facilitons la navigation, la sélection et la commande pour les clients. Les commandes peuvent aller directement sur votre WhatsApp pour une conclusion rapide ou être complétées entièrement en ligne.",
    ar: "نجعل من السهل على العملاء التصفح والاختيار والطلب. يمكن أن تذهب الطلبات مباشرة إلى واتساب الخاص بك للإغلاق السريع أو إكمالها بالكامل عبر الإنترنت.",
  },
  "Customers browse and add items to cart": {
    en: "Customers browse and add items to cart",
    fr: "Les clients naviguent et ajoutent des articles au panier",
    ar: "يقوم العملاء بالتصفح وإضافة العناصر إلى سلة التسوق",
  },
  "Orders sent to your WhatsApp or store checkout": {
    en: "Orders sent to your WhatsApp or store checkout",
    fr: "Commandes envoyées sur votre WhatsApp ou à la caisse du magasin",
    ar: "يتم إرسال الطلبات إلى واتساب الخاص بك أو الخروج من المتجر",
  },
  "Flexible buying process to suit any customer.": {
    en: "Flexible buying process to suit any customer.",
    fr: "Processus d'achat flexible pour convenir à tout client.",
    ar: "عملية شراء مرنة تناسب أي عميل.",
  },

  // --- Homepage Components ---
  "Set up a branded online store": {
    en: "Set up a branded online store",
    fr: "Configurez une boutique en ligne de marque",
    ar: "قم بإعداد متجر إلكتروني بعلامة تجارية",
  },
  "Share your store link on WhatsApp, Tiktok or Instagram": {
    en: "Share your store link on WhatsApp, Tiktok or Instagram",
    fr: "Partagez le lien de votre boutique sur WhatsApp, Tiktok ou Instagram",
    ar: "شارك رابط متجرك على واتساب أو تيك توك أو إنستغرام",
  },
  "Accept payments and manage deliveries, all from one dashboard": {
    en: "Accept payments and manage deliveries, all from one dashboard",
    fr: "Acceptez les paiements et gérez les livraisons, le tout depuis un seul tableau de bord",
    ar: "اقبل المدفوعات وأدر عمليات التوصيل، كل ذلك من لوحة تحكم واحدة",
  },
  "We make it easy for": {
    en: "We make it easy for",
    fr: "Nous facilitons la tâche à",
    ar: "نجعل الأمر سهلاً لـ",
  },
  "anyone to sell": {
    en: "anyone to sell",
    fr: "quiconque de vendre",
    ar: "أي شخص للبيع",
  },
  section1Desc: {
    en: "Whether you're selling clothes, electronics, beauty products, or food — ShopDZ helps you sell smarter.",
    fr: "Que vous vendiez des vêtements, de l'électronique, des produits de beauté ou de la nourriture — ShopDZ vous aide à vendre plus intelligemment.",
    ar: "سواء كنت تبيع الملابس، أو الإلكترونيات، أو منتجات التجميل، أو الطعام — ShopDZ يساعدك على البيع بذكاء أكبر.",
  },
  sellDesc: {
    en: "No matter what you sell or where your customers are, your store is ready. Let your business do the talking online and on your terms.",
    fr: "Peu importe ce que vous vendez ou où se trouvent vos clients, votre magasin est prêt. Laissez votre entreprise parler en ligne et à vos conditions.",
    ar: "بغض النظر عما تبيعه أو مكان عملائك، متجرك جاهز. دع عملك يتحدث عبر الإنترنت وبشروطك.",
  },
  "Create your online store today": {
    en: "Create your online store today",
    fr: "Créez votre boutique en ligne aujourd'hui",
    ar: "أنشئ متجرك الإلكتروني اليوم",
  },
  mainCtaDesc: {
    en: "Take the first step toward a better way to sell. It’s quick to set up, easy to manage, and designed to help you focus on what you do best, running your business.",
    fr: "Faites le premier pas vers une meilleure façon de vendre. C'est rapide à configurer, facile à gérer et conçu pour vous aider à vous concentrer sur ce que vous faites de mieux : gérer votre entreprise.",
    ar: "اتخذ الخطوة الأولى نحو طريقة أفضل للبيع. إنه سريع الإعداد، وسهل الإدارة، ومصمم لمساعدتك على التركيز على ما تفعله بشكل أفضل، وهو إدارة عملك.",
  },
  "What business": {
    en: "What business",
    fr: "Ce que les",
    ar: "ماذا يقول",
  },
  "owners say about us": {
    en: "owners say about us",
    fr: "propriétaires d'entreprises disent de nous",
    ar: "أصحاب الأعمال عنا",
  },
  testimonialsDesc: {
    en: "Hear how everyday business owners are using the platform to reach more customers, simplify their sales, and grow confidently.",
    fr: "Découvrez comment les propriétaires d'entreprises utilisent la plateforme pour atteindre plus de clients, simplifier leurs ventes et se développer en toute confiance.",
    ar: "استمع إلى كيفية استخدام أصحاب الأعمال اليومية للمنصة للوصول إلى المزيد من العملاء، وتبسيط مبيعاتهم، والنمو بثقة.",
  },
  "Your Store, Your Way": {
    en: "Your Store, Your Way",
    fr: "Votre magasin, à votre façon",
    ar: "متجرك، طريقتك",
  },
  ysywDesc: {
    en: "Whether you’re just starting out or growing fast, your store should feel like you. Build and run your business the way that works best for you.",
    fr: "Que vous débutiez ou que vous grandissiez rapidement, votre magasin doit vous ressembler. Construisez et gérez votre entreprise de la manière qui vous convient le mieux.",
    ar: "سواء كنت بدأت للتو أو تنمو بسرعة، يجب أن يشعرك متجرك بأنه يشبهك. ابنِ وأدر عملك بالطريقة التي تناسبك.",
  },
  "Upload and manage": {
    en: "Upload and manage",
    fr: "Téléchargez et gérez",
    ar: "ارفع وأدر",
  },
  "products with ease.": {
    en: "products with ease.",
    fr: "produits avec facilité.",
    ar: "المنتجات بسهولة.",
  },
  section1CardDesc: {
    en: "Stay in control of your products with tools that keep things simple and flexible.",
    fr: "Gardez le contrôle de vos produits avec des outils qui gardent les choses simples et flexibles.",
    ar: "ابق مسيطراً على منتجاتك باستخدام أدوات تحافظ على بساطة ومرونة الأمور.",
  },
  "Your store link is made": {
    en: "Your store link is made",
    fr: "Votre lien de magasin est fait",
    ar: "رابط متجرك مصمم",
  },
  "for sharing.": {
    en: "for sharing.",
    fr: "pour le partage.",
    ar: "للمشاركة.",
  },
  section2CardDesc: {
    en: "Share your store anywhere your customers are, from chats to socials.",
    fr: "Partagez votre magasin partout où se trouvent vos clients, des chats aux réseaux sociaux.",
    ar: "شارك متجرك في أي مكان يتواجد فيه عملاؤك، من الدردشات إلى وسائل التواصل الاجتماعي.",
  },
  "Let your customers choose": {
    en: "Let your customers choose",
    fr: "Laissez vos clients choisir",
    ar: "دع عملائك يختارون",
  },
  "how they pay.": {
    en: "how they pay.",
    fr: "comment ils paient.",
    ar: "كيف يدفعون.",
  },
  section3CardDesc: {
    en: "Offer the flexibility your customers need to make buying easy and comfortable.",
    fr: "Offrez la flexibilité dont vos clients ont besoin pour rendre l'achat facile et confortable.",
    ar: "قدم المرونة التي يحتاجها عملاؤك لجعل الشراء سهلاً ومريحاً.",
  },
};

// --- Simple global store with subscription ---
let currentLang: Lang = "en";
let isHydrated = false;
const subscribers = new Set<() => void>();

function detectBrowserLang(): Lang {
  if (typeof window === "undefined") return "en";
  const langs = (navigator.languages || [navigator.language]).map((l) =>
    l.toLowerCase()
  );
  for (const l of langs) {
    if (l.startsWith("ar")) return "ar";
    if (l.startsWith("fr")) return "fr";
    if (l.startsWith("en")) return "en";
  }
  return "en";
}

function initLangFromStorage(): void {
  if (typeof window === "undefined") return;
  const saved = window.localStorage.getItem("lang");
  if (saved === "en" || saved === "fr" || saved === "ar") {
    currentLang = saved as Lang;
  } else {
    currentLang = "en";
    window.localStorage.setItem("lang", currentLang);
  }
}

// Function to mark hydration as complete - MUST be called from useEffect in _app.tsx
export function markHydrated(): void {
  if (typeof window === "undefined") return;
  if (!isHydrated) {
    isHydrated = true;
    initLangFromStorage();
    subscribers.forEach((cb) => cb());
  }
}

export function setLang(lang: Lang): void {
  currentLang = lang;
  if (typeof window !== "undefined") {
    window.localStorage.setItem("lang", lang);
    isHydrated = true;
  }
  subscribers.forEach((cb) => cb());
}

export function getLangCode(): Lang {
  // Always return "en" during SSR and initial client render to avoid hydration mismatch
  if (typeof window === "undefined") return "en";
  if (!isHydrated) return "en"; // Return "en" until after hydration
  const saved = window.localStorage.getItem("lang") as Lang | null;
  return saved ?? currentLang;
}

export function subscribe(cb: () => void): () => void {
  subscribers.add(cb);
  return () => subscribers.delete(cb);
}

// Core helper – accepts semantic keys or raw English strings
// During SSR and initial render, always returns English to avoid hydration mismatch
export function getLang(key: string): string {
  const lang = getLangCode();
  const entry = mapping[key];
  if (entry && entry[lang]) return entry[lang];
  // If not mapped, return the input as-is
  return key;
}

// React hook to re-render on language changes
export function useLang(): Lang {
  // Mark as hydrated when hook is first called (after component mounts)
  if (typeof window !== "undefined" && !isHydrated) {
    // Use useEffect would be better, but we can't use hooks here
    // So we'll rely on the setTimeout/requestIdleCallback approach
  }
  return useSyncExternalStore(subscribe, getLangCode, () =>
    isHydrated ? currentLang : "en"
  );
}

// Hook version of getLang that triggers re-renders on language change
export function useGetLang(key: string): string {
  const lang = useLang();
  const entry = mapping[key];
  if (entry && entry[lang]) return entry[lang];
  return key;
}

// Expose mapping to allow future extension
export const langMapping = mapping;
