"use client";
import RocketSuccess from "@components/seasons/2026/apply/rocket-success";
import { useState } from "react";
import {
  Field,
  Input,
  SearchableMultiSelect,
  SearchableSelect,
  Select,
  TextArea,
} from "./form-fields";
import { MAJORS, UNIVERSITIES } from "./form-options";

const ApplicationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [resetKey, setResetKey] = useState(0);
  const [toastState, setToastState] = useState<{
    show: boolean;
    title: string;
    description: string;
    variant?: "destructive";
  }>({ show: false, title: "", description: "" });

  const showToast = (
    title: string,
    description: string,
    variant?: "destructive",
  ) => {
    setToastState({ show: true, title, description, variant });
    setTimeout(() => setToastState((s) => ({ ...s, show: false })), 4000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const f = new FormData(form);

    const payload = {
      email: f.get("email"),
      name: f.get("name"),
      major: f.get("major"),
      firstAthon: f.get("firstAthon"),
      university: f.get("university"),
      educationLevel: f.get("educationLevel"),
      gender: f.get("gender"),
      ethnicity: f.get("ethnicity"),
      ageAndStudent: f.get("ageAndStudent"),
      timezone: f.get("timezone"),
      attendanceMode: f.get("attendanceMode"),
      transportation: f.get("transportation"),
      howHeard: f.get("howHeard"),
      background: f.get("background"),
      motivation: f.get("motivation"),
      boba: f.get("boba"),
      otherQuestions: f.get("otherQuestions") || undefined,
    };

    try {
      const response = await fetch(`/api/apply`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || `Submission failed (${response.status})`);
      }
      form.reset();
      setResetKey((k) => k + 1);
      setSubmitted(true);
    } catch (err) {
      showToast(
        "Submission Failed",
        err instanceof Error ? err.message : "Something went wrong.",
        "destructive",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {toastState.show && (
        <div
          className={`fixed right-6 bottom-6 z-50 max-w-sm rounded-xl border px-5 py-4 shadow-2xl backdrop-blur-md transition-all duration-300 ${
            toastState.variant === "destructive"
              ? "border-red-500/40 bg-red-950/70 text-red-200"
              : "border-purple-500/40 bg-[#0d0a1a]/80 text-purple-100"
          }`}
        >
          <p className="text-sm font-semibold">{toastState.title}</p>
          <p className="mt-1 text-xs opacity-80">{toastState.description}</p>
        </div>
      )}

      {submitted ? (
        <RocketSuccess />
      ) : (
        <form key={resetKey} onSubmit={handleSubmit} className="space-y-5">
          <Field id="email" label="Email Address" required>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your.email@example.com"
              required
            />
          </Field>

          <Field id="name" label="Full Name (First, Last)" required>
            <Input id="name" name="name" placeholder="Jane Doe" required />
          </Field>

          <Field id="major" label="Major(s)" required>
            <SearchableMultiSelect
              id="major"
              name="major"
              placeholder="e.g. Computer Science, Design"
              options={MAJORS}
              required
            />
          </Field>

          <Field
            id="firstAthon"
            label="Is this your first a-thon event?"
            required
          >
            <Select
              id="firstAthon"
              name="firstAthon"
              required
              options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
            />
          </Field>

          <Field id="university" label="University / College" required>
            <SearchableSelect
              id="university"
              name="university"
              options={UNIVERSITIES}
              required
            />
          </Field>

          <Field
            id="educationLevel"
            label="Current Highest Education Level"
            required
          >
            <Select
              id="educationLevel"
              name="educationLevel"
              required
              options={[
                { value: "Freshman", label: "Freshman" },
                { value: "Sophomore", label: "Sophomore" },
                { value: "Junior", label: "Junior" },
                { value: "Senior", label: "Senior" },
                { value: "Graduate Student", label: "Graduate Student" },
                { value: "Other", label: "Other" },
              ]}
            />
          </Field>

          <Field id="gender" label="Gender Identity" required>
            <Select
              id="gender"
              name="gender"
              required
              options={[
                { value: "Man", label: "Man" },
                { value: "Woman", label: "Woman" },
                { value: "Non-binary", label: "Non-binary" },
                {
                  value: "Prefer to self-describe",
                  label: "Prefer to self-describe",
                },
                { value: "Prefer not to say", label: "Prefer not to say" },
              ]}
            />
          </Field>

          <Field id="ethnicity" label="Race / Ethnicity" required>
            <Select
              id="ethnicity"
              name="ethnicity"
              required
              options={[
                {
                  value: "Asian / Pacific Islander",
                  label: "Asian / Pacific Islander",
                },
                {
                  value: "Black / African American",
                  label: "Black / African American",
                },
                { value: "Hispanic / Latino", label: "Hispanic / Latino" },
                {
                  value: "Middle Eastern / North African",
                  label: "Middle Eastern / North African",
                },
                {
                  value: "Native American / Alaska Native",
                  label: "Native American / Alaska Native",
                },
                { value: "White / Caucasian", label: "White / Caucasian" },
                { value: "Multiracial", label: "Multiracial" },
                { value: "Prefer not to say", label: "Prefer not to say" },
                { value: "Other", label: "Other" },
              ]}
            />
          </Field>

          <Field
            id="ageAndStudent"
            label="Will you be 18+ by April 18th and are a U.S. College Student?"
            required
          >
            <Select
              id="ageAndStudent"
              name="ageAndStudent"
              required
              options={[
                { value: "Yes", label: "Yes" },
                { value: "No", label: "No" },
              ]}
            />
          </Field>

          <Field id="timezone" label="Timezone" required>
            <Select
              id="timezone"
              name="timezone"
              required
              options={[
                { value: "PT", label: "Pacific Time (PT)" },
                { value: "MT", label: "Mountain Time (MT)" },
                { value: "CT", label: "Central Time (CT)" },
                { value: "ET", label: "Eastern Time (ET)" },
                { value: "Other", label: "Other" },
              ]}
            />
          </Field>

          <Field
            id="attendanceMode"
            label="Where do you plan to attend?"
            required
          >
            <Select
              id="attendanceMode"
              name="attendanceMode"
              required
              options={[
                { value: "In-Person", label: "In-Person" },
                { value: "Online", label: "Online" },
              ]}
            />
          </Field>

          <Field
            id="transportation"
            label="Do you have transportation to Design-a-thon?"
            required
          >
            <Select
              id="transportation"
              name="transportation"
              required
              options={[
                { value: "Yes - Car", label: "Yes — Car" },
                { value: "Yes - Bus/Train", label: "Yes — Bus / Train" },
                { value: "Yes - Other", label: "Yes — Other" },
                { value: "No", label: "No" },
              ]}
            />
          </Field>

          <Field
            id="howHeard"
            label="How did you find out about Design-a-thon at UCI 2026?"
            required
          >
            <Select
              id="howHeard"
              name="howHeard"
              required
              options={[
                { value: "Instagram", label: "Instagram" },
                { value: "LinkedIn", label: "LinkedIn" },
                { value: "Discord", label: "Discord" },
                {
                  value: "Friend / Word of mouth",
                  label: "Friend / Word of mouth",
                },
                { value: "Club / Organization", label: "Club / Organization" },
                { value: "Professor / Class", label: "Professor / Class" },
                { value: "Other", label: "Other" },
              ]}
            />
          </Field>

          <Field
            id="background"
            label="Tell us about your design journey and background"
            required
            charLimit={500}
          >
            <TextArea
              id="background"
              name="background"
              placeholder="No prior experience needed! Tell us where you're starting from..."
              rows={4}
              maxLength={500}
              required
            />
          </Field>

          <Field
            id="motivation"
            label="Why do you want to attend Design-a-thon?"
            required
            charLimit={500}
          >
            <TextArea
              id="motivation"
              name="motivation"
              placeholder="Tell us what excites you about Design-O-Thon..."
              rows={4}
              maxLength={500}
              required
            />
          </Field>

          <Field
            id="boba"
            label="What is your favorite boba drink and why?"
            required
            charLimit={200}
          >
            <TextArea
              id="boba"
              name="boba"
              placeholder="e.g. Taro milk tea with boba because..."
              rows={3}
              maxLength={200}
              required
            />
          </Field>

          {/* Acknowledgements */}
          <div className="space-y-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
            <p className="mb-2 text-sm font-medium tracking-wide text-purple-200/80">
              Acknowledgements
            </p>
            {[
              {
                name: "ackOvernight",
                text: (
                  <>
                    I acknowledge that this event is{" "}
                    <strong className="text-white/80">not overnight</strong>,
                    and that I am responsible for my own overnight stays.
                  </>
                ),
              },
              {
                name: "ackThreeDays",
                text: (
                  <>
                    I acknowledge that this Design-a-thon is a{" "}
                    <strong className="text-white/80">
                      3-day hybrid event
                    </strong>{" "}
                    and I must attend Friday, Saturday, and Sunday (in-person or
                    online, but not both) to receive prizes.
                  </>
                ),
              },
            ].map(({ name, text }) => (
              <label
                key={name}
                className="group flex cursor-pointer items-start gap-3"
              >
                <input
                  type="checkbox"
                  name={name}
                  required
                  className="mt-0.5 h-4 w-4 shrink-0 rounded border border-white/20 bg-white/5 accent-purple-500"
                />
                <span className="text-sm text-white/60 transition group-hover:text-white/80">
                  {text} <span className="text-red-400">*</span>
                </span>
              </label>
            ))}
          </div>

          <Field
            id="otherQuestions"
            label="Any other questions or concerns?"
            optional
          >
            <TextArea
              id="otherQuestions"
              name="otherQuestions"
              placeholder="Anything else you'd like us to know..."
              rows={3}
            />
          </Field>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="group relative w-full overflow-hidden rounded-xl border border-purple-500/30 bg-white/5 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.25)] disabled:opacity-60"
          >
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Launching…
              </span>
            ) : (
              "Submit Application"
            )}
          </button>
        </form>
      )}
    </>
  );
};

export default ApplicationForm;
