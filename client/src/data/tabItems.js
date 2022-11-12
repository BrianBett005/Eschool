import { FaHome } from "react-icons/fa";
import { BsPersonCircle } from "react-icons/bs";
import { BiLogOut } from "react-icons/bi";

export const tabItems = [
  { url: "/", title: "Overview", icon: <FaHome />, id: 1 },
  { url: "/edit_school", title: "My School", icon: <BsPersonCircle />, id: 2 },
  {
    url: "/management",
    title: "Management",
    icon: <BsPersonCircle />,
    id: 3,
  },
  {
    url: "/teachers",
    title: "Teachers",
    icon: <BsPersonCircle />,
    id: 4,
  },
  {
    url: "/students",
    title: "Students",
    icon: <BsPersonCircle />,
    id: 5,
  },
  {
    url: "/events",
    title: "Events",
    icon: <BsPersonCircle />,
    id: 5,
  },

  {
    url: "/logout",
    title: "Logout",
    icon: <BiLogOut />,
    id: 6,
  },
];
