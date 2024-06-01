import FooterCommon from 'base/components/Common/footer';
import HeaderCommon from 'base/components/Common/header';

// eslint-disable-next-line react/prop-types
const DefaultLayout = ({ content }) => {
  return (
    <>
      <HeaderCommon />
      {content}
      <FooterCommon />
    </>
  );
};
export default DefaultLayout;
