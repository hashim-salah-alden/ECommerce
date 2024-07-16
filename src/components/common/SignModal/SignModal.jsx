import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import PermIdentityOutlined from "@mui/icons-material/PermIdentityOutlined";
import SignInForm from "../../forms/SignInForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "480px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function SignModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <PermIdentityOutlined onClick={handleOpen} />

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <SignInForm handleClose={handleClose} />
        </Box>
      </Modal>
    </div>
  );
}
