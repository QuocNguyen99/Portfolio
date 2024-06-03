import React, { useState } from 'react';

export function Project() {

    return (
        <div id='projects' className='project-container'>
            <div className='project-container__title'>Personal Project</div>

            <CardComponent />

        </div>
    )
}

export const CardComponent = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleCardClick = () => {
        setPopupOpen(true);
    };

    const handleClosePopup = () => {
        setPopupOpen(false);
    };

    return (
        <div>
            <div style={cardStyle} onClick={handleCardClick}>
                <div style={headerStyle}>
                    <img
                        src="../../../pdf_logo.png"
                        alt="logo"
                        style={logoStyle}
                    />
                    <h3 style={titleStyle}>PDF Markup</h3>
                </div>
                <div style={bodyStyle}>
                    <p>A PDF editing application allowing users to effortlessly modify PDF files. It offers tools to insert, edit, and delete text, annotate documents, draw sketches, and add digital signatures. This project enhances document editing with a user-friendly interface and precise functionality..</p>
                </div>
                <div style={footerStyle}>
                    <span style={chipStyle}>Android</span>
                    <span style={chipStyle}>Kotlin</span>
                    <span style={chipStyle}>CustomView</span>
                    <span style={chipStyle}>Coroutine</span>
                    <span style={chipStyle}>Live Data</span>
                </div>
            </div>

            {isPopupOpen && (
                <div style={popupOverlayStyle} onClick={handleClosePopup}>
                    <div style={popupContentStyle}>
                        {/* <img
                            src="../../../project_pdf_maker.gif"
                            alt="Popup"
                            style={popupImageStyle}
                        /> */}
                        <video playsInline style={popupImageStyle} controls webkit-playsinline="true" playsinline="true">
                            <source src="../../../pdf_video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <button onClick={handleClosePopup} style={closeButtonStyle}>x</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    cursor: 'pointer',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
};

const headerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '16px',
};

const logoStyle = {
    width: '50px',
    heigh: '50px',
    marginRight: '16px',
};

const titleStyle = {
    margin: '0',
};

const bodyStyle = {
    marginBottom: '16px',
};

const footerStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap', // Cho phép các chip tự động xuống dòng
};

const chipStyle = {
    backgroundColor: 'black',
    color: 'white', // Thêm màu chữ để dễ đọc hơn
    borderRadius: '16px',
    padding: '8px 12px',
    marginRight: '8px',
    marginBottom: '8px', // Thêm khoảng cách dưới để các hàng cách nhau
    display: 'flex', // Đảm bảo nội dung bên trong chip được căn chỉnh chính xác
    alignItems: 'center',
};

const popupOverlayStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '1000',
};

const popupContentStyle = {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    textAlign: 'center',
};

const popupImageStyle = {
    maxWidth: '400px',
    maxHeight: '600px',
};

const closeButtonStyle = {
    position: 'absolute',
    top: '10px',
    right: '10px',
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    cursor: 'pointer',
};