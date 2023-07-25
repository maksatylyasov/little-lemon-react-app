import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import ShoppingCartPriceDetails from "./ShoppingCartPriceDetails";

const PaymentPage = (props) => {
  const [areaCode, setareCode] = React.useState(1);

  const handleChange = (event) => {
    setareCode(event.target.value);
  };
  return (
    <>
      <Header className="Header">
        <Nav addToCartLength={props.addToCartLength} className="Nav"></Nav>
      </Header>
      <section>
        <h2>Check Out</h2>
        <article>
          <div>
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: 150 }}
              margin="dense"
            >
              <Grid
                container
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={2}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Area Code
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={areaCode}
                    onChange={handleChange}
                    label="Area Code"
                    variant="outlined"
                    fullWidth
                  >
                    <MenuItem value={1}>+1 United States</MenuItem>
                    <MenuItem value={33}>+33 France</MenuItem>
                    <MenuItem value={44}>+44 United Kingdom</MenuItem>
                    <MenuItem value={81}>+81 Japan</MenuItem>
                  </Select>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    required
                    id="standard-required"
                    label="phone"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    required
                    id="email"
                    label="email"
                    type="email"
                  />
                </Grid>
                <Grid item xs={6}></Grid>
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    required
                    id="firstname"
                    label="Firstname"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    fullWidth
                    required
                    id="lastname"
                    label="Lastname"
                    placeholder="Lastname"
                  />
                </Grid>
              </Grid>
            </FormControl>
          </div>
        </article>
        <article>
          <ShoppingCartPriceDetails></ShoppingCartPriceDetails>
        </article>
      </section>
      <Footer />
    </>
  );
};

export default PaymentPage;
