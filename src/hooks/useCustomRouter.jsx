import { useRouter } from "next/router";
import React from "react";
export default function UseCustomRouter({ pathname }) {
  const router = useRouter();

  function redirect() {
    return router.push(pathname);
  }

  return redirect();
}
