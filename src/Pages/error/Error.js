import "./error.css";
import img from "../error/error1.jpg";
import { useNavigate } from "react-router";
import { useEffect } from "react";

export default function Error() {
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, [navigate]);

  return (
    <div className="error">
      <title>Error Page</title>
      <div>
        <img src={img} alt="error"></img>
        <div>
          <span>You will be redirect in home page after 3 seconds...</span>
        </div>
      </div>
    </div>
  );
}
