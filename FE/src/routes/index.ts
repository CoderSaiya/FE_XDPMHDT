import Home from "../pages/Home";
import { RouteType } from "../types";

const publicRoute: RouteType[] = [
  {
    path: "/",
    component: Home,
  },
//   {
//     path: "/profile",
//     component: ProfilePage,
//   },
//   {
//     path: "/chat",
//     component: ChatPage,
//     layout: NoLayout,
//   },
//   {
//     path: "/ads",
//     component: AdsPage,
//   },
//   {
//     path: "/admin",
//     component: AdminPage,
//     layout: AdminLayout,
//   },
//   {
//     path: "/auth/login",
//     component: LoginPage,
//   },
//   {
//     path: "/auth/register",
//     component: RegisterPage,
//   },
//   {
//     path: "/product",
//     component: ProductPage,
//   },
//   {
//     path: "/product/productDetail/:id",
//     component: ProductDetailPage,
//   },
//   {
//     path: "/post",
//     component: PostPage,
//   },
];

const privateRoute: RouteType[] = [
];

export { privateRoute, publicRoute };
