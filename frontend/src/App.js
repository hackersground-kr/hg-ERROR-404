import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "./img/logo.png";
import adv1 from "./img/광고1.png";
import adv2 from "./img/광고2.png";
import adv3 from "./img/광고3.png";
import promotion1 from "./img/공지1.jpg";
import promotion2 from "./img/공지2.jpg";
import promotion3 from "./img/공지3.jpg";
import tourism1 from "./img/관광1.jpg";
import tourism2 from "./img/관광2.jpg";
import tourism3 from "./img/관광3.jpg";
import "./App.css";
import CommunityPage from "./components/CommunityPage";

// 광고 슬라이더 컴포넌트
function AdSlider() {
    const images = [adv1, adv2, adv3];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3초마다 슬라이드 변경

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
    }, [images.length]);

    return (
        <div className="adv-slider">
            <img
                src={images[currentIndex]}
                className="adv"
                alt={`광고 이미지 ${currentIndex + 1}`}
            />
        </div>
    );
}

// 홍보 슬라이더 컴포넌트
function PromotionSlider() {
    const images = [promotion1, promotion2, promotion3];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // 3초마다 슬라이드 변경

        return () => clearInterval(interval); // 컴포넌트 언마운트 시 인터벌 클리어
    }, [images.length]);

    return (
        <div className="promotion-slider">
            <img
                src={images[currentIndex]}
                className="promotion"
                alt={`홍보 이미지 ${currentIndex + 1}`}
            />
        </div>
    );
}

// 관광 슬라이더 컴포넌트
function TourismSlider() {
    const images = [tourism1, tourism2, tourism3];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="slider__box">
            <div
                className="slider__img"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div className="slider__slide" key={index}>
                        <img src={image} alt={`관광 이미지 ${index + 1}`} />
                    </div>
                ))}
            </div>
            <div className="slider__controls">
                <button className="prev" onClick={prevSlide}>
                    ‹
                </button>
                <button className="next" onClick={nextSlide}>
                    ›
                </button>
            </div>
        </div>
    );
}

function App() {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
            window.location.href = googleSearchUrl;
        }
    };

    return (
        <Router>
            <div>
                <header>
                    <div className="container">
                        <img src={logo} className="logo" alt="사이트 로고" />
                        <nav>
                            <ul>
                                <li>
                                    <a href="#">의성지원</a>
                                </li>
                                <li>
                                    <a href="#">편의시설</a>
                                </li>
                                <li>
                                    <a href="#">공공시설</a>
                                </li>
                                <li>
                                    <a href="#">관광명소</a>
                                </li>
                                <li>
                                    <Link to="/community">의성마당</Link> {/* 의성마당을 클릭하면 커뮤니티 페이지로 이동 */}
                                </li>
                            </ul>
                            <form className="search-form" onSubmit={handleSearchSubmit}>
                                <input
                                    type="text"
                                    placeholder="검색..."
                                    value={searchQuery}
                                    onChange={handleSearchChange}
                                />
                                <button type="submit">검색</button>
                            </form>
                        </nav>
                    </div>
                </header>
                <hr />

                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/community" element={<CommunityPage />} /> {/* 커뮤니티 페이지 라우트 추가 */}
                </Routes>

                <footer>
                    <div className="container">
                        <p>&copy; 2024 사이트 이름. 모든 권리 보유.</p>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

function MainContent() {
    return (
        <main>
            <div className="container">
                <AdSlider />
                <div className="media-community">
                    <section className="video">
                        <iframe
                            width="838"
                            height="380"
                            src="https://www.youtube.com/embed/su7LBrvGPZI"
                            title="의성청년시범마을조성사업 홍보영상"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        ></iframe>
                    </section>
                    <section className="community">
                        <h2>커뮤니티</h2>
                        <ul>
                            <li>
                                <a href="#">
                                    <strong>공지사항</strong>
                                    <span>2024.08.01</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <strong>행사안내</strong>
                                    <span>2024.08.01</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <strong>자유게시판</strong>
                                    <span>2024.08.01</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <strong>사진게시판</strong>
                                    <span>2024.08.01</span>
                                </a>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
            <div className="publicpromotion">
                <div className="public-facilities">
                    <div className="container">
                        <h2>공공시설</h2>
                        <ul>
                            <li>
                                <a href="#">
                                    <strong>도서관</strong>
                                    <span>위치: 의성읍</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <strong>체육관</strong>
                                    <span>위치: 의성읍</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <strong>문화센터</strong>
                                    <span>위치: 의성읍</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <strong>어린이집</strong>
                                    <span>위치: 의성읍</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="promotion-section">
                    <PromotionSlider />
                </div>
            </div>
            <div className="container2">
                <h1 className="main2">
                    우리가 몰랐던 아름다운 우리 의성을 소개합니다!
                </h1>
            </div>
            <div className="container3">
                <div className="box1">
                    <h2>관광명소</h2>
                    <TourismSlider />
                </div>
                <div className="box2">
                    <h2>편의시설</h2>
                    <p>의성의 편의시설을 소개합니다.</p>
                    <a href="#">자세히 보기</a>
                </div>
            </div>
        </main>
    );
}

export default App;