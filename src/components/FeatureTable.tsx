import React from 'react'
import { MDXProvider } from '@mdx-js/react'

export interface FeatureTableColumnProps {
  header: string
}

export const FeatureTableColumn: React.FC<FeatureTableColumnProps> = ({
  header,
  children,
}) => (
  <div className='flex-grow flex-shrink my-6 w-auto md:w-0 md:border-l md:border-r border-gray-300'>
    <div className='bg-gradient-foxtrot text-white font-bold text-center p-2'>
      {header}
    </div>
    <div className='p-2'>
      <MDXProvider>{children}</MDXProvider>
    </div>
  </div>
)

// export interface FeatureTableProps {
//   columns: Array<{
//     header: string
//     body: string
//   }>
// }

export const FeatureTable: React.FC<{}> = ({ children }) => (
  <div className='block md:flex my-8 mb-16'>{children}</div>
)

export default FeatureTable
