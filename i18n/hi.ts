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

  Institute: {
    infrastructure: {
      heading: 'कैम्पस और आधारिक संरचना',
      headings: ['कैम्पस', `आधारिक संरचना`, `कैसे पहुँचें`],
      campus: [
        "कुरुक्षेत्र, इतिहास और पौराणिक कथाओं में डूबी हुई, एक महान आध्यात्मिक महत्त्व की जगह है, जहां भगवान कृष्ण ने 'श्रीमद भगवद गीता' का दिव्य संदेश दिया। ज्ञान की धारा दूर-दूर तक फैलाने का स्थान राजा हर्षवर्धन ने अपनी राजधानी चुनी थी। यह एक प्रमुख तीर्थ स्थल है, जो साल भर भक्तों को लगातार आकर्षित करता है। कुरुक्षेत्र उत्तरी रेलवे के दिल्ली-करनाल-अम्बाला खंड पर एक रेलवे जंक्शन है। यह दिल्ली से लगभग 160 किलोमीटर की दूरी पर है। संस्थान कैम्पस पिपली से लगभग 10 किलोमीटर और कुरुक्षेत्र रेलवे स्टेशन से लगभग 5 किलोमीटर की दूरी पर है।",

        'कैम्पस का क्षेत्रफल लगभग 300 एकड़ है जो एक चित्रस्थल पर अभूतपूर्व रूप से बिछाया गया है। यह वास्तुकला और प्राकृतिक सौंदर्य में समानता का दृश्य प्रस्तुत करता है। कैम्पस को तीन कार्यात्मक क्षेत्रों में व्यवस्थित किया गया है: छात्रों के लिए हॉस्टल, अध्यापन भवन और कर्मचारियों के लिए आवासीय क्षेत्र।',

        'छात्रों के लिए हॉस्टल कैम्पस के पूर्वी भाग में गुच्छे के रूप में स्थित हैं। हॉस्टल के तीन मंजिल के भवन छात्रों को आरामदायक आवास और प्रिय वातावरण प्रदान करते हैं।',

        'नेशनल इंस्टीट्यूट ऑफ टेक्नोलॉजी कुरुक्षेत्र (एनआईटीके) एक प्रशस्ति केंद्र होने का श्रेय प्राप्त है, जो गुणवत्तापूर्ण तकनीकी और प्रबंधन शिक्षा, अनुसंधान और प्रशिक्षण को सुविधाजनक बनाता है। इसे राष्ट्रीय महत्व के संस्थान होने का दर्जा प्राप्त है।',

        'पैरामीटर्स पर ऊची गुणवत्ता प्राप्त की। सन् 1963 में स्थापित किया गया, एनआईटीके ने उत्कृष्टता की ओर तेजी से कदम बढ़ाया। एक विशाल हरित-भरे कैम्पस, उत्कृष्ट आधारभूत संरचना, आधुनिक समर्थन प्रणाली, समकालीन पाठ्यक्रम और एक समर्पित शिक्षक दल गुणवत्ता शिक्षण, शिक्षा और अनुसंधान के लिए एक समर्थ वातावरण प्रदान करते हैं। संस्थान संस्था-उद्योग संवाद के महत्व को पहचानता है और छात्र स्थानांतरण, परामर्श सेवाएं, संयुक्त अनुसंधान परियोजनाओं और कार्यशालाओं, सेमिनारों, सम्मेलनों आदि का संगठन करके उद्योग के साथ आंतरिक क्रियाकलाप को बढ़ावा देता है। इस संघ को और मजबूत करना संस्थान के लिए वर्तमान में प्राथमिकता का विषय है।',

        'वर्तमान में, एनआईटीके ने सिविल, कंप्यूटर साइंस, इलेक्ट्रिकल, इलेक्ट्रॉनिक्स और कम्युनिकेशन, मैकेनिकल इंजीनियरिंग, औद्योगिक इंजीनियरिंग और प्रबंधन, सूचना प्रौद्योगिकी और मास्टर ऑफ बिजनेस एडमिनिस्ट्रेशन (एमबीए) - विपणन, वित्त, मानव संसाधन प्रबंधन, सूचना प्रौद्योगिकी के साथ स्नातक (बी.टेक.) और पोस्ट ग्रेजुएट (एम.टेक.) कार्यक्रम प्रदान किए हैं - इंजीनियरिंग, प्रौद्योगिकी, अनुप्रयोग विज्ञान, और विज्ञान और मानविकी और सामाजिक विज्ञानों के क्षेत्र में शोध के लिए उत्कृष्ट सुविधाएं भी प्रदान की हैं। पाठ्यक्रम को लगातार अद्यतन किया जाता है ताकि देश की विभिन्न प्रौद्योगिकी और प्रबंधन क्षेत्रों में वृद्धि और आवश्यकताओं को पूरा किया जा सके।',
        'एनआईटी कुरुक्षेत्र कैम्पस:',
      ],
      infra: [
        'इंफ्रास्ट्रक्चर भी संस्थान को उच्च गुणवत्ता के तकनीकी कर्मचारियों का विकास करने में सक्षम है। संस्थान द्वारा अनेक परियोजनाएं चलाई जा रही हैं, जिन्हें विज्ञान और शिक्षा मंत्रालय, भारत सरकार, सीएसआईआर, एआईसीटीई और यूजीसी द्वारा प्रदान किया जाता है। शिक्षण और अनुसंधान कार्यक्रमों का समर्थन एक केंद्रीय पुस्तकालय (जिसमें बहुलक्ष वाले पुस्तकों, बाउंड जर्नल्स, आईएस कोड, थिसिस, वीडियो सीडी आदि हैं। पुस्तकालय में आईईएल, एएससीई, एसीएम, एएसएमई, एसएई, आदि के ऑनलाइन जर्नल्स की सुविधा भी है), एक ऑडियो विजुअल एड सेंटर विकसित किया गया है जो मानव संसाधन विकास मंत्रालय (एमएचआरडी) के एक परियोजना के तहत है। 24 घंटे के इंटरनेट सुविधा और 2 एमबीपीएस लीज्ड लाइन के साथ एक मॉडर्न संचार और नेटवर्किंग केंद्र प्रदान किया गया है।',

        'एनआईटीके नए उत्साह के साथ भविष्य की दिशा में देखता है। संस्थान ने हाल ही में बीस वर्ष का रोड मैप तैयार किया है जिसमें संस्थान के दृष्टिकोण को सफलतापूर्वक लागू करने और भविष्य के चुनौतियों को सफलतापूर्वक सामना करने के रणनीतियों का विवरण दिया गया है। रोड मैप में मील के पत्थर को सफलतापूर्वक कवर करने पर, संस्थान को देश के उत्कृष्ट संस्थानों के प्रमुख में एक स्थान की गारंटी है।',
      ],
      library: {
        heading: 'पुस्तकालय',
        text: [
          `पुस्तकालय एक अलग इमारत में स्थित है जिसका आवरित क्षेत्र 3600 वर्ग मीटर है। इसके प्राचुर्य, स्थान और सेवाओं के साथ, पुस्तकालय विभाग, अनुसंधान शोधी और छात्रों की आवश्यकताओं को बहुत प्रभावी और कुशलतापूर्वक पूरा करता है। उन्हें अनुसंधान में नवीनतम विकासों के बारे में सम्मिलित रखने के लिए, यह अब मानव संसाधन विकास मंत्रालय द्वारा स्थापित आईएनडेएसटी संघ के माध्यम से इलेक्ट्रॉनिक संसाधनों की सदस्यता करता है। पुस्तकालय में 100,000 पुस्तकें, 6028 पीछे के वॉल्यूम और 3659 ई-पुस्तकें हैं। पुस्तकालय विज्ञान, प्रबंधन और प्रौद्योगिकी के क्षेत्रों में लगभग 2800 ऑनलाइन जर्नलों की सदस्यता करता है। पुस्तकालय अपने उपयोगकर्ताओं के लिए 24 x 7 उपलब्ध रहता है।`,
        ],
      },
      computing: {
        heading: `कंप्यूटिंग सुविधाएं:`,
        text: [
          `कंप्यूटिंग और नेटवर्किंग केंद्र (सीसीएन) संस्थान के छात्रों, शिक्षकों और कर्मचारियों के लिए केंद्रीकृत सुविधा है। इसे 2 एमबीपीएस किराया लाइन के साथ 24 घंटे का इंटरनेट सुविधा प्रदान की गई है। NITK को माना जाता है कि सूचना प्रौद्योगिकी प्रबंधन का अभिन्न हिस्सा है। NITK का इंट्रानेट संस्थान में सिखाया गया सब कुछ को ग्रहण करता है और उपभोक्ताओं की मांग पर उन सभी को वितरित करता है। यह प्रयोगशाला गहन कंप्यूटिंग एप्लिकेशन्स को संचालित करने की क्षमता रखती है और नवीनतम हार्डवेयर के साथ सम्पर्कित है, यहां उपभोक्ता और सर्वर कंप्यूटिंग के लिए। वाई-फाई बुनियादी संरचना सुनिश्चित करती है कि कैंपस पर हर रोज़गारी करने वाले को अपने डिजिटल तंत्रिका तंत्र से कहीं से भी कनेक्ट करने की क्षमता है।`,
        ],
      },
      senate: {
        heading: `सीनेट हॉल:`,
        text: [
          `NITK के पास एक आधुनिक सीनेट हॉल है। यह एक रंगीन डिज़ाइन और सुविधाजनक स्थानित संगोष्ठी-कैंटीन सुविधा है। सीनेट हॉल संस्थान को सम्मेलन, सेमिनार, कार्यशाला आदि का आयोजन करने के लिए समर्थ बनाता है। सभी अतिथि शिक्षकों और कॉर्पोरेट प्रबंधकों के व्याख्यान यहां आयोजित किए जाते हैं। प्रशिक्षण और स्थानन कोश भी पहले मंजिल पर स्थित है।`,
        ],
      },
      sports: {
        heading: `खेल परिसर:`,
        text: [
          `परिसर में विस्तृत और हरित महाखेलकुद का मैदान है जिसमें बास्केटबॉल, वॉलीबॉल, लॉन टेनिस, बैडमिंटन, और रैकेटबॉल कोर्ट्स, क्रिकेट और फुटबॉल ग्राउंड्स शामिल हैं। इसमें एक मिनी-जिमनेसियम और एक 400 मीटर धावक ट्रैक भी है। यह छात्रों को विविध रीक्रिएशन प्रदान करता है। नियमित आधार पर कई गतिविधियाँ और राष्ट्रीय स्तर पर आयोजित कार्यक्रम स्टूडेंट्स को टीम कार्य की भावना और साधना को मजबूत करते हैं।`,
        ],
      },
      address: [
        `राष्ट्रीय प्रौद्योगिकी संस्थान कुरुक्षेत्र - १३६११९ (भारत)`,
        `टेलीफोन नंबर: +९१-१७४४-२३३२१२ (कार्यालय)`,
        `फैक्स: +९१-१७४४-२३८०५०`,
      ],
    },
  },
};
export default text;
