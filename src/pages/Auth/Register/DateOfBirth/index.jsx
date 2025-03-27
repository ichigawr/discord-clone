import styles from "@/pages/Auth/Auth.module.css";

function DateOfBirth({
  hasError,
  errorMessages,
  dateOfBirth,
  handleDateOfBirthChange,
}) {
  const [year, month, day] = dateOfBirth.split("-");

  return (
    <fieldset
      className={`${styles.fieldWrapper} ${styles.dateOfBirth} ${styles.marginBottom20}`}
    >
      <legend className={hasError ? styles.error : ""}>
        Date of birth {errorMessages}
      </legend>
      <div className={styles.selects}>
        <select
          name="month"
          id="month"
          required
          value={month}
          onChange={handleDateOfBirthChange}
        >
          <option value="" hidden>
            Month
          </option>
          <option value="00">January</option>
          <option value="01">February</option>
          <option value="02">March</option>
          <option value="03">April</option>
          <option value="04">May</option>
          <option value="05">June</option>
          <option value="06">July</option>
          <option value="07">August</option>
          <option value="08">September</option>
          <option value="09">October</option>
          <option value="10">November</option>
          <option value="11">December</option>
        </select>

        <select
          name="day"
          id="day"
          required
          value={day}
          onChange={handleDateOfBirthChange}
        >
          <option value="" hidden>
            Day
          </option>
          {[...Array(31)].map((_, i) => (
            <option key={i} value={String(i + 1).padStart(2, "0")}>
              {i + 1}
            </option>
          ))}
        </select>

        <select
          name="year"
          id="year"
          required
          value={year}
          onChange={handleDateOfBirthChange}
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

export default DateOfBirth;
