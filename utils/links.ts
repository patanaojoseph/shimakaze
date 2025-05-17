// type NavLink = {
//   href: string;
//   label: string;
// };

// export const links: NavLink[] = [
//   { href: "/", label: "home" },
//   { href: "/about", label: "about" },
//   { href: "/products", label: "products" },
//   { href: "/favorites", label: "favorites" },
//   { href: "/cart", label: "cart" },
//   { href: "/orders", label: "orders" },
// ];

import { IconType } from "react-icons";
import {
  IoHomeOutline,
  IoInformationCircleOutline,
  IoBagOutline,
  IoHeartOutline,
  IoCartOutline,
  IoReceiptOutline,
} from "react-icons/io5";

type NavLink = {
  href: string;
  label: string;
  icon?: IconType; // Use the *component type*, not JSX
};

export const links: NavLink[] = [
  { href: "/", label: "home", icon: IoHomeOutline },
  { href: "/about", label: "about", icon: IoInformationCircleOutline },
  { href: "/products", label: "products", icon: IoBagOutline },
  { href: "/favorites", label: "favorites", icon: IoHeartOutline },
  { href: "/cart", label: "cart", icon: IoCartOutline },
  { href: "/orders", label: "orders", icon: IoReceiptOutline },
];
