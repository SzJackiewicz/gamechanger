import Link from 'next/link'

function Breadcrumb({ title }: { title: string }) {
  return (
    <ul className='breadcrumb'>
      <li>
        <Link
          className='home'
          href='/'
        >
          Home
        </Link>
      </li>
      <li>
        <Link href='/aktualnosci'>Aktualności</Link>
      </li>
      <li>
        <span>{title}</span>
      </li>
    </ul>
  )
}
export default Breadcrumb
