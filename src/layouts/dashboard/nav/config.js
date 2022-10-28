// component
import SvgColor from '../../../components/svg-color';

// ----------------------------------------------------------------------
// 네비게이션 카테고리,항목,메뉴 생성
const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
  {
    title: '회원관리',
    path: '/dashboard/user',
    icon: icon('ic_user'),
  },
  {
    title: '챌린지관리',
    path: '/dashboard/challenge',
    icon: icon('ic_cart'),
  },
  {
    title: '문의관리',
    path: '/dashboard/requests',
    icon: icon('ic_blog'),
  },
  { title: 'detail test',
    path: 'dashboard/reqeusts/details',
  }
  // {
  //   title: 'login',
  //   path: '/login',
  //   icon: icon('ic_lock'),
  // },
  // {
  //   title: 'Not found',
  //   path: '/404',
  //   icon: icon('ic_disabled'),
  // },
];

export default navConfig;
