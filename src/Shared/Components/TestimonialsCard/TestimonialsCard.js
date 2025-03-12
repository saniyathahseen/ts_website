import React from "react";
import "./TestimonialsCard.css"
import "react-multi-carousel/lib/styles.css";
import { forwardRef } from "react";
const TestimonialsCard = forwardRef(({ data, mode }, ref) => {
    return (
        <div className="img-container">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <div className="bg-white text-center rounded shadow-sm py-5 px-4"><img src={data?.src} alt={data?.title} width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 className="mb-0">Manuella Nevoresky</h5><span className="small text-uppercase text-muted">CEO - Founder</span>
                <blockquote className="blockquote blockquote-custom bg-white p-5 shadow rounded">
                    <h3>Shirley Fultz</h3>
                    <h4>Designer</h4>
                    <p>
                        It's freeing to be able to catch up on customized news and not be
                        distracted by a social media element on the same site
                    </p>
                </blockquote>
            </div>
        </div>
    );
});


export default TestimonialsCard;
