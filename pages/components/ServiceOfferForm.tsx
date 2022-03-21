import React, { FC, useState } from "react";
/**
 * 😀  Componente customizado de campo de formulário
 */
import { FormField } from "./formField";
import styles from "./serviceOffer.module.css";
/**
 * 😀 Typescript, nos protege de cometer erros
 */
export type FormState = {
  author: string;
  service: string;
  price: string;
};
export const ServiceOfferForm: FC = () => {
  /**
   * 😀 onde nossa memória atual do formulário vive
   *
   * Keywords: state, hooks, react
   */
  const [formState, setFormState] = useState<FormState>({
    author: "",
    service: "",
    price: "",
  });

  return (
    <section className={styles.container}>
      <p>Criação de serviço</p>
      <form action="">
        <FormField
          htmlId="author"
          label="Autor"
          value={formState.author}
          onChange={({ target: { value } }) =>
            setFormState((oldState) => ({ ...oldState, author: value }))
          }
        />
        <FormField
          htmlId="service"
          label="Serviço"
          required
          value={formState.service}
          onChange={({ target: { value } }) =>
            setFormState((oldState) => ({ ...oldState, service: value }))
          }
        />
        <FormField
          htmlId="price"
          label="Preço"
          required
          value={formState.price}
          onChange={({ target: { value } }) =>
            setFormState((oldState) => ({ ...oldState, price: value }))
          }
        />
      </form>
    </section>
  );
};
export default ServiceOfferForm;
