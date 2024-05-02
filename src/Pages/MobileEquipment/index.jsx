import React from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../../Components/Layout";
import Form from "../../Components/Form";

//const ArEx = () => {
//return (
//<BrowserRouter>
//<Routes>
//<Route path="/arrivals" element={<MobileEquipment />} />
//<Route path="/exits" element={<MobileEquipment />} />
//</Routes>
//</BrowserRouter>
//);
//};

function MobileEquipment() {
  return (
    <Layout>
      <h1 className="h-10 text-center">MobileEquipment</h1>
      <h2 className="h-10"> ¿What will you report here?</h2>
      <span className="h-15">
        In this page, you will input all entries of mobile equipment that arrive
        at the company, as well as the departure of mobile equipment. Keep in
        mind that if equipment arrives to replace another, you must register
        both the incoming and outgoing equipment to complete the process
      </span>

      <Form arrivals="/arrivals" exits="/exits"></Form>
    </Layout>
  );
}

export default MobileEquipment;
