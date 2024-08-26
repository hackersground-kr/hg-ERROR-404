import React from "react";
import "./CommunityPage.css"; // CSS 파일 임포트

function CommunityPage() {
    return (
        <div className="container">
            <h1>커뮤니티</h1>
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
        </div>
    );
}

export default CommunityPage;