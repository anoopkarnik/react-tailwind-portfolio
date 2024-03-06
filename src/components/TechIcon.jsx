import React from 'react';
import { SiSpringboot, SiFlask,SiTailwindcss, SiNeo4J, SiVisualbasic, SiNotion,SiTableau,SiAdobepremierepro,
SiApacheairflow,SiElasticsearch, SiBootstrap, SiZoho, SiAdobeaftereffects, SiAmazoniam, SiApachekafka, SiGithubactions, SiRender, SiZapier, SiAmazonaws, SiWebflow, SiOpenai, SiAmazonec2, SiAmazonroute53, SiAmazonrds, SiChatbot, SiMicrosoftexcel, SiAmazons3, SiAmazonsimpleemailservice, SiAmazonecs, SiGithub } from "react-icons/si";
import { FaReact, FaBootstrap, FaJs, FaPython, FaJava, FaGithub } from "react-icons/fa";

// Import other icon libraries as needed

const TechIcon = ({ key,item }) => {
    const iconMappings = {
        // Frameworks
        "React Native": <FaReact />,
        "Springboot": <FaBootstrap/>,
        "Flask": <SiFlask/>,
        "Tailwindcss": <SiTailwindcss/>,
        "Bootstrap": <SiBootstrap/>,
        "Reactjs": <FaReact/>,
        "Neo4j": <SiNeo4J/>,
        "WebSockets": <div>WS</div>,
        "Tkinter": <div>TK</div>,
        "fhir": <div>FH</div>,
        "Scrapy": <div>SC</div>,
      
        // Languages
        "Javascript": <FaJs/>,
        "Python": <FaPython/>,
        "Java": <FaJava/>,
        "VBA": <SiVisualbasic/>, // No direct VBA icon, using Office as alternative
      
        // Tools and Others
        "Notion": <SiNotion/>,
        "Github": <FaGithub/>,
        "Tableau": <SiTableau/>,
        "Adobe Premiere Pro": <SiTableau/>,
        "ElasticSearch": <SiElasticsearch/>,
        "Airflow": <SiApacheairflow/>,
        "Zoho":<SiZoho/>,
        "Adobe After Affects": <SiAdobeaftereffects/>,
        "Iam": <SiAmazoniam/>,
        "MSK": <SiApachekafka/>,
        "Kie/Drools Rules Server": <div>DR</div>,
        "Github Actions": <SiGithubactions/>,
        "Pinecone": <div>PC</div>,
        "Render": <SiRender/>,
        "Zapier": <SiZapier/>,
        "Certificate Manager": <div> CM</div>,
        "Lightsail": <div>LS</div>,
        "FlowiseAI": <SiWebflow/>,
        "Chatgpt":<SiOpenai/>,
        "EC2": <SiAmazonec2/>,
        "Route53": <SiAmazonroute53/>,
        "Pipedream": <div>PD</div>,
        "Cloudfront": <div>CF</div>,
        "RDS": <SiAmazonrds/>,
        "ECR": <div>ECR</div>,
        "Langchain": <SiChatbot/>,
        "Microsoft Project Professional": <div>MPP</div>,
        "Excel": <SiMicrosoftexcel/>,
        "S3": <SiAmazons3/>,
        "SES": <SiAmazonsimpleemailservice/>,
        "Camunda Workflow Engine": <div>CWE</div>,
        "Anki": <div>AK</div>,
        "ECS": <SiAmazonecs/>,
        // Add more mappings here...
      };
      
      // Import statements for the libraries used in mappings

  const renderIcon = (tech) => {
    const mapping = iconMappings[tech];
    if (!mapping) return tech[0]; // Return null or a placeholder if no mapping exists

    // Add conditions for other libraries as needed

    return mapping
  };

  return (
    <div className='flex items-center justify-center mr-3 font-general-medium text-xl sm:text-3xl mb-1 
    text-ternary-dark dark:text-ternary-light' title={item}>
      {renderIcon(item)}
    </div>
  );
};

export default TechIcon;
