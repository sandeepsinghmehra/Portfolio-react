import React from 'react';
export const Work = (props) => {
    return (
        <section id={props.id}>
            <div className="work">
                <h1>Work Experience</h1>

                <div className="work_card">
                        <div className="work_card_left">
                            <h3 className='date'>Dec 2021 - Present</h3>
                            <p><strong>Software Developer</strong></p>
                            <p>DataTurtles LLP - dataturtles.com</p>
                        </div>
                    <div className="work_card_right">
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
                </div>
            </div>
        </section>
    )
}
