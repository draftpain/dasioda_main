/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * Dasioda Stay - Healing & Rest
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Plus,
  Minus,
  Instagram, 
  MapPin, 
  Phone, 
  Calendar, 
  ChevronRight, 
  ArrowRight
} from 'lucide-react';
import { cn } from './lib/utils';
import faqData from './data/faq.json';

// --- Analytics ---
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

const trackNaverReservation = (location: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'click_naver_reservation', {
      button_location: location
    });
  }
};

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'ABOUT', href: '#about' },
    { name: 'ROOMS', href: '#rooms' },
    { name: 'INDOOR DETAILS', href: '#indoor' },
    { name: 'FAQ', href: '#faq' },
    { name: 'LOCATION', href: '#location' },
    { name: 'BOOKING', href: '#booking' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4 md:px-12 md:py-6",
        isScrolled ? "bg-stay-bg/90 backdrop-blur-md border-b border-stay-border py-4" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="/" className="flex flex-col items-center">
          <span className={cn(
            "text-2xl md:text-3xl font-serif tracking-widest transition-colors duration-500",
            isScrolled ? "text-stay-ink" : "text-white"
          )}>
            DASIODA
          </span>
          <span className={cn(
            "text-[10px] tracking-[0.3em] font-sans mt-1 transition-colors duration-500",
            isScrolled ? "text-stay-muted" : "text-white/70"
          )}>
            다시오다 스테이
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs tracking-[0.2em] font-medium hover:opacity-50 transition-all",
                isScrolled ? "text-stay-ink" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={isScrolled ? "text-stay-ink" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-stay-ink" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-stay-bg border-b border-stay-border p-8 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-sm tracking-widest font-medium text-stay-ink border-b border-stay-border pb-2"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/input_file_0.webp"
          alt="Dasioda Stay Hero"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover brightness-75 scale-105 animate-slow-zoom"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-sm md:text-base tracking-[0.5em] font-sans mb-6 opacity-90">
            REST & RECONNECT
          </h2>
          <h1 className="text-5xl md:text-8xl font-serif mb-8 leading-tight tracking-tight">
            다시, 오다 <br />
            <span className="italic font-light opacity-80">Dasioda Stay</span>
          </h1>
          <div className="w-px h-24 bg-white/40 mx-auto mt-12" />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/60 flex flex-col items-center space-y-2">
        <span className="text-[10px] tracking-widest font-sans uppercase">Scroll</span>
      </div>
    </section>
  );
};

