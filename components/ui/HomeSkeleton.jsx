import { Box, Skeleton } from '@mui/material';
import React from 'react'

export const HomeSkeleton = () => {
	const arr = Array.from({length: 6}, i => 1);

  return (<Box width={'100%'} display={'flex'} justifyContent={'space-between'} flexWrap={'wrap'}  >
	{arr.map((i, idx) =>  <div style={{width: 350}} key={idx}>
	    <Skeleton width={'100%'} height={270} />
		<Skeleton/>
		<Skeleton width={'20%'}/>
	</div>)}</Box>
  )
}

