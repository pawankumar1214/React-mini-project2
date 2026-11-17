import { ArrowRight } from 'lucide-react'

const RightCardContent = (props) => {
    return (

        <div className='absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between'>
            <h2 className='bg-white text-xl font-semibold h-10 w-10 rounded-full flex items-center justify-center'>{props.id+1}</h2>
            <div>
                <p className='text-lg text-shadow-2xs font-semibold leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dicta libero veniam natus, harum adipisci.</p>
                <div className='flex justify-center items-center'>
                    <button className='bg-blue-300 text-white font-semibold px-7 py-2 rounded-full'>{props.tag}</button>
                    {/* <button className='bg-blue-300 text-white font-semibold px-3 py-2 rounded-full'><ArrowRight /></button> */}
                </div>
            </div>
        </div>

    )
}

export default RightCardContent