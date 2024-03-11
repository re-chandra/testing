import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";
import axios from "axios";
import Cookies from "js-cookie";
import dayjs from "dayjs";
import { calculateTimeLeft } from "@/utils";

const setSession = (accessToken) => {
  if (accessToken) {
    localStorage.setItem("user_token", accessToken);
    localStorage.setItem("login_time", new Date().getTime());
    axios.defaults.headers.common.Authorization = `${accessToken}`;
  } else {
    localStorage.removeItem("user_token");
    localStorage.removeItem("login_time");
    delete axios.defaults.headers.common.Authorization;
  }
};

function checkLogin(token) {
  if (typeof window !== "undefined" && window.localStorage) {
    const accessToken = window.localStorage.getItem("user_token") || token;
    const loginTime = localStorage.getItem("login_time");
    if (accessToken && loginTime) {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - parseInt(loginTime);
      const hoursElapsed = elapsedTime / (1000 * 60 * 60);
      return hoursElapsed < 24;
    }
    return false;
  } else {
    return false;
  }
}

export default function ContextWrapper({ children }) {
  const [isLogin, setIsLogin] = useState(checkLogin());
  const [isLoading, setIsLoading] = useState(true);
  const [endTime, setEndtime] = useState();
  const [timeLeft, setTimeLeft] = useState();
  const [toTime, setToTime] = useState(null);
  const [fromTime, setFromTime] = useState(null);
  const [isCheckListDrawerOpen, setisCheckListDrawerOpen] = useState(true);
  const [isMainlayOutDrawerOpen, setisMainlayOutDrawerOpen] = useState(true);
  const [selectedDate, setSelectedDate] = useState(null);
  const [whiteListRefresher, setWhiteListRefresher] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [initialTimeSlot, setinitialTimeSlot] = useState("");
  const [logoutTimeout, setLogoutTimeout] = useState(null);
  const [lastActivityTime, setLastActivityTime] = useState(
    new Date().getTime()
  );
  const handleActivity = () => {
    setLastActivityTime(new Date().getTime());
  };


  useEffect(() => {
    const inactivityTimer = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTime = currentTime - lastActivityTime;
      const minutesElapsed = elapsedTime / (1000 * 60);
      if (minutesElapsed >= 60 && isLogin) {
        handleLogout();
      }
    }, 1000 * 60); // Check every minute

    return () => clearInterval(inactivityTimer);
  }, [isLogin, lastActivityTime]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("user_token")) {
        setIsLogin(checkLogin());
      } else {
        setIsLogin(false);
      }
    }
  }, []);

  useEffect(() => {
    if (endTime) {
      const timer = setTimeout(() => {
        setTimeLeft(calculateTimeLeft(endTime * 1000));
      }, 1000);
      return () => clearTimeout(timer);
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      if (!checkLogin()) {
        handleLogout();
      }
    }, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    clearTimeout(logoutTimeout);
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_token");
    localStorage.removeItem("temp_user_token");
    Cookies.remove("user_token");
    data.userLogIn(false, null);
    window.open("/", "_self");
  };

  const data = {
    userLoggedIn: isLogin,
    timeLeft,
    setTimeLeft,
    setEndtime,
    toTime,
    setToTime,
    fromTime,
    setFromTime,
    selectedDate,
    setSelectedDate,
    userLogIn: (type, data) => {
      setSession(data);
      setIsLogin(type);
      if (type) {
        handleActivity();
      }
    },
    userLogOut: handleLogout,
    getProfileHandler: (data) => getProfileHandler(data),
    isCheckListDrawerOpen,
    setisCheckListDrawerOpen,
    isMainlayOutDrawerOpen,
    setisMainlayOutDrawerOpen,
    whiteListRefresher,
    setWhiteListRefresher,
    activeStep,
    setActiveStep,
    initialTimeSlot,
    setinitialTimeSlot,
  };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}
