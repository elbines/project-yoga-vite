import React from 'react';
import { useTranslation } from 'react-i18next';
import { useState } from "react"
import style from './contactForm.module.css';
import { Text } from '../../../UI/textAndTypography/Text';
import { StyledButton } from '../../../UI/buttons/StyledButtons';

export const ContactForm = () => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        agreeToTerms: false,
    });

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setFormData(prevFormData => {
            const newFormData = {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
            };
            console.log(newFormData);

            return newFormData;
        });
    };

    return (
        <section className={style.contactWrapper}>
            <Text
                header={t("form.heading")}
                type="H2"
                style={{ color: '#fff' }}
                className={style.header}
            />
            <form>
                <label className={style.labelText} htmlFor="name">
                    <Text
                        header={t("form.labels.name")}
                        type="H3"
                        style={{ color: '#000' }}
                        className={style.labelHeader}
                    />
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={style.input}
                        required
                    />
                </label>

                <label className={style.labelText} htmlFor="email">
                    <Text
                        header={t("form.labels.email")}
                        type="H3"
                        style={{ color: '#000' }}
                        className={style.labelHeader}
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={style.input}
                        required
                    />
                </label>

                <label className={style.labelText} htmlFor="agreeToTerms">
                    <input
                        type="checkbox"
                        name="agreeToTerms"
                        id="agreeToTerms"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className={style.checkbox}
                        required
                    />
                    <Text
                        header={t("form.labels.terms")}
                        type="H3"
                        style={{ color: '#000' }}
                        className={style.labelHeader}
                    />
                </label>


                <div className={style.submitBtnContainer}>
                    <StyledButton style={{
                        display: 'flex',
                        width: "275px",
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '10px 10px',
                    }}>
                        <span style={{
                            whiteSpace: 'nowrap',
                        }}>
                            {t("form.button")}
                        </span>
                    </StyledButton>
                    {/* make a styledButton for full page/full width if i have time */}
                </div>
            </form>
        </section>
    );
};
