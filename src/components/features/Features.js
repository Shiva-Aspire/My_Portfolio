import React from 'react';
import { Title } from '../layouts/Title';
import { Card } from './Card';
import { FaGlobe } from 'react-icons/fa';
import { SiSelenium, SiPostman } from 'react-icons/si';

const Features = () => {
  return (
    <section
      id="features"
      className='w-full py-20 border-b-[1px] border-black'>

      <Title title='Features' des='what i do' />

      <div className='grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 gap-6 xl:gap-14'>
        <Card
          title="Web Automation Testing"
          desc="Automation Tester skilled in Selenium WebDriver, Java, TestNG, and Maven, with experience in designing scalable automation frameworks using Page Object Model & integrating tests with CI/CD pipelines and Git for efficient web application testing."
          icon={<SiSelenium />}
        />
        <Card
          title="API Automation "
          desc="API Automation Tester skilled in Rest Assured, Java, TestNG, and Maven, with experience in validating REST APIs, automating CRUD operations, and integrating automated tests with CI/CD pipelines and Git for efficient API testing."
          icon={<><SiPostman /></>}
        />
        <Card
          title="Coding Websites"
          desc="Participated in certain competitions on several coding platforms and also knows how to write perfect structured code"
          icon={<FaGlobe />}
        />

      </div>

    </section>
  )
}

export default Features;