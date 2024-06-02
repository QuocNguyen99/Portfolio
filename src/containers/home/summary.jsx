/* eslint-disable react/no-unescaped-entities */
export function Summary() {
  const handleDownload = () => {
    const pdfUrl = './HuynhQuocNguyen.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'HuynhQuocNguyen.pdf'; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div id='about-me' className='summary-container'>
      <div className='summary-container-left'>
        <div className='summary-container-left--name'>Hello, I'm Nguyen,</div>
        <div className='summary-container-left--position'>Mobile developer</div>
        <div className='summary-container-left--des' style={{ fontSize: '22px', maxWidth: '80%', wordWrap: 'break-word' }}>
          <strong>Become a Mobile Developer who is better than me in the past.</strong>
        </div>
        <div className='summary-container-left--des' style={{ maxWidth: '80%', wordWrap: 'break-word' }} >
          Mobile Android Developer with three years of experience working on product projects serving millions of users.
          Experienced in connecting IoT devices and developing robust, user-friendly mobile applications.
          Dedicated to delivering innovative solutions and continuously enhancing technical expertise.
        </div>
        <div className='summary-container-left--btn'>
          <button onClick={handleDownload}>Download CV</button>
        </div>
      </div>
      <div className='summary-container-right'>
        <div className='summary-container-right--image'>
          <img src='./avatar.jpg' style={{ width: '210px', height: '210px', borderRadius: '50%', objectFit: 'cover' }} />
        </div>
      </div>
    </div>
  );
}
