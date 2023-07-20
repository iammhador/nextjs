import React from "react";
import AdminLayout from "../components/Layouts/AdminLayout";

export default function Admin() {
  return (
    <div>
      <h1>Admin Layout</h1>
    </div>
  );
}
Admin.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
