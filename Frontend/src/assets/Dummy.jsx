import { FiGift, FiHome, FiMail, FiPercent, FiShoppingBag, FiShoppingCart, FiTruck , FiPackage} from "react-icons/fi";
import { bannerStyles } from './dummyStyles'



// BANNER HOME
export const features = [
    { icon: <FiTruck className={bannerStyles.featureIcon} />, text: 'Fast Delivery' },
    { icon: <FiHome className={bannerStyles.featureIcon} />, text: 'Self-Pickup' },
    { icon: <FiPercent className={bannerStyles.featureIcon} />, text: 'Best Prices' },
    { icon: <FiShoppingCart className={bannerStyles.featureIcon} />, text: 'Easy Shopping' },
];


// NAVBAR
export const navItems = [
    { name: 'Home', path: '/', icon: <FiHome className="text-xl" /> },
    { name: 'Items', path: '/items', icon: <FiShoppingBag className="text-xl" /> },
    { name: 'Contact', path: '/contact', icon: <FiMail className="text-xl" /> },
    { name: 'My Orders', path: '/myorders', icon: <FiPackage className="text-xl" /> },
];