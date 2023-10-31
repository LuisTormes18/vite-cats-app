import { useState } from "react";

export const useForm = <T extends object>(initialState: T) => {
  const [messageError, setMessageError] = useState("");
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState<string[]>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const clearErrors = () => {
    if (messageError) setMessageError("");
    if (errors) setErrors([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearErrors();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return {
    formData,
    handleInputChange,
    messageError,
    setMessageError,
    errors,
    setErrors,
    isSubmitting,
    setIsSubmitting,
  };
};
