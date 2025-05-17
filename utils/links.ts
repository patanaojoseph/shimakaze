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
//   { href: "/admin/sales", label: "dashboard" },
// ];

// export const adminLinks: NavLink[] = [
//   { href: "/admin/sales", label: "sales" },
//   { href: "/admin/products", label: "my products" },
//   { href: "/admin/products/create", label: "create product" },
// ];

// ===================

import { IconType } from "react-icons";
import {
  IoHomeOutline,
  IoInformationCircleOutline,
  IoBagOutline,
  IoHeartOutline,
  IoCartOutline,
  IoReceiptOutline,
} from "react-icons/io5";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

type NavLink = {
  href: string;
  label: string;
  icon?: IconType;
};

export const links: NavLink[] = [
  { href: "/", label: "home", icon: IoHomeOutline },
  { href: "/about", label: "about", icon: IoInformationCircleOutline },
  { href: "/products", label: "products", icon: IoBagOutline },
  { href: "/favorites", label: "favorites", icon: IoHeartOutline },
  { href: "/cart", label: "cart", icon: IoCartOutline },
  { href: "/orders", label: "orders", icon: IoReceiptOutline },
  {
    href: "/admin/sales",
    label: "dashboard",
    icon: MdOutlineAdminPanelSettings,
  },
];

export const adminLinks: NavLink[] = [
  { href: "/admin/sales", label: "sales" },
  { href: "/admin/products", label: "my products" },
  { href: "/admin/products/create", label: "create product" },
];
