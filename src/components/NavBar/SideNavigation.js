import React from "react";
import {
  MDBSideNavLink,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBIcon,
} from "mdbreact";

import logo from "../../assets/images/pex_logo1.jpg";
import "./SideNavigation.css";

class SideNavigation extends React.Component {
  // render MDBSideNav Link
  rSNL(to, text) {
    return (
      <MDBSideNavLink to={to} onClick={this.props.onLinkClick}>
        {text}
      </MDBSideNavLink>
    );
  }

  state = {
    sideNavLeft: false,
  };

  sidenavToggle = (sidenavId) => () => {
    const sidenavNr = `sideNav${sidenavId}`;
    this.setState({
      [sidenavNr]: !this.state[sidenavNr],
    });
  };

  render() {
    const { onLinkClick } = this.props;
    return (
      <div className="white-skin" id="sidenav">
        <MDBSideNav
          logo={logo}
          bg="https://mdbootstrap.com/img/Photos/Others/sidenav4.jpg"
          mask="strong"
          fixed
          breakWidth={this.props.breakWidth}
          triggerOpening={this.props.triggerOpening}
          style={{ transition: "padding-left .3s" }}
          href="/DashBoard"
        >
          <MDBSideNavNav>
            <MDBSideNavCat
              name="Dashboards"
              id="dashboard-cat"
              icon="tachometer-alt"
            >
              {this.rSNL("/dashboards/v1", "Version 1")}
              {this.rSNL("/dashboards/v2", "Version 2")}
              {this.rSNL("/dashboards/v3", "Version 3")}
              {this.rSNL("/dashboards/v4", "Version 4")}
              {this.rSNL("/dashboards/v5", "Version 5")}
              {this.rSNL("/dashboards/v6", "Version 6")}
            </MDBSideNavCat>

            <MDBSideNavCat name="User Profile" id="pages-cat" icon="image">
              {this.rSNL("/AddUser", "Add/Edit User")}
              {this.rSNL("/UserMaintence", "User Maintence")}
            </MDBSideNavCat>

            <MDBSideNavCat name="StaticData" id="pages-cat" icon="image">
              {this.rSNL("/rawMaterials", "Raw Materials")}
              {this.rSNL("semiFinishedGoods", "Semi/Finished Goods")}
              {this.rSNL("/vendorDetails", "Vendor Details")}
              {this.rSNL("/counterPartyDetails", "CounterParty Details")}
              {this.rSNL("/warehouseDetails", "Warehouse Details")}
            </MDBSideNavCat>

            <MDBSideNavCat name="Orders" id="pages-cat" icon="image">
              {this.rSNL("/purchaseOrder", "Purchase Order")}
              {this.rSNL("/productionOrder", "Production Order")}
              {this.rSNL("/salesOrder", "Sales Order")}
              {this.rSNL("/OrderQueue", "Order Queue")}
            </MDBSideNavCat>

            <MDBSideNavCat name="Inventory" id="pages-cat" icon="image">
              {this.rSNL("/moveInInventory", "Move In")}
              {this.rSNL("/moveOutInventory", "Move Out")}
              {this.rSNL("/inventoryAdjustment", "Adjustment")}
              {this.rSNL("/queryInventory", "Query")}
            </MDBSideNavCat>

            <MDBSideNavCat name="Tender" id="pages-cat" icon="image">
              {this.rSNL("/CreateTender", "Create Tenders")}
              {this.rSNL("/ProcessTenders", "Process Tenders")}
              {this.rSNL("/Rules", "Predefined Criterias")}
              {this.rSNL('/TenderStepper', 'Stepper')}
              {this.rSNL('/Test', 'Test')}
            </MDBSideNavCat>
            <MDBSideNavCat name="Supplier" id="pages-cat" icon="image">
              {this.rSNL("/SupplierRegistration", "Registration")}
              {this.rSNL("/SupplierSubmit", "Suppilier Submit Bids")}
            </MDBSideNavCat>
          </MDBSideNavNav>
        </MDBSideNav>
      </div>
    );
  }
}

export default SideNavigation;
