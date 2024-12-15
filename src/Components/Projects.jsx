// images
import project1 from '../../public/project-1.png'
import project2 from '../../public/project-2.png'
import project3 from '../../public/project-3.png'
import project4 from '../../public/project-4.png'
import project5 from '../../public/project-5.png'
import project6 from '../../public/project-6.png'
import project7 from '../../public/project-7.png'
import project8 from '../../public/project-8.png'
import project9 from '../../public/project-9.png'
import project10 from '../../public/project-10.png'
import project11 from '../../public/project-11.png'
import project12 from '../../public/project-12.png'
import project13 from '../../public/project-13.png'
// import project14 from '../../public/project-14.png'
// import project15 from '../../public/project-15.png'

const Projects = () => {
  return (
    <div className='space-y-5 pt-10'>
      <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl text-center'>
        <span className='bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent'>My Projects</span>
      </h1>
      <h3 className='font-semibold text-gray-500 text-xl text-center'>
        I've built a wide range of projects, from simple websites to complex web and mobile apps. Here are some of my standout projects:
      </h3>
      <div className='flex flex-col items-center justify-center space-y-5'>
        <div className="sm:flex gap-5 space-y-5 sm:space-y-0">
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <img src={project1} className='w-[300px] rounded-md' alt="CGPA Calculator Android App" />
            <h3 className="text-lg font-bold">CGPA Calculator Android App</h3>
            <p className='text-xs text-gray-400 font-medium max-w-60'>
              Developed and published a CGPA Calculator on the Google Play Store, enabling students to calculate their grades efficiently.
            </p>
          </div>
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <img src={project2} className='w-[300px] rounded-md' alt="Online Learning Platform" />
            <h3 className="text-lg font-bold">Online Learning Platform</h3>
            <p className='text-xs text-gray-400 font-medium max-w-60'>
              Created an online platform for beginner coding, endorsed by Former Minister Ahmed Deverkovil, to provide interactive learning experiences.
            </p>
          </div>
        </div>
        <div className="sm:flex gap-5 space-y-5 sm:space-y-0">
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <img src={project3} className='w-[300px] rounded-md' alt="Remote Sensing Satellite & GIS Analysis Tool" />
            <h3 className="text-lg font-bold">Remote Sensing Satellite & GIS Analysis Tool</h3>
            <p className='text-xs text-gray-400 font-medium max-w-60'>
              Developed a tool that analyzes satellite data for GIS applications, endorsed by ISRO Scientist Dr. Abdul Salam.
            </p>
          </div>
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <img src={project4} className='w-[300px] rounded-md' alt="Freelance Projects" />
            <h3 className="text-lg font-bold">Attendace management system</h3>
            <p className='text-xs text-gray-400 font-medium max-w-60'>
              The attendance system for 'Kunnamangalam Govt Higher Secondary School' lets teachers manage profiles, create classes, and add students with full details. They mark absentees by period, and the list is sent to the class teacher's WhatsApp. An attendance chart allows toggling by date and period to view or edit attendance, ensuring accurate tracking.
            </p>
          </div>
        </div>
        <div className="sm:flex gap-5 space-y-5 sm:space-y-0">
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <img src={project5} className='w-[300px] rounded-md' alt="Remote Sensing Satellite & GIS Analysis Tool" />
            <h3 className="text-lg font-bold">Car washing agency app</h3>
            <p className='text-xs text-gray-400 font-medium max-w-60'>
              The car washing agency app for the UAE enables employees to log in using their employee ID and efficiently manage car washing tasks. Employees can enter a new car's plate number and select the car type, such as SUV or sedan. Once submitted, the data is seamlessly stored in Firebase and automatically updated in Google Sheets, ensuring accurate record-keeping and streamlined operations.
            </p>
          </div>
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <img src={project6} className='w-[300px] rounded-md' alt="Freelance Projects" />
            <h3 className="text-lg font-bold">AI-powered chatbot</h3>
            <p className='text-xs text-gray-400 font-medium max-w-60'>
              Developed an AI-powered chatbot using OpenAI's GPT-3 and LangChain to enhance website interactions. This chatbot efficiently handles customer inquiries, providing personalized responses and assisting with navigation. Features include natural language processing, customizable dialog flow, and multi-channel integration. An analytics dashboard tracks user interactions, offering insights for continuous improvement, showcasing my expertise in AI and user experience enhancement.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="sm:flex gap-5 space-y-5 sm:space-y-0">
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <img src={project7} className='w-[300px] rounded-md' alt="Remote Sensing Satellite & GIS Analysis Tool" />
            <h3 className="text-lg font-bold">E - commerce Web App</h3>
            <p className='text-xs text-gray-400 font-medium max-w-60'>
              Developed a fully functional e-commerce mobile app using React Native and Firebase. The app features product listings, cart management, and secure payment integration, providing a seamless shopping experience. User authentication ensures personalized access, while real-time inventory updates enhance user engagement. This project showcases my ability to create intuitive, high-performance applications that meet the demands of modern e-commerce.
            </p>
          </div>
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <img src={project8} className='w-[300px] rounded-md' alt="Freelance Projects" />
            <h3 className="text-lg font-bold">Weather forecast web app</h3>
            <p className='text-xs text-gray-400 font-medium max-w-60'>
              Created a real-time weather forecast web app using React.js and Node.js. The app provides users with up-to-date weather updates, interactive maps, and detailed forecasts based on their location. Leveraging APIs for data retrieval, it offers features like hourly and daily forecasts, alerts for severe weather, and a user-friendly interface. This project highlights my skills in building responsive, data-driven applications that enhance user experience through real-time information.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="sm:flex gap-5 space-y-5 sm:space-y-0">
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <img src={project9} className='w-[300px] rounded-md' alt="Remote Sensing Satellite & GIS Analysis Tool" />
            <h3 className="text-lg font-bold">AI-Based Image Classification Tool</h3>
            <p className='text-xs text-gray-400 font-medium max-w-60'>
              Developed an AI-based image classification tool using TensorFlow that accurately identifies objects in images. This tool is designed for industries like agriculture and healthcare, enabling users to analyze and categorize visual data efficiently. It features a user-friendly interface for uploading images, instant results display, and the ability to train on custom datasets. This project showcases my expertise in machine learning and application development for practical, real-world solutions.
            </p>
          </div>
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <img src={project10} className='w-[300px] rounded-md' alt="Freelance Projects" />
            <h3 className="text-lg font-bold">Expense Management Web App</h3>
            <p className='text-xs text-gray-400 font-medium max-w-60'>
              Developed an expense management web app using React and Node.js that helps users track their income and expenses. The app allows users to categorize expenditures, set budgets, and visualize spending through dynamic charts and graphs. With features like user authentication and real-time updates, it ensures secure and personalized financial management. This project highlights my skills in creating user-centric applications that promote financial awareness and planning.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="sm:flex gap-5 space-y-5 sm:space-y-0">
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <img src={project11} className='w-[300px] rounded-md' alt="Remote Sensing Satellite & GIS Analysis Tool" />
            <h3 className="text-lg font-bold">Personalized Learning Assistant</h3>
            <p className='text-xs text-gray-400 font-medium max-w-60'>
            Develop an AI-driven platform that offers customized learning experiences for users. Using GPT-3, the assistant adapts educational content based on individual learning styles, performance, and preferences. LangChain manages the dynamic generation of study materials, quizzes, and practice exercises. The assistant can track progress, suggest topics, and provide explanations, making it ideal for students seeking tailored guidance. This project demonstrates expertise in AI, NLP, and personalized content delivery, enhancing user engagement in educational journeys.
            </p>
          </div>
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <img src={project12} className='w-[300px] rounded-md' alt="Freelance Projects" />
            <h3 className="text-lg font-bold">Expense Management Web App</h3>
            <p className='text-xs text-gray-400 font-medium max-w-60'>
            Create an AI-powered tool that extracts, summarizes, and analyzes key information from documents such as PDFs, Word files, or scanned images. Using GPT-3, the tool provides concise summaries, identifies critical insights, and answers user-specific queries about the document. LangChain manages complex workflows, allowing for efficient data extraction, customized summarization, and interaction with the document's content. This project showcases advanced NLP capabilities and demonstrates practical AI applications for businesses and researchers, enhancing productivity and data comprehension.
            </p>
          </div>
        </div>
        {/*  */}
        <div className="sm:flex gap-5 space-y-5 sm:space-y-0">
          <div className="flex flex-col items-baseline text-left gap-2 max-w-[300px] border rounded-lg p-5 hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1">
            <img src={project13} className='w-[300px] rounded-md' alt="Remote Sensing Satellite & GIS Analysis Tool" />
            <h3 className="text-lg font-bold">Black and White Photo to Color Photo AI</h3>
            <p className='text-xs text-gray-400 font-medium max-w-60'>
            Developed an AI model that converts black-and-white photos into vibrant, realistic color images. Utilizing a Convolutional Neural Network (CNN) trained on large datasets, the model learns to predict and apply colors based on the grayscale input. The project employs advanced architectures like U-Net or GANs (Generative Adversarial Networks) to achieve high-quality colorization. Users can upload black-and-white images, and the AI generates colorized versions in seconds. This project demonstrates expertise in computer vision, deep learning, and image processing, providing a visually impressive AI application.
            </p>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default Projects
