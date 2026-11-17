import RightCardContent from './RightCardContent'

const RightCard = (props) => {
    return (
        <div className='relative h-full w-80 overflow-hidden shrink-0 rounded-4xl'>
            <img className='h-full w-full object-cover' src={props.img} alt="Image" />
            <RightCardContent id={props.id} tag={props.tag} />
        </div>
    )
}

export default RightCard





