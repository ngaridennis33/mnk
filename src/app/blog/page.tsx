import Featured from '@/components/featured/Featured'
import DefaultLayout from '@/components/layout/DefaultLayout'
import ListPost from '@/components/listPost/ListPost'
import React from 'react'

const page = () => {
  return (
    <DefaultLayout>
      <Featured/>
      <ListPost/>
    </DefaultLayout>
  )
}

export default page