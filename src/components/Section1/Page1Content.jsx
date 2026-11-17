import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1Content = (props) => {
  return (
    <div className='px-18 py-3 h-[90vh] bg-gray-800 flex items-center gap-10 text-black'>
      <LeftContent />
      <RightContent users={props.users} />
    </div>
  )
}

export default Page1Content

