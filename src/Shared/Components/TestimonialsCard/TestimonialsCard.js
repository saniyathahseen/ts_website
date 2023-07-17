import React from "react";
import "./TestimonialsCard.css"
import "react-multi-carousel/lib/styles.css";
import { forwardRef } from "react";
const TestimonialsCard = forwardRef(({ data, mode }, ref) => {
    return (
        <div className="img-container">
            <div class="bg-white text-center rounded shadow-sm py-5 px-4"><img src={data?.src} alt={data?.title} width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                <h5 class="mb-0">Manuella Nevoresky</h5><span class="small text-uppercase text-muted">CEO - Founder</span>
                <blockquote class="blockquote blockquote-custom bg-white p-5 shadow rounded">
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
