import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {

  top: "50%",
  left: "50%",
//   backgroundColor:"#0ce0e7",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ProfileData() {
    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      ></Modal> */}

      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2" sx={{backgroundColor:"#0950e9", textAlign:"center"}}>
          Profile Details
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          First Name:{" "}
          {localStorage.getItem("firstName")
            ? localStorage.getItem("firstName")
            : "NA"}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Last Name:{" "}
          {localStorage.getItem("lastName")
            ? localStorage.getItem("lastName")
            : "NA"}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Email ID:{" "}
          {localStorage.getItem("email") ? localStorage.getItem("email") : "NA"}
        </Typography>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Password:{" "}
          {localStorage.getItem("password")
            ? localStorage.getItem("password")
            : "NA"}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Accepted Terms And Conditions:{" "}
          {localStorage.getItem(" terms") ? "NO" : "YES"}
        </Typography>
      </Box>
    </div>
  );
}

export default ProfileData;
