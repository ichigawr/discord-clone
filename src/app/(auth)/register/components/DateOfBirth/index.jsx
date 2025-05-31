import { useState } from "react";
import PropTypes from "prop-types";

import validateProps from "@/utils/validateProps";

import ErrorMessage from "@/pages/Auth/ErrorMessage";
import styles from "@/pages/Auth/Auth.module.css";

function DateOfBirth({ errorMessage, setValue }) {
  validateProps(DateOfBirth, { errorMessage });

  const [dateValues, setDateValues] = useState({
    month: "",
    day: "",
    year: "",
  });

  const daysInMonth = new Date(
    dateValues.year || 1970,
    (dateValues.month || 0) + 1,
    0
  ).getDate();

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    const newDateValues = { ...dateValues, [name]: value };
    const { month, day, year } = newDateValues;
    setDateValues(newDateValues);

    if (month !== "" && day !== "" && year !== "") {
      setValue("dateOfBirth", new Date(year, month, day), {
        shouldValidate: true,
      });
    }
  };

  return (
    <fieldset
      className={`${styles.fieldWrapper} ${styles.dateOfBirth} ${styles.marginBottom20}`}
    >
      <legend className={errorMessage ? styles.error : ""}>
        Date of birth <ErrorMessage errorMessage={errorMessage} />
      </legend>
      <div className={styles.selects}>
        <select
          name="month"
          id="month"
          value={dateValues.month}
          onChange={handleDateChange}
        >
          <option value="" hidden>
            Month
          </option>
          {[...Array(12)].map((_, i) => (
            <option key={i} value={i}>
              {new Date(0, i).toLocaleString("en", { month: "long" })}
            </option>
          ))}
        </select>

        <select
          name="day"
          id="day"
          value={dateValues.day}
          onChange={handleDateChange}
        >
          <option value="" hidden>
            Day
          </option>
          {[...Array(daysInMonth)].map((_, i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>

        <select
          name="year"
          id="year"
          value={dateValues.year}
          onChange={handleDateChange}
        >
          <option value="" hidden>
            Year
          </option>
          {[...Array(100)].map((_, i) => {
            const currentYear = new Date().getFullYear();

            return (
              <option key={i} value={currentYear - i}>
                {currentYear - i}
              </option>
            );
          })}
        </select>
      </div>
    </fieldset>
  );
}

DateOfBirth.propTypes = {
  errorMessage: PropTypes.string,
};

export default DateOfBirth;
