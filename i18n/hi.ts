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
  TrainingAndPlacement: {
    title: 'प्रशिक्षण और स्थाननीयता',
    headings: {
      ourrecruiters: 'हमारे भर्तीकर्ता',
      stats: 'स्थाननीयता सांख्यिकी',
      guidelines: 'मार्गदर्शिका',
      about: 'हमारे बारे में',
      forrecruiters: 'भर्तीकर्ताओं के लिए',
      faq: 'सामान्य प्रश्न',
    },
    about: {
      content: [
        `NIT कुरुक्षेत्र देश में प्रमुख तकनीकी संस्थानों में से एक है। 1963 में क्षेत्रीय इंजीनियरिंग कॉलेज कुरुक्षेत्र के रूप में स्थापित हुआ, संस्थान को 26 जून 2002 को राष्ट्रीय प्रौद्योगिकी संस्थान कुरुक्षेत्र के नाम से पुनः नामांकित किया गया। संस्थान सात इंजीनियरिंग श्रेणियों में 4 वर्षीय बी. टेक डिग्री पाठ्यक्रम, 22 विज्ञान और प्रौद्योगिकी के क्षेत्रों में 2 वर्षीय एम. टेक डिग्री पाठ्यक्रम और एमबीए और एमसीए के डिग्री प्राप्ति के लिए स्नातकोत्तर पाठ्यक्रम प्रदान करता है। संरचना उच्च गुणवत्ता के तकनीकी कार्मिकों को उत्पन्न करने के लिए अनुकूलित है।`,
        `स्थाननीयता और प्लेसमेंट (टी एंड पी) सेल संस्थान के साथ फलदायी संबंध स्थापित करने के लिए आवश्यक संपर्क बिंदु है। सेल को प्रोफेसर इन-चार्ज के द्वारा नेतृत्व किया जाता है, और फैकल्टी इन-चार्ज, प्लेसमेंट कोआर्डिनेशन कमेटी ऑफ स्टूडेंट्स (पीसीसी) और सचिवालय का समर्थन किया गया है।`,
      ],
      tnpbrochure: `टी एंड पी ब्रोशर (2023-24)`,
      tnpteam: `टी एंड पी टीम (2023-24)`,
      facilities: {
        heading: `NIT कुरुक्षेत्र भर्ती कंपनियों को सर्वोत्तम समर्थन और सुविधाएं देता है।`,
        content: [
          'प्री-स्थाननीयता वार्ता (पीपीटी), कार्यशालाओं आदि के लिए नवीनतम मल्टीमीडिया और वाई-फाई से पूरी तरह से लैस सभागार और व्याख्यान हॉल।',

          'टेली कॉन्फ्रेंसिंग, वीडियो कॉन्फ्रेंसिंग और ऑनलाइन साक्षात्कार की सुविधा।',

          'समूह चर्चाओं और व्यक्तिगत साक्षात्कारों के लिए सेमिनार और कॉन्फ्रेंस रूम।',

          'भर्ती पैनल के लिए गेस्ट हाउस में मध्यम सुविधाओं के साथ कैंपस आवास।',

          'स्थाननीयता प्रक्रिया के हर स्तर पर छात्र समन्वयकों द्वारा पूरी सहायता।',
          'प्रक्रिया को समन्वित करने के लिए उत्साही और अनुभवी कर्मचारी।',

          'निकटतम हवाई अड्डे और कुरुक्षेत्र रेलवे स्टेशन से पिकअप सेवाएं। यह सेवाएँ दिल्ली से भी ली जा सकती हैं।',
        ],
      },
    },
    stats: {
      content: [
        `शैक्षिक सत्र 2022-23 `,
        `शैक्षिक सत्र 2021-22`,
        `शैक्षिक सत्र 2020-21 FN`,
        `शैक्षिक सत्र 2019-20 FN `,
        `शैक्षिक सत्र 2018-19 FN`,
        `शैक्षिक सत्र 2018_19`,
        `शैक्षिक सत्र 2017_18`,
        `शैक्षिक सत्र 2017-18 FN `,
        `शैक्षिक सत्र 2016_17`,
      ],
    },
    ourrecruiters: {
      about: `NIT कुरुक्षेत्र का प्रशिक्षण और स्थाननीयता सेल, संस्थान की सभी भर्ती संबंधित गतिविधियों का आयोजन करता है। सेल निरंतर उन्नत अवसरों को छात्रों के पास लाने और भ्रमण करने वाली कंपनियों और संस्थान के बीच सभी अंतराक्रियाएँ प्रबंधित करती है। NIT कुरुक्षेत्र भर्ती कंपनियों को सर्वोत्तम सुविधाएं और समर्थन सुनिश्चित करता है।`,
    },
    forrecruiters: {
      build: `संबंध बनाएं`,
      invitaion: `आमंत्रण`,
      reach: `हमसे संपर्क करें`,
    },
    guidelines: {
      protocol: `स्थाननीयता प्रोटोकॉल`,
      tnpguidelines: `टी एंड पी सेल मार्गदर्शिका`,
      internguidlines: `यूजी इंटर्नशिप मार्गदर्शिका`,
    },
    faq: {
      questions: [
        'कैंपस से छात्रों की भर्ती के तरीके क्या हैं?',
        'प्लेसमेंट कार्यक्रम कब होता है?',
        'छात्र PPTs और/या कंपनी ब्रोशर में किस प्रकार की जानकारी की अपेक्षा करते हैं?',
        'कैंपस प्रेजेंटेशन और प्लेसमेंट प्रक्रिया आयोजित करने के लिए कितनी अच्छी तरह सुसज्जित है?',
        'क्या ऑफ-कैंपस प्लेसमेंट प्रक्रिया आयोजित करना संभव है? क्या भर्ती प्रक्रिया कैंपस में आए बिना पूरी की जा सकती है?',
        'प्लेसमेंट प्रक्रिया में छात्रों को कौन से कदम उठाने की आवश्यकता है?',
        'कंपनी को स्लॉट किस आधार पर आवंटित किया जाता है?',
        'क्या किसी छात्र को एक बार चयनित होने के बाद एक से अधिक कंपनियों के लिए आवेदन करने की अनुमति है?',
        'क्या प्लेसमेंट ड्राइव में भाग लेने के लिए कोई शुल्क है?',
      ],
      answers: [
        [
          'संस्थान में भर्ती प्रक्रिया निम्नलिखित तरीकों से की जाती है:',
          '● 6th सेमेस्टर के UG छात्रों को इंटर्नशिप के लिए नियुक्त करना और फिर उनके प्रदर्शन के अनुसार PPO की पेशकश करना।',
          '● पूरे वर्ष चलने वाले कैंपस प्लेसमेंट ड्राइव में भाग लेना।',
        ],
        [
          'अधिकांश संगठनों का दौरा मई - जून से शुरू होता है, जिसमें प्री-फाइनल वर्ष के छात्रों (16 सप्ताह से 20 सप्ताह की इंटर्नशिप) और अंतिम वर्ष के छात्रों की भर्ती होती है।',
        ],
        [
          'किसी कंपनी द्वारा आयोजित प्री-प्लेसमेंट टॉक या ब्रोशर में निम्नलिखित जानकारी होनी चाहिए:',
          'i. कंपनी का प्रोफ़ाइल और प्रतिष्ठा।',
          'ii. पोस्टिंग की स्थानें।',
          'iii. विभिन्न प्रकार के प्रोफाइल में पेश की जाने वाली करियर भूमिकाएँ और जिम्मेदारियाँ।',
          'iv. मुआवजा पैकेज।',
        ],
        [
          'कैंपस में सीनेट हॉल, प्रेजेंटेशन सुविधाएं, कंप्यूटर लैब्स (LAN कनेक्टेड), साथ ही मल्टीमीडिया और प्रोजेक्शन सुविधाएं उपलब्ध हैं। आवश्यकता होने पर कॉन्फ्रेंस रूम, प्रेजेंटेशन रूम आदि भी उपलब्ध कराए जा सकते हैं।',
        ],
        [
          'हाँ। ऑफ-कैंपस ड्राइव के लिए, संबंधित प्लेसमेंट कोऑर्डिनेटर, जो आपकी रुचि दिखाने पर संगठन को आवंटित किया जाएगा, T&P सेल से अनुमति लेगा और उस ड्राइव के लिए इच्छुक छात्रों की सहमति भी लेगा। हालाँकि, हम अत्यधिक सराहना करेंगे यदि कंपनी हमारी कैंपस में भर्ती के लिए आए, क्योंकि हम आतिथ्य के लिए जाने जाते हैं और हम इसे प्रदर्शित करने के लिए उत्सुक हैं।',
        ],
        [
          'छात्रों को जो कदम उठाने की आवश्यकता है, वे हैं:',
          '● प्लेसमेंट प्रक्रिया में भाग लेने की अपनी रुचि T&P सेल को सूचित करें।',
          '● प्लेसमेंट ड्राइव के दौरान अनुशासन बनाए रखें।',
          '● PCC और T&P सेल के मार्गदर्शन के अनुसार पूरी प्लेसमेंट ड्राइव में भाग लें।',
          '● रिज्यूमे/आवेदन समय पर जमा करें।',
        ],
        [
          'स्लॉटिंग निम्नलिखित मानदंडों के अनुसार की जाती है:',
          '● कार्य प्रोफ़ाइल',
          '● मुआवजा पैकेज',
          '● करियर के अवसर',
          '● छात्र की संख्या',
          '● NIT कुरुक्षेत्र के साथ पिछला संबंध',
        ],
        [
          'नहीं। ट्रेनिंग और प्लेसमेंट सेल ने “एक छात्र, एक नौकरी” नीति लागू की है, जिसमें एक बार किसी छात्र का चयन हो जाने पर वह आगे की प्लेसमेंट सत्रों के लिए पात्र नहीं होगा। हालाँकि, यदि किसी विशिष्ट शाखा के 80% पात्र छात्रों का चयन हो जाता है, तो सभी छात्रों को आगे की कंपनियों के लिए पात्र होने की अनुमति दी जाएगी, जिसे हम “दूसरे दौर” के रूप में संदर्भित करते हैं। PSUs के लिए, दूसरे दौर के प्लेसमेंट सत्र के लिए पात्र छात्रों का प्रतिशत 60% हो जाता है।',
        ],
        ['नहीं। पंजीकरण या प्लेसमेंट प्रक्रिया के लिए कोई शुल्क नहीं है।'],
      ],
    },
  },
};
export default text;
