import Head from 'next/head';
import styles from '../../styles/AboutMe.module.css';
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';



export default function AboutMe() {
  const MinusIcon = () => <FaMinus size="1em" />;
  const PlusIcon = () => <FaPlus size="1em" />;

  const [isBeginningExpanded, setIsBeginningExpanded] = useState(false);
  const [isEducationExpanded, setIsEducationExpanded] = useState(false);
  const [isTechnicalSkillsExpanded, setIsTechnicalSkillsExpanded] = useState(false);
  const [isCommunityInvolvementExpanded, setIsCommunityInvolvementExpanded] = useState(false);
  const [isEndingExpanded, setIsEndingExpanded] = useState(false);

  const toggleBeginning = () => setIsBeginningExpanded(!isBeginningExpanded);
  const toggleEducation = () => setIsEducationExpanded(!isEducationExpanded);
  const toggleTechnicalSkills = () => setIsTechnicalSkillsExpanded(!isTechnicalSkillsExpanded);
  const toggleCommunityInvolvement = () => setIsCommunityInvolvementExpanded(!isCommunityInvolvementExpanded);
  const toggleEnding = () => setIsEndingExpanded(!isEndingExpanded);

  return (
    <div>
      <Head>
        <title>About Christian Santos - Junior Software Engineer</title>
        <meta name="description" content="Learn more about Christian Santos, a junior software engineer with a passion for building innovative solutions that make a difference." />
      </Head>

      <main className={styles.container}>
        <h2 className={styles.collapsibleHeader} onClick={toggleBeginning}> 
          {isBeginningExpanded ? <MinusIcon /> : <PlusIcon />} About Me
        </h2>
        {isBeginningExpanded &&(
          <div className={`${styles.collapsibleContent} ${styles.show}`}>
            <p>Hi, I'm Christian Santos, a Junior Software Engineer with a passion for building innovative solutions that make a difference. I believe that software that does not make one’s life better is useless.</p>
          </div>
        )}
        <h2 className={styles.collapsibleHeader} onClick={toggleEducation}>
          {isEducationExpanded ? <MinusIcon /> : <PlusIcon />} Education and Extracurricular Activities
        </h2>
        {isEducationExpanded && (
          <div className={`${styles.collapsibleContent} ${styles.show}`}>
            <p>During my time at San Jose State University, I pursued a Bachelor of Science in Computer Science and faced the unique challenges of completing my degree during the COVID-19 pandemic. Despite these challenges, I was able to maintain a strong academic record and graduated Magna Cum Laude with recognition as a Phi Kappa Phi honor society member.</p>
            <p>As a student, I actively engaged in extracurricular activities, serving as the Public Relations Officer for the Computer Science Club pre-pandemic, where I organized events and managed communication efforts to promote club activities and increase member engagement. I also participated in Hoplite, a club where I collaborated with fellow students to solve problems and participated in coding challenges.</p>
          </div>
        )}
        <h2 className={styles.collapsibleHeader} onClick={toggleTechnicalSkills}>
          {isTechnicalSkillsExpanded ? <MinusIcon /> : <PlusIcon />} Technical Skills and Professional Experience
        </h2>
        {isTechnicalSkillsExpanded && (  
          <div className={`${styles.collapsibleContent} ${styles.show}`}>
            <p>As a professional programmer, I have extensive experience using Python, JavaScript, and Java, and I'm experienced in using related frameworks and libraries such as Spark, Scikit-learn, Pandas, React, Angular, and Spring Boot. I'm also well-versed in services and technologies like Git, AWS, Docker, Jenkins, and Airflow, as well as databases such as PostgreSQL, MongoDB, and MySQL.</p>
            <p>Throughout my career, I have honed my skills in developing innovative software solutions and implementing data analytics to optimize business operations. As a Junior Software Engineer at Western Digital, I played a crucial role in developing a cross-team optimization engine framework that streamlined workflows, and maintained subscriptions for cost and usage monitoring. Additionally, I designed dashboards for license cost and usage monitoring to provide real-time visibility into key metrics.</p>
            <p>During my internship at Union Pacific, I developed and maintained Java and Spring Boot services and collaborated closely with cross-functional teams to bridge information gaps and increase automated unit test coverage. My work contributed to the smooth functioning of mission-critical applications.</p>
            <p>As a Research Assistant at San Jose State University, I built a strong foundation in developing analytical tools and scripting languages, including designing scripts for protein cluster analysis, optimizing existing codebase, and dockerizing protein analysis scripts. I also developed exploratory analysis scripts that provided deeper insights into research findings.</p>
            <p>Earlier in my career, as an Intern at Oath Inc, I demonstrated my strong leadership and teamwork skills by leading a team to develop a mobile-ready web application. I also tutored peers in JavaScript and developed workflow charts using Agile/Scrum methodologies, which led to the successful launch of the site.</p>
          </div>
        )}
        <h2 className={styles.collapsibleHeader} onClick={toggleCommunityInvolvement}>
          {isCommunityInvolvementExpanded ? <MinusIcon /> : <PlusIcon />} Community Involvement
        </h2>
        {isCommunityInvolvementExpanded && (  
          <div className={`${styles.collapsibleContent} ${styles.show}`}>
            <p>In addition to my professional career, I'm passionate about STEM education and involved in various programs to promote it. I helped start an elementary-level Science Olympiad competition for my local school district and have run events around the country on the invitational, regional, state, and national levels.</p>
            <p>I also started a 12-week afterschool program at a local elementary school where I taught students the basics of coding and robotics through guided instruction and hands-on learning. Most of the students had no prior experience with coding, but by the end of the program, they were able to work in teams to develop a functional robot that they could control through a controller. The movements of the robot were coded entirely by the students, and they even developed an automation script that allowed the robot to move upon turning it on.</p>
            <p>I once collaborated with the Measure AA Bond Committee to create a mobile-ready website that promoted awareness and donations for an education bond aimed at increasing funding for my school district. The website played a critical role in getting information to voters, and the bond ultimately passed.</p>
            <p>I've also organized and hosted my own hackathon, the first-ever MLH Code Hack Day in my community. Over 100 students from across the Bay Area participated, providing them with a platform to learn, cultivate, and showcase their coding skills. In addition to handling logistics and promotion of the event, I worked with multiple companies from around the area to secure sponsorships and volunteers for the event, ensuring its success. I also held workshops covering multiple topics, such as introduction to coding languages, beginner workshops to help students code an app from scratch, and design workshops for students to find teams and articulate their ideas further.</p>
          </div>
        )}
        <h2 className={styles.collapsibleHeader} onClick={toggleEnding}>
          {isEndingExpanded ? <MinusIcon /> : <PlusIcon />} Conclusion
        </h2>
        {isEndingExpanded && (  
          <div className={`${styles.collapsibleContent} ${styles.show}`}>
            <p>Overall, my diverse range of experiences has given me a unique perspective on the software development process and the ability to thrive in fast-paced, dynamic environments. My past experiences not only allowed me to develop my technical skills but also helped me foster a passion for community building and leadership, which I'm excited to bring to my future endeavors. I'm always eager to learn and tackle new challenges, and I'm excited to use my skills and experience to make a positive impact in the tech industry.</p>
          </div>
        )}
      </main>
    </div>
  )}
