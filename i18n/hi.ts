import type { Translations } from './translations';

const text: Translations = {
  Departments: {
    departmentTitles: {
      ENGINEERING: {
        title: 'अभियांत्रिकी',
        subTitle: [
          'नागरिक अभियांत्रिकी',
          'कंप्यूटर अभियांत्रिकी',
          'इलेक्ट्रिकल अभियांत्रिकी',
          'इलेक्ट्रॉनिक्स और संचार अभियांत्रिकी',
          'यांत्रिक अभियांत्रिकी',
        ],
      },
      SCIENCES: {
        title: 'विज्ञान',
        subTitle: ['रसायन विज्ञान', 'गणित', 'भौतिक विज्ञान'],
      },
      SCHOOL: {
        title: 'विद्यालय',
        subTitle: [
          'पुनर्नवीकरणीय ऊर्जा और दक्षता स्कूल',
          'वीएलएसआई डिज़ाइन और एम्बेडेड सिस्टम स्कूल',
        ],
      },
      MISCELLANEOUS: {
        title: 'विविध',
        subTitle: [
          'व्यवसाय प्रबंधन',
          'कंप्यूटर एप्लीकेशन',
          'मानविकी और सामाजिक विज्ञान',
        ],
      },
    },
    readMore: 'और पढ़ें →',
    sectionTitles: [
      'परिचय',
      'दृष्टि',
      'उद्देश्य',
      'विभागाध्य से संदेश',
      'कार्यक्रमावली',
      'संकाय',
      'प्रयोगशाला',
      'छात्र उपलब्धियां',
      'चित्र संग्रह',
    ],
    subLinkTitles: [
      'परिचय',
      'दृष्टि और उद्देश्य',
      'विभागाध्य से संदेश',
      'कार्यक्रमावली',
      'संकाय',
      'चित्र संग्रह',
    ],
  },
  DirectorsCorner: {
    alt: 'डा. बी. वी. रमणा रेड्डी',
    title: 'निर्देशक का कोना',
    name: 'डा. बी. वी. रमणा रेड्डी',
    quote: [
      `भारत, साधकों की भूमि, ११०० वर्षों की पराधीनता, युद्ध, विलय और अपमान के बाद फिर से विश्व गुरु बन्ने
      के शिखर पर है। हमारे नेताओं, स्वतंत्रता सेनानियों के बलिदान के कारण ७५ वर्षों से यह फिर से एक स्वतंत्र
      देश है और इसने अपनी समृद्ध विविधता, संस्कृतियों, भाषाओं के साथ राष्ट्र के निर्माण की कई चुनौतियों के बीच
      खड़े होने की कला सीख ली है। देश को हर क्षेत्र में मजबूत बनाते हुए विविधता में एकता ही हमारा मंत्र है।`,
      'मैं इस संस्था की वेबसाइट पर आने वाले सभी लोगों का हृदय से स्वागत करता हूं।',
    ],
    more: 'और पढ़ें',
  },
  Footer: {
    logo: 'प्रतीक चिन्ह',
    nit: 'राष्ट्रीय प्रौद्योगिकी संस्थान, कुरूक्षेत्र',
    location: 'थानेसर, हरियाणा, भारत १३६११९',
    design: 'कलाकृति',
    headings: ['त्वरित संदर्भ', 'त्वरित संदर्भ', 'त्वरित संदर्भ'],
    lorem: 'लोरेम इप्सम',
    copyright:
      '© २०२४ राष्ट्रीय प्रौद्योगिकी संस्थान कुरूक्षेत्र। सर्वाधिकार आरक्षित।',
  },
  Header: {
    institute: 'संस्थान',
    academics: 'शैक्षिक',
    faculty: 'संकाय और कर्मचारी',
    placement: 'प्रशिक्षण एवं नियुक्ति',
    activities: 'छात्र गतिविधियाँ',
    alumni: 'भूतपूर्व छात्र',
    logo: 'प्रतीक चिन्ह',
    search: 'त्वरित खोज...',
    login: 'लॉगिन',
  },
  Notifications: {
    title: 'सूचनाएं',
    categories: {
      academic: 'शैक्षणिक',
      tender: 'निविदाएँ',
      workshop: 'कार्यशालाएं',
      recruitment: 'नियुक्ति',
    },
    viewAll: 'सारा देखें',
  },
  NotFound: {
    title: 'नहीं मिला',
    description: 'अनुरोधित संसाधन नहीं मिल सका',
    backHome: 'घर लौटें',
  },
  StudentActivities: {
    title: 'छात्र गतिविधियाँ',
    headings: {
      clubs: 'संघठनें',
      council: 'छात्र परिषद',
      events: 'आयोजनाएँ',
      thoughtLab: 'विचार प्रयोगशाला',
      nss: 'एनएसएस',
      ncc: 'एनसीसी',
    },
    sections: { clubs: { title: 'संघठनें', more: 'सभी संघठनो को तलाशें' } },
  },
  Unauthorised: {
    title: 'अनधिकृत',
    description: 'आप इस पृष्ठ को देखने के लिए अधिकृत नहीं हैं।',
  },
  WorkInProgress: {
    title: 'कार्य प्रगति पर है',
    description: 'इस पेज पर अभी काम चल रहा है. कृपया दूसरी बार आएं',
  },
};

export default text;
