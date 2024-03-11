import HomeLayout from "@/layout/HomeLayout";

import DiscoverProduct from "./home/DiscoverProduct";

export default function ClientPage() {
  return (
    <>
      <DiscoverProduct />
    </>
  );
}

ClientPage.getLayout = function getLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
