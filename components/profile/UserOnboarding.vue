<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <!-- <header class="bg-[#5829B4] text-white px-4 py-3">
      <div class="container mx-auto">
        <nav class="flex items-center space-x-4">

        </nav>
      </div>
    </header> -->

    <!-- Main Content -->
    <main class="container mx-auto px-4 py-8 max-w-2xl">
      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold mb-2">Create your profile</h1>
        <p class="text-gray-600">
          Apply privately to thousands of tech companies & startups with one
          profile.
        </p>
      </div>

      <div
        class="bg-white rounded-lg border border-border p-6 shadow-lg space-y-6"
      >
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <!-- Location -->
          <div class="space-y-2">
            <label class="block">
              <span class="font-medium">
                Where are you based?
                <span class="text-red-500">*</span>
              </span>
            </label>
            <p class="text-sm text-gray-500">
              Tip: You can choose a city, state, or country
            </p>
            <input
              v-model="form.location"
              type="text"
              :class="[
                'w-full px-3 py-2 border rounded-md',
                errors.location ? 'border-red-500' : 'border-gray-300',
              ]"
              placeholder="Search for a different location"
              required
            />
            <p v-if="errors.location" class="text-sm text-red-500 mt-1">
              {{ errors.location }}
            </p>
          </div>

          <!-- Current Role -->
          <div class="space-y-2">
            <label class="block">
              <span class="font-medium">
                What best describes your current role?
                <span class="text-red-500">*</span>
              </span>
            </label>
            <select
              v-model="form.currentRole"
              :class="[
                'w-full px-3 py-2 border rounded-md',
                errors.currentRole ? 'border-red-500' : 'border-gray-300',
              ]"
              required
            >
              <option value="" disabled selected>Select a role</option>
              <option value="software-engineer">Software Engineer</option>
              <option value="designer">Designer</option>
              <option value="product-manager">Product Manager</option>
              <!-- Add more options as needed -->
            </select>
            <p v-if="errors.currentRole" class="text-sm text-red-500 mt-1">
              {{ errors.currentRole }}
            </p>
          </div>

          <!-- Years of Experience -->
          <div class="space-y-2">
            <label class="block">
              <span class="font-medium">
                How many years of experience do you have in your current role?
                <span class="text-red-500">*</span>
              </span>
            </label>
            <select
              v-model="form.yearsOfExperience"
              :class="[
                'w-full px-3 py-2 border rounded-md',
                errors.yearsOfExperience ? 'border-red-500' : 'border-gray-300',
              ]"
              required
            >
              <option value="" disabled selected>
                Select years of experience
              </option>
              <option value="0-1">0-1 years</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-plus">5+ years</option>
            </select>
            <p
              v-if="errors.yearsOfExperience"
              class="text-sm text-red-500 mt-1"
            >
              {{ errors.yearsOfExperience }}
            </p>
          </div>

          <!-- Student/New Grad -->
          <div class="space-y-2">
            <label class="block">
              <span class="font-medium">
                Are you a student or new grad?
                <span class="text-red-500">*</span>
              </span>
            </label>
            <div class="flex space-x-4">
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  v-model="form.isStudent"
                  :value="true"
                  class="form-radio"
                  required
                />
                <span class="ml-2">Yes</span>
              </label>
              <label class="inline-flex items-center">
                <input
                  type="radio"
                  v-model="form.isStudent"
                  :value="false"
                  class="form-radio"
                  required
                />
                <span class="ml-2">No</span>
              </label>
            </div>
            <p v-if="errors.isStudent" class="text-sm text-red-500 mt-1">
              {{ errors.isStudent }}
            </p>
          </div>

          <!-- Current Work -->
          <div class="space-y-2">
            <label class="block">
              <span class="font-medium">
                Where do you currently work?
                <span class="text-red-500">*</span>
              </span>
            </label>
            <p class="text-sm text-gray-500">
              Your company will never see that you're looking for a job
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  v-model="form.jobTitle"
                  type="text"
                  :class="[
                    'w-full px-3 py-2 border rounded-md',
                    errors.jobTitle ? 'border-red-500' : 'border-gray-300',
                  ]"
                  placeholder="e.g., Design Director"
                  :required="!form.notEmployed"
                />
                <p v-if="errors.jobTitle" class="text-sm text-red-500 mt-1">
                  {{ errors.jobTitle }}
                </p>
              </div>
              <div>
                <input
                  v-model="form.company"
                  type="text"
                  :class="[
                    'w-full px-3 py-2 border rounded-md',
                    errors.company ? 'border-red-500' : 'border-gray-300',
                  ]"
                  placeholder="e.g., Omnicorp"
                  :required="!form.notEmployed"
                />
                <p v-if="errors.company" class="text-sm text-red-500 mt-1">
                  {{ errors.company }}
                </p>
              </div>
            </div>
            <label class="inline-flex items-center mt-2">
              <input
                type="checkbox"
                v-model="form.notEmployed"
                class="form-checkbox"
                @change="handleEmploymentStatusChange"
              />
              <span class="ml-2">I'm not currently employed</span>
            </label>
          </div>

          <!-- LinkedIn Profile -->
          <div class="space-y-2">
            <label class="block">
              <span class="font-medium">LinkedIn Profile</span>
            </label>
            <input
              v-model="form.linkedin"
              type="url"
              :class="[
                'w-full px-3 py-2 border rounded-md',
                errors.linkedin ? 'border-red-500' : 'border-gray-300',
              ]"
              placeholder="https://linkedin.com/in/"
            />
            <p v-if="errors.linkedin" class="text-sm text-red-500 mt-1">
              {{ errors.linkedin }}
            </p>
          </div>

          <!-- Personal Website -->
          <div class="space-y-2">
            <label class="block">
              <span class="font-medium">Your Website</span>
            </label>
            <input
              v-model="form.website"
              type="url"
              :class="[
                'w-full px-3 py-2 border rounded-md',
                errors.website ? 'border-red-500' : 'border-gray-300',
              ]"
              placeholder="https://mypersonalwebsite.com"
            />
            <p v-if="errors.website" class="text-sm text-red-500 mt-1">
              {{ errors.website }}
            </p>
          </div>

          <!-- Submit Button -->
          <div class="pt-4">
            <button
              type="submit"
              :disabled="isSubmitting"
              :class="[
                'w-full py-2 px-4 rounded-md transition-colors',
                isSubmitting
                  ? 'bg-[#5829B4]/70 cursor-not-allowed'
                  : 'bg-[#5829B4] hover:bg-[#4a238f]',
                'text-white',
              ]"
            >
              <span
                v-if="isSubmitting"
                class="flex items-center justify-center"
              >
                <svg
                  class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  ></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </span>
              <span v-else>Continue</span>
            </button>
          </div>
        </form>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, reactive } from "vue";

