import { Box, TextField } from "@mui/material";

type CustomCardInputProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value: string;
  label: string;
  maxRows: number;
  widthPercentage: string;
};

export function CustomCardInput({
  name,
  label,
  handleInputChange,
  value,
  maxRows,
  widthPercentage,
}: CustomCardInputProps) {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        marginBottom: "1rem!important",
        marginTop: "0.8rem",
        padding: "0",
        color: "white",
        width: widthPercentage,
        fontFamily: "PeroBold",
        "& .MuiFormControl-root": {
          backgroundColor: "#001229!important",
          padding: "0px!important",
          width: "100%!important",
        },
        "& .MuiOutlinedInput-input": {
          fontFamily: "PeroBold",
          color: "white",
        },
        "& .MuiOutlinedInput-multiline": {
          padding: "0px",
        },
        "& .MuiInputLabel-root": {
          color: "white",
        },
      }}
    >
      <TextField
        rows={maxRows}
        id="outlined-password-input"
        label={label}
        type="text"
        onChange={handleInputChange}
        value={value}
        multiline
        sx={{
          color: "white!important",
          boxShadow: "none!important",
          borderRadius: "4px!important",
          border: "none",
          padding: "12px",
          fontWeight: 500,
          fontSize: "0.875rem",
          fontFamily: "PeroRegular!important",
        }}
        name={name}
      />
    </Box>
  );
}
