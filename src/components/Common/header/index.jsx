import { useMemo } from 'react';
import './index.scss';

const HeaderCommon = () => {
  const menus = useMemo(
    () => [
      {
        href: 'about-me',
        label: 'About me',
      },
      {
        href: 'technologies',
        label: 'Technologies',
      },
      {
        href: 'work-experience',
        label: 'Work Experience',
      },
    ],
    [],
  );

  const handleNavigate = (type) => {
    if (type === 'linkedin') {
      window.open('https://www.linkedin.com/in/hu%E1%BB%B3nh-qu%E1%BB%91c-nguy%C3%AAn-a5b11b1b9/');
    }
    if (type === 'fb') {
      window.open('https://www.facebook.com/quocnguyen.huynh.777/');
    }
  };
  const handleScroll = (href) => {
    const element = document.getElementById(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className='header-container'>
        <div className='header-container__item'>I'M NGUYÊN</div>
        <div className='header-container__item'>
          {menus.map((item, index) => (
            <span key={index} onClick={() => handleScroll(item.href)}>
              {item.label}
            </span>
          ))}
        </div>
        <div className='header-container__item'>
          <i className='fa-brands fa-linkedin' onClick={() => handleNavigate('linkedin')}></i>
          <i className='fa-brands fa-facebook' onClick={() => handleNavigate('fb')}></i>
        </div>
      </div>
    </>
  );
};
export default HeaderCommon;
