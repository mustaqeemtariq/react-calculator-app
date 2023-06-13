
interface ScreenProps {
    values: (string | number)[]
}

export const Screen = ({values}: ScreenProps) => {
  return (
    <div className='border border-black w-80 py-2 px-4 text-right mx-auto'>
        {values.length > 0 ? <span className='text-xl'>{values}</span> : <span className='opacity-0 text-xl'>0</span>}
    </div>
  )
}
