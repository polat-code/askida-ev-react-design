import Home from '../pages/home/Home';
import FAQ from '../pages/faq/FAQ';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import DetailedAdPage from '../pages/detailedAdPage/DetailedAdPage';
import ShareAd from '../pages/ShareAd';
import Dashboard from '../pages/adminPages/Dashboard';
import User from '../pages/adminPages/user/User';
import Ads from '../pages/adminPages/ads/Ads';
import MatchAdUser from '../pages/adminPages/matchAdUser/MatchAdUser';
import AllAds from '../pages/allAds';

export const pages = {
  nonAuthPages: {
    home: {
      title: 'Anasayfa',
      path: '/',
      element: <Home />,
      icon: 'fa-home'
    },
    faq: {
      title: 'SSS',
      path: '/frequently-asked-questions',
      element: <FAQ />,
      icon: 'fa-book'
    },
    contact: {
      title: 'İletişim',
      path: '/contact',
      element: <Contact />,
      icon: 'fa-circle-info'
    },
    login: {
      title: 'Kullanıcı Girişi',
      path: '/login',
      element: <Login />,
      icon: 'fa-user'
    }
  },
  userPages: {
    home: {
      title: 'Anasayfa',
      path: '/',
      element: <Home />,
      icon: 'fa-home'
    },
    faq: {
      title: 'SSS',
      path: '/frequently-asked-questions',
      element: <FAQ />,
      icon: 'fa-book'
    },
    contact: {
      title: 'İletişim',
      path: '/contact',
      element: <Contact />,
      icon: 'fa-circle-info'
    },
    allAds: {
      title: 'İlan Bul',
      path: '/ads',
      element: <AllAds />,
      icon: 'fa-home'
    },
    shareAd: {
      title: 'İlan Paylaş',
      path: '/shareAd',
      element: <ShareAd />,
      icon: 'fa-pencil'
    }
  },
  adminPages: {
    home: {
      title: 'Anasayfa',
      path: '/',
      element: <Dashboard />,
      icon: 'fa-gauge'
    },
    user: {
      title: 'Üye İşlemleri',
      path: '/user',
      element: <User />,
      icon: 'fa-users'
    },
    ads: {
      title: 'İlanlar',
      path: '/adds',
      element: <Ads />,
      icon: 'fa-house'
    },
    matchAdUser: {
      title: 'Sahiplendir',
      path: '/match',
      element: <MatchAdUser />,
      icon: 'fa-arrows-up-down-left-right'
    }
  },
  otherPages: {
    detailedAd: {
      title: 'Detaylı İlan',
      path: '/detailedAd/:id',
      element: <DetailedAdPage />,
      icon: 'fa-circle-info'
    },
    signup: {
      title: 'Üye Ol',
      path: '/signup',
      element: <Signup />,
      icon: 'fa-user'
    }
  }
};
