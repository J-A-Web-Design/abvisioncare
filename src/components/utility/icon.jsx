import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faUser,
  faBreadSlice,
  faMugSaucer,
  faEgg,
  faUtensils,
  faCarrot,
  faBurger,
  faFish,
  faSeedling,
  faWheatAwn,
  faPlateWheat,
  faPizzaSlice,
  faPepperHot,
  faChampagneGlasses,
  faAppleWhole,
  faBowlRice,
  faCheck,
  faCircleCheck,
  faArrowRight,
  faArrowLeft,
  faArrowDown,
  faArrowUp,
  faCaretLeft,
  faCaretRight,
  faCaretDown,
  faCaretUp,
  faPaperPlane,
  faCartShopping,
  faShop,
  faBagShopping,
  faCreditCard,
  faStore,
  faShopLock,
  faCar,
  faCircleHalfStroke,
  faLocationDot,
  faLocationPin,
  faLocationCrosshairs,
  faGift,
  faHouse,
  faMagnifyingGlass,
  faImage,
  faPhone,
  faBars,
  faHeart,
  faXmark,
  faComment,
  faTruckFast,
  faFaceSmile,
  faBell,
  faCalendarDays,
  faCircleInfo,
  faFire,
  faHand,
} from '@fortawesome/free-solid-svg-icons';

import { faLemon, faBookmark } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faGoogle,
  faStripe,
  faShopify,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';

export default function Icon({ icon }) {
  switch (icon) {
    case 'Envelope':
      return <FontAwesomeIcon icon={faEnvelope} />;
    case 'User':
      return <FontAwesomeIcon icon={faUser} />;
    case 'Bread':
      return <FontAwesomeIcon icon={faBreadSlice} />;
    case 'Mug':
      return <FontAwesomeIcon icon={faMugSaucer} />;
    case 'Egg':
      return <FontAwesomeIcon icon={faEgg} />;
    case 'Utensils':
      return <FontAwesomeIcon icon={faUtensils} />;
    case 'Carrot':
      return <FontAwesomeIcon icon={faCarrot} />;
    case 'Burger':
      return <FontAwesomeIcon icon={faBurger} />;
    case 'Fish':
      return <FontAwesomeIcon icon={faFish} />;
    case 'Seedling':
      return <FontAwesomeIcon icon={faSeedling} />;
    case 'WheatAwn':
      return <FontAwesomeIcon icon={faWheatAwn} />;
    case 'PlateWheat':
      return <FontAwesomeIcon icon={faPlateWheat} />;
    case 'PizzaSlice':
      return <FontAwesomeIcon icon={faPizzaSlice} />;
    case 'PepperHot':
      return <FontAwesomeIcon icon={faPepperHot} />;
    case 'ChampagneGlasses':
      return <FontAwesomeIcon icon={faChampagneGlasses} />;
    case 'AppleWhole':
      return <FontAwesomeIcon icon={faAppleWhole} />;
    case 'BowlRice':
      return <FontAwesomeIcon icon={faBowlRice} />;
    case 'Check':
      return <FontAwesomeIcon icon={faCheck} />;
    case 'CircleCheck':
      return <FontAwesomeIcon icon={faCircleCheck} />;
    case 'ArrowRight':
      return <FontAwesomeIcon icon={faArrowRight} />;
    case 'ArrowLeft':
      return <FontAwesomeIcon icon={faArrowLeft} />;
    case 'ArrowDown':
      return <FontAwesomeIcon icon={faArrowDown} />;
    case 'ArrowUp':
      return <FontAwesomeIcon icon={faArrowUp} />;
    case 'CaretLeft':
      return <FontAwesomeIcon icon={faCaretLeft} />;
    case 'CaretRight':
      return <FontAwesomeIcon icon={faCaretRight} />;
    case 'CaretDown':
      return <FontAwesomeIcon icon={faCaretDown} />;
    case 'CaretUp':
      return <FontAwesomeIcon icon={faCaretUp} />;
    case 'PaperPlane':
      return <FontAwesomeIcon icon={faPaperPlane} />;
    case 'CartShopping':
      return <FontAwesomeIcon icon={faCartShopping} />;
    case 'Shop':
      return <FontAwesomeIcon icon={faShop} />;
    case 'BagShopping':
      return <FontAwesomeIcon icon={faBagShopping} />;
    case 'CreditCard':
      return <FontAwesomeIcon icon={faCreditCard} />;
    case 'Store':
      return <FontAwesomeIcon icon={faStore} />;
    case 'ShopLock':
      return <FontAwesomeIcon icon={faShopLock} />;
    case 'Car':
      return <FontAwesomeIcon icon={faCar} />;
    case 'CircleHalfStroke':
      return <FontAwesomeIcon icon={faCircleHalfStroke} />;
    case 'LocationDot':
      return <FontAwesomeIcon icon={faLocationDot} />;
    case 'LocationPin':
      return <FontAwesomeIcon icon={faLocationPin} />;
    case 'LocationCrosshairs':
      return <FontAwesomeIcon icon={faLocationCrosshairs} />;
    case 'Gift':
      return <FontAwesomeIcon icon={faGift} />;
    case 'House':
      return <FontAwesomeIcon icon={faHouse} />;
    case 'MagnifyingGlass':
      return <FontAwesomeIcon icon={faMagnifyingGlass} />;
    case 'Image':
      return <FontAwesomeIcon icon={faImage} />;
    case 'Phone':
      return <FontAwesomeIcon icon={faPhone} />;
    case 'Bars':
      return <FontAwesomeIcon icon={faBars} />;
    case 'Heart':
      return <FontAwesomeIcon icon={faHeart} />;
    case 'Xmark':
      return <FontAwesomeIcon icon={faXmark} />;
    case 'Comment':
      return <FontAwesomeIcon icon={faComment} />;
    case 'TruckFast':
      return <FontAwesomeIcon icon={faTruckFast} />;
    case 'FaceSmile':
      return <FontAwesomeIcon icon={faFaceSmile} />;
    case 'Bell':
      return <FontAwesomeIcon icon={faBell} />;
    case 'CalendarDays':
      return <FontAwesomeIcon icon={faCalendarDays} />;
    case 'CircleInfo':
      return <FontAwesomeIcon icon={faCircleInfo} />;
    case 'Fire':
      return <FontAwesomeIcon icon={faFire} />;
    case 'Hand':
      return <FontAwesomeIcon icon={faHand} />;
    case 'Lemon':
      return <FontAwesomeIcon icon={faLemon} />;
    case 'Bookmark':
      return <FontAwesomeIcon icon={faBookmark} />;
    case 'Facebook':
      return <FontAwesomeIcon icon={faFacebook} />;
    case 'Instagram':
      return <FontAwesomeIcon icon={faInstagram} />;
    case 'Youtube':
      return <FontAwesomeIcon icon={faYoutube} />;
    case 'Google':
      return <FontAwesomeIcon icon={faGoogle} />;
    case 'Stripe':
      return <FontAwesomeIcon icon={faStripe} />;
    case 'Shopify':
      return <FontAwesomeIcon icon={faShopify} />;
    case 'Github':
      return <FontAwesomeIcon icon={faGithub} />;
  }
}
