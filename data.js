var usdToInrRate = 82;

var product = [
    {
        "id": 0,
        "title": "-- Select Anyone --",
        "price": "",
        "description": "",
        "brand": "",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
    },
    {
        "id": 1,
        "title": "Apple Inc.",
        "price": (135.37 * usdToInrRate).toFixed(2),
        "description": "Apple Inc. is an American multinational technology company that designs, manufactures, and sells consumer electronics, software, and services.",
        "brand": "AAPL",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/2048px-Apple_logo_black.svg.png"
    },
    {
        "id": 2,
        "title": "Microsoft Corporation",
        "price": (242.20 * usdToInrRate).toFixed(2),
        "description": "Microsoft Corporation is an American multinational technology company which produces computer software, consumer electronics, personal computers, and related services.",
        "brand": "MSFT",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png"
    },
    {
        "id": 3,
        "title": "Amazon.com Inc.",
        "price": (3295.47 * usdToInrRate).toFixed(2),
        "description": "Amazon.com, Inc. is an American multinational technology company which focuses on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
        "brand": "AMZN",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
    },
    {
        "id": 4,
        "title": "Alphabet Inc. (Google)",
        "price": (2731.60 * usdToInrRate).toFixed(2),
        "description": "Alphabet Inc. is an American multinational conglomerate created through a corporate restructuring of Google and is the parent company of Google LLC.",
        "brand": "GOOGL",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/368px-Google_2015_logo.svg.png"
    },
    {
        "id": 5,
        "title": "Facebook, Inc.",
        "price": (329.94 * usdToInrRate).toFixed(2),
        "description": "Facebook, Inc. is an American multinational technology conglomerate based in Menlo Park, California.",
        "brand": "FB",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/512px-Facebook_Logo_%282019%29.svg.png"
    },
    {
        "id": 6,
        "title": "Tesla, Inc.",
        "price": (677.35 * usdToInrRate).toFixed(2),
        "description": "Tesla, Inc. is an American electric vehicle and clean energy company based in Palo Alto, California.",
        "brand": "TSLA",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/2048px-Tesla_Motors.svg.png"
    },
    {
        "id": 7,
        "title": "NVIDIA Corporation",
        "price": (195.54 * usdToInrRate).toFixed(2),
        "description": "NVIDIA Corporation is an American multinational technology company incorporated in Delaware and based in Santa Clara, California.",
        "brand": "NVDA",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/1920px-Nvidia_logo.svg.png"
    },
    {
        "id": 8,
        "title": "Berkshire Hathaway Inc.",
        "price": (415304.00 * usdToInrRate).toFixed(2),
        "description": "Berkshire Hathaway Inc. is an American multinational conglomerate holding company headquartered in Omaha, Nebraska.",
        "brand": "BRK.A",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Berkshire_Hathaway.svg/1200px-Berkshire_Hathaway.svg.png"
    },
    {
        "id": 9,
        "title": "Johnson & Johnson",
        "price": (165.84 * usdToInrRate).toFixed(2),
        "description": "Johnson & Johnson is an American multinational corporation founded in 1886 that develops medical devices, pharmaceutical, and consumer packaged goods.",
        "brand": "JNJ",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Johnson_%26_Johnson_logo.svg/1280px-Johnson_%26_Johnson_logo.svg.png"
    },
    {
        "id": 10,
        "title": "Visa Inc.",
        "price": (233.57 * usdToInrRate).toFixed(2),
        "description": "Visa Inc. is an American multinational financial services corporation headquartered in Foster City, California.",
        "brand": "V",
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2000px-Visa_Inc._logo.svg.png"
    },
    
    {
        "id": 11,
        "title": "Reliance Industries",
        "price": 2500,
        "description": "Reliance Industries Limited is an Indian multinational conglomerate company headquartered in Mumbai, India.",
        "brand": "RELIANCE",
        "image": "https://rilstaticasset.akamaized.net/sites/default/files/images/ril-logo-social_media.jpg"
    },
    {
        "id": 12,
        "title": "Tata Consultancy Services",
        "price": 3500 ,
        "description": "Tata Consultancy Services is an Indian multinational information technology services and consulting company headquartered in Mumbai, India.",
        "brand": "TCS",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTPAWYqoR1E-YMPwd869I0X2WuToOjTrPXgQ&s"
    },
    {
        "id": 13,
        "title": "HDFC Bank",
        "price": 1500 ,
        "description": "HDFC Bank Limited is an Indian banking and financial services company headquartered in Mumbai, Maharashtra.",
        "brand": "HDFC",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBadhk3NWk3vLUsxixOpcIigfoOD4str9Gpw&s"
    },
    {
        "id": 14,
        "title": "Infosys",
        "price": 1700 ,
        "description": "Infosys Limited is an Indian multinational corporation that provides business consulting, information technology, and outsourcing services.",
        "brand": "INFY",
        "image": "https://logowik.com/content/uploads/images/infosys2157.jpg"
    },
    {
        "id": 15,
        "title": "ICICI Bank",
        "price":1200,
        "description": "ICICI Bank Limited is an Indian multinational banking and financial services company headquartered in Mumbai, Maharashtra.",
        "brand": "ICICI",
        "image": "https://logowik.com/content/uploads/images/icici-bank4093.logowik.com.webp"
    },
    {
        "id": 16,
        "title": "Hindustan Unilever",
        "price": 2400,
        "description": "Hindustan Unilever Limited is an Indian consumer goods company headquartered in Mumbai, India.",
        "brand": "HUL",
        "image": "https://logowik.com/content/uploads/images/hindustan-unilever-limited1422.jpg"
    },
    {
        "id": 17,
        "title": "State Bank of India",
        "price": 500 ,
        "description": "State Bank of India is an Indian multinational, public sector banking and financial services statutory body headquartered in Mumbai, Maharashtra.",
        "brand": "SBI",
        "image": "https://logowik.com/content/uploads/images/sbi-state-bank-of-india9251.logowik.com.webp"
    },
    

];
