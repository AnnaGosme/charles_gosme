import * as StyledForm from "@styledComponents/Form";
import * as Styled from "@styledComponents/Page";
import { useState } from "react";

type TContactFormData = {
  email: string;
  name: string;
  message: string;
};

const Contact = () => {
  const [formData, setFormData] = useState<TContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (formData: TContactFormData) => {
    console.log("sent");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <Styled.Container>
      <Styled.Title>Contact</Styled.Title>
      <StyledForm.Form onSubmit={handleSubmit}>
        <StyledForm.Label htmlFor="email">Email</StyledForm.Label>
        <StyledForm.Input
          type="text"
          value={formData?.email}
          name="email"
          onChange={handleChange}
        />
        <StyledForm.Label htmlFor="name">Name</StyledForm.Label>
        <StyledForm.Input
          type="text"
          value={formData?.name}
          name="name"
          onChange={handleChange}
        />
        <StyledForm.Label htmlFor="message">Message</StyledForm.Label>
        <StyledForm.TextArea
          value={formData?.message}
          name="message"
          onChange={handleChange}
        />
        <StyledForm.Submit type="submit">SUBMIT</StyledForm.Submit>
      </StyledForm.Form>
    </Styled.Container>
  );
};

export default Contact;
