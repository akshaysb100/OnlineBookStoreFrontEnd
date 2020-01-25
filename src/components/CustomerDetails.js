import React, { Component } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import "./CustomerDetails.css";
import ShoppingCart from "./ShoppingCart";
import "./PlaceOrder.css";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import ListSubheader from '@material-ui/core/ListSubheader';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  margin: {
    margin: theme.spacing(3),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)
  },
  boxStyle: {
    bgcolor: "background.paper",
    m: 1,
    border: 1,
    style: { width: "40rem", color: "grey", height: "28rem" },
    color: grey
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: 200
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

class CustomerDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameError: "",
      phoneNumber: "",
      phoneNumberError: "",
      pincode: "",
      pincodeError: "",
      locality: "",
      city: "",
      country: "",
      cityError: "",
      disableForm: false,
      disabledOrderSummary: false,
      form: true,
      listOfData: {},
      customerDetails: [],
      disabledCheckoutButton: false
    };
  }

  valid() {
    if (!this.state.name.match("[A-Z]{1}[a-zA-Z]")) {
      this.setState({ nameError: "Invalid Name" });
      this.setState({ name: " " });
      setTimeout(() => {this.setState({nameError:" "}) }, 3000);

      return false;
    } else if (!this.state.phoneNumber.match("[7-9]{1}[0-9]{9}")) {
      this.setState({ phoneNumberError: "Invalid Phone Number" });
      setTimeout(() => {this.setState({phoneNumberError:" "}) }, 3000);
      return false;
    } else if (!this.state.pincode.match("^[0-9]{6}$|^[0-9]{3}\\s{1}[0-9]{3}$")) {
      this.setState({ pincodeError: "Invalid Pincode" });
      setTimeout(() => {this.setState({pincodeError:" "}) }, 3000);
      return false;
    } else if (!this.state.city.match("[A-Z][a-z]{2,}")) {
      this.setState({ cityError: "Invalid City Name" });
      setTimeout(() => {this.setState({cityError:" "}) }, 3000);
      return false;
    }
    return true;
  }

  selectCountry() {
    this.setState({ country: "india" });
  }
  selectOtherCountry() {
    this.setState({ country: "other" });
  }
  submit() {
    if (this.valid() == true) {
      this.state.listOfData = {
        customerName: this.state.name,
        mobileNumber: this.state.phoneNumber,
        pincode: this.state.pincode,
        address: this.state.address,
        country: this.state.country,
        city: this.state.city
      };
      this.setState({ disabledCheckoutButton: true });
      this.state.customerDetails.push(this.state.listOfData);
      localStorage.setItem(
        "customerData",
        JSON.stringify(this.state.customerDetails)
      );
      let totalAmount = 0;
      let size = JSON.parse(localStorage.getItem("abc")).length;
      this.setState({ disableForm: true });
      for (let i = 0; i < size; i++) {
        totalAmount =
          totalAmount + JSON.parse(localStorage.getItem("abc"))[i].price;
      }
      console.log(totalAmount);
      if (JSON.parse(localStorage.getItem("customerData"))[0].country == "india") {
        totalAmount = totalAmount + 50;
      } else {
        totalAmount = totalAmount + 200;
      }

      localStorage.setItem("price", JSON.stringify(totalAmount));
      this.setState({ disabledOrderSummary: true });
    }
  }

  render() {
    return (
      <div>
        <div>
          <Box
            display="flex"
            justifyContent="center"
            borderColor="grey"
            {...useStyles.boxStyle}
            className="boxwala"
          >
            <Paper className="paper">
              <br />
              <Typography
                className="customerTitle"
                component="h6"
                variant="h6"
                align="left"
                style={{ marginLeft: "2em" }}
              >
                Customer Details
              </Typography>
              <React.Fragment></React.Fragment>
              <br />
              <div className="nameBox" style={{ float: "left" }}>
                <TextField
                  label="Name"

                  id="outlined-start-adornment"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    )
                  }}
                  variant="outlined"
                  onChange={event => {
                    this.setState({ name: event.target.value });
                  }}
                  disabled={this.state.disableForm}
                />
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginTop: "1%",
                    marginBottom: "-3em",
                    paddingLeft: "3em"
                  }}
                >
                  {this.state.nameError}
                </p>
              </div>
              <div style={{ float: "left", marginBottom: "1em" }}>
                <TextField
                  label="Phone number"
                  style={{ marginLeft: "4em", marginBottom: "3em" }}
                  id="outlined-start-adornment"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    )
                  }}
                  variant="outlined"
                  onChange={event => {
                    this.setState({ phoneNumber: event.target.value });
                  }}
                  disabled={this.state.disableForm}
                />
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    marginTop: "-15%",
                    paddingLeft: " 40%"
                  }}
                >
                  {this.state.phoneNumberError}
                </p>
              </div>
              <div
                className="nameBox"
                style={{ float: "left", marginBottom: "3em" }}
              >
                <TextField
                  label="PinCode"
                  id="outlined-start-adornment"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    )
                  }}
                  variant="outlined"
                  onChange={event => {
                    this.setState({ pincode: event.target.value });
                  }}
                  disabled={this.state.disableForm}
                />
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    paddingLeft: "3em"
                  }}
                >
                  {this.state.pincodeError}
                </p>
              </div>
              <div style={{ float: "left" }}>
                <TextField
                  label="Locality"
                  id="outlined-start-adornment"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    )
                  }}
                  style={{ marginLeft: "4em" }}
                  variant="outlined"
                  disabled={this.state.disableForm}
                />
              </div>
              <div className="nameBox">
                <TextField
                  label="Address"
                  id="outlined-start-adornment"
                  className="longDetailsBox"
                  style={{ marginTop: "-5%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    )
                  }}
                  variant="outlined"
                  onChange={event => {
                    this.setState({ address: event.target.value });
                  }}
                  disabled={this.state.disableForm}
                />
              </div>
              <div
                className="nameBox"
                style={{ marginTop: "1em", float: "left" }}
              >
                <TextField
                  label="City/Town"
                  className="detailsBox"
                  id="outlined-start-adornment"
                  style={{ marginTop: "-11%" }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    )
                  }}
                  variant="outlined"
                  onChange={event => {
                    this.setState({ city: event.target.value });
                  }}
                  disabled={this.state.disableForm}
                />
                <p
                  style={{
                    color: "red",
                    fontSize: "12px",
                    paddingLeft: "3em",
                    marginTop: "0em"
                  }}
                >
                  {this.state.cityError}
                </p>
              </div>
              <div style={{ marginTop: "-2%" }}>
                <TextField
                  label="Landmark"
                  id="outlined-start-adornment"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start"></InputAdornment>
                    )
                  }}
                  style={{ marginLeft: "4em" }}
                  variant="outlined"
                  disabled={this.state.disableForm}
                />
              </div>
              <div>
                <div className="country">
                  <FormControl className="formControl" disabled={this.state.disableForm}>
                    <InputLabel htmlFor="grouped-select">Country</InputLabel>
                    <Select value={this.state.country}
                            onChange={(e) => this
                                .setState({country: e.target.value})} input={<Input id="grouped-select" />}>
                      <MenuItem value="india"  >INDIA</MenuItem>
                      <MenuItem value="other"  >OTHER</MenuItem>
                    </Select>
                  </FormControl>
                </div>
              </div>
              <p
                style={{
                  color: "red",
                  fontSize: "12px",
                  paddingLeft: "3em",
                  marginTop: "0em"
                }}
              >
                {this.state.countryError}
              </p>
              <div className="checkout">
                <Button
                  variant="contained"
                  color={"primary"}
                  style={{ backgroundColor: "#0588f9", marginTop: "1em" }}
                  onClick={() => this.submit()}
                >
                  CONTINUE
                </Button>
              </div>
            </Paper>
          </Box>
        </div>
        <div className="continue" style={{display: this.state.disabledCheckoutButton ? "block" : "none"}}>
          <p style={{fontSize:"112%"}}>TOTAL PRICE :{localStorage.getItem("price")}</p>
          <Button
            variant="contained"
            color={"primary"}
            style={{
              backgroundColor: "#0588f9",
              marginTop: "0em",
              marginBottom: "17em",
              marginLeft: "17em"
            }}
          >
            CHECKOUT
          </Button>
        </div>
      </div>
    );
  }
}

export default CustomerDetails;
