import Swal from "sweetalert2";

function myAlert(icon, title, text = "") {
  Swal.fire({
    icon: icon,
    title: title,
    text: text,
  });
}

export default myAlert;
