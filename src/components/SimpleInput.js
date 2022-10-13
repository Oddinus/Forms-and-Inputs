import useInput from "../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const emailIsNotEmpty = (value) => value.includes("@");

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurrHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurrHandler,
    reset: resetLastNameInput,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurrHandler,
    reset: resetEmailInput,
  } = useInput(emailIsNotEmpty);

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid && enteredLastNameIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    if (!enteredLastNameIsValid) {
      return;
    }

    if (!enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetLastNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={nameInputClasses}>
          <label htmlFor="name">Twoje imię</label>
          <input
            type="text"
            id="fristName"
            onChange={nameChangedHandler}
            onBlur={nameBlurrHandler}
            value={enteredName}
          />
          {nameInputHasError && <p className="error-text">Podaj imię!</p>}
        </div>

        <div className={lastNameInputClasses}>
          <label htmlFor="name">Twoje nazwisko</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangedHandler}
            onBlur={lastNameBlurrHandler}
            value={enteredLastName}
          />
          {lastNameInputHasError && (
            <p className="error-text">Podaj nazwisko!</p>
          )}
        </div>
      </div>

      <div className={emailInputClasses}>
        <label htmlFor="email">Twój e-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangedHandler}
          onBlur={emailBlurrHandler}
          value={enteredEmail}
        />
        {emailInputHasError && <p className="error-text">Podaj email!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
