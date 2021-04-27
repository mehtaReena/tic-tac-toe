export default function Square(props){
   return (
      <button className='square'  onClick={(e)=>props.clickHandler(props.index)}>{props.value}</button>       
       


   )

}