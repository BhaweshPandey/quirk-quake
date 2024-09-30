// import { useStores } from '@/models';
// import { observer } from 'mobx-react-lite';
// import Home from './landing';
import LandingPage from './landing-page-7';

const HomePage = () => {
  // const { userStore, i18nStore } = useStores();
  // userStore.loginUser('admin@admin.com', 'admin@123').then((res) => {
  //   if (res.ok) {
  //     console.log('logged in successfully');
  //     userStore.getLoginUserData().then(() => {
  //       console.log(userStore?.loggedInUserData);
  //     });
  //   } else {
  //     console.log('failure');
  //     console.log(res);
  //   }
  // });
  // i18nStore.getCurrentLanguage();
  return (
    <div 
    // dir={i18nStore.isRTL ? 'rtl' : 'ltr'}
    >
      <LandingPage />
    </div>
  );
};
export default HomePage;
