import React from 'react'
import { SupportUsLayout } from '@/components/pagesLayout/SupportUsLayout/SupportUsLayout'

const articleText =
  'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.'

export default function SupportUs() {
  return (
    <SupportUsLayout
      articleText={articleText}
      withForm
      title='Podaruj przedmiot'
      subtitle='Wesprzyj nas w naszej działalności'
    />
  )
}
