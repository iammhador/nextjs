import React from "react";
import AdminLayout from "../components/Layouts/AdminLayout";

export default function Seller() {
  return (
    <div>
      <h1>Seller</h1>
    </div>
  );
}
Seller.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
