import React from 'react'

const experience = (props) => {
  return (
    <div>
      <div className="text-3xl font-mono">My Work Experience</div>
      <div className="flex justify-between uppercase my-2">
        <div>FULL STACK WEB DEVELOPER</div>
        <div>Mar 2022 - June 2023</div>
      </div>
      <ul className='list-disc px-5'>
        <li>Developed, customized, and maintained WordPress websites for clients, including both
        corporate and eCommerce platforms.</li>
        <li>Collaborated with cross-functional teams to design responsive, user-friendly websites that improved client engagement and user experience.</li>
        <li>Designed and built custom WordPress plugins to extend the functionality of websites, such as creating unique post types, custom fields, and integrating third-party services (payment gateways, social media).</li>
        <li>Developed custom WordPress themes from scratch to provide clients with tailored designs
        and unique branding solutions.</li>
        <li>Utilized WordPress theme hooks and custom templates to match client needs for flexibility
        and ease of content management.</li>
        <li>Developed and implemented RESTful API calls using JavaScript (Fetch API, AJAX) for seamless data communication between WordPress sites and external services.</li>
        <li>Worked closely with the company’s CRM system built on CodeIgniter, managing data flow between WordPress sites and the CRM. </li>
      </ul>
    </div>
  )
}

export default experience
