const uniqueIdentifier = "JWK-WEDDING-TEMPLATE-V1";

// 갤러리 레이아웃 타입 정의
type GalleryLayout = "scroll" | "grid";
type GalleryPosition = "middle" | "bottom";

interface GalleryConfig {
  layout: GalleryLayout;
  position: GalleryPosition;
  images: string[];
}

export const weddingConfig = {
  // 메타 정보
  meta: {
    title: "동건 ❤️ 은혜의 결혼식에 초대합니다",
    description: "결혼식 초대장",
    ogImage: "/images/main_3.jpg",
    noIndex: true,
    _jwk_watermark_id: uniqueIdentifier,
  },

  // 메인 화면
  main: {
    title: "",
    image: "/images/main_3.jpg",
    date: "2025년 11월 8일 토요일 오후 1시 ",
    venue: "경주 더프라미스 웨딩홀",
  },

  // 소개글
  intro: {
    title: "",
    text: "서로를 바라보며 걸어온\n소중한 발걸음이\n이제 하나의 길로 이어집니다.\n\n사랑과 믿음으로\n새 가정을 이루는 저희 두 사람의\n작은 시작을 알려드립니다.",
  },

  // 결혼식 일정
  date: {
    year: 2025,
    month: 11,
    day: 8,
    hour: 13,
    minute: 0,
    displayDate: "2025.11.08 SAT PM 1:00",
  },

  // 장소 정보
  //https://map.naver.com/p/entry/place/1040777321?c=15.99,0,0,0,dh&placePath=/home?from=map&fromPanelNum=1&additionalHeight=76&timestamp=202509121606&locale=ko&svcName=map_pcv5
  venue: {
    name: "더프라미스 웨딩홀",
    address: "경북 경주시 보불로 391\n 룩스타워 6층",
    tel: "0507-1387-9237",
    naverMapId: "더 프라미스 웨딩 컨벤션", // 네이버 지도 검색용 장소명
    coordinates: {
      latitude: 35.8250959,
      longitude: 129.2908045,
    },
    placeId: "1040777321", // 네이버 지도 장소 ID
    mapZoom: "17", // 지도 줌 레벨
    mapNaverCoordinates: "129.2908045,35.8250959,15,0,0,0,dh", // 네이버 지도 길찾기 URL용 좌표 파라미터 (경주시 보불로 391)
    transportation: {
      bus: "셔틀버스 KTX 경주역 ⇄ 웨딩홀 \n\n - 가는편: 오전 11:50 \n    - 탑승 위치: KTX 출구 옆 버스 정류장(시내버스 정류장 옆) \n\n - 오는편: 오후 2:30~3:00 \n    - 탑승 위치: 하차 위치",
    },
    parking: "건물 주차장(2~5F) 이용 가능",
    // 신랑측 배차 안내
    /*groomShuttle: {
      location: "신랑측 배차 출발지",
      departureTime: "오전 10시 30분 출발",
      contact: {
        name: "담당자명",
        tel: "010-1234-5678",
      },
    },map.getCenter().toString());
    // 신부측 배차 안내
    brideShuttle: {
      location: "신부측 배차 출발지",
      departureTime: "오전 11시 출발",
      contact: {
        name: "담당자명",
        tel: "010-9876-5432",
      },
    },*/
  },

  // 갤러리
  gallery: {
    layout: "grid" as GalleryLayout, // "scroll" 또는 "grid" 선택
    position: "bottom" as GalleryPosition, // "middle" (현재 위치) 또는 "bottom" (맨 하단) 선택
    images: [
      "/images/gallery/1.jpg",
      "/images/gallery/2.jpg",
      "/images/gallery/3.jpg",
      "/images/gallery/4.jpg",
      "/images/gallery/5.jpg",
      "/images/gallery/6.jpg",
      "/images/gallery/7.jpg",
      "/images/gallery/8.jpg",
      "/images/gallery/9.jpg",
    ],
  } as GalleryConfig,

  // 초대의 말씀
  invitation: {
    message:
      "11월 어느 멋진날, 저희 결혼합니다.\n\n 함께하던 작은 일상이 일생이 되는날,\n 나란히 같은 곳을 보고 걸으며 지금처럼 예쁘게 살아가겠습니다.\n\n 우리라는 이름의 첫 시작, \n 그 설렘의 순간에 소중한 분들을 초대합니다.",
    groom: {
      name: "박동건",
      label: "아들",
      father: "박태윤",
      mother: "이영애",
    },
    bride: {
      name: "박은혜",
      label: "딸",
      father: "박상의",
      mother: "이미애",
    },
  },

  // 계좌번호
  account: {
    groom: {
      bank: "카카오뱅크",
      number: "3333-02-04431819",
      holder: "",
    },
    bride: {
      bank: "하나은행",
      number: "211-910375-27407",
      holder: "",
    },
    groomFather: {
      bank: "농협",
      number: "721110-52-053695",
      holder: "",
    },
    groomMother: {
      bank: "농협",
      number: "721110-52-053695",
      holder: "",
    },
    brideFather: {
      bank: "하나은행",
      number: "903-910039-96807",
      holder: "",
    },
    brideMother: {
      bank: "하나은행",
      number: "620-1610-13178",
      holder: "",
    },
  },

  // RSVP 설정
  rsvp: {
    enabled: false, // RSVP 섹션 표시 여부
    showMealOption: false, // 식사 여부 입력 옵션 표시 여부
  },

  // 슬랙 알림 설정
  slack: {
    webhookUrl: process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL || "",
    channel: "#wedding-response",
    compactMessage: true, // 슬랙 메시지를 간결하게 표시
  },
};
