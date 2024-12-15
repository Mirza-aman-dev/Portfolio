// images
import logo1 from '../../public/1.png'
import logo2 from '../../public/2.png'
import logo3 from '../../public/3.png'
import logo4 from '../../public/4.png'
import logo5 from '../../public/5.png'

const Experience = () => {
  return (
    <div className='space-y-3'>
      <h2 className='text-xl font-bold'>Work Experience</h2>

      <div className='flex items-center gap-5'>
        <img src={logo1} alt="" className='w-14 border rounded-xl'/>

        <div className='flex items-center justify-between flex-1'>
          <div className='flex flex-col'>
            <h3>Company 1</h3>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
