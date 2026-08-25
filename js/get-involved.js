document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("interest-form");
  const submitButton = document.getElementById("interest-submit");
  const successMessage = document.getElementById("interest-success");
  const errorMessage = document.getElementById("interest-error");

  if (!form) {
    console.error("Get involved form not found.");
    return;
  }

  form.addEventListener("submit", async function (event) {
    // IMPORTANT:
    // prevents browser from going to Formspree's thank-you page
    event.preventDefault();

    // Hide previous messages
    if (successMessage) {
      successMessage.hidden = true;
    }

    if (errorMessage) {
      errorMessage.hidden = true;
    }

    // Run normal HTML validation
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const originalButtonText = submitButton
      ? submitButton.textContent
      : "REGISTER INTEREST";

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "SENDING...";
    }

    try {
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (response.ok) {
        // Clear form
        form.reset();

        // Show success message on YOUR page
        if (successMessage) {
          successMessage.hidden = false;

          successMessage.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }
      } else {
        let errorData = null;

        try {
          errorData = await response.json();
        } catch (error) {
          // ignore JSON parsing failure
        }

        console.error("Formspree error:", errorData);

        if (errorMessage) {
          errorMessage.hidden = false;
        }
      }
    } catch (error) {
      console.error("Submission error:", error);

      if (errorMessage) {
        errorMessage.hidden = false;
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
      }
    }
  });
});