const Intro = () => {
  return (
    <section id="about" className="py-24 md:py-40 px-6 md:px-12 bg-stay-bg">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="text-stay-accent text-xs tracking-[0.3em] font-medium uppercase mb-8 block">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-serif leading-relaxed mb-12 text-stay-ink">
              "다시 오다" <br />
              익숙한 편안함으로 다시 돌아오는 곳
            </h2>
            <p className="text-stay-muted leading-loose text-sm md:text-base font-light mb-8">
              강원도의 맑은 공기와 사계절의 변화를 가장 가까이서 느낄 수 있는 곳. <br />
              다시오다 스테이는 화려함보다는 정갈함을, <br />
              낯선 긴장감보다는 익숙한 편안함을 선물합니다. <br />
              가족과 아이들, 그리고 소중한 사람들과 함께 <br />
              잊지 못할 따뜻한 추억을 만들어보세요.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl"
          >
            <img 
              src="/input_file_7.webp"
              alt="Autumn at Dasioda" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const RoomCard = ({ title, sub, image, desc }: any) => (
  <motion.div 
    className="group cursor-pointer"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    <div className="relative aspect-[4/5] overflow-hidden mb-6">
      <img 
        src={image} 
        alt={title} 
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
    </div>
    <div className="space-y-2">
      <div className="flex justify-between items-end">
        <div>
          <h3 className="text-xl font-serif text-stay-ink">{title}</h3>
          <p className="text-xs text-stay-muted tracking-widest uppercase mt-1">{sub}</p>
        </div>
        <ArrowRight className="w-5 h-5 text-stay-accent opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
      </div>
      <p className="text-xs text-stay-muted font-light leading-relaxed pt-2 border-t border-stay-border">
        {desc}
      </p>
    </div>
  </motion.div>
);

const Rooms = () => {
  const rooms = [
    {
      title: "The Bedroom 1",
      sub: "Cozy Rest / 2 Persons",
      image: "/input_file_3.webp",
      desc: "포근한 침구와 은은한 조명이 어우러진 침실입니다. 창밖의 풍경을 감상하며 깊은 숙면을 취해보세요."
    },
    {
      title: "The Bedroom 2",
      sub: "COMFORTABLE GREEN / KIDS & FAMILY",
      image: "/input_file_31.webp",
      desc: "키즈프랜들리 숙소로서 장난감 가득한 놀이방과 미니 놀이터가 준비되어 있는 온돌 침실입니다. 아이들이 바닥에서 안전하고 자유롭게 뒹굴며 즐거운 시간을 보내기 좋습니다."
    },
    {
      title: "The Bedroom 3",
      sub: "COZY BEDROOM / PERFECT RELAX",
      image: "/input_file_32.webp",
      desc: "바스락거리는 체크무늬 침구와 따뜻한 조명이 반겨주는 세 번째 침실입니다. 창밖에서 스며드는 기분 좋은 햇살을 맞으며 조용하고 온전한 나만의 휴식을 누려보세요"
    },
    {
      title: "The Kids Room",
      sub: "Play & Joy / For Children",
      image: "/input_file_1.webp",
      desc: "아이들을 위한 다양한 장난감과 안전한 놀이 공간이 마련되어 있습니다. 온 가족이 행복한 스테이입니다."
    },
    {
      title: "The Living Room",
      sub: "Emotional Space / Family",
      image: "/input_file_2.webp",
      desc: "같이 둘러앉기 좋은 넓은 테이블이 자리한 2층 거실 공간입니다. 일상의 피로를 잠시 내려놓고, 편안한 분위기 속에서 웃음꽃을 피우기에 완벽한 장소입니다."
    },
    {
      title: "The Kitchen",
      sub: "SUNLIT KITCHEN / TOGETHER",
      image: "/input_file_33.webp",
      desc: "큰 창 너머로 아름다운 계절의 풍경이 그림처럼 걸리는 화사한 주방입니다. 따스한 햇살이 머무는 이 공간에서, 사랑하는 사람들을 위한 기분 좋은 만찬을 준비해 보세요."
    },
    {
      title: "Out Door BBQ",
      sub: "PRIVATE GRILL / PARTY",
      image: "/input_file_23.webp",
      desc: "캠핑 감성을 느낄 수 있는 아늑한 야외 바베큐장입니다. 가족, 친구들과 함께 그릴 위에서 고기를 구우며 하하호호 웃음 가득한 시간을 보낼 수 있습니다."
    }
  ];

  return (
    <section id="rooms" className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <span className="text-stay-accent text-xs tracking-[0.3em] font-medium uppercase mb-4 block">
              The Spaces
            </span>
            <h2 className="text-3xl md:text-5xl font-serif text-stay-ink">
              머무름의 공간
            </h2>
          </div>
          <p className="text-stay-muted text-sm font-light max-w-xs">
            정성 어린 손길로 꾸며진 각 공간에서 당신만의 소중한 이야기를 채워보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {rooms.map((room, idx) => (
            <RoomCard 
              key={idx} 
              title={room.title} 
              sub={room.sub} 
              image={room.image} 
              desc={room.desc} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const IndoorInfo = () => {
  return (
    <section id="indoor" className="py-24 md:py-40 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-stay-accent text-xs tracking-[0.3em] font-medium uppercase mb-4 block">
            Indoor Details
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-stay-ink">
            공간 안내
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-serif text-stay-ink mb-6 border-b border-stay-border pb-2">01. 층별 구성</h3>
              <p className="text-stay-muted text-sm leading-loose font-light">
                1층은 공용공간(넓은 홀), 2층은 숙소로 이루어져 있습니다. <br />
                2층으로 올라가는 계단 아래는 다락방 느낌을 주는 공간으로, 이 또한 게스트만의 프라이빗한 공간입니다. <br />
                <span className="text-stay-accent mt-2 block">※ 1층 공용공간의 넓은 홀은 자유롭고 편안하게 사용 가능합니다.</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-serif text-stay-ink mb-6 border-b border-stay-border pb-2">02. 숙소 규모 및 체크인</h3>
              <p className="text-stay-muted text-sm leading-loose font-light">
                2층 실내 22평, 테라스 10평, 1층 계단 밑 좌식 공간 3평 규모입니다. <br />
                방 3개, 거실 겸 주방, 욕실 겸 화장실 2개, 바베큐 테라스로 구성되어 있습니다. <br />
                <span className="text-stay-accent mt-2 block">※ 체크인은 기본적으로 대면으로 이루어지며 불편함이 없으시도록 안내해 드립니다. (비대면 가능)</span>
              </p>
              <div className="mt-4 p-4 bg-stay-bg rounded-sm">
                <p className="text-[11px] text-stay-muted leading-relaxed">
                  <span className="font-bold text-stay-ink">제공 어메니티:</span> 샴푸, 트리트먼트, 바디워시, 폼클렌징, 치약, 수건(넉넉히 제공)
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-xl font-serif text-stay-ink mb-6 border-b border-stay-border pb-2">03. 방 구성</h3>
              <ul className="space-y-4 text-stay-muted text-sm font-light">
                <li><span className="font-bold text-stay-ink mr-2">방 1:</span> 퀸 침대, 55인치 TV, 옷걸이</li>
                <li><span className="font-bold text-stay-ink mr-2">방 2:</span> 3단 매트리스 요, 이불, 책장, 보드게임, 장난감, 옷걸이</li>
                <li><span className="font-bold text-stay-ink mr-2">방 3:</span> 슈퍼싱글 침대, 스마트 TV, 좌식 화장대, 옷걸이</li>
              </ul>
              <p className="text-[11px] text-stay-accent mt-6 leading-relaxed">
                ※ 침구는 계절별 순면 차렵이불을 사용하며, 통세탁 및 건조로 청결하게 관리합니다. <br />
                ※ 거실과 모든 방에 에어컨(총 4개)이 설치되어 있습니다. <br />
                ※ 욕실 겸 화장실은 2층에 하나, 1층에 하나 총 2개가 있습니다. <br />
                ※ 아이패드, 마샬 블루투스 스피커, 블루투스 노래방 마이크가 준비되어 있습니다.
              </p>
            </motion.div>
          </div>

          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-serif text-stay-ink mb-6 border-b border-stay-border pb-2">04. 주방 및 집기</h3>
              <p className="text-stay-muted text-sm leading-loose font-light mb-4">
                전자레인지, 정수기, 인덕션(2구), 냄비, 후라이팬, 전기압력밥솥, 전기포트, 각종 식기, 와인 오프너, 각종 술잔이 완비되어 있습니다.
              </p>
              <div className="p-4 bg-stay-bg rounded-sm">
                <p className="text-[11px] text-stay-muted leading-relaxed">
                  <span className="font-bold text-stay-ink">구비 양념:</span> 식용유, 참기름, 간장, 소금, 허브솔트, 후추
                </p>
              </div>
              <p className="text-[11px] text-stay-accent mt-4">
                ※ 2층 냉장고 공간이 부족할 경우 1층의 빨간색 냉장고를 사용해 주세요.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-xl font-serif text-stay-ink mb-6 border-b border-stay-border pb-2">05. 야외 활동</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 border border-stay-border rounded-sm">
                  <h4 className="text-stay-ink font-bold text-xs uppercase tracking-widest mb-3">Barbecue</h4>
                  <p className="text-stay-muted text-xs font-light leading-relaxed">
                    2층 테라스에서 치악산 성남계곡 소리를 들으며 프라이빗하게 즐기실 수 있습니다.
                  </p>
                </div>
                <div className="p-6 border border-stay-border rounded-sm">
                  <h4 className="text-stay-ink font-bold text-xs uppercase tracking-widest mb-3">Fire Pit</h4>
                  <p className="text-stay-muted text-xs font-light leading-relaxed">
                    캠핑 온 것처럼 낭만적인 불멍 시간을 보내실 수 있습니다.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-[16/9] overflow-hidden rounded-sm shadow-lg"
            >
              <img 
                src="/input_file_21.webp"
                alt="Indoor atmosphere" 
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-40 px-6 md:px-12 bg-stay-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-stay-accent text-xs tracking-[0.3em] font-medium uppercase mb-4 block">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-stay-ink">
            자주 묻는 질문
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.slice(0, 10).map((item, idx) => (
            <div 
              key={idx} 
              className="border-b border-stay-border last:border-0"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full py-6 flex justify-between items-center text-left group"
              >
                <span className={cn(
                  "text-sm md:text-base font-medium transition-colors duration-300",
                  openIndex === idx ? "text-stay-accent" : "text-stay-ink group-hover:text-stay-accent"
                )}>
                  {item.question}
                </span>
                {openIndex === idx ? (
                  <Minus className="w-4 h-4 text-stay-accent shrink-0" />
                ) : (
                  <Plus className="w-4 h-4 text-stay-muted shrink-0 group-hover:text-stay-accent transition-colors" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-8 text-sm md:text-base text-stay-muted font-light leading-loose whitespace-pre-line">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Location = () => {
  return (
    <section id="location" className="py-24 md:py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-stay-accent text-xs tracking-[0.3em] font-medium uppercase mb-4 block">
            Location
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-stay-ink">
            찾아오시는 길
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 relative h-[400px] md:h-[500px] bg-stay-border overflow-hidden rounded-sm shadow-inner">
            <img 
              src="/input_file_0.webp"
              alt="Winter at Dasioda" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover opacity-80"
            />
            {/* Address & Navigation Controls */}
            <div className="absolute top-6 left-6 space-y-3 z-10">
              <div className="bg-white/90 backdrop-blur-sm py-2.5 px-4 md:py-3.5 md:px-5 rounded-sm shadow-xl flex items-center space-x-4">
                <MapPin className="text-stay-accent w-5 h-5 md:w-6 md:h-6" />
                <div>
                  <p className="text-xs md:text-sm font-medium">강원도 원주시 신림면 성남로 450</p>
                  <p className="text-[9px] md:text-[10px] text-stay-muted tracking-widest uppercase mt-1">Dasioda Stay, Wonju</p>
                </div>
              </div>
              
              <div className="flex space-x-2">
                <a 
                  href="https://map.kakao.com/link/search/%EB%8B%A4%EC%8B%9C%EC%98%A4%EB%8B%A4%20%EC%8A%A4%ED%85%8C%EC%9D%B4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#FEE500] text-[#191919] px-3 py-2 rounded-sm text-[10px] font-bold shadow-lg hover:brightness-95 transition-all flex items-center space-x-1.5"
                >
                  <span>카카오내비</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
                <a 
                  href="https://map.naver.com/v5/search/%EB%8B%A4%EC%8B%9C%EC%98%A4%EB%8B%A4%20%EC%8A%A4%ED%85%8C%EC%9D%B4" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#03C75A] text-white px-3 py-2 rounded-sm text-[10px] font-bold shadow-lg hover:brightness-95 transition-all flex items-center space-x-1.5"
                >
                  <span>네이버 지도</span>
                  <ChevronRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-12 flex flex-col justify-center">
            <div>
              <h4 className="text-xs tracking-widest font-bold text-stay-ink uppercase mb-4 flex items-center">
                <MapPin className="w-3 h-3 mr-2" /> Address
              </h4>
              <p className="text-sm text-stay-muted font-light leading-relaxed">
                강원도 원주시 신림면 <br />
                성남로 450
              </p>
            </div>
            <div>
              <h4 className="text-xs tracking-widest font-bold text-stay-ink uppercase mb-4 flex items-center">
                <Phone className="w-3 h-3 mr-2" /> Contact
              </h4>
              <p className="text-sm text-stay-muted font-light leading-relaxed">
                T. 010-3229-8032
              </p>
            </div>
            <div>
              <h4 className="text-xs tracking-widest font-bold text-stay-ink uppercase mb-4 flex items-center">
                <Instagram className="w-3 h-3 mr-2" /> Social
              </h4>
              <a 
                href="https://linktr.ee/dasioda?utm_source=linktree_profile_share&ltsid=b38a554d-62a7-4f72-8734-073968d4a8a8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-stay-accent hover:underline font-light break-all"
              >
                Linktree
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  return (
    <section id="booking" className="py-24 md:py-40 px-6 md:px-12 bg-stay-ink text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
        <img 
          src="/input_file_0.webp"
          alt="Booking BG" 
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-2xl">
          <span className="text-stay-accent text-xs tracking-[0.3em] font-medium uppercase mb-6 block">
            Reservation
          </span>
          <h2 className="text-4xl md:text-6xl font-serif mb-10 leading-tight">
            다시 돌아올 당신을 <br /> 기다립니다.
          </h2>
          <p className="text-white/60 text-sm md:text-base font-light leading-loose mb-12">
            다시오다 스테이의 예약은 네이버 예약 시스템을 통해 <br />
            실시간으로 진행됩니다. 특별한 날, 소중한 사람과 함께하세요.
          </p>
          <a 
            href="https://m.place.naver.com/accommodation/1280772467/home?businessCategory=pension"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackNaverReservation('footer_booking')}
            className="group inline-flex items-center space-x-3 bg-[#03C75A] text-white px-8 py-4 rounded-sm transition-all duration-300 hover:brightness-105 shadow-md"
          >
            <div className="bg-white w-6 h-6 flex items-center justify-center rounded-[1px]">
              <span className="text-[#03C75A] font-black text-[14px] leading-none">N</span>
            </div>
            <span className="text-base font-bold tracking-tight">네이버 예약</span>
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 px-6 md:px-12 border-t border-stay-border bg-stay-bg">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end space-y-8 md:space-y-0">
        <div className="space-y-6">
          <div className="flex flex-col">
            <span className="text-xl font-serif tracking-widest">DASIODA</span>
            <span className="text-[9px] tracking-[0.3em] text-stay-muted mt-1 uppercase">다시오다 스테이</span>
          </div>
          
          <div className="space-y-1 text-[10px] md:text-[11px] text-stay-muted font-light leading-relaxed">
            <div className="flex flex-wrap gap-x-3">
              <span>대표자 정승철</span>
              <span className="text-stay-border">|</span>
              <span>Tel. 010 3229 8032</span>
              <span className="text-stay-border">|</span>
              <span>주소 강원도 원주시 신림면 성남로450</span>
            </div>
            <div className="flex flex-wrap gap-x-3">
              <span>사업자번호 822 55 00939</span>
              <span className="text-stay-border">|</span>
              <span>관광편의시설업 지정 제26109-2024-000001호</span>
              <span className="text-stay-border">|</span>
              <span>통신판매업 제2021-강원원주-00025호</span>
            </div>
          </div>
        </div>

        <p className="text-[10px] tracking-widest text-stay-muted">
          © 2026 DASIODA STAY. ALL RIGHTS RESERVED.
        </p>
      </div>
    </footer>
  );
};

const Gallery = () => {
  const rollingImages = [
    "/input_file_4.webp",
    "/input_file_5.webp",
    "/input_file_6.webp",
    "/input_file_8.webp",
    "/input_file_9.webp",
    "/input_file_10.webp",
    "/input_file_11.webp",
    "/input_file_24.webp",
    "/input_file_25.webp",
    "/input_file_26.webp"
  ];

  return (
    <section className="py-24 md:py-40 px-6 md:px-12 bg-stay-bg overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-stay-accent text-xs tracking-[0.3em] font-medium uppercase mb-4 block">
            Moments
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-stay-ink">
            다시오다의 기록
          </h2>
        </div>
        
        {/* Rolling Gallery */}
        <div className="relative">
          <motion.div 
            className="flex space-x-4 cursor-grab active:cursor-grabbing"
            drag="x"
            dragConstraints={{ left: -1200, right: 0 }}
            animate={{ x: [0, -1200] }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "linear",
              repeatType: "loop"
            }}
          >
            {[...rollingImages, ...rollingImages].map((img, idx) => (
              <div
                key={idx}
                className="min-w-[300px] md:min-w-[400px] aspect-square overflow-hidden rounded-sm group"
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx}`} 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen selection:bg-stay-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Rooms />
        <IndoorInfo />
        <FAQ />
        <Gallery />
        <Location />
        <Booking />
      </main>
      <Footer />
    </div>
  );
}
