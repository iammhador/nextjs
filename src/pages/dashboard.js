import React from "react";
import RootLayout from "../components/Layouts/RootLayout";
import AdminLayout from "../components/Layouts/AdminLayout";

export default function Dashboard() {
  return (
    <div>
      <h1>Admin with navbar</h1>
    </div>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <AdminLayout>{page}</AdminLayout>
    </RootLayout>
  );
};
