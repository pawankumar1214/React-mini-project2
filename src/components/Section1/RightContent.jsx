import RightCard from './RightCard'


const RightContent = (props) => {
  return (
    <div id='right' className='flex flex-nowrap overflow-auto gap-5 h-150 p-4 w-2/3 rounded-4xl bg-white'>
      {props.users.map(function(elem, idx){
        return <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag} />
      })}
    </div>
  )
}

export default RightContent
