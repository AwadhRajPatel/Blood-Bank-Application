import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            <strong className="bd">Infrastructure Setup: </strong> Establish a suitable facility
            equipped with separate areas for donation, testing, processing, and
            storage. Ensure the facility meets regulatory standards for blood
            banking, including safety and sanitation measures.<br></br>
            <strong className="bd">Staffing Hire: </strong>
            trained personnel including phlebotomists, laboratory technicians,
            administrative staff, and medical professionals (if required).
            Provide regular training on blood collection procedures, safety
            protocols, and handling techniques.<br></br>
            <strong className="bd">Storage and Inventory Management: </strong>
            Maintain appropriate temperature and storage conditions for blood
            components to ensure their viability. Implement a robust inventory
            management system to track blood units, expiration dates, and usage.
            Rotate stock regularly to minimize wastage and ensure the
            availability of fresh blood products  <hr /><strong className="str">Distribution and Transfusion: </strong>
            Coordinate with hospitals, clinics, and medical facilities to meet
            their blood supply needs. Provide timely delivery of requested blood
            components while adhering to transportation and handling guidelines.
            Monitor usage patterns to anticipate demand and adjust inventory
            levels accordingly. Quality<br></br> <strong className="str">Assurance and Regulatory Compliance: </strong>
            Conduct regular quality control checks on equipment, processes, and
            blood products. Adhere to regulatory requirements regarding blood
            banking, including FDA (or relevant regulatory body) guidelines.
            Maintain accurate records of donor information, testing results, and
            blood product disposition. <hr /><strong className="bd">Community Engagement and Education: </strong>
            Engage with the community through educational programs to raise
            awareness about the importance of blood donation. Provide
            information on eligibility criteria, donation process, and the
            impact of blood donation on saving lives. Recognize and appreciate
            donors for their contributions to motivate ongoing participation.<br></br>
            <strong className="str">Emergency Preparedness :</strong> Develop contingency plans for handling
            emergencies such as natural disasters or mass casualty incidents.
            Establish protocols for mobilizing additional resources and
            coordinating with other blood banks or organizations during crises.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
