import React, { Component } from "react";
import "../App.css";
import SideNavigation from "../components/NavBar/SideNavigation";
import TopNavigation from "../components/NavBar/TopNavigation";
import Copyrights from "../components/Footer/Footer";
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      windowWidth: 0,
      currentPage: "",
      sideNavToggled: false,
      breakWidth: 2000,
    };
  }

  componentDidUpdate(prevProps, nextProps, snapshot) {
    console.log(
      "this.props.location.pathname componentDidUpdate " +
      this.props.location.pathname
    );
    console.log(
      "prevProps.location.pathname componentDidUpdate " +
      prevProps.location.pathname
    );
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.assessLocation(this.props.location.pathname);
    }
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    this.assessLocation(this.props.location.pathname);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
    });
  };

  toggleSideNav = () => {
    if (this.state.windowWidth < this.state.breakWidth) {
      this.setState({
        sideNavToggled: !this.state.sideNavToggled,
      });
    }
  };

  assessLocation = (location) => {
    console.log(location);
    let locationString;
    switch (location) {
      // Dashboards:
      case "/dashboards/v1":
        locationString = "Dashboard v.0";
        break;
      case "/dashboards/v2":
        locationString = "Dashboard v.2";
        break;
      case "/dashboards/v3":
        locationString = "Dashboard v.3";
        break;
      case "/dashboards/v4":
        locationString = "Dashboard v.4";
        break;
      case "/dashboards/v5":
        locationString = "Dashboard v.5";
        break;
      case "/dashboards/v6":
        locationString = "Dashboard v.6";
        break;
      case "/rawMaterials":
        locationString = "Raw Materials";
        break;
      case "/semiFinishedGoods":
        locationString = "Semi Finished Goods";
        break;
      case "/AddUser":
        locationString = "Add User";
        break;
      case "/UserMaintence":
        locationString = "User Maintence";
        break;
      case "/CreateTender":
        locationString = "Tender Creation";
        break;
      case "/SupplierSubmit":
        locationString = "Supplier Submission";
        break;
      case "/Rules":
        locationString = "Predefined Criterias";
        break;
      case "/SupplierRegistration":
        locationString = "Supplier Registration";
        break;
      case "/TenderStepper":
          locationString = "Management Consultancy Tender";
          break;
      case "/Test":
            locationString = "Test";
            break;
      default:
    }
    this.setState({
      currentPage: locationString,
    });
  };

  render() {
    const dynamicLeftPadding = {
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "240px" : "0",
    };

    return (
      <div className="app">
        <div className="white-skin">
          <SideNavigation
            breakWidth={this.state.breakWidth}
            style={{ transition: "all .3s" }}
            triggerOpening={this.state.sideNavToggled}
            onLinkClick={() => this.toggleSideNav()}
          />
        </div>
        <div className="flexible-content white-skin">
          <TopNavigation
            toggle={this.state.windowWidth < this.state.breakWidth}
            onSideNavToggleClick={this.toggleSideNav}
            routeName={this.state.currentPage}
            className="white-skin"
          />
          <main style={{ ...dynamicLeftPadding, margin: "8rem 6% 6rem" }}>
            <Routes onChange={() => this.assessLocation()} />
          </main>
          <Copyrights
            style={{ ...dynamicLeftPadding, position: "fixed", width: "100%" }}
            className="d-none d-lg-block"
          />
        </div>
      </div>
    );
  }
}

export default App;
