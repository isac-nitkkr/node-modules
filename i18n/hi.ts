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
      allResults: 'सभी परिणाम',
      webPages: 'वेब पृष्ठ',
      people: 'लोग',
      documents: 'दस्तावेज़',
      events: 'आयोजन',
      news: 'समाचार',
      courses: 'पाठ्यक्रम',
      clubs: 'क्लब',
      positions: 'पद',
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
    CentreOfComputingAndNetworking: {
      title: 'कंप्यूटिंग और नेटवर्किंग का केंद्र',
      label: {
        about: 'संगठन',
        facilities: 'सुविधाएं',
        infrastructure: 'आईटी बुनियादी ढांचा उपयोग नीति',
      },
      responsibilitiesTitle:
        'कंप्यूटिंग और नेटवर्किंग केंद्र (सीसीएन) की केंद्रीय कंप्यूटिंग और नेटवर्किंग सुविधा है। संस्थान को निम्नलिखित जिम्मेदारियां सौंपी गई:',
      responsibilities: [
        'कंप्यूटिंग और नेटवर्किंग बुनियादी ढांचे का विकास',
        'संस्थान की वेबसाइट का रखरखाव और अद्यतन करना',
        'छात्रों, शिक्षकों और कर्मचारियों के लिए ई-मेल सेवाएं',
        'छात्रों की नियुक्ति के लिए ऑनलाइन परीक्षाओं के लिए आईटी बुनियादी ढांचे का विस्तार',
        'ऑनलाइन आवेदनों का विकास और संचालन',
        'मुद्रण और स्कैनिंग सुविधाएं।',
        'CCN ने CDAC के सुपर कंप्यूटर परम शव से लैस किया है। छात्र और संकाय उच्च अंत कंप्यूटिंग के लिए इस सुविधा का उपयोग कर रहे हैं।',
      ],
      clickHere: 'देखने के लिए यहां क्लिक करें:',
      clickHereInfo: 'एनआईटी कुरुक्षेत्र आईटी इन्फ्रास्ट्रक्चर उपयोग नीति',
      staffTable: {
        name: 'नाम',
        designation: 'प्रशासनिक और तकनीकी कर्मचारी',
        profIncharge: 'प्रो. प्रभारी',
      },
      workTimeTitle: 'कार्य के घंटे',
      workTime:
        'सुबह 9:00 बजे से शाम 5:30 बजे तक (सोमवार से शनिवार)। रविवार और राष्ट्रीय अवकाश के दिन CCN बंद रहता है।',
      networkingTitle: 'नेटवर्किंग सुविधाएं',
      networking: [
        'इंटरनेट एक्सेस के लिए दो लीज्ड लाइनों द्वारा समर्थित ओएफसी बैकबोन पर कैंपस चौड़ा लैन',
        'रेलटेल कॉर्पोरेशन ऑफ इंडिया लिमिटेड से 1 जीबीपीएस',
        '500 एमबीपीएस मैसर्स रिलायंस जियो इन्फोकॉम लिमिटेड',
        'नेटवर्क को (1G से 10G में अपग्रेड किया गया)',
        '7000 नोड्स का समर्थन करने वाली संरचित नेटवर्किंग',
        '3000 समवर्ती उपयोगकर्ताओं के समर्थन के साथ वाई-फाई नेटवर्किंग',
        'जैव-मीट्रिक उपस्थिति प्रणाली (बीएएस) की देखरेख सीसीएन द्वारा की जा रही है।',
        "सी-डैक, मोहाली द्वारा प्रोजेक्ट 'स्केलेबल अटैक डेटा कैप्चर एंड एनालिसिस फ्रेमवर्क फॉर सीटीआई जेनरेशन' के तहत स्थापित हनीपोट सेंसर (रास्पबेरी पाई)",
      ],
      infrastructureData:
        'कंप्यूटिंग और नेटवर्किंग केंद्र (CCN) संस्थान के शैक्षिक मिशन का समर्थन और संवर्धन करने के लिए सुविधाएं प्रदान करता है; छात्रों, संकाय और कर्मचारियों के शैक्षिक अनुभव को समृद्ध बनाने के लिए और उनके अनुसंधान और शैक्षणिक गतिविधियों का समर्थन करने के लिए; और संस्थान को स्वचालन समर्थन प्रदान करने के लिए। यह सुविधा दिन-प्रतिदिन की शैक्षणिक और आधिकारिक गतिविधियों के लिए आवश्यक है।\n\nसंस्थान में प्रवेश पर हर व्यक्ति के लिए एक उपयोगकर्ता खाता बनाया जाता है। खाता आपको वेब ब्राउज़ करने, ईमेल भेजने और प्राप्त करने, कम्प्यूटेशनल और इंटरैक्टिव सुविधाओं का उपयोग करने की अनुमति देता है। इसलिए, यह अपेक्षा की जाती है कि उपयोगकर्ता को सेवाओं का जिम्मेदारी से उपयोग करना चाहिए। उपयोगकर्ता का आचरण और उपयोग संयमित होना चाहिए और सभी के अधिकारों का सम्मान करने वाली भावना के साथ होना चाहिए। सुविधा का कोई भी दुरुपयोग संस्थान की प्रतिष्ठा और स्थिति पर गंभीर प्रभाव डाल सकता है और संस्थान की सुविधा को बदनाम कर सकता है। ऐसी सुविधा का दुरुपयोग सहन नहीं किया जाएगा।\n\nएनआईटी कुरुक्षेत्र (एनआईटीके) की कंप्यूटिंग, नेटवर्किंग और अन्य आईटी सुविधाओं तक पहुँच प्राप्त करने के लिए, सभी उपयोगकर्ताओं (संकाय, कर्मचारी और छात्र) से निम्नलिखित दिशानिर्देशों का पालन करने की अपेक्षा की जाती है, जिनका उद्देश्य प्रणाली की उपयोगिता और लचीलेपन को संरक्षित करना, शैक्षणिक और आधिकारिक कार्य की गोपनीयता की रक्षा करना है। आईटी सुविधाओं के निरंतर उपयोग के लिए दिशानिर्देशों का पालन आवश्यक है। उपयोगकर्ताओं को सुविधाओं के उपयोग के लिए दिशानिर्देशों के अनुसार चिपके रहना चाहिए। आईटी सुविधाओं का कोई भी दुरुपयोग भारत सरकार के आईटी अधिनियम के तहत कार्रवाई का कारण बन सकता है।',
      infrastructureList: [
        'अधिकृत खातों वाले संकाय, कर्मचारी और छात्र शैक्षणिक उद्देश्यों और आधिकारिक उद्देश्यों के लिए कंप्यूटिंग और आईटी सुविधाओं का उपयोग कर सकते हैं। \n\t• जो किसी भी कानून, संस्थान की नीति, या भारत सरकार के आईटी अधिनियम का उल्लंघन नहीं करता। \n\t• संस्थान के कार्यों के प्रदर्शन या शैक्षणिक गतिविधियों के कार्य में हस्तक्षेप नहीं करता। \n\t• व्यावसायिक लाभ या निजी लाभ का परिणाम नहीं होता।',
        'उपयोगकर्ताओं से अपेक्षा की जाती है कि वे अन्य उपयोगकर्ताओं की गोपनीयता का सम्मान करें और किसी अन्य व्यक्ति को अपना पासवर्ड उपयोग करने की अनुमति न दें या अपना खाता साझा न करें। उपयोगकर्ताओं की ज़िम्मेदारी है कि वे अपने खाते को अनधिकृत उपयोग से बचाने के लिए समय-समय पर पासवर्ड बदलें और ऐसे पासवर्ड का उपयोग करें जिन्हें आसानी से अनुमान नहीं लगाया जा सकता। किसी भी उद्देश्य के लिए पासवर्ड साझा करना सख्त वर्जित है।',
        'उपयोगकर्ताओं को अन्य गैर-विश्वसनीय साइटों पर पासवर्ड दर्ज करते समय सावधानी बरतनी चाहिए और उन्हें किसी भी कथित ईमेल द्वारा गुमराह नहीं किया जाना चाहिए जो कि एडमिन या अन्य आईडी से हो। ऐसे ईमेल का उत्तर देने से पहले प्रेषक की पहचान सत्यापित करें।',
        'सिस्टम सुरक्षा को दरकिनार करने का कोई भी प्रयास, दूसरों के पासवर्ड का अनुमान लगाने का प्रयास, या किसी भी तरह से स्थानीय या नेटवर्क संसाधनों तक अनधिकृत पहुंच प्राप्त करना मना है। उपयोगकर्ता किसी अन्य व्यक्ति के कंप्यूटिंग खाते का उपयोग नहीं कर सकते, खाता पहचान को धोखा देने का प्रयास नहीं कर सकते, या झूठा खाता या ईमेल पता नहीं उपयोग कर सकते।',
        'स्वामी की स्पष्ट सहमति के बिना एनआईटीके सिस्टम से या उसके लिए कॉपीराइट सामग्री का स्थानांतरण अंतरराष्ट्रीय कानून का उल्लंघन है। इसके अलावा, शैक्षिक साइट से व्यावसायिक लाभ या लाभ के लिए इंटरनेट का उपयोग करने की अनुमति नहीं है। यदि ऐसा किया जाता है, तो यह उपयोगकर्ता की एकमात्र जिम्मेदारी होगी। टॉरेंट्स या अन्य साधनों के माध्यम से कॉपीराइट फिल्मों/किताबों/खेलों को डाउनलोड करना पता लगाने योग्य है, और उपयोगकर्ताओं को चेतावनी दी जाती है कि किसी भी शिकायत की प्राप्ति पर अनुशासनात्मक कार्रवाई शुरू की जा सकती है।',
        'सॉफ़्टवेयर पायरेसी और कॉपीराइट उल्लंघन की कोई भी घटनाएं, ईमेल खाता धारक को जिम्मेदार ठहराया जाएगा, और उपयोगकर्ता के खिलाफ कॉपीराइट के तहत कार्रवाई की जा सकती है।',
        'नए सॉफ़्टवेयर डाउनलोड और इंस्टॉल करना संबंधित विभाग प्रमुख की स्पष्ट सहमति के साथ ही किया जाना चाहिए। एनआईटीके सुविधाओं पर, या एनआईटीके नेटवर्क से जुड़े व्यक्तिगत मशीनों पर, अवैध सॉफ़्टवेयर की स्थापना सख्त वर्जित है।',
        'जहां तक संभव हो, उपयोगकर्ताओं से अपेक्षा की जाती है कि वे संस्थान के अन्य सदस्यों के साथ आधिकारिक संवाद के लिए केवल एनआईटीके द्वारा प्रदान किए गए अपने आधिकारिक ईमेल पते का उपयोग करें। सीसीएन को की जाने वाली कोई भी शिकायत/अनुरोध आपके अधिकृत ईमेल आईडी का उपयोग करके किया जाना चाहिए; अन्यथा, सीसीएन आपकी पहचान सत्यापित नहीं कर सकेगा। यदि किसी कारण से आप अपना सीसीएन ईमेल एक्सेस नहीं कर सकते, तो आप हमें अपने पंजीकृत वैकल्पिक ईमेल आईडी से लिख सकते हैं।',
        'इलेक्ट्रॉनिक मेल और अन्य नेटवर्क संचार सुविधाओं का उपयोग अन्य नेटवर्क उपयोगकर्ताओं को परेशान करने, नाराज करने, या तंग करने के लिए करना मना है, जिसमें उनके कंप्यूटिंग सिस्टम, सॉफ़्टवेयर या डेटा में बाधा डालना भी शामिल है। किसी अन्य व्यक्ति के रूप में ईमेल या संदेश भेजना, या प्रेषक की पहचान छिपाना भी मना है। चेन लेटर की अनुमति नहीं है। न ही किसी भी प्रकार की व्यावसायिक विज्ञापन या अनुरोध की अनुमति है। स्पैमिंग सख्त वर्जित है। संस्थान के बाहर मेलिंग सूची में शामिल होना एक व्यक्ति की जिम्मेदारी है।',
        'मनोरंजन के लिए डाउनलोड और पीयर-टू-पीयर कनेक्शन प्रतिबंधित हैं।',
        'एनआईटीके नेटवर्क पर असुरक्षित वाई-फाई सिस्टम स्थापित करना मना है।',
        'उपयोगकर्ताओं से अपेक्षा की जाती है कि वे उपकरणों की उचित देखभाल करें और सीसीएन पर ड्यूटी पर तैनात कर्मचारियों को किसी भी खराबी की रिपोर्ट करें। उपयोगकर्ताओं को सिस्टम को स्थानांतरित करने, मरम्मत करने, पुन: कॉन्फ़िगर करने, संशोधित करने या बाहरी उपकरणों को संलग्न करने का प्रयास नहीं करना चाहिए।',
        'सीसीएन प्रयोगशालाओं में भोजन या पेय की अनुमति नहीं है। धूम्रपान सख्त वर्जित है। इसके अलावा, गेम/संगीत के माध्यम से या यहां तक कि जोर से बात करने और/या गाने के माध्यम से शोर करना मना है।',
        'आपत्तिजनक सामग्री का प्रदर्शन (या तो कंप्यूटर स्क्रीन पर या पोस्टर आदि के माध्यम से) सख्त वर्जित है, और अपराधियों के खिलाफ गंभीर कार्रवाई की जाएगी।',
        'दिशानिर्देशों/नीति का उल्लंघन अकादमिक कदाचार, दुराचार, या अनुशासनहीनता के रूप में माना जाएगा, जैसा उपयुक्त हो। उल्लंघन की प्रकृति के आधार पर, सीसीएन चेतावनी जारी करके, खाता निष्क्रिय करके, और नियमित उल्लंघनों के लिए, संस्थान द्वारा निर्धारित उचित जुर्माना/दंड लगाने की कार्रवाई कर सकता है।',
        'नीति में तब और जब भी इसे उपयुक्त माना जाएगा, परिवर्तन हो सकते हैं, और नई नीतियां या नीति में परिवर्तन किसी भी माध्यम, ईमेल, मुद्रित नोटिस या संस्थान की वेबसाइट द्वारा संक्षिप्त घोषणा के तुरंत बाद प्रभावी होंगे।',
      ],
      resourcesTitle: 'कंप्यूटिंग सुविधाएं हार्डवेयर संसाधन',
      resourcesTableTitle: {
        sno: 'क्रम संख्या',
        item: 'वस्तु',
        quantity: 'मात्रा',
      },
      resources: [
        'सर्वर',
        'डेस्कटॉप पीसी (i7)',
        'वीडियो कॉन्फ़्रेंसिंग डिवाइस',
        '	परिसर में चार प्रमुख स्थानों पर आउटडोर एलईडी पैनल लगाए गए।',
        'नेक्स्ट जेनरेशन फायरवॉल फोर्टिनेट (FortiGate 2000E)',
      ],
      softwareTitle: 'सॉफ़्टवेयर पैकेज',
      software: [
        'समापन बिंदु सुरक्षा',
        'वर्ड-प्रोसेसिंग: एमएस ऑफिस प्रोफेशनल 2016',
        'ईआईजीएपी प्लस (50 उपयोगकर्ता-5 वर्ष) ईएनवीआई सिंगल यूज सॉफ्टवेयर (ईएसआरआई इंडिया टेक्नोलॉजीज लिमिटेड) सहित',
        'FE एनालिसिस इंजीनियरिंग/मल्टी-फिजिक्स सॉफ्टवेयर सॉल्यूशन।',
        'MATLAB 2021 कैंपस वाइड',
      ],
    },
    ElectricalMaintenance: {},
    Estate: {},
    GeneralAdministration: {},
    HealthCentre: {},
    Security: {},
    Sports: {},
    Store: {},
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
