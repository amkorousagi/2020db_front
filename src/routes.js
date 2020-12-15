/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
import TableList from "views/TableList/TableList.js";
import Typography from "views/Typography/Typography.js";
import Icons from "views/Icons/Icons.js";
import Maps from "views/Maps/Maps.js";
import NotificationsPage from "views/Notifications/Notifications.js";
import UpgradeToPro from "views/UpgradeToPro/UpgradeToPro.js";

import Rating from "views/Custom/Rating.js";
import Insert from "views/Custom/Insert.js";
import Update from "views/Custom/Update.js";

import Join from "views/Custom/Join.js";
import Login from "views/Custom/Login.js";
import Delete_user from "views/Custom/Delete_user.js";
import Update_user from "views/Custom/Update_user.js";

import Home from "views/Custom/Home.js";
import View_all_episode from "views/Custom/View_all_episode.js";
import View_all_movie from "views/Custom/View_all_movie.js";
import View_all_knu_original from "views/Custom/View_all_knu_original.js";
import Search_result from "views/Custom/Search_result.js";
import Best from "views/Custom/Best.js";
import Average from "views/Custom/Average_rating.js";
import Rate from "views/Custom/Rate.js"
import Search_id from "views/Custom/Search_id.js"
// core components/views for RTL layout
import RTLPage from "views/RTLPage/RTLPage.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "Table List",
    rtlName: "قائمة الجدول",
    icon: "content_paste",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Typography",
    rtlName: "طباعة",
    icon: LibraryBooks,
    component: Typography,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: BubbleChart,
    component: Icons,
    layout: "/admin"
  },
  {
    path: "/maps",
    name: "Maps",
    rtlName: "خرائط",
    icon: LocationOn,
    component: Maps,
    layout: "/admin"
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,
    component: NotificationsPage,
    layout: "/admin"
  },
  {
    path: "/rtl-page",
    name: "RTL Support",
    rtlName: "پشتیبانی از راست به چپ",
    icon: Language,
    component: RTLPage,
    layout: "/rtl"
  },
  /*
  {
    path: "/upgrade-to-pro",
    name: "Upgrade To PRO",
    rtlName: "التطور للاحترافية",
    icon: Unarchive,
    component: UpgradeToPro,
    layout: "/admin"
  },
  */
  {
    path: "/login",
    name: "Login",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Login,
    layout: "/admin"
  },
  {
    path: "/rating/:account_id",
    name: "Rating",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Rating,
    layout: "/admin"
  },
  {
    path: "/insert/:account_id",
    name: "Insert",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Insert,
    layout: "/admin"
  },
  {
    path: "/update/:account_id",
    name: "Update",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Update,
    layout: "/admin"
  },
  {
    path: "/join",
    name: "Join",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Join,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Login,
    layout: "/admin"
  },
  {
    path: "/update_user/:account_id",
    name: "Update_user",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Update_user,
    layout: "/admin"
  },
  {
    path: "/delete_user/:account_id",
    name: "Delete_user",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Delete_user,
    layout: "/admin"
  },
  {
    path: "/home/:account_id",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Home,
    layout: "/admin"
  },
  {
    path: "/view_all_movie/:account_id",
    name: "View_all_movie",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: View_all_movie,
    layout: "/admin"
  },
  {
    path: "/view_all_episode/:account_id",
    name: "View_all_episode",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: View_all_episode,
    layout: "/admin"
  },
  {
    path: "/view_all_knu_original/:account_id",
    name: "View_all_knu_original",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: View_all_knu_original,
    layout: "/admin"
  },
  {
    path: "/search_result/:account_id",
    name: "Search_result",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Search_result,
    layout: "/admin"
  },
  {
    path: "/best/:account_id",
    name: "Best",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Best,
    layout: "/admin"
  },
  {
    path: "/average_rating/:account_id",
    name: "average_rating",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Average,
    layout: "/admin"
  },
  {
    path: "/rate/:account_id",
    name: "Rate",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Rate,
    layout: "/admin"
  },
  {
    path: "/search_id/:account_id",
    name: "Search_id",
    rtlName: "لوحة القيادة",
    icon: Dashboard,
    component: Search_id,
    layout: "/admin"
  }
];

export default dashboardRoutes;
