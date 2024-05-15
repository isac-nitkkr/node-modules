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
    Details: {
      courseCode: 'कोर्स कोड: ',
      title: 'कोर्स विवरण',
      coordinator: 'समन्वयक',
      prerequisites: 'आवश्यक शर्तें',
      nature: 'कोर्स प्रकृति: ',
      objectives: 'उद्देश्य',
      content: 'सामग्री',
      outcomes: 'परिणाम',
      essentialReading: 'आवश्यक पाठ्य',
      supplementaryReading: 'परिशिष्ट पाठ्य',
      similarCourses: 'समान कोर्स',
      headOfDepartment: 'विभाग के प्रमुख',
      referenceBooks: 'संदर्भ पुस्तकें',
    },
  },
  Dean: {
    deanTitles: {
      academic: 'शैक्षिक डीन',
      'estate-and-construction': 'भूमि और निर्माण डीन',
      'faculty-welfare': 'संकाय कल्याण डीन',
      'industry-and-international-relations':
        'उद्योग और अंतरराष्ट्रीय संबंध डीन',
      'planning-and-development': 'नियोजन और विकास डीन',
      'research-and-consultancy': 'अनुसंधान और परामर्श डीन',
      'student-welfare': 'छात्र कल्याण डीन',
    },
    responsibilities: 'जिम्मेदारियाँ',
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
  Events: {
    title: 'कार्यक्रम और समाचार',
    categories: {
      featured: 'विशेष',
      recents: 'हाल ही में',
      student: 'छात्र',
      faculty: 'शिक्षक',
    },
    viewAll: 'सभी देखें',
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
  Institute: {
    welcome: 'एनआईटी कुरुक्षेत्र में आपका स्वागत है',
    profile: {
      title: 'संस्थान प्रोफाइल',
      vision: {
        title: 'संस्थान का दृष्टिकोण',
        content: [
          'वैश्विक चुनौतियों के प्रति उत्तरदायी तकनीकी शिक्षा और अनुसंधान में एक आदर्श बनना।',
        ],
      },
      mission: {
        title: 'संस्थान का मिशन',
        content: [
          'गुणवत्तापूर्ण तकनीकी शिक्षा प्रदान करना जो नवोन्मेषी पेशेवरों और उद्यमियों का विकास करे।',
          'ऐसा अनुसंधान करना जो सामाजिक-आर्थिक आवश्यकताओं पर ध्यान केंद्रित करते हुए अत्याधुनिक तकनीकों और भविष्यवादी ज्ञान का सृजन करे।',
        ],
      },
      history: {
        title: 'ऐतिहासिक छाप',
        content: [
          'केंद्रीय सरकार ने योजना आयोग के परामर्श से तीसरी पंचवर्षीय योजना के तहत क्षेत्रीय इंजीनियरिंग कॉलेजों की स्थापना की योजना को मंजूरी दी थी ताकि योजना अवधि के दौरान देश में तकनीकी शिक्षा के लिए सुविधाओं का विस्तार किया जा सके। "क्षेत्रीय इंजीनियरिंग कॉलेज, कुरुक्षेत्र" देश के सत्रह कॉलेजों में से एक था। सरकार के पत्र संख्या 16-4/60-T.5, दिनांक 26 फरवरी, 1962 के माध्यम से, यह संस्थान 1963 में भारत सरकार और हरियाणा राज्य सरकार का एक संयुक्त और सहकारी उपक्रम के रूप में स्थापित किया गया था ताकि हरियाणा राज्य और देश के बाकी हिस्सों के युवाओं को तकनीकी प्रशिक्षण प्रदान किया जा सके और राष्ट्रीय एकीकरण को बढ़ावा दिया जा सके। इसका उद्देश्य विभिन्न इंजीनियरिंग और प्रौद्योगिकी विषयों में शिक्षा और अनुसंधान सुविधाओं को प्रदान करना और प्रत्येक ऐसे विषय में सीखने और ज्ञान के प्रसार को बढ़ावा देना था।',

          'आईआरई कुरुक्षेत्र की पहली प्रवेश 1963 में पंजाब इंजीनियरिंग कॉलेज, चंडीगढ़ और थापर इंस्टीट्यूट ऑफ़ इंजीनियरिंग एंड टेक्नोलॉजी, पटियाला में किया गया था।',
          'आईआरई कुरुक्षेत्र को 25 अप्रैल, 1964 को सोसाइटीज रजिस्ट्रेशन एक्ट 1860 के तहत रजिस्टर किया गया था।',
          'नित कुरुक्षेत्र को 26 जून, 2002 को डीम्ड विश्वविद्यालय के रूप में उन्नत किया गया था।',
          'इस संस्थान ने अपनी पहचान को डीम्ड विश्वविद्यालय के रूप में प्राप्त किया था।',
          'इस संस्थान ने 1985-86 से 4 वर्षीय बीटेक डिग्री पाठ्यक्रमों पर स्विच किया।',
          'संस्थान ने 2006-07 में एक 2 वर्षीय एमबीए पाठ्यक्रम और दो चार वर्षीय बीटेक डिग्री पाठ्यक्रमों को शुरू किया।',
          'संस्थान ने उत्तरीय और अध्ययन के स्तर पर विभिन्न तकनीकी और प्रौद्योगिकी विषयों में निर्देश प्रदान किया है।',
        ],
        readMore: 'और पढ़ें',
      },
    },
    admission: {
      title: 'शैक्षिक प्रक्रिया और शिक्षा प्रणाली',
      process: {
        title: 'प्रवेश प्रक्रिया',
        content: [
          'स्नातक पाठ्यक्रमों में – बी.टेक. डिग्री पाठ्यक्रम, प्रवेश अखिल भारतीय इंजीनियरिंग प्रवेश परीक्षा (AIEEE) के आधार पर किया जाता है, जिसे भारत सरकार की ओर से केंद्रीय माध्यमिक शिक्षा बोर्ड (CBSE) द्वारा आयोजित किया जाता है।',
          'हालांकि, एम.टेक. डिग्री पाठ्यक्रमों में प्रवेश उम्मीदवार के GATE परीक्षा में प्राप्त अंकों के आधार पर किया जाता है। पहले सीटें GATE-योग्य उम्मीदवारों को भरने के बाद उद्योग-प्रायोजित उम्मीदवारों को दी जाती हैं। शेष खाली सीटें उन गैर-GATE उम्मीदवारों को दी जाती हैं जिनके योग्यता परीक्षा में कम से कम 60 प्रतिशत अंक (SC उम्मीदवारों के लिए 55 प्रतिशत) हैं। GATE उम्मीदवारों को 5000/- रुपये प्रति माह की छात्रवृत्ति के लिए पात्र होते हैं। गैर-GATE उम्मीदवारों को कोई छात्रवृत्ति नहीं दी जाती है।',
        ],
      },
      education: {
        title: 'शिक्षा प्रणाली',
        content: [
          'संस्थान की शिक्षा प्रणाली को शैक्षणिक सत्रों में विभाजित किया गया है जिसमें दो सेमेस्टर होते हैं – सम और विषम सेमेस्टर। संस्थान बी.टेक और एम.टेक. डिग्री प्रदान करने वाले पाठ्यक्रम और डॉक्टर ऑफ फिलॉसफी की डिग्री प्रदान करने वाले अनुसंधान सुविधाएं प्रदान करता है। निर्देश और परीक्षा की भाषा अंग्रेजी है। संस्थान को 26.6.2002 से एक डीम्ड यूनिवर्सिटी का दर्जा प्राप्त है। संस्थान अब शैक्षणिक कार्यों जैसे परीक्षाओं, उत्तर पुस्तिकाओं के मूल्यांकन, परिणामों की घोषणा और अन्य संबद्ध मामलों से संबंधित हर पहलू में स्वतंत्र है। संस्थान ने पारंपरिक परीक्षा और मूल्यांकन प्रणाली से क्रेडिट आधारित परीक्षा प्रणाली में परिवर्तन कर लिया है।',
          'पाठ्यक्रमों में संस्थान में अध्ययन, कार्य स्थलों का दौरा और संस्थान कार्यशालाओं और अनुमोदित इंजीनियरिंग कार्यों में व्यावहारिक प्रशिक्षण शामिल हैं। प्रत्येक सेमेस्टर के अंत में एक सेमेस्टर परीक्षा होती है।',
        ],
      },
    },
    nirf: {
      title: 'एनआईआरएफ रैंकिंग',
      year: 'वर्ष',
      result: 'परिणाम',
      dataFile: 'डेटा फ़ाइल',
      nirfCertificate: 'एनआईआरएफ प्रमाणपत्र',
    },

    funds: {
      title: 'आय के स्रोत',
      content:
        'आरईसी अब एनआईटी, कुरुक्षेत्र के स्थापना के अनुसार, सभी अनवांछित व्यय अंडरग्रेजुएट पाठ्यक्रम पर केंद्रीय और राज्य सरकारों द्वारा 50:50 अनुपात पर उत्तरजीवी था।',
    },
    collaboration: {
      title: 'संस्थान-उद्योग सहयोग',
      content: [
        'ईसीई विभाग का एचपी इंडिया सॉफ्टवेयर ऑपरेशन प्रा. लिमिटेड, 29 कनिंघम रोड, बैंगलोर-52 के साथ एक एमओयू है। इस एमओयू के तहत, B.Tech के अंतिम वर्ष के छात्रों को एचपी के लाइव प्रोजेक्ट सौंपे जाते हैं और इन्हें एचपी और NIT कुरुक्षेत्र के फैकल्टी द्वारा संयुक्त रूप से निगरानी की जाती है।',
        'संस्थान विभिन्न सरकारी और अन्य औद्योगिक संगठनों द्वारा संदर्भित डिज़ाइन और विकास समस्याओं पर परामर्श सेवाएं प्रदान करता है।',
        'TEQIP के प्रयासों के तहत संस्थान-उद्योग संपर्क को बढ़ाने का प्रयास किया जा रहा है। संस्थान ने 19-20 फरवरी, 2007 को होटल शिवालिकव्यू, चंडीगढ़ में उद्योग संस्थान संपर्क (NWIII-2007) पर दो दिवसीय कार्यशाला का आयोजन किया, जिसमें प्रमुख उद्योग और अकादमी के प्रतिनिधियों ने बड़े पैमाने पर भाग लिया। कार्यशाला के विचार-विमर्श के दौरान, NIT कुरुक्षेत्र और अल्टेयर इंजीनियरिंग इंडिया के बीच कंप्यूटर एडेड इंजीनियरिंग (CAE) के क्षेत्र में एक उत्कृष्टता केंद्र की स्थापना के लिए एक समझौता ज्ञापन पर सहमति व्यक्त की गई।',
      ],
    },
    quickLinks: {
      title: 'Quick Links',
      campus: 'कैंपस और बुनियाद',
      documentary: 'संस्थान डॉक्यूमेंटरी',
      organisationChart: 'संगठन चार्ट',
      sections: 'खंड',
      gallery: 'फोटो गैलरी',
      administration: 'प्रशासन',
    },
  },
  Hostels: {
    title: 'छात्रावास',
    notificationsTitle: 'छात्रावास सूचनाएँ',
    boysHostels: 'लड़कों के छात्रावास',
    girlsHostels: 'लड़कियों के छात्रावास',
    misc: 'विविध',
    rulesTitle: 'छात्रावास नियम एवं आचरण',
    hostelDetails: {
      name: 'छात्रावास का नाम: ',
      overview: 'छात्रावास का अवलोकन',
      staffOverview: 'छात्रावास स्टाफ का अवलोकन',
      facilities: 'छात्रावास सुविधाओं का अवलोकन',
      contact: 'हमसे संपर्क करें: ',
      email: 'ईमेल: ',
      wardens: 'वार्डन: ',
      faculty: 'फैकल्टी',
      staff: 'स्टाफ',
      general: 'सामान्य',
      hostelsStaffTable: {
        name: 'नाम',
        designation: 'पदनाम',
        contact: 'संपर्क',
        hostelPost: 'छात्रावास पद',
        email: 'ईमेल',
      },
    },
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
    Library: {
      name: 'केंद्रीय पुस्तकालय',
      heading: {
        about: 'के बारे में',
        totalAreaLibraryHours: 'कुल क्षेत्र और पुस्तकालय का समय',
        facilities: 'सुविधाएँ',
        quickLinks: 'त्वरित लिंक्स',
        contactUs: 'संपर्क करें',
        gallery: 'गैलरी',
        libraryHours: 'पुस्तकालय का समय',
        totalFloorArea: 'कुल फ़्लोर क्षेत्र और पढ़ाई का स्थान',
        totalFloorAreaText:
          'पुस्तकालय एक बढ़ते हुए जीव है। सभी आवश्यकताओं को पूरा करने के लिए, पर्याप्त जगह स्टैकिंग, पढ़ाई और अन्य सेवाओं के लिए जोड़ी गई है। पुस्तकालय में 500 पाठकों की पढ़ाई करने की क्षमता है और नए दस्तावेज़ों, एक डिजिटल पुस्तकालय और ऑडियो-वीजुअल केंद्र को स्टैक करने के लिए पर्याप्त जगह है। वर्तमान में पुस्तकालय का कुल क्षेत्र 36711 वर्ग फ़ुट है।',
        libraryHoursText: `पढ़ाई की सुविधाएँ: 24x07x365
स्टैक और परिपत्र: 
सभी काम के दिन: सुबह 08:30 से शाम 05:30 बजे तक 
शनिवार और अवकाश: सुबह 09:00 से शाम 05:00 बजे तक`,
        aboutText:
          'पुस्तकालय, प्रारंभ में 1965 में स्थापित किया गया, आकार, संग्रह और सेवाओं में बढ़ गया है। वर्तमान में, NIT कुरुक्षेत्र में एक बहुत बड़ा पुस्तकालय है जिसमें टेक्स्ट और संदर्भ पुस्तकें, सीडी-आरओएम, और एक बड़ी संख्या में प्रिंट और ऑनलाइन पत्रिकाएँ और ई-पुस्तकें शामिल हैं। अपने वृद्धि श्रोत, जगह, और सेवाओं के साथ, पुस्तकालय शिक्षकों, अनुसंधानकर्ताओं, विद्यार्थियों की आवश्यकताओं को पूरा करता है।',
      },
      facilities: {
        bookBankFacilities: 'पुस्तक बैंक सुविधाएँ',
        libraryAutomation: 'पुस्तकालय स्वचालन प्रणाली, वेब-ओपेक, और परिपत्र',
        audioVideoCenter: 'ऑडियो-वीडियो केंद्र',
        jGatePlus: 'जेगेट प्लस',
        nptel: 'एनपीटीईईएल वेब और वीडियो पाठ्यक्रम',
        remoteAccess: 'दूरस्थ पहुंच सेवा: केएनआईएमबीयूएस',
        antiPlagiarism: 'खोजफलस्ती प्रतिलिपि नकल रोकथाम सॉफ़्टवेयर (टर्निटिन)',
        bookBankFacilitiesText:
          'पुस्तक बैंक पुस्तक बैंक की सबसे धनी है। सभी बी. टेक, एम.टेक, एमबीए और एमसीए छात्रों को पूरे सेमेस्टर के लिए 6-8 पुस्तकें बुक बैंक से दी जाती हैं।',
        libraryAutomationText:
          'पुस्तकालय कोहा सॉफ़्टवेयर का उपयोग करके पुस्तकालय के सभी खंडों में स्वचालित सेवाएँ प्रदान कर रहा है। सभी पुस्तकें बार-कोड किए गए हैं, और सदस्यों को बार-कोड सदस्यता कार्ड भी दिया जाता है ताकि पुस्तकालय में दस्तावेजों की चक्कियां स्मूद रूप से हो सकें। पुस्तकालय का डेटाबेस नियमित रूप से अपडेट किया जाता है, और पाठक वेब-ओपेक (ऑनलाइन सार्वजनिक पहुंच सूची) का उपयोग करके दस्तावेज़ों की खोज कर सकते हैं।',
        audioVideoCenterText:
          'पुस्तकालय में संपूर्ण एयर-संचालित ऑडियो-वीडियो केंद्र है जो सेमिनार, सम्मेलन, मेहमान व्याख्यान, उपयोगकर्ता जागरूकता कार्यक्रम आदि के लिए सीटिंग क्षमता 100 प्रतिभागियों के साथ है। यह वीडियो कॉन्फ्रेंसिंग सुविधा से भी संपन्न है।',
        jGatePlusText:
          'जेगेट कस्टम सामग्री के लिए संघ (जेसीसी) एक वर्चुअल पुस्तकालय है जो एक अनुकूलित ई-पत्रिका पहुंच गेटवे और डेटाबेस समाधान के रूप में बनाया गया है। यह एक बिंदु पहुंच प्रदान करता है 7900+ पत्रिकाओं को जिन्हें वर्तमान में यूजीसी इंफोनेट डिजिटल पुस्तकालय संघ द्वारा सदस्यता लिया गया है साथ ही उन विश्वविद्यालयों को भी सूचीबद्ध किया है जो अंतर पुस्तकालय ऋण (आईएलएल) केंद्र के रूप में निर्दिष्ट हैं साथ ही ओपन एक्सेस पत्रिकाओं की सूची।',
        nptelText:
          'पुस्तकालय ने आईआईटी, चेन्नई द्वारा डिज़ाइन और विकसित किए गए विभिन्न इंजीनियरिंग और विज्ञान विषयों में एनपीटीईईएल वेब और वीडियो पाठ्यक्रम प्राप्त किए हैं जिनका उपयोग शिक्षकों, अनुसंधान छात्रों और छात्रों के लिए किया जा सकता है। प्रयोक्ता इन वीडियो कोर्सेज का उपयोग पुस्तकालय संग्रह सर्वर के माध्यम से कर सकते हैं:',
        remoteAccessText:
          'पुस्तकालय को सदस्यता प्राप्त ई-संसाधनों की बाहरी पहुंच प्रदान करने के लिए, पुस्तकालय ने KNIMBUS सेवा की सदस्यता ली है। उपयोक्ता अपना खाता बना सकते हैं या तो nitkkr.knimbus.com पर जाकर या हमें librarian@nitkkr.ac.in पर लिखकर। खाता बनाने के बाद, उपयोक्ता लॉग इन कर सकते हैं और कहीं से भी सभी ई-संसाधनों का उपयोग कर सकते हैं।',
        antiPlagiarismText:
          'पुस्तकालय ने सभी शिक्षकों, अनुसंधान छात्रों और छात्रों के लिए खोजफलस्ती सॉफ़्टवेयर टर्निटिन की सदस्यता ली है। उपयोक्ता इस सुविधा का उपयोग करके अपने अनुसंधान पत्र, लेख, थीसिस, डिसर्टेशन आदि की अनुप्रयोग की जांच कर सकते हैं।',
      },
      quickLinks: {
        collectionResources: 'संग्रह और संसाधन',
        libraryCommittee: 'पुस्तकालय समिति',
        membershipPrivileges: 'सदस्यता विशेषाधिकार',
      },
      contactUs: {
        name: 'नाम',
        designation: 'पद और योग्यता',
        phoneNumber: 'फ़ोन नंबर',
        email: 'ईमेल',
      },
      libraryCommittee: {
        libraryCommitteeTitle: 'पुस्तकालय समिति',
        srNo: 'क्रमांक',
        name: 'नाम',
        generalDesignation: 'सामान्य पद',
        libraryCommitteeDesignation: 'पुस्तकालय समिति का पद',
      },
      CollectionAndResources: {
        title: 'संग्रह और संसाधन',
        totalDocuments: 'कुल दस्तावेज़',
        noOfDocuments: '1,72,237',
        totalBooks: 'पुस्तकालय की पुस्तकें',
        noOfBooks: '54,325',
        bookBank: 'पुस्तक बैंक',
        backSets: 'पिछले सेट्स',
        standards: 'मानक',
        cdsDvds: 'सीडी / डीवीडी',
        eBooks: 'ई-बुक्स',
        thesis: 'थीसिस',
        noOfBookBank: '81,259',
        noOfBackSets: '7,097',
        noOfStandards: '10,097',
        noOfCdsDvds: '832',
        noOfEBooks: '12,272',
        noOfThesis: '6,355',
        eresources: {
          title: 'ई-संसाधन',
          currentJournalsHeading: 'वर्तमान पत्रिकाएँ',
          currentJournalsDescription:
            'पुस्तकालय विज्ञान और प्रौद्योगिकी के क्षेत्र में 45 प्रिंट और लगभग 4200+ ऑनलाइन पत्रिकाओं की सदस्यता लेता है। पुस्तकालय में कई नि: शुल्क प्रतियां भी मिलती हैं। इन पत्रिकाओं की सूची पुस्तकालय के अवधारणा खंड में प्रदर्शित की जाती है और पुस्तकालय की अंतरजाल साइट के माध्यम से भी देखी जा सकती है: http://172.16.0.52',
          eShodhSindhuHeading: 'ई-शोध सिंधु (ईएसएस)',
          eShodhSindhuDescription:
            'एनआईटीकेके पुस्तकालय मानव संसाधन विकास मंत्रालय द्वारा स्थापित ई-शोध सिंधु संघ का मूल सदस्य है। प्रस्तुति में संघ द्वारा लगभग 4200+ ई-संसाधन सदस्यता में लेने/ प्रदान किए जा रहे हैं। संस्थान के परिसर में ऑनलाइन संसाधनों तक पहुंच करने के लिए, पुस्तकालय एक आंतरिक रूप से बनाए रखे गए वेब सर्वर के माध्यम से सेवाएं प्रदान कर रहा है। सभी इन संसाधनों/ई-पत्रिकाओं का उपयोग पुस्तकालय अंतरजाल साइट के माध्यम से किया जा सकता है: http://172.16.0.52',
        },
        eResourcesTable: {
          heading: {
            srno: 'क्रमांक',
            electronicResources: 'इलेक्ट्रॉनिक संसाधन',
            url: 'यूआरएल',
          },
        },
      },
      MembershipPrivileges: {
        title: 'सदस्यता और विशेषाधिकार',
        membershipPrivilegesText:
          'इंस्टीट्यूट के छात्र, संकाय अध्यापक, शोधार्थी और कर्मचारी पुस्तकालय के सदस्य के रूप में स्वीकृत होते हैं। पुस्तकालय सदस्यता प्रपत्र पुस्तकालय के परिसर में परिसर में उपलब्ध और जमा किए जा सकते हैं। प्रत्येक श्रेणी के सदस्यों द्वारा उधारण की जाने वाली पुस्तकों की संख्या और ऋण की अवधि निम्नलिखित है:',
        privileges: {
          title: 'विशेषाधिकार',
          conditionOnLoan: 'ऋण पर शर्तें',
          conditionOnLoanOne:
            'पुस्तकालय उन सदस्यों को जो ऋण की दिनांक से पहले ही पुस्तक को वापस लौटा देने का अधिकार रखता है।',
          conditionOnLoanTwo:
            'संदर्भ पुस्तकें, थीसिस और अन्य विशेष पठन सामग्री को सदस्यों को सामान्यत: उधारने की अनुमति नहीं होगी।',
          conditionOnLoanThree:
            'समाचार-पत्रिकाओं के बाउंड / अनबाउंड महीनों को केवल शिक्षकों को ही उधारा जाएगा। हालांकि, नवीनतम मुद्रण को उधार नहीं दिया जाएगा।',
          conditionOnLoanFour:
            'सदस्यों को पुस्तकालय की पुस्तकों को या तो समय से पहले या समय पर वापस करना चाहिए, विफलता के मामले में पहले 15 दिनों के लिए प्रति दिन प्रति पुस्तक रु. 1.00 वसूला जाएगा, और इसके बाद, प्रति दिन प्रति पुस्तक 2.00 रुपये लिया जाएगा।',
          lossOfBooks: 'पुस्तकों का हानि',
          lossOfBooksDescription:
            'सदस्यों को उनके द्वारा खोई गई पुस्तकों को पुनः स्थानांतरित करना होगा या उन्हें पुस्तक की कीमत का दोगुना देना होगा। यदि खोई गई पुस्तक सेट का हिस्सा है और स्वतंत्र रूप से उपलब्ध नहीं है, तो सदस्यों को पूरे सेट को बदलना होगा या सेट की कीमत का दोगुना देना होगा।',
          careOfBooks: 'पुस्तकों की देखभाल',
          careofBooksDescriptionOne:
            'पुस्तकालय की पुस्तकें केवल वर्तमान ही नहीं, बल्कि पुस्तकालय के भविष्य के सदस्यों के लाभ के लिए हैं। इसलिए, इन्हें पूरी देखभाल और विचारशीलता के साथ संचालित किया जाना चाहिए।',
          careofBooksDescriptionTwo:
            'पुस्तकों का क्षति करना और उन्हें बिगाड़ना काफी आपत्तिजनक है और सदस्यता की प्रिविलेजेज की रद्दी और नई पुस्तक द्वारा नुकसान की प्रतिस्थापना की ओर ले जा सकता है।',
          otherFacilities: 'अन्य सुविधाएं',
          reprographicFacilities: 'रिप्रोग्राफिक सुविधाएं:',
          reprographicFacilitiesDescription:
            'रिप्रोग्राफिक सुविधाएं: पाठकों को रिप्रोग्राफिक सेवाएं प्रदान करने के लिए एक ठेकेदार नियुक्त किया गया है। पुस्तकों, पत्रिकाओं और अन्य सामग्री से प्रतिलिपि प्रस्तुत की जाती है @ 60 पैसे प्रति प्रति।',
          binding: 'बाइंडिंग:',
          bindingDescription:
            'पुस्तकालय के पास अपना बाइंडरी है, जो पुस्तकालय पुस्तकों, और कॉलेज रिपोर्ट्स को बाँधता है और विभिन्न विभागों और संस्थान के अन्य खंडों के लिए बाइंडिंग का कार्य करता है। पुस्तकालय को कटाई, सिलाई, घुटने करने, स्पायरल बाइंडिंग और लेमिनेशन मशीनों से सम्पन्न किया गया है।',
        },
      },
    },

    CentralWorkshop: {},
    CentreOfComputingAndNetworking: {},
    ElectricalMaintenance: {},
    Estate: {},
    GeneralAdministration: {},
    HealthCentre: {},
    Security: {},
    Sports: {},
    Store: {},
  },
  Sections: {
    title: 'प्रशासनिक और अवसंरचना सेवाएँ',
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
