// src/layouts/DashboardLayout.tsx
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { DashboardNavbar } from '../components/DashboardNavbar';
import { DashboardFooter } from '../components/DashboardFooter';
import { MessageCircle, X, Globe } from 'lucide-react';

// Define the type for our language codes
type Language = 'en' | 'hi' | 'mr' | 'pa' | 'bn' | 'ta';

export function DashboardLayout() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState('');

  // --- Expanded Translation Map ---
  const translations = {
    en: {
      greeting: 'Hi there! I’m your Kisan Saathi assistant.',
      help: 'You can ask me about crop plans, irrigation, disease control, fertilizers, and more!',
      crop: '🌾 Based on your region, Wheat and Mustard are great options for this season!',
      irrigation: '💧 For wheat, follow 4 irrigation cycles at tillering, jointing, flowering, and dough stages.',
      disease: '🦠 Possible disease: Leaf rust. Cure with Mancozeb spray (0.25%) every 10 days.',
      fertilizer: '🌿 Recommended fertilizer: Urea (120kg/ha) + DAP (60kg/ha) split in 3 doses.',
      community: '👥 You can join your nearby farmer community group for market updates and training sessions.',
      training: '📘 Upcoming training: “Advanced Organic Farming” on Nov 5th at your nearest KVK center.',
      default: '🤖 I’m not sure about that, but I can help with crops, irrigation, fertilizer, or disease info!',
      hello: 'Hey there! How can I help you today? 😊',
      placeholder: 'Type your message...',
      send: 'Send',
      assistantName: 'Kisan Saathi Assistant',
    },
    hi: {
      greeting: '👋 नमस्ते! मैं आपका किसान साथी सहायक हूँ।',
      help: 'आप मुझसे फसल योजनाओं, सिंचाई, रोग नियंत्रण, उर्वरक और अन्य विषयों पर पूछ सकते हैं!',
      crop: '🌾 आपके क्षेत्र के अनुसार, इस मौसम के लिए गेहूँ और सरसों सबसे अच्छे विकल्प हैं!',
      irrigation: '💧 गेहूँ के लिए 4 सिंचाई चक्र करें – टिलरिंग, जॉइन्टिंग, फूल आने और आटे के चरण में।',
      disease: '🦠 संभावित रोग: लीफ रस्ट। इलाज: मैंकोज़ेब (0.25%) का छिड़काव हर 10 दिन में करें।',
      fertilizer: '🌿 अनुशंसित उर्वरक: यूरिया (120 किग्रा/हेक्टेयर) + डीएपी (60 किग्रा/हेक्टेयर) तीन भागों में।',
      community: '👥 आप पास के किसान समुदाय समूह से जुड़ सकते हैं बाजार अपडेट और प्रशिक्षण के लिए।',
      training: '📘 आगामी प्रशिक्षण: "एडवांस्ड ऑर्गेनिक फार्मिंग" 5 नवंबर को निकटतम केवीके केंद्र में।',
      default: '🤖 मुझे इस बारे में पक्का नहीं है, पर मैं फसल, सिंचाई या उर्वरक की जानकारी दे सकता हूँ!',
      hello: 'नमस्ते! मैं आपकी कैसे मदद कर सकता हूँ? 😊',
      placeholder: 'अपना संदेश लिखें...',
      send: 'भेजें',
      assistantName: 'किसान साथी सहायक',
    },
    mr: {
      greeting: '👋 नमस्कार! मी तुमचा किसान साथी सहाय्यक आहे.',
      help: 'तुम्ही मला पिक योजना, सिंचन, रोग नियंत्रण, खत व इतर गोष्टींबद्दल विचारू शकता!',
      crop: '🌾 तुमच्या प्रदेशासाठी या हंगामात गहू आणि मोहरी उत्तम पर्याय आहेत!',
      irrigation: '💧 गव्हासाठी 4 सिंचन चक्र करा – टिलरिंग, जॉइन्टिंग, फुलोरा आणि डोह टप्प्यात.',
      disease: '🦠 संभाव्य रोग: लीफ रस्ट. उपाय: मॅन्कोझेब (0.25%) फवारणी दर 10 दिवसांनी करा.',
      fertilizer: '🌿 शिफारस केलेले खत: युरिया (120kg/ha) + DAP (60kg/ha) तीन भागांत द्या.',
      community: '👥 बाजार अद्यतन आणि प्रशिक्षणासाठी जवळच्या शेतकरी समुदाय समूहात सामील व्हा.',
      training: '📘 आगामी प्रशिक्षण: "प्रगत सेंद्रिय शेती" 5 नोव्हेंबर रोजी तुमच्या जवळच्या KVK केंद्रात.',
      default: '🤖 मला खात्री नाही, पण मी पिक, सिंचन, खत किंवा रोग माहिती देऊ शकतो!',
      hello: 'नमस्कार! मी तुम्हाला कशात मदत करू शकतो? 😊',
      placeholder: 'तुमचा संदेश टाइप करा...',
      send: 'पाठवा',
      assistantName: 'किसान साथी सहाय्यक',
    },
    pa: {
      greeting: '👋 ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡਾ ਕਿਸਾਨ ਸਾਥੀ ਸਹਾਇਕ ਹਾਂ।',
      help: 'ਤੁਸੀਂ ਮੈਨੂੰ ਫਸਲ ਯੋਜਨਾਵਾਂ, ਸਿੰਚਾਈ, ਬਿਮਾਰੀ ਨਿਯੰਤਰਣ, ਖਾਦਾਂ ਅਤੇ ਹੋਰ ਬਹੁਤ ਕੁਝ ਬਾਰੇ ਪੁੱਛ ਸਕਦੇ ਹੋ!',
      crop: '🌾 ਤੁਹਾਡੇ ਖੇਤਰ ਦੇ ਅਨੁਸਾਰ, ਇਸ ਮੌਸਮ ਲਈ ਕਣਕ ਅਤੇ ਸਰ੍ਹੋਂ ਵਧੀਆ ਵਿਕਲਪ ਹਨ!',
      irrigation: '💧 ਕਣਕ ਲਈ, 4 ਸਿੰਚਾਈ ਚੱਕਰਾਂ ਦੀ ਪਾਲਣਾ ਕਰੋ - ਟਿਲਰਿੰਗ, ਜੁਆਇੰਟਿੰਗ, ਫੁੱਲ ਆਉਣ ਅਤੇ ਦਾਣੇ ਬਣਨ ਦੇ ਪੜਾਵਾਂ ਤੇ।',
      disease: '🦠 ਸੰਭਾਵਿਤ ਬਿਮਾਰੀ: ਪੱਤਿਆਂ ਦੀ ਕੁੰਗੀ। ਇਲਾਜ: ਮੈਨਕੋਜ਼ੇਬ (0.25%) ਦਾ ਛਿੜਕਾਅ ਹਰ 10 ਦਿਨਾਂ ਬਾਅਦ ਕਰੋ।',
      fertilizer: '🌿 ਸਿਫ਼ਾਰਸ਼ੀ ਖਾਦ: ਯੂਰੀਆ (120kg/ha) + DAP (60kg/ha) 3 ਖੁਰਾਕਾਂ ਵਿੱਚ ਵੰਡ ਕੇ ਦਿਓ।',
      community: '👥 ਤੁਸੀਂ ਮਾਰਕੀਟ ਅਪਡੇਟਾਂ ਅਤੇ ਸਿਖਲਾਈ ਸੈਸ਼ਨਾਂ ਲਈ ਆਪਣੇ ਨੇੜਲੇ ਕਿਸਾਨ ਭਾਈਚਾਰੇ ਸਮੂਹ ਵਿੱਚ ਸ਼ਾਮਲ ਹੋ ਸਕਦੇ ਹੋ।',
      training: '📘 ਆਗਾਮੀ ਸਿਖਲਾਈ: "ਉੱਨਤ ਜੈਵਿਕ ਖੇਤੀ" 5 ਨਵੰਬਰ ਨੂੰ ਤੁਹਾਡੇ ਨਜ਼ਦੀਕੀ KVK ਕੇਂਦਰ ਵਿਖੇ।',
      default: '🤖 ਮੈਨੂੰ ਇਸ ਬਾਰੇ ਯਕੀਨ ਨਹੀਂ ਹੈ, ਪਰ ਮੈਂ ਫਸਲਾਂ, ਸਿੰਚਾਈ, ਖਾਦ ਜਾਂ ਬਿਮਾਰੀ ਬਾਰੇ ਜਾਣਕਾਰੀ ਦੇ ਸਕਦਾ ਹਾਂ!',
      hello: 'ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ? 😊',
      placeholder: 'ਆਪਣਾ ਸੁਨੇਹਾ ਟਾਈਪ ਕਰੋ...',
      send: 'ਭੇਜੋ',
      assistantName: 'ਕਿਸਾਨ ਸਾਥੀ ਸਹਾਇਕ',
    },
    bn: {
      greeting: '👋 নমস্কার! আমি আপনার কিসান সাথী সহকারী।',
      help: 'আপনি আমাকে ফসল পরিকল্পনা, সেচ, রোগ নিয়ন্ত্রণ, সার এবং আরও অনেক কিছু সম্পর্কে জিজ্ঞাসা করতে পারেন!',
      crop: '🌾 আপনার অঞ্চলের উপর ভিত্তি করে, এই মৌসুমের জন্য গম এবং সরিষা দুর্দান্ত বিকল্প!',
      irrigation: '💧 গমের জন্য, টিলারিং, জয়েন্টিং, ফুল ফোটা এবং দানা গঠনের পর্যায়ে ৪টি সেচ চক্র অনুসরণ করুন।',
      disease: '🦠 সম্ভাব্য রোগ: পাতার মরিচা। প্রতিকার: ম্যানকোজেব স্প্রে (0.25%) প্রতি ১০ দিন অন্তর করুন।',
      fertilizer: '🌿 প্রস্তাবিত সার: ইউরিয়া (120 কেজি/হেক্টর) + ডিএপি (60 কেজি/হেক্টর) ৩টি ডোজে বিভক্ত।',
      community: '👥 আপনি বাজারের আপডেট এবং প্রশিক্ষণ সেশনের জন্য আপনার নিকটবর্তী কৃষক সম্প্রদায়ের গ্রুপে যোগ দিতে পারেন।',
      training: '📘 আসন্ন প্রশিক্ষণ: "উন্নত জৈব চাষ" ৫ই নভেম্বর আপনার নিকটতম KVK কেন্দ্রে।',
      default: '🤖 আমি এ ব্যাপারে নিশ্চিত নই, তবে আমি ফসল, সেচ, সার বা রোগের তথ্য দিয়ে সাহায্য করতে পারি!',
      hello: 'নমস্কার! আমি আজ আপনাকে কিভাবে সাহায্য করতে পারি? 😊',
      placeholder: 'আপনার বার্তা টাইপ করুন...',
      send: 'পাঠান',
      assistantName: 'কিসান সাথী সহকারী',
    },
    ta: {
      greeting: '👋 வணக்கம்! நான் உங்கள் கிசான் சாத்தி உதவியாளர்.',
      help: 'பயிர் திட்டங்கள், நீர்ப்பாசனம், நோய் கட்டுப்பாடு, உரங்கள் மற்றும் பலவற்றைப் பற்றி நீங்கள் என்னிடம் கேட்கலாம்!',
      crop: '🌾 உங்கள் பகுதியின் அடிப்படையில், இந்த பருவத்திற்கு கோதுமை மற்றும் கடுகு சிறந்த விருப்பங்கள்!',
      irrigation: '💧 கோதுமைக்கு, தூர்விடும், கணுவிடும், பூக்கும் மற்றும் பால் பிடிக்கும் நிலைகளில் 4 நீர்ப்பாசன சுழற்சிகளைப் பின்பற்றவும்.',
      disease: '🦠 சாத்தியமான நோய்: இலைத் துரு. প্রতিকாரம்: மான்கோசெப் தெளிப்பு (0.25%) ஒவ்வொரு 10 நாட்களுக்கும் ஒருமுறை.',
      fertilizer: '🌿 பரிந்துரைக்கப்படும் உரம்: யூரியா (120 கிலோ/ஹெக்டேர்) + டிஏபி (60 கிலோ/ஹெக்டேர்) 3 அளவுகளில் பிரிக்கப்பட்டது.',
      community: '👥 சந்தை நிலவரங்கள் மற்றும் பயிற்சி அமர்வுகளுக்கு உங்கள் அருகிலுள்ள உழவர் சமூகக் குழுவில் சேரலாம்.',
      training: '📘 வரவிருக்கும் பயிற்சி: "மேம்பட்ட கரிம வேளாண்மை" நவம்பர் 5 ஆம் தேதி உங்கள் அருகிலுள்ள KVK மையத்தில்.',
      default: '🤖 அதைப் பற்றி எனக்கு உறுதியாகத் தெரியவில்லை, ஆனால் பயிர்கள், நீர்ப்பாசனம், உரம் அல்லது நோய் பற்றிய தகவல்களுக்கு நான் உதவ முடியும்!',
      hello: 'வணக்கம்! இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்? 😊',
      placeholder: 'உங்கள் செய்தியை தட்டச்சு செய்யவும்...',
      send: 'அனுப்பு',
      assistantName: 'கிசான் சாத்தி உதவியாளர்',
    },
  };

  const initialMessages = [
    { sender: 'bot', text: translations[language].greeting },
    { sender: 'bot', text: translations[language].help },
  ];

  // --- Mock Reply Logic ---
  const getMockReply = (query: string) => {
    const q = query.toLowerCase();
    const t = translations[language];
    if (q.includes('crop') || q.includes('plan')) return t.crop;
    if (q.includes('irrigation') || q.includes('सिंचाई')) return t.irrigation;
    if (q.includes('disease') || q.includes('रोग')) return t.disease;
    if (q.includes('fertilizer') || q.includes('fertiliser') || q.includes('उर्वरक')) return t.fertilizer;
    if (q.includes('community') || q.includes('समुदाय')) return t.community;
    if (q.includes('training') || q.includes('प्रशिक्षण')) return t.training;
    if (q.includes('hello') || q.includes('hi') || q.includes('नमस्ते') || q.includes('नमस्कार')) return t.hello;
    return t.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { sender: 'user', text: input.trim() };
    const currentMessages = messages.length > 0 ? messages : initialMessages;
    setMessages([...currentMessages, userMsg]);

    setTimeout(() => {
      const botReply = getMockReply(input.trim());
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
    }, 600);

    setInput('');
  };

  const handleLanguageChange = () => {
    const languages: Language[] = ['en', 'hi', 'mr', 'pa', 'bn', 'ta'];
    const currentIndex = languages.indexOf(language);
    const nextIndex = (currentIndex + 1) % languages.length;
    setLanguage(languages[nextIndex]);
  };

  return (
    <div className="relative flex flex-col min-h-screen">
      <DashboardNavbar />
      <main className="grow">
        <Outlet />
      </main>
      <DashboardFooter />

      {/* Floating Chat Button + Window */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isChatOpen && (
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-all"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        )}

        {isChatOpen && (
          <div className="w-[420px] h-[520px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col animate-fadeIn">
            {/* Header */}
            <div className="flex items-center justify-between bg-green-600 text-white p-3">
              <h2 className="text-lg font-semibold">{translations[language].assistantName}</h2>
              <div className="flex gap-2">
                <button
                  onClick={handleLanguageChange}
                  className="bg-white text-green-700 p-1.5 rounded-lg hover:bg-green-50"
                  title="Change Language"
                >
                  <Globe className="h-5 w-5" />
                </button>
                <button onClick={() => setIsChatOpen(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 text-sm">
              {(messages.length > 0 ? messages : initialMessages).map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`px-3 py-2 rounded-lg max-w-[75%] ${
                      msg.sender === 'user'
                        ? 'bg-green-600 text-white rounded-br-none'
                        : 'bg-gray-100 text-gray-800 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input Area */}
            <div className="p-3 border-t flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={translations[language].placeholder}
                className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button
                onClick={handleSend}
                className="ml-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm"
              >
                {translations[language].send}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}