import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import { CardContent, Typography } from "@mui/material";

export default function MediaCard(props) {
  const { imagePath, full_Link, alt } = props;
  return (
    <Card
      sx={{
        width: "400px",
        margin: "30px 15px",
        borderRadius: "8px",
        border: "1px solid #e0e0e0",
        boxShadow: "none",
      }}
    >
      <CardMedia component="img" height="300" image={imagePath} alt={alt} />
      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {alt}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          onClick={() => window.open(full_Link)}
          size="medium"
          sx={{
            margin: "auto",
            backgroundColor: "#001",
            color: "#fff",
            textTransform: "Capitalize",
            marginRight: "10px",
            "&:hover": {
              backgroundColor: "#334466",
            },
          }}
        >
          full resolution
        </Button>
      </CardActions>
    </Card>
  );
}
