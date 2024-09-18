"use client";
import "./contact.scss";
import Image from "next/image";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";
import ContactPhoto from "/src/assets/footer/contact.webp";
import ConfirmIcon from "/src/assets/footer/confirm.svg";

export default function Contact() {
  const t = useTranslations("contact");
  const form = useRef();
  const [errorMessage, setErrorMesssage] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = userData;
    if (
      name.length > 5 &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) &&
      subject.length > 5 &&
      message.length > 10
    ) {
      emailjs
        .sendForm("service_23b6jle", "template_i69jy1o", form.current, {
          publicKey: "xZFYChZrsircwqz91",
        })
        .then(() => {
          setIsSent(true);
        });
    } else {
      setErrorMesssage(true);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="container">
        <div className="contact-title">{t("title")}</div>
        <div className="contact-subtitle">{t("subtitle")}</div>
        <div className="row aic">
          <div className="box-lap-6 box-desk-5">
            <Image
              className="contact-photo image-center"
              width={700}
              height={663}
              src={ContactPhoto.src}
              alt="contact photo"
              unoptimized
            />
          </div>
          <div className="box-lap-6 box-desk-7">
            {isSent ? (
              <div className="mail-sent">
                <ConfirmIcon />
                <div className="title">{t("sentTitle")}</div>
                <div className="subtitle">{t("sentSubtitle")}</div>
              </div>
            ) : (
              <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="form-inputs">
                  <div className="form-input">
                    <label>{t("name")}:</label>
                    <input
                      type="text"
                      name="name"
                      placeholder={t("placeholder_name")}
                      onClick={() => setErrorMesssage(false)}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          name: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-input">
                    <label>{t("email")}:</label>
                    <input
                      type="text"
                      name="email"
                      placeholder={t("placeholder_email")}
                      onClick={() => setErrorMesssage(false)}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-input">
                    <label>{t("subject")}:</label>
                    <input
                      type="text"
                      name="subject"
                      placeholder={t("placeholder_subject")}
                      onClick={() => setErrorMesssage(false)}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          subject: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-input">
                    <label>{t("phone")}:</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder={t("placeholder_phone")}
                      onClick={() => setErrorMesssage(false)}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          phone: e.target.value,
                        })
                      }
                    />
                  </div>
                  <div className="form-input full-textarea">
                    <label>{t("message")}:</label>
                    <textarea
                      type="text"
                      name="message"
                      placeholder={t("placeholder_message")}
                      onClick={() => setErrorMesssage(false)}
                      onChange={(e) =>
                        setUserData({
                          ...userData,
                          message: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>
                <div className="form-button">
                  <button type="submit">{t("sentText")}</button>
                </div>
                {errorMessage && (
                  <div className="error-messsage">{t("errorMessage")}</div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
