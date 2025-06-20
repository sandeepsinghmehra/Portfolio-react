import React from 'react';
export const Work = (props) => {
    return (
        <section id={props.id}>
            <div className="work">
                <h1>Work Experience</h1>
                
                <div style={{paddingTop: 20}}>
                <div className="work_card">
                        <div className="work_card_left">
                            <h3 className='date'>Oct 2023 - Present</h3>
                            <p><strong>Frontend Developer</strong></p>
                            <p>AVS Technology</p>
                        </div>
                    <div className="work_card_right">
                        <ul>
                            <li>Managing data with DevExtreme and React-Table for efficient table rendering.</li>
                            <li>Proficient in handling forms with Formik and validating inputs using Yup.</li>
                            <li>Collaborate with teams to implement designs into fully functional webpages.</li>
                            <li>Integrated Restful APIs into frontend, handling data rendering, state management, error handling.</li>
                            <li>Led a team of 3 developers in a project to revamp the company’s CRM system for a UAE client,resulting in a 25% increase in user adoption. This involved managing project timelines, coordinating with stakeholders, and ensuring successful delivery.</li>
                            <li>Recently working on CRM, CMS, AMS, Client UI and Risk Management projects.</li>
                            <li>Built reusable components, optimization and ensuring best practices.</li>
                        </ul>
                    </div>
                </div>

                <div className="work_card">
                        
                    <div className="work_card_left_2">
                        <ul>
                            <li>Developed a grocial website from scratch, implemented features.</li>
                            <li>Developed a landing page for the grocial website.</li>
                            <li>I have developed an authentication system with google social login.</li>
                            <li>Developed a official website for Dataturtles.</li>
                            <li>Collaborated with a 3-person team to develop a Gardening E-Commerce Marketplace solution using ReactJS, ExpressJS, PostgreSQL, and Prisma (ORM).</li>
                            <li>I contributed to the admin platform and Customer platform with rest API.</li>
                            <li>I contributed to development a costefficient email marketing campaign system to manage customer leads and schedule email sending based on the customer's persona without landing emails in the spam folder</li>
                        </ul>
                    </div>
                    <div className="work_card_right_2">
                            <h3 className='date'>Dec 2021 - May 2023</h3>
                            <p><strong>Software Developer</strong></p>
                            <p>DataTurtles LLP - dataturtles.com</p>
                        </div>
                </div>
                </div>
            </div>
        </section>
    )
}
