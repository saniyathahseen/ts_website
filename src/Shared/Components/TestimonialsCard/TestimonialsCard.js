import React, { forwardRef } from "react";
import styles from "./TestimonialsCard.module.css";

const TestimonialsCard = forwardRef(({ data }, ref) => {
    return (
        <div className={styles["testimonial-card"]}>
            <div className={`${styles["testimonial-content"]} text-center rounded shadow-sm py-5 px-4`}>
                <img
                    src={data?.src}
                    alt={data?.title || "Profile image"}
                    className={`img-fluid rounded-circle mb-3 img-thumbnail shadow-sm ${styles["img-fluid"]}`}
                    width="100"
                />
                <h5 className="mb-0">{data?.name || "John Doe"}</h5>
                <span className="small text-uppercase text-muted">{data?.position || "Founder"}</span>

                <blockquote className={`${styles["blockquote-custom"]} bg-white p-4 shadow rounded mb-5 text-center`}>
                    <h4 className="mb-3 font-weight-bold">{data?.title || "Testimonial"}</h4>
                    <p className="text-muted fst-italic">{data?.review || "This is a sample testimonial text."}</p>
                </blockquote>
            </div>
        </div>
    );
});

export default TestimonialsCard;