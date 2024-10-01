import React from 'react';
import './AboutPage.css'; // Make sure to create a CSS file for styling
import Contributors from '../../components/Contributors/Contributors'; // Import the Contributors component

const AboutPage = () => {
    return (
        <div className="about-container">
            <h1>About the NASA Space Apps Challenge</h1>
            <p>
                Welcome to the NASA Space Apps Challenge! What began in 2012 as
                a small event with about 2,000 participants across 25 locations
                in 17 countries has grown into the largest annual global
                hackathon.
            </p>
            <p>
                Over the years, the event has seen incredible growth. In 2020,
                during the pandemic, we introduced the NASA Space Apps COVID-19
                Challenge, which boosted engagement and brought more
                participants than ever. By 2023, we welcomed a record-breaking{' '}
                <strong>57,999 registered participants</strong> at{' '}
                <strong>402 local events</strong> in{' '}
                <strong>152 countries and territories</strong>.
            </p>
            <p>
                Initially focused on space science and technology, the challenge
                evolved in 2017 to include both Earth and space science. Today,
                we celebrate a diverse range of challenges that incorporate arts
                and humanities alongside technology, creating a more inclusive
                experience for all. This expansion has led to our highest
                participation numbers and a significant increase in innovative
                projects that blend technology and art.
            </p>
            <p>
                The success of the NASA Space Apps Challenge is largely due to
                our <strong>Local Leads</strong>. These dedicated individuals
                organize in-person and virtual events, helping to raise
                awareness and engagement in their communities. Their hard work
                results in amazing outcomes and fosters a strong sense of
                community among participants.
            </p>
            <p>
                Join us as we continue to explore, innovate, and inspire through
                the wonders of space and Earth science! For more stories and
                insights, check out our blog.
            </p>
            <Contributors />
        </div>
    );
};

export default AboutPage;
