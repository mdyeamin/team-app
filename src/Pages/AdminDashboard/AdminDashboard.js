import React, { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import AddAProduct from "../AddAProduct/AddAProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
// import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import './AdminDashboard.css'

import ManageOrders from "../ManageOrders/ManageOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import Myorder from "../Myorder/Myorder";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";
import WelcomeDashboard from "../WelcomeDashboard/WelcomeDashboard";
import { GiDoorHandle } from 'react-icons/gi';
import { FcManager, FcRating } from 'react-icons/fc';
import { MdAddCircleOutline } from 'react-icons/md';
import { CgReorder } from 'react-icons/cg';
import { FaShopify } from 'react-icons/fa';
import { SiPaypal } from 'react-icons/si';
import { AiOutlineLogout } from 'react-icons/ai';

const AdminDashboard = () => {
  const [control, setControl] = useState("WelcomeDashboard");
  const { logOut, user, admin } = useAuth()

  return (
    <div className="admin-container">
      <div className="dashboard">
        <div className="admin-box">
          <div className="row admin-container">
            <div className="col-md-3 ">
              <div className="admin-area">

                <h6 className="dashboard">Dashboard</h6>
                <div className="dashboardprofile">
                  <img src={user?.photoURL} alt="" />
                  <p>{user.displayName}</p>
                </div>
                <div className="all-menu">
                  {admin && <li
                    onClick={() => setControl("manageorders")}
                    className="admin-menu"
                  >
                    <button><CgReorder className="ico" /> Manage Order</button>
                  </li>}

                  {user?.email && !admin && <li
                    onClick={() => setControl("myorder")}
                    className="admin-menu"
                  >
                    <button><FaShopify className="ico" /> My Order</button>
                  </li>}
                  {user?.email && !admin && <li
                    onClick={() => setControl("review")}
                    className="admin-menu"
                  >
                    <button><FcRating className="ico" />  Review</button>
                  </li>}
                  {user?.email && !admin && <li
                    onClick={() => setControl("pay")}
                    className="admin-menu"
                  >
                    <button> <SiPaypal className="ico" /> Pay</button>
                  </li>}

                  {admin && <li
                    onClick={() => setControl("AddAProduct")}
                    className="admin-menu"
                  >
                    <button><MdAddCircleOutline className="ico" /> Add A Product</button>
                  </li>}
                  {admin && <li
                    onClick={() => setControl("MakeAdmin")}
                    className="admin-menu"
                  >
                    <button><FcManager className="ico" /> Make Admin</button>
                  </li>}
                  {admin && <li
                    onClick={() => setControl("ManageProducts")}
                    className="admin-menu"
                  >
                    <button> <GiDoorHandle className="ico" /> Manage Products</button>
                  </li>}
                  <button onClick={logOut}> <AiOutlineLogout className="ico" /> Logout</button>
                </div>
              </div>
            </div>
            <div className="col-md-9 text-center">
              {control === "manageorders" && <ManageOrders></ManageOrders>}
              {control === "myorder" && <Myorder></Myorder>}
              {control === "review" && <Review></Review>}
              {control === "pay" && <Pay></Pay>}

              {control === "AddAProduct" && <AddAProduct></AddAProduct>}
              {control === "MakeAdmin" && <MakeAdmin></MakeAdmin>}
              {control === "ManageProducts" && <ManageProducts></ManageProducts>}
              {control === "WelcomeDashboard" && <WelcomeDashboard></WelcomeDashboard>}

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;