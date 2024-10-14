import { useField } from "formik";
import TextField from "@mui/material/TextField";


const Customeinput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>{label}</label>
      <TextField {...field} {...props} margin="normal" required fullWidth />
      {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>
  );
};

export default Customeinput;
