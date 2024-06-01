import './index.scss';
const FooterCommon = () => {
  const handleNavigate = (type) => {
    if (type === 'linkedin') {
      window.open('https://www.linkedin.com/in/hu%E1%BB%B3nh-qu%E1%BB%91c-nguy%C3%AAn-a5b11b1b9/');
    }
    if (type === 'fb') {
      window.open('https://www.facebook.com/quocnguyen.huynh.777/');
    }
  };
  return (
    <div className='footer-container'>
      <span>Feel free to contact me</span>
      <span>huynhquocnguyen99@gmail.com</span>
      <span>(+84) 0769998692</span>
      <div className='footer-container__social'>
        <i className='fa-brands fa-linkedin' onClick={() => handleNavigate('linkedin')}></i>
        <i className='fa-brands fa-facebook' onClick={() => handleNavigate('fb')}></i>
      </div>
    </div>
  );
};
export default FooterCommon;
