import React from "react";
import { motion } from "framer-motion";
import MailForm from "../../components/MailForm/MailForm";

const ContactPage = () => {
  return (
    <motion.main
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <MailForm />
    </motion.main>
  );
};

export default ContactPage;
