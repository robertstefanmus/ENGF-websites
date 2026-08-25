document.addEventListener("DOMContentLoaded", () => {

  /*
   * Replace YOUR_FORM_ID with the ID provided
   * by Formspree.
   *
   * Example:
   *
   * Form endpoint:
   * https://formspree.io/f/xabcdxyz
   *
   * Form ID:
   * xabcdxyz
   */

  const FORM_ID = "myegrjpj";


  if (
    !FORM_ID ||
    FORM_ID === "YOUR_FORM_ID"
  ) {
    console.warn(
      "Formspree is not configured. Replace YOUR_FORM_ID in contact.js."
    );

    return;
  }


  if (typeof window.formspree !== "function") {
    console.error(
      "Formspree AJAX library could not be loaded."
    );

    return;
  }


  window.formspree(
    "initForm",
    {
      formElement: "#contact-form",
      formId: FORM_ID
    }
  );

});