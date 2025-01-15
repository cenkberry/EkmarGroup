"use client";
import "./contact.scss";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { useTranslations } from "next-intl";

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
    console.log("Private");
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
              src="/image/dummy.jpg"
              alt="contact photo"
              unoptimized
            />
          </div>
          <div className="box-lap-6 box-desk-7">
            {isSent ? (
              <div className="mail-sent">
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
