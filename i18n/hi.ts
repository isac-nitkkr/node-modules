import type { Translations } from './translations';

const text: Translations = {
  Main: {
    director: {
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
  },

  Clubs: { title: 'संघठनें' },
  Committee: {
    building: 'निर्माण एवं कार्य समिति',
    financial: 'वित्तीय समिति',
    governor: 'राज्यपाल मंडल',
    members: {
      title: 'सदस्य',
      serial: 'क्रम संख्या',
      nomination: 'नामांकन',
      name: 'नाम',
      servingAs: 'के रूप में सेवारत',
    },
    meetings: {
      title: 'बैठकें',
      serial: 'बैठक संख्या',
      date: 'दिनांक',
      place: 'स्थान',
      agenda: 'कार्यसूची',
      minutes: 'विवरण',
    },
  },
  Curricula: {
    pageTitle: 'पाठ्यक्रम',
    code: 'कोड',
    title: 'शीर्षक',
    major: 'क्रमादेश',
    credits: 'एल-टी-पी',
    totalCredits: 'क्रेडिट्स',
    syllabus: 'पाठ्यक्रम',
  },
  Departments: { title: 'विभाग' },
  Department: {
    headings: {
      about: 'परिचय',
      vision: 'दृष्टि',
      and: 'और',
      mission: 'उद्देश्य',
      hod: {
        title: 'विभागाध्यक्ष का संदेश',
        session: (from: string) => `शैक्षणिक सत्र ${from} - वर्तमान`,
      },
      programmes: {
        title: 'कार्यक्रम',
        undergrad: 'पूर्वस्नातक',
        postgrad: 'स्नातकोत्तर',
        doctorate: 'डॉक्टरेट',
      },
      gallery: 'चित्र',
    },
    facultyAndStaff: 'संकाय और कर्मचारी',
    laboratories: 'प्रयोगशालाएँ',
    achievements: 'छात्र उपलब्धियाँ',
  },
  FacultyAndStaff: {
    placeholder: 'नाम या ईमेल से खोजें',
    departmentHead: 'विभागाध्यक्ष',
  },
  FAQ: { title: 'अक्सर पूछे जाने वाले प्रश्न' },
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
  Forms: { title: 'फॉर्म्स' },
  Header: {
    institute: 'संस्थान',
    academics: 'शैक्षिक',
    faculty: 'संकाय और कर्मचारी',
    placement: 'प्रशिक्षण एवं नियुक्ति',
    activities: 'छात्र गतिविधियाँ',
    alumni: 'भूतपूर्व छात्र',
    logo: 'प्रतीक चिन्ह',
    search: 'त्वरित खोज...',
    login: 'प्रवेश',
    profile: { alt: 'मेरी छवि', view: 'विवरण देखें' },
  },
  Login: {
    title: 'प्रवेश करें',
    enterEmail: 'अपना ईमेल दर्ज करें',
    continueButton: 'अगले चरण पर बढ़ें (तैयार नहीं)',
    signInWithGoogle: 'गूगल द्वारा प्रवेश करें',
  },
  Notifications: {
    title: 'सूचनाएँ',
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
  Profile: {
    tabs: {
      personal: {
        title: 'व्यक्तिगत विवरण',
        basic: {
          title: 'मूलभूत',
          name: 'नाम',
          rollNumber: 'रोल संख्या',
          sex: 'लिंग',
          dateOfBirth: 'जन्मदिन',
        },
        contact: {
          title: 'संपर्क',
          email: 'संस्थान ईमेल',
          personalEmail: 'व्यक्तिगत ईमेल',
          telephone: 'टेलीफ़ोन',
          alternateTelephone: 'वैकल्पिक टेलीफ़ोन',
        },
        institute: {
          title: 'संस्था',
          degree: 'उपाधि',
          major: 'क्रमादेश',
          currentSemester: 'मौजूदा छमाही',
          section: 'अनुभाग',
        },
        admission: {
          title: 'प्रवेश',
          applicationNumber: 'प्रवेश संख्या',
          candidateCategory: 'उम्मीदवार श्रेणी',
          admissionCategory: 'प्रवेश श्रेणी',
          admissionSubcategory: 'प्रवेश उपश्रेणी',
          dateOfAdmission: 'प्रवेश की तिथि',
        },
        guardians: {
          title: 'अभिभावक',
          father: 'पिता',
          mother: 'माता',
          local: 'स्थानीय संरक्षक',
          name: 'नाम',
          telephone: 'टेलीफ़ोन',
          email: 'ईमेल',
        },
        address: {
          title: 'पता',
          permanent: 'स्थायी पता',
          pinCode: 'पिन कोड',
        },
      },
      notifications: { title: 'सूचनाएँ' },
      courses: { title: 'पाठ्यक्रम' },
      clubs: { title: 'संघठन' },
      results: { title: 'परिणाम और विस्तृत अंक प्रमाण पत्र' },
      bookmarks: { title: 'बुकमार्क्स' },
      quickSend: { title: 'त्वरित प्रेषण' },
    },
    logout: 'प्रस्थान करें',
  },
  Search: {
    placeholder: 'त्वरित खोज...',
    categories: {
      all: 'सभी परिणाम',
      clubs: 'क्लब',
      committees: 'समितियां',
      courses: 'पाठ्यक्रम',
      departments: 'विभाग',
      faculty: 'लोग',
      sections: 'खंड',
      staff: 'कर्मचारी',
    },
    viewAll: 'सारा देखें',
    default: {
      recents: 'ताज़ा खोजें',
      clearRecents: 'हाल की खोजें साफ़ करें',
      mostSearched: 'एनआईटी की सर्वाधिक खोजें',
      studentLinks: {
        title: 'छात्र संबंधित त्वरित लिंक',
        clubs: 'संघठनें',
        courses: 'पाठ्यक्रम',
        departments: 'विभाग',
        notifications: 'सूचनाएँ',
        results: 'परिणाम',
      },
      facultyLinks: {
        title: 'संकाय संबंधित त्वरित लिंक',
        notifications: 'सूचनाएँ',
        profile: 'मेरा विवरण',
      },
    },
  },
  Section: {
    about: 'परिचय',
    gallery: 'चित्र',

    Account: {},
    CentralLibrary: {},
    CentralWorkshop: {},
    CentreOfComputingAndNetworking: {},
    ElectricalMaintenance: {},
    Estate: {},
    GeneralAdministration: {},
    HealthCentre: {},
    Security: {},
    Sports: {
      title: 'खेल अनुभाग',
      headings: {
        Sports: 'खेल',
        Department: 'शारीरिक शिक्षा विभाग',

        admin: 'प्रशासन प्रमुख',
        facilities: 'सुविधाएँ',
        gallery: 'गैलरी',
      },
      about: {
        title: 'शारीरिक शिक्षा और खेल विभाग',
        profTableTitle: { name: 'नाम', details: 'विवरण' },
        headPosition: 'प्रो.-शुल्क (शारीरिक शिक्षा)',
        email: 'मेल आईडी :',
        phone: 'मो.न.',
      },
      sports: {
        name: 'नाम',
        designation: 'पदनाम एवं योग्यता',
        phone: 'फ़ोन नंबर',
        mail: 'ईमेल',
        about:
          'इंजीनियरिंग पाठ्यक्रम प्रत्येक छात्र से समर्पित और निरंतर प्रयास की मांग करता है। परिणामस्वरूप, हमारे छात्र पूरे वर्ष अपनी पढ़ाई में व्यस्त रहते हैं। फिर भी, छात्रों के समग्र विकास में खेल और खेलों के महत्व को समझते हुए, हमने उन्हें यथासंभव खेल सुविधाएँ प्रदान करने का सर्वोत्तम प्रयास किया है। संस्थान विभिन्न आउटडोर और इनडोर खेलों और ट्रैक और फील्ड खेलों में छात्रों की भागीदारी पर पर्याप्त जोर देता है। सभी खेल और खेल गतिविधियों का निर्देशन एक खेल समिति द्वारा किया जाता है जिसमें छात्र, संकाय सदस्य और खेल कर्मी (निदेशक खेल और व्याख्याता शारीरिक शिक्षा) शामिल होते हैं। समिति खेल और खेलों के लिए नीतियों और कार्यक्रम को निर्धारित करने के लिए जिम्मेदार है।',
        prize: `अध्यक्ष खेल के रूप में नामित एक वरिष्ठ संकाय सदस्य गतिविधियों का समन्वय करता है। खेल में अपने उत्कृष्ट प्रदर्शन से खुद को अलग पहचान दिलाने वाले छात्र 'वर्ष के सर्वश्रेष्ठ खिलाड़ी' पुरस्कार और संस्थान के रंगों सहित कई पुरस्कारों के लिए पात्र हैं। खेल समिति की सिफारिशों पर, वर्ष के सर्वश्रेष्ठ खिलाड़ी को 500/- रुपये का नकद पुरस्कार और एक ट्रॉफी प्रदान की जाती है।`,
        department: `संस्थान विभिन्न आउटडोर और इनडोर खेलों तथा ट्रैक और फील्ड खेलों में छात्रों की भागीदारी पर पर्याप्त जोर देता है। परिसर में खेलकूद के लिए विस्तृत और सुव्यवस्थित मैदान उपलब्ध हैं। बैडमिंटन कोर्ट, टेनिस कोर्ट, क्रिकेट पिच, हॉकी ग्राउंड, फुटबॉल ग्राउंड, रोशनी के साथ वॉलीबॉल कोर्ट और रोशनी के साथ बास्केटबॉल कोर्ट, कबड्डी ग्राउंड और स्टेडियम आदि कुछ ऐसी सुविधाएं हैं जो छात्रों को उपलब्ध हैं। खेल निदेशक और व्याख्याता शारीरिक शिक्षा छात्रों को खेलों में उनकी रुचि विकसित करने में मदद करते हैं और उन्हें स्वीकार्य मानकों पर प्रशिक्षित करते हैं।`,
        dept:[
          'विद्यार्थियों और स्टाफ सदस्यों के स्वास्थ्य की देखभाल के लिए जिम्नेजियम सेंटर की व्यवस्था की गई है। इसमें विभिन्न शारीरिक व्यायाम के लिए नवीनतम और अत्याधुनिक उपकरण लगे हुए हैं।',
        
          'सभी खेल और खेल गतिविधियों का निर्देशन एक खेल समिति द्वारा किया जाता है जिसमें अध्यक्ष खेल, खेल निदेशक, व्याख्याता शारीरिक शिक्षा, विभिन्न खेलों के प्रभारी प्रोफेसर और विभिन्न खेलों के कप्तान शामिल होते हैं। समिति खेल और खेलों के लिए नीतियां और कार्यक्रम निर्धारित करने के लिए जिम्मेदार है।',
       
          'इंजीनियरिंग छात्रों को शारीरिक रूप से स्वस्थ रखने के लिए, 2006-07 से प्रथम एवं द्वितीय सेमेस्टर में एक क्रेडिट के साथ शारीरिक शिक्षा एवं खेल को अनिवार्य विषय के रूप में शुरू किया गया है।',],
        facilities:
          'परिसर में छात्रों के लिए खेलकूद के लिए विस्तृत और सुव्यवस्थित मैदान उपलब्ध हैं। बैडमिंटन कोर्ट, कोर्ट के चारों ओर चेन लिंक आयरन मेस के साथ टेनिस कोर्ट, क्रिकेट पिच, लाइट के साथ वॉलीबॉल कोर्ट और चेन लिंक आयरन मेस एनक्लोजर और बास्केटबॉल और स्टेडियम आदि की सुविधाएं छात्रों के लिए उपलब्ध हैं। प्रशिक्षित खेल कर्मी छात्रों को खेलों में उनकी रुचि विकसित करने में मदद करते हैं और उन्हें स्वीकार्य मानकों पर प्रशिक्षित करते हैं।',
        gallery: 'गैलरी',
        employeeTable: [
          {
            name: 'डॉ. पी.सी. तिवारी',
            designation: 'प्रभारी (शारीरिक शिक्षा)',
            phone: '+91 09896- 434963',
            mail: 'pctewari1@nitkkr.ac.in',
          },
          {
            name: 'पल्लवी राय',
            designation: 'एस.ए.एस. अधिकारी',
            phone: '+91 09466- 128133',
            mail: 'pallaviraisaso@nitkkr.ac.in',
          },
          {
            name: 'लेफ्टिनेंट शाहबुद्दीन',
            designation: 'एस.ए.एस. अधिकारी',
            phone: '+91 09466- 128133',
            mail: 'sahab.sabu7@gmail.com',
          },
        ],
      },
      swimmingPool: {
        title: 'स्विमिंग पूल',
        welcome: 'एनआईटी कुरुक्षेत्र के स्विमिंग पूल में आपका स्वागत है',
        about: 'स्विमिंग पूल के बारे में',
        aboutDescription:
          'एनआईटी कुरुक्षेत्र में अब अंतरराष्ट्रीय मानकों का एक स्विमिंग पूल, 50 मीटर है। x 25 एमटी। आकार, 90 सेमी के साथ। उथले छोर पर गहराई और 5 मीटर। गहराई से गहराई तक। इसके अलावा यह 3 स्प्रिंग डाइविंग के लिए 3 Mts।, 5 Mts से लैस है। और 7 Mts ऊंचाई एक साथ। यह ओलंपिक प्रकार के फाइबर के साथ पोर्टेबल टेक ऑफ बोर्डों के साथ प्रतियोगिताओं का संचालन करने के लिए एंटी-वेव लेन मार्करों के साथ प्रदान किया जाता है जहां एक समय में 60 से 70 लोगों को समायोजित किया जा सकता है। स्विमिंग पूल हर साल मार्च से अक्टूबर के महीनों के दौरान चालू होता है। स्विमिंग पूल में कर्मचारियों और छात्रों के लिए अलग-अलग समय है। संस्थान टीम के पास एक अलग स्लॉट भी है जहां वे विशेषज्ञ प्रशिक्षकों की देखरेख में अपने कौशल और तकनीक में सुधार करते हैं।',
        location: 'जगह',
        membershipListQuestion: ' कौन सदस्य बन सकता है?',
        membershipPre: '',
        membershipList: [
          'स्विमिंग पूल की सदस्यता केवल निम्न श्रेणियों के व्यक्तियों के लिए खुली है।',
          'एनआईटी कुरुक्षेत्र के बोनाफाइड छात्र, और अनुसंधान विद्वानों और उनके पति और बच्चों के।',
          'एनआईटी कुरुक्षेत्र के कर्मचारी (संकाय और कर्मचारी) और उनके आश्रित परिवार के सदस्य (मेडिकल कार्ड या हेल्थ सेंटर बुकलेट में दर्ज)।',
          'एनआईटी कुरुक्षेत्र के पूर्व छात्र।',
          'एनआईटी कुरुक्षेत्र के सेवानिवृत्त कर्मचारी और उनके पति।',
          'माननीय निदेशक द्वारा किसी अन्य व्यक्ति को विशेष रूप से अनुमति दी जाती है।',
        ],
        membershipPost:
          'उपर्युक्त के अलावा किसी अन्य को बाहरी व्यक्ति के रूप में माना जाएगा और वह स्विमिंग पूल का सदस्य बनने का हकदार नहीं होगा।',
        membershipHowQuestion: 'कैसे एक सदस्य बनें?',
        membershipHow:
          'सभी सदस्यों से अनुरोध है कि वे निर्धारित आवेदन पत्र को भरें और दो फोटो और पहचान पत्र / स्वास्थ्य कार्ड की प्रतिलिपि के साथ किसी भी कार्य दिवस पर शाम 4:00 से 5:30 के बीच शारीरिक शिक्षा और खेल अनुभाग के कार्यालय में जमा करें। यानी सोमवार से शुक्रवार।',
        membershipHowList: [
          '“अपूर्ण आवेदन या उचित पहचान प्रमाण के बिना आवेदन किसी भी परिस्थिति में मनोरंजन नहीं किया जाएगा।” सदस्यता आवेदन पत्र का प्रारूप, सदस्यता के लिए पात्रता, शुल्क / सदस्यता, समय और विवरण संस्थान की वेबसाइट ',
          'अनुभाग ',
          'खेल अनुभाग ',
          'स्विमिंग पूल पर उपलब्ध हैं।',
        ],
        membershipApplicationForm: 'आवेदन पत्र डाउनलोड :',
        ApplicationFormList: [
          'छात्रों / विद्वानों के लिए सदस्यता आवेदन (पीडीएफ)',
          'कर्मचारियों के लिए सदस्यता आवेदन (पीडीएफ)',
          'कर्मचारी आश्रितों के लिए सदस्यता आवेदन (पीडीएफ)',
          'सदस्यता_आवेदन_विशेष अनुमति (1)',
        ],
        subscriptionsTitle: 'सत्र 2017 के लिए सदस्यता सदस्यता',
        subscriptionsTableTitle: {
          category: 'वर्ग',
          duration8: '8 महीने (मार्च 01 – अक्टूबर 31)',
          duration3:
            '3 महीने वसंत (अप्रैल 01 – 30 जून) या शरद ऋतु (जुलाई 01- अक्टूबर 31)',
        },
        subscriptionsTable: [
          {
            category: 'NIT कुरुक्षेत्र के पंजीकृत छात्र।',
            duration8: 'नि: शुल्क',
            duration3: 'नि: शुल्क',
          },
          {
            category:
              'एनआईटी कुरुक्षेत्र संकाय, स्टाफ और उनके आश्रित सदस्य मेडिकल कार्ड के अनुसार।',
            duration8: 'नि: शुल्क',
            duration3: 'नि: शुल्क',
          },
          {
            category:
              'एनआईटी कुरुक्षेत्र के पूर्व छात्र, एनआईटी कुरुक्षेत्र के सेवानिवृत्त कर्मचारी और उनके पति।',
            duration8: '1000/-',
            duration3: '600/-',
          },
          {
            category:
              'पंजीकृत एनआईटी कुरूक्षेत्र अनुसंधान विद्वानों के पति/पत्नी और बच्चे।',
            duration8: '600/-',
            duration3: '300/-',
          },
          {
            category: 'अन्य सभी (माननीय निदेशक के अनुमोदन से)।',
            duration8: '2000/-',
            duration3: '1000/-',
          },
        ],
        administrativeTitle: 'स्विमिंग पूल प्रशासनिक निकायों',
        inchargeTitle: 'प्रोफेसर प्रभारी (शारीरिक शिक्षा)',
        inchargedetails:
          'प्रोफेसर प्रभारी (शारीरिक शिक्षा) स्विमिंग पूल शारीरिक शिक्षा और खेल अनुभाग के तहत संचालित एक संस्थान की सुविधा है। प्रोफेसर I / C (शारीरिक शिक्षा) सभी खेल गतिविधियों और सुविधाओं का प्रमुख है।\n\nवर्तमान में फिजिकल एजुकेशन एंड स्पोर्ट्स सेक्शन की अध्यक्षता रसायन शास्त्र विभाग के प्रोफेसर डी। पी। सिंह द्वारा की जाती है।',
        committeeTitle: 'स्विमिंग पूल समिति (SPC)',
        committeeDetails:
          'समय-समय पर सुचारू रूप से चलने, रखरखाव और अन्य गतिविधियों के लिए आवश्यक सिफारिशें करने के लिए माननीय निदेशक द्वारा नियुक्त एक प्रबंधन समिति। स्विमिंग पूल के कर्मचारी सीधे प्रो। आई / सी शारीरिक शिक्षा और स्विमिंग पूल समिति के नियंत्रण में होंगे। एसपीसी के कर्तव्यों और जिम्मेदारियों बजट तैयार करने और पूल वार्डों को सुचारू रूप से चलाने के लिए नीतिगत दिशानिर्देशों को निर्धारित करना उपयोगकर्ताओं की विभिन्न श्रेणियों के लिए सदस्यता शुल्क के बारे में निर्णय लेने के लिए और सदस्यों के मेहमानों के लिए शुल्क। तैराकी के मौसम के उद्घाटन और समापन की तारीखों के बारे में निर्णय लेने के लिए। स्विमिंग पूल के उपयोग के लिए पूल समय और स्लॉट के बारे में निर्णय लेना। स्विमिंग पूल को सुचारू रूप से चलाने के लिए आचरण नियमों और दिशानिर्देशों को तैयार / संशोधित करना। वर्तमान एस.पी.सी.',
        responsibilitiesTitle: 'SPC के कर्तव्य एवं उत्तरदायित्व',
        responsibilitiesList: [
          'पूल सुविधाओं के सहज संचालन के लिए बजट तैयार करें और नीति दिशानिर्देश तय करें।',
          'विभिन्न उपयोगकर्ता श्रेणियों के लिए सदस्यता शुल्क और सदस्यों के मेहमानों के लिए शुल्क तय करें।',
          'तैराकी मौसम के खुलने और बंद होने की तिथियाँ निर्धारित करें।',
          'तैराकी पूल का समय और स्लॉट तय करें तथा तैराकी पूल के उपयोग के लिए।',
          'तैराकी पूल के संचालन के सहज संचालन के लिए आचरण नियम और दिशानिर्देश तैयार करें और संशोधित करें।',
        ],
        spcTitle: 'वर्तमान SPC',
        spcSubTitle: 'वर्तमान एसपीसी के सदस्य हैं:',
        spcList: [
          {
            name: 'डॉ तेजवथु रमेश, सहायक प्रो, ईईडी',
            role: 'अध्यक्ष',
          },
          {
            name: 'श्री शहाबुद्दीन, एसएएस अधिकारी',
            role: 'सदस्य',
          },
          {
            name: 'श्री पल्लवी राय, एसएएस अधिकारी',
            role: 'सदस्य',
          },
        ],
        manpower: 'श्रमशक्ति',
        manpowerSubTitle: 'डे टू डे ऑपरेशन',
        manpowerListPretext:
          'दिन के संचालन और सुबह 5:30 बजे से 9.00 बजे के बीच स्विमिंग पूल के रखरखाव के लिए आवश्यक न्यूनतम संख्या में कर्मियों / श्रमशक्ति।',
        manpowerListTitle: {
          sNo: 'अनु क्रमांक',
          name: 'कार्य / पदनाम का विवरण',
          quantity: 'व्यक्तियों की संख्या',
        },
        manpowerList: [
          {
            name: 'पूल मैनेजर / पर्यवेक्षक',
            quantity: 'प्रत्येक पारी में 1',
          },
          {
            name: 'जीवन रक्षक',
            quantity: 'प्रत्येक पारी में 3 (2 पुरुष और 1 महिला)',
          },
          {
            name: 'प्रशिक्षकों / कोच',
            quantity: 'प्रत्येक पारी में 2 (1 पुरुष और 1 महिला)',
          },
          {
            name: 'पंप ऑपरेटर सह तकनीशियन (फिल्टर प्लांट के संचालन के लिए)',
            quantity: 'प्रत्येक पारी में 1',
          },
          {
            name: 'सक्सेशन हेल्पर, हाउसकीपिंग / वॉशरूम / बाथरूम क्लीनिंग एंड स्वीपिंग स्टाफ',
            quantity: 'प्रत्येक पारी में 3 पुरुष और 1 महिला',
          },
        ],
        maintenance: 'रखरखाव',
        maintenanceSubTitle:
          '4:00 की अवधि के लिए “स्विमिंग पूल का रखरखाव” करने के लिए 8:00 बजे से शाम 5.00 बजे तक कर्मियों / जनशक्ति की न्यूनतम संख्या को तैनात करके।',
        maintenanceListTitle: {
          sNo: 'अनु क्रमांक',
          name: 'कार्य / पदनाम का विवरण',
          quantity: 'व्यक्तियों की संख्या',
        },
        maintenanceList: [
          {
            name: 'पूल मैनेजर / पर्यवेक्षक',
            quantity: 'प्रत्येक पारी में 1',
          },
          {
            name: 'पंप ऑपरेटर / तकनीशियन',
            quantity: 'प्रत्येक पारी में 1',
          },
          {
            name: 'पूल और हाउसकीपिंग / वॉशरूम / शौचालय सफाई और सफाई कर्मचारी',
            quantity: 'प्रत्येक पारी में 2 (1 पुरुष और 1 महिला)',
          },
        ],
        chemicals: 'रसायन',
        chemicalsSubTitle:
          'न्यूनतम उपभोग्य सामग्रियों के साथ लागू मानदंडों / लाइसेंस शर्तों के अनुसार स्विमिंग पूल में पानी की गुणवत्ता बनाए रखने के लिए:',
        chemicalsListTitle: {
          sNo: 'अनु क्रमांक',
          description: 'उपभोग्य सामग्रियों का विवरण',
          quantity: 'सं या क़ती।',
          unit: 'इकाई / अवधि',
        },
        chemicalsList: [
          {
            description:
              'स्विमिंग पूल के पानी की कीटाणुशोधन के लिए टीसीसीए (निसान) की आपूर्ति',
            quantity: '150',
            unit: 'किग्रा / माह',
          },
          {
            description: 'म्युरिएटिक एसिड सोडियम की आपूर्ति',
            quantity: '500',
            unit: 'लीटर / माह',
          },
          {
            description: 'एचसीए',
            quantity: '50',
            unit: 'किग्रा / माह',
          },
          {
            description: 'पूल के पानी के लिए अलौह आलम की आपूर्ति',
            quantity: '50',
            unit: 'किग्रा / माह',
          },
          {
            description:
              'पूल क्लीनिंग इक्विपमेंट्स जैसे वॉल ब्रश, डीप बैग स्किमर, केमिकल डिस्पेंसर आदि, सेफ्टी इक्विपमेंट्स लाइफ़ जैकेट, स्विमिंग रिंग, फ़र्स्ट एड किट आदि',
            quantity: 'मानक स्तर के अनुसार',
            unit: 'मानक स्तर के अनुसार',
          },
          {
            description: 'किसी भी अन्य रसायन और उपकरण की आवश्यकता है',
            quantity: 'मानक स्तर के अनुसार',
            unit: 'मानक स्तर के अनुसार',
          },
        ],

        guidelinesTitle: 'दिशा-निर्देश',
        guidelines: [
          'स्विमिंग पूल की समयावधि कुछ निर्दिष्ट अवधि 5:30 पूर्वाह्न से 9:00 बजे के बीच ही होगी। कई स्लॉट होंगे; प्रत्येक स्लॉट स्लॉट के बीच 5-10 मिनट के अंतराल के साथ 50 मिनट की अवधि का होगा। इसलिए सदस्यों को FIR COME-FIRST-SERVE BASIS पर पूल में अनुमति दी जाएगी। सदस्यों को एक कतार बनाना चाहिए और एक व्यवस्थित तरीके से पूल के अंदर जाना चाहिए। प्रत्येक स्लॉट में तैराकों की अधिकतम संख्या 50-60 होगी। भविष्य में इस क्षमता को बढ़ाया जा सकता है।',
          'स्विमिंग पूल समिति पूल की देखरेख का आयोजन करेगी।',
          'एक प्रशिक्षक की सक्रिय देखरेख में ही डाइविंग क्षेत्र में डाइविंग की अनुमति है। प्रशिक्षक की सलाह के अलावा कोई भी व्यक्ति डाइविंग क्षेत्र में प्रवेश नहीं करेगा।',
          'हर स्लॉट के दौरान तीन लाइफगार्ड और दो कोच हमेशा ड्यूटी पर रहेंगे।',
          'तैराकों और शिक्षार्थियों को स्पष्ट रूप से प्रतिष्ठित और उचित रूप से अलग किया जाएगा। शिक्षार्थियों को रेड बाथिंग कैप पहनना चाहिए।',
          'बिजली की विफलता की स्थिति में, या किसी अन्य अप्रत्याशित परिस्थितियों के कारण, पूल बंद हो सकता है या स्लॉट को निलंबित / रद्द किया जा सकता है।',
          'स्विमिंग पूल का उपयोग विशेष कार्यक्रमों जैसे कि एनआईटी, इंटर ईयर या किसी अन्य तैराकी प्रतियोगिता के लिए किया जा सकता है जो स्विमिंग पूल समिति, शारीरिक शिक्षा और खेल अनुभाग या उच्चतर प्राधिकारी द्वारा तय किया गया है। ऐसे मामलों में, नियमित स्लॉट को प्रतियोगिताओं के दौरान या तो बदला जा सकता है या निलंबित किया जा सकता है।',
          'पूल प्रबंधन किसी भी चोरी, नुकसान या सदस्यों के सामान की क्षति के लिए जिम्मेदार नहीं होगा। सदस्यों को सलाह दी जाती है कि वे पूल में मोबाइल फोन, नकदी, क्रेडिट कार्ड, गहने आदि न लाएं।',
          'हालांकि प्रबंधन कुछ सुरक्षा पर्यवेक्षण प्रदान करने का प्रयास करेगा, यह पूरी तरह से सुरक्षित संचालन के लिए आवश्यक मानकों को बर्दाश्त नहीं कर सकता है। प्रत्येक सदस्य को अपनी सुरक्षा और अपने आसपास दूसरों की सुरक्षा सुनिश्चित करने का प्रयास करना चाहिए।',
          'आगंतुकों को जूते के साथ या बिना डेक क्षेत्र में जाने की अनुमति नहीं है। हालाँकि, वे आगंतुकों की गैलरी में जूते के साथ प्रवेश कर सकते हैं।',
          'स्विमिंग पूल या उसके किसी हिस्से में अनधिकृत प्रवेश, एक बड़ा अपराध है, और यह दंडित करता है।',
        ],
        conductTitle: 'आचरण नियम',
        conduct: [
          'दिए गए पूल समय और स्लॉट को सभी सदस्यों द्वारा सख्ती से पालन किया जाना चाहिए।',
          'सदस्यों (संकाय और कर्मचारियों सहित) को पूल में प्रवेश करने के बाद ही रजिस्टर पर हस्ताक्षर करने और “स्विमिंग पूल पहचान पत्र जारी किए जाने तक” काउंटर पर स्विमिंग पूल पहचान कार्ड सौंपे जाने की अनुमति होगी। पर्यवेक्षक को अपने पहचान पत्र को आत्मसमर्पण किए बिना किसी को भी स्विमिंग पूल में प्रवेश करने की अनुमति नहीं दी जाएगी।',
          'स्लॉट अवधि के अंत में, सदस्यों को फिर से रजिस्टर पर हस्ताक्षर करने और अपने सदस्यता कार्ड वापस लेने की आवश्यकता होती है।',
          'चूंकि स्विमिंग पूल बाहरी श्रमिकों द्वारा बनाए रखा जा रहा है, इसलिए सभी उपयोगकर्ताओं (संकाय और स्टाफ के सदस्यों सहित) के पास स्विमिंग पूल का उपयोग करने के लिए एक वैध पहचान पत्र होना चाहिए। अन्यथा स्विमिंग पूल में प्रवेश से इनकार किया जाएगा।',
          'पूल और डेक क्षेत्र को पूरी तरह से दो स्लॉट के बीच अंतराल में या जब प्रशिक्षक द्वारा एक आपातकालीन कॉल दिया जाता है, तो पूरी तरह से खाली होना चाहिए।',
          '4 साल से कम उम्र के बच्चों को स्विमिंग पूल में जाने की अनुमति नहीं है।',
          '4 से 12 वर्ष की आयु के नीचे के किसी भी बच्चे को उसके माता-पिता द्वारा अस्वीकार्य स्विमिंग पूल के अंदर जाने की अनुमति नहीं दी जाएगी। पूल परिसर के अंदर ऐसे छोटे बच्चों की सुरक्षा के लिए माता-पिता पूरी तरह से जिम्मेदार हैं।',
          'तैराकी के दौरान उचित तैराकी TRUNKS / COSTUMES और CAP पहने जाने चाहिए। महिलाओं, लड़कियों और पुरुषों के लंबे बाल, चाहे तैराक या शिक्षार्थी, तैराकी के दौरान प्लास्टिक स्नान कैप का उपयोग करना चाहिए। किसी विशेष वेशभूषा उचित है या नहीं, यह तय करने में प्रशिक्षक का निर्णय अंतिम है।',
          'शिक्षार्थियों को रेड बैटिंग कैप, पुरुषों और लड़कों के लिए कपड़े, महिलाओं के लिए प्लास्टिक, लड़कियों और लंबे बालों वाले पुरुषों को पहनना चाहिए।',
          'पूल के गहरे छोर में शिक्षार्थियों को अनुमति नहीं है, अर्थात् उथले छोर से 20 मीटर से परे। एक प्रशिक्षक द्वारा दिए गए परीक्षण को मंजूरी देने के बाद ही एक शिक्षार्थी तैराक के रूप में योग्य हो सकता है।',
          'कुछ निर्दिष्ट स्लॉट्स के दौरान, सदस्यों को अन्य तैराकों के साथ टकराव से बचने के लिए लंबाई में तैरना चाहिए।',
          'पूल में प्रवेश करने से पहले सदस्यों को पेशाब और शावर कक्ष के दरवाजे पर फुटबाथ के बाद स्नान करना चाहिए।',
          'स्विमिंग पूल में प्रवेश करने से पहले तेल का उपयोग पूरी तरह से निषिद्ध है।',
          'स्विमिंग पूल में साबुन या किसी अन्य रसायन का उपयोग पूर्ण रूप से प्रतिबंधित है।',
          'खेलना, कूदना, झगड़ा करना या स्विमिंग पूल में किसी भी विचलित व्यवहार को पूरी तरह से प्रतिबंधित किया गया है।',
          'स्विमिंग पूल परिसर में खाने पीने, खाने पीने की चीजों की सख्त मनाही है।',
          'उस कुंड में गोता न लगाएं जहां गहराई 5 फीट से कम हो।',
          'पानी में नाक बहने या थूकने से बचें, मैल-नाली का उपयोग करें।',
          'स्विमिंग पूल परिसर में पालतू जानवरों की अनुमति नहीं है।',
          'पूल प्रबंधन चोर, नुकसान या सामान के नुकसान के लिए जिम्मेदार नहीं है।',
          'पूल परिसर में कोई फोटोग्राफी की अनुमति नहीं है सिवाय इसके कि जब अध्यक्ष, स्विमिंग पूल प्रबंधन समिति से लिखित अनुमति ली गई हो।',
          'यदि कोई सदस्य त्वचा की बीमारी, छाती, ईएनटी या नेत्र संक्रमण, एक खुले घाव या किसी भी चिकित्सीय स्थिति से पीड़ित है, जो उसके लिए या उसके साथी तैराकों के लिए अस्वास्थ्यकर है, तो उसे ऐसे समय में पूल का उपयोग करने से स्वेच्छा से बचना चाहिए। चिकित्सा स्थिति को ठीक किया जाता है।',
          'महिलाओं को मासिक धर्म के दौरान स्विमिंग पूल का उपयोग नहीं करना चाहिए।',
          'आकाश में प्रकाश होने पर कुंड में न रहें।',
          'भोजन के पूरे पेट के साथ तैरना न करें।',
          'जो लोग तैरना नहीं जानते हैं उन्हें पूल के कम गहरे हिस्सों में खुद को सीमित करना चाहिए।',
          'ड्यूटी पर प्रशिक्षक या लाइफगार्ड के निर्देश पूल में अंतिम शब्द होंगे। ड्यूटी पर लाइफगार्ड के निर्देशों का पालन नहीं करने वालों की सदस्यता रद्द कर दी जाएगी।',
          'जब पर्यवेक्षक सीटी बजाता है तो पूल खाली करने के लिए कहा जाता है।',
          'शिकायतों और सुझावों के लिए, कृपया अध्यक्ष, स्विमिंग पूल प्रबंधन समिति से संपर्क करें। पूल स्टाफ के साथ कभी बहस न करें। ये सिद्धांत केवल आपकी सुरक्षा और आराम के लिए लगाए गए है।',
        ],
        safetyTitle: 'सुरक्षा',
        safety: [
          'हालांकि पूल पूरी तरह से सुरक्षित दिख सकता है, लेकिन तैराकों को सलाह दी जाती है कि वे तैरते समय अत्यधिक सावधानी बरतें। अगर उन्हें मांसपेशियों में ऐंठन होती है या बेहोशी महसूस होती है तो तैराक को तैरना नहीं चाहिए। दिल की समस्याओं वाले उपयोगकर्ताओं को तैराकी से पहले चिकित्सा राय लेनी चाहिए। इसके अलावा, तैराकों को पूल में प्रवेश करने से पहले व्यायाम करना चाहिए।',
          'यदि आप किसी को स्विमिंग पूल में संघर्ष करते या डूबते हुए पाते हैं, तो उसे बचाने के लिए कभी भी पानी में न कूदें, इसके बजाय, संकट में तैरने वाले पूल के किनारे उपलब्ध रिंग बुयस में से एक को तुरंत फेंक दें। फिर ड्यूटी पर एक जीवन रक्षक को सूचित करें।',
        ],
        eventsTitle: 'आयोजन',
        eventsListTitles: {
          sNo: 'अनु क्रमांक।',
          events: 'आयोजन',
          men: 'पुरुषों',
          women: 'महिलाओं',
        },
        eventsTable: [
          {
            eventMale: '100 मीटर फ्रीस्टाइल',
            eventFemale: '100 मीटर फ्रीस्टाइल',
          },
          {
            eventMale: '100 मीटर ब्रेस्टस्ट्रोक',
            eventFemale: '100 मीटर ब्रेस्टस्ट्रोक',
          },
          {
            eventMale: '100 मीटर बैकस्ट्रोक',
            eventFemale: '50 मीटर बैकस्ट्रोक',
          },
          {
            eventMale: '100 मीटर बटरफ्लाई',
            eventFemale: '50 मीटर बटरफ्लाई',
          },
          {
            eventMale: '4 x 100 मीटर फ्रीस्टाइल रिले',
            eventFemale: '4 x 50 मीटर फ्रीस्टाइल रिले',
          },
          {
            eventMale: '1500 मीटर फ्रीस्टाइल',
            eventFemale: '—',
          },
          {
            eventMale: '4 x 50 मीटर मल्टी रिले',
            eventFemale: '—',
          },
          {
            eventMale: 'जल पोलो',
            eventFemale: '—',
          },
        ],
        roadmapTitle: 'रोडमैप',
        roadmapTableTitles: {
          event: 'प्रतिस्पर्धा',
          jan: 'जनवरी',
          feb: 'फ़रवरी',
          mar: 'मार्च',
          apr: 'अप्रैल',
          may: 'मई',
          jun: 'जून',
          jul: 'जुलाई',
          aug: 'अगस्त',
          sep: 'सितम्बर',
          oct: 'अक्टूबर',
          nov: 'नवम्बर',
          dec: 'दिसम्बर',
        },
        roadmapEvents: [
          'डे टू डे ऑपरेशन',
          'रखरखाव',
          'अंतर वर्ष तैराकी प्रतियोगिता',
          'खुली तैराकी प्रतियोगिताएं',
          'अंतर एनआईटी तैराकी प्रतियोगिता',
        ],
      },
    },
    Store: {},
  },
  Status: {
    NoResult: {
      title: 'कोई परिणाम नहीं मिला',
      description: 'आपके दिए गए प्रश्न से कोई परिणाम मेल नहीं खाता।',
    },
    Unauthorised: {
      title: 'अनधिकृत',
      description: 'आप इस पृष्ठ को देखने के लिए अधिकृत नहीं हैं।',
    },
    WorkInProgress: {
      title: 'कार्य प्रगति पर है',
      description: 'इस पेज पर अभी काम चल रहा है। कृपया दूसरी बार आएं',
    },
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
};

export default text;
