import validateProps from "@/utils/validateProps";
import PropTypes from "prop-types";

const auth = async (authType, body, headers) => {
  validateProps(auth, { authType, body });

  try {
    const res = await fetch(`https://api01.f8team.dev/api/auth/${authType}`, {
      method: "POST",
      headers: headers || {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!res.ok) throw res;

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

auth.propTypes = {
  authType: PropTypes.oneOf(["login", "register"]).isRequired,
  body: PropTypes.object.isRequired,
};

export default auth;
