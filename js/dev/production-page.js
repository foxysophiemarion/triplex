import { f as formValidate } from "./app.min.js";
import "./select.min.js";
/* empty css             */
/* empty css                */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-step");
  const steps = form.querySelectorAll(".form-step__body");
  const prevButtons = form.querySelectorAll(".left-step__prev");
  const nextButtons = form.querySelectorAll(".left-step__next");
  form.querySelectorAll(".navigation-step__item");
  let currentStep = 0;
  showStep();
  prevButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (currentStep > 0) {
        currentStep--;
        showStep();
        updateButtons();
      }
    });
  });
  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (validateCurrentStep() && currentStep < steps.length - 1) {
        currentStep++;
        showStep();
        updateButtons();
      }
    });
  });
  function showStep() {
    steps.forEach((step, index) => {
      step.style.display = index === currentStep ? "flex" : "none";
    });
    updateButtons();
  }
  function updateButtons() {
    prevButtons.forEach((button) => {
      button.disabled = currentStep === 0;
    });
    nextButtons.forEach((button) => {
      button.disabled = currentStep === steps.length - 1;
    });
  }
  function validateCurrentStep() {
    const currentStepElement = steps[currentStep];
    const errorCount = formValidate.getErrors(currentStepElement);
    return errorCount === 0;
  }
});