const form = reactive({
  location: "",
  currentRole: "",
  yearsOfExperience: "",
  isStudent: null,
  jobTitle: "",
  company: "",
  notEmployed: false,
  linkedin: "",
  website: "",
});

const errors = reactive({
  location: "",
  currentRole: "",
  yearsOfExperience: "",
  isStudent: "",
  jobTitle: "",
  company: "",
  linkedin: "",
  website: "",
});

const isSubmitting = ref(false);

const validateForm = () => {
  let isValid = true;

  // Reset errors
  Object.keys(errors).forEach((key) => (errors[key] = ""));

  // Required field validations
  if (!form.location.trim()) {
    errors.location = "Location is required";
    isValid = false;
  }

  if (!form.currentRole) {
    errors.currentRole = "Current role is required";
    isValid = false;
  }

  if (!form.yearsOfExperience) {
    errors.yearsOfExperience = "Years of experience is required";
    isValid = false;
  }

  if (form.isStudent === null) {
    errors.isStudent = "Please select whether you are a student or not";
    isValid = false;
  }

  // Employment validation
  if (!form.notEmployed) {
    if (!form.jobTitle.trim()) {
      errors.jobTitle = "Job title is required";
      isValid = false;
    }
    if (!form.company.trim()) {
      errors.company = "Company name is required";
      isValid = false;
    }
  }

  // URL validations
  const urlPattern = /^https?:\/\/.+/;
  if (form.linkedin && !urlPattern.test(form.linkedin)) {
    errors.linkedin = "Please enter a valid URL";
    isValid = false;
  }
  if (form.website && !urlPattern.test(form.website)) {
    errors.website = "Please enter a valid URL";
    isValid = false;
  }

  return isValid;
};

const handleEmploymentStatusChange = () => {
  if (form.notEmployed) {
    form.jobTitle = "";
    form.company = "";
    errors.jobTitle = "";
    errors.company = "";
  }
};

const handleSubmit = async () => {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;
  try {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form submitted:", form);
    // Handle successful submission (e.g., redirect or show success message)
  } catch (error) {
    console.error("Error submitting form:", error);
    // Handle error (e.g., show error message)
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style>
/* Add any additional custom styles here */
.form-radio {
  @apply w-4 h-4 text-[#5829B4] border-gray-300 focus:ring-[#5829B4];
}

.form-checkbox {
  @apply w-4 h-4 text-[#5829B4] border-gray-300 rounded focus:ring-[#5829B4];
}
</style>
